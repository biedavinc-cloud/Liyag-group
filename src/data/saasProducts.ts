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
      en: 'A global SaaS ecosystem, African roots and global vision. Activate only the modules you need and scale as you grow.',
      fr: "Un écosystème SaaS mondial, racines africaines et vision globale. Activez uniquement les modules dont vous avez besoin et évoluez à votre rythme.",
    },
    features: [
      { en: 'CRM — manage leads, pipelines, and customer relationships', fr: 'CRM — gérez leads, pipelines et relations clients' },
      { en: 'POS & E-Commerce — sell in-store and online from one system', fr: 'POS & E-Commerce — vendez en boutique et en ligne depuis un seul système' },
      { en: 'HR, Payroll & Accounting — run operations end to end', fr: 'RH, Paie & Comptabilité — gérez vos opérations de bout en bout' },
      { en: 'Vertical modules — school, healthcare, hospitality, real estate and more', fr: 'Modules verticaux — école, santé, hôtellerie, immobilier et plus' },
      { en: '16 modules, one ecosystem, fully connected', fr: '16 modules, un seul écosystème, entièrement connectés' },
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

// Source de vérité : https://liafrik.com/en/products (vérifié le 2026-10-01).
// `comingSoon` reflète la mention « Coming soon » affichée sur chaque fiche produit de liafrik.com.
const MODULES: LiafrikModule[] = [
  {
    slug: 'pos',
    name: 'POS',
    category: { en: 'Retail', fr: 'Retail' },
    valueProposition: { en: 'Run your store, track inventory, accept payments and read your sales in real time.', fr: 'Gérez votre boutique, suivez votre stock, encaissez et lisez vos ventes en temps réel.' },
    mainBenefit: { en: 'Real-time sales, smart inventory tracking and offline mode with auto-sync.', fr: 'Ventes en temps réel, suivi de stock intelligent et mode hors ligne avec synchronisation automatique.' },
    mockupType: 'pos',
    icon: 'Store',
    logo: '/assets/images/modules/pos.png',
    color: '#F5941F',
  },
  {
    slug: 'sellia',
    name: 'Sellia',
    category: { en: 'Ecommerce', fr: 'E-commerce' },
    valueProposition: { en: 'Launch your online store, manage orders, customers and products, and accept payments.', fr: 'Lancez votre boutique en ligne, gérez commandes, clients et produits, et encaissez vos paiements.' },
    mainBenefit: { en: 'Sell worldwide with global payment gateways and a mobile-first checkout.', fr: 'Vendez dans le monde entier avec des passerelles de paiement globales et un paiement mobile-first.' },
    mockupType: 'ecommerce',
    icon: 'ShoppingBag',
    logo: '/assets/images/modules/sellia.png',
    color: '#1E293B',
  },
  {
    slug: 'crm',
    name: 'CRM',
    category: { en: 'Sales', fr: 'Ventes' },
    valueProposition: { en: 'Track every lead, nurture every relationship and automate your sales pipeline.', fr: 'Suivez chaque lead, entretenez chaque relation et automatisez votre pipeline de vente.' },
    mainBenefit: { en: 'Never miss a follow-up — automated reminders keep your pipeline moving.', fr: 'Ne ratez plus aucune relance — les rappels automatiques font avancer votre pipeline.' },
    mockupType: 'crm',
    icon: 'RefreshCw',
    logo: '/assets/images/modules/crm.png',
    color: '#2563EB',
  },
  {
    slug: 'faka',
    name: 'Faka',
    category: { en: 'Human Resources', fr: 'Ressources Humaines' },
    valueProposition: { en: 'Manage employees, payroll, attendance and performance from one place.', fr: 'Gérez employés, paie, présences et performance depuis un seul endroit.' },
    mainBenefit: { en: 'Pay everyone on time and track attendance automatically.', fr: 'Payez tout le monde à temps et suivez les présences automatiquement.' },
    mockupType: 'hr',
    icon: 'Users',
    logo: '/assets/images/modules/faka.png',
    color: '#2563EB',
    comingSoon: true,
  },
  {
    slug: 'klasoo',
    name: 'Klasoo',
    category: { en: 'Education', fr: 'Éducation' },
    valueProposition: { en: 'A complete operating system for schools, connecting administrators, teachers, students and parents.', fr: 'Un système complet pour les établissements scolaires, qui relie administrateurs, enseignants, élèves et parents.' },
    mainBenefit: { en: 'Digitize your school, automate grading and track fee collection.', fr: 'Numérisez votre école, automatisez les notes et suivez le paiement des frais.' },
    mockupType: 'dashboard',
    icon: 'GraduationCap',
    logo: '/assets/images/modules/klasoo.png',
    color: '#7C3AED',
    comingSoon: true,
  },
  {
    slug: 'nutro',
    name: 'Nutro',
    category: { en: 'Restaurants', fr: 'Restaurants' },
    valueProposition: { en: 'Digital menus, orders, kitchen display and table management for restaurants.', fr: 'Menus digitaux, commandes, écran cuisine et gestion des tables pour les restaurants.' },
    mainBenefit: { en: 'Serve faster, cut food waste and run multiple outlets.', fr: 'Servez plus vite, réduisez le gaspillage et gérez plusieurs points de vente.' },
    mockupType: 'pos',
    icon: 'UtensilsCrossed',
    logo: '/assets/images/modules/nutro.png',
    color: '#1E293B',
  },
  {
    slug: 'health',
    name: 'Health',
    category: { en: 'Healthcare', fr: 'Santé' },
    valueProposition: { en: 'Manage your hospital from admissions to medical records: patients, appointments, billing and clinical workflows.', fr: "Gérez votre hôpital de l'admission au dossier médical : patients, rendez-vous, facturation et workflows cliniques." },
    mainBenefit: { en: 'Reduce wait times and keep medical records secure.', fr: "Réduisez les temps d'attente et sécurisez les dossiers médicaux." },
    mockupType: 'health',
    icon: 'Cross',
    logo: '/assets/images/modules/health.png',
    color: '#0D9488',
  },
  {
    slug: 'bailly',
    name: 'Bailly',
    category: { en: 'Real Estate', fr: 'Immobilier' },
    valueProposition: { en: 'Manage properties, tenants, rent collection and maintenance requests.', fr: 'Gérez biens, locataires, encaissement des loyers et demandes de maintenance.' },
    mainBenefit: { en: 'Collect rent on time and track every property.', fr: 'Encaissez les loyers à temps et suivez chaque bien.' },
    mockupType: 'realestate',
    icon: 'Home',
    logo: '/assets/images/modules/bailly.png',
    color: '#2563EB',
    comingSoon: true,
  },
  {
    slug: 'kolo',
    name: 'Kolo',
    category: { en: 'Personal Finance', fr: 'Finances personnelles' },
    valueProposition: { en: 'Track spending, categorize expenses and see your complete financial picture, for individuals, families and small teams.', fr: 'Suivez vos dépenses, catégorisez-les et visualisez votre situation financière, pour particuliers, familles et petites équipes.' },
    mainBenefit: { en: 'Know exactly where your money goes.', fr: 'Sachez exactement où va votre argent.' },
    mockupType: 'tontine',
    icon: 'Coins',
    logo: '/assets/images/modules/kolo.png',
    color: '#F5941F',
  },
  {
    slug: 'skills',
    name: 'Skills',
    category: { en: 'Education', fr: 'Éducation' },
    valueProposition: { en: 'A learning marketplace where instructors publish video courses and learners access them.', fr: "Une place de marché d'apprentissage où les formateurs publient des cours vidéo et les apprenants y accèdent." },
    mainBenefit: { en: 'Learn at your own pace and earn recognized certificates.', fr: 'Apprenez à votre rythme et obtenez des certifications reconnues.' },
    mockupType: 'learning',
    icon: 'GraduationCap',
    logo: '/assets/images/modules/skills.png',
    color: '#2563EB',
    comingSoon: true,
  },
  {
    slug: 'mafo',
    name: 'Mafo',
    category: { en: 'Health & Wellness', fr: 'Santé & Bien-être' },
    valueProposition: { en: "A women's health platform: cycle tracking, pregnancy journeys, personalized insights and trusted health resources.", fr: 'Une plateforme de santé féminine : suivi du cycle, parcours de grossesse, conseils personnalisés et ressources de santé fiables.' },
    mainBenefit: { en: 'Understand your body with private, secure and trusted guidance.', fr: 'Comprenez votre corps grâce à des conseils fiables, privés et sécurisés.' },
    mockupType: 'wellness',
    icon: 'Pill',
    logo: '/assets/images/modules/mafo.png',
    color: '#1E293B',
    comingSoon: true,
  },
  {
    slug: 'libooks',
    name: 'LiBooks',
    category: { en: 'Accounting', fr: 'Comptabilité' },
    valueProposition: { en: 'Invoices, accounting, financial reports and tax compliance.', fr: 'Facturation, comptabilité, rapports financiers et conformité fiscale.' },
    mainBenefit: { en: 'Stay audit-ready and track cash flow live.', fr: "Restez prêt pour l'audit et suivez votre trésorerie en direct." },
    mockupType: 'accounting',
    icon: 'Wallet',
    logo: '/assets/images/modules/libooks.png',
    color: '#DC2626',
  },
  {
    slug: 'zanldo',
    name: 'Zanldo',
    category: { en: 'Marketplace', fr: 'Marketplace' },
    valueProposition: { en: 'A global fashion and lifestyle marketplace connecting buyers and sellers worldwide.', fr: 'Une place de marché mondiale mode et lifestyle qui connecte acheteurs et vendeurs.' },
    mainBenefit: { en: 'Sell without your own store and get paid directly.', fr: 'Vendez sans boutique propre et soyez payé directement.' },
    mockupType: 'ecommerce',
    icon: 'ShoppingCart',
    logo: '/assets/images/modules/zanldo.png',
    color: '#1E293B',
  },
  {
    slug: 'atlas',
    name: 'Atlas',
    category: { en: 'Enterprise CRM', fr: 'CRM Entreprise' },
    valueProposition: { en: 'The enterprise-grade multi-tenant CRM for groups, franchises and multi-brand businesses.', fr: 'Le CRM entreprise multi-tenant pour groupes, franchises et entreprises multi-marques.' },
    mainBenefit: { en: 'Every client or branch gets its own strictly isolated workspace.', fr: 'Chaque client ou filiale dispose de son propre espace strictement isolé.' },
    mockupType: 'dashboard',
    icon: 'BarChart3',
    logo: '/assets/images/modules/atlas.png',
    color: '#F5941F',
  },
  {
    slug: 'litrek',
    name: 'Litrek',
    category: { en: 'Transport', fr: 'Transport' },
    valueProposition: { en: 'A transport platform: book bus, van and interurban tickets in a few taps.', fr: 'Une plateforme de transport : réservez billets de bus, minibus et interurbains en quelques clics.' },
    mainBenefit: { en: 'Book a trip in minutes while agencies list their routes and schedules.', fr: 'Réservez un trajet en quelques minutes pendant que les agences publient lignes et horaires.' },
    mockupType: 'dashboard',
    icon: 'Route',
    logo: '/assets/images/modules/litrek.png',
    color: '#0D9488',
    comingSoon: true,
  },
  {
    slug: 'hostrek',
    name: 'Hostrek',
    category: { en: 'Hospitality', fr: 'Hôtellerie' },
    valueProposition: { en: 'Hotel management, online booking and a public marketplace for hotels, lodges and guesthouses.', fr: "Gestion hôtelière, réservation en ligne et marketplace publique pour hôtels, lodges et maisons d'hôtes." },
    mainBenefit: { en: 'Manage every room, reservation and rate in one place and never double-book.', fr: 'Gérez chambres, réservations et tarifs au même endroit et fini les doubles réservations.' },
    mockupType: 'dashboard',
    icon: 'BedDouble',
    color: '#0D9488',
    comingSoon: true,
  },
];

export function getLiafrikModules(): LiafrikModule[] {
  return MODULES;
}
