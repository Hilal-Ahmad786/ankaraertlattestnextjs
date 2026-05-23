import TagManager from 'react-gtm-module';
import { analyticsConfig } from '@/config/analytics';
import { trackPhoneClick as newTrackPhoneClick, trackWhatsAppClick as newTrackWhatsAppClick, trackLeadFormSubmit } from './tracking';

export const initGTM = () => {
  if (analyticsConfig.gtm.enabled && typeof window !== 'undefined') {
    TagManager.initialize({
      gtmId: analyticsConfig.gtm.id,
    });
  }
};

// GTM Event Types
export interface GTMEvent {
  event: string;
  [key: string]: any;
}

// Push custom events to GTM dataLayer
export const pushGTMEvent = (event: GTMEvent) => {
  if (analyticsConfig.gtm.enabled && typeof window !== 'undefined') {
    TagManager.dataLayer({
      dataLayer: event,
    });
  }
};

// Conversion tracking events (Delegated to new unified tracking.ts)
export const trackPhoneClick = (location: string = 'unknown') => {
  newTrackPhoneClick(location, 'Phone', typeof window !== 'undefined' ? window.location.pathname : '');
};

export const trackWhatsAppClick = (location: string = 'unknown') => {
  newTrackWhatsAppClick(location, 'WhatsApp', typeof window !== 'undefined' ? window.location.pathname : '');
};

export const trackFormSubmit = (formName: string) => {
  // Keeping old signature for backward compatibility, but we don't have form data here.
  // Real forms should use trackLeadFormSubmit from tracking.ts directly.
  pushGTMEvent({
    event: 'form_submit',
    event_category: 'engagement',
    event_label: formName,
    value: 1,
  });
};

export const trackServiceView = (serviceName: string) => {
  pushGTMEvent({
    event: 'service_view',
    event_category: 'page_view',
    event_label: serviceName,
  });
};

export const trackCTAClick = (ctaName: string, location: string) => {
  pushGTMEvent({
    event: 'cta_click',
    event_category: 'engagement',
    event_label: `${ctaName} - ${location}`,
    cta_name: ctaName,
    cta_location: location,
  });
};