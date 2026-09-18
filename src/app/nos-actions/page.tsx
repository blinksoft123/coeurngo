import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldAlert, 
  Baby, 
  GraduationCap, 
  HeartPulse, 
  Wrench, 
  Utensils, 
  Package, 
  CheckCircle2, 
  ArrowRight, 
  Heart,
  BookOpen
} from 'lucide-react';
import { SITE_DATA } from '@/data/siteData';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: "Nos Actions",
  description: "Découvrez l'ensemble des actions humanitaires de Coeur Sans Frontière : assistance aux prisonniers et enfants, éducation, santé, formation professionnelle et nutrition au Cameroun.",
};

export default function NosActionsPage() {
  const actionsList = [
    {
      id: "assistance-prisonniers",
      title: "Assistance aux Prisonniers",
      subtitle: "Accompagnement, réinsertion et dignité en milieu carcéral",
      image: "/images/savonnerie_reinsertion_p1.jpg",
      description: "Intervention autorisée par le Ministère de la Justice auprès des personnes incarcérées, notamment dans les quartiers des mineurs, des femmes et des quartiers de haute sécurité. Nos actions visent la restauration morale et l'apprentissage de métiers pratiques pour éviter la récidive.",
      activities: [
        "Étude biblique hebdomadaire et soutien spirituel fraternel",
        "Ateliers pratiques de savonnerie, teinture de tissus, élevage, coiffure et couture",
        "Distribution de vêtements décents, médicaments de premier secours et savons corporels",
        "Apport de repas chauds et suppléments nutritionnels de subsistance"
      ],
      needs: [
        "Matières premières (huiles végétales, soude, colorants textiles)",
        "Machines à coudre mécaniques et tondeuses de coiffure",
        "Médicaments de base et savons antiseptiques"
      ],
      icon: ShieldAlert,
      badge: "Pôle Carcéral"
    },
    {
      id: "assistance-enfants",
      title: "Assistance aux Enfants & Orphelinats",
      subtitle: "Protection, tendresse et scolarisation des tout-petits",
      image: "/images/distribution_orphelinat.png",
      description: "Soutien direct aux enfants les plus défavorisés de Yaoundé et de ses environs, ainsi qu'un parrainage continu de 02 orphelinats partenaires. Nous veillons à ce qu'aucun enfant ne soit privé d'école ou d'affection.",
      activities: [
        "Accompagnement continu de 02 orphelinats partenaires à Yaoundé",
        "Règlement direct de bourses et pensions scolaires",
        "Distributions festives de colis et boîtes de Noël (jouets, vêtements, friandises)",
        "Temps d'éveil, études bibliques adaptées et écoute attentive"
      ],
      needs: [
        "Prise en charge financière de pensions scolaires annuelles",
        "Lait en poudre infantile et céréales pour bébés",
        "Vêtements neufs ou en très bon état (0 à 16 ans)"
      ],
      icon: Baby,
      badge: "Protection Infantile"
    },
    {
      id: "education",
      title: "Éducation & Réussite Scolaire",
      subtitle: "Fournitures complètes et manuels pour briser l'échec scolaire",
      image: "/images/distribution_scolaire_p1.jpg",
      description: "Chaque enfant a le droit d'apprendre dans des conditions dignes. CSF organise chaque été une vaste campagne de rentrée scolaire pour doter gratuitement des centaines d'écoliers en manuels scolaires officiels et fournitures complètes.",
      activities: [
        "Achat groupé négocié de manuels scolaires officiels du programme camerounais",
        "Distribution de kits scolaires (cahiers, stylos, règles, cartables, ardoises)",
        "Fourniture de bibles pour enfants et matériel pour guides avec Samaritan's Purse",
        "Soutien aux écoles péri-urbaines et rurales (ex: Monatélé)"
      ],
      needs: [
        "Manuels scolaires officiels (primaire et secondaire)",
        "Cahiers de 100, 200 et 288 pages, rames de papier, stylos",
        "Cartables et sacs d'école solides"
      ],
      icon: GraduationCap,
      badge: "Éducation"
    },
    {
      id: "formation-metiers",
      title: "Formation aux Petits Métiers",
      subtitle: "Donner un métier pour construire l'autonomie financière",
      image: "/images/savonnerie_reinsertion_p3.jpg",
      description: "Pour que l'aide humanitaire débouche sur une réelle autonomie. CSF organise des formations intensives et pratiques aux petits métiers générateurs de revenus immédiats sur les marchés locaux.",
      activities: [
        "Atelier de saponification : fabrication de savons ménagers et liquides antiseptiques",
        "Atelier de teinture textile artisanale (motifs batiques africains)",
        "Initiation et perfectionnement à la couture et au patronage",
        "Atelier de coiffure et soins capillaires",
        "Sensibilisation aux bases de la gestion d'une micro-activité"
      ],
      needs: [
        "Réactifs chimiques certifiés, huiles végétales et moules",
        "Colorants textiles pour batiques et bassines renforcées",
        "Kits de coiffure professionnels complets",
        "Indemnisation des artisans-formateurs qualifiés"
      ],
      icon: Wrench,
      badge: "Autonomisation"
    },
    {
      id: "sante-hygiene",
      title: "Santé & Hygiène Préventive",
      subtitle: "Soigner les corps et préserver la dignité humaine",
      image: "/images/prison_femmes_p2.jpg",
      description: "Dans les prisons surpeuplées comme dans les foyers isolés, les infections cutanées, le paludisme et les blessures négligées causent d'immenses souffrances. Nous fournissons des soins de premier recours.",
      activities: [
        "Acheminement de médicaments de première nécessité (antalgiques, antipaludéens, antiseptiques)",
        "Dotation massive en savons antiseptiques confectionnés lors de nos ateliers",
        "Campagnes d'information sur les gestes d'hygiène élémentaire",
        "Fourniture de protections périodiques pour les femmes détenues et adolescentes"
      ],
      needs: [
        "Boîtes de médicaments génériques non périmés",
        "Gaze stérile, pansements, désinfectants et gants médicaux",
        "Serviettes hygiéniques et produits de toilette corporelle"
      ],
      icon: HeartPulse,
      badge: "Santé & Hygiène"
    },
    {
      id: "nutrition",
      title: "Nutrition & Secours Alimentaire",
      subtitle: "Fournir des repas substantiels aux personnes isolées",
      image: "/images/kosovo_08_p2.jpg",
      description: "La faim aggrave l'affaiblissement immunitaire et brise le moral des détenus et des orphelins. CSF intervient avec des dons de denrées de base et des compléments nutritionnels.",
      activities: [
        "Distribution de denrées non périssables (riz, huile, farine, sucre, sel, sardines)",
        "Organisation de collations fortifiantes lors des visites en détention",
        "Apport de fruits frais et compléments vitaminés aux orphelinats"
      ],
      needs: [
        "Sacs de riz (50 kg), bidons d'huile végétale raffinée",
        "Cartons de conserves alimentaires et compléments vitaminés",
        "Financement du transport logistique des denrées"
      ],
      icon: Utensils,
      badge: "Nutrition"
    },
    {
      id: "assistance-materielle",
      title: "Assistance Matérielle & Dons en Nature",
      subtitle: "Vêtements, literie et équipements de première nécessité",
      image: "/images/cadeaux_monatele_p2.jpg",
      description: "Face au dénuement total de familles ou de personnes libérées de prison sans aucune ressource, CSF collecte et redistribue du matériel utile pour vivre avec décence.",
      activities: [
        "Collecte, tri et redistribution de vêtements pour enfants et adultes",
        "Dons de nattes, draps et couvertures pour les dortoirs précaires",
        "Distribution de vaisselle de base, bassines et contenants d'eau propre"
      ],
      needs: [
        "Vêtements propres en bon état, chaussures fermées",
        "Nattes de couchage et couvertures",
        "Ustensiles et jerricans pour le stockage de l'eau"
      ],
      icon: Package,
      badge: "Matériel"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Pôles Opérationnels
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Nos Domaines d&apos;Action
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            De la réinsertion carcérale à la protection des enfants orphelins, découvrez comment Coeur Sans Frontière intervient concrètement au Cameroun.
          </p>
        </div>
      </section>

      {/* Actions List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {actionsList.map((action, idx) => {
            const IconComponent = action.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div 
                key={action.id}
                id={action.id}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
              >
                {/* Visual Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-100">
                    <Image
                      src={action.image}
                      alt={action.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-slate-900 shadow-md">
                        {action.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-bold text-base drop-shadow-md">
                        {action.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        Pôle #{idx + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-tight">
                      {action.title}
                    </h2>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {action.description}
                  </p>

                  {/* Activités */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      Activités déployées sur le terrain :
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {action.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Besoins associés */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block">
                      Besoins matériels prioritaires :
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {action.needs.map((need, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-4 pt-2">
                    <Link
                      href={`/nous-soutenir?action=${action.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 shadow-sm transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white" />
                      <span>Soutenir cette action</span>
                    </Link>

                    <Link
                      href="/nos-besoins"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                    >
                      <span>Voir la liste des besoins</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      <CTASection />
    </div>
  );
}
