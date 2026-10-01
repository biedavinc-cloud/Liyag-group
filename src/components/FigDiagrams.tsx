interface FigProps {
  color?: string;
  opacity?: number;
}

/** Small filled node marking a vertex/connection point — the signature
 * touch that makes hand-drawn line diagrams read as "technical". */
function Node({ cx, cy, r = 2.5, color }: { cx: number; cy: number; r?: number; color: string }) {
  return <circle cx={cx} cy={cy} r={r} fill={color} />;
}

const strokeProps = (color: string) => ({
  stroke: color,
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  fill: 'none',
});

function Fig01({ color = '#FFFFFF' }: FigProps) {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full">
      <g {...strokeProps(color)}>
        <path d="M80 20 L140 45 L80 70 L20 45 Z" />
        <path d="M20 60 L80 85 L140 60" />
        <path d="M20 75 L80 100 L140 75" />
        <path d="M20 90 L80 115 L140 90" />
      </g>
      <Node cx={80} cy={20} color={color} />
      <Node cx={140} cy={45} color={color} />
      <Node cx={20} cy={45} color={color} />
    </svg>
  );
}

function Fig02({ color = '#FFFFFF' }: FigProps) {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full">
      <g {...strokeProps(color)}>
        <path d="M55 20 L90 35 L90 70 L55 55 Z" />
        <path d="M55 20 L20 35 L20 70 L55 55 Z" />
        <path d="M20 35 L55 20 L90 35 L55 50 Z" />
        <path d="M105 55 L140 70 L140 105 L105 90 Z" />
        <path d="M105 55 L70 70 L70 105 L105 90 Z" />
        <path d="M70 70 L105 55 L140 70 L105 85 Z" />
      </g>
      <Node cx={55} cy={20} color={color} />
      <Node cx={105} cy={55} color={color} />
    </svg>
  );
}

function Fig03({ color = '#FFFFFF' }: FigProps) {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full">
      <g {...strokeProps(color)}>
        <circle cx="55" cy="55" r="14" />
        <path d="M55 69 L55 100" />
        <circle cx="105" cy="75" r="10" />
        <path d="M105 85 L105 108" />
        <circle cx="80" cy="35" r="7" />
        <path d="M80 42 L80 60" />
        <path d="M20 118 L140 118" strokeDasharray="2 4" />
      </g>
      <Node cx={55} cy={100} color={color} />
      <Node cx={105} cy={108} color={color} />
    </svg>
  );
}

function Fig04({ color = '#FFFFFF' }: FigProps) {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full">
      <g {...strokeProps(color)}>
        <path d="M30 110 L30 55 L45 55 L45 110" />
        <path d="M60 110 L60 30 L75 30 L75 110" />
        <path d="M90 110 L90 70 L105 70 L105 110" />
        <path d="M120 110 L120 45 L135 45 L135 110" />
        <path d="M20 110 L140 110" />
      </g>
      <Node cx={60} cy={30} r={2} color={color} />
      <Node cx={120} cy={45} r={2} color={color} />
    </svg>
  );
}

function Fig05({ color = '#FFFFFF' }: FigProps) {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full">
      <g {...strokeProps(color)}>
        <ellipse cx="80" cy="70" rx="55" ry="22" />
        <ellipse cx="80" cy="70" rx="30" ry="45" />
      </g>
      <Node cx={80} cy={70} r={4} color={color} />
      <Node cx={135} cy={70} color={color} />
      <Node cx={80} cy={25} color={color} />
      <Node cx={25} cy={70} color={color} />
    </svg>
  );
}

function Fig06({ color = '#FFFFFF' }: FigProps) {
  return (
    <svg viewBox="0 0 160 140" className="w-full h-full">
      <g {...strokeProps(color)}>
        <path d="M25 25 L135 25 L95 70 L95 115 L65 115 L65 70 Z" />
        <path d="M25 25 L65 70 M135 25 L95 70" />
      </g>
      <Node cx={25} cy={25} color={color} />
      <Node cx={135} cy={25} color={color} />
      <Node cx={80} cy={115} color={color} />
    </svg>
  );
}

const FIGS = [Fig01, Fig02, Fig03, Fig04, Fig05, Fig06];

/** Get a FIG-style diagram by index (wraps around), with an optional accent color. */
export function getFig(index: number, color = '#FFFFFF') {
  const Fig = FIGS[index % FIGS.length];
  return <Fig color={color} />;
}

/**
 * Standardized placement wrapper — every usage across the site gets the
 * same size, opacity, and label treatment so the motif reads as a
 * deliberate system rather than ad-hoc decoration. Visible at all
 * breakpoints (scaled down on mobile) instead of desktop-only.
 */
export function SectionFigure({
  index,
  color = '#FFFFFF',
  label,
  className = '',
}: {
  index: number;
  color?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`w-20 h-16 sm:w-28 sm:h-20 ${className}`}>
      {label && <span className="block text-[9px] tracking-widest text-[#5E6169] font-mono mb-1">{label}</span>}
      <div className="w-full h-full opacity-40">{getFig(index, color)}</div>
    </div>
  );
}
