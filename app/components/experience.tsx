import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import dzangoLogo from "@/public/assets/dzango-logo.png";
import Link from "next/link";
import { FaNodeJs, FaReact, FaDocker } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <div className="w-2xl max-w-2xl">
      <h3 className="font-bold text-4xl">Experience</h3>
      <Card className="mt-2">
        <Link
          href="https://dzango.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardHeader>
            <CardTitle>
              <Image
                src={dzangoLogo}
                alt="Dzango Technologies"
                width={100}
                height={100}
              />

              <p>Dzango Technologies</p>
              <p className="font-light mt-2">Software Engineer</p>
            </CardTitle>
            <CardDescription>(Sept 2023-Jan 2026)</CardDescription>
          </CardHeader>
        </Link>
        <CardContent className="ml-8 leading-7">
          <li>
            Led the development of MVPs for different clients, delivering
            complete solutions from planning to deployment in fast- paced
            environments.
          </li>
          <li>
            Built and maintained scalable web applications using Fastify
            (Node.js) and React.js, improving performance and relia- bility
            across multiple projects.
          </li>
          <li>
            Designed and implemented RESTful APIs, database schemas, and core
            backend logic using PostgreSQL and Node.js.
          </li>
          <li>
            Developed and maintained open-source internal packages for React and
            Fastify, published to the public npm registry, enabling reusable
            components and services across current and future projects.{" "}
          </li>
          <li>
            Collaborated with cross-functional teams to build SaaS products and
            multi-tenant applications with role-based access and modular
            architecture.{" "}
          </li>
          <li>
            Automated and streamlined agreement-processing workflows using
            no-code/low-code tools, reducing manual effort for the operations
            team.
          </li>
        </CardContent>
        <CardFooter className="flex gap-4">
          <Badge>
            <FaNodeJs />
          </Badge>
          <Badge>
            <FaReact />
          </Badge>
          <Badge>
            <SiPostgresql />
          </Badge>
          <Badge>
            <FaDocker />
          </Badge>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Experience;
