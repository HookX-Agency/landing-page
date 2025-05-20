import type { Metadata } from "next";
import "./globals.css";
import { ScrollReset } from "@/components/scroll-reset";
import { Analytics } from "@vercel/analytics/react";

const siteConfig = {
  name: 'HookX - Digital Marketing & Web Development Agency',
  description: 'HookX is a full-service digital marketing and web development agency helping businesses grow their online presence with cutting-edge solutions.',
  url: 'https://createhookx.com',
  ogImage: 'https://createhookx.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/hookxagency',
    github: 'https://github.com/hookx-agency',
  },
};

export const metadata: Metadata = {
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
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
};

// Add structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.github,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-background antialiased">
        <ScrollReset />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
