import React, { useState } from 'react';
import {
  Sparkles,
  Calculator,
  MessageCircle,
  Star,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Printer,
  Layers,
  Award,
  Sun,
  Moon,
  ChevronRight,
  PhoneCall,
  Coffee,
  CheckCircle2,
  Wrench,
  FileCheck
} from 'lucide-react';

export default function Hero({ onOpenCalculator }) {
  // Active showcase tab: 'signage' | 'starflex' | 'visitingcard' | 'magicmug'
  const [activeDeckTab, setActiveDeckTab] = useState('signage');
  const [isNightMode, setIsNightMode] = useState(true);
  const [isHotCoffee, setIsHotCoffee] = useState(false);

  const showcaseTabs = [
    { id: 'signage', label: '3D LED Signage', badge: 'Day/Night' },
    { id: 'starflex', label: 'Star Flex Banner', badge: '1440 DPI' },
    { id: 'visitingcard', label: 'Velvet Cards', badge: 'Spot UV' },
    { id: 'magicmug', label: 'Magic Mug', badge: 'Interactive' }
  ];

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 overflow-hidden bg-stone-50 text-zinc-900 border-b border-stone-200/80">
      {/* ========================================================
          BACKGROUND VISUAL: LUMINOUS ATELIER CANVAS
         ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-sky-500/5 rounded-full blur-[150px]" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[130px]" />

        {/* Fine Architectural Dot Matrix */}
        <div className="absolute inset-0 bg-dot-matrix opacity-35" />

        {/* Technical Blueprint Hairline Registration Lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #0284c7 1px, transparent 1px), linear-gradient(to bottom, #0284c7 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* ========================================================
          TOP TECHNICAL CALIBRATION TICKER
         ======================================================== */}
      <div className="w-full border-y border-stone-200/90 bg-stone-100/70 backdrop-blur-sm relative z-10 py-1.5 px-4 sm:px-8 mb-6 sm:mb-8">
        <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between text-[11px] font-mono text-zinc-600 gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-3 shrink-0">
            <span className="flex items-center gap-1.5 font-bold text-sky-700">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              PRESS 1: 1440 DPI WIDE-FORMAT UV
            </span>
            <span className="text-stone-300">|</span>
            <span className="text-rose-700 font-bold">PRESS 2: 3D ACRYLIC LASER & MS FABRICATION</span>
            <span className="text-stone-300 hidden md:inline">|</span>
            <span className="text-amber-800 font-bold hidden md:inline">CAD PLOTTER: A0–A4 JUMBO XEROX</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-600 font-semibold shrink-0">
            <span className="text-emerald-700 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              WORKSHOP OPEN • 10:00 AM – 10:00 PM
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-zinc-700 font-medium">OPP. TIRUMALA HOSPITAL, KADAPA</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          DUAL-WING HERO CONTAINER
         ======================================================== */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ----------------------------------------------------
              LEFT WING: EDITORIAL AUTHORITY & VALUE STATEMENT
             ---------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Workshop Landmark Pulse Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-300/80 text-zinc-800 text-xs font-bold mb-4 sm:mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="tracking-wide">Direct Kadapa Workshop Since 2014</span>
              <span className="text-stone-400">•</span>
              <span className="text-rose-600 font-extrabold">Opp. Tirumala Hospital</span>
            </div>

            {/* Master Headline: 4-Tier Typography Pairing */}
            <h1 className="font-outfit text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-zinc-950 tracking-tight leading-[1.08] mb-3">
              Commercial Printing &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600">
                3D Signage Studio
              </span>
            </h1>

            {/* Regional Telugu Script Anchor */}
            <div className="mb-4">
              <p className="font-anek text-lg sm:text-xl lg:text-2xl font-bold text-rose-700 tracking-normal flex items-center gap-2">
                <span>కడపలో మీ నమ్మకమైన ప్రింటింగ్ & జంబో జిరాక్స్ పార్ట్నర్</span>
              </p>
            </div>

            {/* Value Proposition Prose - High Contrast WCAG AAA */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-zinc-600 font-medium leading-relaxed max-w-2xl mb-6">
              Kadapa’s direct manufacturing workshop for wide-format Star Flex banners, illuminated 3D LED storefronts, A0–A4 engineering CAD blueprints, and personalized photo gifts. Bring ready-to-print designs (<span className="font-mono text-zinc-800 font-bold">CDR, PSD, PDF</span>) with fast 2–4 hour turnaround at wholesale rates.
            </p>

            {/* Primary Action Button Cluster */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              {/* WhatsApp Artwork Drop */}
              <a
                href="https://wa.me/917601043674?text=Hi%20City%20Grafix%2C%20I%20have%20an%20artwork%20ready%20to%20print.%20Please%20provide%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all active:scale-95 border border-emerald-500"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Artwork Drop</span>
              </a>

              {/* Instant Size Estimator */}
              <button
                type="button"
                onClick={onOpenCalculator}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Size Estimator</span>
              </button>

              {/* Explore 11 Services */}
              <a
                href="#services"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-zinc-800 border border-stone-300 font-bold text-xs sm:text-sm shadow-2xs transition-all active:scale-95"
              >
                <span>All 11 Services</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>
            </div>

            {/* 4 Architectural Quality Micro-Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full border-t border-stone-200/90 pt-5">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-700">
                <Clock className="w-4 h-4 text-rose-600 shrink-0" />
                <span>2–4 Hr Express</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-700">
                <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Wholesale</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-700">
                <FileCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>CDR/PSD/PDF Ready</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-700">
                <Wrench className="w-4 h-4 text-amber-600 shrink-0" />
                <span>In-House Welding</span>
              </div>
            </div>

          </div>

          {/* ----------------------------------------------------
              RIGHT WING: TACTILE PHYSICAL SHOWCASE DECK
             ---------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Interactive Showcase Container */}
            <div className="atelier-card rounded-3xl p-5 sm:p-6 bg-white border border-stone-200 shadow-atelier-md relative overflow-hidden">
              
              {/* Product Selector Tabs */}
              <div className="flex items-center justify-between gap-1 p-1 bg-stone-100 rounded-2xl mb-4 border border-stone-200">
                {showcaseTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveDeckTab(tab.id)}
                    className={`flex-1 py-2 px-2 rounded-xl text-[11px] font-bold transition-all text-center ${
                      activeDeckTab === tab.id
                        ? 'bg-white text-zinc-950 shadow-sm border border-stone-200/80'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Showcase Card Preview Canvas */}
              <div className="relative min-h-[340px] sm:min-h-[380px] rounded-2xl overflow-hidden flex flex-col justify-between p-5 transition-all">
                
                {/* ------------------------------------------------
                    PREVIEW 1: 3D LED STOREFRONT SIGN (DAY / NIGHT)
                   ------------------------------------------------ */}
                {activeDeckTab === 'signage' && (
                  <div className={`absolute inset-0 transition-colors duration-500 flex flex-col justify-between p-6 ${
                    isNightMode ? 'bg-[#090d16] text-white' : 'bg-stone-100 text-zinc-900'
                  }`}>
                    {/* Lighting Control Header */}
                    <div className="flex items-center justify-between z-10">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        isNightMode
                          ? 'bg-rose-950/60 text-rose-300 border-rose-800/80'
                          : 'bg-white text-zinc-800 border-stone-300 shadow-2xs'
                      }`}>
                        3D Cast Acrylic Channel Letters
                      </span>

                      <button
                        type="button"
                        onClick={() => setIsNightMode(!isNightMode)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs border ${
                          isNightMode
                            ? 'bg-stone-800 hover:bg-stone-700 text-amber-300 border-stone-700'
                            : 'bg-white hover:bg-stone-50 text-zinc-800 border-stone-300'
                        }`}
                      >
                        {isNightMode ? (
                          <>
                            <Moon className="w-3.5 h-3.5 text-amber-300" />
                            <span>Night Illumination</span>
                          </>
                        ) : (
                          <>
                            <Sun className="w-3.5 h-3.5 text-amber-500" />
                            <span>Daylight View</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Illuminated Sign Center Simulation */}
                    <div className="my-auto py-8 text-center relative flex flex-col items-center justify-center">
                      {/* Ambient LED Glow (Active at Night) */}
                      {isNightMode && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-64 h-32 bg-rose-600/35 rounded-full blur-3xl animate-pulse" />
                        </div>
                      )}

                      {/* 3D Acrylic Letters Simulation */}
                      <div className="relative z-10 select-none">
                        <div className={`font-outfit font-black text-3xl sm:text-4xl tracking-widest uppercase transition-all duration-300 ${
                          isNightMode
                            ? 'text-white drop-shadow-[0_0_25px_rgba(244,63,94,0.95)]'
                            : 'text-zinc-900 drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]'
                        }`}>
                          CITY GRAFIX
                        </div>
                        <div className={`text-xs font-mono font-bold tracking-widest mt-1 uppercase ${
                          isNightMode ? 'text-rose-400' : 'text-rose-600'
                        }`}>
                          Kadapa Central Workshop
                        </div>
                      </div>

                      {/* Front Facade Texture */}
                      <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-stone-400">
                        <span>IP67 SAMSUNG LED MODULES</span>
                        <span>•</span>
                        <span>CAST ACRYLIC 3MM</span>
                      </div>
                    </div>

                    {/* Footer Specs */}
                    <div className="flex items-center justify-between text-xs pt-3 border-t border-stone-700/60 z-10">
                      <span className={isNightMode ? 'text-stone-300 font-semibold' : 'text-zinc-700 font-semibold'}>
                        MS Tubular Frame + Laser Cut
                      </span>
                      <span className="text-emerald-400 font-bold">3-Year LED Warranty</span>
                    </div>
                  </div>
                )}

                {/* ------------------------------------------------
                    PREVIEW 2: STAR FLEX & EVENT ARCH
                   ------------------------------------------------ */}
                {activeDeckTab === 'starflex' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-zinc-900 to-black text-white flex flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-950/80 text-sky-300 border border-sky-800">
                        Heavy Outdoor Banner
                      </span>
                      <span className="text-xs font-bold text-amber-400">
                        1440 DPI Ultra-HD
                      </span>
                    </div>

                    {/* Star Flex Visual */}
                    <div className="my-auto py-4 text-center">
                      <div className="p-4 rounded-xl border border-sky-500/30 bg-sky-950/30 backdrop-blur-sm">
                        <div className="font-outfit font-black text-2xl sm:text-3xl text-white tracking-tight">
                          STAR FLEX ARCH & HOARDING
                        </div>
                        <p className="text-xs text-sky-200 mt-1 font-medium">
                          Heavy 340+ GSM Gloss / Matte substrate with rust-proof corner brass eyelets.
                        </p>
                        <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-mono text-stone-300">
                          <span className="px-2 py-0.5 rounded bg-sky-900/60 border border-sky-700">SUNPROOF UV INK</span>
                          <span className="px-2 py-0.5 rounded bg-sky-900/60 border border-sky-700">RAIN-RESISTANT</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-3 border-t border-stone-800">
                      <span className="text-stone-300 font-semibold">Ready in 2–4 Hours</span>
                      <span className="text-emerald-400 font-bold">Wholesale ₹ Rate / Sq.Ft</span>
                    </div>
                  </div>
                )}

                {/* ------------------------------------------------
                    PREVIEW 3: 350 GSM VELVET VISITING CARDS
                   ------------------------------------------------ */}
                {activeDeckTab === 'visitingcard' && (
                  <div className="absolute inset-0 bg-stone-950 text-white flex flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-950/80 text-rose-300 border border-rose-800">
                        Offset Commercial Stationery
                      </span>
                      <span className="text-xs font-bold text-rose-400">
                        Spot UV Gloss & Velvet
                      </span>
                    </div>

                    {/* Tactile Card Mockup */}
                    <div className="my-auto py-4 flex items-center justify-center">
                      <div className="w-64 h-36 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-stone-700 shadow-2xl p-4 flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-28 h-28 bg-rose-500/20 rounded-full blur-xl" />
                        <div className="flex items-center justify-between">
                          <div className="font-outfit font-black text-sm text-white">CITY GRAFIX</div>
                          <span className="text-[9px] font-mono text-stone-400">350 GSM BOARD</span>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-rose-400">PREMIUM VELVET FINISH</div>
                          <div className="text-[10px] text-stone-400">Kadapa, Andhra Pradesh</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-3 border-t border-stone-800">
                      <span className="text-stone-300 font-semibold">1000 Pcs Bulk Batches</span>
                      <span className="text-emerald-400 font-bold">Includes Design Pre-Flight</span>
                    </div>
                  </div>
                )}

                {/* ------------------------------------------------
                    PREVIEW 4: MAGIC HEAT-REVEAL MUG
                   ------------------------------------------------ */}
                {activeDeckTab === 'magicmug' && (
                  <div className="absolute inset-0 bg-stone-900 text-white flex flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800">
                        Sublimation Heat Gifting
                      </span>

                      <button
                        type="button"
                        onClick={() => setIsHotCoffee(!isHotCoffee)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs border ${
                          isHotCoffee
                            ? 'bg-amber-600 text-white border-amber-500'
                            : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border-stone-700'
                        }`}
                      >
                        <Coffee className="w-3.5 h-3.5" />
                        <span>{isHotCoffee ? 'Pour Cold Water' : 'Pour Hot Coffee ☕'}</span>
                      </button>
                    </div>

                    {/* Magic Mug Simulation */}
                    <div className="my-auto py-4 text-center">
                      <div className="relative inline-block">
                        <div className={`w-32 h-36 mx-auto rounded-2xl border-4 transition-all duration-700 flex flex-col items-center justify-center p-3 relative ${
                          isHotCoffee
                            ? 'bg-gradient-to-tr from-rose-500 via-amber-400 to-sky-400 border-white shadow-[0_0_30px_rgba(244,63,94,0.6)]'
                            : 'bg-zinc-950 border-stone-800 shadow-xl'
                        }`}>
                          {isHotCoffee ? (
                            <div className="text-center animate-fadeIn">
                              <Sparkles className="w-6 h-6 text-white mx-auto mb-1 animate-spin" />
                              <span className="font-outfit font-black text-xs text-white uppercase block">
                                Photo Revealed!
                              </span>
                              <span className="text-[9px] font-mono text-white/90">
                                100% Thermal Pigment
                              </span>
                            </div>
                          ) : (
                            <div className="text-center text-stone-500">
                              <span className="font-mono text-xs block mb-1">Black Ceramic</span>
                              <span className="text-[9px] block">Click 'Pour Hot Coffee'</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-3 border-t border-stone-800">
                      <span className="text-stone-300 font-semibold">Magic Mugs from ₹550/-</span>
                      <span className="text-emerald-400 font-bold">Plain Mugs from ₹350/-</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Showcase Card Footer Callout */}
              <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                <span className="font-bold text-zinc-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Live Workshop Interactive Preview
                </span>
                <a
                  href="#services"
                  className="font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                >
                  <span>Explore Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================
            BOTTOM ARCHITECTURAL TRUST PILLARS (4 METRICS)
           ======================================================== */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="atelier-card p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 text-left">
            <span className="font-outfit text-2xl sm:text-3xl font-black text-zinc-950 block">
              10+ Years
            </span>
            <span className="text-xs sm:text-sm font-bold text-zinc-800 mt-0.5 block">
              Heritage in Kadapa
            </span>
            <span className="text-[11px] text-zinc-500 font-medium">Serving local businesses since 2014</span>
          </div>

          <div className="atelier-card p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-outfit text-2xl sm:text-3xl font-black text-zinc-950">
                5.0★
              </span>
              <div className="flex text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
              </div>
            </div>
            <span className="text-xs sm:text-sm font-bold text-zinc-800 mt-0.5 block">
              Google Verified
            </span>
            <span className="text-[11px] text-zinc-500 font-medium">100% genuine local Kadapa reviews</span>
          </div>

          <div className="atelier-card p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 text-left">
            <span className="font-outfit text-2xl sm:text-3xl font-black text-zinc-950 block">
              2 – 4 Hours
            </span>
            <span className="text-xs sm:text-sm font-bold text-zinc-800 mt-0.5 block">
              Express Turnaround
            </span>
            <span className="text-[11px] text-zinc-500 font-medium">Same-day dispatch for urgent events</span>
          </div>

          <div className="atelier-card p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 text-left">
            <span className="font-outfit text-2xl sm:text-3xl font-black text-emerald-600 block">
              100% Direct
            </span>
            <span className="text-xs sm:text-sm font-bold text-zinc-800 mt-0.5 block">
              Wholesale Rates
            </span>
            <span className="text-[11px] text-zinc-500 font-medium">Zero middlemen or broker markups</span>
          </div>
        </div>

      </div>
    </section>
  );
}
