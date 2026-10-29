/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'image.thum.io',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/hizmetler/seo-kocaeli', destination: '/kocaeli-seo', permanent: true },
      { source: '/hizmetler/web-tasarim-kocaeli', destination: '/kocaeli-web-tasarim', permanent: true },
      { source: '/hizmetler/google-ads-kocaeli', destination: '/kocaeli-google-ads', permanent: true },
    ]
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
