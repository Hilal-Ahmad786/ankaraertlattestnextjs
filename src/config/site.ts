export const siteConfig = {
    name: 'Ankara PERT',
    description: 'Kazalı, Hasarlı, Pert ve Hurda Araç Alımında Türkiye\'nin En Güvenilir Merkezi',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ankarapert.com.tr',
    phone: process.env.NEXT_PUBLIC_PHONE || '+905369298606',
    phoneDisplay: '0 (536) 929 86 06',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '905369298606',
    email: process.env.NEXT_PUBLIC_EMAIL || 'info@ankarapert.com.tr',
    social: {
      facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/doruk.hasarli.araclar/',
      instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/dorukhasarliaraclar/',
    },
    services: [
      {
        title: 'Kazalı Araç Alımı',
        slug: 'kazali-arac-alim-satim',
        icon: 'fa-car-crash',
      },
      {
        title: 'Hasarlı Araç Alımı',
        slug: 'hasarli-arac-alim-satim',
        icon: 'fa-tools',
      },
      {
        title: 'Pert Araç Alımı',
        slug: 'pert-arac-alim-satim',
        icon: 'fa-exclamation-triangle',
      },
      {
        title: 'Hurda Araç Alımı',
        slug: 'hurda-arac-alim-satim',
        icon: 'fa-recycle',
      },
    ],
  };
  
  export type SiteConfig = typeof siteConfig;