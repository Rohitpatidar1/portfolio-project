// src/data/projectsData.js

export const projects = [
  {
    slug: "ai-recipe-app",
    title: "AI Recipe App",
    description:
      "A smart app that suggests recipes based on ingredients a user has.",
    tech: ["React", "Node.js", "AI/ML API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://placehold.co/1200x600/161B22/58A6FF?text=Recipe+App",
    report:
      "The AI Recipe App was developed to solve the common problem of deciding what to cook with available ingredients. The app uses a third-party AI API to analyze user input and provide a list of suitable recipes. The frontend is built with React for a dynamic user experience, while the backend is powered by Node.js and Express to handle API requests efficiently.",
  },
  {
    slug: "real-time-chat",
    title: "Real-time Chat",
    description:
      "A fast, responsive chat app built with Socket.IO for instant messaging.",
    tech: ["React", "Express", "Socket.IO", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://placehold.co/1200x600/161B22/58A6FF?text=Chat+App",
    report:
      "This project is a real-time chat application created using the MERN stack and Socket.IO. It allows users to join chat rooms and communicate instantly. Key features include user presence indicators, typing notifications, and a clean, intuitive user interface designed with Tailwind CSS.",
  },
  // ... baaki projects ki details bhi yahan daalein
];
