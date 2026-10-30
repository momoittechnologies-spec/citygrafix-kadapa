import React from 'react';
import { ExternalLink, Heart, MessageCircle, Play, Sparkles, Check, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function InstagramShowcase() {
  const INSTAGRAM_URL = 'https://www.instagram.com/citygrafix1/';

  const instagramPosts = [
    {
      id: 1,
      type: 'reel',
      title: '3D Acrylic LED Glow Sign Board Night Glow',
      category: 'Signage Work',
      likes: '482',
      comments: '39',
      image: 'https://images.unsplash.com/photo-1572945550744-570424749b95?auto=format&fit=crop&w=800&q=80',
      caption: 'Watch this stunning 3D warm glow board light up Kadapa Seven Roads! ACP back panel with Samsung LED modules. ✨',
    },
    {
      id: 2,
      type: 'photo',
      title: 'Grand Royal Wedding Star Flex Arch (30x15ft)',
      category: 'Wedding Flex',
      likes: '624',
      comments: '51',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      caption: 'Printed on 1440 DPI Star Flex with custom Telugu typography and royal gold floral borders for a grand Kadapa wedding.',
    },
    {
      id: 3,
      type: 'reel',
      title: 'Precision Laser Cut Golden Acrylic Letters',
      category: 'Workshop Craft',
      likes: '395',
      comments: '24',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      caption: 'Behind the scenes at City Grafix workshop: fabricating mirror gold acrylic letters for a luxury boutique.',
    },
    {
      id: 4,
      type: 'photo',
      title: 'One-Way Vision Glass Film Facade',
      category: 'Commercial Branding',
      likes: '318',
      comments: '18',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      caption: 'Frosted geometric film and micro-perforated one-way vision branding installed for a multi-speciality clinic in Kadapa.',
    },
    {
      id: 5,
      type: 'photo',
      title: 'Magic Photo Mugs & Custom Frame Gifting',
      category: 'Photo Gifts',
      likes: '512',
      comments: '43',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      caption: 'Heat-sensitive magic mugs revealing family photos when hot coffee is poured. Custom photo gifts printed daily! ☕❤️',
    },
    {
      id: 6,
      type: 'reel',
      title: 'Same-Day Urgent Star Flex Dispatch',
      category: 'Express Printing',
      likes: '741',
      comments: '68',
      image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
      caption: 'Need a flex in 2 hours? We print, eyelet, and roll large format banners with zero delays right here in Kadapa! ⚡',
    },
  ];

  return (
    <section id="instagram" className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-rose-600/15 via-purple-600/15 to-amber-500/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold mb-3 shadow-sm">
            <InstagramIcon className="w-3.5 h-3.5 text-rose-400" />
            <span>Live Social Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Follow{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
              @citygrafix1
            </span>{' '}
            on Instagram
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Watch our daily workshop reels, live 3D LED glow board night views, and recent wedding arch installations directly from Kadapa.
          </p>
        </div>

        {/* Instagram Profile Header Card */}
        <div className="max-w-3xl mx-auto mb-14 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {/* Profile Avatar with Instagram Story Gradient Ring */}
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-xl shadow-rose-600/20">
              <div className="p-0.5 bg-slate-950 rounded-full">
                <img
                  src="/logo.png"
                  alt="City Grafix Instagram Avatar"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-contain bg-white p-1"
                />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  citygrafix1
                </h3>
                <span className="p-1 rounded-full bg-sky-500 text-white" title="Verified Studio">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Printing Studio
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                City Grafix Kadapa • 3D LED Glow Boards & Star Flex
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                #21/135, Opp. Tirumala Hospital, Kadapa – 516001
              </p>
            </div>
          </div>

          {/* Follow CTA Button */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-2xl font-extrabold text-xs sm:text-sm text-white bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:from-amber-600 hover:to-purple-700 shadow-xl shadow-rose-600/30 transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <InstagramIcon className="w-4 h-4 text-white" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Grid Instagram Feed Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-rose-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Hover Overlay with Stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md">
                      {post.category}
                    </span>
                    <span className="p-2 rounded-full bg-black/50 text-white backdrop-blur-md">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-6 text-white font-extrabold text-sm">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 fill-white/80 text-white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  <span className="text-center text-xs font-bold text-rose-300">
                    View on Instagram ↗
                  </span>
                </div>

                {/* Type Indicator Icon on Top Right */}
                <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white group-hover:opacity-0 transition-opacity">
                  {post.type === 'reel' ? (
                    <Play className="w-3.5 h-3.5 fill-white text-white" />
                  ) : (
                    <InstagramIcon className="w-3.5 h-3.5 text-white" />
                  )}
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 font-medium mb-3">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-semibold">
                  <span className="text-rose-400 group-hover:text-rose-300 transition-colors">
                    #citygrafixkadapa
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 group-hover:text-white transition-colors">
                    <span>Watch post</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Tag Us Prompt */}
        <div className="text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-4 max-w-xl mx-auto text-xs text-slate-400">
          Tag <strong className="text-rose-400">@citygrafix1</strong> in your shop glow board photos or wedding flex arches to be featured on our official Instagram page!
        </div>
      </div>
    </section>
  );
}
