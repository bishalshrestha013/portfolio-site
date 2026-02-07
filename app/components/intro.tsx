import photo from "@/public/assets/photo.jpeg";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex flex-col items-start md:flex-row-reverse border p-4 bg-white md:rounded-4xl gap-4">
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
          Full Stack Software Engineer building web apps. Find me on twitter and
          linkedin.
        </p>
      </div>
    </div>
  );
};

export default Intro;
