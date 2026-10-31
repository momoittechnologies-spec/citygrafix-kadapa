import React, { useState } from 'react';
import {
  X,
  UploadCloud,
  Image as ImageIcon,
  Loader2,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Trash2,
  Sliders,
  HardDrive,
  Info,
} from 'lucide-react';
import { addPhotosToEvent } from '../services/galleryStorage';
import {
  processImageBatch,
  OPTIMIZATION_PROFILES,
  formatBytes,
} from '../services/imageOptimizer';

export default function UploadPhotosModal({ event, isOpen, onClose, onUploaded }) {
  const [selectedCategory, setSelectedCategory] = useState(event?.categories?.[1] || 'Wedding Ceremony');
  const [photoTitle, setPhotoTitle] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('studio-web');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processState, setProcessState] = useState({
    index: 0,
    total: 0,
    percent: 0,
    fileName: '',
    status: 'idle',
  });
  const [stagedPhotos, setStagedPhotos] = useState([]);

  if (!isOpen || !event) return null;

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setIsProcessing(true);
    setProcessState({
      index: 0,
      total: files.length,
      percent: 0,
      fileName: files[0].name,
      status: 'optimizing',
    });

    try {
      const results = await processImageBatch(
        files,
        selectedProfile,
        (progress) => {
          setProcessState(progress);
        }
      );

      const formattedPhotos = results.map((res, idx) => ({
        id: 'p-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6) + '-' + idx,
        title: photoTitle || res.originalName.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' '),
        category: selectedCategory,
        url: res.url,
        thumbUrl: res.thumbUrl,
        width: res.width,
        height: res.height,
        originalSize: res.originalSize,
        optimizedSize: res.optimizedSize,
        formattedOriginalSize: res.formattedOriginalSize,
        formattedOptimizedSize: res.formattedOptimizedSize,
        savingsPercent: res.savingsPercent,
      }));

      setStagedPhotos((prev) => [...prev, ...formattedPhotos]);
    } catch (err) {
      console.error('[UploadPhotosModal] Batch processing failed:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemoveStaged = (id) => {
    setStagedPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSaveToEvent = () => {
    if (stagedPhotos.length === 0) return;
    const updated = addPhotosToEvent(event.id, stagedPhotos);
    onUploaded(updated);
    setStagedPhotos([]);
    onClose();
  };

  // Cumulative memory calculations
  const totalOriginalBytes = stagedPhotos.reduce((sum, p) => sum + (p.originalSize || 0), 0);
  const totalOptimizedBytes = stagedPhotos.reduce((sum, p) => sum + (p.optimizedSize || 0), 0);
  const totalSavingsBytes = Math.max(0, totalOriginalBytes - totalOptimizedBytes);
  const totalSavingsPercent = totalOriginalBytes > 0
    ? Math.round((totalSavingsBytes / totalOriginalBytes) * 100)
    : 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-5 sm:p-8 text-white shadow-2xl animate-fadeIn my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                Upload & Optimize Photographs
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black tracking-wide uppercase bg-sky-500/20 text-sky-300 border border-sky-500/30">
                WebP + Mipmap
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Target Gallery: <strong className="text-sky-400">{event.title}</strong>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-4 pt-4 overflow-y-auto pr-1 flex-1">
          {/* Metadata Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Assign Category / Ceremony *
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 focus:border-sky-500 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none font-semibold transition-colors"
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
                Batch Title Tag (Optional)
              </label>
              <input
                type="text"
                placeholder="Defaults to image file name"
                value={photoTitle}
                onChange={(e) => setPhotoTitle(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 focus:border-sky-500 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Compression Profile Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-sky-400" />
                <span>Memory Optimization Profile</span>
              </label>
              <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Visual Loss</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {Object.values(OPTIMIZATION_PROFILES).map((prof) => {
                const isSelected = selectedProfile === prof.id;
                return (
                  <button
                    key={prof.id}
                    type="button"
                    onClick={() => setSelectedProfile(prof.id)}
                    className={`text-left p-3 rounded-2xl border transition-all relative ${
                      isSelected
                        ? 'bg-sky-500/10 border-sky-500 text-white shadow-md shadow-sky-500/10 ring-1 ring-sky-500/30'
                        : 'bg-slate-800/40 border-slate-700 hover:border-slate-600 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">{prof.name}</span>
                      <span
                        className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider ${
                          isSelected
                            ? 'bg-sky-500 text-white'
                            : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {prof.badge}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      {prof.maxWidth}px • {Math.round(prof.quality * 100)}% WebP
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Drag & Drop Upload Zone */}
          <label className="border-2 border-dashed border-slate-700 hover:border-sky-500 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center cursor-pointer bg-slate-800/30 hover:bg-slate-800/60 transition-all text-center group">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-6 h-6" />
            </div>
            <p className="text-sm font-bold text-white mb-0.5">
              Select or Drop High-Res Photographs
            </p>
            <p className="text-xs text-slate-400 max-w-sm">
              Supports Canon, Sony, Nikon, iPhone & Android camera originals. Automatically compressed to lightweight WebP with stepped downsampling.
            </p>
            <input
              type="file"
              multiple
              accept="image/*"
              disabled={isProcessing}
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* Active Processing Indicator */}
          {isProcessing && (
            <div className="p-4 rounded-2xl bg-slate-800/90 border border-sky-500/40 space-y-2.5 animate-fadeIn">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-sky-400 animate-spin" />
                  <span className="font-bold text-white">
                    Optimizing Photo {processState.index + 1} of {processState.total}
                  </span>
                </div>
                <span className="font-extrabold text-sky-400">{processState.percent}%</span>
              </div>

              {/* Progress Track */}
              <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-700">
                <div
                  className="bg-gradient-to-r from-sky-500 to-emerald-400 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${processState.percent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="truncate max-w-[260px] font-mono">{processState.fileName}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Stepped Mipmap & WebP Quantization</span>
                </span>
              </div>
            </div>
          )}

          {/* Real-Time Memory Savings Dashboard */}
          {stagedPhotos.length > 0 && (
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-800/60 to-slate-900 border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-emerald-300">
                      Memory Optimization Analytics
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {stagedPhotos.length} {stagedPhotos.length === 1 ? 'photo' : 'photos'} ready to save to database
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStagedPhotos([])}
                  className="text-xs text-rose-400 hover:text-rose-300 font-semibold underline"
                >
                  Clear All
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Original Size</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-200">
                    {formatBytes(totalOriginalBytes)}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <span className="text-[10px] text-sky-400 block font-bold uppercase">Optimized WebP</span>
                  <span className="text-xs sm:text-sm font-extrabold text-sky-300">
                    {formatBytes(totalOptimizedBytes)}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <span className="text-[10px] text-emerald-400 block font-bold uppercase">Memory Saved</span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-300">
                    {totalSavingsPercent}% (-{formatBytes(totalSavingsBytes)})
                  </span>
                </div>
              </div>

              {/* Storage Safety Info */}
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1">
                <HardDrive className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>
                  Backed by <strong>High-Capacity IndexedDB</strong>. Unlimited by standard 5MB browser quotas.
                </span>
              </div>
            </div>
          )}

          {/* Staged Photos Preview Grid */}
          {stagedPhotos.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300">
                Staged Photographs ({stagedPhotos.length})
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-h-48 overflow-y-auto p-1 bg-slate-950/40 rounded-2xl border border-slate-800">
                {stagedPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="group relative rounded-xl overflow-hidden bg-slate-800 border border-slate-700 aspect-video flex flex-col justify-end"
                  >
                    <img
                      src={photo.thumbUrl || photo.url}
                      alt={photo.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    <div className="relative z-10 p-1.5 flex items-center justify-between text-[10px]">
                      <span className="truncate max-w-[70px] text-white font-medium">
                        {photo.title}
                      </span>
                      <span className="bg-emerald-500/80 text-white font-extrabold text-[9px] px-1 rounded">
                        -{photo.savingsPercent}%
                      </span>
                    </div>

                    {/* Delete button */}
                    <button
                      type="button"
                      onClick={() => handleRemoveStaged(photo.id)}
                      className="absolute top-1 right-1 p-1 rounded-md bg-black/60 hover:bg-rose-600 text-white transition-all opacity-0 group-hover:opacity-100"
                      title="Remove from batch"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 mt-3 flex items-center justify-between border-t border-slate-800 shrink-0">
          <div className="text-xs text-slate-400">
            {stagedPhotos.length > 0 ? (
              <span>
                <strong className="text-white">{stagedPhotos.length}</strong> photos ready to publish
              </span>
            ) : (
              <span>Select files to begin optimization</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>

            <button
              type="button"
              disabled={stagedPhotos.length === 0 || isProcessing}
              onClick={handleSaveToEvent}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 transition-all shadow-md shadow-emerald-950/40"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                Save {stagedPhotos.length > 0 ? `${stagedPhotos.length} Photos` : 'to Gallery'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
