import React from 'react';
import { Star, CheckCircle, ExternalLink, ThumbsUp, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export default function Testimonials() {
  const GOOGLE_REVIEW_URL = 'https://www.reviewsmart.online/r/citygrafix';

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-3 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Google Business Profile Verified</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Rated{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
              5.0 / 5.0
            </span>{' '}
            by Kadapa Clients
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real feedback from Kadapa doctors, shop owners, event organizers, and families who rely on City Grafix for premium Star Flex, glowing sign boards, and fast delivery.
          </p>
        </div>

        {/* Standout Google Business Profile Review Integration Banner */}
        <div className="max-w-4xl mx-auto mb-16 rounded-3xl bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-emerald-500/10 border-2 border-amber-300/80 p-6 sm:p-8 shadow-xl shadow-amber-500/5 relative overflow-hidden backdrop-blur-sm">
          {/* Subtle Google colors indicator strip */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Google G Logo Badge */}
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center shrink-0 p-3">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-400" />
                  ))}
                  <span className="ml-2 font-black text-slate-900 text-lg">5.0 Star Rating</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  Share Your Experience on Google
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Have you printed flex or ordered sign boards with us? Your feedback helps local Kadapa businesses find trusted quality.
                </p>
              </div>
            </div>

            {/* Direct Google Review Action Button */}
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-extrabold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 shrink-0"
            >
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>Write a Google Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Google Review
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6 font-medium">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">{t.name}</h4>
                  <span className="text-[11px] text-slate-500 font-medium block">{t.role}</span>
                </div>
                {t.verified && (
                  <div className="flex items-center gap-1 text-[10px] text-emerald-800 font-bold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Micro Footer Callout */}
        <div className="text-center">
          <p className="text-xs text-slate-500 font-medium inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Genuine reviews submitted by Kadapa businesses and verified customers.</span>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-sky-600 hover:underline inline-flex items-center gap-0.5"
            >
              <span>Add your review</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
