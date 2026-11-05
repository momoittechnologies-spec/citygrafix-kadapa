import React from 'react';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';

export default function PageBreadcrumb({ pageTitle, category, onBackHome }) {
  return (
    <div className="bg-stone-50 border-b border-stone-200/80 pt-24 pb-6">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Breadcrumb Trail */}
        <div className="flex items-center flex-wrap gap-2 text-xs font-semibold text-zinc-500">
          <a
            href="#/"
            onClick={(e) => {
              if (onBackHome) {
                e.preventDefault();
                onBackHome();
              }
            }}
            className="flex items-center gap-1.5 hover:text-rose-600 transition-colors py-1.5 px-2.5 rounded-lg hover:bg-stone-100 min-h-[36px]"
          >
            <Home className="w-3.5 h-3.5 text-zinc-400" />
            <span>Home</span>
          </a>
          
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />

          {category && (
            <>
              <span className="text-zinc-500 font-medium">{category}</span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            </>
          )}

          <span className="font-outfit text-zinc-900 font-extrabold bg-white px-3 py-1.5 rounded-lg border border-stone-200 shadow-2xs">
            {pageTitle}
          </span>
        </div>

        {/* Back to Home Quick Action */}
        <a
          href="#/"
          onClick={(e) => {
            if (onBackHome) {
              e.preventDefault();
              onBackHome();
            }
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-xs font-bold text-zinc-700 hover:text-zinc-950 shadow-2xs transition-all active:scale-95 min-h-[40px]"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-zinc-500" />
          <span>Back to Home</span>
        </a>
      </div>
    </div>
  );
}
