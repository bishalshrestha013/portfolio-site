import { Education, Experience, Intro, Certification } from "@/app/components";

export default function Home() {
  return (
    <div className="mt-4 flex flex-col items-center gap-4">
      <Intro />
      <Experience />
      <Education />
      <Certification />
    </div>
  );
}
