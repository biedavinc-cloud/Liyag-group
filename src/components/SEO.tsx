import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>[];
  hreflangPairs?: { lang: string; path: string }[];
}

export default function SEO({ title, description, path, jsonLd, hreflangPairs }: SEOProps) {
  useEffect(() => {
    document.title = title;

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
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', `https://liyahgroup.me${path}`, 'property');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://liyahgroup.me${path}`);

    document.querySelectorAll('link[rel="alternate"][data-hreflang]').forEach((el) => el.remove());
    if (hreflangPairs) {
      hreflangPairs.forEach(({ lang, path: p }) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        link.setAttribute('href', `https://liyahgroup.me${p}`);
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
  }, [title, description, path, jsonLd, hreflangPairs]);

  return null;
}
