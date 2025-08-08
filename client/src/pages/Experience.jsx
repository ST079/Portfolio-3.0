// pages/Experience.jsx
import { motion } from "framer-motion";
import { skills, experiences } from "../data/experience";

const Experience = ({ darkMode }) => {
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
        $ experience
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-mono mb-6 text-blue-400">// Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg flex flex-col items-center ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {skill.icon}
                <h3 className="mt-2 font-bold">{skill.name}</h3>
                <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-mono mb-6 text-blue-400">
            // Work History
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-gray-400">
                  {exp.company} • {exp.period}
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
