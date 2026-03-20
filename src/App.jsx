import React from "react";
import Header from "./component/Header";
import AdmissionSection from "./component/AdmissionSection";
import AboutSection from "./component/AboutSection";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import AcademicsSection from "./component/AcademicsSection";
import FacilitiesSection from "./component/FacilitiesSection";
import ActivitiesSection from "./component/ActivitiesSection";
import WhyChooseUsSection from "./component/WhyChooseUsSection";
import TestimonialsSection from "./component/TestimonialsSection";

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="academics">
        <AcademicsSection />
      </div>
      {/* <div id="facilities">
        <FacilitiesSection />
      </div> */}
      <div id="activities">
        <ActivitiesSection />
      </div>
      <div id="why-choose-us">
        <WhyChooseUsSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="admissions">
        <AdmissionSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
