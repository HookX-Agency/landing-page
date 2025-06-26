"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"
import { Star } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

// Example testimonials
const testimonials = [
  {
    name: "Alex Chen",
    role: "AI Course Creator",
    avatar: "/testimonials/alex-chen.jpg",
    content:
      "HookX transformed my technical AI tutorials into engaging content that actually keeps students watching. Our course completion rates increased by 40% after their edits.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Head of Marketing, AI Startup",
    avatar: "/testimonials/sarah-johnson.jpg",
    content:
      "Their ability to distill complex AI features into clear, compelling demos is unmatched. We've seen a 3x increase in demo signups since using their video content.",
    rating: 5,
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "AI Researcher & Educator",
    avatar: "/testimonials/michael-rodriguez.jpg",
    content:
      "As someone who's not naturally comfortable on camera, I was amazed at how HookX made my lectures engaging. The way they highlight key concepts with graphics is brilliant.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "CEO, AI Automation Platform",
    avatar: "/testimonials/priya-patel.jpg",
    content:
      "We've tried multiple video editors, but HookX is the only one that truly understands how to showcase AI products. Our conversion rate on demo videos has never been higher.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary-hookx/20 via-background to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by AI Educators & Builders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with us.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-primary-hookx/10 bg-card/50 backdrop-blur-sm hover:border-primary-hookx/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary-hookx/20">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic relative pl-4 border-l-2 border-primary-hookx/30">
                    "{testimonial.content}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join these happy clients?
          </p>
          <Button asChild size="lg" className="glow-button group">
            <Link href="https://calendly.com/createhookx/30min" target="_blank">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
