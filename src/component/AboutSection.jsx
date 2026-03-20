import React from "react";
import engaging from "../assets/engaging.png"; // Import your engaging image

const AboutSection = () => {
  // Define your key colors based on the logo palette
  const primaryBlue = "#1E3A8A"; // Used for headings, links, accents
  const accentOrange = "#FF9800"; // Used for buttons, highlights
  const darkAccentBlue = "#0D47A1"; // Used for darker accents, text on orange
  const pageBackground = "#F8F8F8"; // Very light gray for background
  const primaryText = "#333333"; // Dark gray for main body text

  return (
    // Section background using Page Background color
    <section
      className={`bg-[${pageBackground}] text-[${primaryText}] py-16 md:py-28 relative overflow-hidden`}
    >
      {/* Absolute positioning background elements (decorative) */}
      {/* Using Primary Blue with opacity */}
      <div
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-64 h-64 bg-[${primaryBlue}] opacity-30 hidden md:block`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-48 h-48 bg-[${primaryBlue}] opacity-20 rounded-tl-full hidden md:block`}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-20">
          {/* Left Column: Image with unique rotation effect */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
              {/* Replace with your actual school image */}
              <img
                src={engaging}
                alt="Students engaging in learning at EDUMENTORS SCHOOL"
                className="w-full h-72 md:h-96 object-cover object-center"
              />
              {/* Optional Image Overlay - Using Dark Accent Blue with opacity */}
              <div
                className={`absolute inset-0 bg-[${darkAccentBlue}] opacity-30`}
              ></div>
            </div>
            {/* Optional: Another decorative element - Using Accent Orange */}
            <div
              className={`absolute -bottom-4 -left-4 w-24 h-24 bg-[${accentOrange}] rounded-full opacity-80 mix-blend-screen hidden md:block`}
            ></div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Small uppercase text - Using Primary Blue */}
            <p
              className={`text-sm md:text-base text-[${primaryBlue}] font-semibold uppercase tracking-wider`}
            >
              Our Philosophy & Values
            </p>

            {/* Main Heading - Using Primary Blue */}
            <h2
              className={`mt-3 text-3xl md:text-4xl font-extrabold text-[${primaryBlue}] leading-tight`}
            >
              Nurturing Excellence, <br className="sm:hidden" /> Shaping Futures
            </h2>

            {/* Paragraph Text - Using Primary Text Color (dark gray) */}
            <p
              className={`mt-6 text-base md:text-lg leading-relaxed text-[${primaryText}]`}
            >
              At EDUMENTORS KIDS INTERNATIONAL SCHOOL, we are committed to
              providing a vibrant and supportive learning environment that
              fosters intellectual curiosity, creativity, and character
              development. Our curriculum is designed to challenge students
              while nurturing their unique talents.
            </p>
            {/* Paragraph Text - Using Primary Text Color (dark gray) */}
            <p
              className={`mt-4 text-base md:text-lg leading-relaxed text-[${primaryText}] hidden md:block`}
            >
              With state-of-the-art facilities and a team of dedicated
              educators, we empower students to become confident, compassionate,
              and responsible global citizens.
            </p>

            {/* Call-to-Action Button */}
            {/* Background: Accent Orange, Text: Dark Accent Blue for contrast */}
            <a
              href="/about-us"
              className={`inline-block mt-10 px-8 py-4 bg-[${accentOrange}] text-[${darkAccentBlue}] font-bold text-lg rounded-lg shadow-xl hover:bg-[#e68900] transition duration-300 transform hover:-translate-y-1 hover:scale-105`}
              // hover:bg-[#e68900] is a slightly darker orange for hover effect
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
