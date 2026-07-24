import projectImages from '../assets/profile';

export const personalInfo = {
  name: "Muhammed Sahal K",
  title: "MERN Stack Developer",
  taglines: [
    "MERN Stack Developer",
    "Freelance Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Backend Developer"
  ],
  bio: "Passionate MERN Stack Developer with hands-on experience building secure, scalable, and responsive full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Passionate about solving real-world problems through clean code, modern UI/UX, and scalable backend architecture.",
  email: "sahalkmohammed95@gmail.com",
  phone: "+91 6282898136", // Professional placeholder format
  location: "Mannarkkad Kerala, India",
  github: "https://github.com/muhammed-sahal-k",
  linkedin: "https://www.linkedin.com/posts/muhammed-sahal-k-b4357b36a_webdevelopment-html-css-ugcPost-7386301288268902400-y2H5/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFuQo6_YaaJbZmcuFfJ8VMxIu2Q",
  // resumeUrl: "#contact"
  resumeUrl: "/resume.pdf"
};

export const aboutData = {
  degree: "B.Sc Computer Science Graduate",
  specialization: "Full-Stack Web Development & Backend Engineering",
  description: "Specializing in the modern MERN stack ecosystem, I architect robust RESTful APIs, implement secure JWT authentication mechanisms, manage real-time communication via Socket.io, and craft pixel-perfect dynamic user interfaces. Dedicated to continuous learning and writing clean, scalable, maintainable code.",
  highlights: [
    "B.Sc Computer Science Graduate",
    "MERN Stack Developer",
    "REST APIs & JWT Auth",
    "Socket.io Realtime Features",
    "Cloudinary Media Pipeline",
    "MongoDB, Express, React, Node",
    "Git, GitHub & AWS Basics",
    "Render & Vercel Deployments",
    "Responsive Mobile-First UI/UX",
    "Roll based access controll"
  ],
  stats: [
    { label: "Full Stack Projects", value: "7+" },
    { label: "Technologies Mastered", value: "10+" },
    { label: "Code Quality Rating", value: "91%" },
    { label: "Commitment", value: "24/7" }
  ]
};

export const experiences = [
  {
    id: 1,
    role: "Freelance Full Stack Developer",
    company: "Job-Zinda",
    period: "4/2026 — 6/2026",
    type: "Freelance",
    description: "Designed, developed, and deployed high-performance full-stack web applications using MongoDB, Express, React, and Node.js.",
    responsibilities: [
      "Developed Full Stack MERN Applications with modular architecture.",
      "Implemented secure JWT authentication and role-based authorization.",
      "Engineered optimized RESTful APIs and integrated Socket.io for live updates.",
      "Integrated Cloudinary for fast cloud media uploads and image optimizations.",
      "Managed production deployments on Render and Vercel with automated CI/CD.",
      "Utilized Git & GitHub for strict version control and AWS basics for cloud hosting."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "Cloudinary", "Render", "Vercel", "AWS"]
  },
  {
    id: 2,
    role: "MERN Stack Developer Intern",
    company: "Softronics",
    period: "6/2025 — 2/2026",
    type: "Internship",
    description: "Contributed to client full-stack web products, implementing core REST APIs and responsive React user interfaces.",
    responsibilities: [
      "Worked on frontend React user interfaces with modern glassmorphism components.",
      "Built backend Express.js server routes and performed complex MongoDB CRUD operations.",
      "Collaborated on API design, postman endpoint testing, and payload validation.",
      "Debugged complex state management issues and improved mobile layout performance.",
      "Assisted senior engineers in code reviews and UI component refactoring."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "CRUD", "REST APIs", "Debugging", "Responsive UI"]
  }
];

export const skillsCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "Code2", level: "92%" },
      { name: "JavaScript (ES6+)", icon: "FileCode", level: "90%" },
      { name: "HTML5", icon: "Layout", level: "95%" },
      { name: "CSS3", icon: "Palette", level: "92%" },
      { name: "Tailwind CSS", icon: "Wind", level: "94%" },
      { name: "Bootstrap", icon: "Box", level: "88%" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "Server", level: "90%" },
      { name: "Express.js", icon: "Cpu", level: "92%" },
      { name: "REST APIs", icon: "Globe", level: "91%" },
      { name: "JWT Authentication", icon: "ShieldCheck", level: "90%" },
      { name: "Socket.io", icon: "Zap", level: "79%" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "Database", level: "90%" },
      { name: "Mongoose ODM", icon: "Layers", level: "89%" },
      { name: "MongoDB Atlas", icon: "Cloud", level: "93%" }
    ]
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git", icon: "GitBranch", level: "90%" },
      { name: "GitHub", icon: "Github", level: "92%" },
      { name: "Cloudinary", icon: "Image", level: "88%" },
      { name: "Postman", icon: "Send", level: "92%" },
      { name: "Render", icon: "HardDrive", level: "90%" },
      { name: "Vercel", icon: "Triangle", level: "94%" },
      // { name: "AWS Basics", icon: "CloudRain", level: "80%" }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: "Brain", level: "95%" },
      { name: "Communication", icon: "MessageSquare", level: "90%" },
      { name: "Critical Thinking", icon: "Lightbulb", level: "92%" },
      { name: "Team Collaboration", icon: "Users", level: "94%" },
      { name: "Continuous Learning", icon: "Sparkles", level: "98%" },
      { name: "Time Management", icon: "Clock", level: "90%" }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    name: "Zinda Online School",
    description: "A professional online learning platform designed for students and educators featuring secure login, modern responsive interface, online learning modules, and elegant UI/UX.",
    image: projectImages.project7,
    tech: ["React", "Node", "Express", "MongoDB", "UI/UX"],
    liveDemo: "https://www.zindaonlineschool.com/",
    github: "https://github.com/muhammed-sahal-k",
    featured: true
  },

  {
    id: 2,
    name: "ApexTasks – Task Management System",
    description: "A modern responsive task management application built with the MERN Stack featuring secure authentication, task organization, CRUD operations, responsive UI, and efficient workflow management.",
    image: projectImages.project1,
    tech: ["React", "Node", "Express", "MongoDB", "JWT", "REST API"],
    liveDemo: "https://taskmanagement-machine-text.vercel.app/",
    github: "https://github.com/muhammed-sahal-k/TASKMANAGEMENT--MACHINE--TEXT",
    featured: true
  },
  {
    id: 3,
    name: "Todo List",
    description: "A responsive task management application developed using HTML, CSS, and JavaScript that enables users to add, edit, delete, and manage daily tasks efficiently with a clean user interface.",
    image: projectImages.project2,
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://todo-list-gray-gamma-32.vercel.app/",
    github: "https://github.com/muhammed-sahal-k/TODO-list",
    featured: true
  },
  {
    id: 4,
    name: "Calculator",
    description: "A fully functional calculator built using HTML, CSS, and JavaScript supporting basic arithmetic operations with an elegant responsive interface.",
    image: projectImages.project3,
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://calculater-wltl.vercel.app/",
    github: "https://github.com/muhammed-sahal-k/calculater",
    featured: true
  },
  {
    id: 5,
    name: "Food Corner",
    description: "A restaurant menu website featuring categorized food items, responsive design, attractive UI, and interactive browsing experience built using HTML, CSS, and Bootstrap.",
    image: projectImages.project4,
    tech: ["HTML5", "CSS3", "Bootstrap"],
    liveDemo: "https://resturent-menu-bar.vercel.app/",
    github: "https://github.com/muhammed-sahal-k/resturent-menu-bar",
    featured: true
  },
  {
    id: 6,
    name: "BookMyShow Clone",
    description: "A responsive front-end clone inspired by BookMyShow featuring movie listings, banners, navigation, and modern UI built using HTML and CSS.",
    image: projectImages.project5,
    tech: ["HTML5", "CSS3", "Flexbox"],
    liveDemo: "https://book-my-show-blond-nine.vercel.app/",
    github: "https://github.com/muhammed-sahal-k/book_my_show",
    featured: false
  },
  // {
  //   id: 6,
  //   name: "The Odin Project Landing Page",
  //   description: "A responsive landing page inspired by The Odin Project showcasing modern layouts, typography, responsive design, and clean front-end implementation.",
  //   image: projectImages.project6,
  //   tech: ["HTML5", "CSS3", "Responsive UI"],
  //   liveDemo: "https://www.linkedin.com/posts/muhammed-sahal-k-b4357b36a_this-is-my-first-attempt-at-webpage-design-ugcPost-7346448516417765377-sSYe/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFuQo6_YaaJbZmcuFfJ8VMxIu2Q",
  //   github: "https://github.com/sahalkmohammed",
  //   featured: false
  // },


];

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Calicut",
    period: "2022 – 2025",
    grade: "First Class Honors",
    highlights: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Web Technologies & Software Engineering",
      "Computer Networks & Security"
    ]
  }
];

export const certificatesData = [
  {
    id: 1,
    title: "MERN Full Stack Development",
    issuer: "Softronics",
    date: "2026",
    badge: "Professional Certification",
    description: "Comprehensive hands-on specialization covering MongoDB Atlas, Express.js server architecture, React.js frontend development, Node.js microservices, JWT authentication, and cloud deployment."
  },
  {
    id: 2,
    title: "Hackathon Participation",
    issuer: "Softronics",
    date: "2025",
    badge: "Achievement",
    description: "Participated in competitive hackathons building rapid real-time full stack web prototypes under intense time constraints."
  },
  // {
  //   id: 3,
  //   title: "Technical Workshops",
  //   issuer: "University & Industry Partners",
  //   date: "2023 – 2024",
  //   badge: "Workshops",
  //   description: "Attended specialized workshops on modern web architecture, cloud deployment pipelines, REST API security, and UI/UX design patterns."
  // }


  {
    id: 3,
    title: "Bachelor of Science in Computer Science",
    issuer: "University of calicut",
    date: "2022 – 2025",
    badge: "Degree",
    description: "Graduated with a Bachelor's degree in Computer Science in 2025."
}
];
