"use client";

import { useRef } from "react";
import useLottieAnimation from "@/hooks/useLottieAnimation";

function Navbar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toggleAnimation } = useLottieAnimation(containerRef);
  const handleClick = () => {
    toggleAnimation(); // Toggle to moon.json on click
  };

  return (
    <div className="sticky bg-gray-600 ">
      <nav className="bg-white pr-6 text-gray-600 sm:justify-around">
        {/* Modified grid structure */}
        <div className="grid lg:grid-cols-[5%_70%_25%] s_lg:grid-cols-[5%_60%_35%] md:grid-cols-[5%_55%_40%] grid-cols-1 gap-2 sm:gap-0">
          {/* First row for mobile */}
          <div className="grid grid-cols-[10%_35%_35%_10%] md:flex gap-4 items-center">
            <div className="">
              <div
                ref={containerRef}
                className="w-10 cursor-pointer"
                onClick={handleClick}
              />
            </div>
            <div className="">
              <h4 className="body sm:hidden col-span-2 self-center">
                Mohammed Al-Kaf
              </h4>
            </div>
            <a href="#" className="sm:hidden text-left">
              <u>EN</u>
            </a>
            <a href="#">
              <u>EN</u>
            </a>
          </div>

          {/* Center name for medium+ screens */}
          <div className="hidden sm:block justify-items-center pt-2 pb-1">
            <h4 className="body">
              {" "}
              <a href="#">Mohammed Al-Kaf</a>
            </h4>
          </div>

          {/* Navigation links */}
          <div className="col-span-1 sm:col-auto self-center relative group h-10 overflow-hidden ">
            <div className="absolute bottom-0 left-0 w-full transition-all duration-300 transform translate-y-full group-hover:-translate-y-1/4">
              <ul className="flex justify-between gap-4">
                <li className="nav-item select-item">
                  {" "}
                  <a href="#">Home</a>
                </li>
                <li className="nav-item select-item">
                  {" "}
                  <a href="#">About me</a>
                </li>
                <li className="nav-item select-item">
                  <a href="#">My projects</a>
                </li>
                <li className="nav-item select-item">
                  <a href="#">Contact me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
