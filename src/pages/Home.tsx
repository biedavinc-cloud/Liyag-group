import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Star, Layers, DollarSign, Target, Cloud, Smartphone,
  Zap, Code2, Brain, Lock, TrendingUp, Globe2, Award, Grid3x3,
  ShoppingBag, Megaphone, Building2, HeartPulse, GraduationCap, Plane, Truck, Clapperboard,
  Rocket, LineChart, Lightbulb, Clock, MessageCircle,
} from 'lucide-react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiTailwindcss,
  SiCloudflare, SiDocker, SiKubernetes, SiPostgresql, SiMongodb,
  SiGraphql, SiStripe, SiAnthropic, SiFigma, SiGithub, SiFlutter,
  SiShopify, SiHostinger,
} from 'react-icons/si';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useTilt } from '@/hooks/useTilt';
import { useLang } from '@/i18n/LangContext';
import TrustpilotBadge from '@/components/TrustpilotBadge';
import ModuleIcon from '@/components/ModuleIcon';
import {
  Users, ScanLine, ShoppingCart, Store, MessageSquare, PiggyBank,
  Briefcase, Sparkles, Boxes,
} from 'lucide-react';
import { locations } from '@/data/locations';
import { getLiAfrikModules, tr } from '@/data/saasProducts';
import { CircuitLines, CircuitCorner } from '@/components/CircuitLines';
import { getFig } from '@/components/FigDiagrams';

// ─── Particle Canvas ─────────────────────────────────────────────────────────

interface Particle {
  x: number; y: number; vx: number; vy: number;
  radius: number; alpha: number; alphaDir: number;
  color: string; pulse: number; pulseSpeed: number;
}

const BLUE = 'rgba(37,99,235,';
const CYAN = 'rgba(6,182,212,';
const WHITE = 'rgba(255,255,255,';
const PALETTE = [BLUE, CYAN, WHITE];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const particles = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const ripples = useRef<{ x: number; y: number; r: number; alpha: number }[]>([]);

  const makeParticle = useCallback((W: number, H: number): Particle => {
    const col = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    return {
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      radius: 1 + Math.random() * 2.5,
      alpha: 0.2 + Math.random() * 0.5,
      alphaDir: Math.random() > 0.5 ? 1 : -1,
      color: col, pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    const COUNT = () => Math.min(180, Math.floor((W * H) / 6000));

    const resize = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W; canvas.height = H;
      particles.current = Array.from({ length: COUNT() }, () => makeParticle(W, H));
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      ripples.current.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, r: 0, alpha: 0.5 });
      for (let i = 0; i < 8; i++) {
        const p = makeParticle(W, H);
        p.x = e.clientX - rect.left; p.y = e.clientY - rect.top;
        const angle = (i / 8) * Math.PI * 2;
        p.vx = Math.cos(angle) * (1 + Math.random() * 2);
        p.vy = Math.sin(angle) * (1 + Math.random() * 2);
        p.alpha = 0.9;
        particles.current.push(p);
      }
    };
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);
    canvas.addEventListener('click', onClick);

    const MAX_DIST = 120, MOUSE_DIST = 100;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ripples.current = ripples.current.filter((r) => r.alpha > 0);
      for (const r of ripples.current) {
        ctx.beginPath(); ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(37,99,235,${r.alpha})`; ctx.lineWidth = 1.5; ctx.stroke();
        r.r += 3; r.alpha -= 0.02;
      }
      const mx = mouse.current.x, my = mouse.current.y;
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.pulse += p.pulseSpeed; p.alpha += 0.005 * p.alphaDir;
        if (p.alpha > 0.85 || p.alpha < 0.1) p.alphaDir *= -1;
        const dx = mx - p.x, dy = my - p.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_DIST && d > 0) {
          const force = (1 - d / MOUSE_DIST) * 0.06;
          p.vx += (dx / d) * force; p.vy += (dy / d) * force;
        }
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 2) { p.vx = (p.vx / speed) * 2; p.vy = (p.vy / speed) * 2; }
        p.vx *= 0.99; p.vy *= 0.99; p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10;
        if (p.alpha <= 0.01 && particles.current.length > COUNT()) { particles.current.splice(i, 1); continue; }
        const r = p.radius * (1 + 0.3 * Math.sin(p.pulse));
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3);
        grd.addColorStop(0, `${p.color}${p.alpha})`); grd.addColorStop(1, `${p.color}0)`);
        ctx.beginPath(); ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2); ctx.fillStyle = grd; ctx.fill();
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.min(p.alpha + 0.2, 1)})`; ctx.fill();
      }
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i], b = particles.current[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const strength = (1 - dist / MAX_DIST) * 0.2;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(37,99,235,${strength})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      if (mx > 0) {
        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 140);
        grd.addColorStop(0, 'rgba(37,99,235,0.06)'); grd.addColorStop(1, 'rgba(37,99,235,0)');
        ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(mx, my, 140, 0, Math.PI * 2); ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      canvas.removeEventListener('click', onClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, [makeParticle]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ cursor: 'crosshair' }} />;
}

// ─── Tilt Card wrapper ──────────────────────────────────────────────────────

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>();
  return (
    <div ref={ref} style={style} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={className}>
      {children}
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroStatItem({ end, prefix, suffix, label }: { end: number; prefix: string; suffix: string; label: string }) {
  const { ref, value } = useCountUp({ end, duration: 2000 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center sm:text-left">
      <div className="text-2xl md:text-3xl font-semibold text-white">{prefix}{value}{suffix}</div>
      <div className="text-xs text-[#8A8F98] mt-1">{label}</div>
    </div>
  );
}

function HomeHero() {
  const { t, lang } = useLang();

  return (
    <section className="relative overflow-hidden bg-black pt-32 md:pt-40">
      <CircuitLines className="hidden lg:block absolute top-16 right-0 w-[420px] h-[220px] pointer-events-none" opacity={0.25} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.02] text-white tracking-tight max-w-4xl"
        >
          {t.hero.title} {t.hero.titleHighlight}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <p className="text-base md:text-lg text-[#8A8F98] max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex items-center gap-4 flex-shrink-0 pb-1">
            <Link to="/saas/liafrik" className="text-sm font-medium text-white hover:text-[#8A8F98] transition-colors">
              {lang === 'FR' ? 'Nouveau' : 'New'}
            </Link>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-[#8A8F98] transition-colors group">
              {t.hero.ctaExplore}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        <div className="animate-on-scroll animate-on-scroll-delay-3 mt-8 pb-4 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/[0.08] pt-8">
          <HeroStatItem end={15} prefix="+" suffix="" label={t.stats[0].label} />
          <HeroStatItem end={5} prefix="+" suffix="K" label={t.stats[1].label} />
          <HeroStatItem end={11} prefix="+" suffix="K" label={t.stats[2].label} />
        </div>
      </div>
    </section>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────

// ─── About Summary ────────────────────────────────────────────────────────────

function AboutSummary() {
  const { t } = useLang();
  const ref = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="relative py-12 md:py-20 bg-black overflow-hidden border-t border-white/[0.08]">

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="animate-on-scroll relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#0B0C0E] rounded-2xl group max-w-sm mx-auto md:mx-0 border-2" style={{ borderColor: 'rgba(212,160,23,0.4)' }}>
            <img src="/assets/images/IMG_6290.JPG" alt="Vincent Nogue, Founder of LIYAH GROUP." loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-white/[0.16] rounded-2xl -z-10" />
          <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-accent-500/40 rounded-2xl -z-10" />
        </div>

        <div>
          <span className="animate-on-scroll section-label">{t.about.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-white text-balance">
            {t.about.title}
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 mt-6 text-[#8A8F98] leading-relaxed text-sm md:text-base line-clamp-4">
            {t.about.body}
          </p>
          <Link to="/about" className="animate-on-scroll animate-on-scroll-delay-3 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white transition-colors duration-200 group">
            {t.about.cta}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Services Summary ─────────────────────────────────────────────────────────

function ServicesSummary() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  const engineColors = ['#D4A017', '#E0AC2F', '#B4860F'];

  return (
    <section id="services" ref={ref} className="relative py-14 md:py-20 bg-black overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <span className="animate-on-scroll section-label">{t.engines.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-white">
            {t.engines.title}
          </h2>
        </div>

        <div className="space-y-12 md:space-y-16">
          {t.engines.items.map((s, i) => {
            const color = engineColors[i] ?? '#D4A017';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <div>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${color}1A` }}>
                    <ModuleIcon name={s.icon} color={color} size={20} />
                  </div>
                  <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color }}>{s.name}</p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-snug">{s.subtitle}</h3>
                  <p className="text-[#8A8F98] text-sm md:text-base leading-relaxed mb-6">{s.description}</p>
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:gap-2.5 transition-all">
                    {t.hero.ctaExplore} <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="relative rounded-2xl border border-white/[0.08] bg-[#0B0C0E] p-8 md:p-10 overflow-hidden">
                  <CircuitLines className="absolute -top-6 -right-10 w-56 h-28 pointer-events-none" opacity={0.12} color={color} />
                  <div className="relative flex flex-wrap gap-2.5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-2 rounded-lg border"
                        style={{ borderColor: `${color}33`, color, backgroundColor: `${color}0D` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Industries ──────────────────────────────────────────────────────────────

const industryIcons = [ShoppingBag, TrendingUp, Building2, HeartPulse, GraduationCap, Plane, Truck, Clapperboard];
const industryColors = ['#D4A017', '#E0AC2F', '#B4860F', '#D4A017', '#E0AC2F', '#B4860F', '#D4A017', '#E0AC2F'];
const industryImages: Record<number, string> = {
  0: '/assets/images/modules/industry-retail.png',
  1: '/assets/images/modules/industry-finance-v2.png',
  2: '/assets/images/modules/industry-realestate.png',
  3: '/assets/images/modules/industry-healthcare.png',
  4: '/assets/images/modules/industry-education.png',
  5: '/assets/images/modules/industry-travel.png',
  6: '/assets/images/modules/industry-logistics.png',
  7: '/assets/images/modules/industry-media.png',
};

function IndustriesSection() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-[#0B0C0E] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="animate-on-scroll section-label">{t.industries.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-2xl md:text-4xl font-semibold tracking-tight text-white">
            {t.industries.title}
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 mt-4 text-[#8A8F98] text-sm md:text-base">
            {t.industries.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {t.industries.items.map((name, i) => {
            const Icon = industryIcons[i] ?? Globe2;
            const img = industryImages[i];
            const color = industryColors[i] ?? '#D4A017';
            return (
              <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} group flex flex-col items-center justify-center text-center p-6 card card-hover`}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 overflow-hidden flex-shrink-0"
                  style={{ backgroundColor: img ? '#FFFFFF' : `${color}1A` }}
                >
                  {img ? (
                    <img src={img} alt={name} className="w-full h-full object-contain p-2" loading="lazy" />
                  ) : (
                    <Icon size={22} color={color} strokeWidth={1.5} />
                  )}
                </div>
                <p className="text-sm font-semibold text-[#C9CCD1]">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio Preview ────────────────────────────────────────────────────────

function PortfolioPreview() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-14 max-w-2xl">
          <span className="animate-on-scroll section-label">{t.portfolio.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-white">
            {t.portfolio.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {t.portfolio.items.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <Link
                to="/services"
                className="group relative rounded-2xl overflow-hidden p-8 flex flex-col items-start gap-5 h-full"
                style={{ background: '#0B0C0E', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.06), transparent 60%)' }}
                />
                <div className="relative z-10 flex flex-col items-start gap-5 w-full">
                  <ModuleIcon name={p.icon} color="#FFFFFF" size={22} />
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#8A8F98] font-semibold">{p.category}</span>
                    <h3 className="text-lg font-semibold text-white mt-1.5">{p.title}</h3>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-white group-hover:gap-2.5 transition-all duration-300">
                    {t.hero.ctaExplore}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="btn-outline inline-flex items-center gap-2 group">
            {t.portfolio.viewAll} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Technologies ─────────────────────────────────────────────────────────────

const techStack = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'AWS', Icon: Cloud, color: '#FF9900' },
  { name: 'Cloudflare', Icon: SiCloudflare, color: '#F38020' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'GraphQL', Icon: SiGraphql, color: '#E10098' },
  { name: 'Stripe', Icon: SiStripe, color: '#635BFF' },
  { name: 'Anthropic AI', Icon: SiAnthropic, color: '#D97757' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
  { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
];

function TechnologiesSection() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-[#0B0C0E] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.05),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="animate-on-scroll section-label">{t.technologies.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-2xl md:text-4xl font-semibold tracking-tight text-white">
            {t.technologies.title}
          </h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {techStack.map((tech, i) => (
            <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${Math.min((i % 6) + 1, 4)} group flex flex-col items-center text-center p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent-500/50 hover:bg-white/[0.06] transition-all duration-300`}>
              <tech.Icon size={30} style={{ color: tech.color }} className="mb-3 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              <p className="text-xs font-semibold text-[#C9CCD1]">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Tech Ecosystem ───────────────────────────────────────────────────────────

// ─── Process ──────────────────────────────────────────────────────────────────

const processIcons = [Lightbulb, Rocket, Code2, LineChart];

function ProcessSection() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-[#0B0C0E] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="animate-on-scroll section-label">{t.process.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-2xl md:text-4xl font-semibold tracking-tight text-white">
            {t.process.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {t.process.steps.map((step, i) => {
            const Icon = processIcons[i] ?? Lightbulb;
            return (
              <div key={step.num} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} relative`}>
                <div className="card card-hover p-7 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-accent-500 flex items-center justify-center">
                      <Icon size={22} className="text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-3xl font-semibold text-slate-200">{step.num}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[#8A8F98] text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < t.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────


function WhyChooseUs() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-black overflow-hidden border-t border-white/[0.08]">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="animate-on-scroll section-label">{t.whyChooseUs.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-white">
            {t.whyChooseUs.title}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/[0.08]">
          {t.whyChooseUs.items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="px-6 first:pl-0"
            >
              <span className="text-[10px] tracking-widest text-[#5E6169] font-mono">FIG 0.{i + 1}</span>
              <div className="h-32 my-6 opacity-40">{getFig(i, '#FFFFFF')}</div>
              <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#8A8F98] text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Preview ──────────────────────────────────────────────────────────────

function FaqPreview() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = t.faq.items.slice(0, 4);

  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-black overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="animate-on-scroll section-label">{t.faq.label}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-2xl md:text-4xl font-semibold tracking-tight text-white">
            {t.faq.title}
          </h2>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} card overflow-hidden`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left group">
                <span className={`text-sm md:text-base font-semibold transition-colors ${openIndex === i ? 'text-white' : 'text-white group-hover:text-white'}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-white border-white text-black rotate-180' : 'border-white/[0.14] text-[#8A8F98]'}`}>
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: openIndex === i ? '500px' : '0', opacity: openIndex === i ? 1 : 0 }}>
                <div className="px-5 pb-5">
                  <p className="text-[#8A8F98] text-sm leading-relaxed">{item.intro}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white transition-colors group">
            {t.faq.title} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Products (LiAfrik) ──────────────────────────────────────────────────────


function ProductsSection() {
  const { t, lang } = useLang();
  const ref = useScrollAnimation();
  const modules = getLiAfrikModules();
  const liveCount = modules.filter((m) => !m.comingSoon).length;

  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-black overflow-hidden border-t border-white/[0.08]">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-14 max-w-3xl flex items-start gap-5">
          <div className="bg-white rounded-xl p-2.5 flex-shrink-0 mt-1">
            <img src="/assets/images/liafrik-official.png" alt="LiAfrik" className="w-11 h-auto md:w-14 object-contain" />
          </div>
          <div>
            <span className="animate-on-scroll section-label">{t.products.label}</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-5xl font-semibold tracking-tight text-white text-balance">
              {t.products.title}
            </h2>
            <p className="animate-on-scroll animate-on-scroll-delay-2 mt-4 text-[#8A8F98] text-sm md:text-base leading-relaxed max-w-xl">
              {t.products.subtitle}
            </p>
          </div>
        </div>

        {/* Two overlapping dark panels, Linear-style */}
        <div className="animate-on-scroll animate-on-scroll-delay-3 relative mb-16">
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-4">
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0B0C0E] p-6 md:p-8 overflow-hidden">
              <p className="text-xs text-[#5E6169] font-mono mb-6">{t.products.flagshipName} — {liveCount} {lang === 'FR' ? 'modules actifs' : 'live modules'}</p>
              <div className="space-y-3">
                {modules.slice(0, 6).map((m) => (
                  <div key={m.slug} className="flex items-center gap-3 py-2 border-b border-white/[0.06] last:border-b-0">
                    <ModuleIcon name={m.icon} color={m.comingSoon ? '#5E6169' : m.color} logo={m.logo} alt={m.name} size={16} />
                    <span className="text-sm font-medium text-white flex-1">{m.name}</span>
                    <span className="text-[11px] text-[#5E6169]">{m.comingSoon ? (lang === 'FR' ? 'Bientôt' : 'Soon') : tr(m.category, lang)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0B0C0E] p-6 md:p-8 overflow-hidden flex flex-col">
              <CircuitLines className="absolute -top-4 -right-8 w-64 h-32 pointer-events-none" opacity={0.15} />
              <p className="relative text-xs text-[#5E6169] font-mono mb-6">app.liafrik.com</p>
              <div className="relative flex-1 grid grid-cols-3 gap-3 content-start">
                {modules.slice(6).map((m) => (
                  <div key={m.slug} className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <ModuleIcon name={m.icon} color={m.comingSoon ? '#5E6169' : m.color} logo={m.logo} alt={m.name} size={16} />
                    <span className="text-[11px] font-medium text-white leading-tight">{m.name}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://liafrik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:gap-2.5 transition-all w-fit"
              >
                {lang === 'FR' ? 'Voir sur liafrik.com' : 'View on liafrik.com'} <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
            {t.products.cta}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Where We Work ────────────────────────────────────────────────────────────

// All-world country codes (ISO 3166-1 alpha-2) for the scrolling flags banner
const allCountryCodes = [
  'us','gb','fr','de','es','it','pt','nl','be','ch','at','se','no','dk','fi','pl','ie','gr','cz','hu',
  'ma','dz','tn','eg','ng','gh','ci','sn','cm','ke','za','et','ug','tz','rw','ao','zm','mz','cd','bf','ml',
  'ae','sa','qa','kw','bh','om','jo','lb','tr','il',
  'cn','jp','kr','in','id','my','sg','th','vn','ph','pk','bd',
  'ca','mx','br','ar','cl','co','pe',
  'au','nz',
  'ru','ua','ro','bg',
];

function WhereWeWorkSection() {
  const { t, lang } = useLang();
  const ref = useScrollAnimation();

  const featuredLocations = [
    { slug: 'e-commerce-cameroun', country: 'Cameroun', lang: 'fr', code: 'cm' },
    { slug: 'digital-agency-nigeria', country: 'Nigeria', lang: 'en', code: 'ng' },
    { slug: 'digital-agency-united-arab-emirates', country: 'UAE', lang: 'en', code: 'ae' },
    { slug: 'agence-digitale-cote-divoire', country: 'Côte d\'Ivoire', lang: 'fr', code: 'ci' },
    { slug: 'ecommerce-agency-kenya', country: 'Kenya', lang: 'en', code: 'ke' },
    { slug: 'creation-site-web-senegal', country: 'Sénégal', lang: 'fr', code: 'sn' },
  ];

  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-[#0B0C0E] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <span className="animate-on-scroll section-label">{lang === 'FR' ? 'OÙ NOUS OPÉRONS' : 'WHERE WE WORK'}</span>
          <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-xl md:text-3xl font-semibold tracking-tight text-white text-balance">
            {lang === 'FR' ? 'Afrique, EAU & Marché Global' : 'Africa, UAE & Global Markets'}
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 mt-3 text-[#8A8F98] text-sm leading-relaxed">
            {lang === 'FR'
              ? 'Nous construisons des écosystèmes digitaux pour les entreprises à travers l\'Afrique francophone et anglophone, les EAU, et au-delà.'
              : 'We build digital ecosystems for businesses across Francophone and Anglophone Africa, the UAE, and beyond.'}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {featuredLocations.map((loc, i) => (
            <Link
              key={loc.slug}
              to={`/${loc.lang}/${loc.slug}`}
              className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)} group flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full bg-black border border-white/[0.08] hover:border-white/[0.24] hover:shadow-md transition-all duration-300`}
            >
              <img
                src={`https://flagcdn.com/w80/${loc.code}.png`}
                alt={loc.country}
                loading="lazy"
                className="w-8 h-8 rounded-full object-cover border border-white/[0.08] flex-shrink-0"
              />
              <span className="text-sm font-semibold text-white group-hover:text-white transition-colors whitespace-nowrap">{loc.country}</span>
            </Link>
          ))}
        </div>

        {/* Scrolling world flags banner */}
        <div className="relative overflow-hidden py-2" style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
          <div className="flex w-max animate-marquee">
            {[...allCountryCodes, ...allCountryCodes, ...allCountryCodes].map((code, i) => (
              <img
                key={i}
                src={`https://flagcdn.com/w80/${code}.png`}
                alt={code}
                loading="lazy"
                className="w-8 h-8 rounded-full object-cover border border-white/[0.08] flex-shrink-0 mx-2"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <TrustpilotBadge variant="light" size="md" />
          <Link to="/contact" className="btn-outline inline-flex items-center gap-2 group" data-cta="where-we-work-contact">
            {lang === 'FR' ? 'Voir tous les pays' : 'View all countries'}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Insights Preview ─────────────────────────────────────────────────────────

function InsightsSection() {
  const { t, lang } = useLang();
  const ref = useScrollAnimation();

  const images = [
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];
  const slugs = ['why-your-website-is-losing-clients', 'building-ecommerce-that-scales', 'digital-ecosystem-advantage'];
  const readTimes = ['5 min read', '7 min read', '6 min read'];

  return (
    <section ref={ref} className="relative py-14 md:py-20 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="animate-on-scroll section-label">{t.blog.label}</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-2xl md:text-3xl font-semibold tracking-tight text-white text-balance">
              {lang === 'FR' ? 'Insights & Stratégie' : 'Insights & Strategy'}
            </h2>
          </div>
          <Link to="/blog" className="animate-on-scroll animate-on-scroll-delay-2 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-white transition-colors group">
            {lang === 'FR' ? 'Tous les articles' : 'All articles'}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.blog.articles.map((a, i) => (
            <article key={slugs[i]} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} group`}>
              <Link to={`/blog/${slugs[i]}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 mb-5">
                  <img src={images[i]} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 bg-black/90 text-white text-xs uppercase tracking-widest px-3 py-1 font-semibold rounded-full backdrop-blur-sm">{a.category}</span>
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
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  const { t, lang } = useLang();
  const ref = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className="relative py-16 md:py-28 bg-[#0B0C0E] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="animate-on-scroll section-label text-[#8A8F98] justify-center">{t.cta.label}</span>
        <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-white tracking-tight text-balance">
          {t.cta.title}
        </h2>
        <p className="animate-on-scroll animate-on-scroll-delay-2 text-[#8A8F98] text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          {t.cta.body}
        </p>
        <p className="animate-on-scroll animate-on-scroll-delay-3 mt-4 text-accent-400 font-semibold text-sm md:text-base">{t.cta.highlight}</p>
        <div className="animate-on-scroll animate-on-scroll-delay-4 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group animate-pulse-glow">
            {t.cta.cta}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/pricing" className="btn-outline inline-flex items-center justify-center gap-2">
            {lang === 'FR' ? 'Voir les tarifs' : 'View pricing'}
          </Link>
          <a
            href={`https://wa.me/971503857203?text=${encodeURIComponent(
              lang === 'FR'
                ? 'Bonjour LIYAH GROUP, je souhaite un diagnostic business gratuit.'
                : 'Hello LIYAH GROUP, I\'d like a free business diagnostic.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="diagnostic-whatsapp"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutSummary />
      <ServicesSummary />
      <IndustriesSection />
      <PortfolioPreview />
      <TechnologiesSection />
      <ProductsSection />
      <WhereWeWorkSection />
      <ProcessSection />
      <WhyChooseUs />
      <FaqPreview />
      <InsightsSection />
      <FinalCTA />
    </>
  );
}
