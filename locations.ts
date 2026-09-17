import { Bilingual, tr } from './services';
import { Lang } from '@/i18n/translations';

export interface LocationPage {
  slug: string;
  lang: 'fr' | 'en';
  country: string;
  countryCode: string;
  region: 'francophone' | 'anglophone' | 'uae';
  h1: Bilingual;
  intro: Bilingual;
  marketContext: Bilingual;
  services: string[];
  faqs: { question: Bilingual; answer: Bilingual }[];
  seo: {
    title: Bilingual;
    description: Bilingual;
  };
  hreflangPair?: string;
}

export const locations: LocationPage[] = [
  {
    slug: 'agence-digitale-cote-divoire',
    lang: 'fr',
    country: 'Côte d\'Ivoire',
    countryCode: 'CI',
    region: 'francophone',
    h1: {
      en: 'Digital Agency in Côte d\'Ivoire — Websites, E-Commerce & Growth',
      fr: 'Agence Digitale en Côte d\'Ivoire — Sites Web, E-Commerce & Croissance',
    },
    intro: {
      en: 'LIYAH GROUP helps businesses in Abidjan and across Côte d\'Ivoire build powerful digital ecosystems — from websites to e-commerce stores to business automation.',
      fr: 'LIYAH GROUP aide les entreprises d\'Abidjan et de toute la Côte d\'Ivoire à construire des écosystèmes digitaux puissants — des sites web aux boutiques e-commerce en passant par l\'automatisation business.',
    },
    marketContext: {
      en: 'Côte d\'Ivoire has one of West Africa\'s fastest-growing digital economies. With mobile money adoption among the highest on the continent and a rapidly expanding middle class in Abidjan, Ivorian businesses are uniquely positioned to scale through digital channels. We build for local realities: Orange Money and MTN Money integrations, French-language user experiences, and logistics adapted to Abidjan and regional cities.',
      fr: 'La Côte d\'Ivoire possède l\'une des économies digitales les plus dynamiques d\'Afrique de l\'Ouest. Avec l\'adoption du mobile money parmi les plus élevées du continent et une classe moyenne en rapide expansion à Abidjan, les entreprises ivoiriennes sont idéalement positionnées pour passer à l\'échelle via les canaux digitaux. Nous construisons pour les réalités locales : intégrations Orange Money et MTN Money, expériences utilisateur en français, et logistique adaptée à Abidjan et aux villes régionales.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'seo-digital-growth-strategy'],
    faqs: [
      { question: { en: 'Do you work with Ivorian payment methods?', fr: 'Travaillez-vous avec les méthodes de paiement ivoiriennes ?' }, answer: { en: 'Yes. We integrate Orange Money, MTN Money, Moov Money, and local card payments alongside international options.', fr: 'Oui. Nous intégrons Orange Money, MTN Money, Moov Money et les paiements par carte locaux aux côtés des options internationales.' } },
      { question: { en: 'Can you build a site in French?', fr: 'Pouvez-vous construire un site en français ?' }, answer: { en: 'Yes. French is our default language and we build all sites and platforms fully in French for the Ivorian market.', fr: 'Oui. Le français est notre langue par défaut et nous construisons tous les sites et plateformes entièrement en français pour le marché ivoirien.' } },
    ],
    seo: {
      title: { en: 'Digital Agency in Côte d\'Ivoire | LIYAH GROUP', fr: 'Agence Digitale en Côte d\'Ivoire | LIYAH GROUP' },
      description: { en: 'Web design, e-commerce, and digital growth services for businesses in Abidjan and across Côte d\'Ivoire. Local payments, French-language, built for the Ivorian market.', fr: 'Création de sites web, e-commerce et croissance digitale pour les entreprises d\'Abidjan et de toute la Côte d\'Ivoire. Paiements locaux, en français, conçu pour le marché ivoirien.' },
    },
    hreflangPair: 'digital-agency-cote-divoire',
  },
  {
    slug: 'creation-site-web-senegal',
    lang: 'fr',
    country: 'Sénégal',
    countryCode: 'SN',
    region: 'francophone',
    h1: {
      en: 'Web Development in Senegal — Websites That Convert in Dakar and Beyond',
      fr: 'Création de Sites Web au Sénégal — Des Sites Qui Convertissent à Dakar et Partout',
    },
    intro: {
      en: 'LIYAH GROUP builds fast, conversion-focused websites and digital platforms for Senegalese businesses — from Dakar startups to established companies expanding online.',
      fr: 'LIYAH GROUP crée des sites web rapides et orientés conversion et des plateformes digitales pour les entreprises sénégalaises — des startups de Dakar aux entreprises établies qui se développent en ligne.',
    },
    marketContext: {
      en: 'Senegal\'s digital ecosystem is maturing rapidly, with Dakar as a regional hub for tech and entrepreneurship. Wave\'s explosive growth in mobile money has transformed how Senegalese consumers pay online. We build websites and platforms that integrate with Wave, Orange Money, and Free Money — and that are optimized for the mobile-first Senegalese market.',
      fr: 'L\'écosystème digital sénégalais mûrit rapidement, avec Dakar comme hub régional de la tech et de l\'entrepreneuriat. La croissance explosive de Wave dans le mobile money a transformé la façon dont les consommateurs sénégalais paient en ligne. Nous construisons des sites et plateformes qui s\'intègrent à Wave, Orange Money et Free Money — et qui sont optimisés pour le marché sénégalais mobile-first.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'business-automation-crm'],
    faqs: [
      { question: { en: 'Do you integrate with Wave and Orange Money?', fr: 'Vous intégrez-vous avec Wave et Orange Money ?' }, answer: { en: 'Yes. We integrate Wave, Orange Money, and Free Money for Senegalese businesses alongside international payment options.', fr: 'Oui. Nous intégrons Wave, Orange Money et Free Money pour les entreprises sénégalaises aux côtés des options de paiement internationales.' } },
      { question: { en: 'Can you help with SEO in Senegal?', fr: 'Pouvez-vous nous aider avec le SEO au Sénégal ?' }, answer: { en: 'Yes. We build local SEO strategies targeting Senegalese and West African search behavior, in French.', fr: 'Oui. Nous construisons des stratégies SEO locales ciblant le comportement de recherche sénégalais et ouest-africain, en français.' } },
    ],
    seo: {
      title: { en: 'Web Development in Senegal | LIYAH GROUP', fr: 'Création de Sites Web au Sénégal | LIYAH GROUP' },
      description: { en: 'Fast, conversion-focused websites for Senegalese businesses. Wave and Orange Money integration, French-language, SEO for the Dakar market.', fr: 'Sites web rapides et orientés conversion pour les entreprises sénégalaises. Intégration Wave et Orange Money, en français, SEO pour le marché de Dakar.' },
    },
    hreflangPair: 'web-development-senegal',
  },
  {
    slug: 'e-commerce-cameroun',
    lang: 'fr',
    country: 'Cameroun',
    countryCode: 'CM',
    region: 'francophone',
    h1: {
      en: 'E-Commerce in Cameroon — Online Stores Built for the Cameroonian Market',
      fr: 'E-Commerce au Cameroun — Boutiques en Ligne Conçues pour le Marché Camerounais',
    },
    intro: {
      en: 'LIYAH GROUP builds e-commerce stores and digital platforms for Cameroonian businesses — with local payment integration, French and English support, and logistics adapted to Yaoundé, Douala, and beyond.',
      fr: 'LIYAH GROUP crée des boutiques e-commerce et des plateformes digitales pour les entreprises camerounaises — avec intégration de paiement locale, support en français et en anglais, et logistique adaptée à Yaoundé, Douala et au-delà.',
    },
    marketContext: {
      en: 'Cameroon is a bilingual market (French and English) with growing mobile money adoption through MTN Mobile Money and Orange Money. As a country where LIYAH GROUP has a presence (Yaoundé - Soa), we have direct, on-the-ground understanding of the Cameroonian market — its logistics challenges, payment preferences, and consumer behavior across both linguistic regions.',
      fr: 'Le Cameroun est un marché bilingue (français et anglais) avec une adoption croissante du mobile money via MTN Mobile Money et Orange Money. En tant que pays où LIYAH GROUP est présent (Yaoundé - Soa), nous avons une compréhension directe et terrain du marché camerounais — ses défis logistiques, ses préférences de paiement et le comportement des consommateurs dans les deux régions linguistiques.',
    },
    services: ['ecommerce-shopify', 'website-design-development', 'business-automation-crm'],
    faqs: [
      { question: { en: 'Do you support bilingual French/English sites?', fr: 'Proposez-vous des sites bilingues français/anglais ?' }, answer: { en: 'Yes. Cameroon\'s bilingual nature is built into our approach — we deliver sites in both French and English for the Cameroonian market.', fr: 'Oui. La nature bilingue du Cameroun est intégrée dans notre approche — nous livrons des sites en français et en anglais pour le marché camerounais.' } },
      { question: { en: 'Do you have a local presence in Cameroon?', fr: 'Avez-vous une présence locale au Cameroun ?' }, answer: { en: 'Yes. LIYAH GROUP has a presence in Yaoundé - Soa, Cameroon, giving us direct understanding of the local market.', fr: 'Oui. LIYAH GROUP est présent à Yaoundé - Soa, au Cameroun, ce qui nous donne une compréhension directe du marché local.' } },
    ],
    seo: {
      title: { en: 'E-Commerce in Cameroon | LIYAH GROUP', fr: 'E-Commerce au Cameroun | LIYAH GROUP' },
      description: { en: 'E-commerce stores for Cameroonian businesses. MTN and Orange Money integration, bilingual French/English, logistics for Yaoundé and Douala.', fr: 'Boutiques e-commerce pour les entreprises camerounaises. Intégration MTN et Orange Money, bilingue français/anglais, logistique pour Yaoundé et Douala.' },
    },
    hreflangPair: 'ecommerce-cameroon',
  },
  {
    slug: 'agence-digitale-benin',
    lang: 'fr',
    country: 'Bénin',
    countryCode: 'BJ',
    region: 'francophone',
    h1: {
      en: 'Digital Agency in Benin — Websites & Digital Platforms for Beninese Businesses',
      fr: 'Agence Digitale au Bénin — Sites Web & Plateformes Digitales pour les Entreprises Béninoises',
    },
    intro: {
      en: 'LIYAH GROUP helps businesses in Cotonou and across Benin build their digital presence — from websites to e-commerce to growth strategy.',
      fr: 'LIYAH GROUP aide les entreprises de Cotonou et de tout le Bénin à construire leur présence digitale — des sites web à l\'e-commerce en passant par la stratégie de croissance.',
    },
    marketContext: {
      en: 'Benin\'s digital economy is growing, with Cotonou as its commercial hub. Mobile money adoption through MTN and Moov is expanding digital payment options. We build for the Beninese market with French-language experiences and local payment integration.',
      fr: 'L\'économie digitale du Bénin est en croissance, avec Cotonou comme hub commercial. L\'adoption du mobile money via MTN et Moov élargit les options de paiement digital. Nous construisons pour le marché béninois avec des expériences en français et une intégration de paiement locale.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'seo-digital-growth-strategy'],
    faqs: [
      { question: { en: 'Do you work with Beninese payment methods?', fr: 'Travaillez-vous avec les méthodes de paiement béninoises ?' }, answer: { en: 'Yes. We integrate MTN Mobile Money and Moov Money for Beninese businesses.', fr: 'Oui. Nous intégrons MTN Mobile Money et Moov Money pour les entreprises béninoises.' } },
    ],
    seo: {
      title: { en: 'Digital Agency in Benin | LIYAH GROUP', fr: 'Agence Digitale au Bénin | LIYAH GROUP' },
      description: { en: 'Web design, e-commerce, and digital growth for businesses in Cotonou and across Benin. French-language, local payments, built for the Beninese market.', fr: 'Création de sites web, e-commerce et croissance digitale pour les entreprises de Cotonou et de tout le Bénin. En français, paiements locaux, conçu pour le marché béninois.' },
    },
    hreflangPair: 'digital-agency-benin',
  },
  {
    slug: 'agence-digitale-togo',
    lang: 'fr',
    country: 'Togo',
    countryCode: 'TG',
    region: 'francophone',
    h1: {
      en: 'Digital Agency in Togo — Websites & E-Commerce for Togolese Businesses',
      fr: 'Agence Digitale au Togo — Sites Web & E-Commerce pour les Entreprises Togolaises',
    },
    intro: {
      en: 'LIYAH GROUP builds websites, e-commerce stores, and digital platforms for businesses in Lomé and across Togo.',
      fr: 'LIYAH GROUP crée des sites web, des boutiques e-commerce et des plateformes digitales pour les entreprises de Lomé et de tout le Togo.',
    },
    marketContext: {
      en: 'Togo\'s digital landscape is developing, with Lomé as its economic center. Mobile money through Moov and TMoney is expanding access to digital payments. We build French-language sites and platforms with local payment integration for the Togolese market.',
      fr: 'Le paysage digital togolais se développe, avec Lomé comme centre économique. Le mobile money via Moov et TMoney élargit l\'accès aux paiements digitaux. Nous construisons des sites et plateformes en français avec intégration de paiement locale pour le marché togolais.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'seo-digital-growth-strategy'],
    faqs: [
      { question: { en: 'Do you integrate with Togolese payment methods?', fr: 'Vous intégrez-vous avec les méthodes de paiement togolaises ?' }, answer: { en: 'Yes. We integrate Moov Money and TMoney for Togolese businesses.', fr: 'Oui. Nous intégrons Moov Money et TMoney pour les entreprises togolaises.' } },
    ],
    seo: {
      title: { en: 'Digital Agency in Togo | LIYAH GROUP', fr: 'Agence Digitale au Togo | LIYAH GROUP' },
      description: { en: 'Web design, e-commerce, and digital growth for businesses in Lomé and across Togo. French-language, local payments, built for the Togolese market.', fr: 'Création de sites web, e-commerce et croissance digitale pour les entreprises de Lomé et de tout le Togo. En français, paiements locaux, conçu pour le marché togolais.' },
    },
    hreflangPair: 'digital-agency-togo',
  },
  {
    slug: 'agence-digitale-rdc',
    lang: 'fr',
    country: 'République Démocratique du Congo',
    countryCode: 'CD',
    region: 'francophone',
    h1: {
      en: 'Digital Agency in DR Congo — Websites & Digital Platforms for Congolese Businesses',
      fr: 'Agence Digitale en RDC — Sites Web & Plateformes Digitales pour les Entreprises Congolaises',
    },
    intro: {
      en: 'LIYAH GROUP helps businesses in Kinshasa and across the DRC build powerful digital ecosystems.',
      fr: 'LIYAH GROUP aide les entreprises de Kinshasa et de toute la RDC à construire des écosystèmes digitaux puissants.',
    },
    marketContext: {
      en: 'The DRC is one of Africa\'s largest markets, with Kinshasa as a major commercial center. Mobile money adoption through Vodacom M-Pesa, Airtel Money, and Orange Money is transforming digital payments. We build for the Congolese market with French-language experiences and local payment integration.',
      fr: 'La RDC est l\'un des plus grands marchés d\'Afrique, avec Kinshasa comme grand centre commercial. L\'adoption du mobile money via Vodacom M-Pesa, Airtel Money et Orange Money transforme les paiements digitaux. Nous construisons pour le marché congolais avec des expériences en français et une intégration de paiement locale.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'business-automation-crm'],
    faqs: [
      { question: { en: 'Do you work with Congolese payment methods?', fr: 'Travaillez-vous avec les méthodes de paiement congolaises ?' }, answer: { en: 'Yes. We integrate Vodacom M-Pesa, Airtel Money, and Orange Money for DRC businesses.', fr: 'Oui. Nous intégrons Vodacom M-Pesa, Airtel Money et Orange Money pour les entreprises de la RDC.' } },
    ],
    seo: {
      title: { en: 'Digital Agency in DR Congo | LIYAH GROUP', fr: 'Agence Digitale en RDC | LIYAH GROUP' },
      description: { en: 'Web design, e-commerce, and digital growth for businesses in Kinshasa and across the DRC. French-language, local payments, built for the Congolese market.', fr: 'Création de sites web, e-commerce et croissance digitale pour les entreprises de Kinshasa et de toute la RDC. En français, paiements locaux, conçu pour le marché congolais.' },
    },
    hreflangPair: 'digital-agency-drc',
  },
  {
    slug: 'agence-digitale-maroc',
    lang: 'fr',
    country: 'Maroc',
    countryCode: 'MA',
    region: 'francophone',
    h1: {
      en: 'Digital Agency in Morocco — Websites & Digital Platforms for Moroccan Businesses',
      fr: 'Agence Digitale au Maroc — Sites Web & Plateformes Digitales pour les Entreprises Marocaines',
    },
    intro: {
      en: 'LIYAH GROUP builds websites, e-commerce stores, and digital platforms for businesses in Casablanca, Rabat, and across Morocco.',
      fr: 'LIYAH GROUP crée des sites web, des boutiques e-commerce et des plateformes digitales pour les entreprises de Casablanca, Rabat et de tout le Maroc.',
    },
    marketContext: {
      en: 'Morocco has one of Africa\'s most developed digital infrastructures, with high internet penetration and strong e-commerce growth. As a partner within the Amazon.ae ecosystem, we bring expertise in cross-border e-commerce. We build for the Moroccan market with French and Arabic support, and local payment integration.',
      fr: 'Le Maroc possède l\'une des infrastructures digitales les plus développées d\'Afrique, avec une forte pénétration internet et une croissance e-commerce solide. En tant que partenaire de l\'écosystème Amazon.ae, nous apportons une expertise en e-commerce transfrontalier. Nous construisons pour le marché marocain avec support en français et en arabe, et intégration de paiement locale.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'seo-digital-growth-strategy'],
    faqs: [
      { question: { en: 'Do you support Arabic-language sites?', fr: 'Proposez-vous des sites en arabe ?' }, answer: { en: 'We build multilingual sites including French, English, and Arabic for the Moroccan market.', fr: 'Nous construisons des sites multilingues incluant le français, l\'anglais et l\'arabe pour le marché marocain.' } },
    ],
    seo: {
      title: { en: 'Digital Agency in Morocco | LIYAH GROUP', fr: 'Agence Digitale au Maroc | LIYAH GROUP' },
      description: { en: 'Web design, e-commerce, and digital growth for businesses in Casablanca and across Morocco. French and Arabic, local payments, built for the Moroccan market.', fr: 'Création de sites web, e-commerce et croissance digitale pour les entreprises de Casablanca et de tout le Maroc. Français et arabe, paiements locaux, conçu pour le marché marocain.' },
    },
    hreflangPair: 'digital-agency-morocco',
  },
  {
    slug: 'digital-agency-nigeria',
    lang: 'en',
    country: 'Nigeria',
    countryCode: 'NG',
    region: 'anglophone',
    h1: {
      en: 'Digital Agency in Nigeria — Websites, E-Commerce & Growth for Nigerian Businesses',
      fr: 'Agence Digitale au Nigeria — Sites Web, E-Commerce & Croissance pour les Entreprises Nigérianes',
    },
    intro: {
      en: 'LIYAH GROUP builds websites, e-commerce stores, and digital platforms for businesses in Lagos, Abuja, and across Nigeria.',
      fr: 'LIYAH GROUP crée des sites web, des boutiques e-commerce et des plateformes digitales pour les entreprises de Lagos, Abuja et de tout le Nigeria.',
    },
    marketContext: {
      en: 'Nigeria is Africa\'s largest economy and most populous country, with Lagos as a major tech and commerce hub. The country has a thriving e-commerce ecosystem and rapidly growing fintech sector. We build for the Nigerian market with English-language experiences and local payment integration including Paystack, Flutterwave, and mobile money.',
      fr: 'Le Nigeria est la plus grande économie d\'Afrique et le pays le plus peuplé, avec Lagos comme hub majeur de la tech et du commerce. Le pays a un écosystème e-commerce florissant et un secteur fintech en croissance rapide. Nous construisons pour le marché nigérian avec des expériences en anglais et une intégration de paiement locale incluant Paystack, Flutterwave et le mobile money.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'seo-digital-growth-strategy'],
    faqs: [
      { question: { en: 'Do you integrate with Paystack and Flutterwave?', fr: 'Vous intégrez-vous avec Paystack et Flutterwave ?' }, answer: { en: 'Yes. We integrate Paystack, Flutterwave, and other Nigerian payment gateways for local businesses.', fr: 'Oui. Nous intégrons Paystack, Flutterwave et autres passerelles de paiement nigérianes pour les entreprises locales.' } },
      { question: { en: 'Can you build for the Lagos market specifically?', fr: 'Pouvez-vous construire spécifiquement pour le marché de Lagos ?' }, answer: { en: 'Yes. We build with Lagos consumer behavior, logistics, and payment preferences in mind.', fr: 'Oui. Nous construisons en tenant compte du comportement des consommateurs de Lagos, de la logistique et des préférences de paiement.' } },
    ],
    seo: {
      title: { en: 'Digital Agency in Nigeria | LIYAH GROUP', fr: 'Agence Digitale au Nigeria | LIYAH GROUP' },
      description: { en: 'Web design, e-commerce, and digital growth for businesses in Lagos, Abuja, and across Nigeria. Paystack and Flutterwave integration, built for the Nigerian market.', fr: 'Création de sites web, e-commerce et croissance digitale pour les entreprises de Lagos, Abuja et de tout le Nigeria. Intégration Paystack et Flutterwave, conçu pour le marché nigérian.' },
    },
    hreflangPair: 'agence-digitale-nigeria',
  },
  {
    slug: 'web-development-ghana',
    lang: 'en',
    country: 'Ghana',
    countryCode: 'GH',
    region: 'anglophone',
    h1: {
      en: 'Web Development in Ghana — Websites That Convert in Accra and Beyond',
      fr: 'Développement Web au Ghana — Des Sites Qui Convertissent à Accra et Partout',
    },
    intro: {
      en: 'LIYAH GROUP builds fast, conversion-focused websites and digital platforms for Ghanaian businesses — from Accra startups to established companies.',
      fr: 'LIYAH GROUP crée des sites web rapides et orientés conversion et des plateformes digitales pour les entreprises ghanéennes — des startups d\'Accra aux entreprises établies.',
    },
    marketContext: {
      en: 'Ghana has a growing digital economy with Accra as its tech and commerce center. Mobile money adoption, particularly MTN MoMo, is among the highest in Africa. We build for the Ghanaian market with English-language experiences and local payment integration.',
      fr: 'Le Ghana a une économie digitale en croissance avec Accra comme centre tech et commercial. L\'adoption du mobile money, particulièrement MTN MoMo, est parmi les plus élevées d\'Afrique. Nous construisons pour le marché ghanéen avec des expériences en anglais et une intégration de paiement locale.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'business-automation-crm'],
    faqs: [
      { question: { en: 'Do you integrate with MTN MoMo in Ghana?', fr: 'Vous intégrez-vous avec MTN MoMo au Ghana ?' }, answer: { en: 'Yes. We integrate MTN MoMo, Telecel Cash, and other Ghanaian payment methods.', fr: 'Oui. Nous intégrons MTN MoMo, Telecel Cash et autres méthodes de paiement ghanéennes.' } },
    ],
    seo: {
      title: { en: 'Web Development in Ghana | LIYAH GROUP', fr: 'Développement Web au Ghana | LIYAH GROUP' },
      description: { en: 'Fast, conversion-focused websites for Ghanaian businesses. MTN MoMo integration, English-language, SEO for the Accra market.', fr: 'Sites web rapides et orientés conversion pour les entreprises ghanéennes. Intégration MTN MoMo, en anglais, SEO pour le marché d\'Accra.' },
    },
    hreflangPair: 'creation-site-web-ghana',
  },
  {
    slug: 'ecommerce-agency-kenya',
    lang: 'en',
    country: 'Kenya',
    countryCode: 'KE',
    region: 'anglophone',
    h1: {
      en: 'E-Commerce Agency in Kenya — Online Stores Built for the Kenyan Market',
      fr: 'Agence E-Commerce au Kenya — Boutiques en Ligne Conçues pour le Marché Kenyan',
    },
    intro: {
      en: 'LIYAH GROUP builds e-commerce stores and digital platforms for Kenyan businesses — with M-Pesa integration and English-language experiences.',
      fr: 'LIYAH GROUP crée des boutiques e-commerce et des plateformes digitales pour les entreprises kényanes — avec intégration M-Pesa et expériences en anglais.',
    },
    marketContext: {
      en: 'Kenya is East Africa\'s leading digital economy, with Nairobi as a major tech hub. M-Pesa, the pioneer of mobile money, is deeply embedded in Kenyan commerce. We build for the Kenyan market with M-Pesa integration, English-language experiences, and logistics adapted to Nairobi and regional cities.',
      fr: 'Le Kenya est l\'économie digitale leader de l\'Afrique de l\'Est, avec Nairobi comme hub tech majeur. M-Pesa, pionnier du mobile money, est profondément ancré dans le commerce kenyan. Nous construisons pour le marché kenyan avec intégration M-Pesa, expériences en anglais et logistique adaptée à Nairobi et aux villes régionales.',
    },
    services: ['ecommerce-shopify', 'website-design-development', 'seo-digital-growth-strategy'],
    faqs: [
      { question: { en: 'Do you integrate with M-Pesa?', fr: 'Vous intégrez-vous avec M-Pesa ?' }, answer: { en: 'Yes. M-Pesa integration is standard for all Kenyan e-commerce stores we build.', fr: 'Oui. L\'intégration M-Pesa est standard pour toutes les boutiques e-commerce kényanes que nous construisons.' } },
    ],
    seo: {
      title: { en: 'E-Commerce Agency in Kenya | LIYAH GROUP', fr: 'Agence E-Commerce au Kenya | LIYAH GROUP' },
      description: { en: 'E-commerce stores for Kenyan businesses. M-Pesa integration, English-language, logistics for Nairobi and beyond.', fr: 'Boutiques e-commerce pour les entreprises kényanes. Intégration M-Pesa, en anglais, logistique pour Nairobi et au-delà.' },
    },
    hreflangPair: 'agence-ecommerce-kenya',
  },
  {
    slug: 'digital-agency-south-africa',
    lang: 'en',
    country: 'South Africa',
    countryCode: 'ZA',
    region: 'anglophone',
    h1: {
      en: 'Digital Agency in South Africa — Websites & Digital Platforms for South African Businesses',
      fr: 'Agence Digitale en Afrique du Sud — Sites Web & Plateformes Digitales pour les Entreprises Sud-Africaines',
    },
    intro: {
      en: 'LIYAH GROUP builds websites, e-commerce stores, and digital platforms for businesses in Johannesburg, Cape Town, and across South Africa.',
      fr: 'LIYAH GROUP crée des sites web, des boutiques e-commerce et des plateformes digitales pour les entreprises de Johannesburg, Le Cap et de toute l\'Afrique du Sud.',
    },
    marketContext: {
      en: 'South Africa has Africa\'s most mature digital infrastructure, with high internet penetration and sophisticated e-commerce consumers in Johannesburg and Cape Town. We build for the South African market with English-language experiences and local payment integration including PayFast, Yoco, and Ozow.',
      fr: 'L\'Afrique du Sud possède l\'infrastructure digitale la plus mature d\'Afrique, avec une forte pénétration internet et des consommateurs e-commerce sophistiqués à Johannesburg et au Cap. Nous construisons pour le marché sud-africain avec des expériences en anglais et une intégration de paiement locale incluant PayFast, Yoco et Ozow.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'seo-digital-growth-strategy'],
    faqs: [
      { question: { en: 'Do you integrate with South African payment gateways?', fr: 'Vous intégrez-vous avec les passerelles de paiement sud-africaines ?' }, answer: { en: 'Yes. We integrate PayFast, Yoco, Ozow, and other South African payment methods.', fr: 'Oui. Nous intégrons PayFast, Yoco, Ozow et autres méthodes de paiement sud-africaines.' } },
    ],
    seo: {
      title: { en: 'Digital Agency in South Africa | LIYAH GROUP', fr: 'Agence Digitale en Afrique du Sud | LIYAH GROUP' },
      description: { en: 'Web design, e-commerce, and digital growth for businesses in Johannesburg, Cape Town, and across South Africa. Local payments, built for the South African market.', fr: 'Création de sites web, e-commerce et croissance digitale pour les entreprises de Johannesburg, Le Cap et de toute l\'Afrique du Sud. Paiements locaux, conçu pour le marché sud-africain.' },
    },
    hreflangPair: 'agence-digitale-afrique-du-sud',
  },
  {
    slug: 'digital-agency-uganda',
    lang: 'en',
    country: 'Uganda',
    countryCode: 'UG',
    region: 'anglophone',
    h1: {
      en: 'Digital Agency in Uganda — Websites & Digital Platforms for Ugandan Businesses',
      fr: 'Agence Digitale en Ouganda — Sites Web & Plateformes Digitales pour les Entreprises Ougandaises',
    },
    intro: {
      en: 'LIYAH GROUP builds websites, e-commerce stores, and digital platforms for businesses in Kampala and across Uganda.',
      fr: 'LIYAH GROUP crée des sites web, des boutiques e-commerce et des plateformes digitales pour les entreprises de Kampala et de toute l\'Ouganda.',
    },
    marketContext: {
      en: 'Uganda\'s digital economy is growing, with Kampala as its commercial center. Mobile money adoption through MTN MoMo and Airtel Money is widespread. We build for the Ugandan market with English-language experiences and local payment integration.',
      fr: 'L\'économie digitale de l\'Ouganda est en croissance, avec Kampala comme centre commercial. L\'adoption du mobile money via MTN MoMo et Airtel Money est généralisée. Nous construisons pour le marché ougandais avec des expériences en anglais et une intégration de paiement locale.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'seo-digital-growth-strategy'],
    faqs: [
      { question: { en: 'Do you integrate with Ugandan mobile money?', fr: 'Vous intégrez-vous avec le mobile money ougandais ?' }, answer: { en: 'Yes. We integrate MTN MoMo and Airtel Money for Ugandan businesses.', fr: 'Oui. Nous intégrons MTN MoMo et Airtel Money pour les entreprises ougandaises.' } },
    ],
    seo: {
      title: { en: 'Digital Agency in Uganda | LIYAH GROUP', fr: 'Agence Digitale en Ouganda | LIYAH GROUP' },
      description: { en: 'Web design, e-commerce, and digital growth for businesses in Kampala and across Uganda. MTN MoMo integration, English-language, built for the Ugandan market.', fr: 'Création de sites web, e-commerce et croissance digitale pour les entreprises de Kampala et de toute l\'Ouganda. Intégration MTN MoMo, en anglais, conçu pour le marché ougandais.' },
    },
    hreflangPair: 'agence-digitale-ouganda',
  },
  {
    slug: 'digital-agency-tanzania',
    lang: 'en',
    country: 'Tanzania',
    countryCode: 'TZ',
    region: 'anglophone',
    h1: {
      en: 'Digital Agency in Tanzania — Websites & Digital Platforms for Tanzanian Businesses',
      fr: 'Agence Digitale en Tanzanie — Sites Web & Plateformes Digitales pour les Entreprises Tanzaniennes',
    },
    intro: {
      en: 'LIYAH GROUP builds websites, e-commerce stores, and digital platforms for businesses in Dar es Salaam and across Tanzania.',
      fr: 'LIYAH GROUP crée des sites web, des boutiques e-commerce et des plateformes digitales pour les entreprises de Dar es Salaam et de toute la Tanzanie.',
    },
    marketContext: {
      en: 'Tanzania\'s digital economy is expanding, with Dar es Salaam as its commercial hub. Mobile money adoption through Vodacom M-Pesa, Airtel Money, and Tigo Pesa is high. We build for the Tanzanian market with English-language experiences and local payment integration.',
      fr: 'L\'économie digitale de la Tanzanie est en expansion, avec Dar es Salaam comme hub commercial. L\'adoption du mobile money via Vodacom M-Pesa, Airtel Money et Tigo Pesa est élevée. Nous construisons pour le marché tanzanien avec des expériences en anglais et une intégration de paiement locale.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'seo-digital-growth-strategy'],
    faqs: [
      { question: { en: 'Do you integrate with Tanzanian mobile money?', fr: 'Vous intégrez-vous avec le mobile money tanzanien ?' }, answer: { en: 'Yes. We integrate Vodacom M-Pesa, Airtel Money, and Tigo Pesa for Tanzanian businesses.', fr: 'Oui. Nous intégrons Vodacom M-Pesa, Airtel Money et Tigo Pesa pour les entreprises tanzaniennes.' } },
    ],
    seo: {
      title: { en: 'Digital Agency in Tanzania | LIYAH GROUP', fr: 'Agence Digitale en Tanzanie | LIYAH GROUP' },
      description: { en: 'Web design, e-commerce, and digital growth for businesses in Dar es Salaam and across Tanzania. M-Pesa integration, English-language, built for the Tanzanian market.', fr: 'Création de sites web, e-commerce et croissance digitale pour les entreprises de Dar es Salaam et de toute la Tanzanie. Intégration M-Pesa, en anglais, conçu pour le marché tanzanien.' },
    },
    hreflangPair: 'agence-digitale-tanzanie',
  },
  {
    slug: 'digital-agency-united-arab-emirates',
    lang: 'en',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    region: 'uae',
    h1: {
      en: 'Digital Agency in the UAE — Websites, E-Commerce & Digital Platforms',
      fr: 'Agence Digitale aux EAU — Sites Web, E-Commerce & Plateformes Digitales',
    },
    intro: {
      en: 'LIYAH GROUP builds websites, e-commerce stores, and digital platforms for businesses in the UAE — with a presence in Dubai and expertise in Amazon.ae and Noon.',
      fr: 'LIYAH GROUP crée des sites web, des boutiques e-commerce et des plateformes digitales pour les entreprises aux EAU — avec une présence à Dubaï et une expertise Amazon.ae et Noon.',
    },
    marketContext: {
      en: 'The UAE has one of the world\'s most advanced digital economies, with Dubai as a global commerce hub. LIYAH GROUP has a presence in Jumeirah 1, Dubai (SPC FZC — License No. 4425201.01). As partners within the Amazon.ae and Noon ecosystems, we bring direct expertise in UAE e-commerce, local payment methods, Arabic and English bilingual experiences, and logistics across the Emirates.',
      fr: 'Les EAU ont l\'une des économies digitales les plus avancées au monde, avec Dubaï comme hub commercial global. LIYAH GROUP est présent à Jumeirah 1, Dubaï (SPC FZC — Licence No. 4425201.01). En tant que partenaires des écosystèmes Amazon.ae et Noon, nous apportons une expertise directe en e-commerce EAU, méthodes de paiement locales, expériences bilingues arabe et anglais, et logistique à travers les Émirats.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'custom-platforms-mobile-apps'],
    faqs: [
      { question: { en: 'Do you have a presence in the UAE?', fr: 'Avez-vous une présence aux EAU ?' }, answer: { en: 'Yes. LIYAH GROUP is present in Jumeirah 1, Dubai, under SPC FZC — License No. 4425201.01.', fr: 'Oui. LIYAH GROUP est présent à Jumeirah 1, Dubaï, sous SPC FZC — Licence No. 4425201.01.' } },
      { question: { en: 'Do you work with Amazon.ae and Noon?', fr: 'Travaillez-vous avec Amazon.ae et Noon ?' }, answer: { en: 'Yes. We are partners within the Amazon.ae ecosystem and build e-commerce stores optimized for both Amazon.ae and Noon.', fr: 'Oui. Nous sommes partenaires de l\'écosystème Amazon.ae et construisons des boutiques e-commerce optimisées pour Amazon.ae et Noon.' } },
      { question: { en: 'Can you build Arabic-language sites?', fr: 'Pouvez-vous construire des sites en arabe ?' }, answer: { en: 'Yes. We build bilingual English/Arabic sites with proper RTL support for the UAE market.', fr: 'Oui. Nous construisons des sites bilingues anglais/arabe avec support RTL approprié pour le marché EAU.' } },
    ],
    seo: {
      title: { en: 'Digital Agency in the UAE | LIYAH GROUP', fr: 'Agence Digitale aux EAU | LIYAH GROUP' },
      description: { en: 'Web design, e-commerce, and digital platforms for businesses in Dubai and across the UAE. Amazon.ae and Noon expertise, Arabic/English, local payments.', fr: 'Création de sites web, e-commerce et plateformes digitales pour les entreprises de Dubaï et de tout le EAU. Expertise Amazon.ae et Noon, arabe/anglais, paiements locaux.' },
    },
    hreflangPair: 'agence-digitale-emirats-arabes-unis',
  },
  {
    slug: 'digital-agency-dubai',
    lang: 'en',
    country: 'Dubai',
    countryCode: 'AE',
    region: 'uae',
    h1: {
      en: 'Digital Agency in Dubai — Websites, E-Commerce & Digital Platforms',
      fr: 'Agence Digitale à Dubaï — Sites Web, E-Commerce & Plateformes Digitales',
    },
    intro: {
      en: 'LIYAH GROUP builds websites, e-commerce stores, and digital platforms for businesses in Dubai — with a local presence and Amazon.ae expertise.',
      fr: 'LIYAH GROUP crée des sites web, des boutiques e-commerce et des plateformes digitales pour les entreprises de Dubaï — avec une présence locale et une expertise Amazon.ae.',
    },
    marketContext: {
      en: 'Dubai is a global commerce and tech hub, with world-class digital infrastructure and a highly competitive business environment. LIYAH GROUP is present in Jumeirah 1, Dubai (SPC FZC — License No. 4425201.01). We build for Dubai businesses with bilingual English/Arabic experiences, Amazon.ae and Noon integration, and local payment methods.',
      fr: 'Dubaï est un hub mondial du commerce et de la tech, avec une infrastructure digitale de classe mondiale et un environnement business hautement compétitif. LIYAH GROUP est présent à Jumeirah 1, Dubaï (SPC FZC — Licence No. 4425201.01). Nous construisons pour les entreprises de Dubaï avec des expériences bilingues anglais/arabe, intégration Amazon.ae et Noon, et méthodes de paiement locales.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'custom-platforms-mobile-apps'],
    faqs: [
      { question: { en: 'Do you have an office in Dubai?', fr: 'Avez-vous un bureau à Dubaï ?' }, answer: { en: 'Yes. LIYAH GROUP is present in Jumeirah 1, Dubai, under SPC FZC — License No. 4425201.01.', fr: 'Oui. LIYAH GROUP est présent à Jumeirah 1, Dubaï, sous SPC FZC — Licence No. 4425201.01.' } },
      { question: { en: 'Can you build Arabic and English sites?', fr: 'Pouvez-vous construire des sites en arabe et en anglais ?' }, answer: { en: 'Yes. We build bilingual English/Arabic sites with proper RTL support for Dubai businesses.', fr: 'Oui. Nous construisons des sites bilingues anglais/arabe avec support RTL approprié pour les entreprises de Dubaï.' } },
    ],
    seo: {
      title: { en: 'Digital Agency in Dubai | LIYAH GROUP', fr: 'Agence Digitale à Dubaï | LIYAH GROUP' },
      description: { en: 'Web design, e-commerce, and digital platforms for businesses in Dubai. Amazon.ae expertise, Arabic/English, local payments. Local presence in Jumeirah 1.', fr: 'Création de sites web, e-commerce et plateformes digitales pour les entreprises de Dubaï. Expertise Amazon.ae, arabe/anglais, paiements locaux. Présence locale à Jumeirah 1.' },
    },
    hreflangPair: 'agence-digitale-dubai',
  },
  {
    slug: 'digital-agency-sharjah',
    lang: 'en',
    country: 'Sharjah',
    countryCode: 'AE',
    region: 'uae',
    h1: {
      en: 'Digital Agency in Sharjah — Websites & Digital Platforms for Sharjah Businesses',
      fr: 'Agence Digitale à Sharjah — Sites Web & Plateformes Digitales pour les Entreprises de Sharjah',
    },
    intro: {
      en: 'LIYAH GROUP builds websites, e-commerce stores, and digital platforms for businesses in Sharjah and across the Northern Emirates.',
      fr: 'LIYAH GROUP crée des sites web, des boutiques e-commerce et des plateformes digitales pour les entreprises de Sharjah et de tout le Nord des Émirats.',
    },
    marketContext: {
      en: 'Sharjah is a growing commercial center with a strong industrial and cultural base, adjacent to Dubai. We build for Sharjah businesses with bilingual English/Arabic experiences and local payment integration, leveraging our UAE presence and Amazon.ae expertise.',
      fr: 'Sharjah est un centre commercial en croissance avec une base industrielle et culturelle forte, adjacent à Dubaï. Nous construisons pour les entreprises de Sharjah avec des expériences bilingues anglais/arabe et une intégration de paiement locale, en tirant parti de notre présence EAU et de notre expertise Amazon.ae.',
    },
    services: ['website-design-development', 'ecommerce-shopify', 'seo-digital-growth-strategy'],
    faqs: [
      { question: { en: 'Do you serve businesses in Sharjah?', fr: 'Servez-vous les entreprises de Sharjah ?' }, answer: { en: 'Yes. We serve businesses across all Emirates, with our UAE presence in Dubai.', fr: 'Oui. Nous servons les entreprises de tous les Émirats, avec notre présence EAU à Dubaï.' } },
    ],
    seo: {
      title: { en: 'Digital Agency in Sharjah | LIYAH GROUP', fr: 'Agence Digitale à Sharjah | LIYAH GROUP' },
      description: { en: 'Web design, e-commerce, and digital growth for businesses in Sharjah and the Northern Emirates. Arabic/English, local payments, Amazon.ae expertise.', fr: 'Création de sites web, e-commerce et croissance digitale pour les entreprises de Sharjah et du Nord des Émirats. Arabe/anglais, paiements locaux, expertise Amazon.ae.' },
    },
    hreflangPair: 'agence-digitale-sharjah',
  },
];

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locations.find((l) => l.slug === slug);
}

export { tr };
export type { Bilingual, Lang };
