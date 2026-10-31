import React from 'react';
import { Sparkles, Calculator, MessageCircle, Star, ArrowRight, ShieldCheck, Clock, MapPin, Printer, Layers, FileText } from 'lucide-react';

export default function Hero({ onOpenCalculator }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50">
      {/* Colorful Printing Light Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-sky-200/40 via-rose-200/30 to-amber-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Original 3D Emblem Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-rose-400 to-amber-400 rounded-full blur-md opacity-35 group-hover:opacity-70 transition duration-500"></div>
              <img
                src="/logo.png"
                alt="City Grafix Kadapa Emblem Logo"
                className="relative w-32 sm:w-40 md:w-44 h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Top CMYK & Location Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-5 max-w-full overflow-hidden">
            <div className="flex items-center gap-1 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0]" title="Cyan" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC008C]" title="Magenta" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD100]" title="Yellow" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#231F20]" title="Key Black" />
            </div>
            <span className="text-xs font-bold text-slate-700 ml-1 truncate">
              Opp. Tirumala Hospital, Kadapa
            </span>
            <span className="text-slate-300 shrink-0">|</span>
            <div className="flex items-center gap-1 text-amber-600 text-xs font-extrabold shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 Google Rating</span>
            </div>
          </div>

          {/* Main Title with Complete Printing Solutions */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.18] sm:leading-[1.15] mb-4">
            Complete Printing,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500">
              Jumbo Xerox
            </span>{' '}
            & 3D Signage in Kadapa
          </h1>

          {/* Official Core Value Proposition */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-4 text-[11px] sm:text-xs font-bold text-slate-700 bg-slate-100/90 px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">
            <span>Quality Printing</span>
            <span className="text-slate-400">•</span>
            <span>Creative Designing</span>
            <span className="text-slate-400">•</span>
            <span>Affordable Prices</span>
            <span className="text-slate-400">•</span>
            <span>On-Time Delivery</span>
          </div>

          {/* Telugu Tagline & Description */}
          <p className="text-base sm:text-lg text-slate-700 font-bold mb-2">
            కడపలో మీ నమ్మకమైన ప్రింటింగ్ & జంబో జిరాక్స్ పార్ట్నర్
          </p>
          <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto mb-9 leading-relaxed font-medium">
            Your one-stop destination for <span className="text-sky-700 font-bold bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">A0–A4 Jumbo Xerox</span>, high-speed <span className="text-indigo-700 font-bold bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">CAD Blueprint Plans</span>, <span className="text-rose-700 font-bold bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">Star Flex Banners</span>, glowing <span className="text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">3D Acrylic LED Letters</span>, Sunboards, Custom T-Shirts, and Photo Gifts.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14 w-full">
            <a
              href="#calculator"
              onClick={onOpenCalculator}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 shadow-xl shadow-sky-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <Calculator className="w-4 h-4 text-white" />
              <span>Instant Price Calculator</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <a
              href="https://wa.me/917601043674?text=Hi%20City%20Grafix%2C%20I%20want%20to%20inquire%20about%20printing%20or%20Jumbo%20Xerox%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm text-slate-800 bg-white hover:bg-slate-50 border-2 border-emerald-500 shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Direct Order</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-col items-center p-2.5 sm:p-3 text-center border-r border-slate-100 last:border-r-0">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-sky-100 text-sky-700 mb-1.5">
                <FileText className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <span className="text-base sm:text-lg font-black text-slate-900">A0 - A4 Xerox</span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Jumbo Plan Printing</span>
            </div>

            <div className="flex flex-col items-center p-2.5 sm:p-3 text-center border-r border-slate-100 last:border-r-0">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-rose-100 text-rose-700 mb-1.5">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <span className="text-base sm:text-lg font-black text-slate-900">2 - 4 Hrs</span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Urgent Same-Day Flex</span>
            </div>

            <div className="flex flex-col items-center p-2.5 sm:p-3 text-center border-r border-slate-100 last:border-r-0">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-amber-100 text-amber-700 mb-1.5">
                <Star className="w-4 sm:w-5 h-4 sm:h-5 fill-amber-500 text-amber-500" />
              </div>
              <span className="text-base sm:text-lg font-black text-slate-900">5.0 ★</span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Google Verified Score</span>
            </div>

            <div className="flex flex-col items-center p-2.5 sm:p-3 text-center">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-emerald-100 text-emerald-700 mb-1.5">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <span className="text-base sm:text-lg font-black text-slate-900">Prime Kadapa</span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Opp. Tirumala Hospital</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
