import React, { useState, useEffect } from 'react';
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
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-sky-50/40">
      
      {/* ========================================================
          BACKGROUND VISUAL: ADVANCED PRINTING & WORKSHOP ATMOSPHERE
         ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* High-Resolution Commercial Offset & Wide Roll-to-Roll Plotter Machinery */}
        <img
          src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=2000&q=85"
          alt="Advanced Commercial Printing Machinery & Workshop Floor"
          className="w-full h-full object-cover object-center scale-105 opacity-[0.20] mix-blend-multiply filter contrast-125 saturate-125 transition-transform duration-1000"
          loading="eager"
        />

        {/* Precision CAD / Halftone Matrix Grid */}
        <div 
          className="absolute inset-0 opacity-[0.12] mix-blend-color-burn"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(2, 132, 199, 0.2) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Intelligent Multi-Stop Light Glassmorphism Overlays (Guarantees 100% Text Readability) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/96 via-white/88 to-white/97 backdrop-blur-[1px]" />

        {/* CMYK Spectral Color Bleeds & Ambient Lighting Halos */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] 2xl:w-[1500px] h-[550px] bg-gradient-to-r from-cyan-400/18 via-rose-500/16 via-amber-400/16 to-sky-500/18 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-rose-400/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Micro CMYK Calibration & Registration Marks (Subtle Industrial Printshop Accent) */}
      <div className="absolute top-20 left-6 lg:left-12 hidden md:flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400/80 pointer-events-none select-none z-10">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400 shadow-xs" />C</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500 shadow-xs" />M</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 shadow-xs" />Y</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-900 shadow-xs" />K</span>
        <span className="text-slate-300 ml-1">|</span>
        <span className="tracking-widest uppercase">1440 DPI • HEAVY ROLL PLOTTERS</span>
      </div>

      <div className="absolute top-20 right-6 lg:right-12 hidden md:flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400/80 pointer-events-none select-none z-10">
        <span className="tracking-widest uppercase">⊕ PRECISION REGISTRATION</span>
        <span className="text-slate-300">|</span>
        <span>JAPANESE UV INKS</span>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="text-center max-w-5xl 2xl:max-w-6xl mx-auto">
          
          {/* ========================================================
              TOP PRE-TITLE BADGE (Khoon Ka Rishta "Serving Since 2014" Style)
             ======================================================== */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm mb-6 transition-all hover:border-rose-300 group">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-800">
              Serving Kadapa Since 2014
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] sm:text-xs font-bold text-rose-600 flex items-center gap-1">
              <Printer className="w-3.5 h-3.5 text-rose-600" />
              <span>Complete Printing & Signage Studio</span>
            </span>
          </div>

          {/* ========================================================
              MAIN HEADLINE WITH TYPING ROTATING KEYWORD
             ======================================================== */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.18] sm:leading-[1.12] mb-5">
            Every Print from City Grafix Delivers{' '}
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-600 to-sky-600 min-h-[1.25em]">
              <span
                className={`inline-block transition-all duration-300 transform ${
                  fadeState
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 -translate-y-2 scale-95'
                }`}
              >
                {ROTATING_CAPABILITIES[capabilityIndex]}
              </span>
            </span>
          </h1>

          {/* Telugu Tagline & Description */}
          <p className="text-base sm:text-xl text-slate-700 font-bold mb-3">
            కడపలో మీ నమ్మకమైన ప్రింటింగ్ & జంబో జిరాక్స్ పార్ట్నర్
          </p>

          <p className="text-xs sm:text-base 2xl:text-lg text-slate-600 max-w-3xl 2xl:max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
            City Grafix is Kadapa’s one-stop destination for high-definition commercial printing, wide-format CAD architectural drawings, illuminated 3D LED storefront signs, and personalized gifts. Bring your ready-to-print designs (CDR, PSD, PDF) for fast same-day turnaround at direct workshop wholesale rates.
          </p>

          {/* ========================================================
              DUAL CENTERED ACTION BUTTONS (Khoon Ka Rishta Layout)
             ======================================================== */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14 w-full">
            {/* Primary Action Button */}
            <a
              href="#/services"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-2xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-700 hover:to-red-800 shadow-xl shadow-rose-600/25 transition-all hover:scale-105 active:scale-95 border border-rose-500/40 group"
            >
              <span>Explore All 11 Services & Specs</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Action Button (Custom Gifts Studio) */}
            <a
              href="#/custom-gifts"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm text-slate-800 bg-white/95 backdrop-blur-md hover:bg-slate-50 border-2 border-slate-200 hover:border-rose-400 shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <Gift className="w-4 h-4 text-rose-600" />
              <span>Launch 3D Gift Customizer (From ₹250/-)</span>
            </a>

            {/* Instant Estimator Button */}
            <a
              href="#/calculator"
              onClick={onOpenCalculator}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm text-sky-800 bg-sky-50/90 backdrop-blur-md hover:bg-sky-100 border border-sky-200 transition-all active:scale-95"
            >
              <Calculator className="w-4 h-4 text-sky-600" />
              <span>Size Estimator</span>
            </a>
          </div>

          {/* ========================================================
              CLEAN 4-COLUMN COUNTERS & PROOF BAR (Expansive Wide Layout)
             ======================================================== */}
          <div className="max-w-5xl 2xl:max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.07)]">
            <div className="flex flex-col items-center p-3 text-center border-r border-slate-100 last:border-r-0 hover:bg-slate-50/50 rounded-2xl transition-colors">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2 shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                10+ Years
              </span>
              <span className="text-[11px] text-slate-500 font-semibold">
                Serving Kadapa Since 2014
              </span>
            </div>

            <div className="flex flex-col items-center p-3 text-center border-r border-slate-100 last:border-r-0 hover:bg-slate-50/50 rounded-2xl transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2 shadow-xs">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                5.0 ★ Rating
              </span>
              <span className="text-[11px] text-slate-500 font-semibold">
                Google Verified Feedback
              </span>
            </div>

            <div className="flex flex-col items-center p-3 text-center border-r border-slate-100 last:border-r-0 hover:bg-slate-50/50 rounded-2xl transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-2 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                2 – 4 Hours
              </span>
              <span className="text-[11px] text-slate-500 font-semibold">
                Same-Day Express Dispatch
              </span>
            </div>

            <div className="flex flex-col items-center p-3 text-center hover:bg-slate-50/50 rounded-2xl transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                100% Direct
              </span>
              <span className="text-[11px] text-slate-500 font-semibold">
                Workshop Wholesale Rates
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
