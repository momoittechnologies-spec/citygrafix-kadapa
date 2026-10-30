import React from 'react';
import { Sparkles, Calculator, MessageCircle, Star, ArrowRight, ShieldCheck, Clock, MapPin, Printer } from 'lucide-react';

export default function Hero({ onOpenCalculator }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300">
              Seven Roads Circle, Kadapa
            </span>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>5.0 Google Rating</span>
            </div>
          </div>

          {/* Main Title with CMYK highlights */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Kadapa’s Premier{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">
              Flex Printing
            </span>{' '}
            & 3D Signage Studio
          </h1>

          {/* Telugu & English Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-medium mb-3">
            కడప నమ్మకమైన ఫ్లెక్స్ ప్రింటింగ్ & ప్రీమియం సైన్ బోర్డ్స్ సర్వీస్
          </p>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            From heavy-duty <span className="text-cyan-300 font-semibold">Star Flex</span> and glowing <span className="text-pink-300 font-semibold">3D Acrylic Letters</span> to waterproof <span className="text-amber-300 font-semibold">Vinyl Stickers</span> and customized photo gifts. High-speed delivery right in Seven Roads, Ganagapeta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#calculator"
              onClick={onOpenCalculator}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <Calculator className="w-4 h-4 text-slate-900" />
              <span>Calculate Flex Price</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </a>

            <a
              href="https://wa.me/917601043674?text=Hi%20City%20Grafix%2C%20I%20want%20to%20place%20an%20urgent%20printing%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 transition-all hover:scale-105 shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct Order</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl glass-card border border-white/5">
            <div className="flex flex-col items-center p-3 text-center">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 mb-2">
                <Printer className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white">100+</span>
              <span className="text-xs text-slate-400">Printing Solutions</span>
            </div>

            <div className="flex flex-col items-center p-3 text-center">
              <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400 mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white">2 - 4 Hrs</span>
              <span className="text-xs text-slate-400">Same-Day Urgent Dispatch</span>
            </div>

            <div className="flex flex-col items-center p-3 text-center">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 mb-2">
                <Star className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white">5.0 ★</span>
              <span className="text-xs text-slate-400">Google Customer Score</span>
            </div>

            <div className="flex flex-col items-center p-3 text-center">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white">Seven Roads</span>
              <span className="text-xs text-slate-400">Kadapa Central Hub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
