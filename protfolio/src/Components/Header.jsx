// src/Components/Header.jsx
import { useEffect, useState } from "react";
import feather from "feather-icons";
import { HashLink } from "react-router-hash-link"; // <-- YEH LINE SABSE ZAROORI HAI

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme manually (CDN setup)
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    feather.replace();
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo link using HashLink */}
        <HashLink
          smooth
          to="/#home"
          className="text-2xl font-bold dark:text-white tracking-wider"
        >
          &lt;Rohit Patidar /&gt;
        </HashLink>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {/* Navigation links using HashLink */}
          <HashLink
            smooth
            to="/#about"
            className="text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            01. About
          </HashLink>
          <HashLink
            smooth
            to="/#skills"
            className="text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            02. Skills
          </HashLink>
          <HashLink
            smooth
            to="/#projects"
            className="text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            03. Projects
          </HashLink>
          <HashLink
            smooth
            to="/#tech-library"
            className="text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            04. Tech Library
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            className="text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            05. Contact
          </HashLink>

          {/* Social links (these are normal <a> tags) */}
          <div className="flex items-center space-x-4 pl-4 border-l border-gray-200 dark:border-gray-700">
            <a
              href="https://github.com/Rohitpatidar1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i data-feather="github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rohitpatidar5001/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i data-feather="linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/rohit__patidar5001/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i data-feather="instagram"></i>
            </a>
          </div>

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            <i data-feather={theme === "dark" ? "sun" : "moon"}></i>
          </button>
        </nav>
      </div>
    </header>
  );
}
