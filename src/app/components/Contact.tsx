'use client'

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);  // Properly typed with HTMLFormElement or null
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;  // Ensure form.current is not null

    emailjs
      .sendForm(
        'service_wyylu9l',
        'template_2fm39oe',
        form.current,
        '8r_Q4k5iOQ0vc11x9'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitMessage('Message sent successfully!');
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitMessage('Failed to send the message. Please try again.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Get in Touch</h2>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-primary mb-6">Send Me a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  className="w-full p-3 rounded bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                  placeholder="Muhammad Shahbaz"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  className="w-full p-3 rounded bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                  placeholder="muhammadshahbaz@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5} 
                  className="w-full p-3 rounded bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-accent/80 transition duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {submitMessage && (
                <p className={`text-center ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-accent text-xl mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:haseebshahbazpk786@gmail.com" className="text-gray-600 hover:text-accent">haseebshahbazpk786@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-accent text-xl mr-4" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+923022951029" className="text-gray-600 hover:text-accent">+92 302 2951029</a>
                </div>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent text-xl mr-4" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Karachi, KHI, Pakistan</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-primary mb-4">Follow Me</h4>
              <div className="flex space-x-8">
                <a href="https://github.com/haseebshahbaz" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                </a>
                <a href="https://www.linkedin.com/in/mdhaseeb07/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-4xl" style={{ color: '#0A66C2' }} />
                </a>
                <a href="https://www.instagram.com/ch.haseebshahbaz/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-4xl" style={{ color: '#E4405F' }} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100013907506597" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-4xl" style={{ color: '#1877F2' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
