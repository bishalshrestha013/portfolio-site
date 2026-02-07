import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

import {
  FaDatabase,
  FaLaptop,
  FaServer,
  FaTools,
  FaCode,
} from "react-icons/fa";

const Skills = () => {
  const techStack = [
    {
      title: "Languages",
      icon: <FaCode />,
      items: ["Typescript", "Javascript", "Python", "SQL", "C++", "C"],
    },
    {
      title: "Frontend",
      icon: <FaLaptop />,
      items: ["React JS", "Next JS", "Redux", "TailwindCSS"],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      items: ["Node.js", " Fastify.js", "Express.js", "Nest.js"],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      items: ["Postresql", "MySql", "MongoDB"],
    },
    {
      title: "Tools",
      icon: <FaTools />,
      items: [
        "Docker",
        "Gitlab CI/CD",
        "Github Actions",
        "Nginx",
        "Traefik",
        "Sentry",
        "No-code platform (make.com)",
        "AWS EC2",
        "AWS S3",
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
