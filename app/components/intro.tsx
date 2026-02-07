import photo from "@/public/assets/photo.jpeg";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="flex flex-col items-start md:flex-row-reverse border p-4 bg-white md:rounded-4xl gap-4 max-w-2xl">
      <Image
        src={photo}
        alt="Profile photo"
        width={100}
        height={100}
        className="rounded-4xl"
      />
      <div>
        <h1 className="font-bold text-3xl md:text-5xl mb-4">Bishal Shrestha</h1>
        <p className="text-zinc-600">
          Full Stack Software Engineer | Find me on{" "}
          <Link
            className="text-blue-600 hover:text-blue-900"
            href={"https://x.com/mr_shrestha7"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            twitter
          </Link>{" "}
          and
          <Link
            className="text-blue-600 hover:text-blue-900"
            href={"https://www.linkedin.com/in/mrshrestha/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            linkedin
          </Link>
          .
        </p>
        <hr className="mt-4" />
        <p className="mt-4 leading-7">
          Full Stack Engineer with 2+ years of experience building scalable web
          applications using React, Node.js (Fastify), and PostgreSQL. I enjoy
          designing efficient backend systems, crafting intuitive user
          interfaces, and exploring DevOps practices to build reliable and
          maintainable applications. Passionate about clean code, performance,
          and continuous learning.
        </p>
      </div>
    </div>
  );
};

export default Intro;
