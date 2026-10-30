import React, { useState } from 'react';
import { X, UploadCloud, Image as ImageIcon, Loader2, CheckCircle2, Tag } from 'lucide-react';
import { addPhotosToEvent } from '../services/galleryStorage';
import { processImageFile } from '../services/imageOptimizer';

export default function UploadPhotosModal({ event, isOpen, onClose, onUploaded }) {
  const [selectedCategory, setSelectedCategory] = useState(event?.categories?.[1] || 'Wedding Ceremony');
  const [photoTitle, setPhotoTitle] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [processedPhotos, setProcessedPhotos] = useState([]);

  if (!isOpen || !event) return null;

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setIsProcessing(true);
    setUploadProgress(0);
    const newPhotos = [];

    for (let i = 0; i < files.length; i++) {
      try {
        const result = await processImageFile(files[i]);
        newPhotos.push({
          id: 'p-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
          title: photoTitle || files[i].name.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' '),
          category: selectedCategory,
          url: result.url,
          thumbUrl: result.thumbUrl,
          width: result.width,
          height: result.height,
        });
      } catch (err) {
        console.warn('Error processing image:', files[i].name, err);
      }
      setUploadProgress(Math.round(((i + 1) / files.length) * 100));
    }

    setProcessedPhotos((prev) => [...prev, ...newPhotos]);
    setIsProcessing(false);
  };

  const handleSaveToEvent = () => {
    if (processedPhotos.length === 0) return;
    const updated = addPhotosToEvent(event.id, processedPhotos);
    onUploaded(updated);
    setProcessedPhotos([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-white shadow-2xl animate-fadeIn max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Upload Photographs
            </h3>
            <p className="text-xs text-slate-400">
              Adding to: <strong className="text-sky-400">{event.title}</strong>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Assign Category / Ceremony *
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none font-semibold"
              >
                {(event.categories || ['All', 'Ceremony', 'Reception']).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Batch Title (Optional)
              </label>
              <input
                type="text"
                placeholder="Defaults to filename"
                value={photoTitle}
                onChange={(e) => setPhotoTitle(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Drag & Drop Zone */}
          <label className="border-2 border-dashed border-slate-700 hover:border-sky-500 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer bg-slate-800/30 hover:bg-slate-800/60 transition-all text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-3">
              <UploadCloud className="w-6 h-6" />
            </div>
            <p className="text-sm font-bold text-white mb-1">
              Click to select or drag & drop photographs
            </p>
            <p className="text-xs text-slate-400">
              Supports JPEG, PNG, WebP • Auto-optimizes for mobile WhatsApp viewing
            </p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {isProcessing && (
            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-center">
              <Loader2 className="w-5 h-5 text-sky-400 animate-spin mx-auto mb-2" />
              <p className="text-xs text-slate-300 font-bold">
                Optimizing photos in browser... {uploadProgress}%
              </p>
            </div>
          )}

          {/* Staged photos count preview */}
          {processedPhotos.length > 0 && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>
                  <strong>{processedPhotos.length}</strong> photos ready to publish
                </span>
              </div>
              <button
                onClick={() => setProcessedPhotos([])}
                className="text-[11px] underline text-slate-400 hover:text-white"
              >
                Clear
              </button>
            </div>
          )}

          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={processedPhotos.length === 0}
              onClick={handleSaveToEvent}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 transition-all shadow-md"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save {processedPhotos.length} Photos to Gallery</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
