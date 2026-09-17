export interface Bilingual {
  en: string;
  fr: string;
}

export function tr(b: Bilingual, lang: 'EN' | 'FR' | 'fr' | 'en'): string {
  const l = String(lang).toLowerCase();
  return l === 'fr' ? b.fr : b.en;
}

export interface ServiceStep {
  title: Bilingual;
  desc: Bilingual;
}

export interface ServiceFaq {
  question: Bilingual;
  answer: Bilingual;
}

export interface Service {
  slug: string;
  icon: string;
  category: Bilingual;
  name: Bilingual;
  h1: Bilingual;
  tagline: Bilingual;
  description: Bilingual;
  benefits: Bilingual[];
  process: ServiceStep[];
  faqs: ServiceFaq[];
  seo: { title: Bilingual; description: Bilingual };
  relatedServices: string[];
  relatedProducts: string[];
}

export const services: Service[] = [
  {
    slug: 'website-design-development',
    icon: 'Globe',
    category: { en: 'Digital Presence', fr: 'Présence Digitale' },
    name: { en: 'Website Design & Development', fr: 'Conception & Développement de Sites Web' },
    h1: { en: 'Website Design & Development', fr: 'Conception & Développement de Sites Web' },
    tagline: {
      en: 'Custom, high-performance websites built to convert visitors into customers.',
      fr: 'Des sites web sur-mesure et performants, conçus pour convertir vos visiteurs en clients.',
    },
    description: {
      en: 'We design and build fast, mobile-responsive websites tailored to your brand — from landing pages to full custom platforms.',
      fr: 'Nous concevons et développons des sites rapides et responsives, adaptés à votre marque — des landing pages aux plateformes sur-mesure.',
    },
    benefits: [
      { en: 'Mobile-first, fast-loading design', fr: 'Design mobile-first et rapide' },
      { en: 'SEO-ready structure from day one', fr: 'Structure optimisée SEO dès le départ' },
      { en: 'Custom branding aligned with your identity', fr: 'Branding sur-mesure aligné avec votre identité' },
      { en: 'Ongoing support after launch', fr: 'Support continu après le lancement' },
    ],
    process: [
      { title: { en: 'Discovery', fr: 'Découverte' }, desc: { en: 'We study your goals, audience, and competitors.', fr: 'Nous étudions vos objectifs, votre audience et vos concurrents.' } },
      { title: { en: 'Design', fr: 'Design' }, desc: { en: 'We craft a visual direction that fits your brand.', fr: 'Nous créons une direction visuelle adaptée à votre marque.' } },
      { title: { en: 'Build', fr: 'Développement' }, desc: { en: 'We develop and test across devices.', fr: 'Nous développons et testons sur tous les appareils.' } },
      { title: { en: 'Launch', fr: 'Lancement' }, desc: { en: 'We deploy, monitor, and hand over training.', fr: 'Nous déployons, surveillons et formons votre équipe.' } },
    ],
    faqs: [
      { question: { en: 'How long does a website take?', fr: 'Combien de temps prend un site web ?' }, answer: { en: 'Most projects take 3–6 weeks depending on scope.', fr: 'La plupart des projets prennent 3 à 6 semaines selon la portée.' } },
      { question: { en: 'Do you provide hosting?', fr: "Proposez-vous l'hébergement ?" }, answer: { en: 'Yes, we can set up and manage hosting for you.', fr: "Oui, nous pouvons configurer et gérer l'hébergement pour vous." } },
    ],
    seo: {
      title: { en: 'Website Design & Development | LIYAH GROUP', fr: 'Conception & Développement de Sites Web | LIYAH GROUP' },
      description: { en: 'Custom, high-performance websites built to convert.', fr: 'Sites web sur-mesure et performants, conçus pour convertir.' },
    },
    relatedServices: ['ecommerce-shopify', 'seo-digital-growth-strategy'],
    relatedProducts: ['liafrik'],
  },
  {
    slug: 'ecommerce-shopify',
    icon: 'ShoppingBag',
    category: { en: 'E-Commerce & Revenue', fr: 'E-Commerce & Revenus' },
    name: { en: 'E-Commerce & Shopify', fr: 'E-Commerce & Shopify' },
    h1: { en: 'E-Commerce & Shopify', fr: 'E-Commerce & Shopify' },
    tagline: {
      en: 'Full-featured online stores that turn traffic into revenue.',
      fr: 'Des boutiques en ligne complètes qui transforment le trafic en revenus.',
    },
    description: {
      en: 'We build and optimize e-commerce stores — Shopify or custom — with payments, logistics, and automation built in.',
      fr: "Nous construisons et optimisons des boutiques e-commerce — Shopify ou sur-mesure — avec paiements, logistique et automatisation intégrés.",
    },
    benefits: [
      { en: 'Payment gateway integration', fr: 'Intégration de moyens de paiement' },
      { en: 'Inventory and logistics automation', fr: 'Automatisation des stocks et de la logistique' },
      { en: 'Conversion-focused product pages', fr: 'Pages produits orientées conversion' },
      { en: 'Amazon & marketplace expertise', fr: 'Expertise Amazon & marketplaces' },
    ],
    process: [
      { title: { en: 'Audit', fr: 'Audit' }, desc: { en: 'We assess your current store or market opportunity.', fr: "Nous évaluons votre boutique actuelle ou l'opportunité de marché." } },
      { title: { en: 'Build', fr: 'Construction' }, desc: { en: 'We set up your store, catalog, and payments.', fr: 'Nous configurons votre boutique, catalogue et paiements.' } },
      { title: { en: 'Automate', fr: 'Automatisation' }, desc: { en: 'We connect logistics, email flows, and reporting.', fr: 'Nous connectons logistique, emails automatisés et reporting.' } },
      { title: { en: 'Grow', fr: 'Croissance' }, desc: { en: 'We optimize for conversion and repeat purchases.', fr: 'Nous optimisons pour la conversion et le réachat.' } },
    ],
    faqs: [
      { question: { en: 'Shopify or custom platform?', fr: 'Shopify ou plateforme sur-mesure ?' }, answer: { en: 'We recommend the best fit based on your catalog size and budget.', fr: 'Nous recommandons la meilleure option selon votre catalogue et budget.' } },
    ],
    seo: {
      title: { en: 'E-Commerce & Shopify | LIYAH GROUP', fr: 'E-Commerce & Shopify | LIYAH GROUP' },
      description: { en: 'Full-featured online stores that turn traffic into revenue.', fr: 'Boutiques en ligne complètes qui transforment le trafic en revenus.' },
    },
    relatedServices: ['website-design-development', 'seo-digital-growth-strategy'],
    relatedProducts: ['liafrik'],
  },
  {
    slug: 'seo-digital-growth-strategy',
    icon: 'TrendingUp',
    category: { en: 'Growth & Automation', fr: 'Croissance & Automatisation' },
    name: { en: 'SEO & Digital Growth Strategy', fr: 'SEO & Stratégie de Croissance Digitale' },
    h1: { en: 'SEO & Digital Growth Strategy', fr: 'SEO & Stratégie de Croissance Digitale' },
    tagline: {
      en: 'Data-driven strategy, branding, and marketing tech that compounds growth.',
      fr: "Une stratégie data-driven, du branding et de la marketing tech qui font croître durablement.",
    },
    description: {
      en: 'We combine SEO, content, branding, and automation to build sustainable, compounding growth.',
      fr: 'Nous combinons SEO, contenu, branding et automatisation pour une croissance durable et cumulative.',
    },
    benefits: [
      { en: 'Technical & content SEO', fr: 'SEO technique & de contenu' },
      { en: 'Marketing automation setup', fr: 'Mise en place de marketing automation' },
      { en: 'Brand identity and positioning', fr: "Identité de marque et positionnement" },
      { en: 'Analytics and growth reporting', fr: 'Analytics et reporting de croissance' },
    ],
    process: [
      { title: { en: 'Research', fr: 'Recherche' }, desc: { en: 'We analyze keywords, competitors, and funnels.', fr: 'Nous analysons mots-clés, concurrents et tunnels de conversion.' } },
      { title: { en: 'Strategy', fr: 'Stratégie' }, desc: { en: 'We build a growth roadmap tied to revenue goals.', fr: 'Nous construisons une feuille de route liée aux objectifs de revenus.' } },
      { title: { en: 'Execute', fr: 'Exécution' }, desc: { en: 'We implement SEO, content, and automations.', fr: "Nous mettons en œuvre SEO, contenu et automatisations." } },
      { title: { en: 'Optimize', fr: 'Optimisation' }, desc: { en: 'We track results and iterate monthly.', fr: 'Nous suivons les résultats et itérons chaque mois.' } },
    ],
    faqs: [
      { question: { en: 'How soon will I see results?', fr: 'Quand verrai-je des résultats ?' }, answer: { en: 'SEO typically shows measurable gains within 3–6 months.', fr: 'Le SEO montre généralement des gains mesurables sous 3 à 6 mois.' } },
    ],
    seo: {
      title: { en: 'SEO & Digital Growth Strategy | LIYAH GROUP', fr: 'SEO & Stratégie de Croissance Digitale | LIYAH GROUP' },
      description: { en: 'Data-driven strategy, branding, and marketing tech.', fr: 'Stratégie data-driven, branding et marketing tech.' },
    },
    relatedServices: ['website-design-development', 'ecommerce-shopify'],
    relatedProducts: ['liafrik'],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
