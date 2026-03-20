import React from "react";

// Define your key colors based on the logo palette
// (Ideally these would be configured in tailwind.config.js, but defining them here for clarity)
const primaryBlue = "#1E3A8A"; // Used for headings, links, accents
const accentOrange = "#FF9800"; // Used for buttons, highlights (not used in this specific section but good to have)
const darkAccentBlue = "#0D47A1"; // Used for darker accents
const pageBackground = "#FFFFFF"; // White
const secondaryBackground = "#F0F0F0"; // Light gray (Using this for the section background)
const primaryText = "#333333"; // Dark gray for main body text
const secondaryText = "#555555"; // Slightly lighter gray if needed (using primaryText is usually fine)

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Holistic Development",
      description:
        "We focus on intellectual, social, emotional, and physical growth.",
      // Lightning bolt/Idea icon - Will change color via className
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10" // Color will be applied here
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Child-Centric Approach",
      description:
        "Education tailored to individual learning styles and needs.",
      // Lightbulb icon - Will change color via className
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10" // Color will be applied here
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 0A9 9 0 0121 12a9 9 0 01-9 9m-5.636-9.364l-3.536-3.536m0 0A9 9 0 013 12a9 9 0 019-9m7.778 2.222l-.493-.493M6.292 17.708l-.493-.493M11.684 7.22l-.493-.493m-.001 9.903l-.493-.493M10.242 12l-.493-.493m2.121 2.121l-.493-.493M8.111 16.976l-.493-.493m9.283-9.283l-.493-.493"
          />
        </svg>
      ),
    },
    {
      title: "Safe & Supportive Environment",
      description:
        "Prioritizing student well-being and a positive learning atmosphere.",
      // Shield check icon - Will change color via className
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10" // Color will be applied here
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.51A9.958 9.958 0 0120 12a9.958 9.958 0 01-1.382 4.49M12 20a9.958 9.958 0 01-4.49-1.382M5.618 7.51A9.958 9.958 0 004 12a9.958 9.958 0 001.382 4.49m0-9l-.305-.305A1.957 1.957 0 017.108 5.5M14.929 7.071l-.305-.305A1.957 1.957 0 0117.929 5.5M18.929 13.071l-.305-.305A1.957 1.957 0 0117.929 14.5M5.071 13.071l-.305-.305A1.957 1.957 0 006.464 14.5"
          />
        </svg>
      ),
    },
    {
      title: "Engaged Community",
      description:
        "Strong partnership between parents, students, and teachers.",
      // Users icon - Will change color via className
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10" // Color will be applied here
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.151-1.268-.432-1.812M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.151-.1268.432-1.812m0 0A7.001 7.001 0 0115.54 11.29a3 3 0 11-5.158-3.5L7.5 8.322M15.54 11.29c.867.259 1.708.62 2.456 1.096l4.043 4.04c1.177 1.177 1.177 3.09 0 4.267m-9.285-1.953c.261-.98.51-1.978.75-2.976M7 12v4l3.5-2L7 12z"
          />
        </svg>
      ),
    },
  ];

  return (
    // Section with a clean, light background (Secondary Background)
    <section className={`bg-[${secondaryBackground}] py-16 md:py-28`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          {/* Main Heading - Using Primary Blue */}
          <h2
            className={`text-3xl md:text-4xl font-extrabold text-[${primaryBlue}] leading-tight`}
          >
            Why Choose EDUMENTORS?
          </h2>
          {/* Intro Paragraph - Using Primary Text Color (dark gray) */}
          <p className={`mt-4 text-lg text-[${primaryText}] leading-relaxed`}>
            We are dedicated to providing an educational experience that is
            comprehensive, nurturing, and prepares students for a successful
            future.
          </p>
        </div>

        {/* Grid of Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              // Card Background using Page Background (White)
              // Border top using Primary Blue
              className={`bg-[${pageBackground}] p-6 rounded-lg text-center shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out border-t-4 border-[${primaryBlue}]`}
            >
              <div className="flex justify-center mb-4">
                {/* Icon color using Primary Blue */}
                {React.cloneElement(reason.icon, {
                  className: `${reason.icon.props.className} text-[${primaryBlue}]`,
                })}
              </div>
              {/* Card Title - Using Primary Blue */}
              <h3
                className={`text-xl font-semibold text-[${primaryBlue}] mb-3`}
              >
                {reason.title}
              </h3>
              {/* Card Description - Using Primary Text Color (dark gray) */}
              <p className={`text-[${primaryText}] text-base`}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
