"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Play } from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

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
    title: "High conversion reels",
    category: "Reels",
    thumbnail: "https://i.ytimg.com/vi/AnhJ5cbV78c/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/AnhJ5cbV78c?feature=share",
  },
  // {
  //   id: 5,
  //   title: "Viral Social Content",
  //   category: "Shorts",
  //   thumbnail: "https://images.unsplash.com/photo-1482164565953-04b62dcac1cd?q=80&w=800&auto=format&fit=crop",
  //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
  // },
  // {
  //   id: 6,
  //   title: "Course Launch Campaign",
  //   category: "Email",
  //   thumbnail: "https://images.unsplash.com/photo-1567443024551-f3e3a7b9d9c8?q=80&w=800&auto=format&fit=crop",
  //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
  // },
]

export function PortfolioSection() {
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
      id="portfolio"
      className="py-24 bg-gradient-to-b from-background to-card/30"
    >
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary-hookx mb-2">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work That Speaks (and Converts)
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of our best work showcasing our editing expertise and marketing strategies that drive real results.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer group overflow-hidden relative border-primary-hookx/10 bg-card/30 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="relative">
                        <AspectRatio ratio={16 / 9}>
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
                <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-background border-none">
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      className="w-full h-full"
                      src={item.videoUrl}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </AspectRatio>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}