'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * One-time scroll reveal for page sections (design system: rise 32px and fade
 * in over ~700ms on the base curve, once, via IntersectionObserver).
 *
 * Progressive enhancement: the server HTML is fully visible. Only sections
 * that start below the first screen are marked pending after hydration, so
 * nothing above the fold flashes and crawlers/no-JS users see everything.
 * Users who prefer reduced motion get no reveal at all.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('main section:not([data-reveal])'),
    ).filter((el) => el.getBoundingClientRect().top > window.innerHeight);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = 'done';
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    for (const el of sections) {
      el.dataset.reveal = 'pending';
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      // Never leave content hidden if the route changes mid-reveal.
      for (const el of sections) {
        if (el.dataset.reveal === 'pending') el.dataset.reveal = 'done';
      }
    };
  }, [pathname]);

  return null;
}
