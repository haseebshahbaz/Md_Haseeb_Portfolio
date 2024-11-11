'use client'

import React, { useState } from "react";
import { smoothScroll } from "../utils/smoothScroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-primary fixed w-full z-10 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => smoothScroll(e, 'home')} className="text-2xl font-bold">
              Md. Haseeb
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary focus:outline-none focus:text-secondary"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <ul
            className={`md:flex md:items-center md:space-x-6 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto transition-all duration-500 ease-in ${
              isOpen ? "top-16 opacity-100 shadow-md md:shadow-none" : "top-[-400px] opacity-0 md:opacity-100"
            }`}
          >
            {["Home", "About", "Projects", "Skills", "Contact"].map((section) => (
              <li key={section} className="mx-4 my-6 md:my-0 text-lg">
                <a
                  href={`#${section.toLowerCase()}`}
                  onClick={(e) => {
                    smoothScroll(e, section.toLowerCase());
                    setIsOpen(false);
                  }}
                  className="hover:text-secondary transition duration-300"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;