import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

/**
 * Web app manifest. Two icon sizes with `maskable` on the 512 so Android
 * renders the launcher icon without letterboxing it.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Hasarlı ve Kazalı Araç Alımı`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    lang: 'tr',
    dir: 'ltr',
    background_color: '#ffffff',
    theme_color: '#f97316',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
