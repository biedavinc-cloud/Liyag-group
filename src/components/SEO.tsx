import { useEffect } from 'react';
import { useLang } from '@/i18n/LangContext';
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/data/seoPages';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>[];
  hreflangPairs?: { lang: string; path: string }[];
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export default function SEO({ title, description, path, jsonLd, hreflangPairs, image = OG_IMAGE, type = 'website', noindex = false }: SEOProps) {
  const { lang } = useLang();

  useEffect(() => {
    document.title = title;
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1');

    setMeta('og:type', type, 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:locale', lang === 'FR' ? 'fr_FR' : 'en_US', 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    document.querySelectorAll('link[rel="alternate"][data-hreflang]').forEach((el) => el.remove());
    if (hreflangPairs) {
      hreflangPairs.forEach(({ lang: l, path: p }) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', l);
        link.setAttribute('href', `${SITE_URL}${p}`);
        link.setAttribute('data-hreflang', 'true');
        document.head.appendChild(link);
      });
    }

    const scriptId = 'jsonld-structured-data';
    document.getElementById(scriptId)?.remove();
    if (jsonLd && jsonLd.length > 0) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, jsonLd, hreflangPairs, image, type, noindex, lang]);

  return null;
}
