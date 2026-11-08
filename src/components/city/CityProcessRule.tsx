'use client';

import { useEffect, useRef } from 'react';

/** Decorative sequence marker; the server-rendered step text is always visible. */
export default function CityProcessRule() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        element.dataset.animate = 'true';
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="city-process-rule" aria-hidden="true" />;
}
