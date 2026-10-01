import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SEO from '@/components/SEO';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import { getSaasProductBySlug, tr } from '@/data/saasProducts';

const WHATSAPP_NUMBER = '971503857203';

export default function SaaSProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLang();
  const ref = useScrollAnimation();
  const product = slug ? getSaasProductBySlug(slug) : undefined;

  if (!product) return <Navigate to="/saas" replace />;

  const whatsappMsg = lang === 'FR'
    ? `Bonjour LIYAH GROUP, je suis intéressé(e) par ${product.name}. Pouvez-vous me rappeler ?`
    : `Hello LIYAH GROUP, I'm interested in ${product.name}. Can you get back to me?`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: product.name,
      description: tr(product.description, lang),
      applicationCategory: 'BusinessApplication',
    },
  ];

  return (
    <>
      <SEO
        title={`${product.name} | LIYAH GROUP`}
        description={tr(product.description, lang)}
        path={`/saas/${product.slug}`}
        jsonLd={jsonLd}
      />
      <PageHero
        label={lang === 'FR' ? 'PRODUIT SaaS' : 'SaaS PRODUCT'}
        title={product.name}
        subtitle={tr(product.tagline, lang)}
      />

      <section ref={ref} className="relative py-14 md:py-20 bg-black overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <p className="text-[#8A8F98] text-base md:text-lg leading-relaxed mb-8">
                {tr(product.mainBenefit, lang)}
              </p>
              <ul className="space-y-3 mb-8">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[#C9CCD1]">
                    <CheckCircle size={18} className="text-white flex-shrink-0 mt-0.5" />
                    <span>{tr(f, lang)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2" data-cta={`saas-${product.slug}-cta`}>
                  {lang === 'FR' ? 'Demander une démo' : 'Request a demo'}
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-7 py-3 rounded-lg transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="animate-on-scroll animate-on-scroll-delay-2 flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-sm rounded-2xl border border-white/[0.08] bg-white flex items-center justify-center overflow-hidden p-10">
                  <img src="/assets/images/liafrik-official.png" alt={product.name} className="relative w-full h-auto object-contain" />
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
