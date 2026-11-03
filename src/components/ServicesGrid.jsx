import React, { useState } from 'react';
import { SERVICES_CATEGORIES, SERVICES_LIST } from '../data/servicesData';
import { Sparkles, Clock, CheckCircle2, MessageCircle, ArrowUpRight, ShieldCheck, Printer, ArrowRight, Layers, X } from 'lucide-react';
import CursorTiltCard from './three/CursorTiltCard';
import ThreeSignageExploder from './three/ThreeSignageExploder';

const POSTER_SERVICES = [
  { name: 'ARCH FLEX', telugu: 'ఆర్చ్ ఫ్లెక్స్', icon: '🏛️', category: 'flex', desc: 'Grand entrance welcome arches for weddings & fests' },
  { name: 'HOARDING FLEX', telugu: 'హోర్డింగ్ ఫ్లెక్స్', icon: '🏙️', category: 'flex', desc: 'Highway & roadside high-visibility billboards' },
  { name: 'PAMPHLETS', telugu: 'పాంప్లెట్లు', icon: '📄', category: 'publicity', desc: 'Multi-colour offset flyers & newspaper inserts' },
  { name: 'LIGHTING BOARD', telugu: 'లైటింగ్ బోర్డులు', icon: '💡', category: 'flex', desc: 'LED glow sign boxes & illuminated facades' },
  { name: 'BILL BOOKS', telugu: 'బిల్ బుక్స్', icon: '🧾', category: 'publicity', desc: 'Duplicate & triplicate carbonless (NCR) pads' },
  { name: 'VISITING CARDS', telugu: 'విజిటింగ్ కార్డ్స్', icon: '💳', category: 'publicity', desc: '350 GSM matte/gloss/spot UV commercial cards' },
  { name: 'PHOTO FRAMES', telugu: 'ఫోటో ఫ్రేమ్స్', icon: '🖼️', category: 'gifts', desc: 'Synthetic wood & ambient LED glow wall art' },
  { name: 'MUG PRINTING', telugu: 'మగ్స్ ప్రింటింగ్', icon: '☕', category: 'gifts', desc: 'Plain, inner colour, heart & magic reveal mugs' },
  { name: 'AUTO PUBLICITY', telugu: 'ఆటో పబ్లిసిటీ', icon: '🛺', category: 'publicity', desc: 'Auto hood flex & mobile city-wide publicity' },
  { name: 'T-SHIRT PRINTING', telugu: 'టీ-షర్ట్ ప్రింటింగ్', icon: '👕', category: 'gifts', desc: 'High-definition DTF & Sublimation apparel' },
  { name: 'PILLOW PRINTING', telugu: 'పిల్లో ప్రింటింగ్', icon: '🛋️', category: 'gifts', desc: 'Heart/Square plush, magic sequins & LED pillows' },
];

export default function ServicesGrid({ onSelectServiceForCalculator }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [explodedModalOpen, setExplodedModalOpen] = useState(false);

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(item => item.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl 2xl:max-w-5xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Complete Printing & Advertising Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Our Complete Printing &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-slate-950">
              Publicity Services
            </span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
            From colossal outdoor highway hoardings and auto-rickshaw publicity to delicate personalized mugs and carbonless bill books. Rapid turnaround in Kadapa from your ready-to-print designs.
          </p>
        </div>

        {/* 11 SIGNATURE SERVICES SHOWCASE GRID (FROM OFFICIAL POSTER) */}
        <div className="mb-14 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-slate-800 border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between pb-8 mb-8 border-b border-slate-200/80">
            <div className="max-w-3xl xl:max-w-4xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
                  Official Workshop Capabilities
                </span>
                <span className="text-xs text-slate-500 font-bold">
                  11 Core Print & Publicity Solutions
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-2">
                All-In-One Printing & Outdoor Advertising Hub
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                We operate heavy roll-to-roll plotters and in-house iron welding fabrication to deliver rapid turnaround across Kadapa at direct workshop wholesale rates. Click any service to view full specifications!
              </p>
            </div>

            {/* Industrial Machinery Badge */}
            <div className="shrink-0 flex items-center gap-3 bg-slate-50 border border-slate-200 p-3.5 rounded-2xl shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shadow-2xs">
                <Printer className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="text-xs font-black text-slate-950 block">Heavy Industrial Machinery</span>
                <span className="text-[11px] text-emerald-600 font-extrabold block">Same-Day Express Production</span>
              </div>
            </div>
          </div>

          {/* 11 Poster Services Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {POSTER_SERVICES.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setActiveCategory(item.category);
                  const el = document.getElementById('catalog-cards');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group p-3 rounded-2xl bg-white hover:bg-rose-50/20 border border-slate-200 hover:border-rose-400 transition-all text-left flex flex-col justify-between hover:scale-[1.02] active:scale-95 shadow-xs hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-rose-100 group-hover:text-rose-700 transition-colors">
                      Explore
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-slate-900 group-hover:text-rose-600 transition-colors tracking-tight">
                    {item.name}
                  </h4>
                  <span className="text-[10px] font-bold text-rose-600 block mb-1">
                    {item.telugu}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 line-clamp-2 leading-tight font-medium">
                  {item.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Customer provides ready-to-print designs in <strong>CDR, PSD, PDF, TIFF, or high-res JPG</strong> format.</span>
            </div>
            <a
              href="https://wa.me/917287867584?text=Hi%20City%20Grafix%2C%20I%20want%20to%20order%20printing%20services.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
            >
              <span>Instant WhatsApp Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div id="catalog-cards" className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none px-2 max-w-full">
          {SERVICES_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                activeCategory === category.id
                  ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-600/25 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-slate-200/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid with 3D Cursor Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-8">
          {filteredServices.map((service) => (
            <CursorTiltCard key={service.id} maxTilt={5} className="h-full">
              <div
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col h-full group"
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
                    <span className="px-2.5 py-1 text-[11px] font-extrabold tracking-wide rounded-lg bg-white/95 text-rose-700 border border-rose-200 shadow-xs backdrop-blur-sm">
                      {service.badge}
                    </span>
                  </div>

                  {/* Turnaround Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 text-[11px] font-bold text-emerald-800 border border-emerald-300 shadow-xs backdrop-blur-sm">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    <span>{service.turnaround}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-lg font-extrabold text-slate-950 group-hover:text-rose-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-rose-600 block mb-2">
                      {service.teluguTitle}
                    </span>
                    <p className="text-xs text-slate-700 font-semibold mb-3 italic">
                      "{service.tagline}"
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3 font-medium">
                      {service.description}
                    </p>

                    {/* Bullet Features */}
                    <ul className="space-y-1.5 mb-5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                    {/* Special 3D Exploded Inspector for 3D Letters */}
                    {service.id === 'acrylic-3d-letters' && (
                      <button
                        type="button"
                        onClick={() => setExplodedModalOpen(true)}
                        className="w-full py-2.5 px-3 rounded-xl text-xs font-black text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all flex items-center justify-center gap-1.5 shadow-2xs hover:scale-[1.02] active:scale-95"
                      >
                        <Layers className="w-3.5 h-3.5 text-rose-600" />
                        <span>Launch 3D Exploded View Inspector</span>
                      </button>
                    )}

                    <div className="flex items-center gap-2">
                      {service.category === 'gifts' ? (
                        <>
                          <a
                            href="#/custom-gifts"
                            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-black text-white bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-700 hover:to-red-800 transition-all shadow-md shadow-rose-600/25 active:scale-95"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                            <span>Customize & Order</span>
                          </a>
                          <a
                            href={`https://wa.me/917287867584?text=${encodeURIComponent(
                              `Hi City Grafix, I want to order *${service.title}* (${service.teluguTitle}). Please confirm availability.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all font-bold"
                            title="Chat on WhatsApp"
                          >
                            <MessageCircle className="w-4 h-4 text-emerald-600" />
                          </a>
                        </>
                      ) : (
                        <>
                          <a
                            href={`https://wa.me/917287867584?text=${encodeURIComponent(
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
                            href="#/calculator"
                            onClick={() => onSelectServiceForCalculator && onSelectServiceForCalculator(service.id)}
                            className="p-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition-all font-bold"
                            title="Estimate in Calculator"
                          >
                            <ArrowUpRight className="w-4 h-4 text-slate-600" />
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CursorTiltCard>
          ))}
        </div>

        {/* 3D Exploded View Inspector Modal (open-3d-skills) */}
        {explodedModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-200 flex flex-col gap-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-rose-50 text-rose-700 border border-rose-200">
                      open-3d-skills Exploded Architecture
                    </span>
                    <span className="text-xs font-bold text-slate-500">Kadapa Workshop Fabrication</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                    3D Acrylic LED Channel Letter Engineering
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setExplodedModalOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-center">
                <ThreeSignageExploder initialExplode={0.35} />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <p className="text-xs text-slate-500 font-medium">
                  Drag the slider to explode into 4 manufacturing layers: Cast Acrylic, Samsung LEDs, Aluminum Return & ACP Backing.
                </p>
                <a
                  href="https://wa.me/917287867584?text=Hi%20City%20Grafix%2C%20I%20want%20a%20quote%20for%203D%20Acrylic%20LED%20Letters%20signage."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Storefront Quote</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
