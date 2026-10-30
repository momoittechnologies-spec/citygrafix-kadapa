import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { Camera, MapPin, ZoomIn, X, MessageCircle } from 'lucide-react';

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
    <section id="portfolio" className="py-24 bg-slate-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-3 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>Showcase Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Recent Work Done in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
              Kadapa
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Take a look at real printing, signage installations, and personalized gifts crafted for businesses, events, and families across Kadapa.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none px-2 max-w-full">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                activeFilter === f.id
                  ? 'bg-amber-500 text-white font-extrabold shadow-md shadow-amber-500/30 scale-105'
                  : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200'
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
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300 group cursor-pointer flex flex-col hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/90 rounded-full text-slate-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg bg-white/95 text-slate-900 border border-slate-200 shadow-sm backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100">
                  {item.tags.map(t => (
                    <span key={t} className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center animate-fadeIn"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[60vh] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-amber-600 uppercase tracking-wider">
                    {activeModalItem.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{activeModalItem.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  {activeModalItem.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {activeModalItem.description}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/917601043674?text=${encodeURIComponent(
                      `Hi City Grafix, I saw your portfolio project: *${activeModalItem.title}* on your website. I want a similar design/print!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/30"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire About Similar Design</span>
                  </a>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="px-5 py-3 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
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
