import { pageSeo, SITE_URL } from './seoPages';
import { services, tr } from './services';
import { locations } from './locations';
import { saasProducts } from './saasProducts';
import { translations } from '@/i18n/translations';

export interface SeoRoute {
  path: string;
  title: string;
  description: string;
  priority: number;
  changefreq: string;
  lang: 'en' | 'fr';
}

export const BLOG_SLUGS = ['why-your-website-is-losing-clients', 'building-ecommerce-that-scales', 'digital-ecosystem-advantage'];

/**
 * Liste complète des routes indexables avec leurs métadonnées (version par défaut en anglais,
 * sauf pages pays francophones). Utilisée au build pour générer le HTML statique par route et le sitemap.
 */
export function getSeoRoutes(): SeoRoute[] {
  const routes: SeoRoute[] = [];

  for (const [path, m] of Object.entries(pageSeo)) {
    routes.push({ path, title: m.title.en, description: m.description.en, priority: m.priority, changefreq: m.changefreq, lang: 'en' });
  }

  for (const s of services) {
    routes.push({ path: `/services/${s.slug}`, title: tr(s.seo.title, 'EN'), description: tr(s.seo.description, 'EN'), priority: 0.8, changefreq: 'monthly', lang: 'en' });
  }

  for (const p of saasProducts) {
    routes.push({ path: `/saas/${p.slug}`, title: `${p.name} | LIYAH GROUP`, description: p.description.en, priority: 0.8, changefreq: 'monthly', lang: 'en' });
  }

  translations.EN.blog.articles.forEach((a, i) => {
    routes.push({
      path: `/blog/${BLOG_SLUGS[i]}`,
      title: `${a.title} | LIYAH GROUP`,
      description: `${a.category}: ${a.title}. Insights from the LIYAH GROUP team on digital strategy, e-commerce and growth.`,
      priority: 0.6,
      changefreq: 'monthly',
      lang: 'en',
    });
  });

  for (const l of locations) {
    const L = l.lang === 'fr' ? 'FR' : 'EN';
    routes.push({ path: `/${l.lang}/${l.slug}`, title: tr(l.seo.title, L), description: tr(l.seo.description, L), priority: 0.7, changefreq: 'monthly', lang: l.lang });
  }

  return routes;
}

export const absolute = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`;
export { organizationJsonLd, websiteJsonLd } from './seoPages';
