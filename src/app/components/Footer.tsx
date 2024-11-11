import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-center md:text-left text-md">
          © 2024 Muhammad Haseeb. All Rights Reserved.
        </p>

        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/mdhaseeb07/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-accent transition duration-300" />
          </a>
          <a href="https://github.com/haseebshahbaz" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-accent transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;