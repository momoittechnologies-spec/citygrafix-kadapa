// High-Capacity IndexedDB Engine for City Grafix Photography Hub
// Eliminates the 5MB localStorage quota limit, enabling photographers to store
// hundreds of high-resolution event photographs with gigabytes of local capacity.

const DB_NAME = 'CityGrafix_Photography_DB';
const DB_VERSION = 1;
const STORE_EVENTS = 'events';

let dbInstance = null;

/**
 * Initialize or retrieve the IndexedDB connection
 */
export function openGalleryDB() {
  if (dbInstance) return Promise.resolve(dbInstance);

  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      console.warn('[IndexedDB] indexedDB is not available in this environment. Falling back to localStorage.');
      resolve(null);
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_EVENTS)) {
        db.createObjectStore(STORE_EVENTS, { keyPath: 'id' });
      }
    };

    request.onsuccess = (event) => {
      dbInstance = event.target.result;
      resolve(dbInstance);
    };

    request.onerror = (event) => {
      console.error('[IndexedDB] Failed to open database:', event.target.error);
      resolve(null); // Graceful fallback
    };
  });
}

/**
 * Save all events into IndexedDB
 */
export async function saveEventsToIndexedDB(events) {
  try {
    const db = await openGalleryDB();
    if (!db) return false;

    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_EVENTS, 'readwrite');
      const store = tx.objectStore(STORE_EVENTS);

      // Clear existing records and rewrite current snapshot
      const clearReq = store.clear();
      clearReq.onsuccess = () => {
        for (const evt of events) {
          store.put(evt);
        }
      };

      tx.oncomplete = () => resolve(true);
      tx.onerror = (e) => {
        console.error('[IndexedDB] Transaction error saving events:', e.target.error);
        resolve(false);
      };
    });
  } catch (err) {
    console.error('[IndexedDB] saveEventsToIndexedDB exception:', err);
    return false;
  }
}

/**
 * Load all events from IndexedDB
 */
export async function loadEventsFromIndexedDB() {
  try {
    const db = await openGalleryDB();
    if (!db) return null;

    return new Promise((resolve) => {
      const tx = db.transaction(STORE_EVENTS, 'readonly');
      const store = tx.objectStore(STORE_EVENTS);
      const request = store.getAll();

      request.onsuccess = () => {
        const result = request.result;
        resolve(result && result.length > 0 ? result : null);
      };

      request.onerror = (e) => {
        console.error('[IndexedDB] Error loading events from store:', e.target.error);
        resolve(null);
      };
    });
  } catch (err) {
    console.error('[IndexedDB] loadEventsFromIndexedDB exception:', err);
    return null;
  }
}

/**
 * Get disk storage estimate (Used MB vs Quota GB)
 */
export async function getStorageEstimate() {
  if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.estimate) {
    try {
      const estimate = await navigator.storage.estimate();
      const usageMb = estimate.usage ? (estimate.usage / (1024 * 1024)).toFixed(1) : '0';
      const quotaGb = estimate.quota ? (estimate.quota / (1024 * 1024 * 1024)).toFixed(1) : 'Unlimited';
      return {
        usageMb,
        quotaGb,
        percentUsed: estimate.quota ? ((estimate.usage / estimate.quota) * 100).toFixed(2) : 0,
      };
    } catch {
      return { usageMb: '0', quotaGb: 'Unlimited', percentUsed: 0 };
    }
  }
  return { usageMb: '0', quotaGb: 'Unlimited', percentUsed: 0 };
}
