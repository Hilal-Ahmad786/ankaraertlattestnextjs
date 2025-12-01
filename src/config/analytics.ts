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
    // We leave these empty because GTM handles the IDs internally.
    conversionId: '',
    conversionLabels: {
      phone: '',
      whatsapp: '',
      form: '',
    },
    enabled: false, // <--- EXPLICITLY DISABLED. GTM does the work.
  },
  facebook: {
    pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
};

export type AnalyticsConfig = typeof analyticsConfig;