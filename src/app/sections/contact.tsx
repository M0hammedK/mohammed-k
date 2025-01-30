import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Contact() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">
          Contact Me
        </h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {[
        { href: "https://facebook.com", icon: FaFacebook, color: "text-blue-400 hover:text-blue-600" },
        { href: "https://github.com", icon: FaGithub, color: "text-gray-600 hover:text-black" },
        { href: "https://instagram.com", icon: FaInstagram, color: "text-pink-400 hover:text-pink-600" },
        { href: "https://linkedin.com", icon: FaLinkedin, color: "text-blue-400 hover:text-blue-600" },
        { href: "https://linkedin.com", icon: FaXTwitter, color: "text-gray-600 hover:text-black" },
      ].map((social, index) => (
        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
          <social.icon className={`size-8 transition-all duration-300 ${social.color}`} />
        </a>
      ))}
        </div>
      </div>
    </section>
  );
}