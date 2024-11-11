import React from "react";
import Link from 'next/link';

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-10 space-y-10 md:space-y-0">
        <div className="w-64 h-64 mb-8 md:mb-0 md:w-72 md:h-72 lg:w-80 lg:h-80">
          <img
            src="https://via.placeholder.com/300"
            alt="Profile"
            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-secondary"
          />
        </div>

        <div className="md:w-2/3 text-center md:text-left space-y-4">
          <h2 className="text-4xl lg:text-4xl font-extrabold text-primary mb-4">
            About Me
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
            I'm a passionate Full Stack Developer with a knack for creating
            modern, responsive web applications. I love building sleek,
            performant applications that solve real-world problems. My journey
            as a developer has equipped me with skills in React, Node.js,
            Firebase, and more, which I use to bring creative ideas to life.
          </p>

          <ul className="text-sm md:text-base lg:text-lg text-gray-600 space-y-3">
            <li>
              <span className="font-bold text-secondary">Expertise:</span> Full Stack Development, React, Node.js, Firebase
            </li>
            <li>
              <span className="font-bold text-secondary">Experience:</span> 3+ years in web development
            </li>
            <li>
              <span className="font-bold text-secondary">Specialization:</span> Creating responsive, user-friendly applications
            </li>
          </ul>

          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <Link href="#contact">
              <button className="bg-accent hover:bg-accent/80 text-white font-bold py-2 px-6 rounded-md text-sm md:text-base transition duration-300 shadow-lg">
                Contact Me
              </button>
            </Link>
            <a
              href="https://drive.google.com/file/d/1HB88ac57o_cBc767lrIu3p3yDixjweSX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold py-2 px-6 rounded-md text-sm md:text-base transition duration-300 shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;