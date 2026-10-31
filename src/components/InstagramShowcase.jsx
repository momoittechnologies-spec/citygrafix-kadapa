import React from 'react';
import { ExternalLink, Play, Sparkles, Check, Video, Flame, Film, ShieldCheck } from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from './Icons';

export default function InstagramShowcase() {
  const INSTAGRAM_URL = 'https://www.instagram.com/citygrafix1/';
  const YOUTUBE_URL = 'https://www.youtube.com/@Citygrafix1';

  return (
    <section id="social" className="py-24 bg-gradient-to-b from-slate-50 via-white to-rose-50/30 text-slate-800 relative overflow-hidden">
      {/* Anchor for backward compatibility with #instagram links */}
      <span id="instagram" className="absolute -top-24" />

      {/* Background ambient light glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-rose-200/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-red-200/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-100 via-purple-100 to-red-100 border border-rose-300 text-rose-800 text-xs font-black mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Official Social Media Hub</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Connect with City Grafix on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-600 to-red-600">
              Instagram & YouTube
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Watch our live workshop reels, full machine printing timelapses, 3D LED glow board night views, and recent Kadapa event installations directly on our verified channels.
          </p>
        </div>

        {/* Dual Side-by-Side Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* =========================================
              CARD 1: OFFICIAL INSTAGRAM CHANNEL
             ========================================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200/90 hover:border-rose-400 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              {/* Profile Top Bar */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-4">
                  {/* Avatar with Instagram Ring */}
                  <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
                    <div className="p-0.5 bg-white rounded-full">
                      <img
                        src="/logo.png"
                        alt="City Grafix Instagram Avatar"
                        className="w-16 h-16 rounded-full object-contain bg-white p-1"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <h3 className="text-xl font-black text-slate-900">@citygrafix1</h3>
                      <span className="p-0.5 rounded-full bg-sky-500 text-white" title="Verified Profile">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    </div>
                    <span className="text-xs text-rose-600 font-extrabold block">
                      Instagram Official Page
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold">
                      Opp. Tirumala Hospital, Kadapa
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 shadow-sm">
                  <InstagramIcon className="w-6 h-6" />
                </div>
              </div>

              {/* What You'll Find on Instagram */}
              <div className="space-y-3 mb-6">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                  Highlights on our Feed:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                    <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center mb-1.5 font-bold shadow-sm">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="text-xs font-black text-slate-900 block">Daily Reels</span>
                    <span className="text-[10px] text-slate-600 font-medium">Workshop fabrication</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-1.5 font-bold shadow-sm">
                      <Flame className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-black text-slate-900 block">3D Glow Tests</span>
                    <span className="text-[10px] text-slate-600 font-medium">Night LED lighting</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                    <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-1.5 font-bold shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-black text-slate-900 block">Wedding Arches</span>
                    <span className="text-[10px] text-slate-600 font-medium">Grand Star Flex setups</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed font-medium mb-6">
                Follow our official handle to explore real customer projects, story highlights, urgent express printing updates, and customized photo gifting ideas.
              </p>
            </div>

            {/* Instagram Follow CTA Button */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:from-amber-600 hover:to-purple-700 shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <InstagramIcon className="w-4 h-4 text-white" />
              <span>Explore & Follow @citygrafix1</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* =========================================
              CARD 2: OFFICIAL YOUTUBE CHANNEL
             ========================================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200/90 hover:border-red-400 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              {/* Profile Top Bar */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-4">
                  {/* Avatar with YouTube Red Ring */}
                  <div className="relative p-1 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
                    <div className="p-0.5 bg-white rounded-full">
                      <img
                        src="/logo.png"
                        alt="City Grafix YouTube Avatar"
                        className="w-16 h-16 rounded-full object-contain bg-white p-1"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <h3 className="text-xl font-black text-slate-900">@Citygrafix1</h3>
                      <span className="p-0.5 rounded-full bg-red-600 text-white" title="Official YouTube Channel">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    </div>
                    <span className="text-xs text-red-600 font-extrabold block">
                      YouTube Official Channel
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold">
                      Printing & Fabrication Videos
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-2xl bg-red-50 border border-red-200 text-red-600 shadow-sm">
                  <YouTubeIcon className="w-6 h-6" />
                </div>
              </div>

              {/* What You'll Find on YouTube */}
              <div className="space-y-3 mb-6">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                  Featured on our Channel:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                    <div className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-1.5 font-bold shadow-sm">
                      <Video className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-black text-slate-900 block">Full Demos</span>
                    <span className="text-[10px] text-slate-600 font-medium">Large flex printing</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                    <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center mb-1.5 font-bold shadow-sm">
                      <Film className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-black text-slate-900 block">Board Making</span>
                    <span className="text-[10px] text-slate-600 font-medium">3D letter fabrication</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-1.5 font-bold shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-black text-slate-900 block">Event Spotlights</span>
                    <span className="text-[10px] text-slate-600 font-medium">Kadapa brand launches</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed font-medium mb-6">
                Subscribe to our official YouTube channel to stream in-depth video walkthroughs of machine printing speed, heavy frame welding, and large-scale architectural CAD plan plotting.
              </p>
            </div>

            {/* YouTube Subscribe CTA Button */}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-lg shadow-red-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <YouTubeIcon className="w-4 h-4 text-white" />
              <span>Subscribe to @Citygrafix1 on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Community Tag Us Banner */}
        <div className="text-center bg-white border-2 border-slate-200 rounded-2xl p-4 max-w-2xl mx-auto text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-center gap-2 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Got your banners or boards printed at City Grafix? Tag <strong className="text-rose-600">@citygrafix1</strong> on Instagram or mention <strong className="text-red-600">@Citygrafix1</strong> on YouTube to get featured!
          </span>
        </div>
      </div>
    </section>
  );
}
