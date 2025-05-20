"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const mainLinks = [
  { title: "Home", href: "/" },
  { title: "Features", href: "#features" },
  { title: "Services", href: "#services" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "Pricing", href: "#pricing" },
  { title: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* <span className="text-2xl font-bold tracking-tight text-primary-hookx">
            HookX
          </span> */}

          <div className="relative group">
            <Image
              src="/HookX_Logo_Nav.png"
              alt="HookX Logo"
              width={384}
              height={96}
              className="h-12 w-auto"
              priority
            />
            <button 
              className="absolute -right-5 -top-1 text-primary-hookx/70 hover:text-primary-hookx transition-colors"
              aria-label="Pronunciation: Hooks"
            >
              <Info className="h-4 w-4" />
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block w-max">
                <div className="bg-black/80 text-white text-xs px-2.5 py-1.5 rounded-md shadow-lg whitespace-nowrap">
                  Pronounced 'Hooks' — not Hook-X
                </div>
              </div>
            </button>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary-hookx",
                pathname === link.href
                  ? "text-primary-hookx"
                  : "text-foreground/60"
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Right side - Theme Toggle & CTA */}
        <div className="flex items-center gap-4">

          {/* Desktop CTA */}
          <Button asChild className="hidden md:flex glow-button">
            <Link href="#contact">Let&apos;s Talk</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="p-0 h-10 w-10 rounded-full md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="flex flex-col h-full justify-between">
                <div className="space-y-4 mt-8">
                  {mainLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex py-2 text-lg font-medium hover:text-primary-hookx"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>

                <div className="border-t pt-4 pb-8">
                  <Button asChild className="w-full glow-button">
                    <Link href="#contact">Let&apos;s Talk</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
