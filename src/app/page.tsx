import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Baby, 
  Scissors, 
  HandHeart, 
  Building2, 
  Package, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { SITE_DATA } from '@/data/siteData';
import StatCounter from '@/components/StatCounter';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ===================================================
          1. HERO SECTION (Élégante, Immersive & Conviviale)
         =================================================== */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white overflow-hidden py-16 lg:py-24">
        {/* Background Visual Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/distribution_scolaire_p1.jpg"
            alt="Action solidaire de Coeur Sans Frontière"
            fill
            priority
            className="object-cover object-center opacity-25 mix-blend-luminosity scale-105 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/80" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge officiel simplifié */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Depuis {SITE_DATA.creationYear} • Yaoundé, Cameroun
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-300 bg-white/5 border border-white/10 backdrop-blur-md">
                  {SITE_DATA.legalType}
                </span>
              </div>

              {/* Titre Principal */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Un cœur pour{' '}
                <span className="text-emerald-400 underline decoration-emerald-500/40 underline-offset-8">
                  chaque personne
                </span>
                .<br />
                Une action pour chaque besoin.
              </h1>

              {/* Sous-titre */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {SITE_DATA.name} est une organisation humanitaire engagée dans l&apos;assistance, l&apos;éducation, l&apos;accompagnement et la bienfaisance au Cameroun.
              </p>

              {/* CTAs principaux */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/nous-soutenir"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-rose-600 hover:bg-rose-500 shadow-lg shadow-rose-900/30 hover:shadow-rose-900/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Heart className="w-5 h-5 fill-white" />
                  <span>Nous soutenir</span>
                </Link>

                <Link
                  href="/nos-actions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Découvrir nos actions</span>
                  <ArrowRight className="w-4 h-4 text-emerald-300" />
                </Link>
              </div>

              {/* Repères rassurants */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Milieu carcéral</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Enfants & 02 Orphelinats</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Ateliers de Réinsertion</span>
                </div>
              </div>
            </div>

            {/* Right Column: Emblème officiel */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-b from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl backdrop-blur-md flex flex-col items-center justify-center text-center group">
                <div className="relative w-56 h-64 sm:w-64 sm:h-72 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/logo.png"
                    alt="Emblème officiel Coeur Sans Frontière"
                    fill
                    className="object-contain filter drop-shadow-2xl"
                    priority
                  />
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 w-full">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                    Symbole d&apos;Amour & d&apos;Espoir
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Trois visages unis au cœur du Cameroun
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================
          2. BANDEAU D'IMPACT (Chiffres Clés)
         =================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <StatCounter />
      </div>

      {/* ===================================================
          3. SECTION : QUI SOMMES-NOUS ? (Introduction Concise)
         =================================================== */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100 group">
                <Image
                  src="/images/presidente_fondatrice.png"
                  alt="Présidente Fondatrice de Coeur Sans Frontière"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-1 rounded bg-emerald-600 text-[11px] font-bold uppercase tracking-wider mb-1">
                    Gouvernance & Racines
                  </span>
                  <p className="font-bold text-base">
                    Une œuvre humanitaire née de la compassion et de l&apos;amour du prochain
                  </p>
                  <p className="text-xs text-slate-300">
                    Créée en 2009 • Poursuivie avec rigueur par le Bureau Directeur
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <span>Notre Raison d&apos;Être</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                  Agir avec humanité.<br />
                  <span className="text-emerald-700">Construire avec espoir.</span>
                </h2>
              </div>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {SITE_DATA.editorialPresentation.intro}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Notre action s&apos;articule autour de principes simples : apporter du secours immédiat, accompagner spirituellement et transmettre des compétences concrètes afin de redonner de la dignité et une autonomie durable à ceux qui en ont le plus besoin.
              </p>

              {/* 3 Valeurs Clés résumées */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">Dignité</h4>
                  <p className="text-[11px] text-slate-600">Respect inconditionnel de chaque individu.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">Solidarité</h4>
                  <p className="text-[11px] text-slate-600">Dons alimentaires, kits d&apos;hygiène et fournitures.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">Autonomie</h4>
                  <p className="text-[11px] text-slate-600">Apprentissage de métiers pratiques et durables.</p>
                </div>
              </div>

              {/* Bouton vers la page À propos */}
              <div className="pt-2">
                <Link
                  href="/a-propos"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <span>En savoir plus sur notre histoire & nos statuts</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ===================================================
          4. SECTION : NOS 3 PILIERS D'ACTION (Aperçu Équilibré)
         =================================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Notre Engagement"
            title="Trois grands axes pour"
            highlight="un impact humain concret"
            subtitle="Découvrez les piliers à travers lesquels Coeur Sans Frontière intervient au quotidien auprès des personnes vulnérables."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pilier 1 : Prisons */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  Milieu Pénitentiaire
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Interventions autorisées par le Ministère de la Justice dans les quartiers sensibles (mineurs, femmes, Kosovo 08). Soutien moral, dons alimentaires et réinsertion sociale.
                </p>
                <ul className="text-xs text-slate-700 space-y-2 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Ateliers savonnerie & petits métiers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Dons de vêtements et médicaments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Étude biblique et réconfort moral</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <Link
                  href="/nos-actions#assistance-prisonniers"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 group"
                >
                  <span>Détails du programme carcéral</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Pilier 2 : Enfants & Orphelinats */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Baby className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  Enfance & 02 Orphelinats
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Accompagnement continu de deux orphelinats partenaires à Yaoundé et scolarisation d&apos;enfants défavorisés pour leur garantir un avenir digne.
                </p>
                <ul className="text-xs text-slate-700 space-y-2 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Prise en charge de pensions scolaires</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Kits de fournitures et manuels complets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Colis festifs et suivi sanitaire</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <Link
                  href="/nos-actions#assistance-enfants"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 group"
                >
                  <span>Détails de nos actions pour l&apos;enfance</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Pilier 3 : Formation aux Métiers */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Scissors className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  Formation & Autonomie
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pour que la solidarité débouche sur l&apos;émancipation économique, nous dispensons des formations pratiques aux métiers artisanaux générateurs de revenus.
                </p>
                <ul className="text-xs text-slate-700 space-y-2 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Saponification (savons antiseptiques & liquides)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Teinture artisanale & confection couture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Initiation aux bases de micro-gestion</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <Link
                  href="/programmes"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 group"
                >
                  <span>Consulter tous nos programmes</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>

          {/* Navigation vers les pages dédiées */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/nos-actions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors"
            >
              <span>Découvrir l&apos;ensemble de nos actions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <span>Voir les modules de formation</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ===================================================
          5. SECTION : COMMENT AGIR AVEC NOUS ? (Aiguillage Efficace)
         =================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Participer à la Mission"
            title="Chaque geste compte pour"
            highlight="transformer des vies"
            subtitle="Que vous soyez un particulier, une entreprise ou une institution, plusieurs façons concrètes s'offrent à vous pour soutenir notre action."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Carte 1 : Soutien Financier */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-rose-50/50 to-white border border-rose-100 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                  <Heart className="w-6 h-6 fill-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Faire un Don & Parrainer
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Financement direct de bourses scolaires, repas d&apos;urgence pour les orphelinats et secours médical pour les détenus démunis.
                </p>
              </div>

              <Link
                href="/nous-soutenir"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors"
              >
                <span>Modalités de don</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Carte 2 : Dons de Matériel */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-100 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Besoins en Matériel
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consultez notre inventaire officiel de besoins : matières premières (savonnerie), fournitures scolaires, vêtements propres et denrées.
                </p>
              </div>

              <Link
                href="/nos-besoins"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors"
              >
                <span>Consulter la liste des besoins</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Carte 3 : Partenariat */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Devenir Partenaire
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Institutions, fondations, églises et associations : unissons nos compétences et nos ressources pour démultiplier notre présence sur le terrain.
                </p>
              </div>

              <Link
                href="/partenaires"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
              >
                <span>Espace Partenaires</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          6. SECTION FINALE : APPEL À L'ACTION & CONTACT
         =================================================== */}
      <CTASection />

    </div>
  );
}
