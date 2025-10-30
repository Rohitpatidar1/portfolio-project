// src/Components/Home.jsx
import React from "react";
import profileImage from "../assets/Photo.png";
export default function Home() {
  return (
    // Hero Section
    <section id="home" className="min-h-screen flex items-center pt-24 md:pt-0">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 max-w-6xl mx-auto px-4">
        {/* Left Content Block */}
        <div className="md:w-3/5 text-center md:text-left">
          <p className="text-lg text-blue-500 mb-2">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold dark:text-white leading-tight mb-4">
            Rohit Patidar
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-600 dark:text-gray-400 mb-8">
            Full Stack MERN Developer 🚀
          </h2>

          <p className="max-w-xl text-gray-500 dark:text-gray-400 mb-10">
            I'm a passionate <strong>MERN Stack Developer</strong> who loves
            building dynamic, scalable, and user-friendly web applications using
            <strong> MongoDB, Express.js, React.js, and Node.js</strong>.
            <br /> <br />I focus on writing clean and efficient code, optimizing
            backend APIs, and crafting modern UI/UX experiences. I'm also
            exploring how
            <strong> Artificial Intelligence and Machine Learning</strong>
            can be integrated with web technologies to create intelligent
            solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white hover:bg-blue-600 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              🔗 View My Projects
            </a>
            <a
              href="mailto:rrohitpatidar1234@gmail.com"
              className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              📩 Get in Touch
            </a>
          </div>
        </div>

        {/* Right Image Block */}
        <div className="md:w-2/5 flex justify-center items-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-50"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
              <img
                src={profileImage}
                alt="Rohit Patidar profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
