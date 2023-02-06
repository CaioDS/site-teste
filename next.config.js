/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { runtime: 'experimental-edge' },
  images: {
    domains: [process.env.WP_IMAGES_URI],
  },
};

module.exports = nextConfig;
