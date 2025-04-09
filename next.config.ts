import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
        port: '',
        pathname: '/account123/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'instagram.fmid1-3.fna.fbcdn.net',
        port: '',
        pathname: '/account123/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
