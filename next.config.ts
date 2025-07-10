import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['photo.znews.vn', 'static.znews.vn'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
