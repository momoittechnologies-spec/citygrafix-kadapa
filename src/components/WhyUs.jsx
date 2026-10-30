import React from 'react';
import { ShieldCheck, Zap, Palette, Award, MapPin, Wrench } from 'lucide-react';

export default function WhyUs() {
  const advantages = [
    {
      icon: Zap,
      title: 'Same-Day Express Dispatch',
      telugu: 'అర్జెంట్ ప్రింటింగ్ సర్వీస్',
      description: 'Have an urgent event or grand opening? We design, print, and finish Star Flex banners within 2 to 4 hours with no compromise on quality.',
      color: 'from-amber-500 to-yellow-500',
      glow: 'shadow-amber-500/20'
    },
    {
      icon: ShieldCheck,
      title: 'Japanese UV & Eco-Solvent Inks',
      telugu: 'సూర్యరశ్మికి రంగు చెరగని నాణ్యత',
      description: 'Specially formulated inks that do not fade or crack under Kadapa’s harsh summer sun and rain, maintaining vivid brand colors year-round.',
      color: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/20'
    },
    {
      icon: Palette,
      title: 'Expert Telugu & English Designers',
      telugu: 'తెలుగు & ఇంగ్లీష్ గ్రాఫిక్ డిజైనింగ్',
      description: 'Our experienced in-house graphic designers create eye-catching festival banners, political flexes, and corporate logos tailored to your vision.',
      color: 'from-pink-500 to-rose-500',
      glow: 'shadow-pink-500/20'
    },
    {
      icon: Award,
      title: 'Wholesale Direct Workshop Rates',
      telugu: 'రీజనబుల్ హోల్‌సేల్ ధరలు',
      description: 'Zero third-party commissions. We operate our own large-format machines and sign board fabrication unit to offer the most competitive rates.',
      color: 'from-emerald-500 to-teal-500',
      glow: 'shadow-emerald-500/20'
    },
    {
      icon: MapPin,
      title: 'Central Seven Roads Landmark',
      telugu: 'సెవెన్ రోడ్స్ సర్కిల్ మెయిన్ లొకేషన్',
      description: 'Conveniently situated right at Seven Roads Circle, Ganagapeta (opposite Tirumala Hospital) for fast collection, review, and personal consultation.',
      color: 'from-purple-500 to-indigo-500',
      glow: 'shadow-purple-500/20'
    },
    {
      icon: Wrench,
      title: 'Complete On-Site Installation',
      telugu: 'ఫ్రేమింగ్ & ఆన్‌సైట్ ఫిట్టింగ్ వర్క్',
      description: 'We don’t just print; we fabricate heavy MS iron frames, wooden beedings, and provide on-site mounting across Kadapa and surrounding areas.',
      color: 'from-orange-500 to-amber-600',
      glow: 'shadow-orange-500/20'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The City Grafix Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Why Kadapa Trusts{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">
              City Grafix
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Backed by a 5.0★ Google customer rating, we merge creative graphic artistry with commercial grade printing machinery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-7 border border-white/10 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${adv.color} p-0.5 shadow-lg ${adv.glow} mb-5 flex items-center justify-center`}>
                    <div className="w-full h-full bg-slate-950/80 rounded-[14px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {adv.title}
                  </h3>
                  <span className="text-xs font-semibold text-cyan-400 block mb-3">
                    {adv.telugu}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
