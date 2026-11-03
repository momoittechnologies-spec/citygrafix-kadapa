import React, { useState, useEffect } from 'react';
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
  FileText,
  Gift,
  CheckCircle2,
  Award
} from 'lucide-react';

// Animated rotating capability keywords inspired by Khoon Ka Rishta's wpr-advanced-text
const ROTATING_CAPABILITIES = [
  'Star Flex Banners',
  'A0–A4 Jumbo Xerox Plans',
  '3D Acrylic LED Letters',
  'Personalized Magic Mugs',
  'Auto Rickshaw Publicity',
  'DTF Custom T-Shirts',
  'Multi-Colour Pamphlets',
  'Ambient LED Wall Frames'
];

export default function Hero({ onOpenCalculator }) {
  const [capabilityIndex, setCapabilityIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCapabilityIndex((prev) => (prev + 1) % ROTATING_CAPABILITIES.length);
        setFadeState(true);
      }, 250);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white">
      
      {/* ========================================================
          BACKGROUND VISUAL: HIGH-DEFINITION PRINTING & WORKSHOP ATMOSPHERE
         ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* High-Definition CMYK Industrial Inks & Precision Flow Atmosphere */}
        <img
          src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=2400&q=90"
          alt="Advanced Commercial Printing & CMYK Production Atmosphere"
          className="w-full h-full object-cover object-center scale-105 opacity-[0.20] filter contrast-125 saturate-150 transition-transform duration-1000"
          loading="eager"
        />

        {/* Precision CAD / Halftone Matrix Grid */}
        <div 
          className="absolute inset-0 opacity-[0.06] mix-blend-color-burn"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(2, 132, 199, 0.3) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Luminous Light Spotlight - Eliminates Dark Shadows and Guarantees 100% Crisp Contrast */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 50% 38%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.90) 50%, rgba(255, 255, 255, 0.65) 100%)'
          }}
        />

        {/* CMYK Spectral Ambient Color Lighting Halos at the Periphery */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1100px] 2xl:w-[1500px] h-[550px] bg-gradient-to-r from-cyan-400/15 via-rose-500/12 via-amber-400/10 to-sky-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 -left-28 w-96 h-96 bg-cyan-400/18 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/3 -right-28 w-96 h-96 bg-rose-400/18 rounded-full blur-[110px] pointer-events-none" />
      </div>

      {/* Micro CMYK Calibration & Registration Marks (Subtle Industrial Printshop Accent) */}
      <div className="absolute top-22 sm:top-24 left-6 lg:left-12 hidden md:flex items-center gap-2 text-[10px] font-mono font-bold text-slate-500 pointer-events-none select-none z-10">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-500 shadow-xs" />C</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500 shadow-xs" />M</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500 shadow-xs" />Y</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-900 shadow-xs" />K</span>
        <span className="text-slate-300 ml-1">|</span>
        <span className="tracking-widest uppercase text-slate-500">1440 DPI • HEAVY ROLL PLOTTERS</span>
      </div>

      <div className="absolute top-22 sm:top-24 right-6 lg:right-12 hidden md:flex items-center gap-2 text-[10px] font-mono font-bold text-slate-500 pointer-events-none select-none z-10">
        <span className="tracking-widest uppercase">⊕ PRECISION REGISTRATION</span>
        <span className="text-slate-300">|</span>
        <span>JAPANESE UV INKS</span>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="text-center max-w-5xl 2xl:max-w-6xl mx-auto">
          
          {/* ========================================================
              TOP PRE-TITLE BADGE (Crisp Glassmorphism & Status Pulse)
             ======================================================== */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs mb-3 sm:mb-4 transition-all hover:border-rose-300 group">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-900">
              Serving Kadapa Since 2014
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] sm:text-xs font-bold text-rose-600 flex items-center gap-1">
              <Printer className="w-3.5 h-3.5 text-rose-600" />
              <span>Complete Printing & Signage Studio</span>
            </span>
          </div>

          {/* ========================================================
              MAIN HEADLINE: MAXIMUM CONTRAST & CLEAR VISUAL HIERARCHY
             ======================================================== */}
          <h1 className="max-w-4xl lg:max-w-5xl 2xl:max-w-6xl mx-auto font-black tracking-tight text-slate-950 mb-3 sm:mb-4">
            {/* Primary Anchor Headline - The Strongest Visual Importance */}
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[66px] font-black tracking-tight text-slate-950 leading-[1.12] sm:leading-[1.08] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
              High-Definition Printing & 3D Signage
            </span>

            {/* Refined Secondary Supporting Line with High-Contrast Rotating Capability */}
            <span className="flex items-center justify-center flex-wrap gap-x-2.5 gap-y-1.5 mt-2.5 sm:mt-3.5 text-base sm:text-xl md:text-2xl lg:text-[26px] font-extrabold text-slate-900">
              <span>Direct Kadapa Workshop For</span>
              <span className="inline-flex items-center px-3.5 py-1 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300/90 shadow-xs min-h-[1.4em]">
                <span
                  className={`inline-block font-black text-rose-600 transition-all duration-300 transform ${
                    fadeState
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 -translate-y-1 scale-95'
                  }`}
                >
                  {ROTATING_CAPABILITIES[capabilityIndex]}
                </span>
              </span>
            </span>
          </h1>

          {/* Telugu Regional Tagline - High Contrast & Crisp Weight */}
          <p className="text-xs sm:text-base md:text-lg text-slate-900 font-extrabold mb-2.5 sm:mb-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-600 shadow-xs" />
            <span className="tracking-wide">కడపలో మీ నమ్మకమైన ప్రింటింగ్ & జంబో జిరాక్స్ పార్ట్నర్</span>
            <span className="w-2 h-2 rounded-full bg-rose-600 shadow-xs" />
          </p>

          {/* Clear, High-Contrast Service Description */}
          <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-700 max-w-2xl lg:max-w-3xl 2xl:max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed font-semibold">
            City Grafix is Kadapa’s one-stop destination for high-definition commercial printing, wide-format CAD architectural drawings, illuminated 3D LED storefront signs, and personalized gifts. Bring your ready-to-print designs (CDR, PSD, PDF) for fast same-day turnaround at direct workshop wholesale rates.
          </p>

          {/* ========================================================
              REFINED CTA BUTTONS: CLEAR VISUAL HIERARCHY
             ======================================================== */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-8 sm:mb-10 w-full">
            {/* Primary Action Button (Strongest) */}
            <a
              href="#/services"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3 sm:py-3.5 rounded-xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-600 shadow-lg shadow-rose-600/30 hover:shadow-xl hover:shadow-rose-600/40 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95 border border-rose-500/50 group"
            >
              <span>Explore All 11 Services & Specs</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Action Button (Custom Gifts Studio) */}
            <a
              href="#/custom-gifts"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-white/90 backdrop-blur-md hover:bg-white border border-slate-200/90 hover:border-rose-400 shadow-sm shadow-slate-200/50 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group"
            >
              <Gift className="w-4 h-4 text-rose-600 group-hover:scale-110 transition-transform" />
              <span>Launch 3D Gift Customizer</span>
              <span className="px-1.5 py-0.5 text-[10px] font-black rounded-md bg-rose-50 text-rose-600 border border-rose-200/80">
                From ₹250/-
              </span>
            </a>

            {/* Tertiary Action Button (Instant Estimator) */}
            <a
              href="#/calculator"
              onClick={onOpenCalculator}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4.5 sm:px-5 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-sky-800 bg-sky-50/80 backdrop-blur-md hover:bg-sky-100/90 border border-sky-200/70 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <Calculator className="w-4 h-4 text-sky-600" />
              <span>Size Estimator</span>
            </a>
          </div>

          {/* ========================================================
              INTEGRATED FROSTED GLASS PROOF BAR (with 3D Cursor Tilt Rig)
             ======================================================== */}
          <CursorTiltCard maxTilt={5} className="max-w-5xl 2xl:max-w-6xl mx-auto">
            <div className="rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08),0_0_1px_1px_rgba(255,255,255,0.8)_inset] p-2.5 sm:p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-0 sm:divide-x sm:divide-slate-200/70">
                
                {/* Stat 1: Experience */}
                <div className="flex flex-col items-center text-center p-3 sm:p-3.5 rounded-xl hover:bg-white/90 transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl 2xl:text-3xl font-black text-slate-900 tracking-tight leading-none">
                    10+ Years
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1.5">
                    Serving Kadapa Since 2014
                  </span>
                </div>

                {/* Stat 2: Rating */}
                <div className="flex flex-col items-center text-center p-3 sm:p-3.5 rounded-xl hover:bg-white/90 transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-110 transition-transform">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                  </div>
                  <span className="text-xl sm:text-2xl 2xl:text-3xl font-black text-slate-900 tracking-tight leading-none">
                    5.0 ★ Rating
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1.5">
                    Google Verified Feedback
                  </span>
                </div>

                {/* Stat 3: Turnaround */}
                <div className="flex flex-col items-center text-center p-3 sm:p-3.5 rounded-xl hover:bg-white/90 transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl 2xl:text-3xl font-black text-slate-900 tracking-tight leading-none">
                    2 – 4 Hours
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1.5">
                    Same-Day Express Dispatch
                  </span>
                </div>

                {/* Stat 4: Workshop */}
                <div className="flex flex-col items-center text-center p-3 sm:p-3.5 rounded-xl hover:bg-white/90 transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xl sm:text-2xl 2xl:text-3xl font-black text-slate-900 tracking-tight leading-none">
                    100% Direct
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1.5">
                    Workshop Wholesale Rates
                  </span>
                </div>

              </div>
            </div>
          </CursorTiltCard>

        </div>
      </div>
    </section>
  );
}
