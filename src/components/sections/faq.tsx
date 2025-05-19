"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// FAQ data
const faqItems = [
  {
    question: "What kind of content do you edit?",
    answer: "We specialize in editing a wide range of video content including YouTube videos, TikToks, Instagram Reels, promotional content, course videos, and more. Our team has experience with various styles from talking head videos to dynamic B-roll heavy content, product demos, and educational material.",
  },
  {
    question: "Do you work with raw or existing footage?",
    answer: "We work with both! You can send us your raw footage for full editing, or we can enhance and optimize existing content. For maximum quality, we recommend providing raw footage when possible, but we can work with whatever you have to create engaging content.",
  },
  {
    question: "How quickly can you launch a campaign?",
    answer: "For email marketing campaigns, we can typically set up your first campaign within 3-5 business days after receiving all necessary assets and information. For more complex email flows or full marketing sequences, we'll develop a timeline based on your specific needs, usually within 1-2 weeks.",
  },
  {
    question: "Can I book a discovery call?",
    answer: "Absolutely! We encourage potential clients to book a free strategy call to discuss your specific needs, goals, and how our services can help you achieve them. You can use our Calendly link to schedule a call at a time that works for you.",
  },
  {
    question: "Do you only work with brands?",
    answer: "No, we work with both individual creators and brands of all sizes. Whether you're a solo YouTuber, an influencer, a small business, or an established brand, our services can be tailored to meet your specific content and marketing needs.",
  },
  {
    question: "What's your typical turnaround time for video edits?",
    answer: "Our standard turnaround time for video edits is 24-48 hours, depending on the complexity and length of the project. For clients on our higher-tier plans, we offer priority turnaround times. Rush delivery is also available for an additional fee if you have urgent projects.",
  },
  {
    question: "Do you offer any money-back guarantees?",
    answer: "Yes, we stand behind our work with a satisfaction guarantee. If you're not completely satisfied with our services, we'll work with you to address any concerns. For new clients, we offer a risk-free trial period on our monthly packages.",
  },
  {
    question: "What type of support do you provide?",
    answer: "All our packages include dedicated support via email and our client portal. Higher-tier plans include regular strategy calls and more direct communication with your assigned editor or email marketing specialist. We pride ourselves on responsive, helpful customer service.",
  },
]

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-24 bg-gradient-to-b from-card/30 to-background"
    >
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and how we can help you grow.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-primary-hookx/10 rounded-lg overflow-hidden bg-card/30 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 hover:no-underline hover:bg-primary-hookx/5 transition-colors">
                    <span className="text-left">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              Still have questions? We're here to help!
            </p>
            <Button asChild className="glow-button group">
              <Link href="#contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
