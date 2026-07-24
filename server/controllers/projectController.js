export const getProjects = async (req, res) => {
  const initialProjects = [
     {
      id: 1,
      name: "Zinda Online School",
      description: "A professional online learning platform designed for students and educators featuring secure login, modern responsive interface, online learning modules, and elegant UI/UX.",
      image: "/images/project7.png",
      tech: ["React", "Node", "Express", "MongoDB", "UI/UX"],
      liveDemo: "https://www.zindaonlineschool.com/",
      github: "https://github.com/muhammed-sahal-k",
      featured: true
    },
    {
      id: 2,
      name: "ApexTasks – Task Management System",
      description: "A modern responsive task management application built with the MERN Stack featuring secure authentication, task organization, CRUD operations, responsive UI, and efficient workflow management.",
      image: "/images/project1.png",
      tech: ["React", "Node", "Express", "MongoDB", "JWT", "REST API"],
      liveDemo: "https://taskmanagement-machine-text.vercel.app/",
      github: "https://github.com/muhammed-sahal-k/TASKMANAGEMENT--MACHINE--TEXT",
      featured: true
    },
    {
      id: 3,
      name: "Todo List",
      description: "A responsive task management application developed using HTML, CSS, and JavaScript that enables users to add, edit, delete, and manage daily tasks efficiently with a clean user interface.",
      image: "/images/project2.png",
      tech: ["HTML5", "CSS3", "JavaScript"],
      liveDemo: "https://todo-list-gray-gamma-32.vercel.app/",
      github: "https://github.com/muhammed-sahal-k/TODO-list",
      featured: true
    },
    {
      id: 4,
      name: "Calculator",
      description: "A fully functional calculator built using HTML, CSS, and JavaScript supporting basic arithmetic operations with an elegant responsive interface.",
      image: "/images/project3.png",
      tech: ["HTML5", "CSS3", "JavaScript"],
      liveDemo: "https://calculater-wltl.vercel.app/",
      github: "https://github.com/muhammed-sahal-k/calculater",
      featured: true
    },
    {
      id: 5,
      name: "Food Corner",
      description: "A restaurant menu website featuring categorized food items, responsive design, attractive UI, and interactive browsing experience built using HTML, CSS, and Bootstrap.",
      image: "/images/project4.png",
      tech: ["HTML5", "CSS3", "Bootstrap"],
      liveDemo: "https://resturent-menu-bar.vercel.app/",
      github: "https://github.com/muhammed-sahal-k/resturent-menu-bar",
      featured: true
    },
    {
      id: 6,
      name: "BookMyShow Clone",
      description: "A responsive front-end clone inspired by BookMyShow featuring movie listings, banners, navigation, and modern UI built using HTML and CSS.",
      image: "/images/project5.png",
      tech: ["HTML5", "CSS3", "Flexbox"],
      liveDemo: "https://book-my-show-blond-nine.vercel.app/",
      github: "https://github.com/muhammed-sahal-k/book_my_show",
      featured: false
    },
    // {
    //   id: 6,
    //   name: "The Odin Project Landing Page",
    //   description: "A responsive landing page inspired by The Odin Project showcasing modern layouts, typography, responsive design, and clean front-end implementation.",
    //   image: "/src/assets/projects/project6.png",
    //   tech: ["HTML5", "CSS3", "Responsive UI"],
    //   liveDemo: "https://www.linkedin.com/posts/muhammed-sahal-k-b4357b36a_this-is-my-first-attempt-at-webpage-design-ugcPost-7346448516417765377-sSYe/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFuQo6_YaaJbZmcuFfJ8VMxIu2Q",
    //   github: "https://github.com/sahalkmohammed",
    //   featured: false
    // },
   
  ];

  return res.status(200).json({
    success: true,
    count: initialProjects.length,
    projects: initialProjects
  });
};
