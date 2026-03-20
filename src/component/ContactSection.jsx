import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Define your key colors based on the logo palette
// (Ideally these would be configured in tailwind.config.js, but defining them here for clarity)
const primaryBlue = "#1E3A8A"; // Used for headings, links, accents
const accentOrange = "#FF9800"; // Used for buttons, highlights, icons
const darkAccentBlue = "#0D47A1"; // Used for darker accents, text on orange button
const pageBackground = "#FFFFFF"; // White (Used for form background)
const secondaryBackground = "#F0F0F0"; // Light gray (Using this for the section background)
const primaryText = "#333333"; // Dark gray for main body text
const secondaryText = "#555555"; // Slightly lighter gray (not strictly needed here)

const ContactSection = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // EmailJS configuration - Replace with your own credentials
      // Get these from: https://www.emailjs.com/docs/
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Send email using EmailJS
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      
      console.log("Form submitted successfully!", formData);
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      // EmailJS error handling
      // Status 412 usually means template variables don't match
      let errorMessage = "Something went wrong. Please try again.";
      
      if (error && error.text) {
        const errorText = error.text;
        console.log("EmailJS error text:", errorText);
        
        if (errorText.includes("412")) {
          errorMessage = "Template error: Please check your EmailJS template has variables: {{name}}, {{email}}, {{phone}}, {{message}}";
        } else if (errorText.includes("400")) {
          errorMessage = "Configuration error: Please check your Service ID and Template ID in .env file.";
        } else if (errorText.includes("401")) {
          errorMessage = "Authentication error: Please check your Public Key in .env file.";
        } else {
          errorMessage = `Error: ${errorText}`;
        }
      }
      
      setErrorMessage(errorMessage);
      setStatus("error");
    }
  };
  return (
    // Section with a light background (Secondary Background)
    <section
      className={`bg-[${secondaryBackground}] py-16 md:py-28 relative overflow-hidden`}
    >
      {/* Absolute positioning background elements (decorative) - Using Primary Blue with opacity */}
      <div
        className={`absolute top-0 left-0 w-48 h-48 bg-[${primaryBlue}] opacity-30 transform -translate-x-1/2 -translate-y-1/2 rotate-45 hidden md:block`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-32 h-32 bg-[${primaryBlue}] opacity-30 transform translate-x-1/2 translate-y-1/2 -rotate-45 hidden md:block`}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading - Using Primary Blue */}
        <h2
          className={`text-3xl md:text-4xl font-extrabold text-center text-[${primaryBlue}] mb-12`}
        >
          Get in Touch
        </h2>

        {/* Two-column layout (Info and Form) */}
        <div className="flex flex-col md:flex-row items-start md:justify-between gap-12 md:gap-20">
          {/* Left Column: Introduction & Prominent Contact Options */}
          <div className="w-full md:w-1/2">
            {/* Introduction Text - Using Primary Text */}
            <p
              className={`text-base md:text-lg leading-relaxed text-[${primaryText}] mb-8`}
            >
              We're excited to connect with you! Whether you have questions
              about admissions, want to schedule a visit, or just want to learn
              more about the EDUMENTORS experience, please feel free to reach
              out.
            </p>

            {/* Prominent Contact Links with Icons */}
            <div className="space-y-8">
              {" "}
              {/* Increased space between items */}
              {/* Phone Contact */}
              <div className="flex items-center">
                {/* Icon - Using Accent Orange for visibility */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8 text-[${accentOrange}] flex-shrink-0`} // Larger icon, Accent Orange color
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
                {/* Link - Using Primary Blue text, hover underline */}
                <a
                  href="tel:+91[Your Phone Number]" // REPLACE PHONE NUMBER
                  className={`ml-4 text-lg font-semibold text-[${primaryBlue}] hover:underline transition duration-200`} // Larger text, bolder, Primary Blue
                >
                  +91 7774083739
                </a>
              </div>
              {/* Email Contact */}
              <div className="flex items-center">
                {/* Icon - Using Accent Orange for visibility */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8 text-[${accentOrange}] flex-shrink-0`} // Larger icon, Accent Orange color
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
                {/* Link - Using Primary Blue text, hover underline */}
                <a
                  href="mailto:[Your School Email]" // REPLACE EMAIL
                  className={`ml-4 text-lg font-semibold text-[${primaryBlue}] hover:underline transition duration-200`} // Larger text, bolder, Primary Blue
                >
                  edumentorskis2023@gmail.com
                </a>
              </div>
              {/* Visit/Map Link */}
              <div className="flex items-center">
                {/* Icon - Using Accent Orange for visibility */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8 text-[${accentOrange}] flex-shrink-0`} // Larger icon, Accent Orange color
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
                {/* Link - Using Primary Blue text, hover underline */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Nallasopara+East+Vasai+Palghar+401209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ml-4 text-lg font-semibold text-[${primaryBlue}] hover:underline transition duration-200`} // Larger text, bolder, Primary Blue
                >
                  Plan Your Visit / View on Map
                </a>
              </div>
              {/* Optional: Hours (Less prominent or removed if preferred) */}
              {/* If keeping, style consistently with text-[${primaryText}] or text-[${secondaryText}] */}
              {/*
                <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-[${primaryBlue}] flex-shrink-0 mt-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className={`ml-3 text-[${primaryText}]`}>
                        Office Hours: <br /> Mon - Fri, [Time] to [Time]
                    </p>
                </div>
                */}
            </div>

            {/* Embedded Google Map */}
             <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4189060849353!2d72.81501567510447!3d19.42506268187621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9d6e1b7b3b9%3A0x5a1e8e9d5c8f8c8c!2sNallasopara%2C%20Vasai%2C%20Palghar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709286400000!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location Map"
                  ></iframe>
             </div>
            {/*
             <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
                 <iframe
                    src="[YOUR GOOGLE MAPS EMBED URL]" // *** REPLACE THIS WITH YOUR ACTUAL MAP URL ***
                    width="100%"
                    height="200" // Smaller height for a concise look
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location Map"
                  ></iframe>
            </div>
            */}
          </div>

          {/* Right Column: Contact Form (Remains the same) */}
          {/* Form background using Page Background (White) */}
          <div
            className={`w-full md:w-1/2 bg-[${pageBackground}] p-8 rounded-lg shadow-xl`}
          >
            {/* Form Subheading - Using Primary Blue */}
            <h3
              className={`text-2xl font-semibold text-[${primaryBlue}] mb-6 text-center md:text-left`}
            >
              Send us a Message
            </h3>

            {/* Add your form submission logic here (e.g., using Formik or just state) */}
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-5">
                {/* Label text - Using Primary Text */}
                <label
                  className={`block text-[${primaryText}] font-semibold mb-2`}
                  htmlFor="name"
                >
                  Name
                </label>
                {/* Input field - Using default gray borders, Primary Blue on focus */}
                <input
                  className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[${primaryBlue}30] focus:border-[${primaryBlue}] transition duration-200`}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-5">
                {/* Label text - Using Primary Text */}
                <label
                  className={`block text-[${primaryText}] font-semibold mb-2`}
                  htmlFor="email"
                >
                  Email Address
                </label>
                {/* Input field - Using default gray borders, Primary Blue on focus */}
                <input
                  className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[${primaryBlue}30] focus:border-[${primaryBlue}] transition duration-200`}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-5">
                {/* Label text - Using Primary Text */}
                <label
                  className={`block text-[${primaryText}] font-semibold mb-2`}
                  htmlFor="phone"
                >
                  Phone Number (Optional)
                </label>
                {/* Input field - Using default gray borders, Primary Blue on focus */}
                <input
                  className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[${primaryBlue}30] focus:border-[${primaryBlue}] transition duration-200`}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                {/* Label text - Using Primary Text */}
                <label
                  className={`block text-[${primaryText}] font-semibold mb-2`}
                  htmlFor="message"
                >
                  Your Message
                </label>
                {/* Textarea field - Using default gray borders, Primary Blue on focus */}
                <textarea
                  className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[${primaryBlue}30] focus:border-[${primaryBlue}] transition duration-200`}
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Enter your message or query here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button - Using Accent Orange background and Dark Accent Blue text */}
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`w-full px-6 py-4 bg-[${accentOrange}] text-[${darkAccentBlue}] font-bold text-lg rounded-lg shadow-lg hover:bg-[#e68900] transition duration-300 transform hover:-translate-y-1 ${
                  status === "submitting" ? "opacity-50 cursor-not-allowed" : ""
                }`}
                // hover:bg-[#e68900] is a slightly darker orange for hover effect
              >
                {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="mt-4 text-center text-green-600 font-semibold">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-center text-red-600 font-semibold">
                  {errorMessage || "Something went wrong. Please try again or contact us directly."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
