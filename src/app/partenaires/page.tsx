import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  ShieldCheck, 
  HeartHandshake, 
  ShoppingBag, 
  ArrowRight, 
  Mail, 
  CheckCircle2, 
  Globe,
  Sparkles
} from 'lucide-react';
import { SITE_DATA } from '@/data/siteData';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: "Nos Partenaires",
  description: "Découvrez les partenaires institutionnels, humanitaires et solidaires de Coeur Sans Frontière : Ministère de la Justice, Samaritan's Purse et partenaires locaux.",
};

export default function PartenairesPage() {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Alliances & Réseau
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Nos Partenaires Institutionnels & Solidaires
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Agir ensemble pour maximiser l&apos;impact. Découvrez les institutions publiques et organisations qui font confiance à Coeur Sans Frontière.
          </p>
        </div>
      </section>

      {/* Partenaires Connus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Partenariats Établis"
            title="Des collaborations solides pour"
            highlight="le bien commun"
            subtitle="Conformément aux documents officiels de l'association, nos actions s'appuient sur trois catégories majeures d'accords et de coopérations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_DATA.partners.map((partner) => (
              <div 
                key={partner.name}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Badge & Logo Placeholder */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                      {partner.status}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400">
                      <Building2 className="w-6 h-6 text-emerald-700" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {partner.name}
                    </h3>
                    <span className="text-xs font-bold text-emerald-700 block mt-1">
                      {partner.type}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {partner.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Modalité de coopération :
                  </span>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {partner.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Logo Slot Architecture */}
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-8 text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Espace Partenaires & Réseau Institutionnel
            </span>
            <p className="text-xs text-slate-600">
              L&apos;architecture du site est prête pour accueillir les logotypes officiels certifiés de nos partenaires institutionnels et mécènes dès transmission de leurs chartes d&apos;utilisation respectives.
            </p>
          </div>

        </div>
      </section>

      {/* Section Devenir Partenaire */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <SectionHeader
            badge="Nouvelles Synergies"
            title="Devenir Partenaire de"
            highlight="Coeur Sans Frontière"
            subtitle="Entreprises citoyennes, ONG internationales, institutions bilatérales ou fondations philanthropiques : unissons nos forces."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-base font-bold text-white">Mécénat d&apos;Entreprise & RSE</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Apport financier ou dons en nature réguliers dans le cadre de la responsabilité sociale de votre entreprise au Cameroun.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-base font-bold text-white">Fournitures & Tarifs Préférentiels</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Grossistes, distributeurs pharmaceutiques ou papeteries : permettez-nous d&apos;acheter davantage pour les plus démunis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-base font-bold text-white">Coopération Technique & ONG</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mutualisation d&apos;expertise dans la formation artisanale, les soins de santé primaires et la protection de l&apos;enfance.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/contact?motif=partenariat"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/40 transition-colors"
            >
              <HeartHandshake className="w-5 h-5" />
              <span>Parlons de votre projet de partenariat</span>
            </Link>
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}
