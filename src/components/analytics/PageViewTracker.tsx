'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { beaconClick, captureAttribution } from '@/lib/click-beacon';

/**
 * Records a first-party page view (visit) on every page load and client-side
 * route change, so the admin report counts ALL visitors — not just the ones
 * who click phone/WhatsApp. Bots are filtered server-side.
 *
 * Also captures ad attribution (gclid/utm) from the landing URL so later
 * phone/WhatsApp clicks can be tied back to the campaign.
 */
export default function PageViewTracker() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // Don't count our own admin-panel visits as site traffic
    if (pathname?.startsWith('/admin')) return;

    beaconClick('page_view');

    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      captureAttribution();
    }
  }, [pathname]);

  return null;
}
