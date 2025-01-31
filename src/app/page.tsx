import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Status from "./sections/Status";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Services from "./sections/Services";

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
