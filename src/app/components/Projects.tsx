'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReact, faJs, faCss3, faHtml5, faNextjs } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Internee.pk Website Redesign",
    description: "Redesigned the front end of the Internee.pk website to enhance user experience as part of my second task at Internee.pk.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/haseebshahbaz/Internee.pk",
    liveLink: "https://haseebshahbaz.github.io/Internee.pk/",
    imageUrl: "/Internee.png",
    category: "Frontend"
  },
  {
    title: "Toolscape",
    description: "A comprehensive tool-based platform that offers various AI tools like image generation, icon generation, and more. It showcases my skills in full-stack development.",
    technologies: ["React", "Next.js", "CSS"],
    githubLink: "https://github.com/haseebshahbaz/Toolscape",
    liveLink: "https://toolscape.com",
    imageUrl: "/Toolscape.png",
    category: "Full Stack"
  },
];

const techIcons = {
  HTML: faHtml5,
  CSS: faCss3,
  JavaScript: faJs,
  React: faReact,
  "Next.js": faNextjs
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Projects</h2>

        <div className="flex justify-center mb-8">
          {['All', 'Frontend', 'Backend', 'Full Stack'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category
                  ? 'bg-accent text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-200"
            >
              <div className="md:w-1/2">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full mr-2 mb-2"
                    >
                      {techIcons[tech] && <FontAwesomeIcon icon={techIcons[tech]} className="mr-1" />}
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    GitHub
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-accent text-white rounded hover:bg-accent/80 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faLink} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;