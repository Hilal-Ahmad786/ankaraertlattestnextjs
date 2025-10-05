import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import GoogleTagManager from '@/components/analytics/GoogleTagManager';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import ConversionTracking from '@/components/analytics/ConversionTracking';
import BotProtection from '@/components/analytics/BotProtection';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
  ],
  authors: [{ name: 'Ankara PERT Grup' }],
  creator: 'Ankara PERT',
  publisher: 'Ankara PERT',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Ankara PERT - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
    description: siteConfig.description,
    images: [
      {
        url: '/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Ankara PERT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankara PERT - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
    description: siteConfig.description,
    images: ['/banner.webp'],
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        {/* Wrap all analytics in Suspense */}
        <Suspense fallback={null}>
          <GoogleTagManager />
          <GoogleAnalytics />
          <ConversionTracking />
          <BotProtection />
        </Suspense>
        
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}



