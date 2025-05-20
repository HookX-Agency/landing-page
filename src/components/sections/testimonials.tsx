"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

// Example testimonials
const testimonials = [
  {
    id: 1,
    content: "HookX transformed my content strategy. Their video edits increased my engagement by 300% and their email campaigns consistently drive 5-figure product launches.",
    author: "Alex Morgan [SAMPLE]",
    role: "Creator & Course Author",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    initials: "AM",
  },
  { 
    id: 2,
    content: "Working with HookX has been game-changing for our brand. Their editing style perfectly captures our voice, and the email flows they set up have increased our conversion rate by 28%.",
    author: "Michael Chen [SAMPLE]",
    role: "E-commerce Brand Owner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    initials: "MC",
  },
  {
    id: 3,
    content: "Since partnering with HookX, my YouTube channel has grown from 5K to over 50K subscribers. Their edits keep viewers engaged and their email marketing has doubled my course sales.",
    author: "Sophia Rodriguez [SAMPLE]",
    role: "YouTube Educator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    initials: "SR",
  },
  {
    id: 4,
    content: "I tried multiple editors before finding HookX. Their attention to detail and understanding of what makes content perform is unmatched. My views and conversion rates speak for themselves.",
    author: "James Wilson [SAMPLE]  ",
    role: "Tech Influencer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    initials: "JW",
  },
  {
    id: 5,
    content: "HookX delivers consistently excellent work that has helped grow my audience and boost my sales. They understand what works on each platform and optimize accordingly.",
    author: "Emma Taylor [SAMPLE]",
    role: "Lifestyle Brand Founder",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    initials: "ET",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

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
      id="testimonials"
      className="py-24 bg-gradient-to-b from-card/30 to-background"
    >
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Clients, In Their Own Words
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These are sample testimonials showcasing the type of results HookX can achieve for creators and brands.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <Card className="glow-card h-full border border-primary-hookx/10 bg-card/30 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-primary-hookx/40 mb-4" />
                  <p className="text-lg mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional video testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <Card className="glow-card border border-primary-hookx/10 bg-card/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video relative">
                {/* This would be a YouTube embed in production */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="text-center p-8">
                    <Quote className="h-16 w-16 text-primary-hookx/60 mx-auto mb-4" />
                    <h3 className="text-2xl font-medium mb-2">Hear from our clients</h3>
                    <p className="text-muted-foreground">Video testimonial would be embedded here</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
