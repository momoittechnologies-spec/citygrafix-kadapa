import React from 'react';
import { Sparkles, Star, ShieldCheck, Zap, MapPin, Phone, Heart, CheckCircle2 } from 'lucide-react';

const TRACK_1_SERVICES = [
  { icon: '🏛️', name: 'ARCH FLEX PRINTING', telugu: 'ఆర్చ్ ఫ్లెక్స్', badge: 'Weddings & Fests', href: '#/services' },
  { icon: '📐', name: 'JUMBO XEROX A0–A4', telugu: 'జంబో జిరాక్స్', badge: 'CAD Blueprints', href: '#/services' },
  { icon: '🏙️', name: 'HIGHWAY HOARDINGS', telugu: 'హోర్డింగ్ ఫ్లెక్స్', badge: '100+ Ft Banners', href: '#/services' },
  { icon: '💡', name: '3D ACRYLIC LED GLOW BOARDS', telugu: 'లైటింగ్ బోర్డులు', badge: 'Storefront Facades', href: '#/services' },
  { icon: '☕', name: 'CUSTOM PHOTO MUGS', telugu: 'మగ్స్ ప్రింటింగ్', badge: 'From ₹350/-', href: '#/custom-gifts' },
  { icon: '👕', name: 'HIGH-DEFINITION DTF T-SHIRTS', telugu: 'టీ-షర్ట్ ప్రింటింగ్', badge: 'From ₹300/-', href: '#/custom-gifts' },
  { icon: '🛺', name: 'AUTO PUBLICITY & SOUND VANS', telugu: 'ఆటో పబ్లిసిటీ', badge: 'City-Wide Branding', href: '#/services' },
  { icon: '🧾', name: 'CARBONLESS NCR BILL BOOKS', telugu: 'బిల్ బుక్స్', badge: 'Numbered Invoices', href: '#/services' },
  { icon: '🖼️', name: 'AMBIENT LED PHOTO FRAMES', telugu: 'ఫోటో ఫ్రేమ్స్', badge: 'From ₹250/-', href: '#/custom-gifts' },
  { icon: '🛋️', name: 'REVERSIBLE SEQUINS PILLOWS', telugu: 'పిల్లో ప్రింటింగ్', badge: 'From ₹450/-', href: '#/custom-gifts' },
  { icon: '💳', name: '350 GSM VISITING CARDS', telugu: 'విజిటింగ్ కార్డ్స్', badge: '1000 Pcs Wholesale', href: '#/services' },
  { icon: '📄', name: 'MULTI-COLOUR PAMPHLETS', telugu: 'పాంప్లెట్లు', badge: 'Fast Offset Flyers', href: '#/services' },
];

const TRACK_2_CREDENTIALS = [
  { icon: Zap, text: '2 TO 4 HOURS SAME-DAY EXPRESS DISPATCH', highlight: '⚡ Urgent Turnaround' },
  { icon: MapPin, text: 'OPPOSITE TIRUMALA HOSPITAL, KADAPA', highlight: 'Prime Central Landmark' },
  { icon: Star, text: '5.0 / 5.0 GOOGLE BUSINESS VERIFIED RATING', highlight: 'Top Rated in Kadapa' },
  { icon: ShieldCheck, text: 'DIRECT WORKSHOP WHOLESALE RATES (NO MIDDLEMEN)', highlight: 'Best Price Promise' },
  { icon: CheckCircle2, text: 'BRING READY-TO-PRINT DESIGNS (CDR, PSD, PDF, TIFF)', highlight: 'Color Calibrated' },
  { icon: Heart, text: 'PERSONALIZED PHOTO GIFTS & 3D VISUAL STUDIO', highlight: 'WhatsApp Approval' },
  { icon: Phone, text: 'CALL / WHATSAPP OFFICIAL LINES: 7287867584 / 9581764937', highlight: 'Instant Support' },
];

export default function TextMarquee() {
  return (
    <section className="relative overflow-hidden bg-stone-50 border-b border-stone-200/80 py-4 select-none">
      
      {/* Edge Gradient Mask Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-stone-50 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-stone-50 to-transparent z-20 pointer-events-none" />

      {/* ========================================================
          TRACK 1: PRIMARY SERVICES MARQUEE (FORWARD SCROLL)
         ======================================================== */}
      <div className="flex overflow-hidden py-1">
        <div className="animate-marquee-track flex items-center gap-3">
          {[...TRACK_1_SERVICES, ...TRACK_1_SERVICES].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200/90 hover:border-rose-300 shadow-2xs hover:shadow-xs transition-all duration-300 group shrink-0"
            >
              <span className="text-base group-hover:scale-110 transition-transform">
                {item.icon}
              </span>

              <span className="font-outfit text-xs font-bold text-zinc-900 group-hover:text-rose-600 tracking-tight transition-colors">
                {item.name}
              </span>

              <span className="font-anek text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-lg border border-rose-200/80">
                {item.telugu}
              </span>

              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 bg-stone-100 px-2 py-0.5 rounded-lg group-hover:bg-rose-50 group-hover:text-rose-700 transition-colors">
                {item.badge}
              </span>

              {/* CMYK Accent Dot */}
              <div className="flex items-center gap-0.5 pl-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" title="Cyan" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" title="Magenta" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD100]" title="Yellow" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Subtle Separator Strip */}
      <div className="my-2 mx-auto max-w-[1720px] h-px bg-stone-200/70" />

      {/* ========================================================
          TRACK 2: CREDENTIALS & GUARANTEES (REVERSE SCROLL)
         ======================================================== */}
      <div className="flex overflow-hidden py-1">
        <div className="animate-marquee-track-fast flex items-center gap-3">
          {[...TRACK_2_CREDENTIALS, ...TRACK_2_CREDENTIALS].map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-stone-100/90 border border-stone-200 text-zinc-700 text-xs font-bold shrink-0 hover:bg-white hover:border-emerald-300 transition-all shadow-2xs"
              >
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Icon className="w-2.5 h-2.5" />
                </div>
                <span className="font-outfit tracking-tight text-[11px] font-bold text-zinc-900">
                  {cred.text}
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {cred.highlight}
                </span>
                <span className="text-stone-300 ml-1">•</span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
