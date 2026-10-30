import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { Camera, MapPin, ZoomIn, X, MessageCircle, Tag } from 'lucide-react';

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'flex', label: 'Flex & Banners' },
    { id: 'boards', label: '3D Glow Boards' },
    { id: 'stickers', label: 'Glass & Vinyl' },
    { id: 'gifts', label: 'Custom Gifts' },
    { id: 'offset', label: 'Visiting Cards' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#0a0f1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Showcase Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Recent Work Done in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400">
              Kadapa
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Take a look at real printing, signage installations, and personalized gifts crafted for businesses, events, and families across Kadapa.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === f.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-950/50 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 group cursor-pointer glass-card-hover flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-cyan-500/90 text-slate-950 shadow-lg scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors line-clamp-1 mb-1">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-2">
                    <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Zoom Modal */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="bg-slate-900 border border-white/20 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[60vh] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {activeModalItem.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>{activeModalItem.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {activeModalItem.title}
                </h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {activeModalItem.description}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/917601043674?text=${encodeURIComponent(
                      `Hi City Grafix, I saw your portfolio project: *${activeModalItem.title}* on your website. I want a similar design/print!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-950/50"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire About Similar Design</span>
                  </a>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
