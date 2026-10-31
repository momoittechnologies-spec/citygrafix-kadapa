import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PriceCalculator from './components/PriceCalculator';
import ServicesGrid from './components/ServicesGrid';
import GiftsCustomizer from './components/GiftsCustomizer';
import PortfolioGallery from './components/PortfolioGallery';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import InstagramShowcase from './components/InstagramShowcase';
import PhotographyHubSection from './components/PhotographyHubSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileBottomDock from './components/MobileBottomDock';
import ContactMenuDropdown from './components/ContactMenuDropdown';
import PageBreadcrumb from './components/PageBreadcrumb';
import TextMarquee from './components/TextMarquee';

// Gallery Platform Components
import ClientGallery from './gallery/components/ClientGallery';
import AdminDashboard from './gallery/components/AdminDashboard';
import { getEventBySlug, subscribeToStorage } from './gallery/services/galleryStorage';

// Home Teaser Icons
import {
  Sparkles,
  ArrowRight,
  Gift,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Printer,
  Star,
  MapPin,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from './components/Icons';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState({ view: 'home', slug: null });
  const [contactModal, setContactModal] = useState({ isOpen: false, tab: 'all' });
  const [, setStorageTick] = useState(0);

  const handleOpenContact = (tab = 'all') => {
    setContactModal({ isOpen: true, tab });
  };

  const handleCloseContact = () => {
    setContactModal((prev) => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    return subscribeToStorage(() => {
      setStorageTick((t) => t + 1);
    });
  }, []);

  // Hash-based separate page router
  useEffect(() => {
    const handleRouteChange = () => {
      const rawHash = window.location.hash || '';
      const search = window.location.search;
      const cleanHash = rawHash.replace(/^#\/?/, '').split('?')[0];

      if (cleanHash.startsWith('gallery/')) {
        const slug = cleanHash.replace('gallery/', '');
        setCurrentRoute({ view: 'gallery', slug });
      } else if (cleanHash === 'admin' || search.includes('admin=true')) {
        setCurrentRoute({ view: 'admin', slug: null });
      } else if (
        [
          'services',
          'custom-gifts',
          'calculator',
          'portfolio',
          'why-us',
          'reviews',
          'social',
          'instagram',
          'photography',
          'gallery-hub',
          'contact'
        ].includes(cleanHash)
      ) {
        const view =
          cleanHash === 'instagram'
            ? 'social'
            : cleanHash === 'gallery-hub'
            ? 'photography'
            : cleanHash;
        setCurrentRoute({ view, slug: null });
      } else {
        setCurrentRoute({ view: 'home', slug: null });
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  const navigateTo = (view) => {
    window.location.hash = `#/${view}`;
  };

  // 1. Client Event Gallery View
  if (currentRoute.view === 'gallery' && currentRoute.slug) {
    const event = getEventBySlug(currentRoute.slug);
    if (!event) {
      return (
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-2xl font-bold mb-2 text-slate-900">Gallery Not Found</h2>
          <p className="text-xs text-slate-600 mb-6">
            The event gallery link may have been updated or removed.
          </p>
          <button
            onClick={() => {
              window.location.hash = '#/';
            }}
            className="px-5 py-2.5 rounded-xl bg-sky-600 text-xs font-bold text-white hover:bg-sky-700 shadow-md"
          >
            Back to Homepage
          </button>
        </div>
      );
    }

    return (
      <ClientGallery
        event={event}
        onBackHome={() => {
          window.location.hash = '#/';
        }}
        onOpenAdmin={() => {
          window.location.hash = '#/admin';
        }}
      />
    );
  }

  // 2. Photographer Studio Admin Dashboard View
  if (currentRoute.view === 'admin') {
    return (
      <AdminDashboard
        onBackHome={() => {
          window.location.hash = '#/';
        }}
        onOpenGallery={(slug) => {
          window.location.hash = '#/gallery/' + slug;
        }}
      />
    );
  }

  // 3. Multi-Page Architecture Rendering
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenContact={handleOpenContact} currentView={currentRoute.view} />

      {/* Main Content Area: Renders either the Homepage or Dedicated Page */}
      <main className="flex-1">
        {/* ========================================================
            PAGE 1: HOMEPAGE (Overview + High-Impact Visual Previews)
           ======================================================== */}
        {currentRoute.view === 'home' && (
          <div className="space-y-0">
            {/* Hero Banner */}
            <Hero onOpenCalculator={() => navigateTo('calculator')} />

            {/* Kinetic Text Marquee Ticker (CMYK Printing Capabilities & Guarantees) */}
            <TextMarquee />

            {/* 11 CORE WORKSHOP CAPABILITIES TEASER RIBBON (3D Light Mode) */}
            <section className="py-16 bg-white border-y border-slate-200/80 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-black mb-2 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                      <span>Official Workshop Capabilities</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      11 Core Printing & Outdoor Publicity Services
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                      Operating heavy roll plotters, welding fabrication & express finishing in Kadapa.
                    </p>
                  </div>

                  <a
                    href="#/services"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95 group shrink-0"
                  >
                    <span>Explore All 11 Services & Full Specs</span>
                    <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* 11 Capability Badges Carousel Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {[
                    { name: 'ARCH FLEX', telugu: 'ఆర్చ్ ఫ్లెక్స్', icon: '🏛️', tag: 'Weddings & Fests' },
                    { name: 'HOARDING FLEX', telugu: 'హోర్డింగ్ ఫ్లెక్స్', icon: '🏙️', tag: 'Highways & Billboards' },
                    { name: 'PAMPHLETS', telugu: 'పాంప్లెట్లు', icon: '📄', tag: 'Multi-Colour Offset' },
                    { name: 'LIGHTING BOARD', telugu: 'లైటింగ్ బోర్డులు', icon: '💡', tag: 'LED Glow Boxes' },
                    { name: 'BILL BOOKS', telugu: 'బిల్ బుక్స్', icon: '🧾', tag: 'Carbonless NCR' },
                    { name: 'VISITING CARDS', telugu: 'విజిటింగ్ కార్డ్స్', icon: '💳', tag: '350 GSM Wholesale' },
                    { name: 'PHOTO FRAMES', telugu: 'ఫోటో ఫ్రేమ్స్', icon: '🖼️', tag: 'From ₹250/-' },
                    { name: 'MUG PRINTING', telugu: 'మగ్స్ ప్రింటింగ్', icon: '☕', tag: 'Plain / Magic ₹350' },
                    { name: 'AUTO PUBLICITY', telugu: 'ఆటో పబ్లిసిటీ', icon: '🛺', tag: 'Mobile Branding' },
                    { name: 'T-SHIRT PRINTING', telugu: 'టీ-షర్ట్ ప్రింటింగ్', icon: '👕', tag: 'DTF & Sublimation' },
                    { name: 'PILLOW PRINTING', telugu: 'పిల్లో ప్రింటింగ్', icon: '🛋️', tag: 'Heart & Magic ₹450' },
                    { name: 'JUMBO XEROX', telugu: 'జంబో జిరాక్స్', icon: '📐', tag: 'A0-A4 CAD Plans' },
                  ].map((srv, idx) => (
                    <a
                      key={idx}
                      href="#/services"
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-400 shadow-sm hover:shadow-card-hover transition-all duration-300 text-left flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xl">{srv.icon}</span>
                          <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200 group-hover:border-sky-300 group-hover:text-sky-700">
                            Specs
                          </span>
                        </div>
                        <h3 className="text-xs font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                          {srv.name}
                        </h3>
                        <span className="text-[10px] font-bold text-rose-600 block">
                          {srv.telugu}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-semibold mt-2 block">
                        {srv.tag}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* CUSTOM GIFTS 3D STUDIO TEASER SECTION (Rate card verified) */}
            <section className="py-20 bg-gradient-to-b from-slate-50 via-rose-50/20 to-white relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-white via-rose-50/40 to-amber-50/40 rounded-3xl p-6 sm:p-10 border-2 border-rose-200/80 shadow-[0_20px_50px_-15px_rgba(244,63,94,0.08)] flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-300 text-xs font-black mb-3">
                      <Gift className="w-3.5 h-3.5 text-rose-600" />
                      <span>TheGifty & ImpressKart Style Studio</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
                      Personalized 3D Gifts Customizer Studio
                    </h2>
                    <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium mb-6">
                      Customize photo mugs, DTF t-shirts, cushions, and LED frames with real workshop menu prices: Plain Mugs (₹350), Inner Colour (₹450), Heart Handle (₹500), Magic Reveal (₹550), DTF Collar T-Shirts (₹500), and LED Wall Frames (₹1,250).
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                      <div className="bg-white p-3 rounded-2xl border border-slate-200 text-center shadow-sm">
                        <span className="text-base font-black text-rose-600 block">₹350/-</span>
                        <span className="text-[11px] font-bold text-slate-700">Photo Mugs</span>
                      </div>
                      <div className="bg-white p-3 rounded-2xl border border-slate-200 text-center shadow-sm">
                        <span className="text-base font-black text-rose-600 block">₹300 - ₹500</span>
                        <span className="text-[11px] font-bold text-slate-700">DTF / Sub Tees</span>
                      </div>
                      <div className="bg-white p-3 rounded-2xl border border-slate-200 text-center shadow-sm">
                        <span className="text-base font-black text-rose-600 block">₹450 - ₹850</span>
                        <span className="text-[11px] font-bold text-slate-700">Photo Pillows</span>
                      </div>
                      <div className="bg-white p-3 rounded-2xl border border-slate-200 text-center shadow-sm">
                        <span className="text-base font-black text-rose-600 block">₹250 - ₹1,250</span>
                        <span className="text-[11px] font-bold text-slate-700">Frames & LED</span>
                      </div>
                    </div>

                    <a
                      href="#/custom-gifts"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-700 hover:to-red-800 shadow-xl shadow-rose-600/30 transition-all hover:scale-105 active:scale-95"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Launch 3D Customizer Studio & Order</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </a>
                  </div>

                  {/* Visual Gift Showcase Pill Card */}
                  <div className="shrink-0 w-full lg:w-96 p-4 rounded-3xl bg-white border border-rose-200 shadow-lg text-center">
                    <img
                      src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
                      alt="Personalized Mugs"
                      className="w-full h-48 object-cover rounded-2xl mb-3 shadow-inner"
                    />
                    <div className="flex items-center justify-between text-xs px-2 font-bold text-slate-700">
                      <span>✨ Instant Live Mockup</span>
                      <span className="text-emerald-700">🟢 WhatsApp Approval</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* INSTANT SIZE & ESTIMATOR TEASER */}
            <section className="py-16 bg-white border-b border-slate-200/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-50/80 via-white to-blue-50/80 border-2 border-sky-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-300 text-sky-700 flex items-center justify-center shrink-0">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900">
                        Need Custom Banner or Board Sizing?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                        Try our interactive size estimator for Star Flex, 3D Acrylic Letters, and Sunboards. Format an instant WhatsApp quote with exact dimensions.
                      </p>
                    </div>
                  </div>

                  <a
                    href="#/calculator"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0"
                  >
                    <span>Open Size Estimator</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            {/* WHY CHOOSE US TEASER & GOOGLE REVIEWS OVERVIEW */}
            <WhyUs />

            <Testimonials />

            {/* QUICK CONTACT BANNER */}
            <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-sky-400 block mb-1">
                    Direct Kadapa Workshop
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    Ready to Print? Visit Us Opp. Tirumala Hospital
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Call 7287867584 / 9581764937 or message reception on WhatsApp 7601043674.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href="#/contact"
                    className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 shadow-md"
                  >
                    Store Location & Map
                  </a>
                  <button
                    onClick={() => handleOpenContact('all')}
                    className="px-5 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 shadow-md flex items-center gap-2"
                  >
                    <span>Connect Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================
            PAGE 2: DEDICATED SERVICES & PRINTING CATALOG PAGE
           ======================================================== */}
        {currentRoute.view === 'services' && (
          <div>
            <PageBreadcrumb
              pageTitle="Printing & Publicity Services"
              category="Catalog"
              onBackHome={() => navigateTo('')}
            />
            <TextMarquee />
            <ServicesGrid onSelectServiceForCalculator={() => navigateTo('calculator')} />
          </div>
        )}

        {/* ========================================================
            PAGE 3: DEDICATED PERSONALIZED GIFTS STUDIO PAGE
           ======================================================== */}
        {currentRoute.view === 'custom-gifts' && (
          <div>
            <PageBreadcrumb
              pageTitle="Personalized Gifts Studio"
              category="Customizer"
              onBackHome={() => navigateTo('')}
            />
            <GiftsCustomizer />
          </div>
        )}

        {/* ========================================================
            PAGE 4: DEDICATED INSTANT PRICE ESTIMATOR PAGE
           ======================================================== */}
        {currentRoute.view === 'calculator' && (
          <div>
            <PageBreadcrumb
              pageTitle="Instant Size & Order Estimator"
              category="Tools"
              onBackHome={() => navigateTo('')}
            />
            <PriceCalculator />
          </div>
        )}

        {/* ========================================================
            PAGE 5: DEDICATED PORTFOLIO & RECENT WORKS PAGE
           ======================================================== */}
        {currentRoute.view === 'portfolio' && (
          <div>
            <PageBreadcrumb
              pageTitle="Portfolio & Kadapa Projects"
              category="Gallery"
              onBackHome={() => navigateTo('')}
            />
            <PortfolioGallery />
          </div>
        )}

        {/* ========================================================
            PAGE 6: DEDICATED WHY CHOOSE US & ADVANTAGES PAGE
           ======================================================== */}
        {currentRoute.view === 'why-us' && (
          <div>
            <PageBreadcrumb
              pageTitle="The City Grafix Advantage"
              category="About"
              onBackHome={() => navigateTo('')}
            />
            <WhyUs />
          </div>
        )}

        {/* ========================================================
            PAGE 7: DEDICATED GOOGLE REVIEWS & RATINGS PAGE
           ======================================================== */}
        {currentRoute.view === 'reviews' && (
          <div>
            <PageBreadcrumb
              pageTitle="5.0 Google Reviews & Ratings"
              category="Feedback"
              onBackHome={() => navigateTo('')}
            />
            <Testimonials />
          </div>
        )}

        {/* ========================================================
            PAGE 8: DEDICATED SOCIAL & VIDEOS HUB PAGE (3D Light Mode)
           ======================================================== */}
        {currentRoute.view === 'social' && (
          <div>
            <PageBreadcrumb
              pageTitle="Instagram & YouTube Hub"
              category="Social Media"
              onBackHome={() => navigateTo('')}
            />
            <InstagramShowcase />
          </div>
        )}

        {/* ========================================================
            PAGE 9: DEDICATED CLIENT PHOTO GALLERIES PAGE
           ======================================================== */}
        {currentRoute.view === 'photography' && (
          <div>
            <PageBreadcrumb
              pageTitle="Photographer Client Galleries"
              category="Cloud Platform"
              onBackHome={() => navigateTo('')}
            />
            <PhotographyHubSection
              onOpenGallery={(slug) => {
                window.location.hash = '#/gallery/' + slug;
              }}
              onOpenAdmin={() => {
                window.location.hash = '#/admin';
              }}
            />
          </div>
        )}

        {/* ========================================================
            PAGE 10: DEDICATED STORE LOCATION & CONTACT PAGE
           ======================================================== */}
        {currentRoute.view === 'contact' && (
          <div>
            <PageBreadcrumb
              pageTitle="Store Location & Contact Form"
              category="Reach Us"
              onBackHome={() => navigateTo('')}
            />
            <ContactSection onOpenContact={handleOpenContact} />
          </div>
        )}
      </main>

      {/* Modern 3D Light Mode Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Floating Bottom Quick-Action Dock for Mobile */}
      <MobileBottomDock onOpenContact={handleOpenContact} />

      {/* Call & WhatsApp Dropdown / Drawer Modal */}
      <ContactMenuDropdown
        isOpen={contactModal.isOpen}
        initialTab={contactModal.tab}
        onClose={handleCloseContact}
      />
    </div>
  );
}
