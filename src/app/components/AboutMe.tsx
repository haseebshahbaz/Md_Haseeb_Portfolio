'use client'

import React from "react"
import Image from "next/image"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import AboutImage from "../assets/ProfileImg.jpg"

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={AboutImage.src}
              alt="Muhammad Haseeb - Full Stack Developer"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>

          <motion.div 
            className="md:w-2/3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm a passionate Full Stack Developer with a knack for creating
              modern, responsive web applications. I love building sleek,
              performant applications that solve real-world problems. My journey
              as a developer has equipped me with skills in React, Node.js,
              Firebase, and more, which I use to bring creative ideas to life.
            </motion.p>

            <motion.ul 
              className="space-y-2 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <li>
                <span className="font-semibold text-foreground">Expertise:</span> Full Stack Development, React, Node.js, Firebase
              </li>
              <li>
                <span className="font-semibold text-foreground">Experience:</span> 3+ years in web development
              </li>
              <li>
                <span className="font-semibold text-foreground">Specialization:</span> Creating responsive, user-friendly applications
              </li>
            </motion.ul>

            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild>
                <Link href="#contact">
                  Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://drive.google.com/file/d/1HB88ac57o_cBc767lrIu3p3yDixjweSX/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe