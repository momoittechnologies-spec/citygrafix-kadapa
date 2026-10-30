import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceRequired, setServiceRequired] = useState('Star Flex Banner');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const query = [
      `*New Inquiry via Website - City Grafix Kadapa*`,
      `*Name:* ${name}`,
      phone ? `*Phone:* ${phone}` : '',
      `*Service Required:* ${serviceRequired}`,
      message ? `*Message:* ${message}` : '',
      `-----------------------------`,
      `Please let me know the quote and design procedure.`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/917601043674?text=${encodeURIComponent(query)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us or Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Get in Touch with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">
              City Grafix
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Visit our workshop at Seven Roads Circle or message us directly on WhatsApp. We are here to bring your visual branding to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    Store Location & Workshop
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    City Grafix - Kadapa
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    #21/135, Seven Roads Circle,<br />
                    Opposite Tirumala Hospital / Palla Hospital,<br />
                    Beside New AF Automart Street, Ganagapeta,<br />
                    Kadapa, Andhra Pradesh - 516001
                  </p>
                  <a
                    href="https://maps.google.com/?q=City+Grafix+Seven+Roads+Kadapa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/40 transition-all"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Google Map Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone Numbers Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    Direct Call & WhatsApp
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">
                    Fast Response Lines
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <a
                      href="tel:+917601043674"
                      className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all block"
                    >
                      <span className="text-[11px] text-slate-400 block">Primary Shop Call:</span>
                      <span className="text-sm font-bold text-white tracking-wide">
                        076010 43674
                      </span>
                    </a>

                    <a
                      href="https://wa.me/917287867584"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all block"
                    >
                      <span className="text-[11px] text-slate-400 block">WhatsApp & Support:</span>
                      <span className="text-sm font-bold text-emerald-400 tracking-wide">
                        +91 72878 67584
                      </span>
                    </a>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>10:00 AM – 10:00 PM</span>
                    </div>
                    <a
                      href="https://www.instagram.com/citygrafix1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-pink-400 hover:underline font-semibold"
                    >
                      <InstagramIcon className="w-4 h-4" />
                      <span>@citygrafix1</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="glass-card rounded-3xl overflow-hidden border border-white/10 h-64 w-full">
              <iframe
                title="City Grafix Location - Seven Roads Kadapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.3983226296316!2d78.8172363!3d14.47803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb37207604b1ea9%3A0x6b7ca2c525f00e99!2sSeven%20Roads%20Cir%2C%20Kadapa%2C%20Andhra%20Pradesh%20516001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Quick WhatsApp Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl p-7 sm:p-9 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="mb-6">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-wider block mb-1">
                  Online Work Inquiry
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Send Your Project Details
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your requirements below to instantly generate a WhatsApp message to our team.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-3 text-emerald-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>WhatsApp message prepared! Opening WhatsApp now...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name or Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy / Sri Sai Enterprises"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  >
                    <option value="Star Flex Banner">Star Flex Banner (హై-గ్లోస్ బ్యానర్)</option>
                    <option value="3D Acrylic LED Letters">3D Acrylic LED Letters (3D అక్రిలిక్ బోర్డ్)</option>
                    <option value="LED Glow Sign Board">LED Glow Sign Board (లైట్ బోర్డ్)</option>
                    <option value="Vinyl Sticker / Frosted Film">Vinyl Sticker / Frosted Film (స్టిక్కర్స్)</option>
                    <option value="One-Way Vision Glass Film">One-Way Vision Glass Film (గ్లాస్ బ్రాండింగ్)</option>
                    <option value="Custom Photo Frames">Custom Photo Frames (ఫోటో ఫ్రేమ్స్)</option>
                    <option value="Custom Ceramic / Magic Mugs">Custom Mugs (కస్టమ్ మగ్స్)</option>
                    <option value="Visiting Cards (1000 pcs)">Visiting Cards (విజిటింగ్ కార్డ్స్)</option>
                    <option value="Urgent Graphic Design">Urgent Graphic Design (డిజైనింగ్ వర్క్)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Size, Quantity or Details
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Mention dimensions (e.g. 10x4 ft), event date, Telugu text details, etc."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl p-4 text-sm text-white focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 shadow-xl shadow-cyan-950 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-400 pt-1">
                  You will be connected directly with City Grafix on WhatsApp. No spam guaranteed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
