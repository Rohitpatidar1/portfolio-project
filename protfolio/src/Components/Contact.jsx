import React, { useState, useEffect } from "react";
import feather from "feather-icons";
import { createContact } from "../api/api"; // 👈 API import

// Feather Icon Component
const RenderFeatherIcon = ({ name, className }) => {
  useEffect(() => {
    feather.replace();
  }, []);
  return <i data-feather={name} className={className} />;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // 📝 Input handle
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await createContact(formData); // 👈 direct API call
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Error sending message");
    }
  };

  return (
    <section id="contact" className="py-24">
      {/* --- Section Title --- */}
      <div className="text-center mb-16 px-4">
        <h3 className="text-3xl font-bold dark:text-white">
          <span className="text-blue-500">05.</span> Get In Touch
        </h3>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          Have a project in mind or just want to say hello? My inbox is always
          open.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Let's talk about..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message{" "}
              <RenderFeatherIcon name="send" className="w-5 h-5 ml-2" />
            </button>

            {/* Status Message */}
            {status && (
              <p className="mt-4 text-center text-gray-500">{status}</p>
            )}
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Email */}
          <div className="flex items-start">
            <RenderFeatherIcon
              name="mail"
              className="w-8 h-8 text-blue-500 mt-1"
            />
            <div className="ml-4">
              <h4 className="text-xl font-bold dark:text-white">Email Me</h4>
              <p className="text-gray-600 dark:text-gray-400">
                I usually reply within a few hours.
              </p>
              <a
                href="mailto:rrohitpatidar1234@gmail.com"
                className="text-blue-500 hover:underline break-all"
              >
                rrohitpatidar1234@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start">
            <RenderFeatherIcon
              name="map-pin"
              className="w-8 h-8 text-blue-500 mt-1"
            />
            <div className="ml-4">
              <h4 className="text-xl font-bold dark:text-white">Location</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Based in India 🇮🇳
              </p>
              <span className="text-blue-500">
                Rajgarh, Madhya Pradesh, India
              </span>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-start">
            <RenderFeatherIcon
              name="github"
              className="w-8 h-8 text-blue-500 mt-1"
            />
            <div className="ml-4">
              <h4 className="text-xl font-bold dark:text-white">GitHub</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Check out my latest projects.
              </p>
              <a
                href="https://github.com/Rohitpatidar04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline break-all"
              >
                github.com/Rohitpatidar04
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start">
            <RenderFeatherIcon
              name="linkedin"
              className="w-8 h-8 text-blue-500 mt-1"
            />
            <div className="ml-4">
              <h4 className="text-xl font-bold dark:text-white">LinkedIn</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Let’s connect professionally.
              </p>
              <a
                href="https://www.linkedin.com/in/rohit-patidar04/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline break-all"
              >
                linkedin.com/in/rohit-patidar04
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
