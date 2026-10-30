import React, { useState } from 'react';
import { X, Calendar, Lock, Clock, Plus, Tag } from 'lucide-react';
import { createEvent } from '../services/galleryStorage';

export default function CreateEventModal({ isOpen, onClose, onCreated }) {
  const [title, setTitle] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [eventType, setEventType] = useState('Wedding');
  const [eventDate, setEventDate] = useState(new Date().toISOString().split('T')[0]);
  const [expiryOption, setExpiryOption] = useState('1year');
  const [customExpiryDate, setCustomExpiryDate] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [categoriesText, setCategoriesText] = useState('Haldi, Sangeet, Wedding Ceremony, Reception, Portraits');

  if (!isOpen) return null;

  const calculateExpiresAt = () => {
    const now = new Date();
    if (expiryOption === '6months') {
      now.setMonth(now.getMonth() + 6);
      return now.toISOString();
    }
    if (expiryOption === '1year') {
      now.setFullYear(now.getFullYear() + 1);
      return now.toISOString();
    }
    if (expiryOption === '2years') {
      now.setFullYear(now.getFullYear() + 2);
      return now.toISOString();
    }
    if (expiryOption === 'custom' && customExpiryDate) {
      return new Date(customExpiryDate).toISOString();
    }
    // Default 1 year
    now.setFullYear(now.getFullYear() + 1);
    return now.toISOString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !clientName.trim()) return;

    const customCategories = categoriesText
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean);

    const newEvent = createEvent({
      title,
      clientName,
      clientPhone,
      eventType,
      eventDate,
      expiresAt: calculateExpiresAt(),
      pinCode,
      customCategories,
    });

    onCreated(newEvent);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white shadow-2xl animate-fadeIn max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Create New Client Gallery
            </h3>
            <p className="text-xs text-slate-400">
              Configure event details, customer access, and validity settings
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Event Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh & Haritha Royal Wedding"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-800/80 border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Client / Family Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Reddy"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Client WhatsApp Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Event Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none font-medium"
              >
                <option value="Wedding">Wedding (వివాహం)</option>
                <option value="Engagement">Engagement (నిశ్చితార్థం)</option>
                <option value="Birthday">Birthday (పుట్టినరోజు)</option>
                <option value="Cradle Ceremony">Cradle Ceremony (ఉయ్యాల పండుగ)</option>
                <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                <option value="Corporate Event">Corporate Event</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Event Date
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-slate-800/80 border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Expiry / Retention Setting */}
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-amber-400">
              <Clock className="w-4 h-4" />
              <span>Gallery Retention & Expiry Setting</span>
            </div>
            <p className="text-[11px] text-slate-400 mb-3">
              Configure how long this event gallery remains active. You can extend it anytime with 1 click!
            </p>

            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { label: '6 Months', value: '6months' },
                { label: '1 Year', value: '1year' },
                { label: '2 Years', value: '2years' },
              ].map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => setExpiryOption(opt.value)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                    expiryOption === opt.value
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Or choose custom date:</span>
              <input
                type="date"
                value={customExpiryDate}
                onChange={(e) => {
                  setCustomExpiryDate(e.target.value);
                  setExpiryOption('custom');
                }}
                className="bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white"
              />
            </div>
          </div>

          {/* Optional PIN Protection */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300 mb-1.5">
              <Lock className="w-3.5 h-3.5 text-sky-400" />
              <span>Optional 4-Digit Security PIN (Leave empty for open public link)</span>
            </label>
            <input
              type="text"
              maxLength={6}
              placeholder="e.g. 2026 (Optional)"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              className="w-full bg-slate-800/80 border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
            />
          </div>

          {/* Ceremony / Category Tags */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-300 mb-1.5">
              <Tag className="w-3.5 h-3.5 text-rose-400" />
              <span>Ceremony Filter Tags (Comma separated)</span>
            </label>
            <input
              type="text"
              value={categoriesText}
              onChange={(e) => setCategoriesText(e.target.value)}
              className="w-full bg-slate-800/80 border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-sky-600/30 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>Create Event Gallery</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
