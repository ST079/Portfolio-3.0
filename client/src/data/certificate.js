

const certificatesInfo = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "Free Code Camp",
    date: "2025-04-19",
    category: "frontend",
    skills: ["HTML", "CSS"],
    credentialUrl:
      "https://www.freecodecamp.org/certification/suzanyba/responsive-web-design",
    imageUrl: "../../certificates/freecodecamp(ResponsiveWebDesign).jpeg",
    description:
      "I built the  projects and got all automated test suites to pass Certifications include: Build a Tribute Page, Build a Survey Form, Build a Product Landing Page, Build a Technical Documentation Page, Build a Personal Portfolio Webpage",
  },
  {
    id: 2,
    title: "Nobel Internship Program",
    issuer: "Nobel Learning PBC",
    date: "2025-07-18",
    category: "others",
    skills: [
      "Soft Skills",
      "Wordpress",
      "Resume Building",
      "Basic Internet Troubleshooting",
      "Leadership",
    ],
    credentialID: "explorerD7cW2@nobelcoaching.com",
    imageUrl: "../../certificates/Sujan  Tamang Internship Certificate.jpg",
    description:
      "engaged in practical web projects, pitch presentations, and team-based assignments",
  },
];

const categories = [
  { id: "all", name: "All Certificates", count: certificatesInfo.length },
  {
    id: "frontend",
    name: "Frontend",
    count: certificatesInfo.filter((c) => c.category === "frontend").length,
  },
  {
    id: "volunteer",
    name: "Volunteer",
    count: certificatesInfo.filter((c) => c.category === "backend").length,
  },
  {
    id: "others",
    name: "Others",
    count: certificatesInfo.filter((c) => c.category === "others").length,
  },
];

export { categories, certificatesInfo };
