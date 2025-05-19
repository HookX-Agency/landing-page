"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Pricing data
const pricingOptions = {
  video: [
    {
      name: "Starter Edit",
      price: "$149",
      period: "/mo",
      description: "Perfect for creators just getting started with professional editing.",
      features: [
        "4 short videos per month",
        "Basic color correction",
        "Simple text and graphics",
        "2 rounds of revisions",
        "48-hour turnaround",
      ],
    },
    {
      name: "Creator Boost",
      price: "$299",
      period: "/mo",
      description: "Ideal for growing creators looking to level up their content quality.",
      features: [
        "8 videos per month",
        "Professional captions",
        "Motion graphics and effects",
        "3 rounds of revisions",
        "24-hour turnaround",
        "Monthly strategy call",
      ],
      popular: true,
    },
    {
      name: "Brand Builder",
      price: "$499",
      period: "/mo",
      description: "For established creators and brands requiring premium content.",
      features: [
        "12 videos per month",
        "Reels, TikToks, YouTube Shorts",
        "Advanced motion graphics",
        "Custom intro/outro",
        "Unlimited revisions",
        "Priority 24-hour turnaround",
        "Bi-weekly strategy calls",
      ],
    },
    {
      name: "Agency Pro",
      price: "$899",
      period: "/mo",
      description: "Complete video editing solution for high-volume creators and brands.",
      features: [
        "Unlimited* videos (fair use policy)",
        "Dedicated editor",
        "Premium motion graphics",
        "Custom branding package",
        "Priority support",
        "Weekly strategy calls",
        "Content calendar planning",
      ],
    },
  ],
  email: [
    {
      name: "Email Essentials",
      price: "$99",
      period: "/mo",
      description: "Basic email marketing setup and maintenance for small creators.",
      features: [
        "2 campaigns per month",
        "1 Klaviyo flow setup",
        "Basic segmentation",
        "Template customization",
        "Monthly performance report",
      ],
    },
    {
      name: "Growth Suite",
      price: "$249",
      period: "/mo",
      description: "Strategic email marketing to grow your audience and increase revenue.",
      features: [
        "4 campaigns per month",
        "2 new Klaviyo flows",
        "A/B testing",
        "Audience segmentation",
        "Bi-weekly strategy calls",
        "Detailed analytics reporting",
      ],
      popular: true,
    },
    {
      name: "Launch Pro",
      price: "$499",
      period: "/mo",
      description: "Comprehensive email strategy for product launches and high-growth periods.",
      features: [
        "Full product launch sequence",
        "Unlimited campaigns",
        "Advanced flows & automation",
        "SMS messaging integration",
        "Weekly strategy calls",
        "List growth tactics",
        "Cross-platform integration",
      ],
    },
    {
      name: "Enterprise Flow",
      price: "$799",
      period: "/mo",
      description: "Complete email and SMS marketing solution for established businesses.",
      features: [
        "Unlimited campaigns",
        "Complete flow optimization",
        "Full SMS integration",
        "Dedicated strategist",
        "Custom reporting dashboard",
        "Conversion optimization",
        "Abandoned cart recovery",
        "Revenue attribution",
      ],
    },
  ],
  combined: [
    {
      name: "Smart Creator",
      price: "$349",
      period: "/mo",
      description: "Essential video and email services bundled for maximum efficiency.",
      features: [
        "4 video edits per month",
        "2 email campaigns",
        "1 Klaviyo flow",
        "Basic captions & graphics",
        "Template customization",
        "Monthly strategy call",
      ],
    },
    {
      name: "Brand Synergy",
      price: "$699",
      period: "/mo",
      description: "Integrated content and email marketing for consistent brand messaging.",
      features: [
        "8 video edits per month",
        "4 email/SMS campaigns",
        "2 new flows per month",
        "Motion graphics and effects",
        "A/B testing for emails",
        "Bi-weekly strategy calls",
        "Synchronized content calendar",
      ],
      popular: true,
    },
    {
      name: "Growth Engine",
      price: "$1,099",
      period: "/mo",
      description: "Comprehensive video and email marketing solution for rapid growth.",
      features: [
        "12 video edits per month",
        "Unlimited email campaigns",
        "Complete flow setup & optimization",
        "SMS integration",
        "Priority editing turnaround",
        "Weekly strategy calls",
        "Cross-channel content planning",
      ],
    },
    {
      name: "Agency Max",
      price: "$1,599",
      period: "/mo",
      description: "Enterprise-level service combining all video and email marketing needs.",
      features: [
        "Unlimited* video edits",
        "Full email & SMS management",
        "Dedicated team (editor + strategist)",
        "Custom reporting dashboard",
        "Premium motion graphics package",
        "Revenue growth strategy",
        "VIP support & priority service",
      ],
    },
  ],
}

export function PricingSection() {
  const [activeTab, setActiveTab] = useState("video")
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-24 bg-gradient-to-b from-background to-card/30"
    >
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Pricing for Creators, Brands, and Founders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service that fits your goals — or combine both for even greater impact.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs
            defaultValue="video"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="video" className="text-sm md:text-base relative z-10 data-[state=active]:shadow-none">Video Editing</TabsTrigger>
                <TabsTrigger value="email" className="text-sm md:text-base relative z-10 data-[state=active]:shadow-none">Email Marketing</TabsTrigger>
                <TabsTrigger value="combined" className="text-sm md:text-base relative z-10 data-[state=active]:shadow-none">Combined Services</TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(pricingOptions).map(([key, plans]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={key}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fadeInUpVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  >
                    {plans.map((plan, index) => (
                      <Card
                        key={index}
                        className={`glow-card h-full relative border ${
                          plan.popular
                            ? "border-primary-hookx/50 shadow-[0_0_15px_rgba(100,149,237,0.15)]"
                            : "border-primary-hookx/10"
                        } bg-card/30 backdrop-blur-sm`}
                      >
                        {plan.popular && (
                          <div className="absolute top-4 right-4">
                            <span className="bg-primary-hookx text-white text-xs font-medium px-3 py-1 rounded-full">
                              Most Popular
                            </span>
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{plan.name}</CardTitle>
                          <div className="mt-2">
                            <span className="text-3xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground">{plan.period}</span>
                          </div>
                          <CardDescription className="mt-2">{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-primary-hookx shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button asChild className="w-full glow-button group">
                            <Link href="https://calendly.com" target="_blank">
                              Let&apos;s Talk
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Need a custom solution? We offer tailored packages for enterprise clients and unique requirements.
          </p>
          <Button asChild variant="outline" className="glow-button group">
            <Link href="#contact">
              Contact Us for Custom Pricing
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
