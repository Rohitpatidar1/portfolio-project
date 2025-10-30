// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Aapke saare components
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import TechLibrary from "./Components/TechLibrary";
import Shayari from "./Components/Shayari";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Chatbot from "./Components/Chatbot";
import ProjectDetails from "./Components/ProjectDetails";
// import ProjectDetail from "./Components/ProjectDetail"; // Yeh naya details page hai

// Humne aapke saare sections ko ek 'HomePage' component mein daal diya hai
const HomePage = () => (
  <>
    <section id="home">
      <Home />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="tech-library">
      <TechLibrary />
    </section>
    <section id="shayari">
      <Shayari />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </>
);

export default function App() {
  return (
    <Router>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 px-4 md:px-16 py-8 flex flex-col gap-16">
          {/* Router yahan se control karega ki kaun sa page dikhana hai */}
          <Routes>
            {/* Jab URL '/' hoga, to HomePage dikhega */}
            <Route path="/" element={<HomePage />} />

            {/* Jab URL '/project/...' hoga, to ProjectDetail page dikhega */}
            <Route path="/project/:slug" element={<ProjectDetails />} />
          </Routes>
        </main>

        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
