'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, LinkIcon, Code, Layout, Database, Server } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import InterneeImg from "../assets/Internee.png"
import ToolscapeImg from "../assets/Toolscape.png"
import BlogistaImg from "../assets/Blogista.png"

// Define the project type
type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  imageUrl: any;
  category: string;
}

// Projects data
const projects: Project[] = [
  {
    title: "Internee.pk Website Redesign",
    description: "Redesigned the front end of the Internee.pk website to enhance user experience as part of my second task at Internee.pk.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/haseebshahbaz/Internee.pk",
    liveLink: "https://haseebshahbaz.github.io/Internee.pk/",
    imageUrl: InterneeImg,
    category: "Frontend"
  },
  {
    title: "Toolscape",
    description: "A comprehensive tool-based platform that offers various AI tools like image generation, icon generation, and more. It showcases my skills in full-stack development.",
    technologies: ["React", "Next.js", "CSS"],
    githubLink: "https://github.com/haseebshahbaz/Toolscape",
    liveLink: "https://toolscape.com",
    imageUrl: ToolscapeImg,
    category: "Full Stack"
  },
  {
    title: "Blogista",
    description: "A platform for creating and sharing blog posts, designed to offer a user-friendly experience. Developed using Next.js, Firebase, and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/haseebshahbaz/Blogista",
    liveLink: "https://blogista-blog-website.vercel.app/",
    imageUrl: BlogistaImg,
    category: "Frontend"
  }
]

// Define techIcons with explicit types for the icons
const techIcons: Record<string, JSX.Element> = {
  HTML: <Code className="w-4 h-4" />,
  CSS: <Layout className="w-4 h-4" />,
  JavaScript: <Code className="w-4 h-4" />,
  React: <Code className="w-4 h-4" />,
  "Next.js": <Database className="w-4 h-4" />,
  Firebase: <Server className="w-4 h-4" />
}

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  // Filter projects by category
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-primary text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['All', 'Frontend', 'Backend', 'Full Stack'].map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className="mx-2"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.title ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </motion.div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="flex items-center gap-1">
                        {techIcons[tech] || <Code className="w-4 h-4" />}
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Button asChild variant="outline" size="sm">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
