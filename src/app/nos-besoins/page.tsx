import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  BookOpen, 
  Briefcase, 
  Pill, 
  Users, 
  Coins, 
  CheckCircle2, 
  Heart, 
  ArrowRight, 
  MapPin, 
  Phone,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { SITE_DATA } from '@/data/siteData';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: "Nos Besoins",
  description: "Consultez les besoins matériels, humains et financiers prioritaires de Coeur Sans Frontière pour soutenir les prisonniers, orphelins et enfants démunis au Cameroun.",
};

export default function NosBesoinsPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-700" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-emerald-700" />;
      case 'Pill':
        return <Pill className="w-6 h-6 text-rose-600" />;
      case 'UsersCheck':
        return <Users className="w-6 h-6 text-emerald-700" />;
      case 'Coins':
      default:
        return <Coins className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
            Transparence & Urgence
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Nos Besoins Prioritaires sur le Terrain
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Pour continuer à former, soigner, nourrir et scolariser dignement, nous comptons sur la solidarité de chacun.
          </p>
        </div>
      </section>

      {/* Context Notice */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <strong>Source officielle des besoins :</strong> Ces catégories sont extraites directement du rapport d&apos;activité de l&apos;association récapitulant les manques constatés lors des visites de prisons et des interventions à Mballa II, Nkozoa 1 et Nkozoa 2.
            </div>
          </div>
        </div>
      </section>

      {/* Besoins List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Besoins Vérifiés"
            title="Comment concrètement"
            highlight="nous aider aujourd'hui ?"
            subtitle="Chaque besoin ci-dessous correspond à un poste de dépense ou de don en nature directement affecté sur le terrain."
          />

          <div className="space-y-8">
            {SITE_DATA.needsCategories.map((need, idx) => (
              <div 
                key={need.id}
                className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col lg:flex-row gap-8 items-start justify-between"
              >
                {/* Left col */}
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                      {getIcon(need.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                          {need.badge}
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-slate-200 text-slate-700">
                          {need.urgency}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                        {need.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {need.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      Articles & moyens recherchés :
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {need.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right col: How to help box */}
                <div className="w-full lg:w-80 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 flex-shrink-0">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      Comment apporter ce soutien ?
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {need.howToHelp}
                    </p>
                  </div>

                  <Link
                    href={`/nous-soutenir?besoin=${need.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-sm transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Contribuer à ce besoin</span>
                  </Link>
                </div>

              </div>
            ))}
          </div>

          <div className="bg-emerald-900 text-white rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4 shadow-lg">
            <h3 className="text-2xl font-bold">
              Vous disposez de matériel à Yaoundé ou ailleurs ?
            </h3>
            <p className="text-sm text-emerald-100 max-w-xl mx-auto leading-relaxed">
              Nous organisons la réception ou le ramassage de vos dons de matériel, manuels et fournitures à notre siège social (BP 7017 Yaoundé).
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white text-emerald-950 hover:bg-emerald-50 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Appeler pour convenir d&apos;un dépôt</span>
              </Link>
              <Link
                href="/nous-soutenir"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition-colors"
              >
                <span>Découvrir toutes les options de don</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}
