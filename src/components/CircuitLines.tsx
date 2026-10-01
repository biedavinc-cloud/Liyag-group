interface CircuitAccentProps {
  className?: string;
  color?: string;
  opacity?: number;
}

/** Abstract circuit-trace decoration (lines + connector nodes), echoing the
 * Liafrik logo's visual language. Purely decorative, positioned absolutely
 * by the caller via `className`. */
export function CircuitLines({ className = '', color = '#D4A017', opacity = 0.35 }: CircuitAccentProps) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      className={className}
      style={{ opacity }}
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke={color} strokeWidth="1.5">
        <path d="M40 100 L180 100 L210 70 L340 70" />
        <path d="M40 100 L180 100 L210 130 L340 130" />
        <path d="M180 100 L260 100 L285 115 L340 115" />
      </g>
      <g fill={color}>
        <circle cx="40" cy="100" r="6" />
        <circle cx="340" cy="70" r="6" />
        <circle cx="340" cy="130" r="6" />
        <circle cx="340" cy="115" r="4" />
        <circle cx="210" cy="70" r="3" />
        <circle cx="210" cy="130" r="3" />
      </g>
    </svg>
  );
}

/** Small corner node accent for premium cards — a single dot + short trace. */
export function CircuitCorner({ className = '', color = '#D4A017' }: CircuitAccentProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className}>
      <path d="M0 20 L30 20 L40 30 L60 30" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <circle cx="60" cy="30" r="3" fill={color} opacity="0.6" />
    </svg>
  );
}
