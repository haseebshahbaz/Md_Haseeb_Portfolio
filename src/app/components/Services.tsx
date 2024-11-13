'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Globe, Zap } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.',
    icon: <Globe className="h-8 w-8 text-accent" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces and experiences.',
    icon: <Palette className="h-8 w-8 text-accent" />,
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end development from server-side logic to client-side rendering.',
    icon: <Code className="h-8 w-8 text-accent" />,
  },
  {
    title: 'Performance Optimization',
    description: 'Enhancing application speed and efficiency for better user experience.',
    icon: <Zap className="h-8 w-8 text-accent" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">My Services</h2>
          <p className="text-xl text-gray-600">Expertise to bring your ideas to life</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}