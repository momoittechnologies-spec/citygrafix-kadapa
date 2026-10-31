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
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 via-white to-sky-50/30 border-y border-slate-200/90 py-5 select-none shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
      
      {/* Edge Gradient Mask Overlays (Left & Right Smooth Fade) */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

      {/* ========================================================
          TRACK 1: PRIMARY SERVICES MARQUEE (FORWARD SCROLL)
         ======================================================== */}
      <div className="flex overflow-hidden py-1">
        <div className="animate-marquee-track flex items-center gap-3">
          {/* Double the array for seamless infinite looping */}
          {[...TRACK_1_SERVICES, ...TRACK_1_SERVICES].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-sky-400 shadow-xs hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5 shrink-0"
            >
              {/* Service Emoji Icon */}
              <span className="text-base group-hover:scale-110 transition-transform">
                {item.icon}
              </span>

              {/* Service Name */}
              <span className="text-xs font-black text-slate-900 group-hover:text-sky-700 tracking-tight transition-colors">
                {item.name}
              </span>

              {/* Telugu Tag */}
              <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-lg border border-rose-200/80">
                {item.telugu}
              </span>

              {/* Specification Badge */}
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg group-hover:bg-sky-100 group-hover:text-sky-700 transition-colors">
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
      <div className="my-2.5 mx-auto max-w-7xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ========================================================
          TRACK 2: CREDENTIALS & GUARANTEES (REVERSE SCROLL)
         ======================================================== */}
      <div className="flex overflow-hidden py-1">
        <div className="animate-marquee-track-fast flex items-center gap-3">
          {/* Double the array for seamless infinite looping */}
          {[...TRACK_2_CREDENTIALS, ...TRACK_2_CREDENTIALS].map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-bold shrink-0 hover:bg-white hover:border-emerald-300 transition-all shadow-2xs"
              >
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Icon className="w-2.5 h-2.5" />
                </div>
                <span className="tracking-tight text-[11px] font-black text-slate-800">
                  {cred.text}
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {cred.highlight}
                </span>
                <span className="text-slate-300 ml-1">•</span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
