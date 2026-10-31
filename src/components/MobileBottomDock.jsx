import React from 'react';
import { Phone, MessageCircle, Calculator, MapPin, ChevronUp } from 'lucide-react';

export default function MobileBottomDock({ onOpenContact }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 px-3 pt-2 pb-[max(8px,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Direct Call Trigger */}
        <button
          type="button"
          onClick={() => onOpenContact && onOpenContact('calls')}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 active:scale-95 transition-all group"
        >
          <div className="p-1 rounded-lg bg-sky-100 text-sky-700 mb-0.5 group-hover:scale-105 transition-transform">
            <Phone className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-0.5">
            <span className="text-[10px] font-bold">Call Us</span>
            <ChevronUp className="w-2.5 h-2.5 text-slate-400" />
          </div>
        </button>

        {/* WhatsApp Direct Trigger */}
        <button
          type="button"
          onClick={() => onOpenContact && onOpenContact('whatsapp')}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 active:scale-95 transition-all group"
        >
          <div className="p-1 rounded-lg bg-emerald-100 text-emerald-700 mb-0.5 group-hover:scale-105 transition-transform">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-0.5">
            <span className="text-[10px] font-extrabold text-emerald-800">WhatsApp</span>
            <ChevronUp className="w-2.5 h-2.5 text-emerald-600" />
          </div>
        </button>

        {/* Price Calculator */}
        <a
          href="#calculator"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-sky-700 hover:text-sky-800 hover:bg-sky-50 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-sky-100 text-sky-700 mb-0.5">
            <Calculator className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">Estimate</span>
        </a>

        {/* Store Location */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-amber-800 hover:text-amber-900 hover:bg-amber-50 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-amber-100 text-amber-700 mb-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold">Location</span>
        </a>
      </div>
    </div>
  );
}
