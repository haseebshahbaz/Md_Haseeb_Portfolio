import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faCertificate } from "@fortawesome/free-solid-svg-icons";

const awards = [
  {
    title: 'Best Web Developer Award',
    organization: 'TechSummit 2023',
    year: '2023',
    icon: faTrophy,
  },
  {
    title: 'Innovation in Web Design',
    organization: 'DesignCon',
    year: '2022',
    icon: faTrophy,
  },
];

const certifications = [
  {
    title: 'AWS Certified Developer - Associate',
    organization: 'Amazon Web Services',
    year: '2023',
    icon: faCertificate,
  },
  {
    title: 'Google Cloud Professional Developer',
    organization: 'Google',
    year: '2022',
    icon: faCertificate,
  },
  {
    title: 'React Native Specialist',
    organization: 'Udacity',
    year: '2021',
    icon: faCertificate,
  },
];

const AwardsAndCertifications = () => {
  return (
    <section id="awards-certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Awards & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Awards</h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <FontAwesomeIcon icon={award.icon} className="text-accent text-2xl mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-primary">{award.title}</h4>
                    <p className="text-gray-600">{award.organization}</p>
                    <p className="text-sm text-gray-500">{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <FontAwesomeIcon icon={cert.icon} className="text-accent text-2xl mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-primary">{cert.title}</h4>
                    <p className="text-gray-600">{cert.organization}</p>
                    <p className="text-sm text-gray-500">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsAndCertifications;