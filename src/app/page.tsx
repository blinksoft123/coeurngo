import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Users, 
  Gift, 
  MapPin, 
  HandHeart, 
  Building2, 
  ShoppingBag, 
  Globe2, 
  ChevronRight,
  Stethoscope,
  Scissors,
  Award
} from 'lucide-react';
import { SITE_DATA } from '@/data/siteData';
import StatCounter from '@/components/StatCounter';
import DomainCard from '@/components/DomainCard';
import ProgramCard from '@/components/ProgramCard';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ===================================================
          1. HERO SECTION (Institutionnelle, Émotionnelle & Digne)
         =================================================== */}
      <section className="relative min-h-[88vh] flex items-center bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 text-white overflow-hidden py-16 lg:py-24">
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
            
            {/* Left Column: Hero Text Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Official Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Depuis {SITE_DATA.creationYear}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-300 bg-white/5 border border-white/10 backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {SITE_DATA.legalDecision}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Un cœur pour{' '}
                <span className="text-emerald-400 underline decoration-emerald-500/40 underline-offset-8">
                  chaque personne
                </span>
                .<br />
                Une action pour chaque besoin.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {SITE_DATA.name} est une organisation humanitaire engagée dans l&apos;assistance, l&apos;éducation, l&apos;accompagnement et la bienfaisance au Cameroun.
              </p>

              {/* Two Prominent CTAs */}
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

              {/* Reassuring micro-stats */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Prisons & Milieu carcéral</span>
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

            {/* Right Column: Visual Emblem & Authentic Identity */}
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
          STAT COUNTER STRIP (Official Data)
         =================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <StatCounter />
      </div>

      {/* ===================================================
          2. SECTION : QUI SOMMES-NOUS ?
         =================================================== */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column with authentic document & portrait */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <Image
                  src="/images/presidente_fondatrice.png"
                  alt="Présidente Fondatrice de Coeur Sans Frontière"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-1 rounded bg-emerald-600 text-[11px] font-bold uppercase tracking-wider mb-1">
                    Gouvernance & Racines
                  </span>
                  <p className="font-bold text-base">
                    Une œuvre née de la foi, de l&apos;amour du prochain et de la compassion
                  </p>
                  <p className="text-xs text-slate-300">
                    Fondée en 2009 • Aujourd&apos;hui sous sa 2ème Présidence statutaire
                  </p>
                </div>
              </div>

              {/* Second small photo badge */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Cadre Juridique Légal Camerounais
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {SITE_DATA.legalDecision} — Organisation reconnue d&apos;assistance et de bienfaisance.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <span>Qui sommes-nous ?</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                  Agir avec humanité.<br />
                  <span className="text-emerald-700">Construire avec espoir.</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {SITE_DATA.editorialPresentation.intro}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Depuis plus de 15 ans, notre équipe composée d&apos;un bureau directeur de 06 personnes et de 15 membres engagés consacre ses efforts à restaurer la dignité des plus vulnérables à travers le Cameroun.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong>Milieu pénitentiaire :</strong> Réinsertion sociale, ateliers de savonnerie, teinture, dons alimentaires et médicaments.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong>Protection de l&apos;enfance :</strong> Accompagnement de deux orphelinats, fournitures scolaires complètes et pensions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong>Ancrage local fort :</strong> Interventions directes à Mballa II, Nkozoa 1, Nkozoa 2 et prisons de Yaoundé / Akonolinga.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/a-propos"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <span>En savoir plus sur notre histoire</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors"
                >
                  <span>Contacter le bureau</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ===================================================
          3. SECTION : NOS 5 DOMAINES D'ACTION
         =================================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Domaines d'Intervention"
            title="Des actions ciblées pour"
            highlight="un impact humain direct"
            subtitle="Découvrez les 5 axes stratégiques reconnus à travers lesquels Coeur Sans Frontière déploie son engagement au quotidien."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_DATA.domains.map((domain) => (
              <DomainCard key={domain.id} domain={domain} />
            ))}

            {/* Interactive 6th Card: Call to action */}
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-2xl p-6 text-white flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-emerald-300 fill-emerald-300" />
                </div>
                <h3 className="text-xl font-bold leading-snug">
                  Vous souhaitez soutenir une action précise ?
                </h3>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Qu&apos;il s&apos;agisse de fournir des matières premières pour la savonnerie, des livres pour l&apos;école ou des médicaments, votre contribution va directement au terrain.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/nous-soutenir"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold transition-colors"
                >
                  <span>Participer à nos actions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================
          4. FOCUS IMMERSIF : ASSISTANCE AUX PRISONNIERS
         =================================================== */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-800 border border-rose-200">
                <span>Programme Prioritaire Carcéral</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Accompagner.<br />
                Éduquer.<br />
                <span className="text-rose-600">Redonner des perspectives.</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Avec l&apos;autorisation officielle du Ministère de la Justice, Coeur Sans Frontière intervient régulièrement dans les quartiers sensibles des prisons (notamment le quartier des mineurs, le quartier des femmes et le quartier de haute sécurité Kosovo 08).
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <BookOpen className="w-6 h-6 text-emerald-700 mb-2" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Étude Biblique
                  </h4>
                  <p className="text-xs text-slate-600">
                    Soutien moral et réconfort spirituel pour restaurer l&apos;espérance.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Scissors className="w-6 h-6 text-emerald-700 mb-2" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Petits Métiers
                  </h4>
                  <p className="text-xs text-slate-600">
                    Savonnerie, élevage, teinture, coiffure et couture.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <HandHeart className="w-6 h-6 text-emerald-700 mb-2" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Nutrition & Dons
                  </h4>
                  <p className="text-xs text-slate-600">
                    Vêtements, médicaments, savons et repas de subsistance.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/nos-actions#assistance-prisonniers"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  <span>Découvrir ce programme en détail</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Immersive Visuals */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/savonnerie_reinsertion_p1.jpg"
                    alt="Atelier de savonnerie en prison"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white">
                    Atelier Savonnerie
                  </span>
                </div>

                <div className="relative h-44 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/prison_femmes_p1.jpg"
                    alt="Quartier des femmes"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white">
                    Quartier Féminin
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/kosovo_08_p1.jpg"
                    alt="Visite à Kosovo 08"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white">
                    Dons Kosovo 08
                  </span>
                </div>

                <div className="relative h-64 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/prison_akonolinga_p1.jpg"
                    alt="Prison d'Akonolinga"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white">
                    Akonolinga
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================
          5. SECTION : ASSISTANCE AUX ENFANTS & ORPHELINATS
         =================================================== */}
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Left */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/distribution_orphelinat.png"
                  alt="Distribution de cadeaux aux enfants orphelins"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-bold uppercase tracking-wider inline-block mb-1">
                    Orphelinats Partenaires
                  </span>
                  <p className="text-white font-bold text-base">
                    Remise solennelle de colis festifs et bourses scolaires
                  </p>
                </div>
              </div>

              {/* Floating highlight box */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white text-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <span className="text-xl font-black text-slate-900">02 Orphelinats</span>
                  <p className="text-[11px] text-slate-600">Accompagnés en continu pour les pensions et fournitures.</p>
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-emerald-300 border border-white/20">
                <span>Protection & Avenir</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Parce que chaque enfant<br />
                <span className="text-emerald-400">mérite une chance.</span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Les enfants représentent l&apos;avenir mais restent les premières victimes de la précarité. Coeur Sans Frontière agit auprès d&apos;eux avec douceur, rigueur et persévérance.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
                    1. Étude biblique
                  </span>
                  <p className="text-xs text-slate-300">Éveil spirituel et transmission de repères moraux universels.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
                    2. EPS & Sport
                  </span>
                  <p className="text-xs text-slate-300">Éducation physique pour la santé, l&apos;esprit d&apos;équipe et la discipline.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
                    3. Hygiène & Santé
                  </span>
                  <p className="text-xs text-slate-300">Distribution de savons antiseptiques et sensibilisation aux soins.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
                    4. Petits Métiers
                  </span>
                  <p className="text-xs text-slate-300">Initiation précoce et pratique pour stimuler les vocations.</p>
                </div>
              </div>

              {/* Dedicated Orphelinat Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/15 space-y-2">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                  Nous accompagnons également des enfants dans deux orphelinats :
                </span>
                <p className="text-xs text-slate-200">
                  <strong>Dons réguliers :</strong> Fournitures scolaires complètes à la rentrée, paiement de pensions scolaires, vêtements propres et cadeaux festifs.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/nos-actions#assistance-enfants"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-900 bg-white hover:bg-emerald-50 transition-colors shadow-sm"
                >
                  <span>Découvrir nos actions pour les enfants</span>
                  <ArrowRight className="w-4 h-4 text-emerald-800" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          6. SECTION : NOS PROGRAMMES PHARE
         =================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Programmes Opérationnels"
            title="Des modules structurés au service"
            highlight="de l'autonomie"
            subtitle="Explorez nos programmes phares : Éducation, Formation, Santé & Hygiène, Nutrition et Assistance matérielle."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_DATA.programs.slice(0, 3).map((prog) => (
              <ProgramCard key={prog.id} program={prog} />
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <span>Voir tous nos programmes & ateliers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ===================================================
          7. SECTION : NOS ZONES D'INTERVENTION
         =================================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Ancrage Géographique"
            title="Où intervient"
            highlight="Coeur Sans Frontière ?"
            subtitle="Nos équipes de bénévoles et encadreurs concentrent leurs efforts sur des zones ciblées du Cameroun conformément aux éléments statutaires."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_DATA.zones.map((zone, idx) => (
              <div 
                key={zone.name}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:border-emerald-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                    Pôle #{idx + 1}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    {zone.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500">
                    {zone.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {zone.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">
                    {zone.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 max-w-2xl mx-auto text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Notice Institutionnelle
            </span>
            <p className="text-xs text-slate-600">
              Les zones d&apos;intervention listées ci-dessus correspondent scrupuleusement aux sites opérationnels documentés de l&apos;association.
            </p>
          </div>

        </div>
      </section>

      {/* ===================================================
          8. SECTION : NOS PARTENAIRES
         =================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Collaborations & Synergies"
            title="Ensemble, nous pouvons"
            highlight="aller plus loin."
            subtitle="Coeur Sans Frontière s'appuie sur des partenaires institutionnels, humanitaires et logistiques pour concrétiser ses actions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_DATA.partners.map((partner) => (
              <div 
                key={partner.name}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                      {partner.status}
                    </span>
                    <Building2 className="w-5 h-5 text-slate-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {partner.name}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 block mt-1">
                      {partner.type}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {partner.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Apport clé :
                  </span>
                  <p className="text-xs text-slate-600 font-medium">
                    {partner.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/partenaires"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-800 hover:text-emerald-800 hover:bg-slate-100 transition-colors"
            >
              <span>En savoir plus sur nos partenariats & devenir partenaire</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ===================================================
          9. SECTION : NOS BESOINS
         =================================================== */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Besoins Réels sur le Terrain"
            title="Il reste encore"
            highlight="beaucoup à faire."
            subtitle="Nos besoins matériels et financiers sont concrets et vérifiés. Chaque contribution comble directement un manque identifié."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SITE_DATA.needsCategories.map((need, i) => (
              <div 
                key={need.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono text-emerald-400 font-bold block">
                    0{i + 1}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {need.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {need.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                    {need.urgency}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/nos-besoins"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-rose-600 hover:bg-rose-500 shadow-md transition-colors"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Comment nous soutenir et apporter ce matériel</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ===================================================
          10. SECTION : APPEL À L'ACTION
         =================================================== */}
      <CTASection />

    </div>
  );
}
