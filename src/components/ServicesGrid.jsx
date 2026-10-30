import React, { useState } from 'react';
import { SERVICES_CATEGORIES, SERVICES_LIST } from '../data/servicesData';
import { Sparkles, Clock, CheckCircle2, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function ServicesGrid({ onSelectServiceForCalculator }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(item => item.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our Printing & Branding{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-amber-500 to-sky-600">
              Services
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From monumental outdoor hoardings to delicate customized photo gifts. High precision, brilliant Japanese colors, and fast delivery in Kadapa.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none px-2 max-w-full">
          {SERVICES_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md shadow-sky-600/25 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
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
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Image Container with Badges */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-extrabold tracking-wide rounded-lg bg-white/95 text-sky-800 border border-sky-300 shadow-sm backdrop-blur-sm">
                    {service.badge}
                  </span>
                </div>

                {/* Turnaround Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 text-[11px] font-bold text-emerald-800 border border-emerald-300 shadow-sm backdrop-blur-sm">
                  <Clock className="w-3 h-3 text-emerald-600" />
                  <span>{service.turnaround}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-rose-600 block mb-2">
                    {service.teluguTitle}
                  </span>
                  <p className="text-xs text-slate-700 font-semibold mb-3 italic">
                    "{service.tagline}"
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Bullet Features */}
                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={`https://wa.me/917601043674?text=${encodeURIComponent(
                      `Hi City Grafix, I'm interested in *${service.title}* (${service.teluguTitle}). Please share details and pricing.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire WhatsApp</span>
                  </a>

                  <a
                    href="#calculator"
                    onClick={() => onSelectServiceForCalculator && onSelectServiceForCalculator(service.id)}
                    className="p-2.5 rounded-xl text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all font-bold"
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
