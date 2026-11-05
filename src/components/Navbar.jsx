import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Star, ChevronDown, Sparkles } from 'lucide-react';
import { CONTACT_NUMBERS } from '../data/contactNumbers';

export default function Navbar({ onOpenContact, currentView = 'home' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary navigation tabs
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
      <div className="h-[3px] w-full cmyk-top-bar" />

      {/* Main Header Bar - Luminous Frosted Glass Atelier Integration */}
      <div
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-stone-200/90 py-2.5 shadow-sm'
            : 'bg-white/85 backdrop-blur-md border-stone-200/70 py-3 shadow-[0_2px_15px_-3px_rgba(24,24,27,0.03)]'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="flex items-center justify-between gap-4 xl:gap-8">
            
            {/* =========================================================
                LEFT: SITE BRANDING & LOGO (Prominent Left Placement)
               ========================================================= */}
            <a href="#/" className="flex items-center gap-3.5 group shrink-0" aria-label="City Grafix Kadapa Home">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full blur-xs bg-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/logo.png"
                  alt="City Grafix Kadapa Logo"
                  className="relative h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                  width="48"
                  height="48"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-outfit font-black text-lg sm:text-xl tracking-tight text-zinc-900 group-hover:text-rose-600 transition-colors">
                    CITY GRAFIX
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded bg-rose-50 text-rose-700 border border-rose-200/80">
                    Kadapa
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Direct Workshop • Est. 2014</span>
                </div>
              </div>
            </a>

            {/* =========================================================
                CENTER: HORIZONTAL PAGE TABS (Luminous Frosted Glass Aesthetic)
               ========================================================= */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navTabs.map((tab) => {
                const isActive = currentView === tab.id;
                return (
                  <a
                    key={tab.id}
                    href={tab.href}
                    className={`relative px-3 xl:px-4 py-2 text-xs xl:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 group whitespace-nowrap rounded-lg ${
                      isActive
                        ? 'text-rose-600 font-extrabold bg-rose-50/70 border border-rose-200/60 shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-950 hover:bg-stone-100/70'
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

                    {/* Active Bottom Indicator Accent */}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-rose-600 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* =========================================================
                RIGHT: STANDOUT ACTION BUTTON (Direct Workshop Contact)
               ========================================================= */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact('all')}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-emerald-600/20 transition-all active:scale-95 group bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500 hover:shadow-lg hover:shadow-emerald-600/30 min-h-[44px]"
                title="Call or WhatsApp our 3 direct lines"
              >
                <div className="flex items-center -space-x-1">
                  <div className="w-5 h-5 rounded-md bg-zinc-950/25 flex items-center justify-center border border-white/20">
                    <Phone className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-5 h-5 rounded-md bg-white text-emerald-600 flex items-center justify-center shadow-xs">
                    <MessageCircle className="w-3 h-3" />
                  </div>
                </div>

                <div className="text-left flex flex-col leading-tight">
                  <span className="flex items-center gap-1 font-extrabold text-xs text-white">
                    Call / WhatsApp
                    <ChevronDown className="w-3 h-3 text-emerald-100 group-hover:translate-y-0.5 transition-transform" />
                  </span>
                  <span className="text-[10px] text-emerald-100/90 font-medium">
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
                className="flex items-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm active:scale-95 min-h-[44px] min-w-[44px] justify-center border border-emerald-500"
                aria-label="Call & WhatsApp Direct Lines"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="text-white/60">/</span>
                <MessageCircle className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl focus:outline-none transition-colors border shadow-xs text-zinc-800 hover:text-zinc-950 bg-stone-100 hover:bg-stone-200 border-stone-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* =========================================================
              MOBILE MENU ACCORDION DRAWER
             ========================================================= */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 pb-5 px-3 rounded-2xl shadow-xl space-y-3 animate-fadeIn border bg-white/95 backdrop-blur-xl border-stone-200 text-zinc-800">
              <div className="flex flex-col space-y-1">
                {navTabs.map((tab) => {
                  const isActive = currentView === tab.id;
                  return (
                    <a
                      key={tab.id}
                      href={tab.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between min-h-[44px] ${
                        isActive
                          ? 'bg-rose-600 text-white font-extrabold shadow-md shadow-rose-600/30'
                          : 'text-zinc-700 hover:text-zinc-950 hover:bg-stone-100'
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
              <div className="pt-3 border-t border-stone-200 space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500">
                    Official Support Lines
                  </span>
                  <span className="text-[10px] text-emerald-600 font-extrabold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Workshop Open 10 AM – 10 PM
                  </span>
                </div>

                {CONTACT_NUMBERS.map((contact) => (
                  <div
                    key={contact.id}
                    className="p-3 rounded-xl border border-stone-200 bg-stone-50 flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-black text-zinc-900">{contact.display}</span>
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
                      <span className="text-[10px] text-zinc-500 block leading-tight font-medium">
                        {contact.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {contact.supportsCall && (
                        <a
                          href={contact.callHref}
                          className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg bg-zinc-900 text-white text-xs hover:bg-zinc-800 shadow-sm"
                          title={`Call ${contact.display}`}
                          aria-label={`Call ${contact.display}`}
                        >
                          <Phone className="w-3.5 h-3.5 text-sky-400" />
                        </a>
                      )}
                      <a
                        href={contact.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg bg-emerald-600 text-white text-xs hover:bg-emerald-700 shadow-sm"
                        title={`WhatsApp ${contact.display}`}
                        aria-label={`WhatsApp ${contact.display}`}
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-white" />
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
