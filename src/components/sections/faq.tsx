"use client"

import React, { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Mail } from "lucide-react"

// Add ripple animation styles
const rippleStyles = `
  @keyframes ripple {
    0% { opacity: 0; }
    20% { opacity: 0.5; }
    100% { opacity: 0.5; }
  }
  @keyframes rippleWave {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
  }
  .animate-ripple {
    animation: ripple 4s infinite;
  }
  .animate-ripple-wave {
    animation: rippleWave 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
  }
`

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What's included in a typical edit?",
    answer: "Each edit includes: trimming & sequencing, color correction, basic motion graphics, captions, sound design, and one round of revisions. For AI product demos, we also include UI callouts and annotations to highlight key features."
  },
  {
    question: "How long does editing take?",
    answer: "Standard turnaround is 24-48 hours."
  },
  {
    question: "Do you work with AI-generated content?",
    answer: "Absolutely! We specialize in working with AI-generated footage, voiceovers, and screen recordings. Our editors are trained to smooth out common AI artifacts and ensure professional results."
  },
  {
    question: "What video formats do you accept?",
    answer: "We accept all common video formats (MP4, MOV, AVI, etc.) up to 4K resolution. For best results, provide the highest quality source files available. We'll handle optimization for different platforms."
  },
  {
    question: "Can you help with scripting or storyboarding?",
    answer: "Yes! We offer script consulting and storyboard creation as well.*"
  },
  {
    question: "How do revisions work?",
    answer: "Each project includes rounds of revisions as per the package."
  },
  {
    question: "Do you offer volume discounts?",
    answer: "Yes! We offer custom pricing for clients with ongoing or high-volume needs. Contact us at banshaj@createhookx.com to discuss your specific requirements and potential discounts."
  },
  {
    question: "What makes you different from other video editors?",
    answer: "We focus exclusively on AI content, which means we understand the unique challenges of making technical topics engaging. Our editors are trained in both storytelling and AI concepts, ensuring your content is both accurate and compelling."
  },
  {
    question: "How do I get started?",
    answer: "1. Book a quick call to discuss your needs 2. Choose a credit package 3. Share your assets and guidelines 4. We'll deliver your first edit within 48 hours. Get started by booking a call or emailing us at banshaj@createhookx.com"
  }
];

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Add ripple styles to document head
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = rippleStyles
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary-hookx/5 to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working with HookX
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Accordion 
                type="single" 
                collapsible 
                className="w-full"
                value={openIndex === index ? `item-${index}` : undefined}
                onValueChange={() => toggleAccordion(index)}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border border-primary-hookx/10 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-primary-hookx/5 transition-colors">
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 bg-primary-hookx/5">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      {faq.answer.split('\n').map((paragraph, i) => (
                        <p key={i} className="mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Credit Usage Guide</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b border-border/50">
                  <th className="py-3 px-4 font-medium">Content Type</th>
                  <th className="py-3 px-4 font-medium">Description</th>
                  <th className="py-3 px-4 font-medium text-right">Credit Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                <tr>
                  <td className="py-3 px-4 font-medium">Short-form Video (≤ 60 sec)</td>
                  <td className="py-3 px-4 text-muted-foreground">Designed for Reels, Shorts, and TikToks with hooks, motion graphics, subtitles & CTA</td>
                  <td className="py-3 px-4 font-medium text-right">1 Credit</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Mid-form Video (1–3 min)</td>
                  <td className="py-3 px-4 text-muted-foreground">Ideal for tutorials, explainers, demos & carousels</td>
                  <td className="py-3 px-4 font-medium text-right">1.5 Credits</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Long-form Video (3–10 min)</td>
                  <td className="py-3 px-4 text-muted-foreground">Optimized for YouTube or course content</td>
                  <td className="py-3 px-4 font-medium text-right">2 Credits</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Content Repurposing</td>
                  <td className="py-3 px-4 text-muted-foreground">We convert long-form into 3 short-form clips</td>
                  <td className="py-3 px-4 font-medium text-right">2 Credits</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Need help choosing the right package? <a href="mailto:banshaj@createhookx.com" className="text-primary-hookx hover:underline">Contact us</a> for a consultation.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're here to help! Book a quick call with our team to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="glow-button group">
              <a href="https://calendly.com/createhookx/30min" target="_blank">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-hookx/30 hover:bg-primary-hookx/5">
              <a href="mailto:banshaj@createhookx.com">
                Email Us
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
