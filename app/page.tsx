import Experience from "./components/experience";
import Intro from "./components/intro";

export default function Home() {
  return (
    <div className="mt-2 flex justify-center">
      <Intro />
      <Experience />
    </div>
  );
}
