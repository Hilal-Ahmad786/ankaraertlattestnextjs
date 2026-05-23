// src/config/analytics.ts
export const analyticsConfig = {
  gtm: {
    id: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-K7Z2X293',
    enabled: true,
  },
  ga: {
    id: process.env.NEXT_PUBLIC_GA_ID || 'G-74E9FNT713',
    enabled: true,
  },
  googleAds: {
    // Kept here for reference, but primary tracking goes through GTM dataLayer
    conversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '',
    conversionLabels: {
      phone: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL || '',
      whatsapp: process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL || '',
      form: process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL || '',
    },
    enabled: !!process.env.NEXT_PUBLIC_GOOGLE_ADS_ID, // Useful if direct gtag is needed fallback
  },
  facebook: {
    pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
};

export type AnalyticsConfig = typeof analyticsConfig;