import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Star, ChevronDown } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { CONTACT_NUMBERS } from '../data/contactNumbers';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Google Reviews', href: '#reviews', icon: 'star' },
    { label: 'Instagram', href: '#instagram', icon: 'instagram' },
    { label: 'Contact & Map', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* CMYK Printing Industry Color Calibration Bar */}
      <div className="h-1.5 w-full cmyk-top-bar" />

      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 shadow-md shadow-slate-200/50'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="City Grafix Kadapa"
                className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                    CITY GRAFIX
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-700 border border-sky-300 rounded">
                    Kadapa
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Flex Printing & 3D Signage Studio</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all text-slate-600 hover:text-slate-900 hover:bg-white flex items-center gap-1.5"
                >
                  {link.icon === 'star' && <Star className="w-3 h-3 text-amber-500 fill-amber-400" />}
                  {link.icon === 'instagram' && <InstagramIcon className="w-3 h-3 text-rose-500" />}
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            {/* Direct Quick Actions: Call & WhatsApp with Dropdown */}
            <div className="hidden sm:flex items-center gap-2">
              {/* Call Shop Dropdown Trigger */}
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact('calls')}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/90 rounded-xl transition-all border border-slate-200/90 shadow-sm active:scale-95 group"
                title="View calling numbers"
              >
                <div className="w-5 h-5 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center">
                  <Phone className="w-3 h-3" />
                </div>
                <div className="text-left">
                  <span className="block leading-none text-[11px] font-extrabold text-slate-800">Call Us</span>
                </div>
                <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-slate-600 transition-transform group-hover:translate-y-0.5" />
              </button>

              {/* WhatsApp Dropdown Trigger */}
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact('whatsapp')}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-xl shadow-md shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-95 group"
                title="View WhatsApp numbers"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Order</span>
                <ChevronDown className="w-3 h-3 text-emerald-200 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Header Buttons */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact('all')}
                className="flex items-center gap-1.5 py-1.5 px-2.5 text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl text-xs font-extrabold shadow-sm active:scale-95"
                aria-label="Call and WhatsApp Lines"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="text-[11px]">Contact</span>
                <ChevronDown className="w-3 h-3 text-emerald-200" />
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

          {/* Mobile Hamburger Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 pb-5 px-3 bg-white border border-slate-200 rounded-2xl shadow-xl space-y-3 animate-fadeIn">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-xl text-xs font-bold transition-all text-slate-700 hover:text-slate-900 hover:bg-slate-50 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      {link.icon === 'star' && <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />}
                      {link.icon === 'instagram' && <InstagramIcon className="w-3.5 h-3.5 text-rose-500" />}
                      <span>{link.label}</span>
                    </div>
                  </a>
                ))}
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
                      <span className="text-[10px] text-slate-500 block leading-tight">
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
