import About from "./sections/about";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import Status from "./sections/status";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Services from "./sections/services";

export default function Home() {
  return (
    <section id="home" className="responsive block p-0">
      <Hero />
      <About />
      <Status />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </section>
  );
}
