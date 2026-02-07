import Education from "./components/education";
import Experience from "./components/experience";
import Intro from "./components/intro";

export default function Home() {
  return (
    <div className="mt-4 flex flex-col items-center gap-4">
      <Intro />
      <Experience />
      <Education />
    </div>
  );
}
