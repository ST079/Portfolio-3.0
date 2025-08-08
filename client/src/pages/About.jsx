// pages/About.jsx
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const About = ({ darkMode }) => {
  const timeline = [
    {
      id: 1,
      title: "Started Coding",
      date: "2021",
      description: "Built first HTML/CSS websites",
      icon: <FaCode className="text-blue-500" />,
    },
    {
      id: 2,
      title: "Bachelor's Degree in Computer Application",
      date: "2023 - Present",
      description:
        "Learned algorithms, data structures, and software engineering principles",
      icon: <FaGraduationCap className="text-green-500" />,
    },
  
  ];

  return (
    <div>
      <motion.h1
        className="text-3xl font-bold mb-8 font-mono border-b-2 border-blue-500 pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        $ about-me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-mono mb-4 text-blue-400">// Bio</h2>
          <div
            className={`p-4 rounded ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <pre className="font-mono">
              {`
  const sujan = {
    name: "Sujan Tamang",
    location: "Bhaktapur, Nepal",
    skills: ["JavaScript", "React", "Node.js", "MongoDB","Express","Java","Tailwind CSS"],
    hobbies: ["Coding", "Gaming", "Boxing","Traveling"],
    quote: "First, solve the problem. Then write the code."
  };`}
            </pre>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-mono mb-4 text-blue-400">// Timeline</h2>
          <div className="space-y-6">
            {timeline.map((item) => (
              <motion.div
                key={item.id}
                className={`flex p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mr-4 text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.date}</p>
                  <p className="mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
