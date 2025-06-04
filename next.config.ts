import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {},
  },
  i18n: {
    locales: ['fa', 'en', 'ku'],
    defaultLocale: 'fa',
    localeDetection: true,
  },
};

export default nextConfig;


