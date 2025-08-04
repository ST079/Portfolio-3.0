// pages/YouTube.jsx
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

const YouTube = ({ darkMode }) => {
  const videos = [
    {
      id: "abc123",
      title: "Building a React Portfolio",
      description:
        "How I built my developer portfolio with React and Tailwind CSS",
      thumbnail: "https://via.placeholder.com/400x225",
      url: "https://youtube.com/watch?v=abc123",
    },
    {
      id: "def456",
      title: "MERN Stack Tutorial",
      description: "Complete guide to building a MERN stack application",
      thumbnail: "https://via.placeholder.com/400x225",
      url: "https://youtube.com/watch?v=def456",
    },
    // Add more videos...
  ];

  return (
    <div
      className={`p-6 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } rounded-lg shadow-lg`}
    >
      <motion.h1
        className="text-3xl font-bold mb-8 font-mono border-b-2 border-blue-500 pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        $ youtube
      </motion.h1>

      <div className="mb-8 flex items-center">
        <FaYoutube className="text-red-500 text-4xl mr-4" />
        <h2 className="text-xl font-mono text-blue-400">
          // Developer Tutorials & Content
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className={`rounded-lg overflow-hidden ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
            whileHover={{ y: -5 }}
          >
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.description}</p>
                <div className="mt-3 flex items-center text-red-500">
                  <FaYoutube className="mr-2" />
                  <span className="text-sm">Watch on YouTube</span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default YouTube;
