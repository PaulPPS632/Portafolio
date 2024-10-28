import HTML from "../components/icons/HTML.astro";
import CSS from "../components/icons/CSS.astro";
import React from "../components/icons/React.astro";
import Nextjs from "../components/icons/Nextjs.astro";
import TypeScript from "../components/icons/TypeScript.astro";
import Tailwind from "../components/icons/Tailwind.astro";
import ReactQuery from "../components/icons/ReactQuery.astro";
import AstroIcon from "../components/icons/AstroIcon.astro";
import Expressjs from "../components/icons/Expressjs.astro";
import Nodejs from "../components/icons/Nodejs.astro";
import CSharp from "../components/icons/CSharp.astro";
import Vite from "../components/icons/Vite.astro";
import Clerk from "../components/icons/Clerk.astro";
import MongoDB from "../components/icons/MongoDB.astro";
import Angular from "../components/icons/Angular.astro";
import Spring from "../components/icons/Spring.astro";
import GitActions from "../components/icons/GitActions.astro";
import Mysql from "../components/icons/Mysql.astro";

export const TECHNOLOGIES = [
  {
    label: "HTML",
    Component: HTML,
  },
  {
    label: "CSS",
    Component: CSS,
  },
  {
    label: "React",
    Component: React,
  },
  {
    label: "Nextjs",
    Component: Nextjs,
  },
  {
    label: "TypeScript",
    Component: TypeScript,
  },
  {
    label: "TailwindCSS",
    Component: Tailwind,
  },
  {
    label: "Nodejs",
    Component: Nodejs,
  },
  {
    label: "Expressjs",
    Component: Expressjs,
  },
  {
    label: "Astro",
    Component: AstroIcon,
  },
  {
    label: "React Query",
    Component: ReactQuery,
  },
  {
    label: "Git",
    Component: HTML,
  },
  {
    label: "C#",
    Component: CSharp,
  },
  {
    label: "Vite",
    Component: Vite,
  },
  {
    label: "Clerk",
    Component: Clerk,
  },
  {
    label: "MongoDB",
    Component: MongoDB,
  },
  {
    label: "Angular",
    Component: Angular,
  },
  {
    label: "Spring",
    Component: Spring,
  },
  {
    label: "GitActions",
    Component: GitActions,
  },
  {
    label: "MySQL",
    Component: Mysql,
  },
] as const;

export type TechnologyLabel = (typeof TECHNOLOGIES)[number]["label"];
