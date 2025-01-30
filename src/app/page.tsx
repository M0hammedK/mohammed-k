import { Footer } from "@/components/layout/Footer";
import About from "./sections/about";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <section className="block">
      <section className="hero-size bg-gray-50 relative overflow-hidden">
        <Hero />
      </section>
      <section id="about" className="mt-10">
        <About />
      </section>
      <section id="projects" className="mt-10">
        <Projects />
      </section>
      <section id="contact" className="mt-10">
        <Contact />
      </section>
    </section>
  );
}
