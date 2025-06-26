"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Play } from "lucide-react"
import { ArrowRight } from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Define tab types
type PortfolioTab = 'educator' | 'startup';

// Example portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "AI Course Promo",
    category: "educator",
    thumbnail: "/portfolio/ai-course-promo.jpg",
    videoUrl: "https://www.youtube.com/embed/example1",
    description: "Promotional video for an AI education course"
  },
  {
    id: 2,
    title: "Product Demo Reel",
    category: "startup",
    thumbnail: "/portfolio/ai-product-demo.jpg",
    videoUrl: "https://www.youtube.com/embed/example2",
    description: "Short demo reel for an AI analytics platform"
  },
  {
    id: 3,
    title: "Tutorial Breakdown",
    category: "educator",
    thumbnail: "/portfolio/ai-tutorial.jpg",
    videoUrl: "https://www.youtube.com/embed/example3",
    description: "Educational breakdown of AI concepts"
  },
]

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>('educator');
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  
  const filteredItems = activeTab === 'educator' 
    ? portfolioItems.filter(item => item.category === 'educator')
    : portfolioItems.filter(item => item.category === 'startup');

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-24 bg-gradient-to-b from-background to-card/30"
    >
      <div className="container">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Content That Converts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              See how we transform complex AI concepts into engaging, shareable content.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Button 
                variant={activeTab === 'educator' ? 'default' : 'outline'}
                onClick={() => setActiveTab('educator')}
                className="transition-all"
              >
                For Educators
              </Button>
              <Button 
                variant={activeTab === 'startup' ? 'default' : 'outline'}
                onClick={() => setActiveTab('startup')}
                className="transition-all"
              >
                For Startups
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden group">
                <CardContent className="p-0 relative">
                  <div className="aspect-video relative bg-muted/50">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see what we'd do for your content?
          </p>
          <Button asChild>
            <Link href="https://calendly.com/createhookx/30min" target="_blank">
              Book a Sample Edit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}