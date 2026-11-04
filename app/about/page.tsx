import Image from "next/image";
import photo from "@/public/assets/photo.jpeg";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaCloud, FaLaptopCode, FaRobot } from "react-icons/fa";
import { WORK_EXPERIENCES } from "@/constants";

const focusAreas = [
  {
    title: "Full-Stack Development",
    icon: <FaLaptopCode />,
    description:
      "Multi-tenant SaaS apps with TypeScript, React, Node.js, and PostgreSQL — auth, RBAC, subscriptions, and payments.",
  },
  {
    title: "AI & LLM Applications",
    icon: <FaRobot />,
    description:
      "AI-powered products with LLMs, RAG, and vector databases, backed by async pipelines on Redis and BullMQ.",
  },
  {
    title: "DevOps & Cloud",
    icon: <FaCloud />,
    description:
      "CI/CD with GitHub Actions and containerized production infrastructure with Docker, Nginx, and Linux.",
  },
];

const journey = [
  ...WORK_EXPERIENCES.map(({ company, role, period }) => ({
    title: role,
    subtitle: company,
    period,
  })),
  {
    title: "B.E. Computer Engineering",
    subtitle: "Paschimanchal Campus, IOE, TU",
    period: "2018 - 2023",
  },
];

const About = () => {
  return (
    <div className="p-4 mx-auto max-w-3xl">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <Image
          src={photo}
          alt="Profile photo"
          width={100}
          height={100}
          className="rounded-4xl"
        />
        <div>
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="mt-1 text-zinc-600">
            Senior Full-Stack & DevOps Engineer
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4 leading-7">
        <p>
          I&apos;m Bishal Shrestha, a software engineer with a B.E. in Computer
          Engineering from Paschimanchal Campus, IOE, Tribhuvan University. Over
          the past three years I&apos;ve worked across the full stack — from
          designing database schemas and APIs to building React interfaces and
          running production infrastructure.
        </p>
        <p>
          At MNS AI Labs, I build multi-tenant SaaS products, AI-powered
          applications using LLMs and RAG, and the CI/CD pipelines and
          containerized infrastructure that ship them. Before that, I led MVP
          development for clients at Dzango Technologies and published
          open-source React and Fastify packages to npm.
        </p>
        <p>
          My interest in machine learning goes back to university, where I
          built a baby cry classification system and completed Stanford&apos;s
          Machine Learning course. I care about clean code, performance, and
          continuous learning.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold">What I Do</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {focusAreas.map(({ title, icon, description }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {icon}
                <p>{title}</p>
              </CardTitle>
              <CardDescription className="leading-6">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-bold">Journey</h2>
      <ol className="mt-4">
        {journey.map(({ title, subtitle, period }) => (
          <li key={`${subtitle}-${period}`} className="group flex gap-4">
            <div className="flex flex-col items-center">
              <span className="mt-1.5 size-2.5 rounded-full bg-neutral-900" />
              <span className="w-px flex-1 bg-neutral-200 group-last:hidden" />
            </div>
            <div className="pb-6">
              <p className="text-sm text-neutral-500">{period}</p>
              <p className="font-semibold">{title}</p>
              <p className="text-zinc-600">{subtitle}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default About;
