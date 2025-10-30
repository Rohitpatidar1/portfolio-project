// src/Components/Skills.jsx
import React, { useEffect, useState } from "react";
import feather from "feather-icons";
import { getAllSkills } from "../api/api"; // <-- API import

// Feather Icon Component
const RenderFeatherIcon = ({ name, className }) => {
  useEffect(() => {
    feather.replace();
  }, []);
  return <i data-feather={name} className={className} />;
};

export default function Skills() {
  const [skillCategories, setSkillCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch data from backend
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await getAllSkills();

        console.log("✅ Skills API Response:", res.data);

        // Group by category
        const grouped = res.data.reduce((acc, skill) => {
          const category = skill.category || "Others";
          if (!acc[category]) {
            acc[category] = {
              title: category,
              icon: category.toLowerCase().includes("front")
                ? "code"
                : "server",
              skills: [],
            };
          }
          acc[category].skills.push({
            name: skill.skill_name,
            percent: skill.percentage,
          });
          return acc;
        }, {});

        setSkillCategories(Object.values(grouped));
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("❌ Error loading skills");
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      {/* --- Section Title --- */}
      <div className="text-center mb-16 px-4">
        <h3 className="text-3xl font-bold dark:text-white">
          <span className="text-blue-500">02.</span> My Professional Skillset
        </h3>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          My technical level and what I'm currently learning.
        </p>
      </div>

      {/* --- Loader / Error --- */}
      {loading && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading skills...
        </p>
      )}
      {error && (
        <p className="text-center text-red-500 dark:text-red-400">{error}</p>
      )}

      {/* --- Main Skills Grid --- */}
      {!loading && !error && (
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-5">
                <RenderFeatherIcon
                  name={category.icon}
                  className="w-8 h-8 text-blue-500"
                />
                <h4 className="text-xl font-bold ml-4 dark:text-white">
                  {category.title}
                </h4>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-blue-500">
                        {skill.percent}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* --- "Currently Learning" Section --- */}
      <div className="max-w-6xl mx-auto px-4 mt-16 text-center">
        <h4 className="text-2xl font-bold dark:text-white mb-4">
          Currently Exploring
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Advanced Python for AI",
            "Docker & Kubernetes",
            "Advanced SQL",
            "AWS Basics",
          ].map((skill, index) => (
            <div
              key={index}
              className="flex items-center px-5 py-2 bg-green-100 dark:bg-green-900/50 rounded-full"
            >
              <RenderFeatherIcon
                name="trending-up"
                className="w-4 h-4 text-green-500 mr-2"
              />
              <span className="font-semibold text-green-800 dark:text-green-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
