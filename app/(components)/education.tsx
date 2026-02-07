import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import campusLogo from "@/public/assets/campus-logo.png";
import Link from "next/link";

const Education = () => {
  return (
    <div className="p-2 w-full md:w-2xl max-w-2xl">
      <h3 className="font-bold text-4xl">Education</h3>
      <Card className="mt-2">
        <Link
          href="https://ioepas.edu.np/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardHeader>
            <CardTitle className="flex flex-col gap-2">
              <Image
                src={campusLogo}
                alt="Paschimanchal campus"
                width={200}
                height={200}
              />

              <p>Paschimanchal Campus, IOE, TU</p>
              <p className="font-light">B.E. Computer Engineering</p>
            </CardTitle>
            <CardDescription>(2018-2023)</CardDescription>
          </CardHeader>
        </Link>
      </Card>
    </div>
  );
};

export default Education;
