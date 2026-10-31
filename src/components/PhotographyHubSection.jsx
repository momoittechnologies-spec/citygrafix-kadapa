import React, { useState, useEffect } from 'react';
import { Camera, Eye, Lock, Clock, Heart, Download, Share2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { getStoredEvents, checkExpiryStatus, subscribeToStorage } from '../gallery/services/galleryStorage';

export default function PhotographyHubSection({ onOpenGallery, onOpenAdmin }) {
  const [events, setEvents] = useState(getStoredEvents);

  useEffect(() => {
    return subscribeToStorage((updated) => {
      if (updated) setEvents(updated);
    });
  }, []);

  const displayEvents = events.slice(0, 3);

  return (
    <section id="gallery-hub" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold mb-3 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-rose-400" />
            <span>Photographer-Controlled Alternative to PhotoMall</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Dedicated Event Photo Galleries{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-rose-400 to-amber-400">
              for Your Clients
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Eliminate expensive third-party subscriptions and artificial photo expiry. Give your wedding and event clients an instant, mobile-friendly gallery with zero login required.
          </p>

          {/* Quick CTA Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenGallery('rahul-sneha-wedding')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 font-bold text-xs sm:text-sm text-white shadow-xl shadow-rose-950/40 transition-all hover:scale-105 active:scale-95"
            >
              <Eye className="w-4 h-4" />
              <span>Live Client Demo: Rahul & Sneha Wedding</span>
            </button>

            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-bold text-xs sm:text-sm text-slate-200 hover:text-white transition-all shadow-md"
            >
              <Lock className="w-4 h-4 text-sky-400" />
              <span>Open Photographer Admin Dashboard</span>
            </button>
          </div>
        </div>

        {/* 3 Pillars / Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-white mb-2">
              Photographer-Controlled Expiry
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Set each gallery to remain active for 6 months, 1 year, 2 years, or forever. When a gallery expires, extend its validity anytime with 1 click.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-white mb-2">
              WhatsApp Album Proofing
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Clients can heart their favorite 30–50 photos and tap "Send Album Selection to WhatsApp" directly to your studio for printing and album binding.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-4">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-white mb-2">
              Zero Login Friction for Guests
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Relatives and guests simply tap the WhatsApp link to view and download photos in high-res. No account creation, app downloads, or passwords needed.
            </p>
          </div>
        </div>

        {/* Interactive Event Showcase Carousel / Grid */}
        <div className="border-t border-slate-800 pt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-extrabold text-white">
                Live Client Gallery Showcases
              </h3>
              <p className="text-xs text-slate-400">
                Click any gallery to experience the mobile-first customer viewer:
              </p>
            </div>

            <button
              onClick={onOpenAdmin}
              className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-1"
            >
              <span>Manage all galleries in Admin</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayEvents.map((evt) => {
              const expiry = checkExpiryStatus(evt.expiresAt);
              return (
                <div
                  key={evt.id}
                  onClick={() => onOpenGallery(evt.slug)}
                  className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-sky-500/50 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-52 w-full overflow-hidden relative">
                    <img
                      src={evt.coverImage || evt.photos?.[0]?.url}
                      alt={evt.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/10">
                        {evt.eventType}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      {expiry.isExpired ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/80 text-white">
                          Expired
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/80 text-white">
                          Active ({expiry.daysRemaining}d)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-base font-extrabold text-white group-hover:text-sky-400 transition-colors truncate">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {evt.clientName} • {evt.photos?.length || 0} Photographs
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-sky-400 font-bold">
                      <span>Open Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
