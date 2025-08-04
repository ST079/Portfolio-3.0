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
    role: "Internship",
    company: "Nobel Learning PBC",
    period: "90 hours",
    responsibilities: [
      "engaged in practical web projects, pitch presentations, and team-based assignments",
    ],
  },
  {
    role: "Web Development Trainer",
    company: "PI Educational World",
    period: "4 months",
    responsibilities: [
      "Teaching SEE Graduates about Web Development",
      "Also taught them about Git and GitHub",
      "Assisted in building their portfolio websites",
      "Guided them in using MS Office and Google Workspace for documentation and presentations",
    ],
  },
  {
    role: "Computer Instructor",
    company: "Himchuli Academy",
    period: "8 months",
    responsibilities: [
      "Teaching Secondary Level Students about Computer Science",
      "Also taught them about Git and GitHub",
      "Assisted in building their portfolio websites",
      "Guided them in using MS Office and Google Workspace for documentation and presentations",
      "Taught them about basic HTML, CSS, and JavaScript",
      "Also taught them Mathematics and Optional Mathematics",
    ],
  },
];
