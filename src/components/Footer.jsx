import React from 'react';
import { MapPin, Phone, MessageCircle, ArrowUp, Printer, Sparkles, Code2 } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs sm:text-sm relative">
      {/* Top CMYK calibration strip */}
      <div className="h-1.5 w-full cmyk-top-bar" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="City Grafix Logo"
                className="h-14 w-auto object-contain"
              />
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block">
                  CITY GRAFIX
                </span>
                <span className="text-[11px] text-sky-400 font-bold uppercase tracking-wider">
                  Seven Roads Circle, Kadapa
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm max-w-sm">
              Kadapa’s premier digital printing hub, large-format Star Flex supplier, 3D LED glow board manufacturer, and custom photo gifts studio.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/citygrafix1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-rose-500 flex items-center justify-center text-rose-400 hover:scale-105 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917601043674"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-emerald-500 flex items-center justify-center text-emerald-400 hover:scale-105 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+917601043674"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-sky-500 flex items-center justify-center text-sky-400 hover:scale-105 transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-[11px]">
                <Code2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="text-slate-400">Technology Partner:</span>
                <span className="font-bold text-sky-400 tracking-wide">MOMO IT TECHNOLOGIES</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Printing Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Star Flex Banners</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">3D Acrylic LED Letters</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">LED Glow Sign Boards</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">One-Way Vision Glass Film</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Rollup Standees & Arches</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Personalized Photo Mugs</a></li>
            </ul>
          </div>

          {/* Direct Tools */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Features
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#calculator" className="text-sky-400 hover:underline font-semibold">Instant Price Calculator</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Kadapa Project Showcase</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Quality & Machine Specs</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">5.0★ Google Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Seven Roads Location</a></li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Store & Workshop
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              #21/135, Seven Roads Circle, opp. Tirumala hospital, Ganagapeta, Kadapa - 516001
            </p>
            <p className="text-xs text-slate-400 mb-1">
              <strong className="text-slate-200">Mon - Sat:</strong> 10:00 AM – 10:00 PM
            </p>
            <p className="text-xs text-slate-400">
              <strong className="text-slate-200">Sunday:</strong> Flexible / By Appointment
            </p>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p className="text-slate-500">
              © {new Date().getFullYear()} City Grafix Kadapa. All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p className="text-slate-400 flex items-center gap-1.5">
              <span>Technology Partner:</span>
              <span className="font-bold text-sky-400 tracking-wide">MOMO IT TECHNOLOGIES</span>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-400 hover:text-white transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
