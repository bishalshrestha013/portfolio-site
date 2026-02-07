import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import courseraLogo from "@/public/assets/coursera-logo.png";
import Link from "next/link";

const Certification = () => {
  return (
    <div className="p-2 w-full md:w-2xl max-w-2xl">
      <h3 className="font-bold text-4xl">Certifications</h3>
      <Card className="mt-2">
        <Link
          href="https://www.coursera.org/account/accomplishments/verify/3L47ZBGTKJP8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardHeader>
            <CardTitle className="flex flex-col gap-2">
              <Image
                src={courseraLogo}
                alt="Coursera logo"
                width={100}
                height={100}
              />

              <p>Machine Learning</p>
              <p className="font-light">Stanford University</p>
            </CardTitle>
            <CardDescription>(2020)</CardDescription>
          </CardHeader>
        </Link>
      </Card>
      <Card className="mt-2">
        <Link
          href="https://www.coursera.org/account/accomplishments/verify/VH2TDSPDHLYV"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardHeader>
            <CardTitle className="flex flex-col gap-2">
              <Image
                src={courseraLogo}
                alt="Coursera logo"
                width={100}
                height={100}
              />

              <p>Neural Networks and Deep Learning</p>
              <p className="font-light">DeepLearning.AI</p>
            </CardTitle>
            <CardDescription>(2019)</CardDescription>
          </CardHeader>
        </Link>
      </Card>
    </div>
  );
};

export default Certification;
