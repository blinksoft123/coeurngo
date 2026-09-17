import React from 'react';
import Link from 'next/link';
import { Heart, Mail, Phone, ShieldCheck } from 'lucide-react';
import { SITE_DATA } from '@/data/siteData';

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{SITE_DATA.legalDecision}</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {SITE_DATA.taglines.callToAction}
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Ensemble, renforçons nos capacités d&apos;action auprès des personnes que nous accompagnons au Cameroun. Chaque geste compte : don de matériel, financement de scolarité ou présence bénévole.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/nous-soutenir"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-rose-600 hover:bg-rose-500 shadow-lg shadow-rose-900/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            <Heart className="w-5 h-5 fill-white" />
            <span>Nous soutenir maintenant</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <Mail className="w-5 h-5 text-slate-200" />
            <span>Nous contacter</span>
          </Link>
        </div>

        {/* Quick Contact Micro-bar */}
        <div className="pt-6 border-t border-white/10 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-400">
          <a href={`tel:${SITE_DATA.phones[0].replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Permanence : {SITE_DATA.phones[0]}</span>
          </a>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-slate-400">Siège : {SITE_DATA.headquarters}</span>
        </div>
      </div>
    </section>
  );
}
