import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";

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
