"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for testing with 2–3 short-form videos or 1 long-form video",
    price: 270,
    credits: 3,
    duration: "2 weeks",
    features: [
      "Quick turnaround time",
      "Basic captions and graphics included",
      "Personal project collaboration",
      "1 round of revisions"
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "Ideal for consistent content creation",
    price: 630,
    credits: 7,
    duration: "1 month",
    features: [
      "Mix of short and long-form videos",
      "Enhanced captions and graphics",
      "Content repurposing included",
      "Priority support",
      "2 rounds of revisions"
    ],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Pro Scale",
    description: "Designed for scaling creators and brands",
    price: 1350,
    credits: 15,
    duration: "2 months",
    features: [
      "Custom edits with advanced graphics",
      "Content strategy consultation",
      "Dedicated project manager",
      "Flexible content repurposing",
      "3 rounds of revisions"
    ],
    cta: "Go Pro",
    popular: false,
  },
  {
    name: "Elite Domination",
    description: "Best value for heavy content creators",
    price: 2700,
    credits: 30,
    duration: "3 months",
    features: [
      "Priority scheduling",
      "Monthly performance reviews",
      "Full content pipeline management",
      "Personalized branding",
      "Unlimited revisions"
    ],
    cta: "Get Elite",
    popular: false,
  }
]

// Blinking animation for the popular badge
const blinkAnimation = {
  initial: { opacity: 0.8 },
  animate: { 
    opacity: [0.8, 1, 0.8],
    scale: [1, 1.02, 1],
  },
  transition: { 
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary-hookx/5 via-background to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for your content needs
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full relative"
            >
              <Card className={`h-full transition-all hover:shadow-lg overflow-hidden ${
                plan.popular 
                  ? 'ring-2 ring-primary-hookx/30 ring-offset-2 ring-offset-background' 
                  : 'border-border/50 hover:border-primary-hookx/30'
              }`}>
                {plan.popular && (
                  <motion.div 
                    className="bg-gradient-to-r from-primary-hookx to-primary-hookx/80 text-white text-xs font-medium text-center py-2 px-4"
                    {...blinkAnimation}
                  >
                    MOST POPULAR
                  </motion.div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="text-right">
                        <div className="text-3xl font-bold">${plan.price}</div>
                      </div>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="text-sm text-muted-foreground pt-2 border-t border-border/20">
                      {plan.credits} credit{plan.credits > 1 ? 's' : ''} • {plan.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-hookx mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary-hookx hover:bg-primary-hookx/90' : ''}`} 
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 p-6 bg-card/50 border border-border/30 rounded-xl text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg mb-4">
            <span className="mr-2">💡</span> Confused or need something custom?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="outline" 
              className="group"
              asChild
            >
              <a href="https://calendly.com/createhookx/30min" target="_blank" rel="noopener noreferrer">
                Book a free strategy call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              <span className="mr-1">💬</span> Prefer email? Reach us at <a href="mailto:banshaj@createhookx.com" className="text-primary-hookx hover:underline">growth@createhookx.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
