import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Download, Menu, X, Sparkles, MapPin } from 'lucide-react';

export default function Navbar({ onOpenInstallModal, isPwaInstalled }) {
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
    { label: 'Price Calculator', href: '#calculator', highlight: true },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-pink-500 to-amber-400 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-glow-cyan">
              <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center overflow-hidden">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300 text-lg sm:text-xl">
                  CG
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  CITY GRAFIX
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">
                  Kadapa
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide hidden sm:block">
                Flex Printing & Sign Boards
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  link.highlight
                    ? 'text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400/60 shadow-sm shadow-cyan-950'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Install PWA Button */}
            {!isPwaInstalled && (
              <button
                onClick={onOpenInstallModal}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-all"
                title="Install City Grafix App"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Install App</span>
              </button>
            )}

            {/* Direct Call */}
            <a
              href="tel:+917601043674"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>076010 43674</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917601043674?text=Hi%20City%20Grafix%2C%20I%20visited%20your%20website%20and%20want%20to%20inquire%20about%20printing."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 rounded-lg shadow-md shadow-emerald-950 transition-all hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {!isPwaInstalled && (
              <button
                onClick={onOpenInstallModal}
                className="p-2 text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs flex items-center gap-1"
                aria-label="Install App"
              >
                <Download className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-white/10 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-4 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-fadeIn space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    link.highlight
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
              <a
                href="tel:+917601043674"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Shop</span>
              </a>
              <a
                href="https://wa.me/917601043674?text=Hi%20City%20Grafix%2C%20I%20want%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
