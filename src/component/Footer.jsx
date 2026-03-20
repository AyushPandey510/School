import React from "react";
import logofinal from "../assets/logofinal.png"; // Import your logo image

// Define your key colors based on the logo palette
// (Ideally these would be configured in tailwind.config.js, but defining them here for clarity)
const primaryBlue = "#1E3A8A"; // Used for some accents if needed
const accentOrange = "#FF9800"; // Used for contact icons
const darkAccentBlue = "#0D47A1"; // Used for footer background
const pageBackground = "#FFFFFF"; // White (Not used on dark footer)
const secondaryBackground = "#E0E0E0"; // Light gray (Used for secondary text, divider)
const primaryText = "#333333"; // Dark gray (Not used on dark footer)

const Footer = () => {
  return (
    // Dark footer with grid layout - Using Dark Accent Blue background and reduced padding
    <footer className={`bg-[#1E3A8A] text-white py-10 md:py-12`}>
      {" "}
      {/* Reduced padding */}
      <div className="container mx-auto px-4">
        {/* Grid for footer columns (Now 3 columns on md and larger) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-12">
          {" "}
          {/* Changed to md:grid-cols-3 */}
          {/* Column 1: Brand Info & Logo */}
          <div className="col-span-1">
            {" "}
            {/* col-span-1 is fine */}
            {/* Replace with your actual school logo (white/light version) */}
            {/* NOTE: Replace src path with your actual image file path */}
            <img
              src={logofinal}
              alt="EDUMENTORS KIDS INTERNATIONAL SCHOOL Logo"
              className="h-10 w-auto object-contain mb-4" // Slightly reduced logo height
            />
            {/* Brand Name - Using White */}
            <h3 className={`text-xl font-bold text-white`}>
              EDUMENTORS KIDS INTERNATIONAL SCHOOL
            </h3>
            {/* Tagline - Using Secondary Background color (Light Gray) for better contrast */}
            <p
              className={`mt-3 text-sm leading-relaxed text-[${secondaryBackground}]`}
            >
              Innovative Creative Experiential {/* Using tagline from logo */}
              {/* Previous: Nurturing young minds for a brighter tomorrow through holistic education. */}
            </p>
          </div>
          {/* Column 2 (Previous Quick Links) is REMOVED */}
          {/* Column 2 (Now Contact Information) */}
          <div className="col-span-1">
            {" "}
            {/* col-span-1 is fine */}
            {/* Heading - Using White */}
            <h3 className={`text-lg font-semibold text-white mb-6`}>Contact</h3>
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start">
                {/* Icon - Using Accent Orange for visibility */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-[${accentOrange}] flex-shrink-0 mt-1`} // Changed icon color
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {/* Text - Using Secondary Background color (Light Gray) */}
                <p className={`ml-3 text-[${secondaryBackground}]`}>
                  1st Floor, Anant Niwas , Santosh Bhuvan Naka, Nallasopara (East), Vasai, Palghar 401209 {/* Added your provided address */}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                {/* Icon - Using Accent Orange for visibility */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-[${accentOrange}] flex-shrink-0`} // Changed icon color
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm10 0a2 2 0 012-2h3a2 2 0 012 2v6a2 2 0 01-2 2h-3a2 2 0 01-2-2V5zm-6 16a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v4a1 1 0 001 1h3zm10 0a1 1 0 001-1v-4a1 1 0 00-1-1h-3a1 1 0 00-1 1v4a1 1 0 001 1h3z"
                  />
                </svg>
                {/* Link - Using White text, hover White (default underline) */}
                <a
                  href="tel:+917744990288"
                  className={`ml-3 text-white hover:underline transition duration-200`}
                >
                  +91 7774083739 {/* Added your provided phone */}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center">
                {/* Icon - Using Accent Orange for visibility */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-[${accentOrange}] flex-shrink-0`} // Changed icon color
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"
                  />
                </svg>
                {/* Link - Using White text, hover White (default underline) */}
                <a
                  href="mailto:edumentorskis2023@gmail.com"
                  className={`ml-3 text-white hover:underline transition duration-200`}
                >
                  edumentorskis2023@gmail.com {/* Added your provided email */}
                </a>
              </div>

              {/* Optional: Working Hours */}
              {/* Removed Working Hours as it makes the column longer */}
              {/*
              <div className="flex items-start">
                 <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-[${accentOrange}] flex-shrink-0 mt-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                <p className={`ml-3 text-[${secondaryBackground}]`}>
                  Office Hours: <br /> Mon - Fri, [Time] to [Time]
                </p>
              </div>
              */}

              {/* Optional: Link to Map */}
              {/* Moved the map link to the Contact Section, not typically in a minimal footer */}
              {/*
              <div className="flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-[${accentOrange}] flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3v-7m6 7l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 9v-7m0 0V9m0 0a1 1 0 00-1-1H9m2 8V9a1 1 0 00-1-1H9m0 0V6a1 1 0 011-1h1a1 1 0 011 1v1h1a1 1 0 011 1v1h1a1 1 0 011 1v7m-9 3h.01M7 16h.01" />
                    </svg>
                <a
                  href="[Link to Google Maps]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ml-3 text-white hover:underline transition duration-200`}
                >
                  View on Map
                </a>
              </div>
               */}
            </div>
          </div>
          {/* Column 3 (Now Social Media) */}
          <div className="col-span-1">
            {" "}
            {/* col-span-1 is fine */}
            {/* Heading - Using White */}
            <h3 className={`text-lg font-semibold text-white mb-6`}>
              Follow Us
            </h3>
            {/* Icons - Using White fill, hover opacity */}
            <div className="flex space-x-6 text-white">
              {" "}
              {/* Set base text color to white for icons */}
              {/* Social Media Icons - Replace hrefs with actual links */}
              <a
                href="[Link to Facebook]" // REPLACE LINK
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80 transition duration-200" // Using opacity change for hover
              >
                <svg
                  fill="currentColor" // Fill the icon with the current text color (white)
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.79c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="[Link to Twitter]" // REPLACE LINK
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:opacity-80 transition duration-200" // Using opacity change for hover
              >
                <svg
                  fill="currentColor" // Fill the icon with the current text color (white)
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.356-.012-.534A8.359 8.359 0 0022 5.92a8.191 8.191 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.273 4.116 4.116 0 001.27 5.477A4.073 4.073 0 014 9.659v.052a4.118 4.118 0 003.294 4.022 4.09 4.09 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="[Link to Instagram]" // REPLACE LINK
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition duration-200" // Using opacity change for hover
              >
                <svg
                  fill="currentColor" // Fill the icon with the current text color (white)
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.715.01 3.67.05a4.48 4.48 0 013.06 1.73c1.078 1.078 1.73 2.45 1.73 3.06a4.48 4.48 0 01.05 3.67c.04 1.053.04 1.337.04 3.67s0 2.62-.04 3.67a4.48 4.48 0 01-1.73 3.06c-1.078 1.078-2.45 1.73-3.06 1.73a4.48 4.48 0 01-3.67.05c-1.053-.04-1.337-.04-3.67-.04s-2.62 0-3.67.04a4.48 4.48 0 01-3.06-1.73C2.01 16.66 1.35 15.29 1.35 14.68a4.48 4.48 0 01-.05-3.67c-.04-1.053-.04-1.337-.04-3.67s0-2.62.04-3.67a4.48 4.48 0 011.73-3.06C3.34 2.01 4.71 1.35 5.32 1.35a4.48 4.48 0 013.67-.05c1.053.04 1.337.04 3.67.04zm0 2.16a9.46 9.46 0 00-3.11.144 7.28 7.28 0 00-2.17 1.05c-.78.66-1.39 1.52-1.01 2.43.223.56.553.89 1.02 1.36a7.28 7.28 0 001.05 2.17 9.46 9.46 0 00.145 3.11 7.28 7.28 0 001.05 2.17c.66.78 1.52 1.39 2.43 1.01.56-.223.89-.553 1.36-1.02a7.28 7.28 0 002.17-1.05 9.46 9.46 0 003.11-.145 7.28 7.28 0 002.17-1.05c.78-.66 1.39-1.52 1.01-2.43-.223-.56-.553-.89-1.02-1.36a7.28 7.28 0 00-2.17-1.05 9.46 9.46 0 00-3.11-.145zm0 3.638a4.32 4.32 0 100 8.64 4.32 4.32 0 000-8.64zm0 2.16a2.16 2.16 0 110 4.32 2.16 2.16 0 010-4.32zm7.29-.844a1.08 1.08 0 100 2.16 1.08 1.08 0 000-2.16z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* Add more social links */}
            </div>
          </div>
        </div>
        {/* Divider Line - Using Secondary Background color (Light Gray) for visibility */}
        <hr className={`border-[${secondaryBackground}] my-10 md:my-12`} />{" "}
        {/* Reduced margin */}
        {/* Bottom Row: Copyright & Footer Nav (Optional) */}
        {/* Text - Using Secondary Background color (Light Gray) for visibility */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between text-sm text-[${secondaryBackground}] space-y-4 md:space-y-0`}
        >
          <p>
            © {new Date().getFullYear()} EDUMENTORS KIDS INTERNATIONAL SCHOOL.
            All rights reserved.
          </p>
          {/* Optional: Additional footer navigation links - Removed to simplify footer */}
          {/*
            <ul className="flex space-x-4">
              <li><a href="/privacy-policy" className="text-white hover:underline transition duration-200">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-white hover:underline transition duration-200">Terms of Service</a></li>
            </ul>
            */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
