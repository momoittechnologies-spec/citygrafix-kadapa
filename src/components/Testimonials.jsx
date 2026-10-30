import React from 'react';
import { Star, CheckCircle, MessageSquareQuote, ExternalLink } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-[#0a0f1d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Rated <span className="text-amber-400">5.0 / 5.0</span> on Google
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See what Kadapa shop owners, doctors, event organizers, and families say about our printing speed, creative designs, and friendly service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between glass-card-hover"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <span className="text-[11px] text-slate-400">{t.role}</span>
                </div>
                {t.verified && (
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Banner */}
        <div className="mt-12 p-6 rounded-3xl glass-card border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-7 h-7 fill-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Have you worked with City Grafix Kadapa?
              </h4>
              <p className="text-xs text-slate-400">
                Share your experience on Google or drop us a quick review on WhatsApp!
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/917601043674?text=Hi%20City%20Grafix%2C%20I%20would%20like%20to%20share%20my%20feedback%20on%20my%20recent%20printing%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shrink-0"
          >
            <span>Send Feedback</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
