"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Video, Mail, ArrowRight, PenTool, Repeat, MessageSquare, Briefcase, LineChart, BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Video className="h-12 w-12 text-primary-hookx" />,
    title: "Video Editing",
    description: "High-quality, engaging video content optimized for your platform and audience.",
    link: "#pricing",
    linkText: "View Pricing",
    features: [
      {
        icon: <PenTool className="h-5 w-5 text-primary-hookx" />,
        title: "Short & Long-form Content",
        description: "From quick TikToks to in-depth YouTube content, edited for maximum engagement.",
      },
      {
        icon: <Repeat className="h-5 w-5 text-primary-hookx" />,
        title: "Content Repurposing",
        description: "Transform existing content into reels, shorts, and platform-optimized clips.",
      },
      {
        icon: <MessageSquare className="h-5 w-5 text-primary-hookx" />,
        title: "Captions & Graphics",
        description: "Professional captions, motion graphics, and visual enhancements for all videos.",
      },
    ],
  },
  {
    icon: <Mail className="h-12 w-12 text-primary-hookx" />,
    title: "Email & SMS Marketing",
    description: "Strategic campaigns that convert subscribers into customers while you sleep.",
    link: "#pricing",
    linkText: "View Pricing",
    features: [
      {
        icon: <Briefcase className="h-5 w-5 text-primary-hookx" />,
        title: "Klaviyo Flow Management",
        description: "Automated flows and campaigns optimized for conversions and engagement.",
      },
      {
        icon: <LineChart className="h-5 w-5 text-primary-hookx" />,
        title: "A/B Testing & Optimization",
        description: "Data-driven testing to continuously improve open rates and conversions.",
      },
      {
        icon: <BarChart className="h-5 w-5 text-primary-hookx" />,
        title: "Segmentation & Analytics",
        description: "Strategic audience targeting and comprehensive performance reporting.",
      },
    ],
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 bg-gradient-to-b from-card/30 to-background"
    >
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Expert Solutions for Creators & Brands
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              HookX exclusively offers Video Editing and Email & SMS Marketing — we focus on what we do best to deliver exceptional results.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <Card className="glow-card border border-primary-hookx/10 bg-card/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                      >
                        <div className="shrink-0 mt-1">{feature.icon}</div>
                        <div>
                          <h4 className="font-medium text-base">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full glow-button group">
                    <Link href={service.link}>
                      {service.linkText}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg mb-4 text-muted-foreground">
            Interested in combining both services for maximum impact?
          </p>
          <Button asChild size="lg" className="glow-button group">
            <Link href="#pricing">
              View Combined Packages
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
