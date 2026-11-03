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
  Lightbulb,
  Sun,
  Moon,
  ChevronRight,
  FileCheck,
  Maximize2,
  Award,
  Zap,
  Tag
} from 'lucide-react';
import CursorTiltCard from './three/CursorTiltCard';
import ThreeSignageExploder from './three/ThreeSignageExploder';

export default function ServicesGrid({ onSelectServiceForCalculator }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [explodedModalOpen, setExplodedModalOpen] = useState(false);
  const [bentoSignageNight, setBentoSignageNight] = useState(true);

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(item => item.category === activeCategory);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#fbfbfa] relative">
      {/* Background Subtle Halftone Canvas */}
      <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* ========================================================
            SECTION HEADER: HIGH EDITORIAL PRESTIGE
           ======================================================== */}
        <div className="text-center max-w-4xl 2xl:max-w-5xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-black mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Kadapa Central Workshop Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] mb-4">
            Master Craft in Print, Signage &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600">
              Outdoor Fabrication
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
            From monumental highway hoardings and illuminated 3D LED storefronts to high-precision CAD architectural plan printing and custom gifts. Built in-house in Kadapa with zero third-party markups.
          </p>
        </div>

        {/* ========================================================
            THE 5-ZONE ASYMMETRICAL BENTO MATRIX (ZERO CARD MONOTONY)
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 mb-16 sm:mb-24">
          
          {/* ------------------------------------------------------
              ZONE 1 (LARGE 7-COL FEATURE): 3D ACRYLIC LED STOREFRONTS
             ------------------------------------------------------ */}
          <div className="lg:col-span-7 bg-[#0b0f19] text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            {/* Ambient Backlight Glow */}
            <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[110px] transition-opacity duration-700 pointer-events-none ${
              bentoSignageNight ? 'bg-rose-500/25 opacity-100' : 'bg-amber-400/15 opacity-60'
            }`} />

            <div>
              {/* Zone Header Tags */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
                  Storefront Illumination
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 hidden sm:inline font-mono">
                    Lighting:
                  </span>
                  <button
                    type="button"
                    onClick={() => setBentoSignageNight(!bentoSignageNight)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 transition-all shadow-xs"
                  >
                    {bentoSignageNight ? (
                      <>
                        <Moon className="w-3.5 h-3.5 text-amber-300" />
                        <span>Night Glow Active</span>
                      </>
                    ) : (
                      <>
                        <Sun className="w-3.5 h-3.5 text-amber-400" />
                        <span>Daylight View</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Title & Telugu */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-1">
                3D Acrylic LED Letters & Glow Signs
              </h3>
              <span className="text-xs sm:text-sm font-bold text-rose-400 block mb-4">
                అక్రిలిక్ 3D లెటర్స్ & లైటింగ్ సైన్ బోర్డులు
              </span>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-medium mb-6">
                Cast acrylic laser-cut faces with high-grade aluminium returns and energy-efficient IP67 waterproof LEDs. Fabricated with heavy MS iron tubular frames for shop fascias, showrooms, and commercial buildings across Kadapa.
              </p>

              {/* Visual Showcase: Interactive Signage Preview */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-4 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                  <span>IN-HOUSE CAD FABRICATION</span>
                  <span className="text-emerald-400">3-YEAR LED WARRANTY</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-500 uppercase block font-mono">Face</span>
                    <strong className="text-white text-xs">Cast Acrylic</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-500 uppercase block font-mono">Profile</span>
                    <strong className="text-white text-xs">Aluminium Trim</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-500 uppercase block font-mono">Chassis</span>
                    <strong className="text-white text-xs">Heavy MS Iron</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-500 uppercase block font-mono">Testing</span>
                    <strong className="text-emerald-400 text-xs">48-Hr Burn Test</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Zone Action Buttons */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setExplodedModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 transition-all active:scale-95 shadow-2xs"
              >
                <Layers className="w-4 h-4 text-rose-400" />
                <span>Launch 3D Exploded Layer Inspector</span>
              </button>

              <a
                href={`https://wa.me/917287867584?text=${encodeURIComponent(
                  "Hi City Grafix, I need a quotation for 3D Acrylic LED Letters for my shop storefront. Please share details."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Signage Inquiry</span>
              </a>
            </div>
          </div>

          {/* ------------------------------------------------------
              ZONE 2 (5-COL PANORAMIC): HIGH-DEFINITION STAR FLEX & ARCHES
             ------------------------------------------------------ */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-card-hover transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                  Outdoor & Events
                </span>
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>2–4 Hr Same-Day Dispatch</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mb-1">
                Star Flex Banners, Grand Arches & Hoardings
              </h3>
              <span className="text-xs font-bold text-rose-600 block mb-3">
                ఆర్చ్ ఫ్లెక్స్ • హోర్డింగ్ ఫ్లెక్స్ • ఆటో పబ్లిసిటీ
              </span>

              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                Heavy-duty high-gloss Star Flex printed with fade-resistant Japanese outdoor UV inks. We fabricate grand welcome arches for Kadapa weddings and temple fests, mobile auto rickshaw hood branding, and highway billboards.
              </p>

              {/* Photo Showcase Thumbnail */}
              <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80"
                  alt="High-Definition Flex Banner Printing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md text-[10px] font-mono text-white">
                  1440 DPI Heavy Plotter
                </div>
              </div>

              {/* Feature Chips */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className="px-2 py-1 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-bold">
                  Brass Eyelets Included
                </span>
                <span className="px-2 py-1 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-bold">
                  Weatherproof UV Inks
                </span>
                <span className="px-2 py-1 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-bold">
                  Wooden Beeding Fitting
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Ready files: CDR, PSD, PDF, JPG</span>
              <button
                type="button"
                onClick={() => onSelectServiceForCalculator && onSelectServiceForCalculator('star-flex')}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 group/btn"
              >
                <span>Calculate Flex Size</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* ------------------------------------------------------
              ZONE 3 (4-COL BLUEPRINT): JUMBO XEROX & ARCHITECTURAL CAD
             ------------------------------------------------------ */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-card-hover transition-all bg-blueprint-grid relative">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200">
                  Engineering Desk
                </span>
                <span className="text-[10px] font-mono text-sky-700 font-bold">
                  CAD / BLUEPRINT
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950 tracking-tight mb-1">
                Jumbo Xerox & Architectural CAD Plans
              </h3>
              <span className="text-xs font-bold text-sky-700 block mb-3">
                జంబో జిరాక్స్ (A0, A1, A2, A3, A4)
              </span>

              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                Kadapa’s dedicated wide-format blueprint plotting hub for civil engineers, architects, building contractors, and survey offices.
              </p>

              {/* Technical Drawing Scale Matrix */}
              <div className="p-3.5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">A0 Full Sheet (841 × 1189 mm)</span>
                  <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded">High-Speed</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>A1, A2 & A3 Architectural CAD</span>
                  <span className="text-[10px] font-mono">Colour & B/W</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Tracing Cloth & Paper Plots</span>
                  <span className="text-[10px] font-mono">Razor Sharp</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-medium">AutoCAD DWG, PDF, TIFF</span>
              <a
                href={`https://wa.me/917601043674?text=${encodeURIComponent(
                  "Hi City Grafix, I want to print CAD architectural drawings / Jumbo Xerox plans. Please share procedure."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1"
              >
                <span>WhatsApp CAD Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ------------------------------------------------------
              ZONE 4 (4-COL): COMMERCIAL OFFSET & STATIONERY
             ------------------------------------------------------ */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-card-hover transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200">
                  Wholesale Offset
                </span>
                <span className="text-[10px] font-bold text-slate-500">
                  1000 Pcs Packs
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950 tracking-tight mb-1">
                Visiting Cards, Bill Books & Pamphlets
              </h3>
              <span className="text-xs font-bold text-rose-600 block mb-3">
                విజిటింగ్ కార్డ్స్ • బిల్ బుక్స్ • పాంప్లెట్లు
              </span>

              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                Heavy 350 GSM premium visiting cards (matte, gloss, and spot UV coating), duplicate and triplicate carbonless (NCR) bill books, and multi-colour newspaper insert flyers.
              </p>

              <div className="space-y-1.5 mb-4 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>350 GSM Art Card Visiting Cards</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Carbonless NCR Bill & Invoice Books</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Multi-Colour Offset Publicity Flyers</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-black text-slate-900">Wholesale Bulk Rates</span>
              <a
                href="#/calculator"
                onClick={() => onSelectServiceForCalculator && onSelectServiceForCalculator('visiting-cards')}
                className="text-xs font-bold text-slate-700 hover:text-rose-600 flex items-center gap-1"
              >
                <span>View Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ------------------------------------------------------
              ZONE 5 (4-COL VIBRANT CRAFT): PERSONALIZED GIFTS ATELIER
             ------------------------------------------------------ */}
          <div className="lg:col-span-4 bg-gradient-to-br from-rose-50/60 via-white to-pink-50/40 rounded-3xl p-6 sm:p-7 border border-rose-200/80 shadow-sm flex flex-col justify-between hover:shadow-card-hover transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-200">
                  Photo Gift Studio
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-black text-rose-700 bg-white border border-rose-200">
                  From ₹250/-
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950 tracking-tight mb-1">
                Magic Reveal Mugs, Apparel & Frames
              </h3>
              <span className="text-xs font-bold text-rose-600 block mb-3">
                మ్యాజిక్ మగ్స్ • టీ-షర్ట్స్ • ఫోటో ఫ్రేమ్స్
              </span>

              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                Personalized thermochromic magic reveal mugs that transform when hot water is poured, customized DTF apparel, and ambient LED wall photo frames.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="p-2.5 rounded-xl bg-white border border-rose-100 text-center">
                  <span className="text-sm block">☕</span>
                  <span className="text-[11px] font-bold text-slate-800 block">Magic Mugs</span>
                  <span className="text-[10px] text-rose-600 font-extrabold">₹550/-</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-rose-100 text-center">
                  <span className="text-sm block">👕</span>
                  <span className="text-[11px] font-bold text-slate-800 block">DTF T-Shirts</span>
                  <span className="text-[10px] text-rose-600 font-extrabold">From ₹300/-</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-rose-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Interactive 3D Preview</span>
              <a
                href="#/custom-gifts"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-xs transition-all active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Launch 3D Customizer</span>
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================
            COMPLETE 11 CAPABILITIES SPECIFICATIONS DESK (PROGRESSIVE DISCLOSURE)
           ======================================================== */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-rose-600 block mb-1">
                Progressive Specifications Desk
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                All 11 Workshop Production Specifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                Filter by material domain or select any service to review exact GSM, maximum print dimensions, and turnaround.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 scrollbar-none">
              {SERVICES_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Technical Specifications Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map(srv => (
              <div
                key={srv.id}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-rose-400 hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                      {srv.badge}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      <span>{srv.turnaround}</span>
                    </span>
                  </div>

                  <h4 className="text-base font-black text-slate-950 group-hover:text-rose-600 transition-colors">
                    {srv.title}
                  </h4>
                  <span className="text-xs font-bold text-rose-600 block mb-2">
                    {srv.teluguTitle}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4 line-clamp-2">
                    {srv.description}
                  </p>

                  <ul className="space-y-1 mb-4 text-xs text-slate-700 font-medium">
                    {srv.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-rose-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                  <a
                    href={`https://wa.me/917287867584?text=${encodeURIComponent(
                      `Hi City Grafix, I'm interested in *${srv.title}* (${srv.teluguTitle}). Please share pricing and dispatch schedule.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForCalculator && onSelectServiceForCalculator(srv.id)}
                    className="p-1.5 rounded-lg bg-white hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-slate-200 hover:border-rose-300 transition-colors"
                    title="Estimate Price"
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
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900">
                    3D Acrylic Channel Letter Exploded View Inspector
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    Interactive engineering demonstration of City Grafix 4-layer sign fabrication
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setExplodedModalOpen(false)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors"
                aria-label="Close Inspector"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 p-4 sm:p-6 bg-slate-900 overflow-y-auto">
              <ThreeSignageExploder
                initialExplode={0.45}
                showControls={true}
                acrylicColor="#e11d48"
                letterText="CG"
              />
            </div>

            <div className="p-4 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fabricated with heavy MS iron tubular frame welding and IP67 waterproof LED modules.</span>
              </div>
              <a
                href={`https://wa.me/917287867584?text=${encodeURIComponent(
                  "Hi City Grafix, I checked your 3D Signage exploded model. I want to discuss 3D Acrylic LED letters for my Kadapa storefront."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-md active:scale-95 shrink-0 flex items-center gap-1.5"
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
