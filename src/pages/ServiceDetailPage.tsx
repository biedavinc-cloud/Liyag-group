import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Globe, ShoppingBag, Smartphone, Zap, TrendingUp, Megaphone,
  ArrowRight, CheckCircle, ChevronDown, MessageCircle, Layers,
} from 'lucide-react';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import SEO from '@/components/SEO';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import { getServiceBySlug, tr, services } from '@/data/services';
import { saasProducts } from '@/data/saasProducts';

const iconMap: Record<string, typeof Globe> = {
  Globe, ShoppingBag, Smartphone, Zap, TrendingUp, Megaphone,
};

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

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const ref = useScrollAnimation();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  const Icon = iconMap[service.icon] ?? Layers;
  const relatedServices = service.relatedServices
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;
  const relatedProducts = service.relatedProducts
    .map((p) => saasProducts.find((x) => x.slug === p))
    .filter(Boolean) as typeof saasProducts;

  const whatsappMsg = lang === 'FR'
    ? `Bonjour LIYAH GROUP, je suis intéressé(e) par votre service : ${tr(service.name, lang)}. Pouvez-vous me rappeler ?`
    : `Hello LIYAH GROUP, I'm interested in your service: ${tr(service.name, lang)}. Can you get back to me?`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: tr(service.name, lang),
      description: tr(service.description, lang),
      provider: { '@type': 'Organization', name: 'LIYAH GROUP', url: 'https://liyahgroup.me' },
      areaServed: ['Africa', 'United Arab Emirates', 'Global'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((f) => ({
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
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://liyahgroup.me/services' },
        { '@type': 'ListItem', position: 3, name: tr(service.name, lang), item: `https://liyahgroup.me/services/${service.slug}` },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={tr(service.seo.title, lang)}
        description={tr(service.seo.description, lang)}
        path={`/services/${service.slug}`}
        jsonLd={jsonLd}
      />
      <PageHero label={tr(service.category, lang)} title={tr(service.h1, lang)} subtitle={tr(service.tagline, lang)} />

      <section ref={ref} className="relative py-14 md:py-20 bg-black overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                  <Icon size={26} className="text-white" strokeWidth={1.5} />
                </div>
                <span className="text-white text-xs uppercase tracking-widest font-bold">{tr(service.category, lang)}</span>
              </div>
              <p className="text-[#8A8F98] text-base md:text-lg leading-relaxed mb-8">{tr(service.description, lang)}</p>

              <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 mt-12">
                {lang === 'FR' ? 'Pourquoi ce service compte' : 'Why this service matters'}
              </h2>
              <ul className="space-y-3 mb-12">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[#C9CCD1]">
                    <CheckCircle size={18} className="text-white flex-shrink-0 mt-0.5" />
                    <span>{tr(b, lang)}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
                {lang === 'FR' ? 'Comment nous travaillons' : 'How we work'}
              </h2>
              <div className="space-y-5 mb-12">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{tr(step.title, lang)}</h3>
                      <p className="text-sm text-[#8A8F98] leading-relaxed">{tr(step.desc, lang)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {lang === 'FR' ? 'Questions fréquentes' : 'Frequently asked questions'}
              </h2>
              <div className="mb-12">
                {service.faqs.map((f, i) => (
                  <FaqItem key={i} question={tr(f.question, lang)} answer={tr(f.answer, lang)} />
                ))}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="card card-hover p-6 bg-gradient-to-br from-white/[0.04] to-transparent border-0">
                  <h3 className="text-white text-lg font-semibold mb-3">
                    {lang === 'FR' ? 'Prêt à commencer ?' : 'Ready to get started?'}
                  </h3>
                  <p className="text-[#8A8F98] text-sm leading-relaxed mb-5">
                    {lang === 'FR'
                      ? 'Réservez un appel stratégique gratuit pour discuter de votre projet.'
                      : 'Book a free strategy call to discuss your project.'}
                  </p>
                  <Link
                    to="/contact"
                    data-cta="book-strategy-call"
                    data-service={service.slug}
                    className="btn-primary w-full flex items-center justify-center gap-2 mb-3"
                  >
                    {lang === 'FR' ? 'Réserver un appel' : 'Book a strategy call'}
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp-service"
                    data-service={service.slug}
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    {lang === 'FR' ? 'WhatsApp' : 'WhatsApp'}
                  </a>
                </div>

                {relatedProducts.length > 0 && (
                  <div className="card p-6">
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                      {lang === 'FR' ? 'Produits SaaS liés' : 'Related SaaS products'}
                    </h3>
                    {relatedProducts.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/saas/${p.slug}`}
                        className="block text-sm text-white hover:text-white font-medium py-2 border-b border-white/[0.06] last:border-b-0"
                      >
                        {p.name} →
                      </Link>
                    ))}
                  </div>
                )}

                {relatedServices.length > 0 && (
                  <div className="card p-6">
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                      {lang === 'FR' ? 'Autres services' : 'Other services'}
                    </h3>
                    {relatedServices.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="block text-sm text-white hover:text-white font-medium py-2 border-b border-white/[0.06] last:border-b-0"
                      >
                        {tr(s.name, lang)} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
