"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Video, BookOpen, TrendingUp, Zap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Video className="h-10 w-10 text-primary-hookx" />,
    title: "Narrative-Led Editing",
    description: "We don't just cut clips — we craft a clear story that simplifies your AI product or lesson for the audience you're targeting.",
    delay: 0,
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary-hookx" />,
    title: "Niche-Specific Strategy",
    description: "From technical demos to educational reels, we edit with a deep understanding of AI tooling, trends, and educator psychology.",
    delay: 0.1,
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary-hookx" />,
    title: "Built for Growth",
    description: "Every video is optimized for virality, clarity, and call-to-action placement. This isn't content for content's sake — it's content that converts.",
    delay: 0.2,
  },
  {
    icon: <Zap className="h-10 w-10 text-primary-hookx" />,
    title: "Credit System = Speed",
    description: "Fast-paced startup? Teaching weekly? Our credit system gives you fast, flexible delivery without bloated retainers.",
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
              What Makes HookX Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic video editing tailored specifically for AI educators and product teams.
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
              <Card className="glow-card h-full border border-primary-hookx/10 bg-card/50 backdrop-blur-sm hover:border-primary-hookx/30 transition-colors">
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
