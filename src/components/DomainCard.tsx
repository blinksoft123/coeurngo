import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DomainAction } from '@/data/siteData';
import { ShieldAlert, Baby, GraduationCap, HeartPulse, Wrench, ArrowRight } from 'lucide-react';

interface DomainCardProps {
  domain: DomainAction;
}

export default function DomainCard({ domain }: DomainCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldHand':
        return <ShieldAlert className="w-6 h-6 text-emerald-600" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-emerald-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-emerald-600" />;
      case 'Wrench':
      default:
        return <Wrench className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Visual Header with Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={domain.image}
          alt={domain.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        
        {/* Top Badge Number */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-emerald-400 font-mono font-bold text-xs border border-white/10">
          {domain.number}
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-white font-bold text-lg leading-snug drop-shadow-md">
            {domain.title}
          </span>
          <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-sm">
            {getIcon(domain.icon)}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-sm text-slate-600 leading-relaxed">
          {domain.shortDesc}
        </p>

        <div className="space-y-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
            Actions clés :
          </span>
          <ul className="space-y-1.5 text-xs text-slate-600">
            {domain.activities.slice(0, 2).map((act, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span className="line-clamp-1">{act}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/nos-actions#${domain.id}`}
          className="inline-flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-2 group-hover:translate-x-1 transition-transform"
        >
          <span>En savoir plus</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
