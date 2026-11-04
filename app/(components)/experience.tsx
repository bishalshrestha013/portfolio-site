import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { WORK_EXPERIENCES } from "@/constants";

const Experience = () => {
  return (
    <div className="p-2 md:w-2xl max-w-2xl">
      <h3 className="font-bold text-4xl">Work Experience</h3>
      <div className="mt-2 flex flex-col gap-4">
        {WORK_EXPERIENCES.map(
          ({ company, role, period, url, logo, bullets, techIcons }) => (
            <Card key={company}>
              <Link href={url} target="_blank" rel="noopener noreferrer">
                <CardHeader>
                  <CardTitle>
                    {logo && (
                      <Image
                        src={logo}
                        alt={company}
                        width={112}
                        height={48}
                        className="h-12 w-28 object-contain object-left"
                      />
                    )}

                    <p>{company}</p>
                    <p className="font-light mt-2">{role}</p>
                  </CardTitle>
                  <CardDescription>({period})</CardDescription>
                </CardHeader>
              </Link>
              <CardContent className="ml-8 leading-7">
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </CardContent>
              {techIcons.length > 0 && (
                <CardFooter className="flex flex-wrap gap-4">
                  {techIcons.map((TechIcon, index) => (
                    <Badge key={index}>
                      <TechIcon />
                    </Badge>
                  ))}
                </CardFooter>
              )}
            </Card>
          ),
        )}
      </div>
    </div>
  );
};

export default Experience;
