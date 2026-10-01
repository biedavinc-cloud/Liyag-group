import { useState, useRef, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, MapPin, Send, CheckCircle, AlertCircle, Loader2, User, Building2, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import TrustpilotBadge from '@/components/TrustpilotBadge';

type Status = 'idle' | 'loading' | 'success' | 'error';
type FieldErrors = { name?: string; email?: string; message?: string };

const FORM_ENDPOINT = 'https://formsubmit.co/info@liyahgroup.me';

// `value` est la valeur envoyée dans l'e-mail reçu (toujours en anglais) ; `label` est ce que voit le visiteur.
const SERVICE_OPTIONS = [
  { value: 'Website design & development', label: { EN: 'Website design & development', FR: 'Création et développement de site web' } },
  { value: 'E-commerce / Shopify', label: { EN: 'E-commerce / Shopify', FR: 'E-commerce / Shopify' } },
  { value: 'SEO & digital growth strategy', label: { EN: 'SEO & digital growth strategy', FR: 'SEO & stratégie de croissance digitale' } },
  { value: 'Liafrik SaaS platform', label: { EN: 'Liafrik SaaS platform', FR: 'Plateforme SaaS Liafrik' } },
  { value: 'Courses & mentoring', label: { EN: 'Courses & mentoring', FR: 'Formations & mentorat' } },
  { value: 'Partnership', label: { EN: 'Partnership', FR: 'Partenariat' } },
  { value: 'Other', label: { EN: 'Other', FR: 'Autre' } },
];

const COPY = {
  EN: {
    name: 'Full name', namePh: 'Your full name',
    email: 'Email', emailPh: 'you@company.com',
    company: 'Company', companyOpt: '(optional)', companyPh: 'Your company or brand',
    service: 'What do you need?', servicePh: 'Select a service…',
    message: 'Message', messagePh: 'Tell us about your project, your goals and your timeline…',
    send: 'Send message', sending: 'Sending…',
    errName: 'Please enter your name.', errEmail: 'Please enter a valid email address.', errMessage: 'Please write at least 10 characters.',
    errSend: 'We could not send your message. Please try again or email us at info@liyahgroup.me.',
    okTitle: 'Message sent', okBody: 'Thank you. We will get back to you within 24 hours.', another: 'Send another message',
    privacy: 'Your details are only used to reply to your request.', legal: 'Legal information',
  },
  FR: {
    name: 'Nom complet', namePh: 'Votre nom complet',
    email: 'E-mail', emailPh: 'vous@entreprise.com',
    company: 'Entreprise', companyOpt: '(facultatif)', companyPh: 'Votre entreprise ou marque',
    service: 'Votre besoin', servicePh: 'Choisissez un service…',
    message: 'Message', messagePh: 'Parlez-nous de votre projet, de vos objectifs et de votre calendrier…',
    send: 'Envoyer le message', sending: 'Envoi en cours…',
    errName: 'Merci de renseigner votre nom.', errEmail: 'Merci de saisir une adresse e-mail valide.', errMessage: 'Merci d\u2019écrire au moins 10 caractères.',
    errSend: 'Votre message n\u2019a pas pu être envoyé. Réessayez ou écrivez-nous à info@liyahgroup.me.',
    okTitle: 'Message envoyé', okBody: 'Merci. Nous vous répondons sous 24 heures.', another: 'Envoyer un autre message',
    privacy: 'Vos informations servent uniquement à répondre à votre demande.', legal: 'Mentions légales',
  },
} as const;

const EMPTY_FORM = { name: '', email: '', company: '', service: '', message: '' };

export default function ContactPage() {
  const { t, lang } = useLang();
  const c = COPY[lang];
  const ref = useScrollAnimation();
  const [form, setForm] = useState(EMPTY_FORM);
  const [honey, setHoney] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const statusRef = useRef<HTMLDivElement>(null);

  const validate = () => {
    const e: FieldErrors = {};
    if (!form.name.trim()) e.name = c.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = c.errEmail;
    if (form.message.trim().length < 10) e.message = c.errMessage;
    setErrors(e);
    return e;
  };

  const set = (key: keyof typeof EMPTY_FORM) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key as keyof FieldErrors]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (honey) return; // robot détecté : on ignore silencieusement
    const found = validate();
    if (Object.keys(found).length > 0) {
      // Place le focus sur le premier champ en erreur (accessibilité clavier / lecteurs d'écran)
      const first = (['name', 'email', 'message'] as const).find((k) => found[k]);
      if (first) document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setStatus('loading');

    try {
      const service = form.service || 'General inquiry';
      const formData = new FormData();
      formData.append('name', form.name.trim());
      formData.append('email', form.email.trim());
      formData.append('company', form.company.trim() || '—');
      formData.append('service', service);
      formData.append('message', form.message.trim());
      formData.append('language', lang);
      formData.append('_subject', `New inquiry from ${form.name.trim()} — ${service} — LIYAH GROUP`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      formData.append('_honey', honey);

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        setForm(EMPTY_FORM);
        setTimeout(() => statusRef.current?.focus(), 0);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = 'w-full bg-[#0B0C0E] border border-white/[0.12] rounded-lg px-4 py-3 text-sm text-white placeholder-[#5E6169] focus:border-white/[0.32] focus:outline-none focus:ring-2 focus:ring-white/[0.16] transition-all duration-200';
  const labelClass = 'block text-xs uppercase tracking-widest font-bold text-[#C9CCD1] mb-2';
  const errClass = 'border-red-400/70 focus:border-red-400 focus:ring-red-400/30';

  return (
    <>
      <PageHero label={t.header.contact} title={t.header.contact} subtitle={t.outcomes.subtitle} />

      <section ref={ref} className="relative py-14 md:py-20 bg-[#0B0C0E] overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <div>
            <span className="animate-on-scroll section-label">{t.footer.contactTitle}</span>
            <h2 className="animate-on-scroll animate-on-scroll-delay-1 text-xl md:text-2xl font-semibold text-white mb-8 leading-tight text-balance">
              {t.cta.title}
            </h2>
            <p className="animate-on-scroll animate-on-scroll-delay-2 text-[#8A8F98] text-sm md:text-base leading-relaxed mb-8">
              {t.cta.body}
            </p>

            <div className="animate-on-scroll animate-on-scroll-delay-3 mb-8">
              <TrustpilotBadge variant="light" size="md" />
            </div>

            <div className="animate-on-scroll animate-on-scroll-delay-3 space-y-4">
              <a href="mailto:info@liyahgroup.me" className="group flex items-center gap-3 text-[#C9CCD1] hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-white/[0.16] transition-all duration-300">
                  <Mail size={16} className="text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium">info@liyahgroup.me</span>
              </a>
              <a href="mailto:ceo@liyahgroup.me" className="group flex items-center gap-3 text-[#C9CCD1] hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-white/[0.16] transition-all duration-300">
                  <Mail size={16} className="text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium">ceo@liyahgroup.me</span>
              </a>
              <a href="https://wa.me/971503857203" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[#C9CCD1] hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-white/[0.16] transition-all duration-300">
                  <MessageCircle size={16} className="text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium">+971 50 385 7203 (WhatsApp)</span>
              </a>
            </div>

            <div className="animate-on-scroll animate-on-scroll-delay-4 mt-8 space-y-3">
              <h3 className="text-white text-xs uppercase tracking-widest font-bold mb-3">{t.footer.officesTitle}</h3>
              {t.footer.offices.map((office) => (
                <div key={office} className="flex items-start gap-3 text-[#8A8F98] text-sm">
                  <MapPin size={16} className="text-white mt-0.5 flex-shrink-0" />
                  <span>{office}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="animate-on-scroll animate-on-scroll-delay-2">
            {status === 'success' ? (
              <div
                ref={statusRef}
                tabIndex={-1}
                role="status"
                className="bg-black border border-white/[0.12] rounded-2xl p-8 md:p-10 text-center shadow-xl shadow-black/40 outline-none"
              >
                <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle size={26} className="text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{c.okTitle}</h3>
                <p className="text-sm text-[#8A8F98] leading-relaxed mb-6">{c.okBody}</p>
                <button type="button" onClick={() => setStatus('idle')} className="btn-outline inline-flex items-center justify-center gap-2">
                  {c.another}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="bg-black border border-white/[0.12] rounded-2xl p-6 md:p-8 space-y-5 shadow-xl shadow-black/40">
                {/* Champ piège anti-spam : invisible pour les humains */}
                <input type="text" name="_honey" value={honey} onChange={(e) => setHoney(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>{c.name}</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5E6169] pointer-events-none" />
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={(e) => set('name')(e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'contact-name-err' : undefined}
                        className={`${inputClass} pl-10 ${errors.name ? errClass : ''}`}
                        placeholder={c.namePh}
                      />
                    </div>
                    {errors.name && <p id="contact-name-err" role="alert" className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClass}>{c.email}</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5E6169] pointer-events-none" />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        inputMode="email"
                        required
                        value={form.email}
                        onChange={(e) => set('email')(e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'contact-email-err' : undefined}
                        className={`${inputClass} pl-10 ${errors.email ? errClass : ''}`}
                        placeholder={c.emailPh}
                      />
                    </div>
                    {errors.email && <p id="contact-email-err" role="alert" className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-company" className={labelClass}>
                      {c.company} <span className="normal-case tracking-normal font-normal text-[#5E6169]">{c.companyOpt}</span>
                    </label>
                    <div className="relative">
                      <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5E6169] pointer-events-none" />
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        autoComplete="organization"
                        value={form.company}
                        onChange={(e) => set('company')(e.target.value)}
                        className={`${inputClass} pl-10`}
                        placeholder={c.companyPh}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className={labelClass}>{c.service}</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={(e) => set('service')(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">{c.servicePh}</option>
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label[lang]}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>{c.message}</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={form.message}
                    onChange={(e) => set('message')(e.target.value)}
                    rows={5}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contact-message-err' : undefined}
                    className={`${inputClass} resize-y min-h-[8rem] ${errors.message ? errClass : ''}`}
                    placeholder={c.messagePh}
                  />
                  {errors.message && <p id="contact-message-err" role="alert" className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={16} className="animate-spin" /> {c.sending}</>
                  ) : (
                    <>{c.send} <Send size={14} /></>
                  )}
                </button>

                {status === 'error' && (
                  <p role="alert" className="flex items-start gap-2 text-sm text-red-400 animate-fade-in">
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" /> <span>{c.errSend}</span>
                  </p>
                )}

                <p className="flex items-start gap-2 text-xs text-[#8A8F98] leading-relaxed">
                  <ShieldCheck size={14} className="mt-0.5 flex-shrink-0" />
                  <span>{c.privacy} <Link to="/legal" className="underline underline-offset-2 hover:text-white transition-colors">{c.legal}</Link></span>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
