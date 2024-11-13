import React from 'react';
import Image from 'next/image';
import AliImg from "../assets/AliHassan.jpeg"
import Fatima from "../assets/FatimaZahra.jpeg"
import Usman from "../assets/UsmanKhan.jpg"

const testimonials = [
  {
    name: 'Ali Hassan',
    position: 'Senior Developer, TechVista Solutions',
    content: 'Muhammad Haseeb showed great potential during his internship. His eagerness to learn and ability to quickly grasp new concepts were impressive.',
    avatar: AliImg,
  },
  {
    name: 'Fatima Zahra',
    position: 'Project Lead, Folio3',
    content: 'I had the pleasure of mentoring Haseeb. His dedication to improving his skills and his positive attitude make him a promising young developer.',
    avatar: Fatima,
  },
  {
    name: 'Usman Khan',
    position: 'Freelance Web Developer',
    content: 'Haseeb and I collaborated on a small project. Despite being new to the field, he showed great problem-solving skills and a strong work ethic.',
    avatar: Usman,
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