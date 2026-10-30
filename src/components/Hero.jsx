import React from 'react';
import { Sparkles, Calculator, MessageCircle, Star, ArrowRight, ShieldCheck, Clock, MapPin, Printer, Layers, Palette } from 'lucide-react';

export default function Hero({ onOpenCalculator }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50 bg-halftone-dots">
      {/* Colorful Printing Light Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-sky-200/50 via-rose-200/40 to-amber-200/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Original 3D Emblem Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-rose-400 to-amber-400 rounded-full blur-md opacity-35 group-hover:opacity-70 transition duration-500"></div>
              <img
                src="/logo.png"
                alt="City Grafix Kadapa Emblem Logo"
                className="relative w-36 sm:w-44 md:w-48 h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Top CMYK & Location Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0]" title="Cyan" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC008C]" title="Magenta" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD100]" title="Yellow" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#231F20]" title="Key Black" />
            </div>
            <span className="text-xs font-bold text-slate-700 ml-1">
              Seven Roads Circle, Kadapa
            </span>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1 text-amber-600 text-xs font-extrabold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 Google Rating</span>
            </div>
          </div>

          {/* Main Title with Colorful Printing Accents */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5">
            Kadapa’s Premier{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500">
              Flex Printing
            </span>{' '}
            & 3D Signage Studio
          </h1>

          {/* Telugu Tagline & Description */}
          <p className="text-base sm:text-lg text-slate-700 font-semibold mb-3">
            కడప నమ్మకమైన ఫ్లెక్స్ ప్రింటింగ్ & ప్రీమియం సైన్ బోర్డ్స్ సర్వీస్
          </p>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-9 leading-relaxed">
            High-definition <span className="text-sky-700 font-bold bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">1440 DPI Star Flex</span>, waterproof <span className="text-rose-700 font-bold bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">Vinyl Stickers</span>, glowing <span className="text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">3D Acrylic Letters</span>, and personalized photo gifts. Fastest turnaround in Kadapa!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#calculator"
              onClick={onOpenCalculator}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 shadow-lg shadow-sky-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <Calculator className="w-4 h-4 text-white" />
              <span>Calculate Flex Price</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <a
              href="https://wa.me/917601043674?text=Hi%20City%20Grafix%2C%20I%20want%20to%20place%20an%20urgent%20printing%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-slate-800 bg-white hover:bg-slate-50 border-2 border-emerald-500 shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Direct Order</span>
            </a>
          </div>

          {/* Quick Metrics Bar in Colorful Light Theme */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-md">
            <div className="flex flex-col items-center p-3 text-center border-r border-slate-100 last:border-r-0">
              <div className="p-2.5 rounded-2xl bg-sky-100 text-sky-700 mb-2">
                <Printer className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-slate-900">100+</span>
              <span className="text-xs text-slate-500 font-medium">Printing Services</span>
            </div>

            <div className="flex flex-col items-center p-3 text-center border-r border-slate-100 last:border-r-0">
              <div className="p-2.5 rounded-2xl bg-rose-100 text-rose-700 mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-slate-900">2 - 4 Hrs</span>
              <span className="text-xs text-slate-500 font-medium">Urgent Same-Day Flex</span>
            </div>

            <div className="flex flex-col items-center p-3 text-center border-r border-slate-100 last:border-r-0">
              <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-700 mb-2">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <span className="text-xl font-extrabold text-slate-900">5.0 ★</span>
              <span className="text-xs text-slate-500 font-medium">Google Verified Score</span>
            </div>

            <div className="flex flex-col items-center p-3 text-center">
              <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-700 mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-slate-900">Seven Roads</span>
              <span className="text-xs text-slate-500 font-medium">Kadapa Central Hub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
