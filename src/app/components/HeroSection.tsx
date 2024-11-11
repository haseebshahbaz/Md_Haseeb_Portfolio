import React from "react";
import Image from "next/image";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4">
            Hi, I'm <span className="text-accent">Muhammad Haseeb</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary">
            Full Stack Developer | Creative Thinker | Problem Solver
          </h2>

          <div className="mt-8">
            <Link href="#projects">
              <button className="px-6 py-3 bg-accent hover:bg-accent/80 text-white font-bold rounded-md text-sm md:text-base transition duration-300 shadow-lg">
                View My Work
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/Haseeb.jpg"
            alt="Muhammad Haseeb"
            width={320}
            height={320}
            className="rounded-full object-cover shadow-lg border-4 border-secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;