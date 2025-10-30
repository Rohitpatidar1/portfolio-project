// src/Components/Projects.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProjects } from "../api/api"; // <-- API import

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🧠 Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getAllProjects();
        setProjects(res.data); // backend se data set karo
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("❌ Error loading projects");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      {/* --- Section Title --- */}
      <div className="text-center mb-16 px-4">
        <h3 className="text-3xl font-bold dark:text-white">
          <span className="text-blue-500">03.</span> My Creative Work
        </h3>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          Some of my recent projects.
        </p>
      </div>

      {/* --- Loader / Error --- */}
      {loading && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading projects...
        </p>
      )}
      {error && (
        <p className="text-center text-red-500 dark:text-red-400">{error}</p>
      )}

      {/* --- Project Cards --- */}
      {!loading && !error && (
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link to={`/project/${project.slug}`} key={index}>
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden
                           transform hover:-translate-y-2 transition-all duration-300 h-full cursor-pointer"
              >
                <img
                  src={
                    project.image ||
                    "https://placehold.co/800x600/161B22/58A6FF?text=No+Image"
                  }
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold dark:text-white mb-2">
                    {project.title || "Untitled Project"}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.description || "No description available."}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
