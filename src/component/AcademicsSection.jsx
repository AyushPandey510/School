import React from "react";

const AcademicsSection = () => {
  // Define your key colors based on the logo palette
  const primaryBlue = "#1E3A8A"; // Used for headings, links, accents
  const accentOrange = "#FF9800"; // Used for buttons, highlights
  const darkAccentBlue = "#0D47A1"; // Used for darker accents, text on orange button
  const pageBackground = "#FFFFFF"; // White for section background
  const secondaryBackground = "#F0F0F0"; // Light gray for card backgrounds
  const primaryText = "#333333"; // Dark gray for main body text

  const academicAreas = [
    {
      title: "Comprehensive Curriculum",
      description:
        "Aligned with CBSE and Maharashtra board standards, our curriculum focuses on conceptual clarity and application-based learning.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-12 w-12 text-[${primaryBlue}]`} // Icon color updated to Primary Blue
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253"
          />
        </svg>
      ), // Book icon
    },
    {
      title: "Innovative Teaching",
      description:
        "We use modern pedagogical methods including smart classrooms, interactive sessions, and project-based learning.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-12 w-12 text-[${primaryBlue}]`} // Icon color updated to Primary Blue
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ), // Graduation Cap icon
    },
    {
      title: "Experienced Faculty",
      description:
        "Our passionate educators are highly qualified and dedicated to providing individual attention and mentorship.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-12 w-12 text-[${primaryBlue}]`} // Icon color updated to Primary Blue
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
      ), // User group icon
    },
    {
      title: "Focus on STEM",
      description:
        "We offer dedicated programs and labs to foster interest and skills in Science, Technology, Engineering, and Mathematics.",
      // Beaker icon (using a different icon path that looks more like a beaker/flask)
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-12 w-12 text-[${primaryBlue}]`} // Icon color updated to Primary Blue
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.28a2 2 0 00-1.022.547M9.168 12V8.884l1.818-.91a3 3 0 013.109 0l1.818.91V12M8.884 18.169L5.106 15.3c-.38-.353-.817-.62-1.292-.818A12.097 12.097 0 012 10.428V10a2 2 0 012-2h.087a2 2 0 012-2 2 2 0 012-2h.087a2 2 0 012-2 2 2 0 012-2h.087a2 2 0 012 2 2 2 0 012 2 2 2 0 012 2H20a2 2 0 012 2v.428c0 1.14-.32 2.323-.923 3.371-.563.926-1.348 1.465-2.129 2.11zm0 0l1.031 1.031A3.001 3.001 0 0115 20.966H9.033a3.001 3.001 0 01-2.12-.835l1.03-1.03zm6.57-4.289a6 6 0 00-3.86-.517l-.318.158a6 6 0 01-3.86.517"
          />
        </svg>
      ),
    },
  ];

  return (
    // Section background using Page Background color
    <section
      className={`bg-[${pageBackground}] py-16 md:py-28 relative overflow-hidden`}
    >
      {/* Optional: Subtle wave shape at the bottom */}
      {/* (Keeping this commented out as it requires complex CSS/SVG not easily done with Tailwind classes) */}

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          {/* Main Heading - Using Primary Blue */}
          <h2
            className={`text-3xl md:text-4xl font-extrabold text-[${primaryBlue}] leading-tight`}
          >
            Excellence in Academics
          </h2>
          {/* Intro Paragraph - Using Primary Text Color (dark gray) */}
          <p className={`mt-4 text-lg text-[${primaryText}] leading-relaxed`}>
            Our academic program is designed to build a strong foundation,
            foster critical thinking, and prepare students for future success in
            a globalized world.
          </p>
        </div>

        {/* Grid of Academic Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {academicAreas.map((area, index) => (
            <div
              key={index}
              // Card Background using Secondary Background color (Light Gray)
              className={`bg-[${secondaryBackground}] p-8 rounded-lg text-center shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out`}
            >
              <div className="flex justify-center mb-4">
                {/* Icon color is set directly in the SVG className */}
                {area.icon}
              </div>
              {/* Card Title - Using Primary Blue */}
              <h3
                className={`text-xl font-semibold text-[${primaryBlue}] mb-3`}
              >
                {area.title}
              </h3>
              {/* Card Description - Using Primary Text Color (dark gray) */}
              <p className={`text-[${primaryText}] text-base`}>
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: Link to full academics page */}
        <div className="text-center mt-12 md:mt-20">
          {/* Button using Accent Orange background and Dark Accent Blue text */}
          <a
            href="/academics"
            className={`inline-block px-8 py-4 bg-[${accentOrange}] text-[${darkAccentBlue}] font-bold text-lg rounded-lg shadow-lg hover:bg-[#e68900] transition duration-300 transform hover:-translate-y-1`}
            // hover:bg-[#e68900] is a slightly darker orange for hover effect
          >
            Explore Curriculum
          </a>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
