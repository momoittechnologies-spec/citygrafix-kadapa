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
    <section id="gallery-hub" className="py-20 sm:py-28 bg-stone-50 text-zinc-900 relative overflow-hidden border-b border-stone-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl 2xl:max-w-5xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold mb-3.5 shadow-2xs">
            <Camera className="w-3.5 h-3.5 text-rose-600" />
            <span>Photographer-Controlled Alternative to PhotoMall</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-3">
            Dedicated Event Photo Galleries{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600">
              for Your Clients
            </span>
          </h2>

          <p className="font-anek text-lg sm:text-xl font-bold text-rose-700 mb-3">
            కస్టమర్ ఫోటో సెలెక్షన్ & వాట్సాప్ ఆల్బమ్ అప్రూవల్ ప్లాట్‌ఫారమ్
          </p>

          <p className="font-sans text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Eliminate expensive third-party subscriptions and artificial photo expiry. Give your wedding and event clients an instant, mobile-friendly gallery with zero login required.
          </p>

          {/* Quick CTA Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenGallery('rahul-sneha-wedding')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 font-bold text-xs sm:text-sm text-white shadow-md shadow-rose-600/20 transition-all hover:scale-105 active:scale-95 min-h-[44px]"
            >
              <Eye className="w-4 h-4" />
              <span>Live Client Demo: Rahul & Sneha Wedding</span>
            </button>

            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 font-bold text-xs sm:text-sm text-zinc-800 transition-all shadow-2xs min-h-[44px]"
            >
              <Lock className="w-4 h-4 text-sky-600" />
              <span>Open Photographer Admin Dashboard</span>
            </button>
          </div>
        </div>

        {/* 3 Pillars / Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="atelier-card p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-atelier-sm hover:shadow-atelier-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4 shadow-2xs">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-lg font-extrabold text-zinc-900 mb-2">
              Photographer-Controlled Expiry
            </h3>
            <p className="font-sans text-xs text-zinc-600 leading-relaxed font-medium">
              Set each gallery to remain active for 6 months, 1 year, 2 years, or forever. When a gallery expires, extend its validity anytime with 1 click.
            </p>
          </div>

          <div className="atelier-card p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-atelier-sm hover:shadow-atelier-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mb-4 shadow-2xs">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-lg font-extrabold text-zinc-900 mb-2">
              WhatsApp Album Proofing
            </h3>
            <p className="font-sans text-xs text-zinc-600 leading-relaxed font-medium">
              Clients can heart their favorite 30–50 photos and tap "Send Album Selection to WhatsApp" directly to your studio for printing and album binding.
            </p>
          </div>

          <div className="atelier-card p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-atelier-sm hover:shadow-atelier-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mb-4 shadow-2xs">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-lg font-extrabold text-zinc-900 mb-2">
              Zero Login Friction for Guests
            </h3>
            <p className="font-sans text-xs text-zinc-600 leading-relaxed font-medium">
              Relatives and guests simply tap the WhatsApp link to view and download photos in high-res. No account creation, app downloads, or passwords needed.
            </p>
          </div>
        </div>

        {/* Interactive Event Showcase */}
        <div className="border-t border-stone-200 pt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-outfit text-xl font-extrabold text-zinc-900">
                Live Client Gallery Showcases
              </h3>
              <p className="font-sans text-xs text-zinc-500 font-medium">
                Click any gallery to experience the mobile-first customer viewer:
              </p>
            </div>

            <button
              onClick={onOpenAdmin}
              className="text-xs font-bold text-sky-700 hover:underline flex items-center gap-1 min-h-[44px]"
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
                  className="atelier-card group relative rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-atelier-sm hover:shadow-atelier-md cursor-pointer transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-52 w-full overflow-hidden relative bg-stone-100">
                    <img
                      src={evt.coverImage || evt.photos?.[0]?.url}
                      alt={evt.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/90 text-zinc-900 backdrop-blur-md border border-white/50 shadow-2xs">
                        {evt.eventType}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      {expiry.isExpired ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-600 text-white shadow-2xs">
                          Expired
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-2xs">
                          Active ({expiry.daysRemaining}d)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="font-outfit text-base font-extrabold text-zinc-900 group-hover:text-rose-600 transition-colors truncate">
                      {evt.title}
                    </h4>
                    <p className="font-sans text-xs text-zinc-500 mt-1 font-medium">
                      {evt.clientName} • {evt.photos?.length || 0} Photographs
                    </p>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-rose-600 font-bold">
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
