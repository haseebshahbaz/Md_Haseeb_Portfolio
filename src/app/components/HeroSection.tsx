'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm <span className="text-accent">Muhammad Haseeb</span>
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Developer | UI/UX Enthusiast | Tech Innovator
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="mr-4">
            <Link href="/#projects">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/#contact">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <svg className="absolute left-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0066" d="M47.5,-61.3C59.4,-52.7,66,-36.5,68.9,-20.4C71.8,-4.3,71,11.7,64.9,25.1C58.8,38.5,47.4,49.3,34.4,56.3C21.4,63.3,6.9,66.5,-8.6,66.1C-24.1,65.7,-40.6,61.7,-52.5,51.7C-64.4,41.7,-71.7,25.7,-73.5,9C-75.2,-7.7,-71.4,-24.9,-62.1,-37.5C-52.8,-50,-38,-57.8,-23.7,-64.5C-9.5,-71.1,4.2,-76.5,18.8,-74.8C33.5,-73,49,-69.9,47.5,-61.3Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  )
}