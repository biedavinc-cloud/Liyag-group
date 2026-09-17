import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';

export default function PricingPage() {
  const { t } = useLang();
  const ref = useScrollAnimation();

  const plans = [
    {
      name: 'Starter',
      tagline: 'For new businesses establishing their digital presence',
      price: '$1,500',
      period: 'project',
      features: [
        'Custom website (up to 5 pages)',
        'Mobile-responsive design',
        'Basic SEO setup',
        'Contact form integration',
        '1 month post-launch support',
      ],
      highlighted: false,
    },
    {
      name: 'Growth',
      tagline: 'For brands ready to monetize and scale their audience',
      price: '$4,500',
      period: 'project',
      features: [
        'Full website or e-commerce store',
        'Custom branding and UX design',
        'Advanced SEO and analytics',
        'Payment gateway integration',
        'Email marketing setup',
        '3 months post-launch support',
      ],
      highlighted: true,
    },
    {
      name: 'Scale',
      tagline: 'For established businesses building complete ecosystems',
      price: 'Custom',
      period: 'quote',
      features: [
        'Custom platform or mobile app',
        'Multi-market architecture',
        'Automation and integrations',
        'Full growth strategy and execution',
        'Dedicated account manager',
        'Ongoing optimization and support',
      ],
      highlighted: false,
    },
  ];

  return (
    <>
      <PageHero label={t.header.pricing} title={t.header.pricing} subtitle={t.outcomes.subtitle} />

      <section ref={ref} className="relative py-14 md:py-20 bg-[#0B0C0E] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/[0.08] blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-accent-500 bg-black shadow-2xl shadow-accent-200/50 md:-translate-y-4 animate-pulse-glow'
                    : 'border-white/[0.08] bg-black card-hover'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-xs uppercase tracking-widest font-bold px-4 py-1 rounded-full flex items-center gap-1.5">
                    <Sparkles size={12} /> {t.reviews.badges[2]}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white uppercase mb-2">{plan.name}</h3>
                <p className="text-[#8A8F98] text-xs leading-relaxed mb-6">{plan.tagline}</p>
                <div className="mb-6">
                  <span className="text-4xl font-semibold text-white">{plan.price}</span>
                  <span className="text-[#5E6169] text-sm ml-2">/ {plan.period}</span>
                </div>
                <ul className="space-y-3 flex-grow mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#C9CCD1]">
                      <Check size={16} className="text-white mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold transition-all duration-300 ${
                    plan.highlighted ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {t.cta.cta} <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-[#8A8F98] text-sm mt-12">{t.reviews.subtitle}</p>
        </div>
      </section>
    </>
  );
}
