import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";

const Projects = ({ darkMode }) => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false); // No loading state needed for local data

  useEffect(() => {
    // Simulate loading if needed
    setLoading(true);
    const timer = setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 500); // Small delay to simulate async operation

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div
     
    >
      <motion.h1
        className="text-3xl font-bold mb-8 font-mono border-b-2 border-blue-500 pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        $ projects
      </motion.h1>

      {/* Filter buttons */}
      <div className="mb-8 flex flex-wrap gap-2">
        {["all", "frontend", "backend", "fullstack"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded font-mono text-sm ${
              filter === type
                ? "bg-blue-500 text-white"
                : darkMode
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              darkMode={darkMode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
