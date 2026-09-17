import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lang, translations, Translation } from '@/i18n/translations';

const STORAGE_KEY = 'liyah-lang';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translation;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'EN';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'EN' || stored === 'FR') return stored;
  const browser = navigator.language.slice(0, 2).toUpperCase();
  return browser === 'FR' ? 'FR' : 'EN';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'FR' ? 'fr' : 'en';
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
  };

  const value: LangContextValue = { lang, setLang, t: translations[lang] };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
