import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCertificate } from "@fortawesome/free-solid-svg-icons";

const education = [
  {
    title: 'Higher Secondary School Certificate (HSSC)',
    institution: 'Board of Intermediate Education Karachi (BIEK)',
    year: '2023',
    icon: faGraduationCap,
  },
  {
    title: 'Secondary School Certificate (SSC)',
    institution: 'Board of Secondary Education Karachi (BSEK)',
    year: '2021',
    icon: faGraduationCap,
  },
];

const certifications = [
  {
    title: 'Web and Mobile App Development',
    organization: 'Saylani Mass IT Training Program (SMIT)',
    details: 'Completed Front-end Development, currently learning Back-end',
    year: '2023 - Present',
    icon: faCertificate,
  },
  {
    title: 'Certified Cloud Applied Generative AI Engineer (GenEng)',
    organization: 'Governor Sindh Initiative for GenAI, Web3, and Metaverse (GIAIC)',
    details: 'In progress',
    year: '2023 - Present',
    icon: faCertificate,
  },
];

const EducationAndCertifications = () => {
  return (
    <section id="education-certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Education & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <FontAwesomeIcon icon={edu.icon} className="text-accent text-2xl mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-primary">{edu.title}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
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
                    <p className="text-sm text-gray-700">{cert.details}</p>
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

export default EducationAndCertifications;