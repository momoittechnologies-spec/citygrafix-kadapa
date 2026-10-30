import React from 'react';
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

export default function App() {
  const handleOpenCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForCalculator = (serviceId) => {
    handleOpenCalculator();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCalculator={handleOpenCalculator} />
        
        {/* Interactive Instant Cost & Size Estimator */}
        <PriceCalculator />

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
