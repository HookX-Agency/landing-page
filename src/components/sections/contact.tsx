"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Calendar, ArrowRight, Mail, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute -top-[20%] -right-[10%] w-[40%] h-[70%] rounded-full bg-primary-hookx/20 blur-3xl" />
        <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-hookx/30 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
              Let&apos;s Create Something Bold
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a free strategy call to see how HookX can help you grow through engaging content and strategic marketing.
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glow-card h-full border border-primary-hookx/10 bg-card/30 backdrop-blur-sm">
              <CardHeader>
                <div className="mb-4">
                  <Calendar className="h-10 w-10 text-primary-hookx" />
                </div>
                <CardTitle className="text-2xl">Schedule Your Strategy Call</CardTitle>
                <CardDescription className="text-base">
                  Discover how HookX can help you grow through strategic content and marketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-xl font-bold text-primary-hookx mb-4">
                      Ready to Grow Your Business?
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Book your 30-minute strategy call now
                    </p>
                  </div>
                  <div className="relative">
                    <iframe
                      src="https://calendly.com/createhookx/30min"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      title="Calendly Booking"
                      className="rounded-lg border border-primary-hookx/10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
