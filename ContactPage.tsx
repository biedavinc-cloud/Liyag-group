import { useState, FormEvent } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle, AlertCircle, Loader2, User } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';
import TrustpilotBadge from '@/components/TrustpilotBadge';

type Status = 'idle' | 'loading' | 'success' | 'error';

const FORM_ENDPOINT = 'https://formsubmit.co/info@liyahgroup.me';

export default function ContactPage() {
  const { t } = useLang();
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', message: '', service: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const e: { name?: string; email?: string; message?: string } = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }
    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('message', form.message);
      formData.append('service', form.service || 'General inquiry');
      formData.append('_subject', `New inquiry from ${form.name} — LIYAH GROUP`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', service: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = 'w-full bg-[#0B0C0E] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-[#5E6169] focus:border-white/[0.16] focus:outline-none focus:ring-2 focus:ring-white/[0.16] transition-all duration-200';

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
            <form onSubmit={onSubmit} className="bg-black border border-white/[0.08] rounded-2xl p-8 space-y-5 shadow-xl shadow-black/40">
              <input type="hidden" name="_subject" value="New inquiry — LIYAH GROUP" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#C9CCD1] mb-2">Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5E6169]" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`${inputClass} pl-10 ${errors.name ? 'border-red-400' : ''}`}
                    placeholder="Your full name"
                  />
                </div>
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#C9CCD1] mb-2">Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5E6169]" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`${inputClass} pl-10 ${errors.email ? 'border-red-400' : ''}`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#C9CCD1] mb-2">Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={`${inputClass} ${errors.message ? 'border-red-400' : ''}`}
                >
                  <option value="">Select a service...</option>
                  <option value="Digital Ecosystem">Build Scalable Digital Ecosystems</option>
                  <option value="Monetization">Monetize Brands & Influence</option>
                  <option value="Growth Strategy">Strategic Growth & Execution</option>
                  <option value="Courses">Business Education Programs</option>
                  <option value="Mentoring">1-on-1 Business Mentoring</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-[#C9CCD1] mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className={`${inputClass} ${errors.message ? 'border-red-400' : ''} resize-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <>Send Message <Send size={14} /></>
                )}
              </button>

              {status === 'success' && (
                <p className="flex items-center justify-center gap-2 text-sm text-green-600 animate-fade-in">
                  <CheckCircle size={16} /> Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center justify-center gap-2 text-sm text-red-500 animate-fade-in">
                  <AlertCircle size={16} /> Something went wrong. Please try again or email us directly at info@liyahgroup.me
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
