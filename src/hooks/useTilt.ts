import { useRef, MouseEvent, useState } from 'react';

export function useTilt<T extends HTMLElement>(max = 8) {
  const ref = useRef<T>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMouseMove = (e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -2 * max;
    const ry = (px - 0.5) * 2 * max;
    setStyle({
      transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const onMouseLeave = () => {
    setStyle({
      transform: 'perspective(800px) rotateX(0) rotateY(0) scale(1)',
      transition: 'transform 0.4s ease-out',
    });
  };

  return { ref, style, onMouseMove, onMouseLeave };
}
