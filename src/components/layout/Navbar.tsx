"use client";

import { useRef } from "react";
import useLottieAnimation from "@/hooks/useLottieAnimation";

function Navbar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toggleAnimation } = useLottieAnimation(containerRef);

  const handleClick = () => {
    toggleAnimation(); // Trigger Lottie animation (e.g., theme toggle)
  };

  return (
    <div className="sticky top-0 w-full z-50 backdrop-blur-md p-8">
      <div className="absolute min-w-1280 anchor">
        <nav className=" text">
          <div className="grid lg:grid-cols-[5%_75%_15%] md:grid-cols-[10%_60%_30%] grid-cols-[20%_80%] gap-2">
            {/* Left section for Lottie and mobile name */}
            <div className="md:flex items-center gap-5 ps-6">
              <div className="cursor-pointer" onClick={handleClick}>
                <div ref={containerRef} className="w-10" />
              </div>
              <div className="sm:hidden col-span-2 justify-self-center">
                <h4 className="title">Mohammed Al-Kaf</h4>
              </div>
              <div>
                <a href="#" className="block sm:hidden text-left">
                  <u>EN</u>
                </a>
                <a href="#" className="hidden sm:block">
                  <u>EN</u>
                </a>
              </div>
            </div>

            {/* Center name (visible on medium screens and above) */}
            <div className="hidden sm:block justify-items-center">
              <h4 className="body">
                <a href="#" className="title">Mohammed Al-Kaf</a>
              </h4>
            </div>

            {/* Right section for navigation links */}
            <div className="sm:col-auto self-center">
              <ul className="flex justify-between w-max">
                {["home", "about", "projects", "contact"].map((section) => (
                  <li key={section} className="nav-item">
                    <a href={`#${section}`}>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
