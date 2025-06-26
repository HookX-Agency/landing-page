"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Youtube, Smartphone, Repeat, Cpu, Rocket, Mic, Settings, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <GraduationCap className="h-12 w-12 text-primary-hookx" />,
    title: "For AI Educators",
    description: "Grow your audience, launch courses, and repurpose your best lectures with video that engages and educates.",
    link: "#pricing",
    linkText: "View Educator Plans",
    features: [
      {
        icon: <Youtube className="h-5 w-5 text-primary-hookx" />,
        title: "YouTube Growth Strategy",
        description: "Full longform editing with thumbnails and CTAs",
      },
      {
        icon: <Smartphone className="h-5 w-5 text-primary-hookx" />,
        title: "Reels & Shorts",
        description: "Short, hook-driven clips from lectures or AMAs",
      },
      {
        icon: <Repeat className="h-5 w-5 text-primary-hookx" />,
        title: "Course Repurposing",
        description: "Turn lesson recordings into promo-ready social clips",
      },
    ],
  },
  {
    icon: <Cpu className="h-12 w-12 text-primary-hookx" />,
    title: "For AI Product Companies",
    description: "Turn product complexity into compelling clarity with demo reels, UI explainers, and platform walkthroughs.",
    link: "#pricing",
    linkText: "View Startup Plans",
    features: [
      {
        icon: <Rocket className="h-5 w-5 text-primary-hookx" />,
        title: "Launch Video Pack",
        description: "Product teaser, UI demo, and single-use-case clip",
      },
      {
        icon: <Mic className="h-5 w-5 text-primary-hookx" />,
        title: "Founder's Voice Edits",
        description: "Zooms, interviews, or Looms turned into reels",
      },
      {
        icon: <Settings className="h-5 w-5 text-primary-hookx" />,
        title: "Content Engine",
        description: "Weekly content delivery aligned with product roadmap",
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
              What We Do Best
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored video solutions for AI educators and product teams.
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
              <Card className="glow-card border border-primary-hookx/10 bg-card/30 backdrop-blur-sm h-full hover:border-primary-hookx/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
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
      </div>
    </section>
  )
}
