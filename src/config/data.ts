import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { FiCpu, FiHeadphones, FiMonitor } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiPostgresql,
  SiSanity,
  SiStrapi,
  SiNestjs,
  SiCloudflare,
  SiRedux,
  SiSupabase,
  SiRemix,
  SiSass,
  SiBootstrap,
  SiContentful,
  SiMongodb,
  SiCplusplus,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
  SiExpress,
} from "react-icons/si";

export const socialLinks = [
  {
    id: 5,
    priority: 1,
    title: "GitHub",
    url: "https://github.com/kaustubh0601",
  },
  {
    id: 6,
    priority: 2,
    title: "LinkedIn",
    url: "https://linkedin.com/in/kaustubh-kumbharkar",
  },
  // {
  //   id: 7,
  //   priority: 3,
  //   title: "Twitter",
  //   url: "https://twitter.com/Abhishek1350",
  // },
  // {
  //   id: 8,
  //   priority: 4,
  //   title: "Instagram",
  //   url: "https://www.instagram.com/imabhishek.dev/",
  // },
];

export const personalInfo = {
  name: "Kaustubh Kumbharkar",
  title: "Full Stack Web Developer",
  avatar: "/Photo Passport Size.png",
  email: "kaustubhkumbharkar01@gmail.com",
  location: "Pune, India",
  description:
    "Self-taught Software Developer from Pune, India, crafting scalable and high-performance websites and applications. Skilled in C++ and MERN Stack Development, I started my journey during the college and worked my way from complete beginner to building custom software solutions from scratch.",
};

export const heroSection = {
  personalInfo: personalInfo,
  socialLinks: socialLinks,
};

export const workExperience = [
  {
    company: "Zollate",
    position: "Full Stack Developer",
    period: "Nov 2025 - Present",
    // shortDesc:
    //   "Contributed to developing interactive web modules and scalable backend systems for PeopleXM’s customer experience platform. Worked on enhancing UI responsiveness, backend automation, and optimizing API performance to improve reliability and engagement.",
    bulletPoints: [
      "Developed and delivered multiple product features in an ongoing web application using React.js, Node.js, Express.js, and MongoDB, improving overall application functionality.",
      "Optimized backend API performance using Node.js and Express.js, reducing response time from 4–6 seconds to 350–500 ms.",
      "Reduced unnecessary API calls by implementing caching mechanisms and improving request-response handling.",
      "Optimized MongoDB queries and cleaned API responses by removing redundant database calls, improving backend efficiency.",
      "Implemented real-time communication and notifications using Stream and Firebase Cloud Messaging (FCM).",
      "Improved application reliability by implementing React Error Boundaries and optimizing component-level error handling.",
      "Enhanced user experience by implementing interactive UI elements such as Marquee effects, Breadcrumb navigation, and Shimmer loading states.",
      "Built fully responsive UI components using React.js, HTML, CSS, and Tailwind CSS, ensuring compatibility across mobile, tablet, and desktop devices.",
      "Resolved bugs reported by QA testers, ensuring application stability and smoother user experience across modules.",
    ],
  },
  {
    company: "PeopleXM",
    position: "MERN Stack Web Developer Intern",
    period: "July 2025 - Oct 2025",
    // shortDesc:
    //   "Contributed to developing interactive web modules and scalable backend systems for PeopleXM’s customer experience platform. Worked on enhancing UI responsiveness, backend automation, and optimizing API performance to improve reliability and engagement.",
    bulletPoints: [
      "Developed a microserver to automate birthday and profile-incompletion email notifications using Node.js and Cron scheduling, improving user engagement through timely reminders.",
      "Built and maintained responsive user interfaces using React.js, improving overall page performance and user experience.",
      "Integrated RESTful APIs with Node.js and MongoDB, ensuring secure data handling and efficient backend communication.",
      "Collaborated with senior developers to deploy updates and fix production-level bugs, enhancing platform stability and speed."
    ],
  },
  {
    company: "Anvistar ITS Pvt. Ltd.",
    position: " Full Stack Web Developer Intern",
    period: "Jan 2025 - Feb 2025",
    // shortDesc:
    //   "Started as a ReactJS developer and gradually expanded into full-stack responsibilities, including backend development and AI integration. Working both independently and within teams to deliver scalable web applications. My full responsibilities include:",
    bulletPoints: [
      "Developed and optimized the CareSync project, focusing on improving patient appointment scheduling and communication efficiency.",
      "Collaborated with a cross-functional team to build a responsive frontend using React.js and integrate a secure backend with Express.js and MongoDB for streamlining hospital administration workflows."
    ],
  },
];

export const leadership = [
  {
    organization: "Prayas Youth Forum & Social Research Foundation",
    position: "Lead",
    period: "Jun 2022 - Present",
    bulletPoints: [
      "Organized a 5-day residential camp in Shenit, where I gained experience in logistics, scheduling, and overall camp management.",
      "Coordinated 60 volunteers and managed the participation of 1,000 students at Rajur School during the camp.",
      "Led the 'Ek Vahi Ek Pen' initiative during Ganesh Festival, distributing 800 educational materials and engaging 1,000 attendees to promote education and community service."
    ],
  },
];

export const techStack = [
/*
  // === PROGRAMMING LANGUAGES ===
  {
    name: "C++",
    icon: SiTypescript,
    color: "text-blue-700",
    type: "Programming Languages",
  },

  // === FRONTEND ===
  { name: "React", icon: FaReact, color: "text-blue-400", type: "Frontend" },
  { name: "JavaScript", icon: SiTypescript, color: "text-yellow-500", type: "Frontend" },
  { name: "HTML5", icon: SiTypescript, color: "text-orange-500", type: "Frontend" },
  { name: "CSS", icon: SiTailwindcss, color: "text-blue-500", type: "Frontend" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    type: "Frontend",
  },

  // === BACKEND & DATABASES ===
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
    type: "Backend & Databases",
  },
  {
    name: "Express",
    icon: FaNodeJs,
    color: "text-gray-600",
    type: "Backend & Databases",
  },
  {
    name: "MongoDB",
    icon: SiPostgresql,
    color: "text-green-600",
    type: "Backend & Databases",
  },
  {
    name: "MySQL",
    icon: SiPostgresql,
    color: "text-blue-600",
    type: "Backend & Databases",
  },

  // === TOOLS & CONCEPTS ===
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
    type: "Tools & DevOps",
  },
  {
    name: "GitHub",
    icon: FaGitAlt,
    color: "text-gray-400",
    type: "Tools & DevOps",
  },
  {
    name: "Data Structures and Algorithms",
    icon: SiTypescript,
    color: "text-purple-500",
    type: "Computer Science",
  },
*/
  {
    name: "C++",
    icon: SiCplusplus,
    color: "text-blue-700",
    type: "Programming Languages",
  },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500", type: "Frontend" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500", type: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500", type: "Frontend" },
  { name: "React", icon: FaReact, color: "text-blue-400", type: "Frontend" },
  {
    name: "Express",
    icon: SiExpress,
    color: "text-gray-600",
    type: "Backend & Databases",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
    type: "Backend & Databases",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
    type: "Backend & Databases",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
    type: "Tools & DevOps",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    type: "Frontend",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-600",
    type: "Backend & Databases",
  },
];

export const projects = [
  {
    title: "ReferMe",
    description:
      "A smart referral-based learning and notes-sharing platform that connects students to exchange study materials, access verified notes, and earn rewards through referrals — all in one streamlined web app built with the MERN stack.",
    image: "/referme.png",
    liveUrl: "https://referme.tech",
    // githubUrl: "https://github.com/yourusername/referme", // replace with your actual repo
    techStack: techStack.filter((item) =>
      ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"].includes(item.name)
    ),
  },
  {
    title: "TOHA Alumani Portal",
    description:
      "A full-stack healthcare management platform for streamlining hospital operations, featuring React.js frontend and Express.js–MongoDB backend with JWT authentication and an admin dashboard to enhance scheduling and efficiency.",
    image: "/CareSync.png",
    // liveUrl: "https://caresync.health",
    githubUrl: "https://github.com/kaustubh0601/Care-Sync", 
    techStack: techStack.filter((item) =>
      ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind"].includes(item.name)
    ),
  },
];

export const setupSpecs = [
  {
    title: "RGB PC Build",
    subTitle:
      "Custom rig with 10C/16T, RTX 4060 and 32GB RAM for performance in dev & gaming.",
    icon: FiCpu,
  },
  {
    title: "Dual Monitor Setup",
    subTitle:
      "Lenovo 1080p + MSI 2K, 27” screens for perfect mix of clarity and productivity.",
    icon: FiMonitor,
  },
  {
    title: "Audio & Peripherals",
    subTitle:
      "Redragon speakers, Cosmic Byte keyboard & headphones, plus earbuds & neckband for ANS and Dolby audio.",
    icon: FiHeadphones,
  },
  {
    title: "Gaming Chair",
    subTitle:
      "Ergonomic comfort for long coding sessions and all-night builds.",
    icon: HiOutlineDesktopComputer,
  },
];

export const certifications = [
  {
    title: "Ranked 329 globally in the GSSOC EXT 24 open-source program",
    url: "#", // Add your certificate/profile link here later
  },
  {
    title: "Successfully unlocked all badges in the Hacktoberfest #11 open-source program",
    url: "#", // Add your certificate/profile link here later
  },
  {
    title: "Achieved CodeChef Daily Streak Gold Badge for a 100-day streak",
    url: "#", // Add your CodeChef profile link here later
  },
  {
    title: "Achieved 90% in the C skill test on CodeChef",
    url: "#", // Add your test result link here later
  },
  {
    title: "Solved 250+ coding problems over various coding platforms",
    url: "#", // Add your coding profile links here later
  },
  {
    title: "4-star coder on HackerRank",
    url: "#", // Add your HackerRank profile link here later
  },
];

export const testimonials = [
  {
    name: "Vikshak P",
    company: "Edvolve",
    linkedIn: "https://www.linkedin.com/in/vikshak/",
    position: "Cofounder",
    avatar: "/images/testimonials/vikshak.webp",
    testimonial:
      "Abhishek worked with us and he was quite the problem solver. His ability to learn quickly and eagerness to learn new things was super helpful since we were a high velocity team and expected quick results. Would happily work with him again to develop good products, and recommend him to other employers looking for a fast learner in your team!",
  },
  {
    name: "Shwetank Singh",
    company: "Edvolve",
    linkedIn: "https://www.linkedin.com/in/singhshwetank/",
    position: "Technical Lead",
    avatar: "/images/testimonials/shwetank.webp",
    testimonial:
      "Abhishek is a hardworking, driven and dedicated person. He will be an asset wherever he goes.",
  },
];
