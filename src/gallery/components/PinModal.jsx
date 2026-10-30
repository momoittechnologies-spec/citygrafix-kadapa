import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PinModal({ requiredPin, onUnlock, onCancel }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.trim() === requiredPin.trim()) {
      onUnlock();
    } else {
      setError(true);
      setPin('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mx-auto mb-4">
          <Lock className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-extrabold text-white mb-1">
          Private Event Gallery
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          This gallery is PIN protected by the family. Enter the 4-digit code provided on your invitation.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              maxLength={8}
              placeholder="Enter PIN"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                setError(false);
              }}
              className="w-full text-center tracking-[0.5em] text-2xl font-bold py-3 bg-slate-800/80 border border-slate-700 text-white rounded-xl focus:border-sky-500 focus:outline-none"
              autoFocus
            />
            {error && (
              <p className="text-xs font-bold text-rose-400 mt-2">
                Incorrect PIN. Please re-enter.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
          >
            <span>Unlock Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            Return to Homepage
          </button>
        </form>
      </div>
    </div>
  );
}
