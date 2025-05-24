"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const pricingTiers = [
  {
    name: "Starter",
    credits: 3,
    price: "$299",
    description: "New creators exploring premium video edits",
    validity: "24 Days",
    features: [
      "3 credits",
      "Perfect for testing our services",
      "Great for small projects",
      "Standard turnaround time",
      "Email support"
    ]
  },
  {
    name: "Growth",
    credits: 7,
    price: "$699",
    description: "Scaling creators building consistent video presence",
    validity: "1 Month",
    features: [
      "7 credits",
      "Ideal for growing channels",
      "Faster turnaround time",
      "Priority support",
      "Basic revisions included"
    ],
    popular: true
  },
  {
    name: "Pro",
    credits: 15,
    price: "$1,299",
    description: "Coaches, educators expanding long-form branded content",
    validity: "2 Months",
    features: [
      "15 credits",
      "Perfect for professionals",
      "Priority processing",
      "Extended revisions",
      "Dedicated account manager"
    ]
  },
  {
    name: "Elite",
    credits: 30,
    price: "$2,499",
    description: "Brands/agencies managing high-volume video needs",
    validity: "3 Months",
    features: [
      "30 credits",
      "Best value for volume",
      "24/7 priority support",
      "Unlimited revisions",
      "Dedicated team"
    ]
  }
];

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1] bg-fixed" />
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Flexible Credit-Based Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Choose the package that fits your video editing needs
          </p>
        </motion.div>

        <Tabs defaultValue="video" className="w-full">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pricingTiers.map((tier) => (
              <motion.div key={tier.name} variants={item} className="h-full">
                <Card 
                  className={`h-full flex flex-col transition-all duration-300 hover:shadow-xl ${
                    tier.popular ? 'border-2 border-primary-hookx' : ''
                  }`}
                >
                  <CardHeader className="pb-4 relative">
                    {tier.popular && (
                      <div className="absolute top-0 right-6 -translate-y-1/2">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-[#765EEF] to-[#9B8AFF] rounded-full blur-[4px] opacity-50"></div>
                          <div className="relative bg-gradient-to-r from-[#765EEF] to-[#9B8AFF] text-white px-4 py-1.5 text-sm font-bold rounded-full flex items-center gap-1.5">
                            ✨ Best Value
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex justify-between items-center w-full">
                      <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {tier.credits} Credits
                      </div>
                    </div>
                    <CardDescription className="h-12">{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-2xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground ml-2">for {tier.validity}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button className="w-full" size="lg">
                      Get Started
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
}
