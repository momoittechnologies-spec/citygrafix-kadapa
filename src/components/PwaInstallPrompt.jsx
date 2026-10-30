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
        <div className="fixed bottom-20 md:bottom-6 right-4 left-4 md:left-auto md:max-w-md z-40 bg-white border-2 border-sky-300 p-4 rounded-2xl shadow-2xl shadow-slate-900/10 animate-fadeIn">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-rose-500 to-amber-400 p-[2px] shrink-0 shadow-sm">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-black text-sky-700 text-sm">
                CG
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-slate-900">Install City Grafix App</h4>
                <button
                  onClick={handleDismissBanner}
                  className="text-slate-400 hover:text-slate-700 p-1"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 mb-3 font-medium">
                Calculate flex prices, view services, and message directly on WhatsApp anytime!
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleInstallClick}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Install App</span>
                </button>
                <button
                  onClick={handleDismissBanner}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-800"
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
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={onCloseModal}
        >
          <div
            className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onCloseModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 via-rose-500 to-amber-400 p-[2px] mx-auto mb-3 shadow-md">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-amber-500">
                  CG
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">City Grafix Kadapa</h3>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                Fast, Lightweight Progressive Web App (PWA)
              </p>
            </div>

            {/* Android / Desktop One-Click Install */}
            {deferredPrompt && (
              <div className="space-y-4">
                <p className="text-sm text-slate-600 text-center font-medium">
                  Install City Grafix onto your device home screen for instant flex calculations and 1-tap WhatsApp quotes.
                </p>
                <button
                  onClick={handleInstallClick}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 transition-all shadow-md shadow-sky-600/30"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Tap to Install App</span>
                </button>
              </div>
            )}

            {/* iOS Safari Instructions */}
            {isIOS && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700">
                    How to install on iPhone / iPad:
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-700">
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-sky-600 shrink-0 shadow-sm">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <span>1. Tap the <strong>Share</strong> button in Safari's bottom bar.</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-700">
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-amber-600 shrink-0 shadow-sm">
                      <PlusSquare className="w-4 h-4" />
                    </div>
                    <span>2. Scroll down and tap <strong>"Add to Home Screen"</strong>.</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-700">
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-emerald-600 shrink-0 shadow-sm">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>3. Tap <strong>Add</strong> in the top right corner.</span>
                  </div>
                </div>
              </div>
            )}

            {/* If neither iOS nor deferredPrompt */}
            {!deferredPrompt && !isIOS && (
              <div className="text-center space-y-3">
                <p className="text-xs text-slate-600">
                  To install, click the install icon in your browser address bar or use your browser menu &gt; <strong>Install City Grafix</strong>.
                </p>
                <button
                  onClick={onCloseModal}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200"
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
