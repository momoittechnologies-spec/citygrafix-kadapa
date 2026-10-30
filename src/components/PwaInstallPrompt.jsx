import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Share2, PlusSquare, Check } from 'lucide-react';

export default function PwaInstallPrompt({
  deferredPrompt,
  showModal,
  onCloseModal,
  isInstalled,
  onInstalled
}) {
  const [isIOS, setIsIOS] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Show floating banner after 3 seconds if not installed
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('pwa-banner-dismissed');
      if (!isInstalled && !dismissed) {
        setShowBanner(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [isInstalled]);

  // Handle Android / Chrome prompt
  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        onInstalled();
        setShowBanner(false);
        onCloseModal();
      }
    } else if (isIOS) {
      // Keep modal open to show iOS instructions
    }
  };

  const handleDismissBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem('pwa-banner-dismissed', 'true');
  };

  if (isInstalled) return null;

  return (
    <>
      {/* Floating Bottom-Right Banner for Desktop/Mobile */}
      {showBanner && !showModal && (
        <div className="fixed bottom-20 md:bottom-6 right-4 left-4 md:left-auto md:max-w-md z-40 bg-slate-900/95 backdrop-blur-xl border border-cyan-500/40 p-4 rounded-2xl shadow-2xl shadow-cyan-950/80 animate-fadeIn">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-amber-400 p-[2px] shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-cyan-400 text-sm">
                CG
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">Install City Grafix App</h4>
                <button
                  onClick={handleDismissBanner}
                  className="text-slate-400 hover:text-white p-1"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 mb-3">
                Access flex calculator, order on WhatsApp, and view prices offline anytime!
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleInstallClick}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Install App</span>
                </button>
                <button
                  onClick={handleDismissBanner}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200"
                >
                  Not Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal with Full Android & iOS Step Instructions */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={onCloseModal}
        >
          <div
            className="bg-slate-900 border border-white/20 rounded-3xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onCloseModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-pink-500 to-amber-400 p-[2px] mx-auto mb-3 shadow-glow-cyan">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-300">
                  CG
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">City Grafix Kadapa</h3>
              <p className="text-xs text-slate-400 mt-1">
                Fast, Lightweight Progressive Web App (PWA)
              </p>
            </div>

            {/* Android / Desktop One-Click Install */}
            {deferredPrompt && (
              <div className="space-y-4">
                <p className="text-sm text-slate-300 text-center">
                  Install City Grafix onto your device home screen for instant flex calculations and 1-tap WhatsApp quotes.
                </p>
                <button
                  onClick={handleInstallClick}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-lg shadow-cyan-950"
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>Tap to Install App</span>
                </button>
              </div>
            )}

            {/* iOS Safari Instructions */}
            {isIOS && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    How to install on iPhone / iPad:
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-200">
                    <div className="p-2 rounded-lg bg-slate-700 text-cyan-400 shrink-0">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <span>1. Tap the <strong>Share</strong> button in Safari's bottom bar.</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-200">
                    <div className="p-2 rounded-lg bg-slate-700 text-amber-400 shrink-0">
                      <PlusSquare className="w-4 h-4" />
                    </div>
                    <span>2. Scroll down and tap <strong>"Add to Home Screen"</strong>.</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-200">
                    <div className="p-2 rounded-lg bg-slate-700 text-emerald-400 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>3. Tap <strong>Add</strong> in the top right corner.</span>
                  </div>
                </div>
              </div>
            )}

            {/* If neither iOS nor deferredPrompt (e.g. standard desktop already installed) */}
            {!deferredPrompt && !isIOS && (
              <div className="text-center space-y-3">
                <p className="text-xs text-slate-300">
                  To install, click the install icon in your browser address bar or use your browser menu &gt; <strong>Install City Grafix</strong>.
                </p>
                <button
                  onClick={onCloseModal}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Got It
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
