import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PriceCalculator from './components/PriceCalculator';
import ServicesGrid from './components/ServicesGrid';
import PortfolioGallery from './components/PortfolioGallery';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileBottomDock from './components/MobileBottomDock';
import PhotographyHubSection from './components/PhotographyHubSection';

// Gallery Platform Components
import ClientGallery from './gallery/components/ClientGallery';
import AdminDashboard from './gallery/components/AdminDashboard';
import { getEventBySlug } from './gallery/services/galleryStorage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState({ view: 'home', slug: null });

  // Hash-based router listener
  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash;
      const search = window.location.search;

      if (hash.startsWith('#gallery/')) {
        const slug = hash.replace('#gallery/', '').split('?')[0];
        setCurrentRoute({ view: 'gallery', slug });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#admin' || search.includes('admin=true')) {
        setCurrentRoute({ view: 'admin', slug: null });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentRoute({ view: 'home', slug: null });
      }
    };

    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  const handleOpenCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForCalculator = () => {
    handleOpenCalculator();
  };

  // 1. Client Event Gallery View
  if (currentRoute.view === 'gallery' && currentRoute.slug) {
    const event = getEventBySlug(currentRoute.slug);
    if (!event) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Gallery Not Found</h2>
          <p className="text-xs text-slate-400 mb-6">
            The event gallery link may have been updated or removed.
          </p>
          <button
            onClick={() => {
              window.location.hash = '';
            }}
            className="px-5 py-2.5 rounded-xl bg-sky-600 text-xs font-bold text-white hover:bg-sky-700"
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
          window.location.hash = '';
        }}
        onOpenAdmin={() => {
          window.location.hash = '#admin';
        }}
      />
    );
  }

  // 2. Photographer Studio Admin Dashboard View
  if (currentRoute.view === 'admin') {
    return (
      <AdminDashboard
        onBackHome={() => {
          window.location.hash = '';
        }}
        onOpenGallery={(slug) => {
          window.location.hash = '#gallery/' + slug;
        }}
      />
    );
  }

  // 3. Main City Grafix Website
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCalculator={handleOpenCalculator} />

        {/* Interactive Instant Cost & Size Estimator */}
        <PriceCalculator />

        {/* Dedicated Photography Platform & Client Galleries Feature */}
        <PhotographyHubSection
          onOpenGallery={(slug) => {
            window.location.hash = '#gallery/' + slug;
          }}
          onOpenAdmin={() => {
            window.location.hash = '#admin';
          }}
        />

        {/* Filterable Services & Printing Products */}
        <ServicesGrid onSelectServiceForCalculator={handleSelectServiceForCalculator} />

        {/* Visual Work Showcase & Kadapa Projects */}
        <PortfolioGallery />

        {/* Value Proposition & Quality Standards */}
        <WhyUs />

        {/* 5.0 Google Rating & Testimonials */}
        <Testimonials />

        {/* Contact, Store Location & WhatsApp Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Quick-Action Dock for Mobile */}
      <MobileBottomDock />
    </div>
  );
}
