import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const experiences = [
  {
    title: 'Front-end Development Intern',
    company: 'Internee.pk',
    duration: 'June 2023 - August 2023',
    description: 'Worked on various front-end projects, improving skills in HTML, CSS, and JavaScript. Collaborated with a team to redesign and optimize the company website.',
  },
  {
    title: 'Front-end Development Intern',
    company: 'HI-SKY Tech',
    duration: 'September 2023 - November 2023',
    description: 'Assisted in developing responsive web applications using React. Gained experience in version control with Git and collaborative development practices.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faBriefcase} className="text-accent text-2xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                </div>
              </div>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;