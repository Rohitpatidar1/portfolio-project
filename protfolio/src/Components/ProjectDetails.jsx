import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectBySlug } from "../api/api";

export default function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await getProjectBySlug(slug);
        if (res.data.message === "Project not found") {
          setProject(null);
        } else {
          setProject(res.data);
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to load project details");
        setLoading(false);
      }
    };
    fetchProject();
  }, [slug]);

  if (loading)
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-20">
        Loading project details...
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 dark:text-red-400 py-20">
        {error}
      </div>
    );

  if (!project)
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-20">
        Project not found.
      </div>
    );

  // ✅ Default fallbacks
  const defaultImage =
    "https://placehold.co/800x600/161B22/58A6FF?text=Project+Image+Not+Available";
  const defaultDescription =
    "This project showcases an innovative solution built using modern technologies.";
  const defaultGithub = "#";
  const defaultDemo = "https://placehold.co/800x600?text=No+Demo+Available";

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <Link
          to="/#projects"
          className="inline-block mb-8 text-blue-500 hover:underline"
        >
          ← Back to Projects
        </Link>

        {/* ✅ Image fallback */}
        <img
          src={project.image || defaultImage}
          alt={project.title || "Project Image"}
          className="w-full rounded-lg shadow-lg mb-10"
        />

        {/* ✅ Title & Description */}
        <h1 className="text-4xl font-bold dark:text-white mb-4">
          {project.title || "Untitled Project"}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
          {project.description || defaultDescription}
        </p>

        {/* ✅ Links */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href={project.github || defaultGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            {project.github ? "View Code" : "Code Not Available"}
          </a>

          <a
            href={project.demo || defaultDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
          >
            {project.demo ? "Live Demo" : "Demo Not Available"}
          </a>
        </div>

        {/* ✅ Tags (split handle safe) */}
        {project.tags && (
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags?.split(",").map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300
                             px-3 py-1 rounded-full text-sm font-medium"
              >
                #{tag.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
