import React from "react";

const FacilitiesSection = () => {
  const facilities = [
    {
      name: "Smart Classrooms",
      image: "/path/to/facilities/smart-classroom.jpg",
    }, // *** REPLACE PATHS ***
    { name: "Science Labs", image: "/path/to/facilities/science-lab.jpg" },
    { name: "Computer Lab", image: "/path/to/facilities/computer-lab.jpg" },
    { name: "Library", image: "/path/to/facilities/library.jpg" },
    { name: "Sports Ground", image: "/path/to/facilities/sports-ground.jpg" },
    { name: "Auditorium", image: "/path/to/facilities/auditorium.jpg" },
    { name: "Transport", image: "/path/to/facilities/transport.jpg" },
    { name: "Cafeteria", image: "/path/to/facilities/cafeteria.jpg" },
  ]; // Add more facilities as needed

  return (
    // Section with a subtle background color
    <section className="bg-gray-50 py-16 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
            Our Infrastructure & Facilities
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We provide a safe, modern, and stimulating environment with
            state-of-the-art facilities to support every child's learning
            journey.
          </p>
        </div>

        {/* Grid of Facility Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition duration-300 ease-in-out"
            >
              {/* Facility Image */}
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-48 object-cover object-center" // Fixed height for consistency
              />
              {/* Facility Name */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {facility.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Link to a dedicated facilities page with more details/gallery */}
        <div className="text-center mt-12 md:mt-20">
          <a
            href="/facilities"
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-1"
          >
            View All Facilities
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
