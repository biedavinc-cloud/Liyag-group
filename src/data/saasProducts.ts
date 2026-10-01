export interface Bilingual {
  en: string;
  fr: string;
}

export function tr(b: Bilingual, lang: 'EN' | 'FR'): string {
  return lang === 'FR' ? b.fr : b.en;
}

export interface SaasProduct {
  slug: string;
  name: string;
  tagline: Bilingual;
  mainBenefit: Bilingual;
  description: Bilingual;
  features: Bilingual[];
  mockupType: string;
  accent: string;
}

export const saasProducts: SaasProduct[] = [
  {
    slug: 'liafrik',
    name: 'Liafrik',
    tagline: {
      en: 'One Platform. Every Module. Built for Scale.',
      fr: 'Une Plateforme. Tous les Modules. Conçue pour Grandir.',
    },
    mainBenefit: {
      en: 'Liafrik is the all-in-one modular business platform developed by LIYAH GROUP. From CRM to e-commerce to AI tools, each module connects seamlessly — so your data, operations, and growth stay unified.',
      fr: "Liafrik est la plateforme business modulaire tout-en-un développée par LIYAH GROUP. Du CRM à l'e-commerce en passant par les outils IA, chaque module se connecte sans effort — pour garder vos données, opérations et croissance unifiées.",
    },
    description: {
      en: 'The unified African business operating system — activate only the modules you need and scale as you grow.',
      fr: "Le système d'exploitation business africain unifié — activez uniquement les modules dont vous avez besoin et évoluez à votre rythme.",
    },
    features: [
      { en: 'CRM — manage leads, pipelines, and customer relationships', fr: 'CRM — gérez leads, pipelines et relations clients' },
      { en: 'POS & E-Commerce — sell in-store and online from one system', fr: 'POS & E-Commerce — vendez en boutique et en ligne depuis un seul système' },
      { en: 'HR, Payroll & Accounting — run operations end to end', fr: 'RH, Paie & Comptabilité — gérez vos opérations de bout en bout' },
      { en: 'Vertical modules — school, healthcare, real estate, tontine and more', fr: 'Modules verticaux — école, santé, immobilier, tontine et plus' },
      { en: '12+ modules, one login, fully connected', fr: '12+ modules, une seule connexion, entièrement connectés' },
    ],
    mockupType: 'dashboard',
    accent: 'bg-secondary-600',
  },
];

export function getSaasProductBySlug(slug: string) {
  return saasProducts.find((p) => p.slug === slug);
}

export interface LiafrikModule {
  slug: string;
  name: string;
  category: Bilingual;
  valueProposition: Bilingual;
  mainBenefit: Bilingual;
  mockupType: string;
  icon: string;
  logo?: string;
  color: string;
  comingSoon?: boolean;
}

const MODULES: LiafrikModule[] = [
  {
    slug: 'pos',
    name: 'POS',
    category: { en: 'Retail', fr: 'Retail' },
    valueProposition: { en: 'Point-of-sale system for retail and physical operations.', fr: 'Système de point de vente pour le retail et les opérations physiques.' },
    mainBenefit: { en: 'Sell in-store and online with a single, synced inventory.', fr: 'Vendez en boutique et en ligne avec un inventaire unique et synchronisé.' },
    mockupType: 'pos',
    icon: 'Store',
    logo: '/assets/images/modules/pos.png',
    color: '#F5941F',
  },
  {
    slug: 'sellia',
    name: 'Sellia',
    category: { en: 'Ecommerce', fr: 'Ecommerce' },
    valueProposition: { en: 'Full online store with payments, logistics, and automation.', fr: 'Boutique en ligne complète avec paiements, logistique et automatisation.' },
    mainBenefit: { en: 'Launch a store that converts, with checkout built in.', fr: 'Lancez une boutique qui convertit, avec un paiement intégré.' },
    mockupType: 'ecommerce',
    icon: 'ShoppingBag',
    logo: '/assets/images/modules/sellia.png',
    color: '#1E293B',
  },
  {
    slug: 'crm',
    name: 'CRM',
    category: { en: 'Sales', fr: 'Ventes' },
    valueProposition: { en: 'Manage leads, pipelines, and customer relationships in one place.', fr: 'Gérez leads, pipelines et relations clients en un seul endroit.' },
    mainBenefit: { en: 'Never lose a lead — automated follow-ups keep your pipeline moving.', fr: 'Ne perdez plus aucun lead — les relances automatisées font avancer votre pipeline.' },
    mockupType: 'crm',
    icon: 'RefreshCw',
    logo: '/assets/images/modules/crm.png',
    color: '#2563EB',
  },
  {
    slug: 'faka',
    name: 'Faka',
    category: { en: 'Human Resources', fr: 'Ressources Humaines' },
    valueProposition: { en: 'Employee records, payroll, leave, and performance in one hub.', fr: 'Dossiers employés, paie, congés et performance dans un seul espace.' },
    mainBenefit: { en: 'Run payroll in minutes, not days.', fr: 'Gérez la paie en quelques minutes, plus en plusieurs jours.' },
    mockupType: 'hr',
    icon: 'Users',
    logo: '/assets/images/modules/faka.png',
    color: '#2563EB',
  },
  {
    slug: 'klasoo',
    name: 'Klasoo',
    category: { en: 'Coming Soon', fr: 'Bientôt Disponible' },
    valueProposition: { en: 'A new Liafrik module, launching soon.', fr: 'Un nouveau module Liafrik, bientôt disponible.' },
    mainBenefit: { en: 'Stay tuned — this module is in active development.', fr: 'Restez à l\'écoute — ce module est en cours de développement.' },
    mockupType: 'dashboard',
    icon: 'Briefcase',
    logo: '/assets/images/modules/klasoo.png',
    color: '#7C3AED',
    comingSoon: true,
  },
  {
    slug: 'nutro',
    name: 'Nutro',
    category: { en: 'Restaurants', fr: 'Restaurants' },
    valueProposition: { en: 'Menus, table orders, and kitchen workflow for restaurants.', fr: 'Menus, commandes de table et flux cuisine pour restaurants.' },
    mainBenefit: { en: 'Turn tables faster with digital ordering.', fr: 'Servez plus vite grâce à la commande digitale.' },
    mockupType: 'pos',
    icon: 'UtensilsCrossed',
    logo: '/assets/images/modules/nutro.png',
    color: '#1E293B',
  },
  {
    slug: 'health',
    name: 'Health',
    category: { en: 'Healthcare', fr: 'Santé' },
    valueProposition: { en: 'Patient records, appointments, and billing for clinics.', fr: 'Dossiers patients, rendez-vous et facturation pour cliniques.' },
    mainBenefit: { en: 'Cut patient wait times with digital scheduling.', fr: "Réduisez les temps d'attente des patients grâce à la planification digitale." },
    mockupType: 'health',
    icon: 'Cross',
    logo: '/assets/images/modules/health.png',
    color: '#0D9488',
  },
  {
    slug: 'bailly',
    name: 'Bailly',
    category: { en: 'Real Estate', fr: 'Immobilier' },
    valueProposition: { en: 'Manage listings, tenants, and rent collection.', fr: 'Gérez annonces, locataires et encaissement des loyers.' },
    mainBenefit: { en: 'Collect rent on time with automated reminders.', fr: 'Encaissez les loyers à temps grâce aux rappels automatisés.' },
    mockupType: 'realestate',
    icon: 'Home',
    logo: '/assets/images/modules/bailly.png',
    color: '#2563EB',
  },
  {
    slug: 'kolo',
    name: 'Kolo',
    category: { en: 'Coming Soon', fr: 'Bientôt Disponible' },
    valueProposition: { en: 'A new Liafrik module, launching soon.', fr: 'Un nouveau module Liafrik, bientôt disponible.' },
    mainBenefit: { en: 'Stay tuned — this module is in active development.', fr: 'Restez à l\'écoute — ce module est en cours de développement.' },
    mockupType: 'tontine',
    icon: 'Coins',
    logo: '/assets/images/modules/kolo.png',
    color: '#F5941F',
    comingSoon: true,
  },
  {
    slug: 'skills',
    name: 'Skills',
    category: { en: 'Education', fr: 'Éducation' },
    valueProposition: { en: 'Online courses, quizzes, and certificates for your learners.', fr: 'Cours en ligne, quiz et certificats pour vos apprenants.' },
    mainBenefit: { en: 'Train anyone, anywhere, at their own pace.', fr: "Formez n'importe qui, n'importe où, à son propre rythme." },
    mockupType: 'learning',
    icon: 'GraduationCap',
    logo: '/assets/images/modules/skills.png',
    color: '#2563EB',
  },
  {
    slug: 'mafo',
    name: 'Mafo',
    category: { en: 'Health & Wellness', fr: 'Santé & Bien-être' },
    valueProposition: { en: 'Class bookings, memberships, and wellness tracking.', fr: 'Réservations de cours, abonnements et suivi bien-être.' },
    mainBenefit: { en: 'Fill every class with automated booking reminders.', fr: 'Remplissez chaque cours grâce aux rappels de réservation automatisés.' },
    mockupType: 'wellness',
    icon: 'Pill',
    logo: '/assets/images/modules/mafo.png',
    color: '#1E293B',
  },
  {
    slug: 'libooks',
    name: 'LiBooks',
    category: { en: 'Accounting', fr: 'Comptabilité' },
    valueProposition: { en: 'Invoicing, expenses, and financial reporting in real time.', fr: 'Facturation, dépenses et reporting financier en temps réel.' },
    mainBenefit: { en: 'Know your numbers instantly, no more spreadsheets.', fr: 'Connaissez vos chiffres instantanément, fini les tableurs.' },
    mockupType: 'accounting',
    icon: 'Wallet',
    logo: '/assets/images/modules/libooks.png',
    color: '#DC2626',
  },
  {
    slug: 'zando',
    name: 'Zando',
    category: { en: 'Coming Soon', fr: 'Bientôt Disponible' },
    valueProposition: { en: 'A new Liafrik module, launching soon.', fr: 'Un nouveau module Liafrik, bientôt disponible.' },
    mainBenefit: { en: 'Stay tuned — this module is in active development.', fr: 'Restez à l\'écoute — ce module est en cours de développement.' },
    mockupType: 'ecommerce',
    icon: 'ShoppingCart',
    logo: '/assets/images/modules/zando.png',
    color: '#1E293B',
    comingSoon: true,
  },
  {
    slug: 'atlas',
    name: 'Atlas',
    category: { en: 'Enterprise CRM', fr: 'CRM Entreprise' },
    valueProposition: { en: 'Advanced analytics and pipeline management for larger teams.', fr: 'Analytique avancée et gestion de pipeline pour grandes équipes.' },
    mainBenefit: { en: 'See every deal, every team, in one place.', fr: 'Visualisez chaque deal, chaque équipe, au même endroit.' },
    mockupType: 'dashboard',
    icon: 'BarChart3',
    logo: '/assets/images/modules/atlas.png',
    color: '#F5941F',
  },
  {
    slug: 'litrek',
    name: 'Litrek',
    category: { en: 'Transport', fr: 'Transport' },
    valueProposition: { en: 'Fleet tracking, routes, and logistics management.', fr: 'Suivi de flotte, itinéraires et gestion logistique.' },
    mainBenefit: { en: 'Know where every vehicle is, in real time.', fr: 'Sachez où se trouve chaque véhicule, en temps réel.' },
    mockupType: 'dashboard',
    icon: 'Route',
    logo: '/assets/images/modules/litrek.png',
    color: '#0D9488',
  },
];

export function getLiafrikModules(): LiafrikModule[] {
  return MODULES;
}
