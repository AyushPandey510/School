import React from "react";
import learning from "../assets/learning2.jpeg"; // Import your learning image

// Define your key colors based on the logo palette
// (Ideally these would be configured in tailwind.config.js, but defining them here for clarity)
const primaryBlue = "#1E3A8A"; // Used for headings, links, accents
const accentOrange = "#FF9800"; // Used for buttons, highlights
const darkAccentBlue = "#0D47A1"; // Used for darker accents, text on orange button
const pageBackground = "#FFFFFF"; // White (Using this for the section background)
const secondaryBackground = "#F0F0F0"; // Light gray (An alternative light background)
const primaryText = "#333333"; // Dark gray for main body text

const AdmissionSection = () => {
  return (
    // Section with a clean, light background (Page Background)
    <section
      className={`bg-[${pageBackground}] py-16 md:py-24 overflow-hidden`}
    >
      <div className="container mx-auto px-4">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-12">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2 order-2 md:order-1 relative">
            {/* Subtle absolute background shape - Using Primary Blue with opacity */}
            <div
              className={`absolute inset-0 bg-[${primaryBlue}] rounded-lg transform -rotate-2 translate-x-4 translate-y-4 opacity-50 hidden md:block`}
            ></div>

            {/* Replace with your actual high-quality school image */}
            {/* NOTE: Replace src path with your actual image file path */}
            <img
              src={learning} // *** REPLACE THIS PATH *** Use actual paths like /images/...
              alt="Happy students learning at EDUMENTORS KIDS INTERNATIONAL SCHOOL" // Corrected typo SCHOOOL -> SCHOOL
              className="relative w-full h-64 md:h-auto object-cover rounded-lg shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
              style={{ maxHeight: "450px" }}
            />
          </div>

          {/* Right Column: Text Content and Button */}
          <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
            {/* Small uppercase text - Using Primary Blue */}
            <p
              className={`text-sm md:text-base text-[${primaryBlue}] font-semibold uppercase tracking-wide`}
            >
              Future Starts Here
            </p>

            {/* Main Heading - Using Primary Blue */}
            <h2
              className={`mt-2 text-3xl md:text-4xl font-extrabold text-[${primaryBlue}] leading-tight`}
            >
              Admissions <br className="sm:hidden" /> Open for 2025-2026
            </h2>

            {/* Paragraph text - Using Primary Text Color (dark gray) */}
            <p
              className={`mt-4 text-base md:text-lg leading-relaxed text-[${primaryText}]`}
            >
              Give your child the gift of quality education and holistic
              development. Join the EDUMENTORS family for the upcoming academic
              session. Enrollment is open for Nursery to 10th Standard.
            </p>

            {/* Call-to-Action Button */}
            {/* Background: Accent Orange, Text: Dark Accent Blue */}
            <a
              href="/admissions" // Link to your actual admissions page or form
              className={`inline-block mt-8 px-8 py-4 bg-[${accentOrange}] text-[${darkAccentBlue}] font-bold text-lg rounded-full shadow-lg hover:bg-[#e68900] hover:shadow-xl transition duration-300 transform hover:-translate-y-1`}
              // hover:bg-[#e68900] is a slightly darker orange for hover effect
            >
              Apply Now
            </a>

            {/* Link text - Using Primary Blue */}
            <p className={`mt-4 text-sm text-[${primaryBlue}]`}>
              <a href="/admissions-process" className="hover:underline">
                Learn more about our admission process
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
