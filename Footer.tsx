import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, FileText, MessageCircle, Phone, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';
import TrustpilotBadge from '@/components/TrustpilotBadge';
import { CircuitLines } from '@/components/CircuitLines';

const tiktokSvg = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.62c.3 0 .6.05.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.12z" />
  </svg>
);

const socialLinks = [
  { icon: <Facebook size={16} strokeWidth={1.5} />, href: 'https://www.facebook.com/share/18aFtK1ckw/?mibextid=wwXIfr', label: 'Facebook' },
  { icon: <Instagram size={16} strokeWidth={1.5} />, href: 'https://www.instagram.com/vincent_nogue?igsh=MWR2djd6bHV5bnM5Zg%3D%3D&utm_source=qr', label: 'Instagram' },
  { icon: tiktokSvg, href: 'https://www.tiktok.com/@vinctech', label: 'TikTok' },
  { icon: <Linkedin size={16} strokeWidth={1.5} />, href: 'https://www.linkedin.com/in/vincent-nogue-5a985a207', label: 'LinkedIn' },
  { icon: <MessageCircle size={16} strokeWidth={1.5} />, href: 'https://wa.me/971503857203', label: 'WhatsApp' },
];

const quickLinks = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'SaaS Products', path: '/saas' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Courses', path: '/courses' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

// Uniquement le produit phare + vue d'ensemble ici — la liste complète des 11
// modules vit déjà sur /saas, pas besoin de la dupliquer en longueur dans le footer.
const productLinks = [
  { label: 'All SaaS Products', path: '/saas' },
  { label: 'LiAfrik Platform', path: '/saas/liafrik' },
];

const FOOTER_FORM_ENDPOINT = 'https://formsubmit.co/info@liyahgroup.me';

export default function Footer() {
  const { t, lang } = useLang();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('_subject', 'New newsletter signup — LIYAH GROUP');
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      const response = await fetch(FOOTER_FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="relative bg-black text-[#8A8F98] overflow-hidden border-t border-white/[0.08]">
      <CircuitLines className="hidden lg:block absolute -top-4 right-8 w-72 h-24 pointer-events-none" opacity={0.1} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-white tracking-tight mb-4">LIYAH GROUP</h3>
            <p className="text-[#5E6169] text-sm leading-relaxed mb-6 max-w-sm">{t.footer.tagline}</p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#8A8F98] hover:text-white hover:bg-white/[0.08] hover:border-white/[0.16] hover:-translate-y-0.5 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <TrustpilotBadge variant="dark" size="sm" showText={false} />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">{lang === 'FR' ? 'Liens Rapides' : 'Quick Links'}</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-[#5E6169] hover:text-white transition-colors text-sm flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">{lang === 'FR' ? 'Produits SaaS' : 'SaaS Products'}</h4>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-[#5E6169] hover:text-white transition-colors text-sm flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@liyahgroup.me" className="flex items-center gap-2.5 text-[#5E6169] hover:text-white transition-colors">
                  <Mail size={14} className="text-[#8A8F98] flex-shrink-0" />
                  info@liyahgroup.me
                </a>
              </li>
              <li>
                <a href="https://wa.me/971503857203" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[#5E6169] hover:text-white transition-colors">
                  <Phone size={14} className="text-[#8A8F98] flex-shrink-0" />
                  +971 50 385 7203
                </a>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/[0.08] space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#8A8F98] mt-0.5 flex-shrink-0" />
                <span className="text-[#5E6169]">Yaoundé - Soa, Cameroon</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#8A8F98] mt-0.5 flex-shrink-0" />
                <span className="text-[#5E6169]">Jumeirah 1, Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter mini — fonctionnel, envoie vers info@liyahgroup.me */}
        <div className="border-t border-white/[0.08] pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#5E6169] text-sm">{t.newsletter.subtitle}</p>
            <form onSubmit={onNewsletterSubmit} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                className="flex-1 md:w-64 bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#5E6169] focus:border-white/[0.24] focus:outline-none transition-colors"
              />
              <button type="submit" disabled={status === 'loading'} className="btn-primary text-sm whitespace-nowrap disabled:opacity-60 flex items-center gap-2">
                {status === 'loading' ? <Loader2 size={14} className="animate-spin" /> : t.newsletter.button}
              </button>
            </form>
          </div>
          {status === 'success' && (
            <p className="flex items-center gap-2 text-xs text-green-500 mt-3">
              <CheckCircle size={13} /> {lang === 'FR' ? 'Merci ! Vous êtes inscrit.' : 'Thanks! You\'re subscribed.'}
            </p>
          )}
          {status === 'error' && (
            <p className="text-xs text-red-400 mt-3">
              {lang === 'FR' ? 'Merci de renseigner un email valide.' : 'Please enter a valid email.'}
            </p>
          )}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8A8F98] leading-relaxed text-center md:text-left">{t.footer.copyright}</p>
          <Link to="/legal" className="inline-flex items-center gap-2 text-xs text-[#8A8F98] hover:text-white transition-colors">
            <FileText size={12} /> {t.footer.legal}
          </Link>
        </div>
      </div>
    </footer>
  );
}
