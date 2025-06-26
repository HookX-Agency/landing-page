"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, CheckCircle2, Loader2, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Define Calendly types
interface CalendlyInlineWidgetOptions {
  url: string;
  parentElement: HTMLElement | null;
  prefill: Record<string, unknown>;
  utm: Record<string, string>;
}

interface Calendly {
  initInlineWidget: (options: CalendlyInlineWidgetOptions) => void;
}

declare global {
  interface Window {
    Calendly?: Calendly;
  }
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const calendlyRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [isCalendlyReady, setIsCalendlyReady] = useState(false)

  useEffect(() => {
    if (!isInView || typeof window === 'undefined') return;

    const loadCalendly = () => {
      if (window.Calendly) {
        setIsCalendlyReady(true)
        return
      }

      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => setIsCalendlyReady(true)
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }

    loadCalendly()
  }, [isInView])

  useEffect(() => {
    if (isCalendlyReady && calendlyRef.current) {
      window.Calendly?.initInlineWidget({
        url: 'https://calendly.com/createhookx/30min?hide_gdpr_banner=1&primary_color=765eef',
        parentElement: calendlyRef.current,
        prefill: {},
        utm: {}
      })
    }
  }, [isCalendlyReady])

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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary-hookx/5 to-transparent"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary-hookx/5 to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your AI Content?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a call to discuss your project and get a free content strategy session.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div 
            className="bg-card/50 backdrop-blur-sm border border-primary-hookx/10 rounded-2xl p-8 lg:p-10"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6">Book a Strategy Call</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">What to expect:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-hookx mt-0.5 flex-shrink-0" />
                    <span>15-minute discovery call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-hookx mt-0.5 flex-shrink-0" />
                    <span>Content strategy assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-hookx mt-0.5 flex-shrink-0" />
                    <span>Customized recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-hookx mt-0.5 flex-shrink-0" />
                    <span>No obligation quote</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-primary-hookx/10">
                <h4 className="font-medium mb-3">Prefer email?</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="outline" className="border-primary-hookx/30 hover:bg-primary-hookx/5">
                    <a href="mailto:banshaj@createhookx.com">
                      <Mail className="mr-2 h-4 w-4" />
                      banshaj@createhookx.com
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-card/50 backdrop-blur-sm border border-primary-hookx/10 rounded-2xl overflow-hidden h-[600px] min-h-[500px]"
            variants={itemVariants}
            ref={calendlyRef}
          >
            {!isCalendlyReady && (
              <div className="h-full flex items-center justify-center bg-muted/30">
                <div className="text-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary-hookx mx-auto mb-4" />
                  <p className="text-muted-foreground">Loading scheduling tool...</p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary-hookx/5 rounded-full">
            <MessageSquare className="h-5 w-5 text-primary-hookx" />
            <span className="text-sm font-medium">Questions? Email us at <a href="mailto:banshaj@createhookx.com" className="text-primary-hookx hover:underline">banshaj@createhookx.com</a></span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
