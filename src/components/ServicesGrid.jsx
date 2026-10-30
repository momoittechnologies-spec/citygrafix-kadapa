import React, { useState } from 'react';
import { SERVICES_CATEGORIES, SERVICES_LIST } from '../data/servicesData';
import { Sparkles, Clock, CheckCircle2, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function ServicesGrid({ onSelectServiceForCalculator }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(item => item.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Our Printing & Branding{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-amber-300 to-cyan-400">
              Services
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From monumental outdoor hoardings to delicate customized photo gifts. High precision, brilliant Japanese colors, and fast delivery in Kadapa.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {SERVICES_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-950/60 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col glass-card-hover group"
            >
              {/* Image Container with Badges */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-bold tracking-wide rounded-lg bg-slate-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md shadow-md">
                    {service.badge}
                  </span>
                </div>

                {/* Turnaround Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                  <Clock className="w-3 h-3" />
                  <span>{service.turnaround}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-pink-400 block mb-2">
                    {service.teluguTitle}
                  </span>
                  <p className="text-xs text-slate-300 font-medium mb-3 italic">
                    "{service.tagline}"
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Bullet Features */}
                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                  <a
                    href={`https://wa.me/917601043674?text=${encodeURIComponent(
                      `Hi City Grafix, I'm interested in *${service.title}* (${service.teluguTitle}). Please share details and pricing.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600/90 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-950/40"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire WhatsApp</span>
                  </a>

                  <a
                    href="#calculator"
                    onClick={() => onSelectServiceForCalculator && onSelectServiceForCalculator(service.id)}
                    className="p-2.5 rounded-xl text-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 transition-all"
                    title="Estimate in Calculator"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
