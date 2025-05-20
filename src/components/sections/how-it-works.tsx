"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type Step = {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: "Choose Your Credit Pack",
    description: "Select a credit package that fits your content goals.",
  },
  {
    number: 2,
    title: "Book Your Onboarding Call",
    description: "Schedule via our secure Calendly link.",
  },
  {
    number: 3,
    title: "Receive Onboarding Materials",
    description: "Get personalized scope and payment instructions.",
  },
  {
    number: 4,
    title: "Start Creating",
    description: "Redeem credits for impactful content.",
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-16 bg-gradient-to-b from-background to-card/30"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with HookX in just a few simple steps
          </p>
        </motion.div>

        {/* Roadmap Container */}
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-hookx/30 via-primary-hookx/20 to-transparent -translate-x-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="relative">
            {steps.map((step, index) => (
              <div key={step.number} className="relative py-8 md:py-16 first:pt-0 last:pb-0">
                <div className="relative flex flex-col md:flex-row items-center justify-between my-1 md:my-10">
                  {/* Left Side (Steps 1 & 3) */}
                  {[1, 3].includes(step.number) && (
                    <div className="w-full md:w-[45%] order-1 mb-4 md:mb-0">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-primary-hookx/10 shadow-lg hover:shadow-xl transition-all duration-300 relative z-20"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-primary-hookx/10 flex items-center justify-center text-primary-hookx font-bold text-sm">
                            {step.number}
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground md:pl-11">{step.description}</p>
                      </motion.div>
                    </div>
                  )}

                  {/* Center Dot with Glow - Hidden on mobile, visible on md and up */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/4 w-16 h-1/2 items-center justify-center z-10">
                    <div className="relative w-8 h-8">
                      {/* Outer Glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/80 to-primary-hookx/80 blur-md"></div>
                      {/* Middle Glow */}
                      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-500/60 to-primary-hookx/60 blur-sm"></div>
                      {/* Inner Dot */}
                      <div className="absolute inset-1.5 rounded-full bg-gradient-to-r from-purple-400 to-primary-hookx"></div>
                    </div>
                  </div>

                  {/* Right Side (Steps 2 & 4) */}
                  {[2, 4].includes(step.number) && (
                    <div className="w-full md:w-[45%] order-3 md:ml-auto mt-6 md:mt-0">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-primary-hookx/10 shadow-lg hover:shadow-xl transition-all duration-300 relative z-20"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-primary-hookx/10 flex items-center justify-center text-primary-hookx font-bold text-sm">
                            {step.number}
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground md:pl-11">{step.description}</p>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary-hookx/10 text-primary-hookx text-sm font-medium px-4 py-2 rounded-full mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
            <span>First-time client offer</span>
          </div>
          <p className="text-xl font-medium mb-6 max-w-2xl mx-auto">
            ⚡ Unlock a priority onboarding experience and personalized content planning consultation — no extra cost.
          </p>
          <Button 
            asChild
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-primary-hookx hover:from-purple-600/90 hover:to-primary-hookx/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Link 
              href="/book-call" 
              className="flex items-center justify-center gap-3 font-semibold"
            >
              <span className="relative z-10">Book Your Onboarding Call</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
