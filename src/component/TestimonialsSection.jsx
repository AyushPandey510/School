import React from "react";
// For a real slider, you'd use a library like react-slick or swiper
// import Slider from 'react-slick'; // Example import

// Define your key colors based on the logo palette
// (Ideally these would be configured in tailwind.config.js, but defining them here for clarity)
const primaryBlue = "#1E3A8A"; // Used for headings, links, accents
const accentOrange = "#FF9800"; // Used for buttons, highlights, image border
const darkAccentBlue = "#0D47A1"; // Used for darker accents
const pageBackground = "#FFFFFF"; // White (used for card backgrounds)
const secondaryBackground = "#F0F0F0"; // Light gray (Using this for the section background)
const primaryText = "#333333"; // Dark gray for main body text
const secondaryText = "#555555"; // Slightly lighter gray for author title

const TestimonialsSection = () => {
  // Sample testimonial data
  const testimonials = [
    {
      quote:
        "Joining EDUMENTORS was the best decision for our child. The teachers are incredibly supportive, and the focus on overall development is commendable. Highly recommend!",
      author: "Mrs. Priya Sharma",
      title: "Parent of Class 7 Student",
      image: "/images/testimonials/parent1.jpg", // *** REPLACE PATHS *** Use actual paths like /images/...
    },
    {
      quote:
        "The school provides a fantastic learning environment. My daughter loves going to school, and I've seen a remarkable improvement in her confidence and academic performance.",
      author: "Mr. Rajesh Kumar",
      title: "Parent of Class 4 Student",
      image: "/images/testimonials/parent2.jpg",
    },
    {
      quote:
        "The facilities are top-notch, and the variety of extracurricular activities is amazing. It's a place where kids genuinely enjoy learning and growing.",
      author: "Mrs. Anjali Singh",
      title: "Parent of Class 9 Student",
      image: "/images/testimonials/parent3.jpg",
    },
    {
      // Added more sample data to demonstrate horizontal scroll
      quote:
        "The academic support is exceptional. My son feels challenged and motivated, and the teachers go the extra mile to help him succeed.",
      author: "Mr. Sanjay Mehta",
      title: "Parent of Class 6 Student",
      image: "/images/testimonials/parent4.jpg",
    },
    {
      quote:
        "The school community is warm and welcoming. We feel like a part of a big family, and the communication with parents is excellent.",
      author: "Mrs. Fatima Khan",
      title: "Parent of Class 3 Student",
      image: "/images/testimonials/parent5.jpg",
    },
    {
      quote:
        "The emphasis on values and character building is very important to us. EDUMENTORS is shaping not just students, but good individuals.",
      author: "Mr. David Lee",
      title: "Parent of Class 8 Student",
      image: "/images/testimonials/parent6.jpg",
    },
  ];

  return (
    // Section with a light background (Secondary Background)
    <section className={`bg-[${secondaryBackground}] py-16 md:py-28`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          {/* Main Heading - Using Primary Blue */}
          <h2
            className={`text-3xl md:text-4xl font-extrabold text-[${primaryBlue}] leading-tight`}
          >
            What Our Parents Say
          </h2>
          {/* Intro Paragraph - Using Primary Text Color (dark gray) */}
          <p className={`mt-4 text-lg text-[${primaryText}] leading-relaxed`}>
            Hear from the families who are part of the EDUMENTORS community.
          </p>
        </div>

        {/* Testimonial Slider Placeholder (Horizontal Scroll) */}
        {/* Use flexbox with horizontal overflow */}
        <div className="flex space-x-8 overflow-x-auto pb-4 snap-x snap-mandatory">
          {/* Added pb-4 for scrollbar visibility on some browsers */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              // Card Background using Page Background (White)
              // flex-none and specific width for horizontal layout
              className={`bg-[${pageBackground}] flex-none w-[300px] md:w-[350px] lg:w-[400px] p-8 rounded-lg shadow-lg text-center md:text-left snap-center transform hover:-translate-y-2 transition duration-300 ease-in-out`}
            >
              {/* Quote Icon - Using Primary Blue */}
              <svg
                className={`mx-auto md:mx-0 h-8 w-8 text-[${primaryBlue}] mb-4`}
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12s4.365 9.75 9.75 9.75c1.067 0 2.123-.114 3.133-.326C18.58 20.165 19 19.143 19 18.077V14.25a.75.75 0 00-.75-.75H15V11.25A2.25 2.25 0 0012.75 9h-1.5a.75.75 0 00-.75.75v2.25H9a.75.75 0 00-.75.75v3.75c0 1.066.42 2.08 1.11 2.841a9.716 9.716 0 004.182 1.352 9.726 9.726 0 003.182-.329z" />
              </svg>
              {/* Quote Text - Using Primary Text Color (dark gray) */}
              <p
                className={`text-lg italic text-[${primaryText}] leading-relaxed`}
              >
                "{testimonial.quote}"
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start">
                {/* Author Image */}
                {/* NOTE: Replace src paths with your actual image file paths */}
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  // Border using Accent Orange
                  className={`h-16 w-16 rounded-full object-cover object-top border-2 border-[${accentOrange}] mb-3 sm:mb-0 sm:mr-4`}
                />
                {/* Author Info */}
                <div className="text-center md:text-left">
                  {/* Author Name - Using Primary Blue */}
                  <p className={`text-lg font-semibold text-[${primaryBlue}]`}>
                    {testimonial.author}
                  </p>
                  {/* Author Title - Using Secondary Text Color (slightly lighter gray) */}
                  <p className={`text-sm text-[${secondaryText}]`}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End Testimonial Placeholder */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
