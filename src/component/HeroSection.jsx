import React from "react";
import hero from "../assets/hero.png"; // Import your hero image

const HeroSection = () => {
  // Define your key colors (you can put these in tailwind.config.js for better practice)
  // but for this component, defining them helps clarity.
  const accentOrange = "#FF9800";
  const primaryBlue = "#1E3A8A";
  const darkAccentBlue = "#0D47A1"; // Using this for hover text on Learn More

  return (
    // Full-width section with a background image
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image - Replace with a high-quality image of happy students or school */}
      {/* FIX: Corrected backgroundImage style syntax */}
      <div
        className="absolute  inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform hover:scale-105"
        style={{
          backgroundImage: `url('${hero}')`, // CORRECT SYNTAX
        }}
        aria-hidden="true"
      ></div>

      {/* Overlay for text readability - using a semi-transparent black is standard */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content layered above the background */}
      <div className="relative z-10 px-4">
        {/* Heading and Paragraph text look good in white on the dark overlay */}
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Welcome to <br /> EDUMENTORS KIDS INTERNATIONAL SCHOOL{" "}
          {/* Corrected typo SCHOOOL -> SCHOOL */}
        </h2>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          Innovative Creative Experiential {/* Using your tagline here */}
          {/* Original: Empowering the next generation through innovative education. */}
        </p>
        <div className="mt-8 space-x-4">
          {/* Apply Now Button: Using Accent Orange from logo */}
          <a
            href="#contact"
            style={{ backgroundColor: accentOrange }}
            className={`inline-block px-8 py-4 bg-[${accentOrange}] text-white font-bold text-lg rounded-full shadow-lg hover:bg-[#e68900] transition duration-300 transform hover:-translate-y-1`}
            // hover:bg-[#e68900] is a slightly darker orange
          >
            Apply Now
          </a>
          {/* Learn More Button: White outline, white text, Primary Blue text on hover */}
          <a
            href="/about"
            className={`inline-block px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full shadow-lg hover:bg-white hover:text-[#1E3A8A] transition duration-300 transform hover:-translate-y-1`}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
