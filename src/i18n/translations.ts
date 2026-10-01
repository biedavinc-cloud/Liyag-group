export type Lang = 'EN' | 'FR';

export interface Translation {
  topbar: {
    locations: string;
  };
  trustbar: {
    trusted: string;
    verified: string;
    ratingText: string;
    ariaLabel: string;
  };
  header: {
    about: string;
    services: string;
    pricing: string;
    projects: string;
    projectsChildren: { digital: string; ecommerce: string; growth: string };
    courses: string;
    blog: string;
    contact: string;
    cta: string;
    install: string;
    products: string;
    productsChildren: { overview: string; liafrik: string };
    navDesc: { digital: string; ecommerce: string; growth: string; blog: string; products: string };
  };
  hero: {
    trustBadge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaExplore: string;
    ctaRequest: string;
    keywords: string;
  };
  about: {
    label: string;
    title: string;
    body: string;
    cta: string;
  };
  solutions: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  industries: {
    label: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  portfolio: {
    label: string;
    title: string;
    viewAll: string;
    items: { title: string; category: string; icon: string }[];
  };
  technologies: {
    label: string;
    title: string;
    items: string[];
  };
  process: {
    label: string;
    title: string;
    steps: { num: string; title: string; desc: string }[];
  };
  techEcosystem: {
    label: string;
    title: string;
    subtitle: string;
    platforms: string[];
  };
  products: {
    label: string;
    title: string;
    subtitle: string;
    flagshipName: string;
    flagshipTagline: string;
    flagshipDesc: string;
    modulesLabel: string;
    modules: { name: string; desc: string }[];
    cta: string;
  };
  engines: {
    label: string;
    title: string;
    items: { icon: string; name: string; subtitle: string; description: string; tags: string[] }[];
  };
  stats: { value: string; label: string }[];
  outcomes: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; points: string[]; cta: string }[];
  };
  blog: {
    label: string;
    title: string;
    readMore: string;
    articles: { category: string; title: string }[];
  };
  businessBuilder: {
    label: string;
    body: string;
    cta: string;
  };
  whyChooseUs: {
    label: string;
    title: string;
    items: { num: string; title: string; description: string }[];
  };
  reviews: {
    label: string;
    title: string;
    subtitle: string;
    ratingText: string;
    badges: string[];
    verified: string;
    footer: { icon: string; text: string }[];
    reviews: { initials: string; name: string; role: string; date: string; quote: string }[];
  };
  faq: {
    label: string;
    title: string;
    subtitle: string;
    items: { question: string; intro: string; listTitle?: string; items?: string[] }[];
  };
  cta: {
    label: string;
    title: string;
    body: string;
    highlight: string;
    cta: string;
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    loading: string;
    success: string;
    error: string;
  };
  footer: {
    tagline: string;
    contactTitle: string;
    officesTitle: string;
    offices: string[];
    connectTitle: string;
    legal: string;
    copyright: string;
  };
  scrollToTop: string;
}

const en: Translation = {
  topbar: { locations: 'Yaoundé - Soa, Cameroon · Jumeirah 1, Dubai, UAE' },
  trustbar: {
    trusted: 'Trusted Across Africa & The UAE',
    verified: 'Verified Customer Reviews',
    ratingText: '4.9 / 5 · 35+ reviews',
    ariaLabel: 'Read our verified Trustpilot reviews',
  },
  header: {
    about: 'ABOUT', services: 'SERVICES', pricing: 'PRICING', projects: 'PROJECTS',
    projectsChildren: { digital: 'Digital Presence', ecommerce: 'E-Commerce & Revenue', growth: 'Growth & Automation' },
    courses: 'COURSES', blog: 'BLOG', contact: 'CONTACT US',
    cta: 'Get Started', install: 'Install',
    products: 'SaaS Products',
    productsChildren: { overview: 'All Products', liafrik: 'Liafrik Platform' },
    navDesc: { digital: 'Websites, mobile apps & custom platforms', ecommerce: 'E-commerce stores & monetization', growth: 'Strategy, branding & marketing tech', blog: 'Latest insights & analysis', products: 'Scalable business tools & platforms' },
  },
  solutions: {
    label: 'SOLUTIONS',
    title: 'End-to-End Digital Solutions',
    subtitle: 'From concept to launch to scale — one partner for your entire digital ecosystem.',
    items: [
      { title: 'Enterprise Software', desc: 'Custom platforms, SaaS, and business systems built for scale.' },
      { title: 'E-Commerce Platforms', desc: 'Conversion-focused stores with payment, logistics, and automation.' },
      { title: 'Growth & Marketing', desc: 'Data-driven strategies across paid, organic, and retention channels.' },
      { title: 'AI & Automation', desc: 'Intelligent systems that streamline operations and unlock insights.' },
    ],
  },
  industries: {
    label: 'INDUSTRIES',
    title: 'Sectors We Empower',
    subtitle: 'Deep expertise across industries — with local knowledge of African and Gulf markets.',
    items: ['Retail & E-Commerce', 'Finance & Fintech', 'Real Estate', 'Healthcare', 'Education', 'Travel & Hospitality', 'Logistics & Supply', 'Media & Entertainment'],
  },
  portfolio: {
    label: 'WHAT WE BUILD',
    title: 'Capabilities, Not Just Promises',
    viewAll: 'View All Services',
    items: [
      { title: 'Corporate & Web Platforms', category: 'Web Design', icon: 'Globe' },
      { title: 'E-Commerce & Shopify Ecosystems', category: 'E-Commerce', icon: 'ShoppingBag' },
      { title: 'Custom Business Platforms', category: 'Custom Platform', icon: 'Layers' },
    ],
  },
  technologies: {
    label: 'TECHNOLOGIES',
    title: 'Built on Modern Infrastructure',
    items: ['React & Next.js', 'AWS & Cloud', 'Mobile (iOS/Android)', 'Cybersecurity', 'Automation & APIs', 'AI & Machine Learning'],
  },
  process: {
    label: 'OUR PROCESS',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Discovery & Strategy', desc: 'We analyze your business, market, and goals to define a clear roadmap.' },
      { num: '02', title: 'Design & Architecture', desc: 'We craft the UX, UI, and technical architecture of your ecosystem.' },
      { num: '03', title: 'Development & Build', desc: 'We build your platform with modern, scalable, and secure technology.' },
      { num: '04', title: 'Launch & Optimize', desc: 'We deploy, monitor, and continuously optimize for growth.' },
    ],
  },
  techEcosystem: {
    label: 'TECHNOLOGY ECOSYSTEM',
    title: 'Trusted Platforms We Work With',
    subtitle: 'We build within leading technology ecosystems to deliver reliable, scalable solutions for our clients.',
    platforms: ['Amazon.ae', 'Noon.ae', 'Shopify', 'Hostinger', 'Cloudflare'],
  },
  products: {
    label: 'PRODUCTS',
    title: 'Liafrik — All-in-One Modular Business Platform',
    subtitle: 'Our flagship platform that unifies your entire business into one ecosystem. Activate only the modules you need — scale as you grow.',
    flagshipName: 'Liafrik',
    flagshipTagline: 'One Platform. Every Module. Built for Scale.',
    flagshipDesc: 'Liafrik is the all-in-one modular business platform developed by LIYAH GROUP. From CRM to POS to accounting, each of its 15 modules connects seamlessly — so your data, operations, and growth stay unified.',
    modulesLabel: 'MODULAR ECOSYSTEM',
    modules: [
      { name: 'CRM', desc: 'Manage leads, pipelines, and customer relationships in one place.' },
      { name: 'POS', desc: 'Point-of-sale system for retail and physical operations.' },
      { name: 'E-Commerce', desc: 'Full online store with payments, logistics, and automation.' },
      { name: 'Marketplace', desc: 'Multi-vendor marketplace platform for sellers and buyers.' },
      { name: 'Community Platform', desc: 'Build and engage your own branded community space.' },
      { name: 'Tontine Management', desc: 'Digital tontine and savings group management tools.' },
      { name: 'School Management', desc: 'Students, staff, academics, and fees in one system.' },
      { name: 'Business Management', desc: 'Operations, inventory, HR, and reporting unified.' },
      { name: 'AI Tools', desc: 'Intelligent automation, insights, and decision support.' },
      { name: 'Custom Enterprise Modules', desc: 'Bespoke modules built for your specific operations.' },
    ],
    cta: 'Explore Liafrik',
  },
  hero: {
    trustBadge: 'Trusted across Africa & the UAE',
    title: 'WE HELP BUSINESS, BRAND AND LEADERS BUILD',
    titleHighlight: 'POWERFUL DIGITAL ECOSYSTEMS.',
    subtitle: 'From websites to mobile apps and scalable platforms, we design systems that grow your audience, influence, and revenue.',
    ctaExplore: 'EXPLORE OUR STRATEGY',
    ctaRequest: 'REQUEST A PROPOSAL',
    keywords: 'Web Design + E-Commerce + Growth Automation + Branding + SEO + Mobile Apps + Strategy',
  },
  about: {
    label: 'ABOUT',
    title: "I'm Vincent Nogue, Founder of LIYAH GROUP. I help ambitious brands, businesses, and leaders transform their vision into scalable digital ecosystems that drive influence, growth, and revenue.",
    body: "I don't just design websites — I build scalable business ecosystems. I build, operate, and scale both online and offline ventures, with real-world experience across multiple markets, including Africa. This dual perspective allows me to understand what it truly takes to launch, grow, and sustain a business — beyond theory. As a partner within global ecosystems like Amazon and Shopify, I bring hands-on expertise in building scalable e-commerce platforms, digital infrastructures, and revenue-driven systems. I combine strategy, execution, and design to help businesses, brands, and leaders grow their influence, scale their operations, and create sustainable income streams. I don't just build brands — I build systems that perform.",
    cta: 'Know more',
  },
  engines: {
    label: 'WHAT WE DO BEST',
    title: 'Three Core Engines',
    items: [
      { icon: 'Layers', name: 'Build', subtitle: 'Build Scalable Digital Ecosystems', description: 'We design and develop websites, mobile apps, and custom platforms that go beyond simple online presence — creating interconnected systems that grow your audience, streamline your operations, and support long-term business expansion.', tags: ['Web Design', 'Mobile Apps', 'Custom Platforms'] },
      { icon: 'DollarSign', name: 'Grow', subtitle: 'Monetize Brands & Influence', description: 'We turn visibility into revenue by building e-commerce stores, digital product systems, and monetization strategies that help brands, businesses, and leaders generate consistent and scalable income streams.', tags: ['E-Commerce', 'Digital Products', 'Monetization'] },
      { icon: 'Target', name: 'Scale', subtitle: 'Strategic Growth & Execution', description: 'From concept to execution, we craft and implement data-driven strategies that align branding, marketing, and technology — ensuring measurable growth, stronger positioning, and real business results.', tags: ['Strategy', 'Branding', 'Marketing Tech'] },
    ],
  },
  stats: [
    { value: '+15', label: 'Years Experience' },
    { value: '+5K', label: 'Trusted Clients' },
    { value: '+11K', label: 'Projects Delivered' },
  ],
  outcomes: {
    label: 'CHOOSE YOUR OUTCOME',
    title: 'Choose the Outcome You Want',
    subtitle: 'Tell us where you want to go — we build the system to get you there.',
    items: [
      { title: 'I WANT MORE REVENUE', points: ['E-Commerce stores built to convert', 'Digital product systems and funnels', 'Monetization strategies for consistent income', 'Payment and checkout optimization'], cta: 'Get Started' },
      { title: 'I WANT MORE VISIBILITY', points: ['Websites and platforms that command attention', 'Brand identity and digital presence design', 'SEO foundations for organic growth', 'Content and social positioning'], cta: 'Get Started' },
      { title: 'I NEED A DIGITAL STRATEGY', points: ['Data-driven growth roadmaps', 'Branding, marketing and tech alignment', 'Market positioning and differentiation', 'Execution plans with clear milestones'], cta: 'Get Started' },
      { title: 'I WANT TO SCALE MY BUSINESS', points: ['Business systems and operational architecture', 'Multi-market expansion frameworks', 'Automation and infrastructure for scale', 'Team and process systems'], cta: 'Get Started' },
    ],
  },
  blog: {
    label: 'LATEST INSIGHTS',
    title: 'Insights & Analysis',
    readMore: 'Read More',
    articles: [
      { category: 'Digital Strategy', title: 'Why Your Website Is Losing You Clients Before You Even Speak to Them' },
      { category: 'E-Commerce', title: 'Building an E-Commerce Business That Actually Scales: What Most Founders Get Wrong' },
      { category: 'Digital Growth', title: 'The Digital Ecosystem Advantage: How Smart Brands Build Systems That Grow Without Them' },
    ],
  },
  businessBuilder: {
    label: 'BUSINESS BUILDER & STRATEGIST',
    body: "Beyond the digital space, I actively build and manage physical businesses across Africa and UAE. This hands-on experience in operations, logistics, customer service, team management, and market adaptation gives me a deep understanding of how businesses function and scale in different environments. It allows me to approach every project with a practical mindset — not just as a strategist, but as someone who has experienced the realities of building and growing businesses on the ground.",
    cta: 'Get Started',
  },
  whyChooseUs: {
    label: 'WHY CHOOSE US',
    title: 'Why Founders Trust LIYAH GROUP',
    items: [
      { num: '01', title: 'Transparency & Measurable Results', description: 'Every system we build is tied to clear metrics. You see exactly what we deliver, what it costs, and what it generates — no black boxes, no vanity reports.' },
      { num: '02', title: 'Continuous Optimization', description: "We don't ship and disappear. Every platform and strategy is monitored, refined, and improved over time to keep performance climbing." },
      { num: '03', title: 'Strategies Tailored to Africa & the Gulf', description: 'We understand the realities of Cameroonian, Nigerian, and UAE markets — local payment flows, logistics, consumer behavior, and regulatory constraints.' },
      { num: '04', title: 'Real On-the-Ground Experience', description: "Not just theory. We build and run physical businesses across Africa and the UAE — operations, logistics, teams. We bring that field knowledge into every digital project." },
    ],
  },
  reviews: {
    label: 'CLIENT REVIEWS',
    title: 'Trusted by Founders Worldwide',
    subtitle: 'See our verified rating on Trustpilot',
    ratingText: 'Rated on Trustpilot',
    badges: ['Verified Clients', 'Real Projects', 'Proven Results'],
    verified: 'Verified',
    footer: [],
    reviews: [],
  },
  faq: {
    label: 'F.A.Q.',
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to frequently asked questions about our services, strategies, and how we help businesses grow.',
    items: [
      { question: 'What Types of Business Education Programs Do You Offer?', intro: 'LIYAH GROUP offers practical, execution-driven business education programs designed for founders, business owners, and leaders who want to build and scale real businesses — not just learn theory. Our programs cover e-commerce development, digital platform architecture, performance marketing, and 1-on-1 growth mentoring. Each program is built around real-world implementation, with hands-on guidance from Vincent Nogue and his team.' },
      { question: 'E-Commerce & Digital Platform Development (Shopify, WooCommerce & Custom Solutions)', intro: 'A complete program covering the technical and strategic foundations of building scalable e-commerce platforms — from store setup to full digital product ecosystems.', listTitle: "What You'll Learn", items: ['E-commerce setup on Shopify, WooCommerce, and custom solutions', 'Platform structuring for scalability and multi-market operations', 'Product strategy and catalog architecture', 'Payment gateways, shipping, and fulfillment systems', 'UX customization and conversion-focused design', 'Digital product ecosystems and bundled offers', 'Growth tools and automation for e-commerce', 'Conversion strategies and funnel optimization'] },
      { question: 'Performance Marketing for E-Commerce & Digital Brands', intro: 'A focused program on driving qualified traffic and converting it into revenue through data-driven marketing across paid and organic channels.', listTitle: "What You'll Learn", items: ['Audience targeting and segmentation strategies', 'Advertising campaigns across Meta, Google, and emerging platforms', 'Budget allocation and scaling without burning cash', 'SEO foundations for long-term organic growth', 'Tracking, analytics, and data-driven decision making', 'Email marketing and retention systems'] },
      { question: '1-on-1 Business Mentoring & Growth Strategy', intro: 'A personalized mentoring program where Vincent Nogue works directly with you to build, refine, and execute a growth strategy tailored to your business, market, and ambitions.', listTitle: 'What We Focus On', items: ['Strategic positioning and market differentiation', 'Revenue model design and monetization paths', 'Operational scaling and team systems', 'Digital ecosystem architecture', 'Execution roadmap and accountability'] },
    ],
  },
  cta: {
    label: "LET'S BUILD",
    title: 'Ready to Scale Your Vision into a Global Digital Platform?',
    body: "Whether you're starting from scratch or scaling an existing business, I help you turn your vision into a structured, profitable system — with practical strategies, proven tools, and real execution. No theory. No fluff. Just real-world experience, implementation, and support aligned with your goals. Let's transform your idea into a professional business — online or offline — built to grow and sustain results.",
    highlight: "👉 The decision is yours. Let's build something impactful.",
    cta: 'Get Started',
  },
  newsletter: {
    title: 'Stay in the Loop',
    subtitle: 'Get insights, strategies, and updates from LIYAH GROUP — straight to your inbox.',
    placeholder: 'Your email address',
    button: 'Sign Up',
    loading: 'Signing Up',
    success: "Thank you for subscribing. We'll be in touch soon.",
    error: 'Please enter a valid email address.',
  },
  footer: {
    tagline: 'We help business, brand and leaders build powerful digital ecosystems.',
    contactTitle: 'Contact',
    officesTitle: 'Our Offices',
    offices: ['Yaoundé - Soa, Cameroon', 'Jumeirah 1, Dubai, UAE'],
    connectTitle: 'Connect',
    legal: 'Legal Documents',
    copyright: 'Copyright © 2026 LIYAH GROUP — VINCENT NOGUE · License No. 4425201.01 · SPC FZC, UAE · All Rights Reserved',
  },
  scrollToTop: 'Scroll to top',
};

const fr: Translation = {
  topbar: { locations: 'Yaoundé - Soa, Cameroun · Jumeirah 1, Dubaï, EAU' },
  trustbar: {
    trusted: 'Approuvé en Afrique & aux EAU',
    verified: 'Avis Clients Vérifiés',
    ratingText: '4,9 / 5 · 35+ avis',
    ariaLabel: 'Lire nos avis vérifiés sur Trustpilot',
  },
  header: {
    about: 'À PROPOS', services: 'SERVICES', pricing: 'TARIFS', projects: 'PROJETS',
    projectsChildren: { digital: 'Présence Digitale', ecommerce: 'E-Commerce & Revenus', growth: 'Croissance & Automatisation' },
    courses: 'COURS', blog: 'BLOG', contact: 'CONTACT',
    cta: 'Commencer', install: 'Installer',
    products: 'Produits SaaS',
    productsChildren: { overview: 'Tous les Produits', liafrik: 'Plateforme Liafrik' },
    navDesc: { digital: 'Sites web, apps mobiles & plateformes sur-mesure', ecommerce: 'Boutiques e-commerce & monétisation', growth: 'Stratégie, branding & marketing tech', blog: 'Derniers insights & analyses', products: 'Outils business évolutifs & plateformes' },
  },
  solutions: {
    label: 'SOLUTIONS',
    title: 'Solutions Digitales de Bout en Bout',
    subtitle: "Du concept au lancement jusqu'à l'échelle — un seul partenaire pour tout votre écosystème digital.",
    items: [
      { title: 'Logiciel Entreprise', desc: "Plateformes sur-mesure, SaaS et systèmes métier conçus pour l'échelle." },
      { title: 'Plateformes E-Commerce', desc: 'Boutiques axées conversion avec paiement, logistique et automatisation.' },
      { title: 'Croissance & Marketing', desc: 'Stratégies data-driven sur canaux payants, organiques et rétention.' },
      { title: 'IA & Automatisation', desc: 'Systèmes intelligents qui optimisent les opérations et révèlent les insights.' },
    ],
  },
  industries: {
    label: 'INDUSTRIES',
    title: 'Les Secteurs Que Nous Servons',
    subtitle: 'Expertise approfondie dans de multiples secteurs — avec une connaissance locale des marchés africains et du Golfe.',
    items: ['Retail & E-Commerce', 'Finance & Fintech', 'Immobilier', 'Santé', 'Éducation', 'Voyage & Hôtellerie', 'Logistique & Supply', 'Médias & Divertissement'],
  },
  portfolio: {
    label: 'CE QUE NOUS CONSTRUISONS',
    title: 'Des Compétences, Pas Que des Promesses',
    viewAll: 'Voir Tous les Services',
    items: [
      { title: 'Plateformes Web & Corporate', category: 'Web Design', icon: 'Globe' },
      { title: 'Écosystèmes E-Commerce & Shopify', category: 'E-Commerce', icon: 'ShoppingBag' },
      { title: 'Plateformes Business Sur-mesure', category: 'Plateforme Sur-mesure', icon: 'Layers' },
    ],
  },
  technologies: {
    label: 'TECHNOLOGIES',
    title: 'Bâti sur une Infrastructure Moderne',
    items: ['React & Next.js', 'AWS & Cloud', 'Mobile (iOS/Android)', 'Cybersécurité', 'Automatisation & APIs', 'IA & Machine Learning'],
  },
  process: {
    label: 'NOTRE PROCESSUS',
    title: 'Comment Nous Travaillons',
    steps: [
      { num: '01', title: 'Découverte & Stratégie', desc: 'Nous analysons votre entreprise, votre marché et vos objectifs pour définir une feuille de route claire.' },
      { num: '02', title: 'Design & Architecture', desc: "Nous concevons l'UX, l'UI et l'architecture technique de votre écosystème." },
      { num: '03', title: 'Développement & Construction', desc: 'Nous bâtissons votre plateforme avec une technologie moderne, évolutive et sécurisée.' },
      { num: '04', title: 'Lancement & Optimisation', desc: 'Nous déployons, surveillons et optimisons en continu pour la croissance.' },
    ],
  },
  techEcosystem: {
    label: 'ÉCOSYSTÈME TECHNOLOGIQUE',
    title: 'Plateformes de Confiance Avec Qui Nous Travaillons',
    subtitle: 'Nous bâtissons au sein des principaux écosystèmes technologiques pour livrer des solutions fiables et évolutives à nos clients.',
    platforms: ['Amazon.ae', 'Noon.ae', 'Shopify', 'Hostinger', 'Cloudflare'],
  },
  products: {
    label: 'PRODUITS',
    title: 'Liafrik — Plateforme Business Modulaire Tout-en-Un',
    subtitle: 'Notre plateforme phare qui unifie toute votre entreprise en un seul écosystème. Activez uniquement les modules dont vous avez besoin — évoluez à votre rythme.',
    flagshipName: 'Liafrik',
    flagshipTagline: 'Une Plateforme. Chaque Module. Conçue pour l\'Échelle.',
    flagshipDesc: 'Liafrik est la plateforme business modulaire tout-en-un développée par LIYAH GROUP. Du CRM au POS en passant par la comptabilité, chacun de ses 15 modules se connecte sans couture — vos données, opérations et croissance restent unifiées.',
    modulesLabel: 'ÉCOSYSTÈME MODULAIRE',
    modules: [
      { name: 'CRM', desc: 'Gérez prospects, pipelines et relations clients en un seul endroit.' },
      { name: 'POS', desc: 'Système de point de vente pour le retail et les opérations physiques.' },
      { name: 'E-Commerce', desc: 'Boutique en ligne complète avec paiements, logistique et automatisation.' },
      { name: 'Marketplace', desc: 'Plateforme marketplace multi-vendeurs pour acheteurs et vendeurs.' },
      { name: 'Community Platform', desc: 'Créez et animez votre propre espace communautaire brandé.' },
      { name: 'Tontine Management', desc: 'Outils de gestion digitale des tontines et groupes d\'épargne.' },
      { name: 'School Management', desc: 'Élèves, personnel, académique et frais dans un seul système.' },
      { name: 'Business Management', desc: 'Opérations, inventaire, RH et reporting unifiés.' },
      { name: 'AI Tools', desc: 'Automatisation intelligente, insights et aide à la décision.' },
      { name: 'Custom Enterprise Modules', desc: 'Modules sur-mesure conçus pour vos opérations spécifiques.' },
    ],
    cta: 'Explorer Liafrik',
  },
  hero: {
    trustBadge: 'La confiance à travers l\'Afrique et les EAU',
    title: 'NOUS AIDONS LES ENTREPRISES, MARQUES ET DIRIGEANTS À BÂTIR',
    titleHighlight: 'DES ÉCOSYSTÈMES DIGITAUX PUISSANTS.',
    subtitle: 'Des sites web aux applications mobiles et plateformes évolutives, nous concevons des systèmes qui développent votre audience, votre influence et vos revenus.',
    ctaExplore: 'EXPLORER NOTRE STRATÉGIE',
    ctaRequest: 'DEMANDER UNE PROPOSITION',
    keywords: 'Web Design + E-Commerce + Automatisation Croissance + Branding + SEO + Applications Mobiles + Stratégie',
  },
  about: {
    label: 'À PROPOS',
    title: "Je suis Vincent Nogue, Fondateur de LIYAH GROUP. J'aide les marques ambitieuses, les entreprises et les dirigeants à transformer leur vision en écosystèmes digitaux évolutifs qui génèrent influence, croissance et revenus.",
    body: "Je ne me contente pas de concevoir des sites web — je bâtis des écosystèmes d'entreprise évolutifs. Je bâtis, exploite et fais évoluer des entreprises en ligne et hors ligne, avec une expérience réelle sur plusieurs marchés, notamment en Afrique. Cette double perspective me permet de comprendre ce qu'il faut vraiment pour lancer, développer et pérenniser une entreprise — au-delà de la théorie. En tant que partenaire au sein d'écosystèmes mondiaux comme Amazon et Shopify, j'apporte une expertise pratique dans la construction de plateformes e-commerce évolutives, d'infrastructures digitales et de systèmes axés sur les revenus. Je combine stratégie, exécution et design pour aider les entreprises, marques et dirigeants à développer leur influence, passer à l'échelle et créer des flux de revenus durables. Je ne construis pas seulement des marques — je construis des systèmes qui performent.",
    cta: 'En savoir plus',
  },
  engines: {
    label: 'NOTRE EXPERTISE',
    title: 'Trois Moteurs Fondamentaux',
    items: [
      { icon: 'Layers', name: 'Bâtir', subtitle: 'Bâtir des Écosystèmes Digitaux Évolutifs', description: "Nous concevons et développons des sites web, applications mobiles et plateformes sur-mesure qui vont au-delà d'une simple présence en ligne — créant des systèmes interconnectés qui développent votre audience, optimisent vos opérations et soutiennent l'expansion à long terme de votre entreprise.", tags: ['Web Design', 'Apps Mobiles', 'Plateformes Sur-mesure'] },
      { icon: 'DollarSign', name: 'Croître', subtitle: 'Monétiser Marques & Influence', description: 'Nous transformons la visibilité en revenus en bâtissant des boutiques e-commerce, des systèmes de produits digitaux et des stratégies de monétisation qui aident les marques, entreprises et dirigeants à générer des flux de revenus réguliers et évolutifs.', tags: ['E-Commerce', 'Produits Digitaux', 'Monétisation'] },
      { icon: 'Target', name: 'Passer à l\'échelle', subtitle: 'Croissance Stratégique & Exécution', description: "De la conception à l'exécution, nous élaborons et mettons en œuvre des stratégies data-driven qui alignent branding, marketing et technologie — garantissant une croissance mesurable, un positionnement renforcé et de vrais résultats business.", tags: ['Stratégie', 'Branding', 'Marketing Tech'] },
    ],
  },
  stats: [
    { value: '+15', label: 'Ans d\'Expérience' },
    { value: '+5K', label: 'Clients de Confiance' },
    { value: '+11K', label: 'Projets Livrés' },
  ],
  outcomes: {
    label: 'CHOISISSEZ VOTRE OBJECTIF',
    title: 'Choisissez l\'Objectif Que Vous Visez',
    subtitle: 'Dites-nous où vous voulez aller — nous bâtissons le système pour vous y amener.',
    items: [
      { title: 'JE VEUX PLUS DE REVENUS', points: ['Boutiques e-commerce conçues pour convertir', 'Systèmes de produits digitaux et tunnels', 'Stratégies de monétisation pour des revenus réguliers', 'Optimisation des paiements et checkout'], cta: 'Démarrer' },
      { title: 'JE VEUX PLUS DE VISIBILITÉ', points: ['Sites et plateformes qui captent l\'attention', 'Identité de marque et présence digitale', 'Fondations SEO pour la croissance organique', 'Positionnement contenu et social'], cta: 'Démarrer' },
      { title: 'J\'AI BESOIN D\'UNE STRATÉGIE DIGITALE', points: ['Feuilles de route data-driven', 'Alignement branding, marketing et tech', 'Positionnement et différenciation marché', 'Plans d\'exécution avec jalons clairs'], cta: 'Démarrer' },
      { title: 'JE VEUX PASSER MON ENTREPRISE À L\'ÉCHELLE', points: ['Architecture de systèmes et opérations', 'Cadres d\'expansion multi-marchés', 'Automatisation et infrastructures d\'échelle', 'Systèmes d\'équipe et de processus'], cta: 'Démarrer' },
    ],
  },
  blog: {
    label: 'DERNIERS INSIGHTS',
    title: 'Insights & Analyses',
    readMore: 'Lire Plus',
    articles: [
      { category: 'Stratégie Digitale', title: 'Pourquoi Votre Site Web Vous Fait Perdre des Clients Avant Même de Leur Parler' },
      { category: 'E-Commerce', title: 'Bâtir une Entreprise E-Commerce Qui Passe Vraiment à l\'Échelle : Ce Que la Plupart des Fondateurs Comprennent Mal' },
      { category: 'Croissance Digitale', title: 'L\'Avantage Écosystème Digital : Comment les Marques Intelligentes Bâtissent des Systèmes Qui Croissent Sans Elles' },
    ],
  },
  businessBuilder: {
    label: 'BÂTISSEUR D\'ENTREPRISE & STRATÈGE',
    body: "Au-delà de l'espace digital, je bâtis et gère activement des entreprises physiques en Afrique et aux EAU. Cette expérience pratique en opérations, logistique, service client, gestion d'équipe et adaptation au marché me donne une compréhension profonde de la façon dont les entreprises fonctionnent et passent à l'échelle dans différents environnements. Cela me permet d'aborder chaque projet avec un état d'esprit pratique — non seulement comme stratège, mais comme quelqu'un qui a vécu les réalités de la construction et de la croissance d'entreprises sur le terrain.",
    cta: 'Démarrer',
  },
  whyChooseUs: {
    label: 'POURQUOI NOUS CHOISIR',
    title: 'Pourquoi les Fondateurs Font Confiance à LIYAH GROUP',
    items: [
      { num: '01', title: 'Transparence & Résultats Mesurables', description: 'Chaque système que nous bâtissons est lié à des métriques claires. Vous voyez exactement ce que nous livrons, ce que cela coûte et ce que cela génère — aucune boîte noire, aucun rapport de vanité.' },
      { num: '02', title: 'Optimisation Continue', description: "Nous ne livrons pas puis disparaissons. Chaque plateforme et stratégie est surveillée, affinée et améliorée au fil du temps pour maintenir la performance en hausse." },
      { num: '03', title: 'Stratégies Adaptées à l\'Afrique et au Golfe', description: 'Nous comprenons les réalités des marchés camerounais, nigérian et émirati — flux de paiement locaux, logistique, comportement consommateur et contraintes réglementaires.' },
      { num: '04', title: 'Vraie Expérience de Terrain', description: "Pas seulement de la théorie. Nous bâtissons et gérons des entreprises physiques en Afrique et aux EAU — opérations, logistique, équipes. Nous apportons cette connaissance de terrain dans chaque projet digital." },
    ],
  },
  reviews: {
    label: 'AVIS CLIENTS',
    title: 'La Confiance de Fondateurs à Travers le Monde',
    subtitle: 'Consultez notre note vérifiée sur Trustpilot',
    ratingText: 'Noté sur Trustpilot',
    badges: ['Clients Vérifiés', 'Projets Réels', 'Résultats Prouvés'],
    verified: 'Vérifié',
    footer: [],
    reviews: [],
  },
  faq: {
    label: 'F.A.Q.',
    title: 'Questions Fréquentes',
    subtitle: 'Trouvez les réponses aux questions fréquentes sur nos services, stratégies et la façon dont nous aidons les entreprises à croître.',
    items: [
      { question: 'Quels Types de Programmes de Formation Proposez-vous ?', intro: "LIYAH GROUP propose des programmes de formation business pratiques, axés sur l'exécution, conçus pour les fondateurs, dirigeants et chefs d'entreprise qui veulent bâtir et faire évoluer de vraies entreprises — pas seulement apprendre la théorie. Nos programmes couvrent le développement e-commerce, l'architecture de plateformes digitales, le marketing de performance et le mentorat 1-on-1. Chaque programme est construit autour de l'implémentation réelle, avec un accompagnement pratique de Vincent Nogue et son équipe." },
      { question: 'Développement E-Commerce & Plateformes Digitales (Shopify, WooCommerce & Solutions Sur-mesure)', intro: 'Un programme complet couvrant les fondations techniques et stratégiques de la construction de plateformes e-commerce évolutives — de la configuration boutique à des écosystèmes de produits digitaux complets.', listTitle: 'Ce Que Vous Apprendrez', items: ['Configuration e-commerce sur Shopify, WooCommerce et solutions sur-mesure', 'Structuration de plateformes pour l\'évolutivité et les opérations multi-marchés', 'Stratégie produit et architecture de catalogue', 'Paiements, livraison et systèmes de fulfillment', 'Personnalisation UX et design orienté conversion', 'Écosystèmes de produits digitaux et offres groupées', 'Outils de croissance et automatisation e-commerce', 'Stratégies de conversion et optimisation de tunnel'] },
      { question: 'Marketing de Performance pour E-Commerce & Marques Digitales', intro: 'Un programme focalisé sur la génération de trafic qualifié et sa conversion en revenus via le marketing data-driven sur les canaux payants et organiques.', listTitle: 'Ce Que Vous Apprendrez', items: ['Ciblage d\'audience et stratégies de segmentation', 'Campagnes publicitaires sur Meta, Google et plateformes émergentes', 'Allocation budgétaire et passage à l\'échelle sans brûler de cash', 'Fondations SEO pour une croissance organique durable', 'Tracking, analytics et décisions data-driven', 'Email marketing et systèmes de rétention'] },
      { question: 'Mentorat Business 1-on-1 & Stratégie de Croissance', intro: 'Un programme de mentorat personnalisé où Vincent Nogue travaille directement avec vous pour bâtir, affiner et exécuter une stratégie de croissance adaptée à votre entreprise, votre marché et vos ambitions.', listTitle: 'Ce Sur Quoi Nous Nous Concentrons', items: ['Positionnement stratégique et différenciation marché', 'Conception de modèle de revenus et chemins de monétisation', 'Scaling opérationnel et systèmes d\'équipe', 'Architecture d\'écosystème digital', 'Feuille de route d\'exécution et responsabilité'] },
    ],
  },
  cta: {
    label: 'BÂTISSONS',
    title: 'Prêt à Faire Passer Votre Vision à une Plateforme Digitale Globale ?',
    body: "Que vous partiez de zéro ou que vous fassiez évoluer une entreprise existante, je vous aide à transformer votre vision en un système structuré et rentable — avec des stratégies pratiques, des outils éprouvés et une vraie exécution. Pas de théorie. Pas de blabla. Juste de l'expérience réelle, de l'implémentation et du soutien alignés avec vos objectifs. Transformons votre idée en une entreprise professionnelle — en ligne ou hors ligne — bâtie pour croître et durer.",
    highlight: "👉 La décision vous appartient. Bâtissons quelque chose d'impactant.",
    cta: 'Démarrer',
  },
  newsletter: {
    title: 'Restez Informé',
    subtitle: 'Recevez insights, stratégies et actualités de LIYAH GROUP — directement dans votre boîte mail.',
    placeholder: 'Votre adresse email',
    button: 'S\'inscrire',
    loading: 'Inscription',
    success: 'Merci de votre inscription. Nous serons en contact très bientôt.',
    error: 'Veuillez saisir une adresse email valide.',
  },
  footer: {
    tagline: 'Nous aidons les entreprises, marques et dirigeants à bâtir des écosystèmes digitaux puissants.',
    contactTitle: 'Contact',
    officesTitle: 'Nos Bureaux',
    offices: ['Yaoundé - Soa, Cameroun', 'Jumeirah 1, Dubaï, EAU'],
    connectTitle: 'Suivez-nous',
    legal: 'Documents Légaux',
    copyright: 'Copyright © 2026 LIYAH GROUP — VINCENT NOGUE · License No. 4425201.01 · SPC FZC, UAE · Tous Droits Réservés',
  },
  scrollToTop: 'Retour en haut',
};

export const translations: Record<Lang, Translation> = { EN: en, FR: fr };
