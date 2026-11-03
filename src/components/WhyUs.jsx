import React from 'react';
import { ShieldCheck, Zap, FileCheck, Award, MapPin, Wrench } from 'lucide-react';

export default function WhyUs() {
  const advantages = [
    {
      icon: Zap,
      title: 'Same-Day Express Dispatch',
      telugu: 'అర్జెంట్ ప్రింటింగ్ సర్వీస్',
      description: 'Have an urgent event or grand opening? Provide your ready-to-print design (CDR, PSD, PDF, or high-res JPG), and we will print, eyelet, and finish your Star Flex banners within 2 to 4 hours with uncompromised quality.',
      iconColor: 'text-amber-500',
    },
    {
      icon: ShieldCheck,
      title: 'Fade-Resistant UV & Weatherproof Inks',
      telugu: 'సూర్యరశ్మికి రంగు చెరగని క్వాలిటీ ప్రింటింగ్',
      description: 'Specially formulated fade-resistant outdoor inks that do not crack or wash out under Kadapa’s intense summer heat, dust, and rain, maintaining vivid brand colors year-round.',
      iconColor: 'text-sky-600',
    },
    {
      icon: FileCheck,
      title: 'Customer Ready-Design Printing Support',
      telugu: 'కస్టమర్ రెడీ డిజైన్ ప్రింటింగ్ & సపోర్ట్',
      description: 'Customers provide their own ready-made designs. We accept all standard formats—CorelDRAW (.cdr), Photoshop (.psd), PDF, TIFF, or high-res JPG—with pre-flight sizing and resolution checks for razor-sharp printing.',
      iconColor: 'text-rose-600',
    },
    {
      icon: Award,
      title: 'Wholesale Direct Workshop Rates',
      telugu: 'రీజనబుల్ హోల్‌సేల్ ధరలు',
      description: 'Zero third-party commissions. We operate our own large-format printing machines, Jumbo Xerox plotters, and sign board fabrication unit to offer the most competitive wholesale rates.',
      iconColor: 'text-emerald-600',
    },
    {
      icon: MapPin,
      title: 'Prime Kadapa Central Landmark',
      telugu: 'తిరుమల హాస్పిటల్ ఎదురుగా మెయిన్ లొకేషన్',
      description: 'Conveniently located opposite Tirumala Hospital, beside New AF Automart Street, Kadapa for fast collection, review, and personal consultation.',
      iconColor: 'text-rose-600',
    },
    {
      icon: Wrench,
      title: 'Complete On-Site Installation',
      telugu: 'ఫ్రేమింగ్ & ఆన్‌సైట్ ఫిట్టింగ్ వర్క్',
      description: 'We don’t just print; we fabricate heavy MS iron frames, wooden beedings, and provide on-site mounting across Kadapa and surrounding areas.',
      iconColor: 'text-slate-800',
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center max-w-4xl 2xl:max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-black mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-rose-600" />
            <span>The City Grafix Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Why Kadapa Trusts{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-slate-950">
              City Grafix
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Backed by a 5.0★ Google customer rating, we operate modern commercial printing machinery, wide-format Jumbo Xerox plotters, and specialized sign fabrication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-7 bg-white/95 border border-slate-200/90 shadow-xs hover:border-rose-400 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs mb-5 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-50 group-hover:border-rose-200 transition-all">
                    <Icon className={`w-6 h-6 ${adv.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-black text-slate-950 mb-1">
                    {adv.title}
                  </h3>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-3 bg-slate-100 text-slate-800 border border-slate-200">
                    {adv.telugu}
                  </span>

                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
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
