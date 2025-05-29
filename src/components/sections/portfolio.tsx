"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Play } from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Define tab types
type PortfolioTab = 'Short-form' | 'Long-form';

// Example portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Visit the glory of Nepal",
    category: "Long-form",
    thumbnail: "https://i.ytimg.com/vi/6TENA_8Xr4I/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/6TENA_8Xr4I",
  },
  {
    id: 2,
    title: "Faceless Edits",
    category: "Short-form",
    thumbnail: "https://i.ytimg.com/vi/AnhJ5cbV78c/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/AnhJ5cbV78c?feature=share",
  },
  {
    id: 3,
    title: "High Converting Reels",
    category: "Short-form",
    thumbnail: "https://i.ytimg.com/vi/4Kq2CX6LRAI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/4Kq2CX6LRAI",
  },
  // {
  //   id: 6,
  //   title: "Course Launch Campaign",
  //   category: "Email",
  //   thumbnail: "https://images.unsplash.com/photo-1567443024551-f3e3a7b9d9c8?q=80&w=800&auto=format&fit=crop",
  //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
  // },
]

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>('Short-form');
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  
  const filteredItems = activeTab === 'Short-form'
    ? portfolioItems.filter(item => item.category === 'Short-form' || item.category === 'Shorts' || item.category === 'Reels')
    : portfolioItems.filter(item => item.category === 'Long-form');
    
  // Determine aspect ratio based on video type
  const getAspectRatio = (category: string) => {
    // Short-form content in portrait (9:16), Long-form in landscape (16:9)
    return (category === 'Short-form' || category === 'Shorts' || category === 'Reels') ? 9/16 : 16/9;
  };
  
  // Get width class based on content type
  const getCardWidth = (category: string) => {
    return 'w-full';
  };

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
              Work That Speaks (and Converts)
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A selection of our best work showcasing our editing expertise and marketing strategies that drive real results.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <button 
                className="text-2xl text-primary-hookx hover:text-primary-hookx/80 transition-colors"
                onClick={() => {
                  setActiveTab(prev => prev === 'Short-form' ? 'Long-form' : 'Short-form');
                }}
              >
                ←
              </button>
              
              <div className="text-xl font-medium flex items-center gap-2">
                <span className={`px-4 py-1 rounded-full ${activeTab === 'Short-form' ? 'bg-primary-hookx/10 text-primary-hookx' : 'text-muted-foreground'}`}>
                  Short-form
                </span>
                <span className="text-muted-foreground">/</span>
                <span className={`px-4 py-1 rounded-full ${activeTab === 'Long-form' ? 'bg-primary-hookx/10 text-primary-hookx' : 'text-muted-foreground'}`}>
                  Long-form
                </span>
              </div>
              
              <button 
                className="text-2xl text-primary-hookx hover:text-primary-hookx/80 transition-colors"
                onClick={() => {
                  setActiveTab(prev => prev === 'Short-form' ? 'Long-form' : 'Short-form');
                }}
              >
                →
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer group overflow-hidden relative border-primary-hookx/10 bg-card/30 backdrop-blur-sm w-[320px] mx-auto">
                      <CardContent className="p-0">
                        <div className="relative flex justify-center">
                          <AspectRatio ratio={getAspectRatio(item.category)}>
                            <Image
                              src={item.thumbnail}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              unoptimized={true}
                            />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="h-14 w-14 rounded-full bg-primary-hookx/90 flex items-center justify-center">
                              <Play className="h-6 w-6 text-white fill-current" />
                            </div>
                          </div>
                          <Badge variant="outline" className="absolute top-3 right-3 bg-black/60 text-white border-none">
                            {item.category}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg">{item.title}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className={`p-0 overflow-hidden bg-background border-none ${item.category === 'Short-form' ? 'max-w-[350px]' : 'sm:max-w-[800px]'}`}>
                    <AspectRatio ratio={getAspectRatio(item.category)}>
                      <div className="w-full h-full flex items-center justify-center bg-black">
                        <div className={`${item.category === 'Short-form' ? 'w-full h-full' : 'w-full h-full'}`}>
                          <iframe
                            className="w-full h-full border-0"
                            src={`${item.videoUrl}?autoplay=1&mute=0&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            frameBorder="0"
                            style={{
                              maxWidth: item.category === 'Short-form' ? '100%' : '100%',
                              maxHeight: item.category === 'Short-form' ? 'calc(100vh - 2rem)' : '100%',
                              margin: '0 auto',
                              display: 'block'
                            }}
                          />
                        </div>
                      </div>
                    </AspectRatio>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">No {activeTab.toLowerCase()} items to display.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}