import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';

const images = [
  'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const slugs = ['why-your-website-is-losing-clients', 'building-ecommerce-that-scales', 'digital-ecosystem-advantage'];
const readTimes = ['5 min read', '7 min read', '6 min read'];

export default function BlogPage() {
  const { t } = useLang();
  const ref = useScrollAnimation();

  return (
    <>
      <PageHero label={t.blog.label} title={t.blog.title} subtitle={t.outcomes.subtitle} />

      <section ref={ref} className="relative py-14 md:py-20 bg-[#0B0C0E] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {t.blog.articles.map((a, i) => (
              <article key={slugs[i]} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} group`}>
                <Link to={`/blog/${slugs[i]}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#0B0C0E] border border-white/[0.08] mb-5">
                    <img src={images[i]} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-4 left-4 bg-black/90 text-white text-xs uppercase tracking-widest px-3 py-1 font-semibold rounded-full backdrop-blur-sm">{a.category}</span>
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-4">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#5E6169] mb-3">
                    <Clock size={12} />
                    <span>{readTimes[i]}</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug mb-4 text-white group-hover:text-white transition-colors duration-300">{a.title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8A8F98] group-hover:text-white transition-colors font-bold">
                    {t.blog.readMore} <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
