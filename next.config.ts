import type { NextConfig } from 'next';

const staticAssetCache = 'public, max-age=31536000, immutable';

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [{ key: 'Cache-Control', value: staticAssetCache }],
      },
      {
        source: '/:path*.mp4',
        headers: [{ key: 'Cache-Control', value: staticAssetCache }],
      },
      {
        source: '/:path*.webm',
        headers: [{ key: 'Cache-Control', value: staticAssetCache }],
      },
      {
        source: '/:path*.(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [{ key: 'Cache-Control', value: staticAssetCache }],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: staticAssetCache }],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
