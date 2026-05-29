/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@afri-dollar/database', '@afri-dollar/shared'],
  env: {
    NEXT_PUBLIC_APP_NAME: 'AfriDollar',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
};

module.exports = nextConfig;
