import React from 'react';
import { Clock, ShieldAlert, MessageCircle, ArrowLeft, RefreshCw, Lock } from 'lucide-react';
import { checkExpiryStatus } from '../services/galleryStorage';

export default function GalleryExpiredView({ event, onBackHome, onOpenAdmin }) {
  const expiry = checkExpiryStatus(event.expiresAt);

  const handleRequestExtension = () => {
    const text =
      `*Request for Gallery Extension - City Grafix*\n\n` +
      `Hello City Grafix,\n` +
      `Our event gallery for *${event.title}* expired on *${expiry.formattedDate}*.\n` +
      `Could you please extend access for us so our family can view and download our photos?\n\n` +
      `Event: ${event.title} (${event.slug})\n` +
      `Client: ${event.clientName}`;

    const url = `https://wa.me/917601043674?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-4 sm:p-8">
      {/* Top Brand Bar */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between py-4">
        <button
          onClick={onBackHome}
          className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to City Grafix</span>
        </button>

        <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400">
          City Grafix Photo Hub
        </span>
      </div>

      {/* Main Expired Content */}
      <div className="max-w-xl mx-auto w-full my-auto text-center py-12 px-6 bg-slate-900/80 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-xl">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-6">
          <Clock className="w-8 h-8" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
          Retention Period Completed
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          This Gallery Has Expired
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 font-medium">
          The public viewing access for <strong className="text-slate-200">{event.title}</strong> was active until{' '}
          <strong className="text-amber-400">{expiry.formattedDate}</strong> under the studio’s retention policy.
        </p>

        <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 mb-8 leading-relaxed text-left">
          <p className="font-bold text-slate-200 mb-1">Need your pictures extended?</p>
          Your original high-resolution master photographs remain securely archived by City Grafix. Contact us to reactivate your gallery link anytime.
        </div>

        {/* WhatsApp Request Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleRequestExtension}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Request Extension on WhatsApp</span>
          </button>

          <button
            onClick={onOpenAdmin}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white font-bold text-xs transition-all"
          >
            <Lock className="w-3.5 h-3.5 text-sky-400" />
            <span>Photographer Admin Login</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto w-full text-center py-4 text-xs text-slate-500">
        © {new Date().getFullYear()} City Grafix Kadapa • Powered by Independent Cloud Architecture
      </div>
    </div>
  );
}
