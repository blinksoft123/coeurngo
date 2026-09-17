'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  BookOpen, 
  Wrench, 
  GraduationCap, 
  HeartPulse, 
  Package, 
  Dumbbell, 
  Utensils, 
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  Filter,
  Sparkles
} from 'lucide-react';
import { SITE_DATA, Program } from '@/data/siteData';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export default function ProgrammesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous les programmes' },
    { id: 'prisons', label: 'Milieu Carcéral' },
    { id: 'metiers', label: 'Petits Métiers & Réinsertion' },
    { id: 'education', label: 'Éducation & Bourses' },
    { id: 'sante', label: 'Santé & Hygiène' },
    { id: 'materiel', label: 'Assistance & Orphelinats' },
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? SITE_DATA.programs
    : SITE_DATA.programs.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Modules d&apos;Autonomisation
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Nos Programmes & Ateliers
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Des parcours structurés pour restaurer la dignité par le travail, l&apos;éducation morale et l&apos;apprentissage de métiers concrets.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 sticky top-16 z-30 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider pr-2 flex-shrink-0">
              <Filter className="w-3.5 h-3.5" />
              Filtrer :
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog) => (
              <div 
                key={prog.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Visual Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-slate-900 shadow-md">
                      {prog.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg leading-snug drop-shadow-md">
                      {prog.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {prog.fullDesc}
                    </p>

                    <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs">
                      <span className="font-bold text-emerald-900 block mb-0.5">Bénéficiaires ciblés :</span>
                      <span className="text-slate-700">{prog.targetAudience}</span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                        Activités concrètes :
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {prog.activities.map((act, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold text-rose-700 block mb-1">
                        Besoins pour faire tourner cet atelier :
                      </span>
                      <p className="text-xs text-slate-500">
                        {prog.associatedNeeds.join(' • ')}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/nos-besoins"
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                    >
                      <span>Fournir du matériel</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/nous-soutenir"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-600 hover:text-white transition-colors"
                    >
                      <Heart className="w-3 h-3 fill-current" />
                      <span>Soutenir</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}
