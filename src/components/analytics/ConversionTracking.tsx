'use client';

import Script from 'next/script';
import { analyticsConfig } from '@/config/analytics';

export default function ConversionTracking() {
  if (!analyticsConfig.googleAds.enabled && !analyticsConfig.facebook.enabled) {
    return null;
  }

  return (
    <>
      {/* Google Ads Conversion */}
      {analyticsConfig.googleAds.enabled && (
        <Script
          id="google-ads-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', '${analyticsConfig.googleAds.conversionId}');
            `,
          }}
        />
      )}

      {/* Facebook Pixel */}
      {analyticsConfig.facebook.enabled && (
        <>
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${analyticsConfig.facebook.pixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${analyticsConfig.facebook.pixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}
    </>
  );
}