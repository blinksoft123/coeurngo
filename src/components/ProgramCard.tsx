import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Program } from '@/data/siteData';
import { CheckCircle2, ArrowRight, Heart } from 'lucide-react';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Visual Image */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
            {program.badge}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-bold text-lg leading-snug drop-shadow-md">
            {program.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            {program.fullDesc}
          </p>

          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mb-4">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
              Public cible :
            </span>
            <p className="text-xs text-slate-600 font-medium">
              {program.targetAudience}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
              Activités déployées :
            </span>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {program.activities.map((act, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={`/nos-besoins`}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
          >
            <span>Besoins pour cet atelier</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          
          <Link
            href={`/nous-soutenir`}
            className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-colors"
            title="Soutenir ce programme"
          >
            <Heart className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
