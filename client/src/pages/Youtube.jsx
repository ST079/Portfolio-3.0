// pages/YouTube.jsx
import { motion } from "framer-motion";
import { FaYoutube, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { videos } from "../data/youtube"; // Assuming you have a data file with video details

const YouTube = ({ darkMode }) => {
  
  return (
    <div id="youtube" className="p-6 ">
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
        <h4 className="text-xl font-mono text-blue-400">
          // Developer Tutorials & Content
        </h4>
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

      {/* Scroll indicator */}
      <motion.div
        className="mt-12 animate-bounce flex justify-center items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Link to={"/about"}>
          <button
            className={`p-2 rounded-full ${
              darkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            <FaChevronDown size={24} />
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default YouTube;
