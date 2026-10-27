export interface Program {
  id: string;
  title: string;
  category: 'education' | 'metiers' | 'sante' | 'nutrition' | 'prisons' | 'materiel';
  shortDesc: string;
  fullDesc: string;
  targetAudience: string;
  activities: string[];
  associatedNeeds: string[];
  image: string;
  badge: string;
}

export interface DomainAction {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  activities: string[];
  needs: string[];
  icon: string;
  image: string;
}

export interface Partner {
  name: string;
  type: string;
  role: string;
  details: string;
  status: 'Officiel' | 'Opérationnel';
}

export interface NeedCategory {
  id: string;
  title: string;
  badge: string;
  summary: string;
  urgency: 'Prioritaire' | 'Continu' | 'Soutien structurel';
  items: string[];
  howToHelp: string;
  iconName: string;
}

export interface ArchivePhoto {
  src: string;
  title: string;
  dateOrLocation: string;
  category: 'Prisons' | 'Enfance' | 'Formation' | 'Institutionnel';
  description: string;
}

export const SITE_DATA = {
  name: "Coeur Sans Frontière",
  acronym: "CSF",
  legalType: "Organisation Humanitaire pour l'Assistance et la Bienfaisance",
  legalDecision: "Reconnue par Décision n° 001733/RDA/J06/BAPP",
  creationYear: 2009,
  headquarters: "BP 7017 Yaoundé – Cameroun",
  phones: ["+237 699 88 60 55", "+237 675 58 93 11"],
  email: "info@coeursansfrontieres.org",
  
  taglines: {
    hero: "Un cœur pour chaque personne. Une action pour chaque besoin.",
    secondary: "Agir avec humanité. Construire avec espoir.",
    callToAction: "Votre soutien peut devenir une action concrète.",
    vision: "Accompagner, éduquer et redonner des perspectives durables dans la dignité."
  },

  editorialPresentation: {
    intro: "Coeur Sans Frontière est une organisation humanitaire camerounaise pour l'assistance et la bienfaisance, créée en 2009 et légalement reconnue sous la Décision n° 001733/RDA/J06/BAPP.",
    missionPlaceholderNotice: "Notice institutionnelle : Les éléments ci-dessous résument l'engagement documenté sur le terrain depuis 2009 par les membres et le bureau de l'association.",
    mission: "Apporter une aide concrète, spirituelle, éducative et matérielle aux populations vulnérables — notamment les mineurs et femmes en détention, les enfants démunis et les orphelinats partenaires — à travers la réinsertion par les métiers, le don de fournitures et l'accompagnement humain.",
    values: [
      {
        title: "Dignité Humaine",
        desc: "Considérer chaque individu, en milieu carcéral comme en communauté, avec un respect inconditionnel."
      },
      {
        title: "Solidarité Active",
        desc: "Transformer la bienveillance en gestes concrets : dons alimentaires, médicaments et fournitures scolaires."
      },
      {
        title: "Éducation & Autonomie",
        desc: "Transmettre des compétences professionnelles (savonnerie, couture, teinture) pour briser le cercle de la précarité."
      },
      {
        title: "Transparence & Intégrité",
        desc: "Une gestion associative rigoureuse reposant sur l'engagement bénévole et le respect scrupuleux du cadre réglementaire camerounais."
      }
    ]
  },

  stats: [
    {
      value: "2009",
      label: "Année de création",
      subtext: "Engagement ininterrompu au Cameroun"
    },
    {
      value: "2ᵉ",
      label: "Présidence",
      subtext: "Continuité de la gouvernance statutaire"
    },
    {
      value: "06",
      label: "Membres du bureau",
      subtext: "Équipe de direction opérationnelle"
    },
    {
      value: "15",
      label: "Membres actifs",
      subtext: "Cotisations et interventions régulières"
    },
    {
      value: "02",
      label: "Orphelinats accompagnés",
      subtext: "Soutien régulier en pensions & fournitures"
    },
    {
      value: "03+",
      label: "Pôles d'intervention",
      subtext: "Mballa II, Nkozoa 1 et Nkozoa 2"
    }
  ],

  domains: [
    {
      id: "assistance-prisonniers",
      number: "01",
      title: "Assistance aux prisonniers",
      shortDesc: "Accompagnement spirituel, réinsertion sociale et dons de première nécessité en milieu carcéral.",
      description: "Intervention autorisée par le Ministère de la Justice auprès des détenus (notamment dans les quartiers des mineurs, des femmes et de haute sécurité). Actions axées sur la dignité, l'écoute et l'apprentissage de métiers pratiques.",
      activities: [
        "Étude biblique et soutien moral régulier",
        "Ateliers d'apprentissage aux petits métiers : Savonnerie artisanale, Teinture sur tissus, Coiffure, Couture et Élevage",
        "Nutrition des prisonniers et repas solidaires",
        "Dons en nature : vêtements, médicaments, savons de propreté et kits d'hygiène"
      ],
      needs: [
        "Matières premières pour la savonnerie et la teinture",
        "Fournitures pour ateliers de couture et coiffure",
        "Médicaments de base et savons antiseptiques",
        "Kits vestimentaires dignes"
      ],
      icon: "ShieldHand",
      image: "/images/savonnerie_reinsertion_p1.jpg"
    },
    {
      id: "assistance-enfants",
      number: "02",
      title: "Assistance aux enfants",
      shortDesc: "Prise en charge affective, morale et matérielle des enfants défavorisés et orphelins.",
      description: "Soutien direct aux enfants sans grands moyens dans les communautés et partenariat continu avec 02 orphelinats afin de garantir leur épanouissement global.",
      activities: [
        "Accompagnement de 02 orphelinats partenaires",
        "Prise en charge de pensions scolaires pour élèves en détresse",
        "Distribution de cadeaux personnalisés de fin d'année",
        "Études bibliques adaptées et temps d'éveil"
      ],
      needs: [
        "Prise en charge des frais de scolarité (pensions)",
        "Colis de fêtes et vêtements adaptés",
        "Compléments nutritionnels pour les nourrissons et tout-petits"
      ],
      icon: "Baby",
      image: "/images/distribution_orphelinat.png"
    },
    {
      id: "education-scolarite",
      number: "03",
      title: "Éducation & Scolarité",
      shortDesc: "Fourniture de manuels scolaires, matériel pédagogique et encadrement sportif.",
      description: "Pour que chaque enfant ait les outils de sa réussite. Distributions massives de manuels scolaires et cahiers à chaque rentrée, et organisation d'activités sportives équilibrantes.",
      activities: [
        "Distribution annuelle de manuels scolaires et fournitures complètes à la rentrée",
        "Encadrement en Éducation Physique et Sportive (EPS)",
        "Soutien aux écoles partenaires de zones semi-urbaines et rurales (ex: Monatélé)",
        "Bibles d'étude et manuels pour guides"
      ],
      needs: [
        "Manuels scolaires officiels du programme camerounais",
        "Cahiers, stylos, ardoises et sacs à dos",
        "Matériel d'EPS : ballons, dossards, équipements de sport",
        "Stabilisation d'encadreurs éducatifs dédiés"
      ],
      icon: "GraduationCap",
      image: "/images/distribution_scolaire_p1.jpg"
    },
    {
      id: "sante-hygiene",
      number: "04",
      title: "Santé & Hygiène",
      shortDesc: "Prévention sanitaire, fourniture de médicaments d'urgence et produits d'hygiène corporelle.",
      description: "Dans les prisons comme dans les communautés isolées, l'accès aux soins de base est une question vitale. CSF achemine des médicaments essentiels et organise des sensibilisations à l'hygiène.",
      activities: [
        "Distribution de médicaments essentiels sous supervision autorisée",
        "Fourniture de savons antiseptiques fabriqués en ateliers",
        "Campagnes de sensibilisation aux gestes d'hygiène corporelle et bucco-dentaire",
        "Accompagnement des malades chroniques vulnérables"
      ],
      needs: [
        "Médicaments de première nécessité (antalgiques, antipaludéens, désinfectants)",
        "Produits sanitaires, compresses, pansements et gants",
        "Matériel d'examen basique"
      ],
      icon: "HeartPulse",
      image: "/images/prison_akonolinga_p1.jpg"
    },
    {
      id: "formation-metiers",
      number: "05",
      title: "Formation aux petits métiers",
      shortDesc: "Transmission de compétences pratiques immédiatement génératrices de revenus pour une réinsertion pérenne.",
      description: "L'assistance matérielle ponctuelle ne suffit pas sans autonomisation. CSF forme des jeunes, des femmes et des détenus en fin de peine à des métiers concrets.",
      activities: [
        "Ateliers de fabrication de savon liquide et en morceaux",
        "Initiation et perfectionnement aux techniques de teinture artisanale (batiques)",
        "Apprentissage de la couture et du patronage",
        "Ateliers d'initiation à la coiffure mixte",
        "Formation aux bases de l'élevage de proximité"
      ],
      needs: [
        "Machines à coudre manuelles et semi-industrielles",
        "Colorants, réactifs et matières premières pour savonnerie/teinture",
        "Kits de ciseaux, peignes et tondeuses pour la coiffure",
        "Indemnités de transport pour les formateurs qualifiés"
      ],
      icon: "Wrench",
      image: "/images/savonnerie_reinsertion_p3.jpg"
    }
  ] as DomainAction[],

  programs: [
    {
      id: "prog-biblique",
      title: "Étude Biblique & Reconstruction Intérieure",
      category: "prisons",
      badge: "Soutien Moral & Spirituel",
      shortDesc: "Moments d'échange, d'écoute bienveillante et d'étude de la Parole pour restaurer l'espérance.",
      fullDesc: "Développé en milieu carcéral (prison de Yaoundé, Akonolinga) et dans les communautés, ce programme apporte un accompagnement fraternel indispensable aux personnes en rupture sociale ou privée de liberté.",
      targetAudience: "Détenus (mineurs, femmes, adultes) et jeunes en situation précaire",
      activities: [
        "Partage biblique hebdomadaire",
        "Dons de Bibles et guides d'étude via Samaritan's Purse",
        "Écoute individualisée et prière pour la rédemption"
      ],
      associatedNeeds: ["Bibles en français et langues locales", "Guides d'apprentissage spirituel"],
      image: "/images/kosovo_08_p1.jpg"
    },
    {
      id: "prog-savonnerie-teinture",
      title: "Atelier Savonnerie & Teinture Artisanale",
      category: "metiers",
      badge: "Réinsertion Économique",
      shortDesc: "Formation intensive aux techniques de confection de savons ménagers et de tissus teints de qualité.",
      fullDesc: "Programme phare de réinsertion mené directement au sein des quartiers de détention et des quartiers populaires. Les participants apprennent les dosages, la saponification et la fixation des teintes pour devenir autonomes dès leur sortie.",
      targetAudience: "Détenus en cours de réinsertion, jeunes sans emploi, mères célibataires",
      activities: [
        "Fabrication pratique de savon antiseptique et lessive",
        "Techniques de nouage et coloration de tissus traditionnels",
        "Sensibilisation à la commercialisation locale"
      ],
      associatedNeeds: ["Huiles végétales, soude caustique, moules", "Colorants textiles et bassines renforcées"],
      image: "/images/savonnerie_reinsertion_p2.jpg"
    },
    {
      id: "prog-couture-coiffure",
      title: "Atelier Couture & Coiffure Polyvalente",
      category: "metiers",
      badge: "Autonomie & Artisanat",
      shortDesc: "Apprentissage des techniques de coupe, couture et coiffure pour une insertion professionnelle rapide.",
      fullDesc: "Ce programme s'adresse en priorité aux femmes et jeunes filles détenues ou en grande vulnérabilité, leur offrant un métier valorisant et recherché sur le marché local.",
      targetAudience: "Femmes en milieu carcéral, adolescentes déscolarisées",
      activities: [
        "Apprentissage des points de base et confection de vêtements simples",
        "Techniques de tresses, coiffure et entretien capillaire",
        "Entretien du matériel de coiffure et de couture"
      ],
      associatedNeeds: ["Machines à coudre à pédale", "Miroirs, peignes, ciseaux professionnels", "Coupons de tissus"],
      image: "/images/prison_femmes_p1.jpg"
    },
    {
      id: "prog-rentree-scolaire",
      title: "Campagne Rentrée Scolaire Solidaire",
      category: "education",
      badge: "Éducation Pour Tous",
      shortDesc: "Dotation intégrale en manuels scolaires et fournitures pour enfants démunis.",
      fullDesc: "Chaque année avant le mois de septembre, CSF mobilise ses membres pour acquérir en gros (grâce à son partenariat supermarché) des manuels scolaires officiels et des kits complets distribués aux enfants d'écoles ciblées.",
      targetAudience: "Élèves du primaire et du collège sans ressources financières",
      activities: [
        "Identification des élèves les plus nécessiteux avec le corps enseignant",
        "Achat groupé négocié de manuels et cahiers",
        "Cérémonie de remise solennelle et digne aux familles"
      ],
      associatedNeeds: ["Livres scolaires au programme", "Cahiers 100/200 pages, stylos, règles, boîtes mathématiques"],
      image: "/images/distribution_scolaire_p3.jpg"
    },
    {
      id: "prog-orphelinats",
      title: "Parrainage & Accompagnement de 02 Orphelinats",
      category: "materiel",
      badge: "Protection de l'Enfance",
      shortDesc: "Présence continue auprès des tout-petits sans soutien familial : pensions, nutrition et cadeaux de Noël.",
      fullDesc: "Coeur Sans Frontière apporte un appui régulier à deux centres d'accueil orphelins au Cameroun, en assurant le règlement de pensions scolaires, l'approvisionnement en vivres et la célébration chaleureuse des fêtes.",
      targetAudience: "Enfants orphelins résidents dans les 02 structures partenaires",
      activities: [
        "Règlement partiel ou total des frais d'inscription scolaire",
        "Distribution de colis cadeaux personnalisés en fin d'année (boîtes de Noël)",
        "Apport d'aliments de base, lait pour nourrissons et vêtements"
      ],
      associatedNeeds: ["Financement des pensions scolaires", "Lait maternisé et céréales infantiles", "Jouets et vêtements neufs"],
      image: "/images/camscanner_doc.png"
    },
    {
      id: "prog-eps-sport",
      title: "Éveil Physique, Sport & Santé",
      category: "sante",
      badge: "Épanouissement & Esprit d'Équipe",
      shortDesc: "Encadrement régulier d'activités sportives pour canaliser les énergies et développer l'esprit de fraternité.",
      fullDesc: "Le sport est un vecteur universel d'intégration et de santé. CSF anime des séances de football et de jeux collectifs encadrés auprès des jeunes pour promouvoir une hygiène de vie saine.",
      targetAudience: "Jeunes des quartiers Mballa II / Nkozoa et mineurs détenus",
      activities: [
        "Matchs amicaux de football et tournois de fraternité",
        "Sensibilisation aux bienfaits de l'exercice physique",
        "Distribution de tenues de sport"
      ],
      associatedNeeds: ["Ballons de football en cuir", "Chasubles et sifflets", "Chaussures de sport"],
      image: "/images/distribution_scolaire_p4.jpg"
    }
  ] as Program[],

  zones: [
    {
      name: "MBALLA II",
      role: "Site d'intervention communautaire",
      description: "Quartier populaire de Yaoundé abritant des familles démunies et des groupes de jeunes suivis par les encadreurs de l'association.",
      highlight: "Actions éducatives & soutien de proximité"
    },
    {
      name: "NKOZOA 1",
      role: "Site d'intervention péri-urbain",
      description: "Pôle d'accompagnement éducatif et de formation aux petits métiers pour les jeunes déscolarisés.",
      highlight: "Ateliers pratiques & soutien scolaire"
    },
    {
      name: "NKOZOA 2",
      role: "Site d'intervention solidaire",
      description: "Extension des programmes communautaires, sensibilisation sanitaire et distribution de fournitures.",
      highlight: "Hygiène, santé & entraide communautaire"
    },
    {
      name: "Milieu Carcéral (Yaoundé, Akonolinga)",
      role: "Sites d'intervention pénitentiaire autorisés",
      description: "Prisons Centrale de Yaoundé (quartiers mineurs, femmes et haute sécurité Kosovo 08) et Prison Principale d'Akonolinga.",
      highlight: "Réinsertion, savonnerie, hygiène & écoute"
    }
  ],

  partners: [
    {
      name: "Ministère de la Justice du Cameroun",
      type: "Institution publique étatique",
      role: "Autorisation légale d'accès et d'intervention en milieu pénitentiaire",
      details: "Collaboration officielle permettant à Coeur Sans Frontière de pénétrer dans les établissements carcéraux pour animer les formations professionnelles, les études bibliques et distribuer l'aide matérielle et sanitaire.",
      status: "Officiel"
    },
    {
      name: "Samaritan's Purse (Samaritain purs')",
      type: "Organisation chrétienne humanitaire internationale",
      role: "Fourniture de bibles, matériel éducatif et coffrets cadeaux pour enfants",
      details: "Partenariat stratégique permettant la distribution de bibles d'étude, de matériel pour les guides encadreurs et de colis de Noël festifs aux enfants vulnérables et orphelins.",
      status: "Officiel"
    },
    {
      name: "Supermarché Partenaire Local",
      type: "Partenaire commercial solidaire",
      role: "Tarifs préférentiels pour achats groupés de fournitures",
      details: "Accord solidaire permettant à l'association d'acquérir les fournitures scolaires, cahiers, bics et denrées alimentaires à des prix défiant toute concurrence pour maximiser l'impact de chaque don.",
      status: "Opérationnel"
    }
  ] as Partner[],

  needsCategories: [
    {
      id: "materiel-educatif",
      title: "Matériel d'Éducation & Pédagogie",
      badge: "Besoin Permanent",
      urgency: "Prioritaire",
      summary: "Pour les enfants scolarisés et leurs encadreurs dans nos différents sites d'intervention.",
      items: [
        "Manuels scolaires officiels (SIL au CM2, 6ème à la Terminale)",
        "Cahiers grand et petit format (100, 200, 288 pages)",
        "Stylos (bleus, rouges, verts), crayons, ardoises et gommes",
        "Boîtes d'instruments géométriques et calculatrices de base",
        "Bibles d'étude pour enfants et guides pour les moniteurs"
      ],
      howToHelp: "Vous pouvez déposer directement des cartons de fournitures à notre siège à Yaoundé ou financer un lot d'achat groupé.",
      iconName: "BookOpen"
    },
    {
      id: "materiel-formation",
      title: "Matériel pour la Formation aux Petits Métiers",
      badge: "Autonomisation",
      urgency: "Prioritaire",
      summary: "Pour équiper les ateliers de savonnerie, couture, teinture et coiffure dans les prisons et centres.",
      items: [
        "Matières premières pour savonnerie : soude, huiles, colorants, moules en bois",
        "Matériel textile : colorants chimiques pour teinture, cire, tissus popeline blanche",
        "Machines à coudre mécaniques à pédale (utilisables sans électricité)",
        "Fils de couture, ciseaux de tailleur, mètres rubans et aiguilles",
        "Tondeuses pour coiffure avec adaptateurs et peignes professionnels"
      ],
      howToHelp: "Le don de matériel neuf ou d'occasion en bon état permet d'ouvrir immédiatement un poste d'apprentissage supplémentaire.",
      iconName: "Briefcase"
    },
    {
      id: "medicaments-hygiene",
      title: "Médicaments & Produits de Santé",
      badge: "Urgence Vitale",
      urgency: "Prioritaire",
      summary: "Pour soigner les pathologies courantes et garantir la dignité hygiénique en détention et en orphelinat.",
      items: [
        "Antipaludéens (CTA) et antalgiques (Paracétamol, Ibuprofène)",
        "Désinfectants (Alcool iodé, eau oxygénée, Bétadine) et compresses",
        "Savons antiseptiques, gels hydroalcooliques et crèmes dermatologiques",
        "Serviettes hygiéniques pour les femmes détenues et orphelines",
        "Vitamines et compléments pour enfants anémiés"
      ],
      howToHelp: "Les dons de lots pharmaceutiques scellés ou le règlement direct d'ordonnances auprès de pharmacies partenaires sont bienvenus.",
      iconName: "Pill"
    },
    {
      id: "stabilisation-encadreurs",
      title: "Stabilisation des Encadreurs de Terrain",
      badge: "Ressources Humaines",
      urgency: "Soutien structurel",
      summary: "Assurer la régularité et la sécurité des éducateurs intervenant à Mballa II, Nkozoa 1 et Nkozoa 2.",
      items: [
        "Prise en charge des indemnités de déplacement local des encadreurs bénévoles",
        "Sessions de formation continue des encadreurs pédagogiques et spirituels",
        "Équipements de terrain (badges officiels, gilets institutionnels CSF, porte-documents)",
        "Crédit de communication pour le suivi des bénéficiaires et familles"
      ],
      howToHelp: "Parrainez un animateur de terrain pour lui permettre d'intervenir régulièrement dans les communautés et prisons.",
      iconName: "UsersCheck"
    },
    {
      id: "financements-solidaires",
      title: "Financements des Projets & Pensions",
      badge: "Soutien Global",
      urgency: "Continu",
      summary: "Nos financements actuels reposent sur les cotisations limitées de nos 15 membres. Chaque don permet d'élargir nos capacités.",
      items: [
        "Règlement annuel des pensions scolaires dans les 02 orphelinats",
        "Achat de compléments alimentaires d'urgence lors des visites en prison",
        "Frais logistiques de transport des dons entre Yaoundé et les provinces (ex: Monatélé, Akonolinga)",
        "Fonds d'amorçage pour les détenus libérés formés par CSF"
      ],
      howToHelp: "Contactez directement la direction de l'association pour connaître les modalités pratiques de versement (rencontre au siège, virement ou mandat).",
      iconName: "Coins"
    }
  ] as NeedCategory[],

  supportOptions: [
    {
      id: "don-materiel",
      title: "Donner du Matériel & Fournitures",
      tagline: "Un don direct et concret",
      description: "Cahiers, manuels scolaires, médicaments sous emballage d'origine, machines à coudre, matières premières de savonnerie, vêtements propres.",
      badge: "Direct & Immédiat",
      actionText: "Organiser un dépôt de matériel",
      actionHref: "/contact?motif=don-materiel"
    },
    {
      id: "parrainage-pension",
      title: "Financer la Scolarité ou la Réinsertion",
      tagline: "Changer un destin pour toujours",
      description: "Prenez en charge la pension scolaire d'un orphelin pour une année, ou financez un kit d'outils de réinsertion pour un détenu en fin de peine.",
      badge: "Impact Durable",
      actionText: "Devenir bienfaiteur financier",
      actionHref: "/contact?motif=parrainage-scolaire"
    },
    {
      id: "partenariat-mecenat",
      title: "Partenariat Institutionnel ou Entreprise",
      tagline: "Responsabilité Sociale & Mécénat",
      description: "Vous êtes une entreprise, une fondation, une ONG internationale ou une institution publique ? Échangeons sur des synergies à fort impact humain.",
      badge: "Institutionnel",
      actionText: "Proposer un partenariat",
      actionHref: "/partenaires"
    },
    {
      id: "benevolat-encadrement",
      title: "Rejoindre l'Équipe Bénévole",
      tagline: "Donner de son temps et ses compétences",
      description: "Vous êtes formateur artisan, enseignant, soignant, juriste ou simplement animé par l'amour de votre prochain ? Votre présence sur le terrain est précieuse.",
      badge: "Engagement Humain",
      actionText: "Postuler comme bénévole",
      actionHref: "/contact?motif=benevolat"
    }
  ],

  governance: {
    status: "Association Humanitaire déclarée et reconnue",
    decision: "Décision n° 001733/RDA/J06/BAPP",
    presidencyPeriod: "2ème Présidence",
    officeSize: "06 personnes au bureau directeur",
    activeMembers: "15 membres actifs",
    fundingSourceNotice: "Conformément aux statuts réels de l'association, les ressources financières proviennent exclusivement des cotisations annuelles des membres et des contributions ponctuelles lors des assemblées à mains levées.",
    foundersNote: "Fondée avec amour en 2009 pour faire reculer la misère et restaurer l'espérance des plus oubliés de notre société."
  },

  archiveGallery: [
    {
      src: "/images/distribution_scolaire_p1.jpg",
      title: "Rentrée Scolaire Solidaire",
      dateOrLocation: "Cameroun",
      category: "Enfance",
      description: "Distribution solennelle de manuels scolaires officiels et de fournitures neuves aux élèves sans grands moyens."
    },
    {
      src: "/images/savonnerie_reinsertion_p1.jpg",
      title: "Atelier Savonnerie en Milieu Carcéral",
      dateOrLocation: "Prison Centrale",
      category: "Prisons",
      description: "Apprentissage des techniques de saponification et production de savons antiseptiques pour la réinsertion sociale."
    },
    {
      src: "/images/distribution_orphelinat.png",
      title: "Distribution de Colis Festifs",
      dateOrLocation: "Orphelinat Partenaire",
      category: "Enfance",
      description: "Remise chaleureuse de cadeaux de fin d'année et boîtes surprises aux enfants accompagnés."
    },
    {
      src: "/images/prison_akonolinga_p1.jpg",
      title: "Accompagnement des Femmes",
      dateOrLocation: "Prison d'Akonolinga",
      category: "Prisons",
      description: "Visite de soutien, écoute et distribution de produits de première nécessité au quartier féminin."
    },
    {
      src: "/images/savonnerie_reinsertion_p3.jpg",
      title: "Ateliers Teinture & Savonnerie",
      dateOrLocation: "Projet Réinsertion",
      category: "Formation",
      description: "Présentation des résultats des ateliers pratiques : tissus teints et savons prêts à l'usage."
    },
    {
      src: "/images/cadeaux_monatele_p1.jpg",
      title: "Solidarité Rurale à Monatélé",
      dateOrLocation: "Monatélé (2013)",
      category: "Enfance",
      description: "Distribution de cadeaux et de matériel d'étude aux écoliers des écoles périphériques."
    },
    {
      src: "/images/kosovo_08_p1.jpg",
      title: "Visite au Quartier de Haute Sécurité",
      dateOrLocation: "Kosovo 08",
      category: "Prisons",
      description: "Action d'assistance matérielle, d'hygiène et de réconfort spirituel aux personnes isolées."
    },
    {
      src: "/images/distribution_scolaire_p2.jpg",
      title: "Appui Pédagogique aux Enseignants",
      dateOrLocation: "Écoles partenaires",
      category: "Formation",
      description: "Remise de guides pédagogiques et fournitures pour stabiliser les conditions de travail en classe."
    }
  ] as ArchivePhoto[]
};
