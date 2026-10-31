import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from './Icons';
import { CONTACT_NUMBERS } from '../data/contactNumbers';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceRequired, setServiceRequired] = useState('Jumbo Xerox & Plan Printing (A0-A4)');
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
      `Please let me know the quote and turnaround procedure.`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/917601043674?text=${encodeURIComponent(query)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold mb-3 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Visit Us or Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Get in Touch with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-rose-600 to-amber-500">
              City Grafix
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Visit our printing studio opp. Tirumala Hospital, Kadapa or message us directly on WhatsApp. We are here to bring your visual branding and large format drawings to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-600 shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-sky-700 uppercase tracking-wider block mb-1">
                    Store Location & Workshop
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    City Grafix - Kadapa
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4 font-medium">
                    #21/135, Opp. Tirumala Hospital,<br />
                    Beside New AF Automart Street,<br />
                    Kadapa, Andhra Pradesh – 516001.
                  </p>
                  <a
                    href="https://maps.google.com/?q=City+Grafix+Kadapa+Opp+Tirumala+Hospital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-sky-800 bg-sky-100 border border-sky-300 hover:bg-sky-200 transition-all shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Google Map Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone Numbers Card */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider block mb-1">
                    Direct Call & WhatsApp
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-3">
                    Fast Response Lines
                  </h3>

                  <div className="space-y-2.5 mb-4">
                    {CONTACT_NUMBERS.map((contact) => (
                      <div
                        key={contact.id}
                        className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:border-slate-300 transition-all"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-extrabold text-slate-900 tracking-wide">
                              {contact.display}
                            </span>
                            <span
                              className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                                contact.supportsCall
                                  ? 'bg-sky-100 text-sky-800 border border-sky-200'
                                  : 'bg-amber-100 text-amber-800 border border-amber-200'
                              }`}
                            >
                              {contact.badge}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 font-medium block">
                            {contact.label} {contact.note ? `• ${contact.note}` : ''}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {contact.supportsCall && (
                            <a
                              href={contact.callHref}
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                            >
                              <Phone className="w-3 h-3 text-sky-400" />
                              <span>Call</span>
                            </a>
                          )}
                          <a
                            href={contact.whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm shadow-emerald-500/20"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-sky-600" />
                      <span>10:00 AM – 10:00 PM</span>
                    </div>
                    <a
                      href="https://www.instagram.com/citygrafix1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-rose-600 hover:underline font-bold"
                    >
                      <InstagramIcon className="w-4 h-4 text-rose-500" />
                      <span>@citygrafix1</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@Citygrafix1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-red-600 hover:underline font-bold"
                    >
                      <YouTubeIcon className="w-4 h-4 text-red-500" />
                      <span>@Citygrafix1</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-64 w-full">
              <iframe
                title="City Grafix Location - Kadapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.3983226296316!2d78.8172363!3d14.47803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb37207604b1ea9%3A0x6b7ca2c525f00e99!2sSeven%20Roads%20Cir%2C%20Kadapa%2C%20Andhra%20Pradesh%20516001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Quick WhatsApp Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="mb-6">
                <span className="text-xs font-black text-rose-600 uppercase tracking-wider block mb-1">
                  Online Work Inquiry
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Send Your Project Details
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                  Select your service below to instantly generate a pre-formatted WhatsApp message to our team.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center gap-3 text-emerald-900 text-sm font-bold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>WhatsApp message prepared! Opening WhatsApp now...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Name or Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy / Sri Sai Enterprises"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border-2 border-slate-200 focus:border-sky-500 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border-2 border-slate-200 focus:border-sky-500 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Service Required *
                  </label>
                  <select
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="w-full bg-white border-2 border-slate-200 focus:border-sky-500 rounded-xl px-4 py-3 text-sm text-slate-900 font-semibold focus:outline-none"
                  >
                    <optgroup label="1. Jumbo Xerox & Plans">
                      <option value="Jumbo Xerox (A0, A1, A2, A3, A4)">Jumbo Xerox - Colour & B/W (A0-A4)</option>
                      <option value="Engineering & Architectural CAD Drawings">Engineering & Architectural Drawings</option>
                      <option value="Municipal Layout & Village Map Printing">Municipal Layouts & Village Maps</option>
                      <option value="Tracing Paper & Tracing Cloth Printing">Tracing Paper & Tracing Cloth</option>
                      <option value="Large Format Document Scanning">Large Format Scanning to PDF</option>
                    </optgroup>
                    <optgroup label="2. Flex & Sign Boards">
                      <option value="Star Flex Banner Printing">Star Flex Banner (హై-గ్లోస్ ఫ్లెక్స్)</option>
                      <option value="Backlit & Frontlit Flex">Backlit / Frontlit Flex Printing</option>
                      <option value="3D Acrylic LED Letters">3D Acrylic LED Letter Board</option>
                      <option value="LED Glow Sign Board">LED Glow Sign Board (లైట్ బోర్డ్)</option>
                      <option value="Hoardings & Political Banners">Hoarding / Political Flex Arch</option>
                    </optgroup>
                    <optgroup label="3. Personalised Gifts">
                      <option value="Customized Photo T-Shirt Printing">Customized Photo T-Shirts</option>
                      <option value="Photo Cushion & Pillow Printing">Photo Cushion / Pillow Printing</option>
                      <option value="Photo Mugs & Magic Mugs">Photo Mugs & Magic Mugs</option>
                      <option value="Personalized Photo Frames">Custom Photo Frames & Collage</option>
                      <option value="Corporate & Wedding Return Gifts">Corporate & Return Gifts</option>
                    </optgroup>
                    <optgroup label="4. Stickers & Boards">
                      <option value="Sunboard & PVC Foam Board">Sunboard & PVC Foam Board (సన్‌బోర్డ్)</option>
                      <option value="Vinyl Stickers & Product Labels">Vinyl Stickers & Product Labels</option>
                      <option value="One-Way Vision Glass Film">One-Way Vision Glass Film</option>
                      <option value="Art Board & Display Signage">Display Signage & Art Boards</option>
                    </optgroup>
                    <optgroup label="Commercial & Ready Files">
                      <option value="Visiting Cards (1000 pcs)">Visiting Cards (1000 pcs Offset)</option>
                      <option value="Print Ready Customer Design File">Printing from My Ready Design File (CDR/PSD/PDF/JPG)</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Size, Quantity or Details
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Mention dimensions (e.g. A0 map, 10x4 ft flex, 50 T-shirts), event date, etc."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border-2 border-slate-200 focus:border-sky-500 rounded-xl p-4 text-sm text-slate-900 font-medium focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 shadow-xl shadow-sky-600/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-500 pt-1 font-medium">
                  You will be connected directly with City Grafix on WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
