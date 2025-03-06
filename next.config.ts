/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turboMode: false,
  },
  images: {
    domains: ['imgur.com', 'i.imgur.com'],
  },
};

module.exports = nextConfig;