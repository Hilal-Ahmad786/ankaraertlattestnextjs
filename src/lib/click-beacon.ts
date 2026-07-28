// First-party click/visit recording — stores events in our own Postgres via
// /api/track/click, independent of GTM/Ads. Never blocks or throws; no-ops
// cleanly on the server or when localStorage is unavailable.

interface Attribution {
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
}

const SID_KEY = 'ap_sid';
const ATTR_KEY = 'ap_attr';

function clickSid(): string | undefined {
  try {
    let v = localStorage.getItem(SID_KEY);
    if (!v) {
      v =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2);
      localStorage.setItem(SID_KEY, v);
    }
    return v;
  } catch {
    return undefined;
  }
}

// Persists gclid/utm params from the landing URL so every later conversion
// (phone/WhatsApp click) can be tied back to the campaign that brought the
// visitor. Last-click attribution: only a NEW campaign click overwrites.
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid') || params.get('gbraid') || params.get('wbraid');
    const utm_source = params.get('utm_source');
    if (gclid || utm_source) {
      const attr: Attribution = {
        gclid: gclid ?? undefined,
        utm_source: utm_source ?? undefined,
        utm_medium: params.get('utm_medium') ?? undefined,
        utm_campaign: params.get('utm_campaign') ?? undefined,
        referrer: document.referrer || undefined,
      };
      localStorage.setItem(ATTR_KEY, JSON.stringify(attr));
    } else if (!localStorage.getItem(ATTR_KEY) && document.referrer) {
      localStorage.setItem(ATTR_KEY, JSON.stringify({ referrer: document.referrer }));
    }
  } catch {
    /* never block */
  }
}

function storedAttribution(): Attribution {
  try {
    const raw = localStorage.getItem(ATTR_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

export function beaconClick(event: string, location?: string): void {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
  try {
    const attr = storedAttribution();
    const payload = JSON.stringify({
      event,
      location: location ?? null,
      path: window.location.pathname,
      sessionId: clickSid(),
      gclid: attr.gclid ?? null,
      utmSource: attr.utm_source ?? null,
      utmMedium: attr.utm_medium ?? null,
      utmCampaign: attr.utm_campaign ?? null,
      referrer: attr.referrer ?? null,
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        '/api/track/click',
        new Blob([payload], { type: 'application/json' })
      );
    } else {
      void fetch('/api/track/click', {
        method: 'POST',
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    /* never block the click */
  }
}
