import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

export const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-4xl" />,
    level: 50,
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-400 text-4xl" />,
    level: 40,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-4xl" />,
    level: 30,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 text-4xl" />,
    level: 40,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-400 text-4xl" />,
    level: 30,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    level: 30,
  },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    responsibilities: [
      "Developed and maintained web applications using MERN stack",
      "Implemented RESTful APIs with Node.js and Express",
      "Collaborated with team using Git and Agile methodologies",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Digital Creations",
    period: "2020 - 2022",
    responsibilities: [
      "Built responsive UIs with React and Redux",
      "Optimized application performance",
      "Worked with designers to implement UI/UX",
    ],
  },
];
