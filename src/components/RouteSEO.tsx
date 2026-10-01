import { useLocation } from 'react-router-dom';
import SEO from '@/components/SEO';
import { useLang } from '@/i18n/LangContext';
import { pageSeo, SITE_NAME } from '@/data/seoPages';

// Les pages dynamiques gèrent leur propre SEO (détail service, produit, pays, article de blog).
const SELF_MANAGED_PREFIXES = ['/services/', '/saas/', '/blog/', '/fr/', '/en/'];

/** Applique titre / description / canonical / Open Graph à chaque page statique du site. */
export default function RouteSEO() {
  const { pathname } = useLocation();
  const { lang } = useLang();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  if (SELF_MANAGED_PREFIXES.some((p) => path.startsWith(p))) return null;

  const meta = pageSeo[path];
  if (meta) {
    const l = lang === 'FR' ? 'fr' : 'en';
    return <SEO title={meta.title[l]} description={meta.description[l]} path={path} />;
  }

  // URL inconnue (le routeur affiche l'accueil) : on évite l'indexation de faux doublons.
  const l = lang === 'FR' ? 'fr' : 'en';
  return <SEO title={`${SITE_NAME}`} description={pageSeo['/'].description[l]} path="/" noindex />;
}
