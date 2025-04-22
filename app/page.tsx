import TechStack from "@/components/tech-stack";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-[7rem] row-start-2 items-center my-[7rem]">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Education />
        <TechStack />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
