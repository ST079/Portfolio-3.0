import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, darkMode }) => {
  return (
    <motion.div
      className={`rounded-lg overflow-hidden ${
        darkMode ? "bg-gray-700" : "bg-gray-100"
      }`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="h-48 bg-gray-600 flex items-center justify-center">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-white">Project Image</span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold font-mono mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded text-xs font-mono ${
                darkMode ? "bg-gray-600" : "bg-gray-200"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline"
          >
            <FaGithub className="mr-1" /> Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-500 hover:underline"
            >
              <FaExternalLinkAlt className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
