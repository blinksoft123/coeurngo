import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3.5 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          light 
            ? 'bg-white/10 text-emerald-300 border border-white/20' 
            : 'bg-emerald-50 text-emerald-800 border border-emerald-200/80'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}{' '}
        {highlight && (
          <span className={light ? 'text-emerald-300' : 'text-emerald-700'}>
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
