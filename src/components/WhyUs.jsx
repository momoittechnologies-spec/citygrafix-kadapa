import React from 'react';
import { ShieldCheck, Zap, FileCheck, Award, MapPin, Wrench, Printer, Clock, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      number: '01',
      title: 'Industrial Heavy Machinery & Japanese UV Inks',
      telugu: 'అధిక నాణ్యత గల మెషినరీ & సూర్యరశ్మికి చెరగని రంగులు',
      badge: 'Speed & Durability',
      description: 'We do not outsource printing. City Grafix operates in-house wide-format roll-to-roll plotters using fade-resistant outdoor UV inks that withstand Kadapa’s intense summer heat, dust, and rain without cracking or fading.',
      specs: [
        '1440 DPI high-definition heavy roll plotters',
        'Weatherproof & fade-resistant Japanese UV inks',
        'Same-day 2 to 4 hour express dispatch for urgent events'
      ],
      icon: Printer,
      accent: 'rose'
    },
    {
      number: '02',
      title: 'In-House Iron Welding & 3D Sign Fabrication',
      telugu: 'సొంత వర్క్‌షాప్‌లో ఫ్రేమింగ్ & ఆన్‌సైట్ ఫిట్టింగ్',
      badge: 'Architectural Craft',
      description: 'Beyond printing flex, we are a full-scale structural fabrication shop. Our team welds heavy MS tubular iron frames, fabricates 3D cast acrylic LED channel letters, and provides professional on-site mounting across Kadapa.',
      specs: [
        'Heavy MS iron frame welding & wooden beedings',
        'Precision laser-cut cast acrylic letters with IP67 LEDs',
        'Complete turnkey storefront installation & safety check'
      ],
      icon: Wrench,
      accent: 'sky'
    },
    {
      number: '03',
      title: 'Direct Wholesale Rates & Pre-Flight Design Checks',
      telugu: 'నేరుగా హోల్‌సేల్ ధరలు & కస్టమర్ రెడీ డిజైన్ సపోర్ట్',
      badge: 'Zero Middlemen',
      description: 'Zero third-party commission markups. Bring your ready-to-print designs in CorelDRAW (.cdr), Photoshop (.psd), PDF, TIFF, or high-res JPG. Our technicians perform pre-flight sizing checks for razor-sharp reproduction.',
      specs: [
        'Direct workshop wholesale pricing for bulk & event orders',
        'Full support for CDR, PSD, PDF, TIFF & JPG files',
        'Instant WhatsApp quotation & digital proof verification'
      ],
      icon: Award,
      accent: 'emerald'
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#fbfbfa] relative border-t border-slate-200/90">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl 2xl:max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-black mb-3.5 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-rose-600" />
            <span>The City Grafix Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
            Why Kadapa’s Leading Brands & Doctors Trust{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600">
              City Grafix
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
            Backed by a 5.0★ Google customer rating and over a decade of continuous service opposite Tirumala Hospital. We combine high-speed digital technology with heavy structural fabrication.
          </p>
        </div>

        {/* 3 Master Industrial Pillars (Editorial Asymmetrical Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Number & Tag */}
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
                    <span className="text-3xl font-black text-slate-300 group-hover:text-rose-600 transition-colors font-mono">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 mb-5 group-hover:bg-rose-50 group-hover:border-rose-200 group-hover:text-rose-600 transition-all shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Headings */}
                  <h3 className="text-xl font-black text-slate-950 tracking-tight mb-1 group-hover:text-rose-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-bold text-rose-600 block mb-3">
                    {pillar.telugu}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6">
                    {pillar.description}
                  </p>

                  {/* Specs List */}
                  <ul className="space-y-2 pt-4 border-t border-slate-100">
                    {pillar.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href="#/contact"
                    className="text-xs font-bold text-slate-800 group-hover:text-rose-600 flex items-center gap-1 transition-colors"
                  >
                    <span>Visit Workshop Opp. Tirumala Hospital</span>
                    <ArrowRight className="w-3.5 h-3.5 text-rose-500" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prime Central Landmark Card */}
        <div className="rounded-3xl p-6 sm:p-8 bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 block font-mono">
                Prime Kadapa Landmark
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white">
                #21/135, Opp. Tirumala Hospital, Beside New AF Automart Street, Kadapa
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Convenient location for urgent proof reviews, plan pick-ups, and on-site consultations.
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=City+Grafix+Kadapa+Opp+Tirumala+Hospital"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-xs sm:text-sm shrink-0 transition-all active:scale-95 shadow-md flex items-center gap-2"
          >
            <span>Open Google Maps</span>
            <ArrowRight className="w-4 h-4 text-rose-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
