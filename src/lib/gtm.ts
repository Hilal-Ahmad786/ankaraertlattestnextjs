import TagManager from 'react-gtm-module';
import { analyticsConfig } from '@/config/analytics';

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

// Conversion tracking events
// Conversion tracking events
export const trackPhoneClick = () => {
  pushGTMEvent({
    event: 'phone_click',
    event_category: 'engagement',
    event_label: 'phone_button',
    value: 1,
  });
};

export const trackWhatsAppClick = () => {
  pushGTMEvent({
    event: 'whatsapp_click',
    event_category: 'engagement',
    event_label: 'whatsapp_button',
    value: 1,
  });
};

export const trackFormSubmit = (formName: string) => {
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