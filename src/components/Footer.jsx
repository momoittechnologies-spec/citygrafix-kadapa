import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowUp,
  Printer,
  Sparkles,
  ExternalLink,
  Star,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Layers,
  Gift,
  Calculator,
  Film,
  Camera
} from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from './Icons';
import { CONTACT_NUMBERS } from '../data/contactNumbers';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navPages = [
    { label: 'Home Page', href: '#/' },
    { label: 'All Printing Services (11 Core)', href: '#/services' },
    { label: 'Custom Gifts Studio', href: '#/custom-gifts', badge: 'Online Rates' },
    { label: 'Instant Size & Order Estimator', href: '#/calculator' },
    { label: 'Portfolio & Kadapa Projects', href: '#/portfolio' },
    { label: 'Why Choose Us & Machine Specs', href: '#/why-us' },
    { label: 'Google Reviews & Rating', href: '#/reviews', badge: '5.0 ★' },
    { label: 'Store Location & Contact Form', href: '#/contact' },
    { label: 'Photographer Client Galleries', href: '#gallery-hub' },
  ];

  const posterServices = [
    { name: 'Arch Flex (ఆర్చ్ ఫ్లెక్స్)', href: '#/services' },
    { name: 'Hoarding Flex (హోర్డింగ్ ఫ్లెక్స్)', href: '#/services' },
    { name: 'Auto Publicity (ఆటో పబ్లిసిటీ)', href: '#/services' },
    { name: 'Pamphlets & Flyers (పాంప్లెట్లు)', href: '#/services' },
    { name: 'Bill Books & Invoices (బిల్ బుక్స్)', href: '#/services' },
    { name: 'Visiting Cards (1000 Pcs Pack)', href: '#/services' },
    { name: 'Lighting Board (లైటింగ్ సైన్ బోర్డులు)', href: '#/services' },
    { name: '3D Acrylic LED Letters', href: '#/services' },
    { name: 'Jumbo Xerox (A0 - A4 Colour & B/W)', href: '#/services' },
    { name: 'Sunboard & Vinyl Stickers', href: '#/services' },
  ];

  const giftItems = [
    { name: 'Plain Ceramic Mugs', price: '₹350/-', href: '#/custom-gifts' },
    { name: 'Inner Colour Mugs', price: '₹450/-', href: '#/custom-gifts' },
    { name: 'Heart Handle Couple Mugs', price: '₹500/-', href: '#/custom-gifts' },
    { name: 'Magic Heat Reveal Mugs', price: '₹550/-', href: '#/custom-gifts' },
    { name: 'DTF Photo T-Shirts', price: 'From ₹400/-', href: '#/custom-gifts' },
    { name: 'Sublimation T-Shirts', price: 'From ₹300/-', href: '#/custom-gifts' },
    { name: 'Personalized Photo Frames', price: 'From ₹250/-', href: '#/custom-gifts' },
    { name: 'Photo Cushions & Pillows', price: 'From ₹450/-', href: '#/custom-gifts' },
    { name: 'Custom Caps + DTF Print', price: '₹300/-', href: '#/custom-gifts' },
  ];

  return (
    <footer className="bg-stone-100 border-t border-stone-200/90 text-zinc-600 text-xs sm:text-sm relative overflow-hidden">
      {/* Top CMYK calibration strip */}
      <div className="h-[3px] w-full cmyk-top-bar" />

      {/* Top Technical Printing Calibration Ribbon */}
      <div className="w-full bg-zinc-950 text-white text-[10px] font-mono py-1.5 px-4 sm:px-8 border-b border-zinc-800 flex items-center justify-between overflow-x-auto scrollbar-none gap-4 select-none">
        <div className="flex items-center gap-3 shrink-0">
          <span className="flex items-center gap-1 font-bold text-sky-400">● C:100%</span>
          <span className="flex items-center gap-1 font-bold text-rose-500">■ M:100%</span>
          <span className="flex items-center gap-1 font-bold text-amber-400">▲ Y:100%</span>
          <span className="flex items-center gap-1 font-bold text-stone-300">◆ K:100%</span>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <span className="text-zinc-300 hidden sm:inline font-semibold">1440 DPI WIDE-FORMAT CALIBRATION</span>
        </div>
        <div className="flex items-center gap-4 text-zinc-400 shrink-0 font-medium text-[9px] uppercase tracking-wider">
          <span>Kadapa Star Flex & 3D Signage Studio</span>
          <span className="text-zinc-700">•</span>
          <span className="text-emerald-400 font-bold">Serving Since 2014</span>
        </div>
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-14 pb-24 md:pb-14 relative z-10">
        
        {/* =========================================================
            TOP ROW: BRAND BADGE, LIVE STATUS & GOOGLE RATING
           ========================================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-10 mb-12 border-b border-stone-200">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-rose-500/20 rounded-2xl blur-xs opacity-0 group-hover:opacity-100 transition duration-300" />
              <img
                src="/logo.png"
                alt="City Grafix Logo"
                className="relative h-14 sm:h-16 w-auto object-contain bg-white rounded-2xl p-1 shadow-sm border border-stone-200"
              />
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="font-outfit font-black text-xl sm:text-2xl text-zinc-900 tracking-tight">
                  CITY GRAFIX
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
                  Kadapa Central
                </span>
              </div>
              <p className="font-sans text-xs text-zinc-500 font-semibold">
                Complete Printing, Designing, Advertising & Gifting Solutions
              </p>
            </div>
          </div>

          {/* Status & Review Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-stone-200 shadow-2xs text-xs font-bold text-zinc-700 min-h-[44px]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Workshop Open: 10:00 AM – 10:00 PM Daily</span>
            </div>

            <a
              href="https://www.reviewsmart.online/r/citygrafix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 text-amber-900 shadow-2xs hover:shadow-xs transition-all font-bold text-xs group min-h-[44px]"
            >
              <div className="flex items-center -space-x-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-500" />
                ))}
              </div>
              <span className="font-extrabold text-zinc-900">Rated 5.0 on Google</span>
              <ExternalLink className="w-3 h-3 text-amber-700 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* =========================================================
            MAIN 5-COLUMN FOOTER NAVIGATION ARCHITECTURE
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 xl:gap-8 2xl:gap-12 mb-12">
          
          {/* COL 1: WORKSHOP & TRUST BADGE */}
          <div className="space-y-4">
            <h4 className="font-outfit text-xs font-black text-zinc-900 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-stone-200">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>Workshop Landmark</span>
            </h4>

            <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-2">
              <span className="font-outfit text-xs font-black text-zinc-900 block leading-tight">
                City Grafix Workshop & Store
              </span>
              <p className="font-sans text-[11px] text-zinc-600 leading-relaxed font-medium">
                #21/135, Opp. Tirumala Hospital, Beside New AF Automart Street, Kadapa, Andhra Pradesh – 516001.
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center gap-1.5 text-[10px] font-bold text-sky-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Prime Central Kadapa Location</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-[11px] text-zinc-600 space-y-1">
              <span className="font-bold text-zinc-800 block">Accepted File Formats:</span>
              <p className="font-mono text-zinc-500 leading-tight">
                CorelDRAW (.cdr), Photoshop (.psd), PDF, TIFF, or high-res JPG.
              </p>
            </div>
          </div>

          {/* COL 2: SEPARATE PAGES NAVIGATION */}
          <div>
            <h4 className="font-outfit text-xs font-black text-zinc-900 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-stone-200 mb-3">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>Separate Pages</span>
            </h4>
            <ul className="space-y-1">
              {navPages.map((page) => (
                <li key={page.label}>
                  <a
                    href={page.href}
                    className="group py-1 px-2 -mx-2 rounded-lg text-xs font-semibold text-zinc-600 hover:text-zinc-950 hover:bg-white transition-all flex items-center justify-between"
                  >
                    <span className="group-hover:translate-x-1 transition-transform truncate">
                      {page.label}
                    </span>
                    {page.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                        {page.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: 11 CORE SIGNATURE SERVICES */}
          <div>
            <h4 className="font-outfit text-xs font-black text-zinc-900 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-stone-200 mb-3">
              <Printer className="w-3.5 h-3.5 text-amber-600" />
              <span>11 Core Services</span>
            </h4>
            <ul className="space-y-1">
              {posterServices.map((srv) => (
                <li key={srv.name}>
                  <a
                    href={srv.href}
                    className="group py-1 px-2 -mx-2 rounded-lg text-xs font-semibold text-zinc-600 hover:text-rose-600 hover:bg-white transition-all flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-stone-400 group-hover:text-rose-600 transition-colors shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform truncate">
                      {srv.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: CUSTOM GIFTS WITH WORKSHOP RATES */}
          <div>
            <h4 className="font-outfit text-xs font-black text-zinc-900 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-stone-200 mb-3">
              <Gift className="w-3.5 h-3.5 text-rose-600" />
              <span>Personalized Gifts</span>
            </h4>
            <ul className="space-y-1">
              {giftItems.map((gift) => (
                <li key={gift.name}>
                  <a
                    href={gift.href}
                    className="group py-1 px-2 -mx-2 rounded-lg text-xs font-semibold text-zinc-600 hover:text-zinc-950 hover:bg-white transition-all flex items-center justify-between"
                  >
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">
                      {gift.name}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 shrink-0">
                      {gift.price}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 5: DIRECT SUPPORT & 3 OFFICIAL LINES */}
          <div className="space-y-3">
            <h4 className="font-outfit text-xs font-black text-zinc-900 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-stone-200">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Support Lines</span>
            </h4>

            <div className="space-y-2">
              {CONTACT_NUMBERS.map((contact) => (
                <div
                  key={contact.id}
                  className="p-3 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:border-stone-300 transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-zinc-500">
                      {contact.label}
                    </span>
                    <span
                      className={`text-[8px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                        contact.supportsCall
                          ? 'bg-sky-50 text-sky-800 border border-sky-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {contact.badge}
                    </span>
                  </div>

                  <span className="font-mono text-xs font-bold text-zinc-900 block tracking-wide">
                    {contact.display}
                  </span>

                  <div className="flex items-center gap-1.5 pt-1">
                    {contact.supportsCall && (
                      <a
                        href={contact.callHref}
                        className="flex-1 py-1 px-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-[10px] font-bold text-center transition-all shadow-sm flex items-center justify-center gap-1 min-h-[36px]"
                        aria-label={`Call ${contact.display}`}
                      >
                        <Phone className="w-2.5 h-2.5 text-sky-400" />
                        <span>Call</span>
                      </a>
                    )}
                    {contact.supportsWhatsApp && (
                      <a
                        href={contact.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold text-center transition-all shadow-sm flex items-center justify-center gap-1 min-h-[36px]"
                        aria-label={`WhatsApp ${contact.display}`}
                      >
                        <MessageCircle className="w-2.5 h-2.5" />
                        <span>WhatsApp</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* =========================================================
            SOCIAL & REVIEW DOCK
           ========================================================= */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-stone-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-outfit text-xs font-extrabold text-zinc-900">
              Connect Directly with Us:
            </span>
            <span className="font-sans text-xs text-zinc-500 hidden md:inline font-medium">
              Watch machine printing reels, sign tests & client projects
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/citygrafix1/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-stone-50 hover:bg-rose-50 border border-stone-200 hover:border-rose-300 text-zinc-700 hover:text-rose-600 font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all min-h-[44px]"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-rose-500" />
              <span>@citygrafix1</span>
            </a>

            <a
              href="https://www.youtube.com/@Citygrafix1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-stone-50 hover:bg-red-50 border border-stone-200 hover:border-red-300 text-zinc-700 hover:text-red-600 font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all min-h-[44px]"
            >
              <YouTubeIcon className="w-3.5 h-3.5 text-red-600" />
              <span>@Citygrafix1</span>
            </a>

            <a
              href="https://wa.me/917287867584"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all min-h-[44px]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* =========================================================
            BOTTOM COPYRIGHT BAR & BACK TO TOP
           ========================================================= */}
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-zinc-500">
          <div>
            <p className="font-semibold text-zinc-700">
              © {new Date().getFullYear()} City Grafix Kadapa. All rights reserved.
            </p>
            <p className="font-anek text-xs text-rose-700 font-semibold mt-0.5">
              కడపలో మీ నమ్మకమైన ప్రింటింగ్ & జంబో జిరాక్స్ పార్ట్నర్ | Quality Printing • Wholesale Rates • On-Time Delivery
            </p>
            <p className="text-[11px] text-zinc-500 font-medium mt-1.5 flex items-center justify-center sm:justify-start gap-1.5">
              <span>Technology Partner:</span>
              <a
                href="https://www.momoittechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-zinc-800 hover:text-rose-600 transition-colors inline-flex items-center gap-1 underline underline-offset-2"
              >
                MOMO IT TECHNOLOGIES
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white hover:bg-stone-50 text-zinc-700 hover:text-zinc-900 border border-stone-200 shadow-2xs active:scale-95 transition-all text-xs font-bold group min-h-[44px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-rose-600 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
