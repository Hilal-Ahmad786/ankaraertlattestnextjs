'use client';

import { useEffect } from 'react';

/** One observer reveals decorative motion on a pilot city page; all content is visible without it. */
export default function CityRevealScope() {
  useEffect(() => {
    const scope = document.querySelector<HTMLElement>('.city-pilot');
    if (!scope || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const targets = scope.querySelectorAll<HTMLElement>('[data-city-reveal]');
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.revealed = 'true';
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return null;
}
