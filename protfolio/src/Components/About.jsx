// src/Components/About.jsx
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold dark:text-white">
          <span className="text-blue-500">01.</span> About Me
        </h3>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          A short story about who I am and what I love to build.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Introduction Text */}
        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Hello! 👋 My name is{" "}
            <span className="font-semibold text-blue-500">Rohit Patidar</span>,
            a passionate <strong>MERN Stack Developer</strong> who loves turning
            ideas into functional, user-friendly, and beautiful digital
            experiences.
          </p>

          <p>
            I started my journey in tech with curiosity about how web
            applications actually work — and soon it turned into a deep passion
            for building scalable web apps using{" "}
            <strong>MongoDB, Express, React, and Node.js</strong>. I enjoy the
            process of learning new technologies, optimizing performance, and
            solving real-world problems through code.
          </p>

          <p>
            My current focus is on creating{" "}
            <strong>modern full-stack applications</strong> and exploring how{" "}
            <strong>AI and Machine Learning</strong> can be integrated into web
            systems to make them smarter and more interactive.
          </p>

          <p>
            Beyond coding, I love exploring new tools, improving UI/UX, and
            mentoring other students who are passionate about web development.
          </p>
        </div>

        {/* Right Side - Key Skills List */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <p className="font-bold text-xl dark:text-white mb-4">
            🚀 Core Technologies:
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">›</span> JavaScript
              (ES6+)
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">›</span> React.js &
              Next.js
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">›</span> Node.js &
              Express.js
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">›</span> MongoDB &
              SQL
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">›</span> RESTful &
              GraphQL APIs
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">›</span> Tailwind
              CSS & Bootstrap
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">›</span> Git,
              GitHub & Deployment (Vercel / Render)
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">›</span> AI/ML API
              Integration
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
