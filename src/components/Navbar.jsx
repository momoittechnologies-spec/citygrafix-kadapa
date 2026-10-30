import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Star, Sparkles, Lock } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Navbar() {
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
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all text-slate-600 hover:text-slate-900 hover:bg-white flex items-center gap-1.5"
                >
                  {link.icon === 'star' && <Star className="w-3 h-3 text-amber-500 fill-amber-400" />}
                  {link.icon === 'instagram' && <InstagramIcon className="w-3 h-3 text-rose-500" />}
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            {/* Direct Quick Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Call Shop */}
              <a
                href="tel:+917601043674"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>076010 43674</span>
              </a>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917601043674?text=Hi%20City%20Grafix%2C%20I%20visited%20your%20website%20and%20want%20to%20inquire%20about%20printing."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-xl shadow-md shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="https://wa.me/917601043674"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-emerald-600 rounded-xl text-xs font-bold shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-xl focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 pb-5 px-3 bg-white border border-slate-200 rounded-2xl shadow-xl space-y-2 animate-fadeIn">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-sm font-semibold transition-all text-slate-700 hover:text-slate-900 hover:bg-slate-50 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      {link.icon === 'star' && <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />}
                      {link.icon === 'instagram' && <InstagramIcon className="w-3.5 h-3.5 text-rose-500" />}
                      <span>{link.label}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                <a
                  href="tel:+917601043674"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call Shop</span>
                </a>
                <a
                  href="https://wa.me/917601043674?text=Hi%20City%20Grafix%2C%20I%20want%20to%20place%20an%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
