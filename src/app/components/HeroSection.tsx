'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-background">
      {/* Background Shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full rounded-full bg-primary/10"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="text-primary">
                Muhammad Haseeb
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              Full Stack Developer | UI/UX Enthusiast | Tech Innovator
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link href="/#projects">
                  View My Work
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link href="/#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-10 top-1/4 w-4 h-4 rounded-full bg-primary/30" />
      <div className="absolute right-1/4 bottom-1/4 w-6 h-6 rounded-full bg-secondary/30" />
      <div className="absolute left-1/3 top-1/3 w-3 h-3 rounded-full bg-accent/30" />
    </section>
  )
}