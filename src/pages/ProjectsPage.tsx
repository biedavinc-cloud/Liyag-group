import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Globe, ShoppingBag, TrendingUp, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';

const categories = [
  {
    key: 'digital',
    icon: Globe,
    title: 'Digital Presence',
    description: 'Websites, mobile apps and custom platforms that go beyond simple online presence — creating interconnected systems that grow your audience and streamline your operations.',
    projects: [
      { title: 'Corporate & Brand Websites', category: 'Web Design' },
      { title: 'Custom Business Platforms', category: 'Custom Platform' },
      { title: 'Content Hubs & Blogs', category: 'Web Design' },
    ],
  },
  {
    key: 'ecommerce',
    icon: ShoppingBag,
    title: 'E-Commerce & Revenue',
    description: 'E-commerce stores, digital product systems and monetization strategies that turn visibility into consistent and scalable revenue streams.',
    projects: [
      { title: 'Shopify Ecosystems', category: 'E-Commerce' },
      { title: 'Fashion & Retail Stores', category: 'E-Commerce' },
      { title: 'UAE Market Storefronts', category: 'E-Commerce' },
    ],
  },
  {
    key: 'growth',
    icon: TrendingUp,
    title: 'Growth & Automation',
    description: 'Data-driven strategies aligning branding, marketing and technology — ensuring measurable growth, stronger positioning and real business results.',
    projects: [
      { title: 'Growth Systems & Funnels', category: 'Strategy' },
      { title: 'Operations Automation', category: 'Automation' },
      { title: 'Revenue Ecosystems', category: 'Growth' },
    ],
  },
];

export default function ProjectsPage() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'digital';
  const [activeCat, setActiveCat] = useState(initialCat);

  const active = categories.find((c) => c.key === activeCat) ?? categories[0];

  return (
    <>
      <PageHero label={t.header.projects} title={t.header.projects} subtitle={t.outcomes.subtitle} />

      <section className="relative py-12 bg-black border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCat(cat.key)}
                  className={`flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold rounded-lg transition-all duration-300 ${
                    activeCat === cat.key
                      ? 'bg-white text-black shadow-lg shadow-black/20'
                      : 'border border-white/[0.08] text-[#8A8F98] hover:border-white/[0.24] hover:text-white hover:-translate-y-0.5 bg-black'
                  }`}
                >
                  <Icon size={16} strokeWidth={1.5} />
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={ref} className="relative py-14 md:py-20 bg-[#0B0C0E] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center">
                <active.icon size={24} className="text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">{active.title}</h2>
            </div>
            <p className="text-[#8A8F98] text-sm md:text-base leading-relaxed">{active.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {active.projects.map((p, i) => (
              <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} card card-hover p-8 flex flex-col items-start gap-5`}>
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center">
                  <active.icon size={22} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-accent-600 font-semibold">{p.category}</span>
                  <h3 className="text-base font-bold text-white mt-1.5">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              {t.cta.cta} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
