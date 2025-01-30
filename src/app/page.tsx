import { Footer } from "@/components/layout/Footer";
import About from "./sections/about";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <section id="home" className="block">
      <section className="responsive relative overflow-hidden">
        <Hero />
      </section>
      <section id="about" className="responsive mt-10">
        <About />
      </section>
      <section id="projects" className="responsive mt-10">
        <Projects />
      </section>
      <section id="contact" className="responsive mt-10">
        <Contact />
      </section>
    </section>
  );
}
