import React, { useState } from 'react';
import {
  Plus,
  Calendar,
  Clock,
  Share2,
  Upload,
  Eye,
  Trash2,
  RefreshCw,
  Lock,
  ArrowLeft,
  Search,
  MessageCircle,
  Database,
  ExternalLink,
  Check,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  getStoredEvents,
  extendEventExpiry,
  deleteEvent,
  checkExpiryStatus,
  generateWhatsAppShareText,
  SQL_SCHEMA_REFERENCE,
} from '../services/galleryStorage';
import CreateEventModal from './CreateEventModal';
import UploadPhotosModal from './UploadPhotosModal';

export default function AdminDashboard({ onBackHome, onOpenGallery }) {
  const [events, setEvents] = useState(getStoredEvents());
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [uploadTargetEvent, setUploadTargetEvent] = useState(null);
  const [copiedSlug, setCopiedSlug] = useState(null);
  const [showSqlDrawer, setShowSqlDrawer] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  const refreshEvents = () => {
    setEvents(getStoredEvents());
  };

  const handleExtend = (eventId, days) => {
    extendEventExpiry(eventId, days);
    refreshEvents();
  };

  const handleDelete = (eventId, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteEvent(eventId);
      refreshEvents();
    }
  };

  const handleCopyWhatsAppText = (event) => {
    const text = generateWhatsAppShareText(event);
    navigator.clipboard.writeText(text);
    setCopiedSlug(event.slug);
    setTimeout(() => setCopiedSlug(null), 2500);
  };

  const handleDirectWhatsApp = (event) => {
    const text = generateWhatsAppShareText(event);
    const cleanPhone = (event.clientPhone || '').replace(/[^\d]/g, '');
    const url = cleanPhone
      ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`
      : `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const filteredEvents = events.filter((e) => {
    const matchesSearch =
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.clientName.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    const expiry = checkExpiryStatus(e.expiresAt);
    if (filterType === 'active') return !expiry.isExpired;
    if (filterType === 'expired') return expiry.isExpired;
    return true;
  });

  const totalPhotos = events.reduce((sum, e) => sum + (e.photos?.length || 0), 0);
  const activeCount = events.filter((e) => !checkExpiryStatus(e.expiresAt).isExpired).length;
  const expiredCount = events.length - activeCount;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackHome}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>City Grafix Website</span>
            </button>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold text-white">Studio Admin</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30">
                Photo Hub
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowSqlDrawer(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition-all border border-slate-700"
              title="Cloud Database & R2 Schema"
            >
              <Database className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Database Schema</span>
            </button>

            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-xs font-bold text-white shadow-lg shadow-sky-600/30 transition-all hover:scale-105"
            >
              <Plus className="w-4 h-4" />
              <span>Create Event Gallery</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 flex-1 w-full space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs text-slate-400 font-bold block mb-1">Total Event Galleries</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-white">{events.length}</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs text-emerald-400 font-bold block mb-1">Active Galleries</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">{activeCount}</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs text-amber-400 font-bold block mb-1">Expired / Archived</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">{expiredCount}</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs text-sky-400 font-bold block mb-1">Photographs Stored</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-sky-400">{totalPhotos}</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
            <input
              type="text"
              placeholder="Search by event or client name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            {['all', 'active', 'expired'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                  filterType === type
                    ? 'bg-sky-500 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Galleries List */}
        <div className="space-y-4">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800 text-slate-500">
              <Calendar className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm font-semibold">No galleries match your search criteria.</p>
            </div>
          ) : (
            filteredEvents.map((evt) => {
              const expiry = checkExpiryStatus(evt.expiresAt);
              return (
                <div
                  key={evt.id}
                  className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 sm:p-5 transition-all shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5"
                >
                  {/* Left: Thumbnail & Info */}
                  <div className="flex items-start gap-4">
                    <img
                      src={evt.coverImage || evt.photos?.[0]?.thumbUrl}
                      alt={evt.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 border border-slate-800"
                    />

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-800 text-sky-400 border border-slate-700">
                          {evt.eventType || 'Event'}
                        </span>

                        {expiry.isExpired ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                            Expired ({expiry.formattedDate})
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Active ({expiry.daysRemaining} days left)
                          </span>
                        )}

                        {evt.pinCode && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                            <Lock className="w-2.5 h-2.5" />
                            <span>PIN: {evt.pinCode}</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-extrabold text-white">
                        {evt.title}
                      </h3>

                      <p className="text-xs text-slate-400 mt-0.5">
                        Client: <strong className="text-slate-200">{evt.clientName}</strong> •{' '}
                        {evt.photos?.length || 0} Photographs • Event Date: {evt.eventDate}
                      </p>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-end border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-800">
                    {/* 1-Click Extend Validity */}
                    <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
                      <span className="text-[10px] text-slate-400 font-bold px-1.5">Extend:</span>
                      <button
                        onClick={() => handleExtend(evt.id, 180)}
                        className="px-2 py-1 rounded text-[10px] font-bold bg-slate-700 hover:bg-sky-600 text-white transition-colors"
                        title="Add 6 Months validity"
                      >
                        +6 Mo
                      </button>
                      <button
                        onClick={() => handleExtend(evt.id, 365)}
                        className="px-2 py-1 rounded text-[10px] font-bold bg-slate-700 hover:bg-sky-600 text-white transition-colors"
                        title="Add 1 Year validity"
                      >
                        +1 Yr
                      </button>
                    </div>

                    {/* Upload Photos */}
                    <button
                      onClick={() => setUploadTargetEvent(evt)}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white transition-all border border-slate-700"
                      title="Upload Photographs"
                    >
                      <Upload className="w-4 h-4" />
                    </button>

                    {/* Copy WhatsApp Link */}
                    <button
                      onClick={() => handleCopyWhatsAppText(evt)}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 hover:text-white transition-all border border-slate-700"
                      title="Copy WhatsApp Invitation Text"
                    >
                      {copiedSlug === evt.slug ? <Check className="w-4 h-4 text-emerald-300" /> : <Share2 className="w-4 h-4" />}
                    </button>

                    {/* Direct WhatsApp Send */}
                    <button
                      onClick={() => handleDirectWhatsApp(evt)}
                      className="p-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white transition-all border border-emerald-500/30"
                      title="Send directly to client via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>

                    {/* View as Client */}
                    <button
                      onClick={() => onOpenGallery(evt.slug)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-sm"
                      title="Open Public Client Gallery"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Gallery</span>
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(evt.id, evt.title)}
                      className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-600 text-rose-400 hover:text-white transition-all border border-rose-500/20"
                      title="Delete Event"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>

      {/* Create Event Modal */}
      <CreateEventModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreated={(newEvent) => {
          refreshEvents();
        }}
      />

      {/* Upload Photos Modal */}
      <UploadPhotosModal
        event={uploadTargetEvent}
        isOpen={!!uploadTargetEvent}
        onClose={() => setUploadTargetEvent(null)}
        onUploaded={() => {
          refreshEvents();
        }}
      />

      {/* Database Schema Drawer */}
      {showSqlDrawer && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-white shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-sky-400" />
                <h3 className="text-base font-extrabold text-white">
                  Supabase & Cloudflare R2 SQL Schema
                </h3>
              </div>
              <button
                onClick={() => setShowSqlDrawer(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              When ready to enable multi-device sync, copy this SQL and paste it directly into your free{' '}
              <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 underline">
                Supabase SQL Editor
              </a>
              :
            </p>

            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto max-h-60 mb-4">
              {SQL_SCHEMA_REFERENCE}
            </pre>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Currently running on Browser LocalStorage for instant zero-setup demo
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(SQL_SCHEMA_REFERENCE);
                  setCopiedSql(true);
                  setTimeout(() => setCopiedSql(false), 2500);
                }}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-xs font-bold text-white transition-all flex items-center gap-1.5"
              >
                {copiedSql ? <Check className="w-3.5 h-3.5" /> : null}
                <span>{copiedSql ? 'Copied' : 'Copy SQL Script'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
