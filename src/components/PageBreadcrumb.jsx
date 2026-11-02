import React from 'react';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';

export default function PageBreadcrumb({ pageTitle, category, onBackHome }) {
  return (
    <div className="bg-gradient-to-r from-sky-50/60 via-white to-rose-50/50 border-b border-slate-200/80 pt-24 pb-6">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Breadcrumb Trail */}
        <div className="flex items-center flex-wrap gap-2 text-xs font-semibold text-slate-500">
          <a
            href="#/"
            onClick={(e) => {
              if (onBackHome) {
                e.preventDefault();
                onBackHome();
              }
            }}
            className="flex items-center gap-1.5 hover:text-sky-600 transition-colors py-1 px-2 rounded-lg hover:bg-white"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>Home</span>
          </a>
          
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />

          {category && (
            <>
              <span className="text-slate-500">{category}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </>
          )}

          <span className="text-slate-900 font-extrabold bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-sm">
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
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 shadow-sm hover:shadow transition-all active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
          <span>Back to Home</span>
        </a>
      </div>
    </div>
  );
}
