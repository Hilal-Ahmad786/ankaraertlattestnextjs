import { analyticsConfig } from '@/config/analytics';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Safely push an event to GTM dataLayer.
 * This is the preferred method as per project guidelines.
 */
export const pushToDataLayer = (eventObj: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventObj);
  }
};

/**
 * Fallback to direct gtag if GTM is not used but gtag is available.
 * Used internally to ensure coverage if the setup changes.
 */
const pushToGtag = (command: string, action: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(command, action, params);
  }
};

/**
 * Tracks a phone link click.
 * Note: We DO NOT send the business phone number as user_data.
 */
export const trackPhoneClick = (location: string, buttonText: string = 'Phone', pagePath: string = '') => {
  const eventData = {
    event: 'phone_click',
    event_category: 'engagement',
    event_label: buttonText,
    location: location,
    page_path: pagePath || (typeof window !== 'undefined' ? window.location.pathname : ''),
    destination_type: 'phone_call'
  };

  // Primary method: GTM
  pushToDataLayer(eventData);

  // Fallback direct Google Ads Conversion (if configured and no GTM handling)
  if (analyticsConfig.googleAds.enabled && analyticsConfig.googleAds.conversionLabels.phone) {
    pushToGtag('event', 'conversion', {
      'send_to': `${analyticsConfig.googleAds.conversionId}/${analyticsConfig.googleAds.conversionLabels.phone}`
    });
  }
};

/**
 * Tracks a WhatsApp link click.
 * Note: We DO NOT send the business phone number as user_data.
 */
export const trackWhatsAppClick = (location: string, buttonText: string = 'WhatsApp', pagePath: string = '') => {
  const eventData = {
    event: 'whatsapp_click',
    event_category: 'engagement',
    event_label: buttonText,
    location: location,
    page_path: pagePath || (typeof window !== 'undefined' ? window.location.pathname : ''),
    destination_type: 'whatsapp'
  };

  // Primary method: GTM
  pushToDataLayer(eventData);

  // Fallback direct Google Ads Conversion (if configured and no GTM handling)
  if (analyticsConfig.googleAds.enabled && analyticsConfig.googleAds.conversionLabels.whatsapp) {
    pushToGtag('event', 'conversion', {
      'send_to': `${analyticsConfig.googleAds.conversionId}/${analyticsConfig.googleAds.conversionLabels.whatsapp}`
    });
  }
};

/**
 * Tracks a real lead form submission WITH Enhanced Conversions user_data.
 * This should ONLY be called when a user actually enters their data in a form.
 */
export interface LeadFormData {
  email?: string;
  phone_number?: string;
  first_name?: string;
  last_name?: string;
  city?: string;
}

export const trackLeadFormSubmit = (formName: string, formData: LeadFormData) => {
  // Normalize data for Enhanced Conversions
  const normalizedData = {
    email: formData.email?.trim().toLowerCase(),
    phone_number: formData.phone_number?.replace(/\D/g, ''), // Strip non-numeric chars
    address: {
      first_name: formData.first_name?.trim().toLowerCase(),
      last_name: formData.last_name?.trim().toLowerCase(),
      city: formData.city?.trim().toLowerCase(),
    }
  };

  const eventData = {
    event: 'lead_form_submit',
    event_category: 'engagement',
    event_label: formName,
    // Provide user_data for GTM User-Provided Data variable
    user_data: normalizedData
  };

  // Primary method: GTM
  pushToDataLayer(eventData);

  // Fallback direct Google Ads Enhanced Conversion
  if (analyticsConfig.googleAds.enabled && analyticsConfig.googleAds.conversionLabels.form) {
    // Set user_data in gtag before sending conversion
    pushToGtag('set', 'user_data', normalizedData);
    
    pushToGtag('event', 'conversion', {
      'send_to': `${analyticsConfig.googleAds.conversionId}/${analyticsConfig.googleAds.conversionLabels.form}`
    });
  }
};
