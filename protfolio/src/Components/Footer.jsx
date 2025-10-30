// src/Components/Footer.jsx
import React from "react";
import feather from "feather-icons";

// Feather Icon Component
const RenderFeatherIcon = ({ name, className }) => {
  React.useEffect(() => {
    feather.replace();
  }, []);
  return <i data-feather={name} className={className} />;
};

// "Back to Top" button functionality
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright Notice */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} [Rohit Patidar]. All Rights Reserved.
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Rohitpatidar1" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
              aria-label="GitHub"
            >
              <RenderFeatherIcon name="github" className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohitpatidar5001/" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <RenderFeatherIcon name="linkedin" className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/rohit__patidar5001/" // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
              aria-label="Instagram"
            >
              <RenderFeatherIcon name="instagram" className="w-6 h-6" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Back to top"
          >
            <RenderFeatherIcon
              name="arrow-up"
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
