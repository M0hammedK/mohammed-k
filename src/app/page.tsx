import { Footer } from "@/components/Footer";
import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Projects from "./projects";

export default function Home() {

  return (
    <div>
      <div id="#main">
        <Hero />
      </div>
      <div id="#about" className="pt-20">
        <About />
      </div>
      <div id="#projects" className="pt-20">
        <Projects />
      </div>
      <div id="#contact" className="pt-20">
        <Contact />
      </div>
    </div>
  );
}