import React, { useState } from "react";
import cricket from "../assets/cricket2.jpeg";
import dance from "../assets/dance2.jpeg";
import music from "../assets/music2.jpeg";
import art from "../assets/art2.jpeg";
import yoga from "../assets/yoga2.jpeg";
import debate from "../assets/debate2.jpeg";
import scienceClub from "../assets/science2.jpeg";
import celebrate2 from "../assets/celebrate2.jpeg"; // *** REPLACE PATHS *** Use actual paths like /images/...

const primaryBlue = "#1E3A8A"; // Used for headings, links, accents
const accentOrange = "#FF9800"; // Used for buttons, highlights
const darkAccentBlue = "#0D47A1"; // Used for section background, text on orange button
const pageBackground = "#FFFFFF"; // White (used in other sections, noting for context)
const secondaryBackground = "#F0F0F0"; // Light gray (used in other sections, noting for context)
const primaryText = "#333333"; // Dark gray (used for main body text on light backgrounds)

const ActivitiesSection = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedActivity(null);
  };

  const activities = [
    {
      name: "Cricket",
      image: cricket,
      description:
        "Develop teamwork, discipline, and physical fitness through cricket training and matches.",
      schedule: "Every Monday and Wednesday, 11:00 AM - 1:00 PM",
    },
    {
      name: "Dance",
      image: dance,
      description:
        "Express creativity and learn various dance forms including classical, contemporary, and folk.",
      schedule: "Every Tuesday and Thursday, 11:00 AM - 1:00 PM",
    },
    {
      name: "Music",
      image: music,
      description:
        "Learn vocal and instrumental music, develop rhythm and musical appreciation.",
      schedule: "Every Monday and Friday, 11:00 AM - 1:00 PM",
    },
    {
      name: "Art & Craft",
      image: art,
      description:
        "Explore creativity through various art forms, painting, and craft activities.",
      schedule: "Every Wednesday and Friday, 11:30 AM - 1:00 PM",
    },
    {
      name: "Yoga",
      image: yoga,
      description:
        "Promote physical and mental well-being through yoga and meditation.",
      schedule: "Every Tuesday and Thursday, 11:00 AM - 1:00 PM",
    },
    {
      name: "Debate Club",
      image: debate,
      description:
        "Develop critical thinking, public speaking, and argumentation skills.",
      schedule: "Every Monday and Wednesday, 11:00 AM - 1:00 PM",
    },
    {
      name: "Science Club",
      image: scienceClub,
      description:
        "Explore scientific concepts through hands-on experiments and projects.",
      schedule: "Every Tuesday and Friday, 11:00 AM - 1:00 PM",
    },
    {
      name: "Annual Day",
      image: celebrate2,
      description:
        "Annual celebration showcasing students' talents and achievements.",
      schedule: "Annual event in December",
    },
  ];

  return (
    // Section with Dark Accent Blue background
    <section
      id="activities"
      className={`bg-[#1E3A8A] text-white py-16 md:py-28 relative overflow-hidden`}
    >
      {/* Optional: Subtle shapes can be added here using Primary Blue or Accent Orange */}

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          {/* Main Heading - Using White on Dark Accent Blue */}
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {" "}
            {/* drop-shadow removed, not needed on white text on dark bg */}
            Beyond Academics
          </h2>
          {/* Intro Paragraph - Using White on Dark Accent Blue */}
          <p className="mt-4 text-lg leading-relaxed">
            {" "}
            {/* text-teal-100 and drop-shadow-sm removed */}
            We believe in holistic development, offering a wide range of
            extracurricular activities that allow students to explore their
            passions and talents.
          </p>
        </div>

        {/* Grid of Activity Cards with Image Overlay Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              onClick={() => handleActivityClick(activity)}
              className="relative rounded-lg overflow-hidden shadow-xl group transform hover:-translate-y-2 transition duration-300 ease-in-out cursor-pointer"
            >
              {/* Activity Image */}
              {/* NOTE: Replace src paths with your actual image file paths */}
              <img
                src={activity.image}
                alt={activity.name}
                className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110" // Scale image on hover
              />
              {/* Overlay with Text - Keeping black overlay as it works well over diverse images */}
              {/* You could potentially use bg-[${primaryBlue}] or bg-[${darkAccentBlue}] here with higher opacity */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Activity Name Text - Keeping White text on the dark overlay */}
                <h3 className="text-xl font-bold text-white text-center p-4">
                  {activity.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Activity Details */}
        {isModalOpen && selectedActivity && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-gray-900 rounded-lg max-w-2xl w-full p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img
                    src={selectedActivity.image}
                    alt={selectedActivity.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">
                    {selectedActivity.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {selectedActivity.description}
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#1E3A8A] mb-2">
                      Schedule:
                    </h4>
                    <p className="text-gray-600">{selectedActivity.schedule}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivitiesSection;
