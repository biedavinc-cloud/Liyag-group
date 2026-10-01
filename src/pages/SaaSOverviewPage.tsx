import { Link } from 'react-router-dom';
import { ArrowRight, Boxes, MessageCircle, CheckCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SEO from '@/components/SEO';
import ModuleIcon from '@/components/ModuleIcon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import { saasProducts, getLiafrikModules, tr } from '@/data/saasProducts';

const WHATSAPP_NUMBER = '971503857203';

export default function SaaSOverviewPage() {
  const { lang } = useLang();
  const ref = useScrollAnimation();
  const liafrik = saasProducts.find((p) => p.slug === 'liafrik');
  const modules = getLiafrikModules();

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: saasProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: `https://liyahgroup.me/saas/${p.slug}`,
      })),
    },
  ];

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <SEO
        title={lang === 'FR' ? 'Produits SaaS | Liafrik par LIYAH GROUP' : 'SaaS Products | Liafrik by LIYAH GROUP'}
        description={lang === 'FR'
          ? 'Liafrik est le système d\'exploitation business africain unifié. CRM, POS, RH, Santé, Comptabilité, E-commerce, Éducation, Immobilier — 15 modules sur une seule plateforme.'
          : 'Liafrik is the unified African business operating system. CRM, POS, HR, Health, Accounting, E-commerce, Education, Real Estate — 15 modules on one platform.'}
        path="/saas"
        jsonLd={jsonLd}
      />
      <PageHero
        label={lang === 'FR' ? 'PRODUITS SaaS' : 'SaaS PRODUCTS'}
        title={lang === 'FR' ? 'Liafrik — L\'OS Business Africain' : 'Liafrik — The African Business OS'}
        subtitle={lang === 'FR'
          ? '15 modules. Une seule plateforme. Activez ce dont vous avez besoin — évoluez à votre rythme. Conçu pour l\'Afrique et les EAU.'
          : '15 modules. One platform. Activate what you need — scale as you grow. Built for Africa and the UAE.'}
      />

      {/* Liafrik main product spotlight */}
      {liafrik && (
        <section className="relative py-14 md:py-20 bg-[#0B0C0E] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_60%)]" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="section-label text-[#8A8F98]">{lang === 'FR' ? 'PRODUIT PRINCIPAL' : 'FLAGSHIP PRODUCT'}</span>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-6 text-balance">
                  {lang === 'FR' ? 'Liafrik — Un Système, Toute Votre Entreprise' : 'Liafrik — One System, Your Entire Business'}
                </h2>
                <p className="text-[#8A8F98] text-base md:text-lg leading-relaxed mb-8">
                  {tr(liafrik.mainBenefit, lang)}
                </p>
                <ul className="space-y-3 mb-8">
                  {liafrik.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#8A8F98]">
                      <CheckCircle size={18} className="text-white flex-shrink-0 mt-0.5" />
                      <span>{tr(f, lang)}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/saas/liafrik" className="btn-primary inline-flex items-center justify-center gap-2" data-cta="saas-liafrik-overview">
                    {lang === 'FR' ? 'Découvrir Liafrik' : 'Explore Liafrik'}
                    <ArrowRight size={14} />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-white/[0.16] text-[#C9CCD1] px-7 py-3 text-sm font-semibold rounded-lg hover:border-white/[0.16] hover:text-white transition-all duration-300" data-cta="saas-liafrik-demo">
                    {lang === 'FR' ? 'Demander une démo' : 'Request a demo'}
                  </Link>
                </div>
              </div>
              <div className="animate-fade-in flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-sm rounded-2xl border border-white/[0.08] bg-white flex items-center justify-center overflow-hidden p-10">
                  <img src="/assets/images/liafrik-official.png" alt="Liafrik" className="relative w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ecosystem diagram */}
      <section className="relative py-14 md:py-20 bg-black overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="section-label">{lang === 'FR' ? 'ÉCOSYSTÈME LIAFRIK' : 'LIAFRIK ECOSYSTEM'}</span>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-4 text-balance">
              {lang === 'FR' ? '15 Modules Connectés, Une Seule Plateforme' : '15 Connected Modules, One Platform'}
            </h2>
            <p className="text-[#8A8F98] text-sm md:text-base leading-relaxed">
              {lang === 'FR'
                ? 'Cliquez sur un module pour en savoir plus. Chaque module partage les données avec les autres — pas d\'intégrations à maintenir.'
                : 'Click a module to learn more. Every module shares data with the others — no integrations to maintain.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {modules.map((product, i) => (
              <Link
                key={product.slug}
                to="/saas/liafrik"
                data-cta="saas-module-tile"
                data-product={product.slug}
                className={`animate-on-scroll animate-on-scroll-delay-${Math.min((i % 5) + 1, 4)} relative group flex flex-col items-center text-center gap-3 bg-black rounded-2xl border border-white/[0.08] p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-transparent transition-all duration-300`}
              >
                {product.comingSoon && (
                  <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-accent-500" />
                )}
                <ModuleIcon name={product.icon} color={product.color} logo={product.logo} alt={product.name} size={26} />
                <div>
                  <p className="text-sm font-bold text-white">{product.name}</p>
                  <p className="text-[11px] text-[#5E6169] mt-0.5">
                    {product.comingSoon
                      ? (lang === 'FR' ? 'Bientôt disponible' : 'Coming Soon')
                      : tr(product.category, lang)}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <div className="inline-block card p-8 max-w-2xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                {lang === 'FR' ? 'Besoin d\'une démo personnalisée ?' : 'Need a personalized demo?'}
              </h3>
              <p className="text-[#8A8F98] text-sm mb-6 leading-relaxed">
                {lang === 'FR'
                  ? 'Réservez un appel stratégique pour voir comment Liafrik peut s\'adapter à votre business.'
                  : 'Book a strategy call to see how Liafrik can fit your business.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2" data-cta="saas-demo-contact">
                  {lang === 'FR' ? 'Réserver une démo' : 'Book a demo'}
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    lang === 'FR'
                      ? 'Bonjour LIYAH GROUP, je souhaite une démo de Liafrik.'
                      : 'Hello LIYAH GROUP, I\'d like a demo of Liafrik.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="saas-whatsapp"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
