// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleTagManager from '@/components/analytics/GoogleTagManager';
import BotProtection from '@/components/analytics/BotProtection';
import { siteConfig } from '@/config/site';
import CustomerCarePopup from '@/components/ui/CustomerCarePopup';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { organizationSchema, webSiteSchema, localBusinessSchema } from '@/lib/schema';

const inter = Inter({ subsets: ['latin'] });

const BASE_URL = 'https://ankarapert.com.tr';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Ankara PERT - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
    template: '%s | Ankara PERT',
  },
  description: siteConfig.description,
  keywords: [
    'kazalı araç alan',
    'hasarlı araç alan',
    'pert araç alan',
    'hurda araç alan',
    'ankara pert',
    'kazalı araç alım satım',
    'hasarlı araç alım satım',
    'kazalı araç satmak istiyorum',
    'pert araç fiyatları',
  ],
  authors: [{ name: 'Ankara PERT Grup' }],
  creator: 'Ankara PERT',
  publisher: 'Ankara PERT',
  alternates: {
    canonical: BASE_URL,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: BASE_URL,
    siteName: siteConfig.name,
    title: 'Ankara PERT - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara PERT - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
    description: siteConfig.description,
    site: '@ankarapert',
  },
  icons: {
    icon: '/favicon-v2.ico',
    shortcut: '/favicon-v2.ico',
    apple: '/favicon-v2.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = organizationSchema();
  const websiteJsonLd = webSiteSchema();
  const localBizJsonLd = localBusinessSchema();

  return (
    <html lang="tr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {/* Sitewide structured data — Organization, WebSite, LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizJsonLd) }}
        />

        <Suspense fallback={null}>
          <GoogleTagManager />
          <BotProtection />
        </Suspense>

        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <CustomerCarePopup />
        <SpeedInsights />
      </body>
    </html>
  );
}
