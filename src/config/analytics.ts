// src/config/analytics.ts
export const analyticsConfig = {
  gtm: {
    // Your NEW Ankara PERT Container ID
    id: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-K7Z2X293',
    enabled: true,
  },
  ga: {
    // Your NEW Ankara PERT GA4 ID
    id: process.env.NEXT_PUBLIC_GA_ID || 'G-74E9FNT713',
    enabled: true,
  },
  googleAds: {
    // Leave these empty. We will configure IDs inside GTM tags directly.
    conversionId: '',
    conversionLabels: {
      phone: '',
      whatsapp: '',
      form: '',
    },
    enabled: false, // <--- CRITICAL: Set to false to stop manual code firing
  },
  facebook: {
    pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
};

export type AnalyticsConfig = typeof analyticsConfig;