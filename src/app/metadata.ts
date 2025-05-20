import { Metadata } from 'next'

export const siteConfig = {
  name: 'HookX - Digital Marketing & Web Development Agency',
  description: 'HookX is a full-service digital marketing and web development agency helping businesses grow their online presence with cutting-edge solutions.',
  url: 'https://createhookx.com',
  ogImage: 'https://createhookx.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/hookxagency',
    github: 'https://github.com/hookx-agency',
  },
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'digital marketing',
    'web development',
    'SEO services',
    'social media marketing',
    'website design',
    'ecommerce solutions',
  ],
  authors: [
    {
      name: 'HookX Team',
      url: siteConfig.url,
    },
  ],
  creator: 'HookX',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@hookxagency',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL(siteConfig.url),
}
