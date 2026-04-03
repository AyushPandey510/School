import React, { useState } from "react";
import logo from "../assets/logo (1).png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    // Sticky header with gradient background and shadow
    <header className="bg-gradient-to-r bg-[#FFFFFF] text-[#1E3A8A] shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* School Logo and Title */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <img
            src={logo}
            alt="School Logo"
            className="h-20 w-auto object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold leading-tight">
              EDUMENTORS KIDS <br className="md:hidden" /> INTERNATIONAL SCHOOL
            </h1>
          </div>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#1E3A8A] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle mobile menu"
          >
            {/* Heroicons SVG or similar */}
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links (Desktop and Mobile) */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-center md:text-left">
            <button
              onClick={() => scrollToSection("hero")}
              className="block md:inline-block py-2 px-3 md:p-0 rounded hover:bg-blue-600 md:hover:bg-transparent hover:text-blue-200 transition duration-300 ease-in-out"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block md:inline-block py-2 px-3 md:p-0 rounded hover:bg-blue-600 md:hover:bg-transparent hover:text-blue-200 transition duration-300 ease-in-out"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("academics")}
              className="block md:inline-block py-2 px-3 md:p-0 rounded hover:bg-blue-600 md:hover:bg-transparent hover:text-blue-200 transition duration-300 ease-in-out"
            >
              Academics
            </button>
            <button
              onClick={() => scrollToSection("admissions")}
              className="block md:inline-block py-2 px-3 md:p-0 rounded hover:bg-blue-600 md:hover:bg-transparent hover:text-blue-200 transition duration-300 ease-in-out"
            >
              Admissions
            </button>
            <button
              onClick={() => scrollToSection("activities")}
              className="block md:inline-block py-2 px-3 md:p-0 rounded hover:bg-blue-600 md:hover:bg-transparent hover:text-blue-200 transition duration-300 ease-in-out"
            >
              Activities
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block md:inline-block py-2 px-3 md:p-0 rounded hover:bg-blue-600 md:hover:bg-transparent hover:text-blue-200 transition duration-300 ease-in-out"
            >
              Contact Us
            </button>
            {/* 
            {/* Optional Call to Action Button */}

            {/* <a href="/apply" className="block md:inline-block bg-yellow-400 text-blue-800 font-bold py-2 px-4 rounded hover:bg-yellow-300 transition duration-300 ease-in-out">
              Apply Now
            </a>
             */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
