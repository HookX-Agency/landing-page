/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  output: isDev ? undefined : 'export',
  distDir: 'out',
  reactStrictMode: true,
  // Enable strict mode for better error catching
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Image optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'createhookx.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Environment variables
  env: {
    SITE_URL: 'https://createhookx.com',
  },
  // Enable source maps in production for debugging
  productionBrowserSourceMaps: true,
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Add custom webpack configurations here
    if (!isServer) {
      // Don't include certain packages in the client bundle
      config.resolve.alias = {
        ...config.resolve.alias,
        'some-heavy-package': false,
      };
    }
    return config;
  },
  // Enable Turbopack in development
  experimental: isDev ? {
    // Turbopack options go here
  } : undefined,
};

// Add security headers for non-export mode
if (!isDev) {
  nextConfig.headers = async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  };
}

module.exports = nextConfig;
