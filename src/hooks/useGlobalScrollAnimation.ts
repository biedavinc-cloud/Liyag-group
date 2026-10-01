import { useEffect, useRef } from 'react';

/**
 * Global scroll animation observer.
 * Call once at the app root. Observes all `.animate-on-scroll` elements
 * across the entire document, including dynamically added ones.
 */
export function useGlobalScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observerRef.current = observer;

    // Observe all existing elements
    const scan = () => {
      document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach((el) => {
        observer.observe(el);
      });
    };
    scan();

    // Re-scan periodically to catch dynamically added elements (route changes)
    const interval = setInterval(scan, 500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);
}
