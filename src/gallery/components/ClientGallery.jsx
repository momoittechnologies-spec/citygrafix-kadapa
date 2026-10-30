import React, { useState, useMemo } from 'react';
import {
  Heart,
  Download,
  Calendar,
  Clock,
  Share2,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  Maximize2,
  Check,
  Lock,
} from 'lucide-react';
import { checkExpiryStatus, generateWhatsAppShareText } from '../services/galleryStorage';
import LightboxModal from './LightboxModal';
import FavoritesTray from './FavoritesTray';
import GalleryExpiredView from './GalleryExpiredView';
import PinModal from './PinModal';

export default function ClientGallery({ event, onBackHome, onOpenAdmin }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [isPinUnlocked, setIsPinUnlocked] = useState(!event.pinCode);
  const [copiedLink, setCopiedLink] = useState(false);

  // Expiry calculation
  const expiry = useMemo(() => checkExpiryStatus(event.expiresAt), [event.expiresAt]);

  // If expired, render the graceful expiration page
  if (expiry.isExpired) {
    return (
      <GalleryExpiredView
        event={event}
        onBackHome={onBackHome}
        onOpenAdmin={onOpenAdmin}
      />
    );
  }

  // If PIN protected and not unlocked yet
  if (!isPinUnlocked) {
    return (
      <PinModal
        requiredPin={event.pinCode}
        onUnlock={() => setIsPinUnlocked(true)}
        onCancel={onBackHome}
      />
    );
  }

  // Filtered photos
  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'All') return event.photos || [];
    return (event.photos || []).filter((p) => p.category === selectedCategory);
  }, [event.photos, selectedCategory]);

  const handleToggleFavorite = (photoId) => {
    setFavoriteIds((prev) =>
      prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]
    );
  };

  const handleShareWhatsApp = () => {
    const text = generateWhatsAppShareText(event);
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-rose-500 selection:text-white pb-32">
      {/* Top Studio Bar */}
      <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-xl border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackHome}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">City Grafix Hub</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-black tracking-wider uppercase text-sky-400">
              City Grafix
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold border-l border-white/10 pl-2">
              Photography Client Portal
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onOpenAdmin}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors text-xs"
              title="Studio Admin Login"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Event Cover */}
      <div className="relative h-72 sm:h-96 w-full overflow-hidden">
        <img
          src={event.coverImage || event.photos?.[0]?.url}
          alt={event.title}
          className="w-full h-full object-cover brightness-50 scale-105 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8 sm:pb-12">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
              {event.eventType || 'Event Gallery'}
            </span>

            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              <span>{event.eventDate}</span>
            </span>

            {/* Expiry Pill */}
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Clock className="w-3.5 h-3.5" />
              <span>Active for {expiry.daysRemaining} more days</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-md">
            {event.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
            Dedicated client collection for <strong className="text-white">{event.clientName}</strong> •{' '}
            {event.photos?.length || 0} Photographs
          </p>
        </div>
      </div>

      {/* Category Tabs & Filter Bar */}
      <div className="sticky top-[53px] z-20 bg-slate-950/95 backdrop-blur-xl border-y border-white/10 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 shrink-0">
            {(event.categories || ['All']).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-950 shadow-md scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-400 shrink-0 hidden md:block">
            Showing <strong className="text-white">{filteredPhotos.length}</strong> of{' '}
            <strong className="text-white">{event.photos?.length || 0}</strong> photos
          </div>
        </div>
      </div>

      {/* Photo Masonry Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm font-semibold">No photographs uploaded for this category yet.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredPhotos.map((photo, index) => {
              const isFav = favoriteIds.includes(photo.id);
              return (
                <div
                  key={photo.id}
                  className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-slate-900 border border-white/5 shadow-md hover:shadow-2xl hover:border-white/20 transition-all duration-300"
                >
                  <img
                    src={photo.thumbUrl || photo.url}
                    alt={photo.title || 'Event photograph'}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    onClick={() => setActivePhotoIndex(index)}
                  />

                  {/* Dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

                  {/* Top-Right Favorite Heart */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleFavorite(photo.id);
                    }}
                    className={`absolute top-2.5 right-2.5 p-2 rounded-full transition-all duration-200 ${
                      isFav
                        ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/40 opacity-100'
                        : 'bg-black/40 text-white hover:bg-rose-600 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100'
                    }`}
                    title={isFav ? 'Remove from Album' : 'Heart for Wedding Album'}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                  </button>

                  {/* Bottom Info & Quick Fullscreen */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-between text-white">
                    <span className="text-xs font-bold truncate max-w-[70%]">
                      {photo.title || 'Photo'}
                    </span>

                    <button
                      onClick={() => setActivePhotoIndex(index)}
                      className="p-1.5 rounded-lg bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all"
                      title="View Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Floating Favorites Tray for Album Selection & Batch Download */}
      <FavoritesTray
        event={event}
        favoriteIds={favoriteIds}
        photos={event.photos || []}
        onClearFavorites={() => setFavoriteIds([])}
      />

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <LightboxModal
          photo={filteredPhotos[activePhotoIndex]}
          onClose={() => setActivePhotoIndex(null)}
          onPrev={() => setActivePhotoIndex((prev) => Math.max(0, prev - 1))}
          onNext={() => setActivePhotoIndex((prev) => Math.min(filteredPhotos.length - 1, prev + 1))}
          hasPrev={activePhotoIndex > 0}
          hasNext={activePhotoIndex < filteredPhotos.length - 1}
          isFavorite={favoriteIds.includes(filteredPhotos[activePhotoIndex]?.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </div>
  );
}
