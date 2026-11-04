import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

import {
  FaCloud,
  FaLaptop,
  FaRobot,
  FaServer,
  FaTools,
  FaCode,
  FaVial,
} from "react-icons/fa";

const Skills = () => {
  const techStack = [
    {
      title: "Languages",
      icon: <FaCode />,
      items: ["TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      title: "Frontend",
      icon: <FaLaptop />,
      items: [
        "React.js",
        "TanStack Start",
        "Next.js",
        "Redux",
        "RTK Query",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      items: [
        "Node.js",
        "Fastify.js",
        "Express.js",
        "FastAPI",
        "Django",
        "GraphQL",
        "Redis",
        "PostgreSQL",
        "BullMQ",
      ],
    },
    {
      title: "AI & LLM",
      icon: <FaRobot />,
      items: [
        "LangChain",
        "LangGraph",
        "LLMs",
        "OpenRouter",
        "RAG",
        "Qdrant",
        "pgvector",
        "LLM Inference",
        "RunPod Serverless",
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <FaCloud />,
      items: [
        "Docker",
        "Docker Swarm",
        "GitLab CI/CD",
        "GitHub Actions",
        "GHCR",
        "Portainer",
        "Nginx",
        "Traefik",
        "AWS EC2",
        "AWS S3",
        "Cloudflare",
        "Linux",
      ],
    },
    {
      title: "Testing & Monitoring",
      icon: <FaVial />,
      items: ["Jest", "Vitest", "Sentry"],
    },
    {
      title: "Miscellaneous",
      icon: <FaTools />,
      items: [
        "Monolithic & Microservices Architectures",
        "Meta Graph API",
        "Make.com",
        "OAuth 2.0",
        "REST APIs",
        "WebSockets",
      ],
    },
  ];

  return (
    <div className="p-4 mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div>
        {techStack.map(({ title, icon, items }, index) => (
          <StackCard key={index} title={title} icon={icon} items={items} />
        ))}
      </div>
    </div>
  );
};

const StackCard = ({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) => {
  return (
    <Card className="mt-2">
      <CardHeader>
        <CardTitle className="flex gap-2">
          {icon}
          <p>{title}</p>
        </CardTitle>
        <CardFooter className="flex gap-2 flex-wrap">
          {items.map((item, index) => (
            <Badge key={index}>{item}</Badge>
          ))}
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

export default Skills;
