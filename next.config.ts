// به جای import:
type NextConfig = unknown;

const nextConfig: NextConfig = {
  experimental: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    allowedDevOrigins: ['http://localhost:3000', 'http://192.168.1.164:3000'],
    serverActions: {},
  },
  reactStrictMode: true,
};

export default nextConfig;


