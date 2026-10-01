import type { Bilingual } from './services';

export const SITE_URL = 'https://liyahgroup.me';
export const SITE_NAME = 'LIYAH GROUP';
export const OG_IMAGE = `${SITE_URL}/assets/images/og-image.png`;

/**
 * Titres (≤ ~60 car.) et descriptions (≤ ~160 car.) des pages statiques.
 * Positionnement : entreprise de technologie digitale à portée mondiale (Dubaï · Cameroun · monde entier).
 */
export const pageSeo: Record<string, { title: Bilingual; description: Bilingual; priority: number; changefreq: string }> = {
  '/': {
    title: {
      en: 'LIYAH GROUP | Global Web, SaaS, E-commerce & SEO Partner',
      fr: 'LIYAH GROUP | Partenaire mondial Web, SaaS, E-commerce & SEO',
    },
    description: {
      en: 'LIYAH GROUP builds websites, e-commerce stores, SaaS platforms and SEO growth strategies for businesses and brands worldwide. Offices in Dubai and Cameroon.',
      fr: 'LIYAH GROUP conçoit sites web, boutiques e-commerce, plateformes SaaS et stratégies SEO pour les entreprises et marques du monde entier. Bureaux à Dubaï et au Cameroun.',
    },
    priority: 1.0,
    changefreq: 'weekly',
  },
  '/about': {
    title: {
      en: 'About LIYAH GROUP | Digital Technology Company, Dubai & Cameroon',
      fr: 'À propos de LIYAH GROUP | Technologie digitale, Dubaï & Cameroun',
    },
    description: {
      en: 'Meet LIYAH GROUP, the digital technology company founded by Vincent Nogue. We help businesses and leaders build digital ecosystems from Dubai, Cameroon and beyond.',
      fr: 'Découvrez LIYAH GROUP, l’entreprise de technologie digitale fondée par Vincent Nogue. Nous aidons entreprises et dirigeants à bâtir des écosystèmes digitaux depuis Dubaï, le Cameroun et au-delà.',
    },
    priority: 0.8,
    changefreq: 'monthly',
  },
  '/services': {
    title: {
      en: 'Web Design, E-commerce & SEO Services | LIYAH GROUP',
      fr: 'Services Web, E-commerce & SEO | LIYAH GROUP',
    },
    description: {
      en: 'Website design and development, Shopify e-commerce, SEO and digital growth strategy. Results-driven digital services for brands and businesses worldwide.',
      fr: 'Création de sites web, e-commerce Shopify, SEO et stratégie de croissance digitale. Des services orientés résultats pour les marques et entreprises du monde entier.',
    },
    priority: 0.9,
    changefreq: 'monthly',
  },
  '/saas': {
    title: {
      en: 'SaaS Products | Liafrik by LIYAH GROUP',
      fr: 'Produits SaaS | Liafrik par LIYAH GROUP',
    },
    description: {
      en: 'Liafrik is a global SaaS ecosystem by LIYAH GROUP: POS, CRM, e-commerce, HR, health, accounting, education, real estate and hospitality on one connected platform.',
      fr: 'Liafrik est un écosystème SaaS mondial by LIYAH GROUP : POS, CRM, e-commerce, RH, santé, comptabilité, éducation, immobilier et hôtellerie sur une plateforme connectée.',
    },
    priority: 0.9,
    changefreq: 'monthly',
  },
  '/pricing': {
    title: {
      en: 'Pricing | Web, E-commerce & SEO Packages | LIYAH GROUP',
      fr: 'Tarifs | Offres Web, E-commerce & SEO | LIYAH GROUP',
    },
    description: {
      en: 'Clear pricing for website development, e-commerce, SEO and SaaS solutions. Pick the package that fits your business or request a custom quote.',
      fr: 'Des tarifs clairs pour le développement web, l’e-commerce, le SEO et les solutions SaaS. Choisissez l’offre adaptée à votre entreprise ou demandez un devis sur mesure.',
    },
    priority: 0.7,
    changefreq: 'monthly',
  },
  '/projects': {
    title: {
      en: 'Projects & Case Studies | LIYAH GROUP',
      fr: 'Projets & Études de cas | LIYAH GROUP',
    },
    description: {
      en: 'Explore digital projects delivered by LIYAH GROUP: websites, e-commerce stores and SaaS platforms built for clients and brands around the world.',
      fr: 'Découvrez les projets digitaux réalisés par LIYAH GROUP : sites web, boutiques e-commerce et plateformes SaaS conçus pour des clients et marques du monde entier.',
    },
    priority: 0.7,
    changefreq: 'monthly',
  },
  '/courses': {
    title: {
      en: 'Business & Digital Courses | LIYAH GROUP',
      fr: 'Formations Business & Digital | LIYAH GROUP',
    },
    description: {
      en: 'Business education programs and mentoring from LIYAH GROUP to help founders and teams build digital skills and scale their companies.',
      fr: 'Programmes de formation business et mentorat de LIYAH GROUP pour aider fondateurs et équipes à développer leurs compétences digitales et faire grandir leur entreprise.',
    },
    priority: 0.6,
    changefreq: 'monthly',
  },
  '/blog': {
    title: {
      en: 'Blog | Digital Growth, E-commerce & SEO Insights | LIYAH GROUP',
      fr: 'Blog | Croissance digitale, E-commerce & SEO | LIYAH GROUP',
    },
    description: {
      en: 'Practical insights on digital strategy, e-commerce and growth from the LIYAH GROUP team, for founders and brands building online.',
      fr: 'Analyses pratiques sur la stratégie digitale, l’e-commerce et la croissance par l’équipe LIYAH GROUP, pour les fondateurs et marques qui se développent en ligne.',
    },
    priority: 0.7,
    changefreq: 'weekly',
  },
  '/contact': {
    title: {
      en: 'Contact LIYAH GROUP | Start Your Digital Project',
      fr: 'Contacter LIYAH GROUP | Lancez votre projet digital',
    },
    description: {
      en: 'Tell us about your project. Contact LIYAH GROUP in Dubai or Cameroon by form, email or WhatsApp and get a reply within 24 hours.',
      fr: 'Parlez-nous de votre projet. Contactez LIYAH GROUP à Dubaï ou au Cameroun par formulaire, e-mail ou WhatsApp et recevez une réponse sous 24 heures.',
    },
    priority: 0.9,
    changefreq: 'monthly',
  },
  '/legal': {
    title: {
      en: 'Legal Information | LIYAH GROUP',
      fr: 'Mentions légales | LIYAH GROUP',
    },
    description: {
      en: 'Legal information, terms and company details for LIYAH GROUP.',
      fr: 'Mentions légales, conditions et informations sur la société LIYAH GROUP.',
    },
    priority: 0.3,
    changefreq: 'yearly',
  },
};

/** Données structurées « Organization » (affichées sur toutes les pages, y compris sans JavaScript). */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/app-icon-512.png`,
  image: OG_IMAGE,
  description:
    'LIYAH GROUP is a digital technology company building websites, e-commerce stores, SaaS platforms and SEO growth strategies for businesses and brands worldwide.',
  email: 'info@liyahgroup.me',
  telephone: '+971503857203',
  founder: { '@type': 'Person', name: 'Vincent Nogue' },
  brand: { '@type': 'Brand', name: 'Liafrik', url: 'https://liafrik.com' },
  areaServed: 'Worldwide',
  knowsAbout: ['Web development', 'E-commerce', 'SaaS', 'SEO', 'Digital strategy'],
  address: [
    { '@type': 'PostalAddress', streetAddress: 'Jumeirah 1', addressLocality: 'Dubai', addressCountry: 'AE' },
    { '@type': 'PostalAddress', addressLocality: 'Yaoundé (Soa)', addressCountry: 'CM' },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'info@liyahgroup.me',
      telephone: '+971503857203',
      availableLanguage: ['English', 'French'],
    },
  ],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: ['en', 'fr'],
  publisher: { '@id': `${SITE_URL}/#organization` },
};
