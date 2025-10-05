import { analyticsConfig } from '@/config/analytics';

// Google Analytics 4
export const initGA = () => {
  if (analyticsConfig.ga.enabled && typeof window !== 'undefined') {
    window.gtag('config', analyticsConfig.ga.id, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (analyticsConfig.ga.enabled && typeof window !== 'undefined') {
    window.gtag('config', analyticsConfig.ga.id, {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (analyticsConfig.ga.enabled && typeof window !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Google Ads Conversion Tracking
export const trackConversion = (conversionLabel: string) => {
  if (analyticsConfig.googleAds.enabled && typeof window !== 'undefined') {
    window.gtag('event', 'conversion', {
      send_to: `${analyticsConfig.googleAds.conversionId}/${conversionLabel}`,
    });
  }
};

export const trackPhoneConversion = () => {
  trackConversion(analyticsConfig.googleAds.conversionLabels.phone);
  trackEvent('phone_click', 'engagement', 'phone_button');
};

export const trackWhatsAppConversion = () => {
  trackConversion(analyticsConfig.googleAds.conversionLabels.whatsapp);
  trackEvent('whatsapp_click', 'engagement', 'whatsapp_button');
};

export const trackFormConversion = () => {
  trackConversion(analyticsConfig.googleAds.conversionLabels.form);
  trackEvent('form_submit', 'engagement', 'contact_form');
};

// Facebook Pixel
export const initFBPixel = () => {
  if (analyticsConfig.facebook.enabled && typeof window !== 'undefined') {
    window.fbq('init', analyticsConfig.facebook.pixelId);
    window.fbq('track', 'PageView');
  }
};

export const trackFBEvent = (eventName: string, data?: any) => {
  if (analyticsConfig.facebook.enabled && typeof window !== 'undefined') {
    window.fbq('track', eventName, data);
  }
};

// Type declarations for global objects
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}