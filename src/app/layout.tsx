import type { Metadata } from "next";
import "./globals.css";
import { ScrollReset } from "@/components/scroll-reset";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "HookX | Video Editing & Email Marketing Agency",
  description: "Video Editing & Email Marketing — Delivered Fast & Fearlessly by HookX Agency",
  keywords: [
    "Video Editing",
    "Email Marketing",
    "Digital Agency",
    "Content Creation",
    "SMS Marketing",
    "Creator Growth",
  ],
  authors: [
    {
      name: "HookX Agency",
    },
  ],
  creator: "HookX Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://createhookx.com",
    title: "HookX | Video Editing & Email Marketing Agency",
    description: "Video Editing & Email Marketing — Delivered Fast & Fearlessly by HookX Agency",
    siteName: "HookX Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "HookX | Video Editing & Email Marketing Agency",
    description: "Video Editing & Email Marketing — Delivered Fast & Fearlessly by HookX Agency",
    creator: "@hookxagency",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://createhookx.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning className="min-h-screen bg-background antialiased">
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
