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

  // When on the homepage and at the top, the navigation floats seamlessly over the hero background
  const isHeroTransparent = currentView === 'home' && !isScrolled;

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none">
      {/* CMYK Printing Industry Color Calibration Bar */}
      <div className="h-1 w-full cmyk-top-bar" />

      {/* Main Header Bar - Seamless Frosted Glass Integration */}
      <div
        className={`w-full transition-all duration-300 ${
          isHeroTransparent
            ? 'bg-slate-950/80 backdrop-blur-md py-3.5 sm:py-4 border-b border-slate-800/80 shadow-md'
            : isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 shadow-sm'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3 shadow-2xs'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="flex items-center justify-between gap-4 xl:gap-8">
            
            {/* =========================================================
                LEFT: SITE BRANDING & LOGO (Prominent Left Placement)
               ========================================================= */}
            <a href="#/" className="flex items-center gap-3.5 group shrink-0">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full blur-xs bg-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/logo.png"
                  alt="City Grafix Kadapa"
                  className="relative h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className={`font-black text-lg sm:text-xl tracking-tight transition-colors ${
                    isHeroTransparent ? 'text-white group-hover:text-rose-400' : 'text-slate-900 group-hover:text-rose-600'
                  }`}>
                    CITY GRAFIX
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded bg-rose-50 text-rose-700 border border-rose-200">
                    Kadapa
                  </span>
                </div>
                <div className={`flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold ${
                  isHeroTransparent ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Serving Kadapa Since 2014</span>
                </div>
              </div>
            </a>

            {/* =========================================================
                CENTER: AIRY HORIZONTAL PAGE TABS (Khoon Ka Rishta Aesthetic)
               ========================================================= */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navTabs.map((tab) => {
                const isActive = currentView === tab.id;
                return (
                  <a
                    key={tab.id}
                    href={tab.href}
                    className={`relative px-3 xl:px-4 2xl:px-4.5 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 group whitespace-nowrap ${
                      isActive
                        ? isHeroTransparent
                          ? 'text-white font-black'
                          : 'text-rose-600 font-black'
                        : isHeroTransparent
                        ? 'text-slate-300 hover:text-white font-bold'
                        : 'text-slate-700 hover:text-rose-600 font-bold'
                    }`}
                  >
                    {/* Subtle Frosted Active Pill */}
                    {isActive && (
                      <span className={`absolute inset-0 rounded-lg -z-10 shadow-2xs ${
                        isHeroTransparent
                          ? 'bg-white/15 border border-white/20'
                          : 'bg-rose-50/80 border border-rose-200/70'
                      }`} />
                    )}

                    {tab.icon === 'star' && (
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                    )}

                    <span>{tab.label}</span>

                    {tab.badge && (
                      <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
                        {tab.badge}
                      </span>
                    )}

                    {/* Active & Hover Animated Bottom Accent Indicator */}
                    <span
                      className={`absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-rose-500 scale-x-100 opacity-100 shadow-[0_0_8px_rgba(244,63,94,0.7)]'
                          : 'bg-rose-500 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* =========================================================
                RIGHT: STANDOUT ACTION BUTTON (Refined Proportion & Balance)
               ========================================================= */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact('all')}
                className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-black text-xs shadow-md transition-all active:scale-95 group bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-700 hover:to-red-800 text-white border border-rose-500/40 shadow-rose-600/20 hover:scale-105"
                title="Call or WhatsApp our 3 direct lines"
              >
                <div className="flex items-center -space-x-1">
                  <div className="w-4.5 h-4.5 rounded-md bg-white/20 flex items-center justify-center">
                    <Phone className="w-2.5 h-2.5 text-white" />
                  </div>
                  <div className="w-4.5 h-4.5 rounded-md bg-emerald-400 text-slate-950 flex items-center justify-center">
                    <MessageCircle className="w-2.5 h-2.5" />
                  </div>
                </div>

                <div className="text-left flex flex-col leading-tight">
                  <span className="flex items-center gap-1 font-black text-xs text-white">
                    Call / WhatsApp
                    <ChevronDown className="w-2.5 h-2.5 text-rose-200 group-hover:translate-y-0.5 transition-transform" />
                  </span>
                  <span className="text-[9px] text-rose-100/90 font-semibold">
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
                className={`p-2 rounded-xl focus:outline-none transition-colors border shadow-2xs ${
                  isHeroTransparent
                    ? 'text-white hover:text-white bg-white/10 hover:bg-white/20 border-white/20'
                    : 'text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border-slate-200/90'
                }`}
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
            <div className="lg:hidden mt-3 pt-3 pb-5 px-3 rounded-2xl shadow-2xl space-y-3 animate-fadeIn border bg-white/95 backdrop-blur-xl border-slate-200 text-slate-800">
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
                          ? 'bg-rose-600 text-white font-black shadow-md shadow-rose-600/30'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/80'
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
              <div className={`pt-3 border-t space-y-2 ${isHeroTransparent ? 'border-white/10' : 'border-slate-100'}`}>
                <div className="flex items-center justify-between px-1">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${isHeroTransparent ? 'text-slate-400' : 'text-slate-500'}`}>
                    Official Support Lines
                  </span>
                  <span className="text-[10px] text-emerald-400 font-extrabold">Instant Connect</span>
                </div>

                {CONTACT_NUMBERS.map((contact) => (
                  <div
                    key={contact.id}
                    className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 ${
                      isHeroTransparent
                        ? 'border-white/10 bg-white/5 text-white'
                        : 'border-slate-200/90 bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-xs font-black ${isHeroTransparent ? 'text-white' : 'text-slate-900'}`}>{contact.display}</span>
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
