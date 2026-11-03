import React, { useState, useEffect } from 'react';
import ThreeSignageExploder from './three/ThreeSignageExploder';
import CursorTiltCard from './three/CursorTiltCard';
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
  Flame,
  CheckCircle2
} from 'lucide-react';

export default function Hero({ onOpenCalculator }) {
  const [activeTab, setActiveTab] = useState('signage'); // 'signage' | 'flex' | 'cad'

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 overflow-hidden bg-[#070b14] text-white">
      {/* ========================================================
          BACKGROUND VISUAL: DEEP INDUSTRIAL ATELIER ATMOSPHERE
         ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Cinematic Heavy-Print Studio Ambient Image */}
        <img
          src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=2400&q=90"
          alt="Commercial Print Production Atmosphere"
          className="w-full h-full object-cover object-center opacity-[0.16] filter contrast-125 saturate-150 scale-105"
          loading="eager"
        />

        {/* Industrial Engineering Blueprint / Halftone Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(2, 132, 199, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(2, 132, 199, 0.4) 1px, transparent 1px)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* High-Voltage Ambient Illumination Halos */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-sky-600/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Subtle Vignette Gradient for Maximum Text Sharpness */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-[#070b14]/80" />
      </div>

      {/* ========================================================
          TOP TECHNICAL CALIBRATION TICKER
         ======================================================== */}
      <div className="w-full border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md relative z-10 py-1.5 px-4 sm:px-8 mb-6 sm:mb-8">
        <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between text-[10px] font-mono text-slate-400 gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-3 shrink-0">
            <span className="flex items-center gap-1 font-bold text-sky-400">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              PRESS 1: 1440 DPI WIDE-FORMAT
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-rose-400 font-bold">PRESS 2: 3D ACRYLIC LASER & FAB</span>
            <span className="text-slate-700 hidden md:inline">|</span>
            <span className="text-amber-400 font-bold hidden md:inline">PLOTTER: A0–A4 JUMBO XEROX</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 font-semibold shrink-0">
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              WORKSHOP OPEN • 10:00 AM – 10:00 PM
            </span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-300">OPP. TIRUMALA HOSPITAL, KADAPA</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          DUAL-PRESENCE CINEMATIC HERO
         ======================================================== */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ----------------------------------------------------
              LEFT COLUMN: EDITORIAL AUTHORITY & VALUE STATEMENT
             ---------------------------------------------------- */}
          <div className="lg:col-span-7 2xl:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Workshop Landmark Pulse Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 text-xs font-bold mb-4 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-wide text-xs">Direct Kadapa Workshop Since 2014</span>
              <span className="text-slate-500">•</span>
              <span className="text-rose-400 font-extrabold flex items-center gap-1">
                <Printer className="w-3.5 h-3.5" />
                <span>Zero Middlemen Rates</span>
              </span>
            </div>

            {/* Main Razor-Sharp Display Headline */}
            <h1 className="font-black tracking-tight text-white leading-[1.08] sm:leading-[1.05] text-3xl sm:text-5xl md:text-6xl xl:text-[64px] mb-4">
              <span className="block text-white drop-shadow-sm">
                Industrial Commercial Print
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-300">
                & 3D Architectural Signage
              </span>
            </h1>

            {/* Culturally Elevated Telugu Identity */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 font-extrabold text-sm sm:text-base mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span>కడపలో మీ నమ్మకమైన ప్రింటింగ్ & 3D సైన్ బోర్డుల తయారీ కేంద్రం</span>
            </div>

            {/* High-Impact Service Context */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-8 font-medium">
              City Grafix is Kadapa’s high-volume fabrication powerhouse for heavy-duty <strong className="text-white">Star Flex banners</strong>, illuminated <strong className="text-white">3D Acrylic LED letters</strong>, wide-format <strong className="text-white">A0–A4 CAD architectural plans</strong>, and bespoke <strong className="text-white">personalized photo gifts</strong>. Bring your ready designs (CDR, PSD, PDF) for fast <span className="text-emerald-400 font-bold">2–4 hour express turnaround</span> at direct workshop wholesale rates.
            </p>

            {/* High-Tactile Action Conduits */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              {/* Primary Action Button */}
              <a
                href="#/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-black text-sm text-white bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-600 shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95 border border-rose-500/60 group"
              >
                <span>Explore All 11 Capabilities</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Instant WhatsApp Wholesale Hotline */}
              <a
                href="https://wa.me/917287867584?text=Hi%20City%20Grafix%2C%20I%20have%20a%20printing%20requirement.%20Please%20share%20wholesale%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/40 shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5 active:scale-95 group"
              >
                <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>WhatsApp Order Desk</span>
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping ml-1" />
              </a>

              {/* Instant Estimator Shortcut */}
              <a
                href="#/calculator"
                onClick={onOpenCalculator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-bold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all active:scale-95"
              >
                <Calculator className="w-4 h-4 text-sky-400" />
                <span>Size Estimator</span>
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-semibold pt-4 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>In-House MS Frame Welding</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Japanese UV Inks (Weatherproof)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>A0-A4 Jumbo Xerox High-Speed</span>
              </div>
            </div>

          </div>

          {/* ----------------------------------------------------
              RIGHT COLUMN: INTERACTIVE 3D ILLUMINATED SIGNAGE STUDIO
             ---------------------------------------------------- */}
          <div className="lg:col-span-5 2xl:col-span-5">
            <CursorTiltCard maxTilt={4} className="w-full">
              <div className="rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl p-5 sm:p-6 relative overflow-hidden group">
                
                {/* Header of 3D Craft Studio */}
                <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-xs font-black uppercase tracking-wider text-white">
                        3D Signage Interactive Atelier
                      </h2>
                      <span className="text-[10px] text-slate-400 block font-mono">
                        Illuminated Channel Letter Assembly
                      </span>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
                    Live WebGL
                  </span>
                </div>

                {/* 3D WebGL Canvas Container */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-[#030712] border border-slate-800/80 overflow-hidden shadow-inner">
                  <ThreeSignageExploder
                    initialExplode={0.3}
                    showControls={true}
                    acrylicColor="#e11d48"
                    letterText="CG"
                  />

                  {/* Interactive Drag Hint */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[9px] font-mono text-slate-300 border border-white/10 pointer-events-none">
                    360° Drag to Orbit
                  </div>
                </div>

                {/* Specification Highlights of the Physical Product */}
                <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Face Material</span>
                    <strong className="text-white text-xs">Cast Acrylic Sheet (3mm)</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Illumination</span>
                    <strong className="text-emerald-400 text-xs">IP67 Waterproof LEDs</strong>
                  </div>
                </div>

                {/* Direct Action Link from 3D Box */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Custom sizes fabricated for Kadapa storefronts
                  </span>
                  <a
                    href="#/services"
                    className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1 group/link"
                  >
                    <span>Full Signage Specs</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </CursorTiltCard>
          </div>

        </div>

        {/* ========================================================
            FOUR PILLARS ARCHITECTURAL TRUST RIBBON
           ======================================================== */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Pillar 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-rose-500/40 transition-colors">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">
                10+ Years
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-1">
                Serving Kadapa Since 2014
              </span>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Opp. Tirumala Hospital prime location
              </span>
            </div>

            {/* Pillar 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-amber-500/40 transition-colors">
              <div className="flex items-center gap-1">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  5.0 ★
                </span>
                <span className="text-amber-400 text-lg">★★★★★</span>
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-1">
                Google Verified Rating
              </span>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Trusted by doctors, brands & event managers
              </span>
            </div>

            {/* Pillar 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-sky-500/40 transition-colors">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">
                2 – 4 Hours
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-1">
                Express Same-Day Turnaround
              </span>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Urgent event flex & banner delivery
              </span>
            </div>

            {/* Pillar 4 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-emerald-500/40 transition-colors">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">
                100% Direct
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-1">
                Wholesale Workshop Rates
              </span>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Zero third-party commissions or markups
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
