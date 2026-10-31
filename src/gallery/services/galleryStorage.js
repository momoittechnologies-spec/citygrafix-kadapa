// Gallery Storage & State Service
// Powered by High-Capacity IndexedDB for large photo sets + LocalStorage fallback
// Includes Cloudflare R2 / Supabase SQL schema integration reference

import { DEFAULT_EVENTS } from '../data/defaultEvents';
import {
  saveEventsToIndexedDB,
  loadEventsFromIndexedDB,
  getStorageEstimate,
} from './indexedDbStorage';

const STORAGE_KEY = 'citygrafix_gallery_events_v1';

// In-memory cache for ultra-fast, zero-latency synchronous access
let memoryCache = null;
const listeners = new Set();

function notifyListeners() {
  listeners.forEach((fn) => {
    try {
      fn(memoryCache);
    } catch (e) {
      console.warn('[GalleryStorage] Listener notification error:', e);
    }
  });
}

export function subscribeToStorage(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

// Initial synchronous hydration from localStorage
function initMemoryCache() {
  if (memoryCache) return memoryCache;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      memoryCache = JSON.parse(raw);
    } else {
      memoryCache = DEFAULT_EVENTS;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_EVENTS));
      } catch {
        // Ignore quota on init
      }
    }
  } catch (err) {
    console.error('[GalleryStorage] Error loading from localStorage:', err);
    memoryCache = DEFAULT_EVENTS;
  }

  // Asynchronously hydrate from IndexedDB to load full-capacity records
  if (typeof window !== 'undefined') {
    loadEventsFromIndexedDB()
      .then((idbEvents) => {
        if (idbEvents && idbEvents.length > 0) {
          memoryCache = idbEvents;
          notifyListeners();
        } else if (memoryCache) {
          // Seed IndexedDB with initial events
          saveEventsToIndexedDB(memoryCache);
        }
      })
      .catch((err) => {
        console.warn('[GalleryStorage] IndexedDB hydration note:', err);
      });
  }

  return memoryCache;
}

export { getStorageEstimate };

export const SQL_SCHEMA_REFERENCE = `
-- Run this in your Supabase SQL Editor when ready for multi-device cloud sync:
CREATE TABLE events (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  client_name TEXT NOT NULL,
  client_phone TEXT,
  event_type TEXT DEFAULT 'Wedding',
  event_date DATE NOT NULL,
  cover_image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL,
  pin_code TEXT DEFAULT '',
  watermark BOOLEAN DEFAULT FALSE,
  categories JSONB DEFAULT '["All"]'::jsonb
);

CREATE TABLE photos (
  id TEXT PRIMARY KEY,
  event_id TEXT REFERENCES events(id) ON DELETE CASCADE,
  title TEXT,
  category TEXT DEFAULT 'All',
  url TEXT NOT NULL,
  thumb_url TEXT NOT NULL,
  width INTEGER DEFAULT 1600,
  height INTEGER DEFAULT 1067,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
`;

export function getStoredEvents() {
  return initMemoryCache();
}

export function saveEvents(events) {
  memoryCache = events;
  notifyListeners();

  // 1. Primary High-Capacity Store: IndexedDB (Gigabytes quota)
  saveEventsToIndexedDB(events).catch((err) => {
    console.error('[GalleryStorage] Failed saving to IndexedDB:', err);
  });

  // 2. Secondary Fast Store: LocalStorage with QuotaExceeded protection
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch (quotaErr) {
    console.warn('[GalleryStorage] LocalStorage quota reached. High-res images safely stored in IndexedDB.');
    // Save lightweight metadata-only version to localStorage if quota is tight
    try {
      const lightweight = events.map((e) => ({
        ...e,
        photos: (e.photos || []).map((p) => ({
          id: p.id,
          title: p.title,
          category: p.category,
          thumbUrl: p.thumbUrl, // keep small micro-thumb
          url: p.thumbUrl, // fallback pointer
          width: p.width,
          height: p.height,
        })),
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lightweight));
    } catch {
      // If even lightweight exceeds, IndexedDB holds the authoritative data
    }
  }
}

export function getEventBySlug(slug) {
  const events = getStoredEvents();
  return events.find((e) => e.slug === slug || e.id === slug) || null;
}

export function createEvent(newEventData) {
  const events = getStoredEvents();
  const slug = (newEventData.title || 'event')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '') + '-' + Math.random().toString(36).substring(2, 6);

  const event = {
    id: 'evt-' + Date.now(),
    slug,
    title: newEventData.title || 'Untitled Event',
    clientName: newEventData.clientName || 'Valued Client',
    clientPhone: newEventData.clientPhone || '',
    eventType: newEventData.eventType || 'Wedding',
    eventDate: newEventData.eventDate || new Date().toISOString().split('T')[0],
    coverImage: newEventData.coverImage || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    createdAt: new Date().toISOString(),
    expiresAt: newEventData.expiresAt,
    pinCode: newEventData.pinCode || '',
    watermark: !!newEventData.watermark,
    categories: ['All', ...(newEventData.customCategories || ['Ceremony', 'Reception', 'Portraits'])],
    photos: newEventData.photos || [],
  };

  const updatedEvents = [event, ...events];
  saveEvents(updatedEvents);
  return event;
}

export function extendEventExpiry(eventId, additionalDays = 180) {
  const events = getStoredEvents();
  const index = events.findIndex((e) => e.id === eventId);
  if (index === -1) return null;

  const currentExpiry = new Date(events[index].expiresAt);
  const baseDate = currentExpiry > new Date() ? currentExpiry : new Date();
  baseDate.setDate(baseDate.getDate() + additionalDays);

  events[index].expiresAt = baseDate.toISOString();
  saveEvents([...events]);
  return events[index];
}

export function addPhotosToEvent(eventId, newPhotos) {
  const events = getStoredEvents();
  const index = events.findIndex((e) => e.id === eventId);
  if (index === -1) return null;

  events[index].photos = [...(events[index].photos || []), ...newPhotos];
  if (!events[index].coverImage && newPhotos[0]?.url) {
    events[index].coverImage = newPhotos[0].url;
  }
  saveEvents([...events]);
  return events[index];
}

export function deletePhotoFromEvent(eventId, photoId) {
  const events = getStoredEvents();
  const index = events.findIndex((e) => e.id === eventId);
  if (index === -1) return null;

  events[index].photos = events[index].photos.filter((p) => p.id !== photoId);
  saveEvents([...events]);
  return events[index];
}

export function deleteEvent(eventId) {
  const events = getStoredEvents().filter((e) => e.id !== eventId);
  saveEvents(events);
  return events;
}

export function checkExpiryStatus(expiresAt) {
  if (!expiresAt) return { isExpired: false, daysRemaining: 999 };
  const now = new Date();
  const expiry = new Date(expiresAt);
  const diffTime = expiry - now;
  const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return {
    isExpired: daysRemaining <= 0,
    daysRemaining: daysRemaining > 0 ? daysRemaining : 0,
    formattedDate: expiry.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
  };
}

export function getShareableGalleryUrl(slug) {
  const origin = window.location.origin;
  return `${origin}/#gallery/${slug}`;
}

export function generateWhatsAppShareText(event) {
  const url = getShareableGalleryUrl(event.slug);
  const expiry = checkExpiryStatus(event.expiresAt);

  return (
    `*📸 Your Official Event Photographs are Ready!*\n\n` +
    `Hello *${event.clientName}*,\n` +
    `We have curated and uploaded the high-resolution photographs for *${event.title}*.\n\n` +
    `👉 *View & Download Gallery:*\n${url}\n\n` +
    (event.pinCode ? `🔒 *Access PIN:* ${event.pinCode}\n\n` : '') +
    `⏳ *Gallery Validity:* Accessible until ${expiry.formattedDate}.\n` +
    `You can browse, heart your favorite pictures for your wedding album, and download high-res files directly to your phone.\n\n` +
    `— *City Grafix Photography Hub*, Kadapa`
  );
}
