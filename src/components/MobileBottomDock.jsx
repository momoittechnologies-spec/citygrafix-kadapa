import React from 'react';
import { Phone, MessageCircle, Calculator, Download } from 'lucide-react';

export default function MobileBottomDock({ onOpenInstallModal, isPwaInstalled }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070b14]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Direct Call */}
        <a
          href="tel:+917601043674"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-slate-800 text-cyan-400 mb-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold">Call Shop</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/917601043674?text=Hi%20City%20Grafix%2C%20I%20want%20to%20place%20an%20order"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/20 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400 mb-0.5">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Price Calculator */}
        <a
          href="#calculator"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/20 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-400 mb-0.5">
            <Calculator className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">Estimate</span>
        </a>

        {/* Install PWA or Location */}
        <button
          onClick={onOpenInstallModal}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-amber-400 hover:text-amber-300 hover:bg-amber-950/20 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-amber-500/20 text-amber-400 mb-0.5">
            <Download className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold">
            {isPwaInstalled ? 'App Active' : 'Install App'}
          </span>
        </button>
      </div>
    </div>
  );
}
