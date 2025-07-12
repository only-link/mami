/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  experimental: {
    esmExternals: false,
    webpackBuildWorker: false
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('mysql2')
    }
    return config
  },
  env: {
    DOMAIN: process.env.DOMAIN || 'ahmadreza-avandi.ir',
    PROTOCOL: process.env.PROTOCOL || 'https'
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig