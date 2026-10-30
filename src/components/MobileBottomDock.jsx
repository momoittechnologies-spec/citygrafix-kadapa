import React from 'react';
import { Phone, MessageCircle, Calculator, Download } from 'lucide-react';

export default function MobileBottomDock({ onOpenInstallModal, isPwaInstalled }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Direct Call */}
        <a
          href="tel:+917601043674"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-sky-100 text-sky-700 mb-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">Call Shop</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/917601043674?text=Hi%20City%20Grafix%2C%20I%20want%20to%20place%20an%20order"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-emerald-100 text-emerald-700 mb-0.5">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold">WhatsApp</span>
        </a>

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

        {/* Install PWA */}
        <button
          onClick={onOpenInstallModal}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-amber-800 hover:text-amber-900 hover:bg-amber-50 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-amber-100 text-amber-700 mb-0.5">
            <Download className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold">
            {isPwaInstalled ? 'App Active' : 'Install App'}
          </span>
        </button>
      </div>
    </div>
  );
}
