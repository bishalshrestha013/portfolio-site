import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import { FaNodeJs, FaReact, FaDocker, FaPython } from "react-icons/fa";
import {
  SiPostgresql,
  SiTypescript,
  SiRedis,
  SiGithubactions,
} from "react-icons/si";
import dzangoLogo from "@/public/assets/dzango-logo.png";
import mnsLogo from "@/public/assets/mns-logo.png";
import techNirvanaLogo from "@/public/assets/tech-nirvana-logo.webp";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  // { name: "Blogs", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/" },
  { name: "Contact", href: "/" },
];

export const SOCIAL_LINKS = [
  { name: "Github", href: "/" },
  { name: "Linkedin", href: "/" },
  { name: "Twitter", href: "/" },
  { name: "Instagram", href: "/" },
];

export const WORK_EXPERIENCES: {
  company: string;
  role: string;
  period: string;
  url: string;
  logo?: StaticImageData;
  bullets: string[];
  techIcons: IconType[];
}[] = [
  {
    company: "MNS AI Labs",
    role: "Senior Full-Stack & DevOps Engineer",
    period: "May 2026 - Present",
    url: "https://mns.com.np/mnslabs/",
    logo: mnsLogo,
    bullets: [
      "Developed and maintained full-stack SaaS applications using TypeScript, Node.js, React, PostgreSQL, Redis, and Drizzle ORM, including multi-tenant architectures, authentication, RBAC, subscription management, and payment integrations.",
      "Developed AI-powered applications and asynchronous processing pipelines, deploying LLMs on RunPod serverless GPUs for on-demand inference, using Redis and BullMQ for background job orchestration, and Cloudflare R2 for media storage and delivery.",
      "Developed social media automation solutions using Meta Graph APIs, supporting multi-account management, automated publishing, and content ingestion through RSS feeds and external APIs.",
      "Implemented AI-powered semantic search and retrieval systems using Python, Retrieval-Augmented Generation (RAG), and Qdrant vector databases.",
      "Designed and maintained CI/CD pipelines using GitHub Actions, automating Docker builds, container registry publishing, versioning, and deployment workflows across development and production environments.",
      "Managed containerized production infrastructure using Docker, Docker Compose, Portainer, Nginx, and Linux VPS, including SSL/TLS configuration, secrets management, reverse proxies, and database backups.",
    ],
    techIcons: [
      SiTypescript,
      FaNodeJs,
      FaReact,
      SiPostgresql,
      SiRedis,
      FaPython,
      FaDocker,
      SiGithubactions,
    ],
  },
  {
    company: "Tech Nirvana",
    role: "Software Engineer",
    period: "Mar 2026 - May 2026",
    url: "https://technirvana.com.np/",
    logo: techNirvanaLogo,
    bullets: [
      "Developed and maintained e-commerce applications and admin dashboards, implementing responsive UI components and backend functionality.",
      "Designed and optimized database schemas and relationships, ensuring data integrity, efficient queries, and maintainable backend architecture.",
      "Provided technical guidance to team members on database design, backend development, and production-level best practices.",
      "Utilized deployment and automation tools to streamline application deployment processes and improve deployment consistency.",
    ],
    techIcons: [FaNodeJs, FaReact, SiPostgresql, FaDocker],
  },
  {
    company: "Dzango Technologies",
    role: "Software Engineer",
    period: "Sept 2023 - Jan 2026",
    url: "https://dzango.com/",
    logo: dzangoLogo,
    bullets: [
      "Led the development of MVPs for different clients, delivering complete solutions from planning to deployment in fast-paced environments.",
      "Built and maintained scalable web applications using Fastify (Node.js) and React.js, improving performance and reliability across multiple projects.",
      "Designed and implemented RESTful APIs, database schemas, and core backend logic using PostgreSQL and Node.js.",
      "Developed and maintained open-source internal packages for React and Fastify, published to the public npm registry, enabling reusable components and services across current and future projects.",
      "Collaborated with cross-functional teams to build SaaS products and multi-tenant applications with role-based access and modular architecture.",
      "Automated and streamlined agreement-processing workflows using no-code/low-code tools, reducing manual effort for the operations team.",
    ],
    techIcons: [FaNodeJs, FaReact, SiPostgresql, FaDocker],
  },
];
