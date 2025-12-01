// src/lib/analytics.ts
import { analyticsConfig } from '@/config/analytics';

// Type declarations
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Helper to safely push to DataLayer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pushToDataLayer = (event: string, data: any = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
    });
  }
};

// Google Analytics 4 (Handled by GTM now)
export const initGA = () => {
  // Logic moved to GTM
};

// Track page views
export const trackPageView = (url: string) => {
  // GTM handles basic page views automatically.
  // We push this just in case you want to trigger specific virtual pageviews in GTM.
  pushToDataLayer('page_view', { page_path: url });
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  pushToDataLayer(action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Conversions - Updated to use GTM Events
export const trackPhoneConversion = () => {
  console.log('📞 Phone click tracked');
  pushToDataLayer('phone_click', {
    event_category: 'engagement',
    event_label: 'phone_button',
    conversion_type: 'phone'
  });
};

export const trackWhatsAppConversion = () => {
  console.log('💬 WhatsApp click tracked');
  pushToDataLayer('whatsapp_click', {
    event_category: 'engagement',
    event_label: 'whatsapp_button',
    conversion_type: 'whatsapp'
  });
};

export const trackFormConversion = () => {
  console.log('📝 Form submit tracked');
  pushToDataLayer('form_submit', {
    event_category: 'engagement',
    event_label: 'contact_form',
    conversion_type: 'form'
  });
};

// Facebook Pixel (Keep manual if you haven't moved this to GTM yet)
export const initFBPixel = () => {
  if (analyticsConfig.facebook.enabled && typeof window !== 'undefined' && window.fbq) {
    window.fbq('init', analyticsConfig.facebook.pixelId);
    window.fbq('track', 'PageView');
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const trackFBEvent = (eventName: string, data?: any) => {
  if (analyticsConfig.facebook.enabled && typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  }
};