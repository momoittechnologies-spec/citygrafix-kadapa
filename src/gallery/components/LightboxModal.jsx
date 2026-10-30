import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Heart, Share2 } from 'lucide-react';

export default function LightboxModal({
  photo,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  isFavorite,
  onToggleFavorite,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!photo) return null;

  const handleDownloadSingle = () => {
    const a = document.createElement('a');
    a.href = photo.url;
    a.download = `${photo.title || 'photo'}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between animate-fadeIn select-none">
      {/* Top Bar */}
      <div className="p-4 flex items-center justify-between text-white border-b border-white/10 bg-black/40">
        <div>
          <h4 className="text-sm sm:text-base font-bold tracking-tight truncate max-w-xs sm:max-w-md">
            {photo.title || 'Photograph'}
          </h4>
          <span className="text-xs text-slate-400 font-medium">
            {photo.category || 'General'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Favorite Toggle */}
          <button
            onClick={() => onToggleFavorite(photo.id)}
            className={`p-2.5 rounded-full transition-all ${
              isFavorite
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/40 scale-105'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            title={isFavorite ? 'Remove from Album Selection' : 'Heart for Wedding Album'}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* Download Photo */}
          <button
            onClick={handleDownloadSingle}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
            title="Download Full Resolution"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download</span>
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all ml-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Display */}
      <div className="flex-1 relative flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-3 sm:left-6 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all shadow-xl hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={photo.url}
          alt={photo.title || 'Event photo'}
          className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-200"
        />

        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-3 sm:right-6 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all shadow-xl hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Hint */}
      <div className="p-3 text-center text-xs text-slate-400 bg-black/40 border-t border-white/10">
        Tap arrows or swipe on mobile to navigate • High Resolution Master File
      </div>
    </div>
  );
}
