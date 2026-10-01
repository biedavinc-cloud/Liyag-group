import { CircuitLines } from '@/components/CircuitLines';

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-black pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(31,95,91,0.05),transparent_70%)] pointer-events-none" />
      <CircuitLines className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-[500px] h-[140px] pointer-events-none" opacity={0.12} />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block text-xs uppercase tracking-widest font-bold text-white border border-white/[0.08] bg-[#0B0C0E] px-4 py-1.5 rounded-full mb-6">
          {label}
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-sm md:text-base text-[#8A8F98] max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
