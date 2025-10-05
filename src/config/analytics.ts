export const analyticsConfig = {
    gtm: {
      id: process.env.NEXT_PUBLIC_GTM_ID || '',
      enabled: !!process.env.NEXT_PUBLIC_GTM_ID,
    },
    ga: {
      id: process.env.NEXT_PUBLIC_GA_ID || '',
      enabled: !!process.env.NEXT_PUBLIC_GA_ID,
    },
    googleAds: {
      conversionId: process.env.NEXT_PUBLIC_ADS_CONVERSION_ID || '',
      conversionLabels: {
        phone: process.env.NEXT_PUBLIC_ADS_PHONE_CONVERSION_LABEL || '',
        whatsapp: process.env.NEXT_PUBLIC_ADS_WHATSAPP_CONVERSION_LABEL || '',
        form: process.env.NEXT_PUBLIC_ADS_FORM_CONVERSION_LABEL || '',
      },
      enabled: !!process.env.NEXT_PUBLIC_ADS_CONVERSION_ID,
    },
    facebook: {
      pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
      enabled: !!process.env.NEXT_PUBLIC_FB_PIXEL_ID,
    },
  };
  
  export type AnalyticsConfig = typeof analyticsConfig;