'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Package, 
  Building2, 
  Users, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { SITE_DATA } from '@/data/siteData';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export default function NousSoutenirPage() {
  const [activeTab, setActiveTab] = useState<'don' | 'materiel' | 'partenaire' | 'benevole'>('don');

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
            Solidarité & Impact
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Nous Soutenir
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Votre engagement transforme des vies au Cameroun. Découvrez les différentes manières d&apos;apporter votre pierre à l&apos;édifice.
          </p>
        </div>
      </section>

      {/* 4 Pillars of Contribution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader
            badge="Modalités de Soutien"
            title="Quatre façons concrètes d&apos;agir avec"
            highlight="Coeur Sans Frontière"
            subtitle="Choisissez la formule qui correspond le mieux à votre sensibilité et à vos possibilités."
          />

          {/* Navigation Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-full overflow-x-auto">
              <button
                onClick={() => setActiveTab('don')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'don'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <Heart className="w-4 h-4" />
                <span>Faire un don financier</span>
              </button>

              <button
                onClick={() => setActiveTab('materiel')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'materiel'
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>Donner du matériel</span>
              </button>

              <button
                onClick={() => setActiveTab('partenaire')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'partenaire'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Devenir partenaire</span>
              </button>

              <button
                onClick={() => setActiveTab('benevole')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'benevole'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Devenir bénévole</span>
              </button>
            </div>
          </div>

          {/* Tab Content 1: Faire un don */}
          {activeTab === 'don' && (
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 inline-block">
                  Aide Financière Directe
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Financer un programme d&apos;autonomisation ou une scolarité
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Vos contributions permettent de financer les pensions scolaires d&apos;orphelins, les matières premières pour les ateliers de savonnerie en prison et le secours médical d&apos;urgence.
                </p>
              </div>

              {/* Notice Absence de coordonnées bancaires fictives */}
              <div className="bg-white rounded-2xl p-6 border border-rose-200/80 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Procédure officielle et sécurisée de don
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      Par souci de sécurité, de transparence et de conformité réglementaire, <strong>Coeur Sans Frontière ne publie pas de coordonnées bancaires ou de numéros de transfert direct sans contact préalable</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Pour connaître les modalités officielles de versement :
                  </p>
                  <Link
                    href="/contact?motif=don-financier"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 shadow-sm transition-colors"
                  >
                    <span>Contactez-nous pour connaître les modalités de soutien</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Architecture future des moyens de paiement */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Passerelles de paiement bientôt intégrées :
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 opacity-80">
                    <Smartphone className="w-4 h-4 text-amber-500" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">MTN MoMo</span>
                      <span className="text-[10px] text-slate-400">En cours d&apos;agrég.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 opacity-80">
                    <Smartphone className="w-4 h-4 text-orange-500" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Orange Money</span>
                      <span className="text-[10px] text-slate-400">En cours d&apos;agrég.</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 opacity-80">
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Virement bancaire</span>
                      <span className="text-[10px] text-slate-400">Sur demande</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 opacity-80">
                    <Sparkles className="w-4 h-4 text-slate-700" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Stripe / Carte</span>
                      <span className="text-[10px] text-slate-400">International</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Donner du matériel */}
          {activeTab === 'materiel' && (
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 inline-block">
                Dons en Nature
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Fournir du matériel pour nos ateliers et les écoliers
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Le don de fournitures et d&apos;outils est un moyen direct d&apos;impacter nos bénéficiaires sans aucun intermédiaire.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">Pour les Ateliers de Réinsertion</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Matières pour savonnerie (soude, huiles végétales, moules)</li>
                    <li>• Machines à coudre mécaniques à pédale</li>
                    <li>• Colorants textiles et bassines de teinture</li>
                    <li>• Ciseaux de tailleur, peignes et tondeuses de coiffure</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">Pour les Enfants & Écoles</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Manuels scolaires officiels (primaire et collège)</li>
                    <li>• Cahiers de 100 et 200 pages, stylos, règles, cartables</li>
                    <li>• Bibles d&apos;étude et matériel de catéchèse</li>
                    <li>• Vêtements et chaussures propres (toutes tailles)</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-slate-700">
                <strong>Point de dépôt :</strong> Siège social BP 7017 Yaoundé (Mballa II / Nkozoa). Veuillez nous contacter préalablement pour l&apos;accueil logistique.
              </div>

              <div className="text-center pt-2">
                <Link
                  href="/contact?motif=don-materiel"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 shadow-sm transition-colors"
                >
                  <span>Organiser un dépôt ou un acheminement de matériel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Tab Content 3: Devenir partenaire */}
          {activeTab === 'partenaire' && (
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200 text-slate-800 inline-block">
                Alliances Stratégiques
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Engagez votre institution, entreprise ou fondation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rejoignez le réseau des partenaires qui soutiennent notre action au Cameroun aux côtés du Ministère de la Justice et de Samaritan&apos;s Purse.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                  <h5 className="font-bold text-slate-900">Mécénat d&apos;entreprise</h5>
                  <p className="text-slate-600">Financement fléché sur un programme de réinsertion ou un orphelinat.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                  <h5 className="font-bold text-slate-900">Tarifs solidaires</h5>
                  <p className="text-slate-600">Fourniture de denrées et manuels à prix coûtant.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 text-xs">
                  <h5 className="font-bold text-slate-900">Coopération ONG</h5>
                  <p className="text-slate-600">Interventions conjointes et partage d&apos;expertise technique.</p>
                </div>
              </div>

              <div className="text-center pt-2">
                <Link
                  href="/partenaires"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-colors"
                >
                  <span>Consulter la page partenariats & échanger</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Tab Content 4: Devenir bénévole */}
          {activeTab === 'benevole' && (
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 inline-block">
                Engagement Humain
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Offrez de votre temps et transmettez vos compétences
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Les bénévoles sont le cœur battant de notre organisation. Que vous ayez 2 heures par mois ou 2 jours par semaine, votre présence apporte du réconfort.
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                <p><strong>Profils recherchés en priorité :</strong></p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Artisans formateurs (savonniers, couturiers, coiffeurs)</span>
                  </li>
                  <li className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Enseignants et répétiteurs scolaires</span>
                  </li>
                  <li className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Professionnels de santé (infirmiers, médecins)</span>
                  </li>
                  <li className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Animateurs sportifs et éducateurs de jeunesse</span>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-2">
                <Link
                  href="/contact?motif=benevolat"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-700 shadow-sm transition-colors"
                >
                  <span>Rejoindre notre équipe bénévole</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

      <CTASection />
    </div>
  );
}
