import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp"; // New image import
import project6 from "../assets/projects/project-1.webp"; // New image import

export const HERO_CONTENT = `I am an enthusiastic IT undergraduate student with a strong passion for technology, programming, and crafting intuitive user experiences. My journey in technology has equipped me with skills in application development, UI/UX design, and full-stack web development.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "React + Vite Developer",
    company: "Levaggio Vehicle Service Center",
    description: `Developed and maintained an employee management system with React and Vite. Integrated MongoDB for data storage and implemented features such as attendance tracking, salary calculations, and report generation. Designed and implemented interactive dashboards with charts and graphs.`,
    technologies: ["React", "Vite", "MongoDB", "Chart.js"],
  },
  {
    year: "2023 - 2024",
    role: "Android Developer",
    company: "Independent",
    description: `Designed and developed mobile applications using Android Studio and Kotlin. Implemented SharedPreferences for data storage and created task management features, including countdown timers, notifications, and CRUD operations.`,
    technologies: ["Android Studio", "Kotlin", "SharedPreferences"],
  },
  {
    year: "2022 - 2023",
    role: "UI/UX Designer",
    company: "Freelance",
    description: `Created intuitive UI/UX designs for educational and business applications using Figma. Focused on enhancing user experience through modern design principles and user-centric workflows.`,
    technologies: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "University Projects",
    description: `Worked on academic and freelance web development projects using the MERN stack. Designed and implemented RESTful APIs, user authentication, and dynamic interfaces. Collaborated with teammates to deliver functional and visually appealing applications.`,
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "Vehicle Service Center Website",
    image: project1,
    description:
      "A comprehensive system to manage employees in a car service center. Features include employee registration, attendance tracking, and payroll management.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "To Do List Application (Android Studio)",
    image: project2,
    description:
      "Help users manage multiple tasks effectively. Users can create, update, and delete tasks, set reminders, and mark tasks as complete.",
    technologies: ["Kotlin", "SharedPreferences"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Health Insurance Management System Website",
    image: project4,
    description:
      "Create a user-friendly platform to manage health insurance policies. Features include policy registration, claim processing, and premium payment.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    title: "Study Plan",
    image: project5, // New project
    description:
      "I developed a study planning application using Vite and React, featuring task scheduling, deadline tracking, and priority management. The app includes a calendar interface for efficient study organization and time management.",
    technologies: ["React", "vite"],
  },
  {
    title: "Weather Forecast App",
    image: project6, // New project
    description:
      "A mobile-friendly weather application providing real-time weather updates based on user location. Features include daily forecasts and weather alerts.",
    technologies: ["React Native", "OpenWeather API", "JavaScript"],
  },
];

export const CONTACT = {
  address: "162/172, Nadungamuwa, Gampaha,western province, Sri Lanka",
  phoneNo: "+94 787 053 682 ",
  email: "puthmika@gmail.com",
};