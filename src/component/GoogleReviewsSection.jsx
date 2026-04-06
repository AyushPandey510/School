import React from "react";

const GoogleReviewsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100 text-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] mb-4">
        ⭐ What Parents Say
      </h2>

      <p className="text-gray-600 mb-10">
        Real reviews from our Google Business profile
      </p>

      {/* Google Map / Reviews */}
      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.4249517570297!2d72.83532617478302!3d19.425930940894702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9af6451c3ab%3A0xa2efc2f277c5fae9!2sEdumentors%20Kids%20International%20School!5e1!3m2!1sen!2sin!4v1775500662778!5m2!1sen!2sin"
          className="w-full h-[400px] md:h-[500px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title="Google Reviews"
        ></iframe>

      </div>

      {/* Button */}
      <a
        href="https://www.google.com/maps/place/Edumentors+Kids+International+School/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-6 py-3 bg-[#FF9800] text-white font-semibold rounded-full shadow-md hover:opacity-90 transition"
      >
        View All Reviews on Google →
      </a>

    </section>
  );
};

export default GoogleReviewsSection;