import React from 'react';
import { ShieldCheck, Zap, FileCheck, Award, MapPin, Wrench } from 'lucide-react';

export default function WhyUs() {
  const advantages = [
    {
      icon: Zap,
      title: 'Same-Day Express Dispatch',
      telugu: 'అర్జెంట్ ప్రింటింగ్ సర్వీస్',
      description: 'Have an urgent event or grand opening? Provide your ready-to-print design (CDR, PSD, PDF, or high-res JPG), and we will print, eyelet, and finish your Star Flex banners within 2 to 4 hours with uncompromised quality.',
      bgColor: 'bg-gradient-to-br from-amber-50/70 to-white',
      borderColor: 'border-amber-200/90',
      iconColor: 'text-amber-600',
      badgeColor: 'bg-amber-100 text-amber-900 border border-amber-300'
    },
    {
      icon: ShieldCheck,
      title: 'Fade-Resistant UV & Weatherproof Inks',
      telugu: 'సూర్యరశ్మికి రంగు చెరగని క్వాలిటీ ప్రింటింగ్',
      description: 'Specially formulated fade-resistant outdoor inks that do not crack or wash out under Kadapa’s intense summer heat, dust, and rain, maintaining vivid brand colors year-round.',
      bgColor: 'bg-gradient-to-br from-sky-50/70 to-white',
      borderColor: 'border-sky-200/90',
      iconColor: 'text-sky-600',
      badgeColor: 'bg-sky-100 text-sky-900 border border-sky-300'
    },
    {
      icon: FileCheck,
      title: 'Customer Ready-Design Printing Support',
      telugu: 'కస్టమర్ రెడీ డిజైన్ ప్రింటింగ్ & సపోర్ట్',
      description: 'Customers provide their own ready-made designs. We accept all standard formats—CorelDRAW (.cdr), Photoshop (.psd), PDF, TIFF, or high-res JPG—with pre-flight sizing and resolution checks for razor-sharp printing.',
      bgColor: 'bg-gradient-to-br from-rose-50/70 to-white',
      borderColor: 'border-rose-200/90',
      iconColor: 'text-rose-600',
      badgeColor: 'bg-rose-100 text-rose-900 border border-rose-300'
    },
    {
      icon: Award,
      title: 'Wholesale Direct Workshop Rates',
      telugu: 'రీజనబుల్ హోల్‌సేల్ ధరలు',
      description: 'Zero third-party commissions. We operate our own large-format printing machines, Jumbo Xerox plotters, and sign board fabrication unit to offer the most competitive wholesale rates.',
      bgColor: 'bg-gradient-to-br from-emerald-50/70 to-white',
      borderColor: 'border-emerald-200/90',
      iconColor: 'text-emerald-600',
      badgeColor: 'bg-emerald-100 text-emerald-900 border border-emerald-300'
    },
    {
      icon: MapPin,
      title: 'Prime Kadapa Central Landmark',
      telugu: 'తిరుమల హాస్పిటల్ ఎదురుగా మెయిన్ లొకేషన్',
      description: 'Conveniently located opposite Tirumala Hospital, beside New AF Automart Street, Kadapa for fast collection, review, and personal consultation.',
      bgColor: 'bg-gradient-to-br from-purple-50/70 to-white',
      borderColor: 'border-purple-200/90',
      iconColor: 'text-purple-600',
      badgeColor: 'bg-purple-100 text-purple-900 border border-purple-300'
    },
    {
      icon: Wrench,
      title: 'Complete On-Site Installation',
      telugu: 'ఫ్రేమింగ్ & ఆన్‌సైట్ ఫిట్టింగ్ వర్క్',
      description: 'We don’t just print; we fabricate heavy MS iron frames, wooden beedings, and provide on-site mounting across Kadapa and surrounding areas.',
      bgColor: 'bg-gradient-to-br from-orange-50/70 to-white',
      borderColor: 'border-orange-200/90',
      iconColor: 'text-orange-600',
      badgeColor: 'bg-orange-100 text-orange-900 border border-orange-300'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-black mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5 text-purple-600" />
            <span>The City Grafix Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Kadapa Trusts{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500">
              City Grafix
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Backed by a 5.0★ Google customer rating, we operate modern commercial printing machinery, wide-format Jumbo Xerox plotters, and specialized sign fabrication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-7 border-2 ${adv.borderColor} ${adv.bgColor} shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 group`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm mb-5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${adv.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-1">
                    {adv.title}
                  </h3>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-3 ${adv.badgeColor}`}>
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
