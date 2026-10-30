import React, { useState } from 'react';
import { Heart, Download, MessageCircle, Check, Loader2, Sparkles } from 'lucide-react';
import JSZip from 'jszip';
import confetti from 'canvas-confetti';

export default function FavoritesTray({
  event,
  favoriteIds,
  photos,
  onClearFavorites,
}) {
  const [downloadingZip, setDownloadingZip] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  if (!favoriteIds || favoriteIds.length === 0) return null;

  const selectedPhotos = photos.filter((p) => favoriteIds.includes(p.id));

  // WhatsApp Message with selected album photo list
  const handleSendToWhatsApp = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.85 },
    });

    const photoTitles = selectedPhotos
      .map((p, idx) => `${idx + 1}. ${p.title || 'Photo'} (${p.category || 'General'})`)
      .join('\n');

    const message =
      `*❤️ Final Wedding Album Selection - ${event.title}*\n\n` +
      `Hello City Grafix,\n` +
      `We have reviewed our event gallery and selected *${selectedPhotos.length} photos* for our album design & print:\n\n` +
      `${photoTitles}\n\n` +
      `Please let us know the album layout and preview schedule!`;

    const url = `https://wa.me/917601043674?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Client-side ZIP creation using JSZip (Zero server compute!)
  const handleDownloadZip = async () => {
    try {
      setDownloadingZip(true);
      setDownloadProgress(10);
      const zip = new JSZip();
      const folder = zip.folder(`${event.slug}-favorites`);

      const total = selectedPhotos.length;
      for (let i = 0; i < total; i++) {
        const photo = selectedPhotos[i];
        try {
          const resp = await fetch(photo.url);
          const blob = await resp.blob();
          const ext = photo.url.includes('.webp') ? 'webp' : 'jpg';
          folder.file(`${i + 1}-${(photo.title || 'photo').replace(/\s+/g, '_')}.${ext}`, blob);
        } catch (fetchErr) {
          console.warn('Could not fetch photo for ZIP:', photo.url, fetchErr);
        }
        setDownloadProgress(Math.round(((i + 1) / total) * 85) + 10);
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(content);
      a.download = `${event.slug}-selected-${selectedPhotos.length}-photos.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      confetti({ particleCount: 50 });
    } catch (err) {
      console.error('Failed to generate ZIP:', err);
      alert('Could not generate ZIP automatically. Please download individual photos.');
    } finally {
      setDownloadingZip(false);
      setDownloadProgress(0);
    }
  };

  return (
    <aside
      aria-label="Album Selection Drawer"
      className="fixed bottom-4 left-4 right-4 z-40 max-w-2xl mx-auto bg-slate-900/95 backdrop-blur-xl border border-rose-500/30 text-white rounded-2xl p-3.5 sm:p-4 shadow-2xl shadow-rose-950/40 animate-slideUp"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Count Badge */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-rose-600/30 animate-pulse">
            <Heart className="w-4 h-4 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-extrabold text-white">
                {selectedPhotos.length} {selectedPhotos.length === 1 ? 'Photo' : 'Photos'} Selected
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Album Proofing
              </span>
            </div>
            <button
              onClick={onClearFavorites}
              className="text-[11px] text-slate-400 hover:text-white underline text-left block"
            >
              Clear selection
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* Download Selected ZIP */}
          <button
            onClick={handleDownloadZip}
            disabled={downloadingZip}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold transition-all disabled:opacity-50"
            title="Download all selected photos into a ZIP file"
          >
            {downloadingZip ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" />
                <span>{downloadProgress}%</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-sky-400" />
                <span>ZIP ({selectedPhotos.length})</span>
              </>
            )}
          </button>

          {/* Submit Selection via WhatsApp */}
          <button
            onClick={handleSendToWhatsApp}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-xs font-bold shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Send Album Proof</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
