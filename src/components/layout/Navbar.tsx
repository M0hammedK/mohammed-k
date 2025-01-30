"use client"

import { useState, useRef } from "react";
import useLottieAnimation from "@/hooks/useLottieAnimation";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toggleAnimation } = useLottieAnimation(containerRef);

  return (
    <div className="sticky top-0 w-full z-50 backdrop-blur-md p-4 sm:p-8">
      <div className="container flex items-center justify-between">
        {/* Lottie Animation & Logo */}
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={toggleAnimation}>
            <div ref={containerRef} className="w-8 sm:w-10" />
          </div>
          <h4 className="text-lg sm:text-2xl font-bold">Mohammed Al-Kaf</h4>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`sm:flex gap-6 ${menuOpen ? "block" : "hidden"} absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-800 sm:bg-transparent p-4 sm:p-0`}>
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section} className="nav-item text-white sm:text-gray-900">
              <a href={`#${section}`} className="block sm:inline-block p-2">{section.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;