import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Heart, ShieldCheck, ArrowUpRight, ExternalLink } from 'lucide-react';
import { SITE_DATA } from '@/data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative accent gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Official Status (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-14 flex-shrink-0 bg-white/5 rounded-xl p-1 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                <Image
                  src="/images/logo.png"
                  alt="Logo officiel Coeur Sans Frontière"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-black text-xl text-white tracking-tight">
                  COEUR SANS FRONTIÈRE
                </span>
                <span className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Assistance & Bienfaisance
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Organisation humanitaire camerounaise engagée depuis 2009 dans l&apos;assistance, l&apos;éducation, l&apos;accompagnement des personnes vulnérables et la bienfaisance au Cameroun.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{SITE_DATA.legalDecision}</span>
            </div>

            <div className="pt-2">
              <Link
                href="/nous-soutenir"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-sm"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Agir avec nous aujourd&apos;hui</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Navigation Institutionnelle (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Accueil</span>
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>À propos de l&apos;organisation</span>
                </Link>
              </li>
              <li>
                <Link href="/nos-actions" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Nos domaines d&apos;action</span>
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Programmes & Ateliers</span>
                </Link>
              </li>
              <li>
                <Link href="/partenaires" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Partenaires & Institutions</span>
                </Link>
              </li>
              <li>
                <Link href="/nos-besoins" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Besoins prioritaires</span>
                </Link>
              </li>
              <li>
                <Link href="/nous-soutenir" className="hover:text-emerald-400 transition-colors flex items-center justify-between font-medium text-rose-400">
                  <span>Comment nous soutenir</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Contact & Permanence</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Domaines Clés (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Pôles d&apos;Action
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-slate-200 transition-colors">
                <Link href="/nos-actions#assistance-prisonniers">Prisons & Réinsertion</Link>
              </li>
              <li className="hover:text-slate-200 transition-colors">
                <Link href="/nos-actions#assistance-enfants">Enfants & Orphelinats</Link>
              </li>
              <li className="hover:text-slate-200 transition-colors">
                <Link href="/nos-actions#education-scolarite">Manuels & Rentrée scolaire</Link>
              </li>
              <li className="hover:text-slate-200 transition-colors">
                <Link href="/nos-actions#formation-metiers">Savonnerie & Teinture</Link>
              </li>
              <li className="hover:text-slate-200 transition-colors">
                <Link href="/nos-actions#sante-hygiene">Santé & Médicaments</Link>
              </li>
              <li className="pt-2 text-[11px] text-slate-500 italic">
                Sites : Mballa II • Nkozoa 1 & 2 • Yaoundé • Akonolinga
              </li>
            </ul>
          </div>

          {/* Col 4: Siège & Contacts Officiels (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Siège & Permanence
            </h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Siège Social</p>
                  <p className="text-slate-400 text-xs">{SITE_DATA.headquarters}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Téléphones directs</p>
                  <div className="space-y-1 text-xs">
                    <a 
                      href={`tel:${SITE_DATA.phones[0].replace(/\s+/g, '')}`} 
                      className="block text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      {SITE_DATA.phones[0]}
                    </a>
                    <a 
                      href={`tel:${SITE_DATA.phones[1].replace(/\s+/g, '')}`} 
                      className="block text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      {SITE_DATA.phones[1]}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Courrier électronique</p>
                  <a 
                    href={`mailto:${SITE_DATA.email}`} 
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-xs font-mono"
                  >
                    {SITE_DATA.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} <strong className="text-slate-200">Coeur Sans Frontière</strong>. Organisation Humanitaire pour l&apos;Assistance et la Bienfaisance. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Enregistrée au Cameroun</span>
            <span>•</span>
            <span>Yaoundé</span>
            <span>•</span>
            <Link href="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
              Mentions & Transparence
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
