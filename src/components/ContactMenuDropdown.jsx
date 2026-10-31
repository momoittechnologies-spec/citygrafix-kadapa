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

  // Sync tab if initialTab changes
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // Click outside and escape key handling
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-start sm:justify-end sm:pt-20 sm:pr-8 bg-black/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none animate-fadeIn">
      {/* Container Card */}
      <div
        ref={dropdownRef}
        className="w-full sm:w-[420px] bg-white border border-slate-200/90 rounded-t-3xl sm:rounded-3xl shadow-2xl shadow-slate-900/20 overflow-hidden transform transition-all animate-slideUp text-slate-800"
      >
        {/* Mobile Drag Indicator Bar */}
        <div className="sm:hidden pt-3 pb-1">
          <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto" />
        </div>

        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-sky-50/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-500 text-white flex items-center justify-center shadow-md shadow-sky-500/20">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                  Call & WhatsApp Lines
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Kadapa Studio
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                Instant quotes, print orders & reception support
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close contact menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Filters */}
        <div className="px-4 pt-3 pb-1 flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/60">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-1.5 px-2.5 rounded-xl text-xs font-bold transition-all text-center ${
              activeTab === 'all'
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            All Channels
          </button>
          <button
            onClick={() => setActiveTab('calls')}
            className={`flex-1 py-1.5 px-2.5 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1 ${
              activeTab === 'calls'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Phone className="w-3 h-3" />
            <span>Voice Calls</span>
          </button>
          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`flex-1 py-1.5 px-2.5 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1 ${
              activeTab === 'whatsapp'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
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
                className="p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all space-y-2.5"
              >
                {/* Contact Header */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 block">
                      {contact.label}
                    </span>
                    <span className="text-sm sm:text-base font-black text-slate-900 tracking-wide">
                      {contact.display}
                    </span>
                  </div>

                  <span
                    className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      contact.supportsCall
                        ? 'bg-sky-100 text-sky-800 border border-sky-200'
                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                    }`}
                  >
                    {contact.badge}
                  </span>
                </div>

                {/* Optional Note for Reception */}
                {contact.note && (
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-700 bg-amber-50/80 border border-amber-200/60 px-2.5 py-1 rounded-lg">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{contact.note}</span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {/* Call Button */}
                  {contact.supportsCall ? (
                    <a
                      href={contact.callHref}
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all active:scale-95 hover:shadow"
                    >
                      <Phone className="w-3.5 h-3.5 text-sky-400" />
                      <span>Call Now</span>
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-slate-100 text-slate-400 text-xs font-bold border border-slate-200 cursor-not-allowed">
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
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold shadow-sm shadow-emerald-500/20 transition-all active:scale-95"
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
        <div className="p-3.5 bg-slate-100/70 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
          <div className="flex items-center gap-1 font-semibold">
            <Clock className="w-3.5 h-3.5 text-sky-600" />
            <span>10:00 AM – 10:00 PM (Daily)</span>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center gap-1 font-bold text-sky-700 hover:underline"
          >
            <span>Visit Shop</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
