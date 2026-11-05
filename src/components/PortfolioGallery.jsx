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
    <section id="portfolio" className="py-20 sm:py-28 bg-stone-50 relative border-b border-stone-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl 2xl:max-w-5xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold mb-3.5 shadow-2xs">
            <Camera className="w-3.5 h-3.5 text-rose-600" />
            <span>Showcase Gallery</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-3">
            Recent Work Done in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600">
              Kadapa
            </span>
          </h2>

          <p className="font-anek text-lg sm:text-xl font-bold text-rose-700 mb-3">
            కడప వ్యాపారాలు & ఈవెంట్ల కోసం చేసిన ప్రింటింగ్ ప్రాజెక్ట్‌లు
          </p>

          <p className="font-sans text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Take a look at real printing, signage installations, and personalized gifts crafted for businesses, events, and families across Kadapa.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none px-2 max-w-full">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 min-h-[42px] ${
                activeFilter === f.id
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                  : 'bg-white text-zinc-700 hover:text-zinc-950 hover:bg-stone-100 border border-stone-200 shadow-2xs'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="atelier-card rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-atelier-sm hover:shadow-atelier-md transition-all duration-300 group cursor-pointer flex flex-col hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/95 rounded-full text-zinc-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5 text-rose-600" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg bg-white/95 text-zinc-900 border border-stone-200 shadow-2xs backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <h3 className="font-outfit text-base font-extrabold text-zinc-900 mb-2 group-hover:text-rose-600 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-600 line-clamp-2 leading-relaxed mb-3 font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-stone-100">
                  {item.tags.map(t => (
                    <span key={t} className="text-[10px] font-mono font-semibold text-zinc-500 bg-stone-100 px-2 py-0.5 rounded">
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
            className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-sm p-4 flex items-center justify-center animate-fadeIn"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="bg-white border border-stone-200 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-10 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-zinc-900/70 text-white hover:bg-zinc-900 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[60vh] w-full overflow-hidden bg-stone-100 flex items-center justify-center">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
                    {activeModalItem.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-zinc-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{activeModalItem.location}</span>
                  </div>
                </div>

                <h3 className="font-outfit text-xl font-extrabold text-zinc-900 mb-2">
                  {activeModalItem.title}
                </h3>
                <p className="font-sans text-sm text-zinc-600 mb-6 leading-relaxed font-medium">
                  {activeModalItem.description}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/917601043674?text=${encodeURIComponent(
                      `Hi City Grafix, I saw your portfolio project: *${activeModalItem.title}* on your website. I want a similar design/print!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/30 min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire About Similar Design</span>
                  </a>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="px-5 py-3 rounded-xl text-sm font-bold text-zinc-700 bg-stone-100 hover:bg-stone-200 transition-all min-h-[44px]"
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
