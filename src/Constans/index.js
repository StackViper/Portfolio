export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '/',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Project',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const myProjects = [
  {
    title: "TicketBazzar – Real-Time Ticket Booking Platform",
    desc: "A scalable ticket booking system with real-time concurrency control and secure payments.",
    subdesc:
      "Implemented Redis-based distributed locks to prevent double booking, JWT authentication with role-based access, Razorpay payment gateway integration, and PostgreSQL query optimization with Redis caching to improve performance by 40%. Structured the system using Turborepo monorepo architecture.",
    href: "https://your-live-link.com",
    spotlight: "/assets/projects/ticketbazzar.svg",
    logo: "/assets/logos/ticket.svg",
    logoStyle: { background: "#1f2937" },
    texture: "/textures/ticketbazzar.svg",
    tags: [
      { name: "Next.js", path: "/assets/tags/nextjs.svg" },
      { name: "Node.js", path: "/assets/tags/nodejs.svg" },
      { name: "PostgreSQL", path: "/assets/tags/postgres.svg" },
      { name: "Redis", path: "/assets/tags/redis.svg" },
      { name: "Razorpay", path: "/assets/tags/razorpay.svg" },
    ],
  },

  {
    title: "TalkHire – AI Powered Interview Platform",
    desc: "An AI-driven interview automation system for recruiters and candidates.",
    subdesc:
      "Integrated GPT-4 and Whisper APIs for real-time transcription, adaptive questioning, and AI-based performance analysis. Built recruiter and candidate dashboards with role-based access control and real-time communication using WebSockets. Implemented Prisma ORM with PostgreSQL for scalable data management.",
    href: "https://your-live-link.com",
    spotlight: "/assets/projects/talkhire.svg",
    logo: "/assets/logos/ai.svg",
    logoStyle: { background: "#111827" },
    texture: "/textures/talkhire.svg",
    tags: [
      { name: "Next.js", path: "/assets/tags/nextjs.svg" },
      { name: "WebSocket", path: "/assets/tags/websocket.svg" },
      { name: "Prisma", path: "/assets/tags/prisma.svg" },
      { name: "PostgreSQL", path: "/assets/tags/postgres.svg" },
      { name: "OpenAI", path: "/assets/tags/openai.svg" },
    ],
  },

  {
    title: "AI-Powered Invoice Management System",
    desc: "A smart automation platform that extracts invoice data from PDFs, images, and Excel using AI.",
    subdesc:
      "Developed a full-stack web app with React.js and Node.js to automate invoice data extraction using Google Gemini API. Built secure REST APIs for file uploads and structured JSON generation. Implemented centralized state management using Redux and added real-time validation. Deployed on Vercel with 90%+ data extraction accuracy.",
    href: "https://your-live-link.com",
    spotlight: "/assets/projects/invoice-ai.svg",
    logo: "/assets/logos/invoice.svg",
    logoStyle: { background: "#020617" },
    texture: "/textures/invoice-ai.svg",
    tags: [
      { name: "React.js", path: "/assets/tags/react.svg" },
      { name: "Node.js", path: "/assets/tags/nodejs.svg" },
      { name: "Redux", path: "/assets/tags/redux.svg" },
      { name: "Tailwind CSS", path: "/assets/tags/tailwind.svg" },
      { name: "Gemini AI", path: "/assets/tags/gemini.svg" },
      { name: "Vercel", path: "/assets/tags/vercel.svg" },
    ],
  },

  {
    title: "JudgeAI – AI-Powered Legal Dispute Resolution Platform",
    desc: "An intelligent legal-tech platform that simulates legal arguments and generates AI-driven verdicts.",
    subdesc:
      "Built a full-stack legal dispute resolution system using Next.js and Express.js allowing users to create cases, upload PDF evidence, conduct structured arguments, and receive AI-powered verdicts. Integrated OpenAI for legal reasoning and ChromaDB for semantic document retrieval. Used Prisma ORM and PostgreSQL for scalable database management.",
    href: "https://youtu.be/rqUrJL_RJhk",
    spotlight: "/assets/projects/judgeai.svg",
    logo: "/assets/logos/judgeai.svg",
    logoStyle: { background: "#0f172a" },
    texture: "/textures/judgeai.svg",
    tags: [
      { name: "Next.js", path: "/assets/tags/nextjs.svg" },
      { name: "Express.js", path: "/assets/tags/express.svg" },
      { name: "PostgreSQL", path: "/assets/tags/postgres.svg" },
      { name: "Prisma", path: "/assets/tags/prisma.svg" },
      { name: "OpenAI", path: "/assets/tags/openai.svg" },
      { name: "ChromaDB", path: "/assets/tags/chromadb.svg" },
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.06 : isMobile ? 0.08 : 0.065,
    deskPosition: isMobile ? [0.5, 1, 0.5] : [0.25, 0, 0],
    cubePosition: isSmall ? [2.2, -9, -10] : isMobile ? [0, -3, -10] : isTablet ? [5, -5, 0] : [-5.3, 1, 0.1],
    reactLogoPosition: isSmall ? [-3.5, 1, 0] : isMobile ? [0, -3, -10] : isTablet ? [0, 10, 0] : [0.3, 0.13, 0.1],
    ringPosition: isSmall ? [-5, 6, 0] : isMobile ? [-9, -3, -10] : isTablet ? [-12, 10, 0] : [19, -11, 0.1],
    targetPosition: isSmall ? [-5, -9, -10] : isMobile ? [-9, -3, -10] : isTablet ? [-11, -7, -10] : [-13.5, -11, -10],
    ringScale: isSmall ? 1 : isMobile ? 0.001 : 0.065,
  };
};
 
      
    
  
  