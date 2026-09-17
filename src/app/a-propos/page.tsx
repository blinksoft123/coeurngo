import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Calendar, 
  Users, 
  Heart, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  Building2, 
  ArrowRight,
  BookOpen,
  Award
} from 'lucide-react';
import { SITE_DATA } from '@/data/siteData';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez l'histoire, la gouvernance et l'organisation de Cœurs Sans Frontières, ONG humanitaire d'assistance et de bienfaisance au Cameroun depuis 2009.",
};

export default function AProposPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Institution & Histoire
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            À Propos de Cœurs Sans Frontières
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Organisation Humanitaire pour l&apos;Assistance et la Bienfaisance, reconnue au Cameroun et engagée sans relâche auprès des plus vulnérables.
          </p>
        </div>
      </section>

      {/* Official Status Notice & Key Metrics */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-3xl sm:text-4xl font-black text-slate-900 block font-sans">
                {SITE_DATA.creationYear}
              </span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mt-1">
                Création officielle
              </span>
              <span className="text-[11px] text-slate-500">Yaoundé – Cameroun</span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-black text-slate-900 block font-sans">
                {SITE_DATA.governance.presidencyPeriod}
              </span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mt-1">
                Gouvernance
              </span>
              <span className="text-[11px] text-slate-500">Continuité institutionnelle</span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-black text-slate-900 block font-sans">
                06
              </span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mt-1">
                Bureau directeur
              </span>
              <span className="text-[11px] text-slate-500">Personnes dédiées</span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-black text-slate-900 block font-sans">
                15
              </span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mt-1">
                Membres actifs
              </span>
              <span className="text-[11px] text-slate-500">Cotisations & engagement</span>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Présentation & Histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                align="left"
                badge="Histoire & Racines"
                title="Un engagement ininterrompu depuis"
                highlight="2009 au Cameroun"
                subtitle="Née d'une volonté profonde de soulager la détresse des personnes isolées, Cœurs Sans Frontières s'est constituée pour apporter une réponse concrète là où les besoins sont les plus criants."
              />

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Créée en 2009 et officiellement enregistrée sous la <strong>Décision n° 001733/RDA/J06/BAPP</strong>, notre association a fait le choix audacieux d&apos;intervenir directement sur des terrains souvent délaissés : les établissements pénitentiaires (quartiers des mineurs et des femmes), les orphelinats et les quartiers populaires périphériques de Yaoundé.
                </p>
                <p>
                  Au fil des années, l&apos;association a consolidé une approche globale alliant <strong>assistance matérielle d&apos;urgence</strong> (nourriture, savons, vêtements, médicaments), <strong>réarmement moral et spirituel</strong> (études bibliques), et <strong>autonomisation durable</strong> à travers l&apos;apprentissage de métiers concrets (savonnerie, teinture, couture, coiffure).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <strong>Reconnaissance de l&apos;État :</strong> L&apos;autorisation accordée par le Ministère de la Justice permet à nos équipes d&apos;accéder régulièrement aux prisons pour encadrer et former les personnes détenues.
                </div>
              </div>
            </div>

            {/* Visuals: Presidents */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Fondatrice */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-slate-200">
                  <Image
                    src="/images/presidente_fondatrice.png"
                    alt="Présidente fondatrice de Cœurs Sans Frontières"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-1">
                  Fondation (2009)
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  Présidente Fondatrice
                </h4>
                <p className="text-xs text-slate-500">
                  À l&apos;origine de la vision et des premières missions humanitaires
                </p>
              </div>

              {/* Actuelle Présidente */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-slate-200">
                  <Image
                    src="/images/actuelle_presidente.png"
                    alt="Actuelle Présidente de Cœurs Sans Frontières"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-800 mb-1">
                  Gouvernance Actuelle
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  2ème Présidence
                </h4>
                <p className="text-xs text-slate-500">
                  Poursuite des projets de terrain et des partenariats institutionnels
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Notre Mission & Nos Valeurs (with Clear Editorial Notice) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Principes Directeurs"
            title="Notre Mission & Nos Valeurs"
            subtitle="Les fondements humains et éthiques qui guident chacune de nos interventions sur le terrain camerounais."
          />

          {/* Editorial Transparency Banner */}
          <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-5 flex items-start gap-4 max-w-3xl mx-auto">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 leading-relaxed">
              <strong className="block font-bold mb-0.5">Notice de gouvernance transparente :</strong>
              Les formulations de mission et de valeurs ci-dessous résument fidèlement les activités de terrain observées depuis 2009 et constituent une proposition éditoriale soumise à validation lors de la prochaine assemblée générale de l&apos;association.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_DATA.editorialPresentation.values.map((val, i) => (
              <div 
                key={val.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center font-mono text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Organisation & Financement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                align="left"
                badge="Gouvernance Statutaire"
                title="Une organisation rigoureuse,"
                highlight="un fonctionnement bénévole"
                subtitle="Cœurs Sans Frontières s'appuie sur une structure démocratique et transparente pour garantir que chaque ressource bénéficie intégralement aux destinataires finaux."
              />

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  L&apos;association est administrée par un <strong>Bureau Directeur constitué de 06 personnes</strong>, veillant à la planification des interventions, à la coordination des autorisations administratives et au bon déroulement des ateliers.
                </p>
                <p>
                  Elle réunit <strong>15 membres actifs</strong> engagés. Conformément au compte-rendu officiel des activités de l&apos;association :
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                  Financement & Ressources Réelles :
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Cotisations annuelles des membres :</strong> Socle financier statutaire permettant les dépenses administratives et d&apos;amorçage.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Contributions ponctuelles (mains levées) :</strong> Mobilisation solidaire des membres lors des assemblées pour financer des besoins urgents (achats de fournitures scolaires, secours médical).</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <span>Prendre attache avec le bureau</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Document Scan preview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 aspect-[4/3]">
                <Image
                  src="/images/distribution_scolaire_p2.jpg"
                  alt="Membres de Cœurs Sans Frontières en action"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-bold text-sm">Action sur le terrain à Yaoundé</p>
                  <p className="text-xs text-slate-300">Mobilisation des bénévoles lors des remises de matériel</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
