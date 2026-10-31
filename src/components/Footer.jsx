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
    { label: 'Social & Video Hub', href: '#/social' },
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
    <footer className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-t border-slate-200/90 text-slate-600 text-xs sm:text-sm relative overflow-hidden shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
      {/* Top CMYK calibration strip */}
      <div className="h-1.5 w-full cmyk-top-bar" />

      {/* Subtle colorful ambient light accents (Light mode) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24 md:pb-14 relative z-10">
        
        {/* =========================================================
            TOP ROW: 3D BRAND BADGE, LIVE STATUS & GOOGLE RATING
           ========================================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-10 mb-12 border-b border-slate-200/80">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-rose-400 to-amber-400 rounded-2xl blur-sm opacity-40 group-hover:opacity-75 transition duration-300" />
              <img
                src="/logo.png"
                alt="City Grafix Logo"
                className="relative h-14 sm:h-16 w-auto object-contain bg-white rounded-2xl p-1 shadow-md border border-slate-200"
              />
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
                  CITY GRAFIX
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-300">
                  Kadapa Central
                </span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">
                Complete Printing, Designing, Advertising & Gifting Solutions
              </p>
            </div>
          </div>

          {/* Status & Review Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs font-bold text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Workshop Open: 10:00 AM – 10:00 PM Daily</span>
            </div>

            <a
              href="https://www.reviewsmart.online/r/citygrafix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-50 to-amber-100/80 border border-amber-300/80 text-amber-900 shadow-sm hover:shadow-md transition-all font-black text-xs group"
            >
              <div className="flex items-center -space-x-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-500" />
                ))}
              </div>
              <span>Rated 5.0 on Google</span>
              <ExternalLink className="w-3 h-3 text-amber-700 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* =========================================================
            MAIN 5-COLUMN FOOTER NAVIGATION ARCHITECTURE
           ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          
          {/* COL 1: WORKSHOP & TRUST BADGE */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Workshop Landmark</span>
            </h4>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <span className="text-xs font-black text-slate-900 block leading-tight">
                City Grafix Workshop & Store
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                #21/135, Opp. Tirumala Hospital, Beside New AF Automart Street, Kadapa, Andhra Pradesh – 516001.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-bold text-sky-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Prime Central Location</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <span className="font-bold text-slate-800 block">Accepted File Formats:</span>
              <p className="text-slate-500 leading-tight">
                CorelDRAW (.cdr), Photoshop (.psd), PDF, TIFF, or high-res JPG.
              </p>
            </div>
          </div>

          {/* COL 2: SEPARATE PAGES NAVIGATION */}
          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-slate-200 mb-3">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>Separate Pages</span>
            </h4>
            <ul className="space-y-1.5">
              {navPages.map((page) => (
                <li key={page.label}>
                  <a
                    href={page.href}
                    className="group py-1 px-2 -mx-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white transition-all flex items-center justify-between"
                  >
                    <span className="group-hover:translate-x-1 transition-transform truncate">
                      {page.label}
                    </span>
                    {page.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-rose-50 text-rose-600 border border-rose-200">
                        {page.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: 11 POSTER SIGNATURE SERVICES */}
          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-slate-200 mb-3">
              <Printer className="w-3.5 h-3.5 text-amber-500" />
              <span>11 Core Services</span>
            </h4>
            <ul className="space-y-1.5">
              {posterServices.map((srv) => (
                <li key={srv.name}>
                  <a
                    href={srv.href}
                    className="group py-1 px-2 -mx-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-sky-700 hover:bg-white transition-all flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-sky-600 transition-colors shrink-0" />
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
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-slate-200 mb-3">
              <Gift className="w-3.5 h-3.5 text-rose-500" />
              <span>Personalized Gifts</span>
            </h4>
            <ul className="space-y-1.5">
              {giftItems.map((gift) => (
                <li key={gift.name}>
                  <a
                    href={gift.href}
                    className="group py-1 px-2 -mx-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white transition-all flex items-center justify-between"
                  >
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">
                      {gift.name}
                    </span>
                    <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 shrink-0">
                      {gift.price}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 5: DIRECT SUPPORT & 3 OFFICIAL LINES */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-slate-200">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Support Lines</span>
            </h4>

            <div className="space-y-2">
              {CONTACT_NUMBERS.map((contact) => (
                <div
                  key={contact.id}
                  className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500">
                      {contact.label}
                    </span>
                    <span
                      className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded ${
                        contact.supportsCall
                          ? 'bg-sky-50 text-sky-800 border border-sky-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {contact.badge}
                    </span>
                  </div>

                  <span className="text-xs font-black text-slate-900 block tracking-wide">
                    {contact.display}
                  </span>

                  <div className="flex items-center gap-1.5 pt-1">
                    {contact.supportsCall && (
                      <a
                        href={contact.callHref}
                        className="flex-1 py-1 px-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-bold text-center transition-all shadow-sm flex items-center justify-center gap-1"
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
                        className="flex-1 py-1 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold text-center transition-all shadow-sm flex items-center justify-center gap-1"
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
            INTERACTIVE 3D SOCIAL & REVIEW DOCK
           ========================================================= */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black text-slate-900">
              Connect Directly with Us:
            </span>
            <span className="text-xs text-slate-500 hidden md:inline">
              Stream live machine printing reels, LED tests & client reviews
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/citygrafix1/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-slate-700 hover:text-rose-600 font-bold text-xs flex items-center gap-1.5 shadow-sm hover:shadow transition-all hover:scale-105"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-rose-500" />
              <span>@citygrafix1</span>
            </a>

            <a
              href="https://www.youtube.com/@Citygrafix1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 text-slate-700 hover:text-red-600 font-bold text-xs flex items-center gap-1.5 shadow-sm hover:shadow transition-all hover:scale-105"
            >
              <YouTubeIcon className="w-3.5 h-3.5 text-red-600" />
              <span>@Citygrafix1</span>
            </a>

            <a
              href="https://wa.me/917287867584"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-xs flex items-center gap-1.5 shadow-sm hover:shadow transition-all hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* =========================================================
            BOTTOM COPYRIGHT BAR & BACK TO TOP
           ========================================================= */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500">
          <div>
            <p className="font-semibold text-slate-700">
              © {new Date().getFullYear()} City Grafix Kadapa. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">
              కడపలో మీ నమ్మకమైన ప్రింటింగ్ & జంబో జిరాక్స్ పార్ట్నర్ | Quality Printing • Wholesale Rates • On-Time Delivery
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-sm hover:shadow active:scale-95 transition-all text-xs font-bold group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-600 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
