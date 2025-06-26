"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // Track mouse position for dynamic glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
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
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary-hookx/5 via-background/0 to-background/80" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,transparent,black_70%)]" />
        
        {/* Interactive glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              600px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(118, 94, 239, 0.15),
              transparent 40%
            )`,
          }}
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold tracking-tight leading-tight">
            You Build the AI, <span className="bg-gradient-to-r from-primary-hookx to-purple-500 bg-clip-text text-transparent">We Build the Audience</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your ideas, our edits — designed to convert across every platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="glow-button group px-8 py-6 text-base font-medium"
              >
                <a href="https://calendly.com/createhookx/30min" target="_blank" rel="noopener noreferrer">
                  Let's Build Your Narrative
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-primary-hookx/30 hover:bg-primary-hookx/5 px-8 py-6 text-base font-medium group"
              >
                <a href="#portfolio">
                  See What We Do
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Social proof section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i}
                    className="relative h-12 w-12 rounded-full border-2 border-background overflow-hidden"
                    style={{ zIndex: 5 - i }}
                  >
                    <Image
                      src={`/clients-social-proof/client-${i}.jpg`}
                      alt={`Client ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Trusted by creators
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-8 h-12 border-2 border-primary-hookx/30 rounded-full flex justify-center p-1"
        >
          <motion.div
            className="w-1 h-2 bg-primary-hookx rounded-full"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
