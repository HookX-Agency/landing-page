"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse position for dynamic glow effect
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  // Generate particles for background
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 5,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2,
  }))

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden animated-background">
      {/* Animated background particles */}
      <div className="particles-container">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
              opacity: 0.1,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Interactive glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(100, 149, 237, 0.1),
            transparent 40%
          )`,
        }}
      />

      <div className="container relative z-10 pt-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-1">
              <div className="flex">
                <motion.img
                  src="/clients-social-proof/client-1.jpg"
                  alt="Client 1"
                  className="w-12 h-12 rounded-full object-cover hover:shadow-lg transition-all duration-300 -ml-3"
                  whileHover={{ scale: 1.2, y: -10 }}
                />
                <motion.img
                  src="/clients-social-proof/client-2.jpg"
                  alt="Client 2"
                  className="w-12 h-12 rounded-full object-cover hover:shadow-lg transition-all duration-300 -ml-3"
                  whileHover={{ scale: 1.2, y: -10 }}
                />
                <motion.img
                  src="/clients-social-proof/client-3.jpg"
                  alt="Client 3"
                  className="w-12 h-12 rounded-full object-cover hover:shadow-lg transition-all duration-300 -ml-3"
                  whileHover={{ scale: 1.2, y: -10 }}
                />
                <motion.img
                  src="/clients-social-proof/client-4.jpg"
                  alt="Client 4"
                  className="w-12 h-12 rounded-full object-cover hover:shadow-lg transition-all duration-300 -ml-3"
                  whileHover={{ scale: 1.2, y: -10 }}
                />
                <motion.img
                  src="/clients-social-proof/client-5.jpg"
                  alt="Client 5"
                  className="w-12 h-12 rounded-full object-cover hover:shadow-lg transition-all duration-300 -ml-3"
                  whileHover={{ scale: 1.2, y: -10 }}
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-0.5">
                  <motion.div whileHover={{ scale: 1.2 }} className="relative">
                    <Star className="h-4 w-4 fill-white" />
                    <div className="absolute inset-0 bg-white/20 blur-sm rounded-full" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }} className="relative">
                    <Star className="h-4 w-4 fill-white" />
                    <div className="absolute inset-0 bg-white/20 blur-sm rounded-full" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }} className="relative">
                    <Star className="h-4 w-4 fill-white" />
                    <div className="absolute inset-0 bg-white/20 blur-sm rounded-full" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }} className="relative">
                    <Star className="h-4 w-4 fill-white" />
                    <div className="absolute inset-0 bg-white/20 blur-sm rounded-full" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }} className="relative">
                    <Star className="h-4 w-4 fill-white" />
                    <div className="absolute inset-0 bg-white/20 blur-sm rounded-full" />
                  </motion.div>
                </div>
                <p className="text-sm text-white font-semibold mt-0.5">We create what we are!</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight gradient-heading" style={{ lineHeight: 1.5 }}>
              Creating content that converts.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-white mb-8">
              We're not just another video-editing agency, we're{' '}
              <img src="/hookx-logo.svg" alt="HookX Logo" className="inline h-8" />
              {' '}& That's what we create.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="glow-button group">
              <Link href="https://calendly.com/createhookx/30min" target="_blank">
                Let&apos;s Talk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#services">
                Our Services
              </Link>
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
