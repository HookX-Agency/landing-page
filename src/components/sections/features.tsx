"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Video, Mail, LineChart, Zap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Video className="h-10 w-10 text-primary-hookx" />,
    title: "High-converting Video Edits",
    description: "Professional video content optimized for engagement and conversions across all platforms and formats.",
    delay: 0,
  },
  {
    icon: <Mail className="h-10 w-10 text-primary-hookx" />,
    title: "Email Campaigns That Sell",
    description: "Strategic email and SMS marketing that drives sales while you sleep, with proven conversion tactics.",
    delay: 0.1,
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary-hookx" />,
    title: "Strategy + Execution = Growth",
    description: "Data-driven strategy combined with skilled execution to achieve measurable growth for creators and brands.",
    delay: 0.2,
  },
  {
    icon: <Zap className="h-10 w-10 text-primary-hookx" />,
    title: "Fast Turnarounds & Collaboration",
    description: "Quick delivery with personal attention ensures your content and campaigns are always on schedule.",
    delay: 0.3,
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    },
  }

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-24 bg-gradient-to-b from-background to-card/30"
    >
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
              Fuel Your Growth with HookX
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core services designed to help creators and brands achieve rapid, sustainable growth
              through engaging content and strategic marketing.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glow-card h-full border border-primary-hookx/10 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
