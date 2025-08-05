import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import { SiLeetcode, SiCodepen } from "react-icons/si";
import ThemeToogle from "../components/ThemeToogle";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = ({ darkMode }) => {

  const navigate = useNavigate();
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col justify-center items-center`}
    >
      <ThemeToogle />
      {/* Terminal-like header */}
      <div
        className={`w-full max-w-4xl p-4 rounded-t-lg ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        } flex`}
      >
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div
          className={`flex-1 text-center font-mono text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          sujan@portfolio: ~
        </div>
      </div>

      {/* Main content */}
      <div
        className={`w-full max-w-4xl p-8 rounded-b-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-xl`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-blue-500">$</span> Sujan Tamang
          </h1>

          <div className="text-2xl md:text-3xl font-mono mb-8 h-12">
            <TypeAnimation
              sequence={[
                "Emerging Full Stack Developer",
                2000,
                "MERN Beginner",
                2000,
                "UI/UX Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p
            className={`text-lg mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I build exceptional digital experiences with modern web
            technologies.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="https://github.com/ST079"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sujantamang80"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/@SuZan_Yba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition"
          >
            <FaYoutube />
          </a>
          
          {/* <a
            href="https://leetcode.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition"
          >
            <SiLeetcode />
          </a>
           */}

          {/* <a
            href="https://codepen.io/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition"
          >
            <SiCodepen />
          </a> */}

          <a
            href="https://www.youtube.com/@SuZan_Yba"
            className="text-2xl hover:text-blue-500 transition"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <button
            onClick={() => navigate("/projects")}
            className={`px-8 py-3 rounded-lg font-mono font-bold transition ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            View My Work
          </button>
          <button
            onClick={() => navigate("/contact")}
            className={`px-8 py-3 rounded-lg font-mono font-bold border-2 ${
              darkMode
                ? "border-blue-500 text-blue-400 hover:bg-gray-700"
                : "border-blue-500 text-blue-600 hover:bg-gray-100"
            }`}
          >
            Contact Me
          </button>
        </motion.div>

        {/* Tech stack showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h3
            className={`text-center mb-4 font-mono ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            My Tech Stack:
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "Tailwind",
              "JavaScript",
              "JAVA",
              "MySQL",
            ].map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full font-mono text-sm ${
                  darkMode
                    ? "bg-gray-700 text-blue-400"
                    : "bg-gray-200 text-blue-600"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-12 animate-bounce"
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
    </section>
  );
};

export default LandingPage;
