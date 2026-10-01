import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle, X } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';

const WHATSAPP_NUMBER = '971503857203';

function getContextMessage(pathname: string, lang: 'EN' | 'FR'): string {
  const isFR = lang === 'FR';
  const prefix = isFR
    ? 'Bonjour LIYAH GROUP, '
    : 'Hello LIYAH GROUP, ';

  if (pathname.startsWith('/services/')) {
    return prefix + (isFR
      ? 'je suis intéressé(e) par vos services de création. Pouvez-vous me rappeler ?'
      : 'I\'m interested in your services. Can you get back to me?');
  }
  if (pathname.startsWith('/saas')) {
    return prefix + (isFR
      ? 'je souhaite en savoir plus sur vos produits SaaS. Pouvez-vous me contacter ?'
      : 'I\'d like to learn more about your SaaS products. Can you contact me?');
  }
  if (pathname.startsWith('/locations/')) {
    return prefix + (isFR
      ? 'je souhaite discuter de mon projet dans mon pays. Pouvez-vous me rappeler ?'
      : 'I\'d like to discuss my project in my country. Can you get back to me?');
  }
  if (pathname === '/contact') {
    return prefix + (isFR
      ? 'je souhaite demander une proposition pour mon projet.'
      : 'I\'d like to request a proposal for my project.');
  }
  return prefix + (isFR
    ? 'je souhaite discuter de mon projet digital. Pouvez-vous me rappeler ?'
    : 'I\'d like to discuss my digital project. Can you get back to me?');
}

export default function WhatsAppButton() {
  const { lang } = useLang();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const message = getContextMessage(location.pathname, lang);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const tooltipText = lang === 'FR'
    ? 'Discutons de votre projet'
    : 'Let\'s talk about your project';

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {open && (
        <div className="animate-fade-up bg-black rounded-2xl shadow-2xl shadow-slate-300/50 border border-white/[0.08] p-5 max-w-xs">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">LIYAH GROUP</p>
                <p className="text-xs text-green-600 font-medium">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[#5E6169] hover:text-[#8A8F98] transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-[#8A8F98] mb-4 leading-relaxed">
            {lang === 'FR'
              ? 'Une question sur nos services, nos produits SaaS ou votre projet ? Écrivez-nous directement sur WhatsApp.'
              : 'Have a question about our services, SaaS products, or your project? Message us directly on WhatsApp.'}
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-float"
            data-page={location.pathname}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle size={16} />
            {lang === 'FR' ? 'Discuter sur WhatsApp' : 'Chat on WhatsApp'}
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="group relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
        aria-label={tooltipText}
      >
        {!open && (
          <span className="absolute right-full mr-3 whitespace-nowrap bg-slate-900 text-white text-xs font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
            {tooltipText}
          </span>
        )}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        {open ? (
          <X size={24} className="text-white relative z-10" />
        ) : (
          <MessageCircle size={26} className="text-white relative z-10" />
        )}
      </button>
    </div>
  );
}
