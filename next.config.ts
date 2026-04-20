import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'frankies-eventservice.de',
      },
    ],
  },
}

export default nextConfig
