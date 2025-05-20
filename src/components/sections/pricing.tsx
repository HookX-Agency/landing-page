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
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Credit Packages Data
  const creditPackages = [
    {
      name: "Starter",
      credits: 4,
      price: "$299",
      validityPeriod: "1 month",
      idealFor:
        "Creators beginning to scale their content with focused video and email assets.",
      isPopular: false
    },
    {
      name: "Growth",
      credits: 10,
      price: "$699",
      validityPeriod: "1 month",
      idealFor:
        "Growing brands and creators delivering consistent quality content.",
      isPopular: false
    },
    {
      name: "Pro",
      credits: 20,
      price: "$1,199",
      validityPeriod: "3 months",
      idealFor:
        "Coaches, educators, and business leaders expanding their reach.",
      isPopular: true
    },
    {
      name: "Elite",
      credits: 50,
      price: "$2,499",
      validityPeriod: "6 months",
      idealFor:
        "Agencies and established brands needing ongoing, diverse content production.",
      isPopular: false
    }
  ];

  
  // Credit Value Data
  const creditValues = [
    { service: "Short-form video (reels, shorts)", credits: "1 Credit" },
    { service: "Email template (design + copy)", credits: "1 Credit" },
    { service: "Thumbnail design", credits: "0.5 Credit" },
    { service: "Long-form video (5-10 mins)", credits: "3-5 Credits" },
    { service: "Strategy consultation", credits: "Included with any package" }
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-24 bg-gradient-to-b from-card/30 to-background"
    >
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Credit-Based Pricing for Creative Freedom
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience premium flexibility—choose a credit package that aligns with your ambitions and invest in creative excellence on your own terms.
            </p>
          </motion.div>
        </div>

        {/* Credit Packages & Pricing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-hookx mb-2">Purchase Credits</h3>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Select a credit package to unlock creative freedom. Credits can be redeemed for any service above.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creditPackages.map((pkg, idx) => (
              <Card key={pkg.name} className="relative flex flex-col justify-between bg-card/30 border border-primary-hookx/10 shadow-xl p-6 h-full hover:shadow-2xl transition-shadow">
                {/* Premium Popular Badge */}
                {pkg.isPopular && (
                  <div className="absolute -top-3 right-6">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-primary-hookx rounded-full blur-sm opacity-75 group-hover:opacity-100 transition duration-200"></div>
                      <div className="relative flex items-center bg-gradient-to-r from-purple-500 to-primary-hookx text-white text-xs font-bold px-4 py-1.5 rounded-full z-10 shadow-lg">
                        <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        MOST POPULAR
                      </div>
                    </div>
                  </div>
                )}
                <div>
                  <CardHeader className="pb-2">
                    <h4 className="text-xl font-bold text-white mb-1">{pkg.name}</h4>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-3xl font-extrabold text-primary-hookx">{pkg.credits}</span>
                      <span className="text-base text-muted-foreground font-medium">Credits</span>
                    </div>
                    <div className="text-sm text-primary-hookx font-semibold mb-2">Valid for {pkg.validityPeriod}</div>
                    <p className="text-muted-foreground text-sm mb-3 min-h-[48px]">{pkg.idealFor}</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-primary-hookx">{pkg.price}</span>
                      <span className="text-muted-foreground text-base">for this pack</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Benefits List */}
          <div className="mt-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary-hookx shrink-0" />
                <span className="text-sm text-muted-foreground">Flexible allocation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary-hookx shrink-0" />
                <span className="text-sm text-muted-foreground">Premium support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary-hookx shrink-0" />
                <span className="text-sm text-muted-foreground">Strategy consultation</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Compact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Secure your credits and start building your brand with HookX.
          </p>
          <Button 
            asChild
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-primary-hookx hover:from-purple-600/90 hover:to-primary-hookx/90 text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Link 
              href="/book-call" 
              className="flex items-center justify-center gap-3 font-bold text-lg"
            >
              <span className="relative z-10">Book Your Onboarding Call Now</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}