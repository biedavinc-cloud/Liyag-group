import { Star, ExternalLink } from 'lucide-react';
import { useLang } from '@/i18n/LangContext';

const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/liyahgroup.me';

interface TrustpilotBadgeProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
  showText?: boolean;
}

export default function TrustpilotBadge({ variant = 'light', size = 'md', showText = true }: TrustpilotBadgeProps) {
  const { t } = useLang();
  const isDark = variant === 'dark';
  const isSm = size === 'sm';

  return (
    <a
      href={TRUSTPILOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 ${
        isDark
          ? 'bg-slate-800/50 border-slate-700 hover:border-white/[0.16] hover:bg-slate-800'
          : 'bg-black border-white/[0.08] hover:border-white/[0.24] hover:shadow-md hover:shadow-black/40'
      }`}
      aria-label={t.trustbar.ariaLabel}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={isSm ? 12 : 14}
              className="text-[#00b67a] fill-[#00b67a] group-hover:scale-110 transition-transform"
              style={{ transitionDelay: `${i * 30}ms` }}
            />
          ))}
        </div>
        {showText && (
          <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDark ? 'text-[#5E6169]' : 'text-[#8A8F98]'}`}>
            {t.trustbar.verified}
          </span>
        )}
      </div>
      <div className={`h-8 w-px ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />
      <div className="flex flex-col">
        <span className={`font-bold ${isSm ? 'text-sm' : 'text-base'} ${isDark ? 'text-white' : 'text-white'}`}>
          Trustpilot
        </span>
        {showText && (
          <span className={`text-[10px] ${isDark ? 'text-[#8A8F98]' : 'text-[#5E6169]'}`}>
            {t.trustbar.ratingText}
          </span>
        )}
      </div>
      <ExternalLink size={isSm ? 12 : 14} className={`opacity-40 group-hover:opacity-100 transition-opacity ${isDark ? 'text-accent-400' : 'text-white'}`} />
    </a>
  );
}
