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
import PwaInstallPrompt from './components/PwaInstallPrompt';

export default function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [isPwaInstalled, setIsPwaInstalled] = useState(false);

  useEffect(() => {
    // Check if app is launched in standalone mode (already installed)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (isStandalone) {
      setIsPwaInstalled(true);
    }

    // Capture beforeinstallprompt event for PWA
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      console.log('[PWA] beforeinstallprompt event captured');
    };

    const handleAppInstalled = () => {
      setIsPwaInstalled(true);
      setDeferredPrompt(null);
      setShowInstallModal(false);
      console.log('[PWA] City Grafix app was installed');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

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
      <Navbar
        onOpenInstallModal={() => setShowInstallModal(true)}
        isPwaInstalled={isPwaInstalled}
      />

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

        {/* Contact, Seven Roads Location & WhatsApp Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenInstallModal={() => setShowInstallModal(true)} />

      {/* Floating Bottom Quick-Action Dock for Mobile */}
      <MobileBottomDock
        onOpenInstallModal={() => setShowInstallModal(true)}
        isPwaInstalled={isPwaInstalled}
      />

      {/* PWA Smart Installation Dialog & iOS Instructions */}
      <PwaInstallPrompt
        deferredPrompt={deferredPrompt}
        showModal={showInstallModal}
        onCloseModal={() => setShowInstallModal(false)}
        isInstalled={isPwaInstalled}
        onInstalled={() => setIsPwaInstalled(true)}
      />
    </div>
  );
}
