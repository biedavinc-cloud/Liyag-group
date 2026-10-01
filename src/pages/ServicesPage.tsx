import { Link } from 'react-router-dom';
import { Layers, DollarSign, Target, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import TrustpilotBadge from '@/components/TrustpilotBadge';
import { SectionFigure } from '@/components/FigDiagrams';

const iconMap: Record<string, typeof Layers> = { Layers, DollarSign, Target };

export default function ServicesPage() {
  const { t, lang } = useLang();
  const ref = useScrollAnimation();

  return (
    <>
      <PageHero label={t.engines.label} title={t.engines.title} subtitle={t.outcomes.subtitle} />

      <section ref={ref} className="relative py-10 md:py-14 bg-[#0B0C0E] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.04] blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-6 space-y-6 lg:space-y-8">
          {t.engines.items.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Layers;
            const serviceSlugs = ['website-design-development', 'ecommerce-shopify', 'seo-digital-growth-strategy'];
            return (
              <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} card-glow group card card-hover p-8 lg:p-12`}>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-1 relative">
                    <SectionFigure index={i} color="#FFFFFF" className="absolute -top-2 -left-2 pointer-events-none" />
                    <div className="relative w-16 h-16 rounded-xl bg-white/[0.04] flex items-center justify-center mb-6">
                      <Icon size={28} className="text-white" strokeWidth={1.5} />
                    </div>
                    <p className="relative text-white text-xs uppercase tracking-widest font-bold mb-2">{s.name}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-snug">{s.subtitle}</h3>
                    <p className="text-[#8A8F98] text-sm md:text-base leading-relaxed mb-6">{s.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {s.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[#8A8F98] bg-white/[0.05] border border-white/[0.08] px-3 py-1.5 rounded-full font-medium group-hover:border-white/[0.24] transition-colors duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link to={`/services/${serviceSlugs[i] ?? 'website-design-development'}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-white transition-colors group/link">
                      {t.blog.readMore} <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative py-6 md:py-8 bg-black overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="animate-on-scroll section-label">{t.outcomes.label}</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">{t.outcomes.title}</h2>
            <p className="animate-on-scroll animate-on-scroll-delay-2 text-[#8A8F98] text-sm md:text-base">{t.outcomes.subtitle}</p>
            <div className="animate-on-scroll animate-on-scroll-delay-3 mt-6 flex justify-center">
              <TrustpilotBadge variant="light" size="md" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.outcomes.items.map((item, i) => (
              <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} card-glow group card card-hover p-7 flex flex-col`}>
                <h3 className="text-base font-bold uppercase text-white mb-4 leading-tight">{item.title}</h3>
                <ul className="space-y-2.5 flex-grow">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[#8A8F98] leading-snug">
                      <span className="text-white mt-0.5 flex-shrink-0">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-white transition-colors self-start">
                  {item.cta} <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-8 md:py-10 bg-[#0B0C0E] overflow-hidden border-t border-white/[0.08]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-label">{t.cta.label}</span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">{t.cta.title}</h2>
          <p className="text-[#8A8F98] text-sm md:text-base leading-relaxed max-w-xl mx-auto">{t.cta.highlight}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              {t.cta.cta}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/pricing" className="btn-outline inline-flex items-center justify-center gap-2">
              {lang === 'FR' ? 'Voir les tarifs' : 'View pricing'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
