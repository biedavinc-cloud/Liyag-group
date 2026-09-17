import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, ArrowRight, MessageCircle, ChevronDown, CheckCircle, Globe } from 'lucide-react';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import SEO from '@/components/SEO';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import { getLocationBySlug, tr, locations } from '@/data/locations';
import { services } from '@/data/services';
import { saasProducts } from '@/data/saasProducts';

const WHATSAPP_NUMBER = '971503857203';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.08]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left py-5 group"
      >
        <span className="text-sm md:text-base font-semibold text-white pr-4">{question}</span>
        <ChevronDown
          size={18}
          className={`text-[#5E6169] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <p className="text-sm text-[#8A8F98] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const ref = useScrollAnimation();
  const location = slug ? getLocationBySlug(slug) : undefined;

  if (!location) return <Navigate to="/" replace />;

  const locationServices = location.services
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;

  const otherLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 6);

  const whatsappMsg = lang === 'FR'
    ? `Bonjour LIYAH GROUP, je suis basé(e) au ${location.country} et je souhaite discuter de mon projet digital. Pouvez-vous me rappeler ?`
    : `Hello LIYAH GROUP, I'm based in ${location.country} and I'd like to discuss my digital project. Can you get back to me?`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

  const canonicalPath = `/${location.lang === 'fr' ? 'fr' : 'en'}/${location.slug}`;
  const hreflangPairsRaw = location.hreflangPair
    ? {
        en: `/en/${location.hreflangPair}`,
        fr: `/fr/${location.hreflangPair}`,
      }
    : undefined;
  const hreflangPairs = hreflangPairsRaw
    ? [
        { lang: 'en', path: hreflangPairsRaw.en },
        { lang: 'fr', path: hreflangPairsRaw.fr },
      ]
    : undefined;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: `LIYAH GROUP — ${location.country}`,
      description: tr(location.seo.description, lang),
      url: `https://liyahgroup.me${canonicalPath}`,
      areaServed: { '@type': 'Country', name: location.country },
      provider: { '@type': 'Organization', name: 'LIYAH GROUP', url: 'https://liyahgroup.me' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: location.faqs.map((f) => ({
        '@type': 'Question',
        name: tr(f.question, lang),
        acceptedAnswer: { '@type': 'Answer', text: tr(f.answer, lang) },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://liyahgroup.me/' },
        { '@type': 'ListItem', position: 2, name: location.country, item: `https://liyahgroup.me${canonicalPath}` },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={tr(location.seo.title, lang)}
        description={tr(location.seo.description, lang)}
        path={canonicalPath}
        jsonLd={jsonLd}
        hreflangPairs={hreflangPairs}
      />
      <PageHero
        label={lang === 'FR' ? 'AGENCE DIGITALE' : 'DIGITAL AGENCY'}
        title={tr(location.h1, lang)}
        subtitle={tr(location.intro, lang)}
      />

      <section ref={ref} className="relative py-14 md:py-20 bg-black overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={20} className="text-white" />
                <span className="text-white text-xs uppercase tracking-widest font-bold">{location.country}</span>
              </div>

              <p className="text-[#8A8F98] text-base md:text-lg leading-relaxed mb-8">{tr(location.intro, lang)}</p>

              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-10">
                {lang === 'FR' ? `Le marché ${location.country.toLowerCase()}` : `The ${location.country} market`}
              </h2>
              <p className="text-[#8A8F98] text-sm md:text-base leading-relaxed mb-10">{tr(location.marketContext, lang)}</p>

              <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
                {lang === 'FR' ? 'Nos services en ' + location.country : 'Our services in ' + location.country}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {locationServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="card card-hover p-5 group"
                  >
                    <h3 className="text-sm font-bold text-white mb-2 group-hover:text-white transition-colors">
                      {tr(s.name, lang)}
                    </h3>
                    <p className="text-xs text-[#8A8F98] leading-relaxed mb-3">{tr(s.tagline, lang)}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-white font-bold uppercase tracking-widest">
                      {lang === 'FR' ? 'En savoir plus' : 'Learn more'}
                      <ArrowRight size={12} />
                    </span>
                  </Link>
                ))}
              </div>

              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {lang === 'FR' ? 'Questions fréquentes' : 'Frequently asked questions'}
              </h2>
              <div className="mb-10">
                {location.faqs.map((f, i) => (
                  <FaqItem key={i} question={tr(f.question, lang)} answer={tr(f.answer, lang)} />
                ))}
              </div>

              <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
                {lang === 'FR' ? 'Autres pays où nous opérons' : 'Other countries we serve'}
              </h2>
              <div className="flex flex-wrap gap-3 mb-10">
                {otherLocations.map((l) => (
                  <Link
                    key={l.slug}
                    to={`/${l.lang === 'fr' ? 'fr' : 'en'}/${l.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-[#8A8F98] hover:text-white border border-white/[0.08] hover:border-white/[0.24] px-4 py-2 rounded-full transition-all duration-300"
                  >
                    <Globe size={14} />
                    {l.country}
                  </Link>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="card card-hover p-6 bg-gradient-to-br from-white/[0.04] to-transparent border-0">
                  <h3 className="text-white text-lg font-semibold mb-3">
                    {lang === 'FR' ? `Discutons de votre projet au ${location.country}` : `Let's discuss your project in ${location.country}`}
                  </h3>
                  <p className="text-[#8A8F98] text-sm leading-relaxed mb-5">
                    {lang === 'FR'
                      ? 'Réservez un appel stratégique gratuit. Nous comprenons votre marché local.'
                      : 'Book a free strategy call. We understand your local market.'}
                  </p>
                  <Link
                    to="/contact"
                    data-cta="location-book-call"
                    data-location={location.slug}
                    className="btn-primary w-full flex items-center justify-center gap-2 mb-3"
                  >
                    {lang === 'FR' ? 'Réserver un appel' : 'Book a strategy call'}
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="location-whatsapp"
                    data-location={location.slug}
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    {lang === 'FR' ? 'WhatsApp' : 'WhatsApp'}
                  </a>
                </div>

                <div className="card p-6">
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                    {lang === 'FR' ? 'Produits SaaS' : 'SaaS products'}
                  </h3>
                  {saasProducts.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/saas/${p.slug}`}
                      className="block text-sm text-white hover:text-white font-medium py-2 border-b border-white/[0.06] last:border-b-0"
                    >
                      {p.name} →
                    </Link>
                  ))}
                </div>

                <div className="card p-6">
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                    {lang === 'FR' ? 'Ressources' : 'Resources'}
                  </h3>
                  <Link to="/blog" className="block text-sm text-white hover:text-white font-medium py-2 border-b border-white/[0.06]">
                    {lang === 'FR' ? 'Insights & Articles' : 'Insights & Articles'} →
                  </Link>
                  <Link to="/projects" className="block text-sm text-white hover:text-white font-medium py-2 border-b border-white/[0.06]">
                    {lang === 'FR' ? 'Nos Projets' : 'Our Projects'} →
                  </Link>
                  <Link to="/services" className="block text-sm text-white hover:text-white font-medium py-2">
                    {lang === 'FR' ? 'Tous les services' : 'All services'} →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
