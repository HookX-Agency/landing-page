import Link from "next/link"
import { Mail, Twitter, Youtube, Linkedin, Instagram, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
    social: [
      {
        name: 'Twitter',
        href: 'https://twitter.com/createhookx',
        icon: Twitter,
      },
      {
        name: 'YouTube',
        href: 'https://youtube.com/@createhookx',
        icon: Youtube,
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/createhookx',
        icon: Linkedin,
      },
      {
        name: 'Instagram',
        href: 'https://instagram.com/createhookx',
        icon: Instagram,
      },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' }
    ]
  }

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-primary-hookx/10">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-hookx to-purple-500 bg-clip-text text-transparent">
                HookX
              </span>
              <span className="ml-2 text-xs font-medium bg-primary-hookx/10 text-primary-hookx px-2 py-0.5 rounded-full">
                AI Edition
              </span>
            </div>
            <p className="text-sm text-foreground">
              Helping AI creators and companies transform their content into high-converting video experiences.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary-hookx transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary-hookx transition-colors flex items-center group">
                  For AI Educators
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary-hookx transition-colors flex items-center group">
                  For AI Product Companies
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary-hookx transition-colors flex items-center group">
                  Pricing & Plans
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-sm text-muted-foreground hover:text-primary-hookx transition-colors flex items-center group">
                  Our Process
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary-hookx transition-colors flex items-center group">
                  Blog
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary-hookx transition-colors flex items-center group">
                  Case Studies
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-sm text-muted-foreground hover:text-primary-hookx transition-colors flex items-center group">
                  Free Templates
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary-hookx transition-colors flex items-center group">
                  FAQ
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Get in touch</h3>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Email us at</p>
                <a 
                  href="mailto:banshaj@createhookx.com" 
                  className="text-sm font-medium text-primary-hookx hover:underline flex items-center"
                >
                  banshaj@createhookx.com
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mt-4">Book a call</p>
                <Button 
                  asChild 
                  size="sm" 
                  variant="outline" 
                  className="mt-1 border-primary-hookx/30 hover:bg-primary-hookx/5"
                >
                  <a href="https://calendly.com/createhookx/30min" target="_blank" rel="noopener noreferrer">
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-hookx/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} HookX. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-primary-hookx transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
