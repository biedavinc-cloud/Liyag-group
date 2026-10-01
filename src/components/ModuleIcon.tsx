import {
  Store, ShoppingBag, RefreshCw, Users, Briefcase, UtensilsCrossed,
  Cross, Home, Coins, GraduationCap, Pill, Wallet, ShoppingCart,
  BarChart3, Route, Boxes, Globe, Layers, DollarSign, Target, type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  Store, ShoppingBag, RefreshCw, Users, Briefcase, UtensilsCrossed,
  Cross, Home, Coins, GraduationCap, Pill, Wallet, ShoppingCart,
  BarChart3, Route, Globe, Layers, DollarSign, Target,
};

interface ModuleIconProps {
  name: string;
  color: string;
  size?: number;
  logo?: string;
  alt?: string;
}

export default function ModuleIcon({ name, color, size = 24, logo, alt }: ModuleIconProps) {
  if (logo) {
    return (
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-2">
        <img src={logo} alt={alt ?? name} className="w-full h-full object-contain" loading="lazy" />
      </div>
    );
  }
  const Icon = ICONS[name] ?? Boxes;
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: `${color}1A` }}
    >
      <Icon size={size} color={color} strokeWidth={1.75} />
    </div>
  );
}
