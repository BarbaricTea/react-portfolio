import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <About />
      <Projects />
    </main>
  )
}
