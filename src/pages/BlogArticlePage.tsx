import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import SEO from '@/components/SEO';

const images = [
  'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

const slugs = ['why-your-website-is-losing-clients', 'building-ecommerce-that-scales', 'digital-ecosystem-advantage'];
const readTimes = ['5 min read', '7 min read', '6 min read'];

const bodies = [
  "Your website is often the first interaction a potential client has with your brand. Yet most business websites are structured as brochures — static, generic, and built to look good rather than to convert. The result: visitors leave before they ever speak to you.\n\nIn this article, we break down the structural reasons websites lose clients — from unclear value propositions and slow load times to weak calls to action and missing trust signals. We then walk through how a conversion-focused digital ecosystem replaces the brochure mindset with a system designed to qualify, nurture, and convert visitors into clients.\n\nEvery section of your site should have a job. Every page should guide the visitor toward a decision. When your website is built as a system — not a page — it stops being a cost center and becomes a revenue engine.",
  "Most founders approach e-commerce as a storefront problem: pick a platform, add products, run ads. That approach works until it doesn't. The moment volume increases, the cracks show — fragmented operations, broken fulfillment flows, inconsistent customer experience, and ad spend that outpaces revenue.\n\nIn this article, we examine what separates e-commerce businesses that scale from those that stall. We cover platform architecture, product strategy, payment and fulfillment systems, UX customization, and the growth tools and automation that turn a store into an ecosystem.\n\nThe founders who scale treat their e-commerce store not as a website but as infrastructure — designed to handle 10x volume without breaking, and built to grow without requiring a full rebuild every quarter.",
  "Smart brands don't build isolated assets — they build systems. A website here, a store there, a social presence somewhere else: that's the old model, and it's why most digital growth plateaus.\n\nThe digital ecosystem advantage is the shift from disconnected assets to interconnected systems that feed each other. In this article, we explore how leading brands architect ecosystems where content drives traffic, traffic feeds the store, the store feeds the email list, and the list feeds retention.\n\nWe break down the components — platform, store, funnel, automation, analytics — and how they connect. The result is a business that grows without the founder having to push every lever manually. Systems scale. Isolated assets don't.",
];

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLang();
  const ref = useScrollAnimation();

  const index = slugs.indexOf(slug ?? '');
  if (index === -1) {
    return (
      <section className="py-32 bg-[#0B0C0E] text-center">
        <h1 className="text-3xl font-semibold text-white mb-6">Article not found</h1>
        <Link to="/blog" className="btn-outline inline-flex items-center gap-2">
          <ArrowLeft size={14} /> Back to Blog
        </Link>
      </section>
    );
  }

  const article = t.blog.articles[index];
  const image = images[index];
  const body = bodies[index];
  const readTime = readTimes[index];

  const seoDescription = `${article.category} — ${article.title}`;
  const articleLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      articleSection: article.category,
      image,
      author: { '@type': 'Organization', name: 'LIYAH GROUP', url: 'https://liyahgroup.me' },
      publisher: { '@id': 'https://liyahgroup.me/#organization' },
      mainEntityOfPage: `https://liyahgroup.me/blog/${slug}`,
    },
  ];

  return (
    <>
      <SEO title={`${article.title} | LIYAH GROUP`} description={seoDescription} path={`/blog/${slug}`} image={image} type="article" jsonLd={articleLd} />
      <section className="relative pt-32 md:pt-40 pb-12 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(31,95,91,0.05),transparent_70%)] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#5E6169] hover:text-white transition-colors mb-6 font-semibold">
            <ArrowLeft size={12} /> {t.blog.label}
          </Link>
          <span className="text-white text-xs uppercase tracking-widest font-bold block mb-4">{article.category}</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-[#5E6169] mt-6">
            <Clock size={12} />
            <span>{readTime}</span>
          </div>
        </div>
      </section>

      <section ref={ref} className="relative py-12 md:py-16 bg-black overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-[#0B0C0E] border border-white/[0.08] mb-10 group">
            <img src={image} alt={article.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="prose prose-lg max-w-none">
            {body.split('\n\n').map((para, i) => (
              <p key={i} className={`text-[#8A8F98] text-base leading-relaxed mb-6 ${i === 0 ? 'text-lg text-white font-medium' : ''}`}>
                {para}
              </p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-white/[0.08]">
            <Link to="/contact" className="inline-flex items-center gap-2 btn-primary">
              {t.cta.cta} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
