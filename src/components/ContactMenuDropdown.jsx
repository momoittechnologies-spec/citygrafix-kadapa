import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle, X, Clock, MapPin, ChevronRight, AlertCircle, Sparkles } from 'lucide-react';
import { CONTACT_NUMBERS } from '../data/contactNumbers';

export default function ContactMenuDropdown({
  isOpen,
  onClose,
  initialTab = 'all', // 'all' | 'calls' | 'whatsapp'
}) {
  const [activeTab, setActiveTab] = React.useState(initialTab);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const timer = setTimeout(() => {
      window.addEventListener('click', handleClickOutside);
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClickOutside);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-start sm:justify-end sm:pt-20 sm:pr-8 bg-zinc-950/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none animate-fadeIn">
      {/* Container Card */}
      <div
        ref={dropdownRef}
        className="w-full sm:w-[420px] bg-white border border-stone-200 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-slideUp text-zinc-800"
      >
        {/* Mobile Drag Indicator Bar */}
        <div className="sm:hidden pt-3 pb-1">
          <div className="w-12 h-1 bg-stone-300 rounded-full mx-auto" />
        </div>

        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-outfit font-extrabold text-sm sm:text-base text-zinc-900 tracking-tight">
                  Call & WhatsApp Lines
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Kadapa Studio
                </span>
              </div>
              <p className="font-sans text-[11px] text-zinc-500 font-medium">
                Direct quotes, print orders & reception support
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-zinc-400 hover:text-zinc-700 hover:bg-stone-200 transition-colors"
            aria-label="Close contact menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Filters */}
        <div className="px-4 pt-3 pb-1.5 flex items-center gap-1.5 border-b border-stone-200 bg-stone-50/60">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center min-h-[38px] ${
              activeTab === 'all'
                ? 'bg-white text-zinc-900 shadow-2xs border border-stone-200'
                : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            All Channels
          </button>
          <button
            onClick={() => setActiveTab('calls')}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1 min-h-[38px] ${
              activeTab === 'calls'
                ? 'bg-zinc-900 text-white shadow-2xs'
                : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <Phone className="w-3 h-3" />
            <span>Voice Calls</span>
          </button>
          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1 min-h-[38px] ${
              activeTab === 'whatsapp'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Numbers List */}
        <div className="p-4 sm:p-5 space-y-3 max-h-[60vh] sm:max-h-[460px] overflow-y-auto">
          {CONTACT_NUMBERS.map((contact) => {
            const isHiddenByTab =
              (activeTab === 'calls' && !contact.supportsCall) ||
              (activeTab === 'whatsapp' && !contact.supportsWhatsApp);

            if (isHiddenByTab) return null;

            return (
              <div
                key={contact.id}
                className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60 hover:bg-white hover:border-stone-300 hover:shadow-atelier-sm transition-all space-y-2.5"
              >
                {/* Contact Header */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-zinc-500 block">
                      {contact.label}
                    </span>
                    <span className="font-mono text-sm sm:text-base font-bold text-zinc-900 tracking-wide">
                      {contact.display}
                    </span>
                  </div>

                  <span
                    className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      contact.supportsCall
                        ? 'bg-sky-50 text-sky-800 border border-sky-200'
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}
                  >
                    {contact.badge}
                  </span>
                </div>

                {/* Optional Note for Reception */}
                {contact.note && (
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg">
                    <AlertCircle className="w-3 h-3 shrink-0 text-amber-600" />
                    <span>{contact.note}</span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {/* Call Button */}
                  {contact.supportsCall ? (
                    <a
                      href={contact.callHref}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold shadow-2xs transition-all active:scale-95 min-h-[44px]"
                    >
                      <Phone className="w-3.5 h-3.5 text-sky-400" />
                      <span>Call Now</span>
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-stone-100 text-zinc-400 text-xs font-bold border border-stone-200 cursor-not-allowed min-h-[44px]">
                      <Phone className="w-3.5 h-3.5 opacity-40" />
                      <span>No Calls</span>
                    </div>
                  )}

                  {/* WhatsApp Button */}
                  {contact.supportsWhatsApp && (
                    <a
                      href={contact.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-2xs transition-all active:scale-95 min-h-[44px]"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="p-3.5 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-[11px] text-zinc-600 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span>10:00 AM – 10:00 PM (Daily)</span>
          </div>

          <a
            href="#/contact"
            onClick={onClose}
            className="flex items-center gap-1 font-bold text-rose-600 hover:text-rose-700"
          >
            <span>Visit Shop</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
