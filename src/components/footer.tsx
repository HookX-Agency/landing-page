"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUp, Mail, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/30 border-t py-16">
      <div className="container space-y-8">
        {/* Top part with links and scroll top */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and info */}
          <div className="space-y-4 max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-primary-hookx">
                HookX
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Video Editing & Email Marketing services designed to fuel creator and brand growth
              through engaging content and conversion-optimized campaigns.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#video-editing" className="hover:text-primary-hookx transition-colors">
                    Video Editing
                  </Link>
                </li>
                <li>
                  <Link href="#email-marketing" className="hover:text-primary-hookx transition-colors">
                    Email Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#sms-marketing" className="hover:text-primary-hookx transition-colors">
                    SMS Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="hover:text-primary-hookx transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:text-primary-hookx transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-primary-hookx transition-colors">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#contact" className="hover:text-primary-hookx transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="mailto:createhookx@gmail.com" className="hover:text-primary-hookx transition-colors">
                    createhookx@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href="https://calendly.com/createhookx" target="_blank" className="hover:text-primary-hookx transition-colors">
                    Book a Call
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to top button */}
          <div>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10 border-primary-hookx/20 hover:border-primary-hookx hover:bg-primary-hookx/10"
            >
              <ArrowUp className="h-4 w-4 text-primary-hookx" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
        </div>

        <Separator />

        {/* Bottom part with social and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} HookX Agency. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:border-primary-hookx hover:bg-primary-hookx/10 transition-colors"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:border-primary-hookx hover:bg-primary-hookx/10 transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:border-primary-hookx hover:bg-primary-hookx/10 transition-colors"
            >
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="mailto:createhookx@gmail.com"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:border-primary-hookx hover:bg-primary-hookx/10 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
