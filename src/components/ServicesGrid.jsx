import React, { useState } from 'react';
import { SERVICES_CATEGORIES, SERVICES_LIST } from '../data/servicesData';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  Printer,
  ArrowRight,
  Layers,
  X,
  Sun,
  Moon,
  ChevronRight,
  FileCheck,
  Award,
  Wrench,
  Coffee,
  Search,
  ExternalLink
} from 'lucide-react';
import ThreeSignageExploder from './three/ThreeSignageExploder';

export default function ServicesGrid({ onSelectServiceForCalculator }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [explodedModalOpen, setExplodedModalOpen] = useState(false);
  const [signageNightMode, setSignageNightMode] = useState(true);

  // Filter services based on category and search query
  const filteredServices = SERVICES_LIST.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.teluguTitle.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 sm:py-28 bg-stone-50 relative border-b border-stone-200/80">
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 bg-dot-matrix opacity-35 pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* ========================================================
            SECTION HEADER: HIGH EDITORIAL PRESTIGE
           ======================================================== */}
        <div className="text-center max-w-4xl 2xl:max-w-5xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Kadapa Central Workshop Capabilities</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] mb-3">
            Master Craft in Print, Signage &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600">
              Outdoor Fabrication
            </span>
          </h2>

          <p className="font-anek text-lg sm:text-xl font-bold text-rose-700 mb-3">
            కడపలో అత్యుత్తమ నాణ్యతతో కూడిన కమర్షియల్ ప్రింటింగ్ & 3D సైనేజ్ సొల్యూషన్స్
          </p>

          <p className="font-sans text-zinc-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
            From monumental highway hoardings and illuminated 3D LED storefronts to high-precision CAD architectural plan printing and custom gifts. Built in-house in Kadapa with zero third-party markups.
          </p>
        </div>

        {/* ========================================================
            4 CURATED THEMATIC PORTALS (UNIFIED ATELIER ARCHITECTURE)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 sm:mb-24">
          
          {/* ------------------------------------------------------
              PORTAL 1 (7-COL FEATURE): 3D ARCHITECTURAL STOREFRONT SIGNAGE
             ------------------------------------------------------ */}
          <div className="lg:col-span-7 atelier-card rounded-3xl p-6 sm:p-8 bg-white border border-stone-200 shadow-atelier-md flex flex-col justify-between group relative overflow-hidden">
            <div>
              {/* Portal Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
                  Architectural Signage
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-zinc-500 font-mono hidden sm:inline">
                    Storefront Illumination:
                  </span>
                  <button
                    type="button"
                    onClick={() => setSignageNightMode(!signageNightMode)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-xs font-bold text-zinc-800 transition-all shadow-2xs"
                  >
                    {signageNightMode ? (
                      <>
                        <Moon className="w-3.5 h-3.5 text-amber-500" />
                        <span>Night Glow</span>
                      </>
                    ) : (
                      <>
                        <Sun className="w-3.5 h-3.5 text-amber-500" />
                        <span>Daylight</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Title & Telugu */}
              <h3 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight mb-1">
                3D Acrylic LED Letters & Glow Signs
              </h3>
              <span className="font-anek text-sm sm:text-base font-bold text-rose-600 block mb-3">
                అక్రిలిక్ 3D లెటర్స్ & లైటింగ్ సైన్ బోర్డులు
              </span>

              <p className="font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xl font-medium mb-5">
                Cast acrylic laser-cut faces with high-grade aluminium returns and energy-efficient IP67 waterproof LEDs. Fabricated with heavy MS iron tubular frames for shop fascias, showrooms, and commercial buildings across Kadapa.
              </p>

              {/* Interactive Signage Day/Night Simulation Canvas */}
              <div className={`relative rounded-2xl overflow-hidden p-6 mb-5 transition-colors duration-500 border ${
                signageNightMode
                  ? 'bg-zinc-950 text-white border-zinc-800'
                  : 'bg-stone-100 text-zinc-900 border-stone-300'
              }`}>
                {/* Backlight Ambient Glow */}
                {signageNightMode && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-72 h-28 bg-rose-600/30 rounded-full blur-2xl animate-pulse" />
                  </div>
                )}

                <div className="relative z-10 text-center py-4">
                  <div className={`font-outfit font-black text-2xl sm:text-3xl tracking-widest uppercase transition-all duration-300 ${
                    signageNightMode
                      ? 'text-white drop-shadow-[0_0_20px_rgba(244,63,94,0.9)]'
                      : 'text-zinc-900 drop-shadow-sm'
                  }`}>
                    KADAPA STOREFRONT
                  </div>
                  <span className={`text-[11px] font-mono font-bold tracking-wider uppercase mt-1 block ${
                    signageNightMode ? 'text-rose-400' : 'text-rose-600'
                  }`}>
                    3D Cast Acrylic + MS Iron Frame Welding
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-stone-700/40 text-center text-[10px] font-mono">
                  <div className={`p-2 rounded-lg ${signageNightMode ? 'bg-zinc-900 text-zinc-300' : 'bg-white text-zinc-700 border border-stone-200'}`}>
                    <span className="block text-zinc-500 uppercase">Face</span>
                    <strong className="text-xs">Cast Acrylic</strong>
                  </div>
                  <div className={`p-2 rounded-lg ${signageNightMode ? 'bg-zinc-900 text-zinc-300' : 'bg-white text-zinc-700 border border-stone-200'}`}>
                    <span className="block text-zinc-500 uppercase">Chassis</span>
                    <strong className="text-xs">MS Tubular Iron</strong>
                  </div>
                  <div className={`p-2 rounded-lg ${signageNightMode ? 'bg-zinc-900 text-zinc-300' : 'bg-white text-zinc-700 border border-stone-200'}`}>
                    <span className="block text-zinc-500 uppercase">LEDs</span>
                    <strong className="text-xs">IP67 Waterproof</strong>
                  </div>
                  <div className={`p-2 rounded-lg ${signageNightMode ? 'bg-zinc-900 text-zinc-300' : 'bg-white text-zinc-700 border border-stone-200'}`}>
                    <span className="block text-zinc-500 uppercase">Warranty</span>
                    <strong className="text-emerald-500 text-xs font-bold">3-Year LED</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Portal Action Buttons */}
            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setExplodedModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-zinc-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-all active:scale-95 shadow-2xs min-h-[44px]"
              >
                <Layers className="w-4 h-4 text-rose-600" />
                <span>3D Layer Inspector</span>
              </button>

              <a
                href={`https://wa.me/917287867584?text=${encodeURIComponent(
                  "Hi City Grafix, I need a quotation for 3D Acrylic LED Letters for my shop storefront. Please share details."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md active:scale-95 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Signage Inquiry</span>
              </a>
            </div>
          </div>

          {/* ------------------------------------------------------
              PORTAL 2 (5-COL FEATURE): GRAND OUTDOOR, ARCHES & HOARDINGS
             ------------------------------------------------------ */}
          <div className="lg:col-span-5 atelier-card rounded-3xl p-6 sm:p-7 bg-white border border-stone-200 shadow-atelier-md flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                  Grand Outdoor & Events
                </span>
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>2–4 Hr Same-Day</span>
                </span>
              </div>

              <h3 className="font-outfit text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight mb-1">
                Star Flex Banners, Grand Arches & Hoardings
              </h3>
              <span className="font-anek text-xs sm:text-sm font-bold text-rose-600 block mb-3">
                ఆర్చ్ ఫ్లెక్స్ • హోర్డింగ్ ఫ్లెక్స్ • ఆటో పబ్లిసిటీ
              </span>

              <p className="font-sans text-xs text-zinc-600 leading-relaxed font-medium mb-4">
                Heavy-duty high-gloss Star Flex printed with fade-resistant Japanese outdoor UV inks. We fabricate grand welcome arches for Kadapa weddings and temple fests, mobile auto rickshaw hood branding, and highway billboards.
              </p>

              {/* Photo Showcase Thumbnail */}
              <div className="relative h-44 rounded-2xl overflow-hidden bg-stone-100 mb-4 border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80"
                  alt="High-Definition Flex Banner Printing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-zinc-950/80 backdrop-blur-md text-[10px] font-mono text-white font-bold">
                  1440 DPI Japanese Plotter
                </div>
              </div>

              {/* Feature Chips */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-zinc-700 text-[10px] font-bold border border-stone-200">
                  Brass Eyelets Included
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-zinc-700 text-[10px] font-bold border border-stone-200">
                  Sunproof UV Inks
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-stone-100 text-zinc-700 text-[10px] font-bold border border-stone-200">
                  Wooden Beeding Fitting
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500 font-medium">Ready: CDR, PSD, PDF, JPG</span>
              <button
                type="button"
                onClick={() => onSelectServiceForCalculator && onSelectServiceForCalculator('star-flex')}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 group/btn min-h-[44px]"
              >
                <span>Calculate Flex Size</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* ------------------------------------------------------
              PORTAL 3 (6-COL): JUMBO XEROX & ARCHITECTURAL CAD BLUEPRINTS
             ------------------------------------------------------ */}
          <div className="lg:col-span-6 atelier-card rounded-3xl p-6 sm:p-7 bg-white border border-stone-200 shadow-atelier-md flex flex-col justify-between group bg-blueprint-grid relative">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200">
                  Engineering Desk
                </span>
                <span className="text-[10px] font-mono text-sky-700 font-bold">
                  CAD / BLUEPRINT
                </span>
              </div>

              <h3 className="font-outfit text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight mb-1">
                Jumbo Xerox & Architectural CAD Plans
              </h3>
              <span className="font-anek text-xs sm:text-sm font-bold text-sky-700 block mb-3">
                జంబో జిరాక్స్ (A0, A1, A2, A3, A4) & మ్యాప్స్
              </span>

              <p className="font-sans text-xs text-zinc-600 leading-relaxed font-medium mb-4">
                Kadapa’s dedicated wide-format blueprint plotting hub for civil engineers, architects, building contractors, and survey offices. Ultra-sharp vector reproduction from standard A4/A3 up to massive A0 continuous sheets.
              </p>

              {/* Technical Drawing Scale Matrix */}
              <div className="p-3.5 rounded-2xl bg-white/95 border border-stone-200 shadow-2xs space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-zinc-900">A0 Full Sheet (841 × 1189 mm)</span>
                  <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">High-Speed</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-600">
                  <span>A1, A2 & A3 Architectural CAD Plans</span>
                  <span className="text-[10px] font-mono font-bold">Colour & B/W</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-600">
                  <span>Tracing Cloth & Paper Plots for Sanction</span>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold">Archival Grade</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500 font-medium">AutoCAD DWG, PDF, TIFF</span>
              <a
                href={`https://wa.me/917601043674?text=${encodeURIComponent(
                  "Hi City Grafix, I want to print CAD architectural drawings / Jumbo Xerox plans. Please share procedure."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1 min-h-[44px]"
              >
                <span>WhatsApp CAD Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ------------------------------------------------------
              PORTAL 4 (6-COL): OFFSET STATIONERY & CUSTOM GIFT ATELIER
             ------------------------------------------------------ */}
          <div className="lg:col-span-6 atelier-card rounded-3xl p-6 sm:p-7 bg-white border border-stone-200 shadow-atelier-md flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
                  Stationery & Photo Gifts
                </span>
                <span className="text-xs font-bold text-rose-600">
                  Wholesale + Gifting
                </span>
              </div>

              <h3 className="font-outfit text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight mb-1">
                Visiting Cards, Bill Books & Magic Gifts
              </h3>
              <span className="font-anek text-xs sm:text-sm font-bold text-rose-600 block mb-3">
                విజిటింగ్ కార్డ్స్ • బిల్ బుక్స్ • మ్యాజిక్ మగ్స్
              </span>

              <p className="font-sans text-xs text-zinc-600 leading-relaxed font-medium mb-4">
                Heavy 350 GSM velvet business cards with spot UV coating, duplicate/triplicate carbonless (NCR) bill books, and personalized thermochromic magic mugs that reveal photos when hot coffee is poured.
              </p>

              {/* 2-Column Mini Preview */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                  <span className="text-xs font-bold text-zinc-900 block">350 GSM Cards</span>
                  <span className="text-[10px] text-zinc-500 block mb-1">Matte / Velvet / Spot UV</span>
                  <span className="text-[11px] font-mono font-bold text-emerald-700">1000 Pcs Wholesale</span>
                </div>
                <div className="p-3 rounded-2xl bg-rose-50/60 border border-rose-200/80 text-center">
                  <span className="text-xs font-bold text-zinc-900 block">Magic Heat Mugs</span>
                  <span className="text-[10px] text-zinc-500 block mb-1">Photo Reveal on Heat</span>
                  <span className="text-[11px] font-mono font-bold text-rose-600">From ₹550/-</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-800">Direct Workshop Pricing</span>
              <div className="flex items-center gap-2">
                <a
                  href="#/custom-gifts"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition-all active:scale-95 min-h-[44px]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>3D Gift Studio</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            COMPLETE 11 CAPABILITIES SPECIFICATIONS DESK (PROGRESSIVE DISCLOSURE)
           ======================================================== */}
        <div className="atelier-card rounded-3xl p-6 sm:p-10 bg-white border border-stone-200 shadow-atelier-md">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-6 mb-8 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 block mb-1">
                Workshop Technical Specifications
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                All 11 Workshop Production Specifications
              </h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-600 mt-1 font-medium">
                Filter by material domain or search to review exact GSM, maximum print dimensions, and turnaround.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services or materials..."
                className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:outline-none focus:border-rose-500 font-medium text-zinc-900"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-4 mb-6 scrollbar-none">
            {SERVICES_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all min-h-[38px] ${
                  activeCategory === cat.id
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'bg-stone-100 text-zinc-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Technical Specifications Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map(srv => (
              <div
                key={srv.id}
                className="p-5 rounded-2xl bg-stone-50 border border-stone-200/90 hover:bg-white hover:border-rose-400 hover:shadow-atelier-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-zinc-500 uppercase">
                      {srv.badge}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      <span>{srv.turnaround}</span>
                    </span>
                  </div>

                  <h4 className="font-outfit text-base font-extrabold text-zinc-950 group-hover:text-rose-600 transition-colors">
                    {srv.title}
                  </h4>
                  <span className="font-anek text-xs font-bold text-rose-600 block mb-2">
                    {srv.teluguTitle}
                  </span>

                  <p className="font-sans text-xs text-zinc-600 leading-relaxed font-medium mb-4 line-clamp-2">
                    {srv.description}
                  </p>

                  <ul className="space-y-1.5 mb-4 text-xs text-zinc-700 font-medium">
                    {srv.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                  <a
                    href={`https://wa.me/917287867584?text=${encodeURIComponent(
                      `Hi City Grafix, I'm interested in *${srv.title}* (${srv.teluguTitle}). Please share pricing and dispatch schedule.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 min-h-[44px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForCalculator && onSelectServiceForCalculator(srv.id)}
                    className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg bg-white hover:bg-rose-50 text-zinc-700 hover:text-rose-600 border border-stone-200 hover:border-rose-300 transition-colors"
                    title="Estimate Price"
                    aria-label={`Estimate price for ${srv.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* ========================================================
          MODAL: 3D SIGNAGE EXPLODED VIEW INSPECTOR
         ======================================================== */}
      {explodedModalOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl border border-stone-200 flex flex-col">
            <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit text-sm sm:text-base font-extrabold text-zinc-900">
                    3D Acrylic Channel Letter Exploded Layer Inspector
                  </h3>
                  <span className="text-[11px] text-zinc-500 font-medium">
                    Interactive engineering demonstration of City Grafix 4-layer sign fabrication
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setExplodedModalOpen(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-stone-200 transition-colors"
                aria-label="Close Inspector"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 p-4 sm:p-6 bg-zinc-900 overflow-y-auto">
              <ThreeSignageExploder
                initialExplode={0.45}
                showControls={true}
                acrylicColor="#e11d48"
                letterText="CG"
              />
            </div>

            <div className="p-4 border-t border-stone-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-zinc-600 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fabricated with heavy MS iron tubular frame welding and IP67 waterproof LED modules.</span>
              </div>
              <a
                href={`https://wa.me/917287867584?text=${encodeURIComponent(
                  "Hi City Grafix, I checked your 3D Signage exploded model. I want to discuss 3D Acrylic LED letters for my Kadapa storefront."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-md active:scale-95 shrink-0 flex items-center gap-1.5 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Storefront on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
