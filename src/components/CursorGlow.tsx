import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Pas de halo sur les appareils tactiles (mobile / tablette)
    setEnabled(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const el = ref.current;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (el) {
          el.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
          el.style.opacity = '1';
        }
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[1] w-[600px] h-[600px] rounded-full opacity-0"
      style={{
        background: 'radial-gradient(circle, rgba(212,160,23,0.05) 0%, transparent 65%)',
        transition: 'opacity 0.4s ease',
        willChange: 'transform',
      }}
    />
  );
}
