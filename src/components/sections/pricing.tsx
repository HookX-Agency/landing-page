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
      name: "Starter Pack",
      credits: 4,
      price: "$299",
      validityPeriod: "2 months",
      idealFor:
        "Creators beginning to scale their content with focused video and email assets."
    },
    {
      name: "Pro Pack",
      credits: 10,
      price: "$749",
      validityPeriod: "4 months",
      idealFor:
        "Growing brands and creators delivering consistent quality content."
    },
    {
      name: "Growth Pack",
      credits: 20,
      price: "$1,499",
      validityPeriod: "6 months",
      idealFor:
        "Coaches, educators, and business leaders expanding their reach."
    },
    {
      name: "Scale Pack",
      credits: 30,
      price: "$2,199",
      validityPeriod: "8 months",
      idealFor:
        "Agencies and established brands needing ongoing, diverse content production."
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

        {/* Services for Credits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-hookx mb-2">How to Use Credits</h3>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Redeem your credits for any of our premium creative services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creditValues.map((item, idx) => (
              <Card key={item.service} className="flex flex-col justify-between bg-card/30 border border-primary-hookx/10 shadow-xl p-6 h-full hover:shadow-2xl transition-shadow">
                <CardHeader className="pb-2">
                  <h4 className="text-xl font-bold text-white mb-1">{item.service}</h4>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-primary-hookx">{item.credits}</span>
                    <span className="text-muted-foreground text-base">per service</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Use your credits to redeem this service at any time.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Credit Packages & Pricing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-hookx mb-2">Purchase Credits</h3>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Select a credit package to unlock creative freedom. Credits can be redeemed for any service above.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary-hookx shrink-0" />
                <span className="text-base text-muted-foreground">Flexible allocation across services</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary-hookx shrink-0" />
                <span className="text-base text-muted-foreground">Premium, strategic support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary-hookx shrink-0" />
                <span className="text-base text-muted-foreground">Strategy consultation</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creditPackages.map((pkg, idx) => (
              <Card key={pkg.name} className="relative flex flex-col justify-between bg-card/30 border border-primary-hookx/10 shadow-xl p-6 h-full hover:shadow-2xl transition-shadow">
                {/* Most Popular Badge */}
                {pkg.name === "Pro Pack" && (
                  <span className="absolute top-6 right-6 bg-primary-hookx text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow">Most Popular</span>
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
                <div className="mt-auto pt-2">
                  <Button className="w-full bg-primary-hookx hover:bg-primary-hookx/90 text-base py-3 rounded-lg shadow-lg">
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Purchase Credits
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>



        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Ready to elevate your content with tailored creative solutions? Contact HookX today to find the perfect credit package for your brand.
          </p>
          <Button className="bg-primary-hookx hover:bg-primary-hookx/90 text-lg px-8 py-4 rounded-full shadow-lg">
            <Link href="/contact" className="flex items-center justify-center gap-2">
              Contact HookX
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}