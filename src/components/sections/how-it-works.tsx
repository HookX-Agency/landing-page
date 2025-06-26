"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  CreditCard, 
  PhoneCall, 
  Upload, 
  Zap,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: <CreditCard className="h-6 w-6 text-primary-hookx" />,
    title: "Step 1 — Choose Your Plan",
    description: "Select a credit pack that matches your content needs and budget.",
    bullets: [
      "View transparent pricing and pick what fits",
      "No hidden charges. No surprises"
    ]
  },
  {
    icon: <PhoneCall className="h-6 w-6 text-primary-hookx" />,
    title: "Step 2 — Book Your Onboarding Call",
    description: "Schedule a 30-min call with our strategist.",
    bullets: [
      "We'll define your content goals, platforms, and formats",
      "You'll receive access to our creative intake form and workspace"
    ]
  },
  {
    icon: <Upload className="h-6 w-6 text-primary-hookx" />,
    title: "Step 3 — Upload Footage & Redeem Credits",
    description: "Send raw footage or existing videos through your portal.",
    bullets: [
      "We'll assign credits based on video type (short or long)",
      "Each credit = 1 short-form video. Long-form = 2+ credits"
    ]
  },
  {
    icon: <Zap className="h-6 w-6 text-primary-hookx" />,
    title: "Step 4 — Receive Edited Videos & Iterate",
    description: "Get platform-ready edits delivered within days.",
    bullets: [
      "Review. Request changes. Launch your content",
      "Track credits used — full transparency"
    ]
  }
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section 
      ref={sectionRef}
      id="how-it-works"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary-hookx/5 via-background to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">
              Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How HookX Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in just 4 simple steps
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="hidden md:flex justify-between items-center max-w-4xl mx-auto mb-12 px-8">
          {steps.map((_, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary-hookx/10 flex items-center justify-center text-primary-hookx font-bold">
                  {index + 1}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-muted"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-hookx/10 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground mb-3">{step.description}</p>
              <ul className="space-y-2">
                {step.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary-hookx mr-2">→</span>
                    <span className="text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">Still have questions?</p>
          <Button 
            variant="outline" 
            className="group border-primary-hookx/20 hover:bg-primary-hookx/5 hover:border-primary-hookx/40 transition-colors"
            asChild
          >
            <a href="#contact">
              Book a free 15-min discovery call
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform inline-block" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
