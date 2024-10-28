import type { TechnologyLabel } from "./technologies";

export type Project = {
  title: string;
  description: string;
  imgUrl: string;
  techStack: TechnologyLabel[];
  sourceCodeUrl?: string;
  liveUrl?: string;
};

export const PROJECTS = [
  // {
  //   title: "Eccomerce Technet",
  //   description:
  //     "Web app to enhance and transform images with AI. Was built to solve a problem I had working with low quality images for a family business.",
  //   imgUrl: "/projects/technet.webp",
  //   techStack: ["TypeScript", "React", "Nextjs", "TailwindCSS", "MongoDB"],
  //   sourceCodeUrl: "https://github.com/llanesluis/image-enhancer",
  //   liveUrl: "https://image-enhancer-kappa.vercel.app/",
  // },
  // {
  //   title: "React Query V5 Demo",
  //   description:
  //     "This project was created to learn React Query and most of its features by building a simple CRUD app.",
  //   imgUrl: "/projects/aybecoconsulting.webp",
  //   techStack: ["React", "Vite", "React Query", "TailwindCSS"],
  //   sourceCodeUrl: "https://github.com/llanesluis/tanstack-query-demo",
  // },
  {
    title: "Technet Ecommerce",
    description:
      "An ecommerce platform for a computer and electronics store, featuring inventory tracking, product serialization, invoicing, and quote generation.",
    imgUrl: "/projects/technet.webp",
    techStack: ["Angular", "Expressjs", "TailwindCSS", "MySQL", "TypeScript"],
    sourceCodeUrl: "https://github.com/PaulPPS632/technet",
    liveUrl: "https://technetsac.com/",
  },
  {
    title: "AyBEcoConsulting",
    description:
      "A course-selling platform for online learning, offering course management, certification generation, and administration tools.",
    imgUrl: "/projects/aybecoconsulting.webp",
    techStack: ["Angular", "Expressjs", "TailwindCSS", "MySQL", "TypeScript"],
    sourceCodeUrl: "https://github.com/PaulPPS632/Front-AyBEcoConsulting",
    liveUrl: "https://capacitaciones.aybecoconsultingperu.com/",
  },
  {
    title: "Fryzan",
    description:
      "A SaaS application for inventory management and billing, featuring real-time data visualization and chart-based insights.",
    imgUrl: "/projects/fryzan.webp",
    techStack: ["Angular", "Spring", "TailwindCSS", "MySQL", "TypeScript"],
    sourceCodeUrl: "https://github.com/PaulPPS632/tenant-Front",
    liveUrl: "https://fryzan.com",
  },
] satisfies Project[];
