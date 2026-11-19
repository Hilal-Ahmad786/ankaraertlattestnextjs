/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  // Next 14 does not read next.config.ts — keep every option in this file.
  async redirects() {
    return [
      { source: '/test-tracking', destination: '/', permanent: true },
      // Old static-site addresses Google still knows (e.g. /index.html → 404).
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.htm', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/:path*/index.html', destination: '/:path*', permanent: true },
    ];
  },
};

module.exports = nextConfig;
