import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';

interface NavItem {
  label: string;
  path: string;
}

export default function Header() {
  const { lang, setLang, t } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems: NavItem[] = [
    { label: t.header.services, path: '/services' },
    { label: t.header.productsChildren.overview, path: '/saas' },
    { label: t.header.pricing, path: '/pricing' },
    { label: t.header.about, path: '/about' },
  ];

  const handleNav = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? 'bg-black/80 border-b border-white/[0.08]' : 'bg-black/40 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 group flex items-center transition-transform duration-300 group-hover:scale-105">
          <img src="/assets/images/liyah-logo-dark-bg.png" alt="LIYAH GROUP" className="h-8 md:h-9 w-auto object-contain" />
        </Link>

        {/* Desktop Nav — flat links, Linear-style */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.path)}
              className="text-[13px] font-medium text-[#8A8F98] hover:text-white transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="w-px h-5 bg-white/[0.12]" />
          <button
            onClick={() => setLang(lang === 'FR' ? 'EN' : 'FR')}
            className="text-[13px] font-medium text-[#8A8F98] hover:text-white transition-colors duration-200"
          >
            {lang === 'FR' ? 'EN' : 'FR'}
          </button>
          <button
            onClick={() => handleNav('/contact')}
            className="bg-white text-black text-[13px] font-semibold px-4 py-1.5 rounded-full hover:bg-[#E4E4E7] transition-colors duration-200"
          >
            {t.header.cta}
          </button>
        </div>

        {/* Mobile burger */}
        <button className="lg:hidden p-2 text-[#C9CCD1]" onClick={() => setMobileOpen((o) => !o)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-white/[0.08] px-4 py-4 space-y-1 shadow-xl animate-dropdown max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.path)}
              className="block w-full text-left text-sm font-medium text-[#C9CCD1] py-3 border-b border-white/[0.06]"
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center justify-between pt-4">
            <button
              onClick={() => setLang(lang === 'FR' ? 'EN' : 'FR')}
              className="text-sm font-medium text-[#8A8F98]"
            >
              {lang === 'FR' ? 'EN' : 'FR'}
            </button>
            <button onClick={() => handleNav('/contact')} className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full">
              {t.header.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
