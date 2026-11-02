import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Star, ChevronDown, Gift, Calculator, Sparkles } from 'lucide-react';
import { CONTACT_NUMBERS } from '../data/contactNumbers';

export default function Navbar({ onOpenContact, currentView = 'home' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Page Tabs matching the Khoon Ka Rishta desktop navigation aesthetic
  const navTabs = [
    { id: 'home', label: 'Home', href: '#/' },
    { id: 'services', label: 'Services', href: '#/services' },
    { id: 'custom-gifts', label: 'Custom Gifts', href: '#/custom-gifts', badge: 'Studio' },
    { id: 'calculator', label: 'Size Estimator', href: '#/calculator' },
    { id: 'portfolio', label: 'Portfolio', href: '#/portfolio' },
    { id: 'why-us', label: 'Why Us', href: '#/why-us' },
    { id: 'reviews', label: 'Reviews', href: '#/reviews', icon: 'star' },
    { id: 'contact', label: 'Contact', href: '#/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* CMYK Printing Industry Color Calibration Bar */}
      <div className="h-1 w-full cmyk-top-bar" />

      {/* Main Header Bar - Full Screen Width Layout with Balanced Padding */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 shadow-sm'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5 shadow-2xs'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="flex items-center justify-between gap-4 xl:gap-8">
            
            {/* =========================================================
                LEFT: SITE BRANDING & LOGO (Sitting gracefully towards the left)
               ========================================================= */}
            <a href="#/" className="flex items-center gap-3.5 group shrink-0">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="City Grafix Kadapa"
                  className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-rose-600 transition-colors">
                    CITY GRAFIX
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200 rounded">
                    Kadapa
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-500 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Serving Kadapa Since 2014</span>
                </div>
              </div>
            </a>

            {/* =========================================================
                CENTER: AIRY HORIZONTAL PAGE TABS (Fully utilizes available width)
               ========================================================= */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
              {navTabs.map((tab) => {
                const isActive = currentView === tab.id;
                return (
                  <a
                    key={tab.id}
                    href={tab.href}
                    className={`relative px-3 xl:px-4 2xl:px-5 py-2 text-sm font-bold transition-all duration-200 flex items-center gap-1.5 group whitespace-nowrap ${
                      isActive
                        ? 'text-rose-600 font-black'
                        : 'text-slate-700 hover:text-rose-600 font-semibold'
                    }`}
                  >
                    {tab.icon === 'star' && (
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400 shrink-0" />
                    )}

                    <span>{tab.label}</span>

                    {tab.badge && (
                      <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
                        {tab.badge}
                      </span>
                    )}

                    {/* Active & Hover Animated Bottom Accent Indicator */}
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-rose-600 scale-x-100 opacity-100'
                          : 'bg-rose-600 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* =========================================================
                RIGHT: STANDOUT ACTION BUTTON (Positioned cleanly on the right)
               ========================================================= */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact('all')}
                className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-700 hover:to-red-800 text-white font-black text-xs sm:text-sm shadow-md shadow-rose-600/20 hover:shadow-lg hover:scale-105 active:scale-95 transition-all border border-rose-500/40 group"
                title="Call or WhatsApp our 3 direct lines"
              >
                <div className="flex items-center -space-x-1">
                  <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
                    <Phone className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-5 h-5 rounded-md bg-emerald-400/90 text-slate-950 flex items-center justify-center">
                    <MessageCircle className="w-3 h-3" />
                  </div>
                </div>

                <div className="text-left flex flex-col leading-tight">
                  <span className="flex items-center gap-1 font-black">
                    Call / WhatsApp
                    <ChevronDown className="w-3 h-3 text-rose-200 group-hover:translate-y-0.5 transition-transform" />
                  </span>
                  <span className="text-[9px] text-rose-100 font-semibold">
                    3 Direct Workshop Lines
                  </span>
                </div>
              </button>
            </div>

            {/* Mobile Header Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact('all')}
                className="flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-rose-600 text-white text-xs font-black shadow-sm active:scale-95"
                aria-label="Call & WhatsApp Direct Lines"
              >
                <Phone className="w-3 h-3" />
                <span className="text-white/60">/</span>
                <MessageCircle className="w-3 h-3" />
                <ChevronDown className="w-2.5 h-2.5 text-white/80" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-xl focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* =========================================================
              MOBILE MENU ACCORDION DRAWER
             ========================================================= */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 pb-5 px-3 bg-white border border-slate-200 rounded-2xl shadow-xl space-y-3 animate-fadeIn">
              <div className="flex flex-col space-y-1">
                {navTabs.map((tab) => {
                  const isActive = currentView === tab.id;
                  return (
                    <a
                      key={tab.id}
                      href={tab.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-rose-50 text-rose-700 border border-rose-200 font-black'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {tab.icon === 'star' && <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />}
                        <span>{tab.label}</span>
                      </div>
                      {tab.badge && (
                        <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                          {tab.badge}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Call & WhatsApp Official Numbers List inside Hamburger */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                    Official Support Lines
                  </span>
                  <span className="text-[10px] text-emerald-700 font-extrabold">Instant Connect</span>
                </div>

                {CONTACT_NUMBERS.map((contact) => (
                  <div
                    key={contact.id}
                    className="p-2.5 rounded-xl border border-slate-200/90 bg-slate-50 flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-black text-slate-900">{contact.display}</span>
                        <span
                          className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded ${
                            contact.supportsCall
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {contact.badge}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 block leading-tight font-medium">
                        {contact.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {contact.supportsCall && (
                        <a
                          href={contact.callHref}
                          className="p-1.5 rounded-lg bg-slate-900 text-white text-xs hover:bg-slate-800 shadow-sm"
                          title={`Call ${contact.display}`}
                        >
                          <Phone className="w-3.5 h-3.5 text-sky-400" />
                        </a>
                      )}
                      <a
                        href={contact.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-emerald-600 text-white text-xs hover:bg-emerald-700 shadow-sm"
                        title={`WhatsApp ${contact.display}`}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
