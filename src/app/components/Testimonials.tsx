import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO, Tech Innovators',
    content: 'Muhammad Haseeb is an exceptional developer. His attention to detail and problem-solving skills are unmatched.',
    avatar: '/john-doe-avatar.jpg',
  },
  {
    name: 'Jane Smith',
    position: 'Project Manager, Digital Solutions',
    content: 'Working with Haseeb was a pleasure. He consistently delivered high-quality work and met all deadlines.',
    avatar: '/jane-smith-avatar.jpg',
  },
  {
    name: 'Alex Johnson',
    position: 'Lead Developer, StartUp Inc.',
    content: 'Haseeb expertise in React and Next.js significantly improved our project performance and user experience.',
    avatar: '/alex-johnson-avatar.jpg',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-primary">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;