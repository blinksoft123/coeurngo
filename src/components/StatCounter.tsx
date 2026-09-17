import React from 'react';
import { SITE_DATA } from '@/data/siteData';
import { ShieldCheck, Calendar, Users, HeartHandshake, Home, MapPin } from 'lucide-react';

export default function StatCounter() {
  const iconMap: Record<number, React.ReactNode> = {
    0: <Calendar className="w-5 h-5 text-emerald-600" />,
    1: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    2: <Users className="w-5 h-5 text-emerald-600" />,
    3: <HeartHandshake className="w-5 h-5 text-emerald-600" />,
    4: <Home className="w-5 h-5 text-emerald-600" />,
    5: <MapPin className="w-5 h-5 text-emerald-600" />,
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 lg:p-10 -mt-10 relative z-20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Repères Institutionnels & Statutaires Officiels
          </span>
        </div>
        <span className="text-xs text-slate-600 font-medium">
          Source : Décision n° 001733/RDA/J06/BAPP
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        {SITE_DATA.stats.map((item, idx) => (
          <div 
            key={item.label}
            className={`flex flex-col items-center text-center group ${idx > 0 ? 'pt-4 sm:pt-0 sm:px-3' : 'sm:pr-3'}`}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <span className="group-hover:scale-110 transition-transform">
                {iconMap[idx]}
              </span>
            </div>
            <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
              {item.value}
            </span>
            <span className="text-xs font-bold text-slate-800 mt-1 uppercase tracking-wider">
              {item.label}
            </span>
            <span className="text-[11px] text-slate-600 leading-snug mt-0.5">
              {item.subtext}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
