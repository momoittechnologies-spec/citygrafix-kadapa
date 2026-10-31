import React from 'react';
import { Phone, MessageCircle, Layers, Calculator, MapPin, ChevronUp, Gift } from 'lucide-react';

export default function MobileBottomDock({ onOpenContact }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 px-2 pt-1.5 pb-[max(8px,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-5 gap-1 max-w-md mx-auto">
        {/* Slot 1: Unified Call / WhatsApp Drawer Trigger */}
        <button
          type="button"
          onClick={() => onOpenContact && onOpenContact('all')}
          className="flex flex-col items-center justify-center p-1 rounded-xl text-emerald-800 hover:text-emerald-900 hover:bg-emerald-50/80 active:scale-95 transition-all group"
        >
          <div className="flex items-center -space-x-1 mb-0.5">
            <div className="p-1 rounded-lg bg-sky-100 text-sky-700 group-hover:scale-105 transition-transform">
              <Phone className="w-3 h-3" />
            </div>
            <div className="p-1 rounded-lg bg-emerald-100 text-emerald-700 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-3 h-3" />
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            <span className="text-[9px] font-black text-emerald-800 leading-tight">Call / WA</span>
            <ChevronUp className="w-2 h-2 text-emerald-600" />
          </div>
        </button>

        {/* Slot 2: Interactive Custom Gifts Studio */}
        <a
          href="#custom-gifts"
          className="flex flex-col items-center justify-center p-1 rounded-xl text-rose-700 hover:text-rose-800 hover:bg-rose-50 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-rose-100 text-rose-600 mb-0.5">
            <Gift className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-black text-rose-700 leading-tight">Gifts</span>
        </a>

        {/* Slot 3: 4-Pillar Services Catalog */}
        <a
          href="#services"
          className="flex flex-col items-center justify-center p-1 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-slate-100 text-slate-700 mb-0.5">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-bold text-slate-700 leading-tight">Services</span>
        </a>

        {/* Slot 4: Instant Price Estimator */}
        <a
          href="#calculator"
          className="flex flex-col items-center justify-center p-1 rounded-xl text-sky-700 hover:text-sky-800 hover:bg-sky-50 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-sky-100 text-sky-700 mb-0.5">
            <Calculator className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-bold text-sky-700 leading-tight">Estimate</span>
        </a>

        {/* Slot 5: Store Location & Directions */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center p-1 rounded-xl text-amber-800 hover:text-amber-900 hover:bg-amber-50 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-amber-100 text-amber-700 mb-0.5">
            <MapPin className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-extrabold text-amber-800 leading-tight">Location</span>
        </a>
      </div>
    </div>
  );
}
