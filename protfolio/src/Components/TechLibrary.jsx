// src/Components/TechLibrary.jsx
import React, { useEffect, useState } from "react";
import feather from "feather-icons";
import { getAllTech } from "../api/api";

// Feather Icon Component
const RenderFeatherIcon = ({ name, className }) => {
  useEffect(() => {
    feather.replace();
  }, []);
  return <i data-feather={name} className={className} />;
};

export default function TechLibrary() {
  const [techItems, setTechItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const res = await getAllTech(); // API call
        setTechItems(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to load Tech Library");
        setLoading(false);
      }
    };
    fetchTech();
  }, []);

  // Update icons when data loads
  useEffect(() => {
    if (!loading && techItems.length > 0) {
      feather.replace();
    }
  }, [loading, techItems]);

  if (loading)
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 py-20">
        Loading tech library...
      </p>
    );

  if (error)
    return (
      <p className="text-center text-red-500 dark:text-red-400 py-20">
        {error}
      </p>
    );

  return (
    <section id="tech-library" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-16 px-4">
        <h3 className="text-3xl font-bold dark:text-white">
          <span className="text-blue-500">05.</span> Interactive Learning Hub
        </h3>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          Learn modern technologies through interactive video lessons.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {techItems.map((item) => (
          <div key={item.id} className="group h-80 w-full [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* --- Front Side --- */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex flex-col items-center justify-center">
                <RenderFeatherIcon
                  name={
                    item.category.toLowerCase().includes("react")
                      ? "code"
                      : item.category.toLowerCase().includes("node")
                      ? "server"
                      : "cpu"
                  }
                  className="w-20 h-20 text-white opacity-90"
                />
                <h4 className="mt-4 text-2xl font-bold text-white">
                  {item.category}
                </h4>
              </div>

              {/* --- Back Side --- */}
              <div className="absolute inset-0 h-full w-full rounded-xl bg-white dark:bg-gray-800 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center">
                <h5 className="text-lg font-semibold dark:text-white mb-3 text-center">
                  {item.title}
                </h5>

                {/* --- YAHAN BADLAAV KIYA GAYA HAI --- */}
                {/* Check karein ki video_url hai ya nahi */}
                {item.video_url ? (
                  // Agar URL hai, toh video dikhayein
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe
                      src={item.video_url.replace("watch?v=", "embed/")}
                      title={item.title}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  // Agar URL nahi hai, toh message dikhayein
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <RenderFeatherIcon
                      name="clock"
                      className="w-12 h-12 text-blue-500 mb-4"
                    />
                    <p className="font-semibold text-gray-700 dark:text-gray-300">
                      Video Coming Soon!
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Please check back in a few days.
                    </p>
                  </div>
                )}
                {/* --- BADLAAV YAHAN KHATAM --- */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
