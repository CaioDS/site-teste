/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URI],
  },
};

module.exports = nextConfig;
