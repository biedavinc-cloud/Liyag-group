import { Link } from 'react-router-dom';
import { ArrowRight, Code2, ShoppingBag, TrendingUp, Layers } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useLang } from '@/i18n/LangContext';
import TrustpilotBadge from '@/components/TrustpilotBadge';
import { SectionFigure } from '@/components/FigDiagrams';

const aboutFeatures = [
  { icon: Code2, label: 'Website & App Development' },
  { icon: ShoppingBag, label: 'E-Commerce & Shopify' },
  { icon: TrendingUp, label: 'SEO & Digital Growth' },
  { icon: Layers, label: 'LiAfrik SaaS Platform' },
];

function StatItem({ end, prefix, suffix, label }: { end: number; prefix: string; suffix: string; label: string }) {
  const { ref, value } = useCountUp({ end, duration: 2000 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="animate-on-scroll flex flex-col items-center text-center">
      <span className="text-4xl md:text-6xl font-semibold text-white">{prefix}{value}{suffix}</span>
      <span className="text-[#5E6169] text-xs md:text-sm uppercase tracking-widest font-medium mt-2">{label}</span>
    </div>
  );
}

export default function AboutPage() {
  const { t, lang } = useLang();
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();
  const ref4 = useScrollAnimation();

  return (
    <>
      <section ref={ref} className="relative pt-28 md:pt-36 pb-14 md:pb-20 bg-black overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative">
            <SectionFigure index={0} color="#FFFFFF" className="hidden md:block absolute -top-10 -left-6 pointer-events-none" />
            <span className="relative animate-on-scroll section-label">{t.about.label}</span>
            <h1 className="animate-on-scroll animate-on-scroll-delay-1 text-xl md:text-3xl font-semibold text-white mb-6 leading-tight text-balance">
              {t.about.title}
            </h1>
            <p className="animate-on-scroll animate-on-scroll-delay-2 text-[#8A8F98] leading-relaxed text-sm md:text-base">
              {t.about.body}
            </p>

            <div className="animate-on-scroll animate-on-scroll-delay-2 mt-8 grid sm:grid-cols-2 gap-3">
              {aboutFeatures.map((f) => (
                <div key={f.label} className="flex items-center gap-3 bg-[#0B0C0E] rounded-lg px-4 py-3">
                  <f.icon size={16} className="text-accent-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#C9CCD1]">{f.label}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="animate-on-scroll animate-on-scroll-delay-3 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white transition-colors duration-200 group">
              {t.about.cta}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="animate-on-scroll animate-on-scroll-delay-3 mt-8">
              <TrustpilotBadge variant="light" size="md" />
            </div>
          </div>

          <div className="animate-on-scroll relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0B0C0E] group max-w-md mx-auto md:mx-0 border-2" style={{ borderColor: 'rgba(212,160,23,0.35)' }}>
              <img src="/assets/images/IMG_6290.JPG" alt="Vincent Nogue, Founder of LIYAH GROUP." loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="flex items-center gap-3 mt-6 max-w-md mx-auto md:mx-0">
              <div className="w-12 h-12 rounded-full bg-white border border-white/[0.08] flex items-center justify-center flex-shrink-0 p-1.5">
                <img src="/assets/images/liafrik-official.png" alt="LiAfrik" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-accent-600">
                  {lang === 'FR' ? 'Fondateur & Directeur' : 'Founder & Director'}
                </p>
                <p className="text-sm font-bold text-white">Vincent Nogue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref2} className="relative py-14 md:py-20 bg-black overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="animate-on-scroll section-label">KEY METRICS</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-white">
              A Track Record Built Over Time
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8 py-8">
            <StatItem end={15} prefix="+" suffix="" label={t.stats[0].label} />
            <StatItem end={5} prefix="+" suffix="K" label={t.stats[1].label} />
            <StatItem end={11} prefix="+" suffix="K" label={t.stats[2].label} />
          </div>
          <div className="mt-16 relative">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest text-[#5E6169] font-semibold">
                {lang === 'FR' ? 'LE PARCOURS' : 'THE JOURNEY'}
              </span>
            </div>
            <div className="max-w-2xl mx-auto space-y-8">
              {[
                {
                  year: '2012',
                  label: {
                    en: 'Began career in digital as a Graphic Designer in Cameroon',
                    fr: 'Débute sa carrière dans le digital en tant que graphiste au Cameroun',
                  },
                },
                {
                  year: '2015',
                  label: {
                    en: 'Transitioned into e-commerce in Cameroon',
                    fr: 'Transition vers l\'e-commerce au Cameroun',
                  },
                },
                {
                  year: '2019',
                  label: {
                    en: 'Founded LIYAH GROUP, a web & digital agency in Cameroon',
                    fr: 'Fonde LIYAH GROUP, une agence web & digitale au Cameroun',
                  },
                },
                {
                  year: '2022',
                  label: {
                    en: 'Restructured and expanded operations of LIYAH GROUP in Abu Dhabi, UAE',
                    fr: 'Restructure et développe les opérations de LIYAH GROUP à Abu Dhabi, EAU',
                  },
                },
                {
                  year: '2025',
                  label: {
                    en: 'Launched LiAfrik with the full suite of SaaS platforms in Dubai, UAE',
                    fr: 'Lance LiAfrik avec la gamme complète de plateformes SaaS à Dubaï, EAU',
                  },
                },
              ].map((item, i) => (
                <div key={item.year} className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} flex gap-5 items-start`}>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full border-2 border-accent-500 bg-black" />
                    {i < 4 && <div className="w-px flex-1 bg-white/[0.12] mt-1" style={{ minHeight: '2.5rem' }} />}
                  </div>
                  <div className="pb-1">
                    <p className="text-sm font-bold text-accent-500">{item.year}</p>
                    <p className="text-[#C9CCD1] text-sm mt-1 leading-relaxed">{lang === 'FR' ? item.label.fr : item.label.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={ref3} className="relative py-14 md:py-20 bg-[#0B0C0E] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="animate-on-scroll section-label">{t.whyChooseUs.label}</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-white">
              {t.whyChooseUs.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {t.whyChooseUs.items.map((item, i) => (
              <div key={item.num} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} card-glow group card card-hover p-7 flex gap-5`}>
                <span className="text-4xl font-semibold text-white/30 group-hover:text-white transition-colors duration-500 flex-shrink-0 leading-none">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#8A8F98] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref4} className="relative py-14 md:py-20 bg-[#0B0C0E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.06),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="animate-on-scroll section-label text-[#8A8F98] justify-center">{t.businessBuilder.label}</span>
          <p className="animate-on-scroll animate-on-scroll-delay-1 text-xl md:text-2xl leading-relaxed text-white text-balance font-medium">
            {t.businessBuilder.body}
          </p>
          <Link to="/contact" className="animate-on-scroll animate-on-scroll-delay-2 mt-10 inline-block btn-primary animate-pulse-glow">
            {t.businessBuilder.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
