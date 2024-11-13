'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: 'Front-end Development Intern',
    company: 'Internee.pk',
    duration: 'June 2023 - August 2023',
    description: 'Worked on various front-end projects, improving skills in HTML, CSS, and JavaScript. Collaborated with a team to redesign and optimize the company website.',
    achievements: [
      'Redesigned the company website, improving user engagement by 30%',
      'Implemented responsive design principles, ensuring mobile compatibility',
      'Collaborated with UX designers to improve site navigation and user flow'
    ]
  },
  {
    title: 'Front-end Development Intern',
    company: 'HI-SKY Tech',
    duration: 'September 2023 - November 2023',
    description: 'Assisted in developing responsive web applications using React. Gained experience in version control with Git and collaborative development practices.',
    achievements: [
      'Developed reusable React components, reducing development time by 20%',
      'Implemented state management using Redux, improving application performance',
      'Participated in code reviews and contributed to best practices documentation'
    ]
  },
]

const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-primary text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-primary flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-accent" />
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground">{exp.company} | {exp.duration}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                  >
                    {expandedExperience === index ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </div>
                <p className="mt-2 text-muted-foreground">{exp.description}</p>
                <AnimatePresence>
                  {expandedExperience === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="mt-4 list-disc list-inside text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
