"use client";

import { div } from "framer-motion/client";
// pages/index.js
import { useState } from "react";

export default function Hero() {
  // State to store Tailwind classes for each element
  const [h1Classes, setH1Classes] = useState(
    "text-4xl font-bold mb-4 text-gray-300"
  );
  const [h2Classes, setH2Classes] = useState(
    "text-2xl font-semibold mb-2 text-gray-300"
  );
  const [pClasses, setPClasses] = useState("text-gray-300");

  return (
    // hero.tsx
    <div className="block max-w-7xl h-980">
      <svg width="864" height="1117" className="absolute z-0">
        <path d="M0 0L408 0C408 566.5 843.5 506 864 1117H0V0Z" fill="#645FCF" />
      </svg>

      <div className="container h-full grid lg:grid-cols-2 gap-8 items-center z-10">
        <div className="relative max-w-md mx-auto">
          <img
            src="/me.jpg"
            alt="Mohammed Al-kaf"
            className="my-img"
          />
        </div>

        <div className="space-y-6 bg-background/90 backdrop-blur-sm p-8 rounded-xl shadow-lg w-fit justify-self-center">
          <div className="font-bold bg-gray-950 p-6 rounded-lg transition-all duration-300 hover:bg-black">
            {/* Code Snippet with Editable Tailwind Classes */}
            <pre className="text-dark-blue-custom">&lt;div&gt;</pre>
            <pre className="ml-4 text-dark-blue-custom">
              &lt;h1 <span className="text-light-blue-custom">class</span>
              <span className="text-light-blue-custom">=</span>
              <input
                className="text-brown-custom bg4 border border-gray-700 rounded px-2"
                value={h1Classes}
                onChange={(e) => setH1Classes(e.target.value)}
                size={h1Classes.length}
              />
              &gt;
            </pre>
            <h1 className={`ml-8 ${h1Classes}`}>Welcome to My Portfolio</h1>
            <pre className="ml-4 text-dark-blue-custom">&lt;/h1&gt;</pre>
            <pre className="ml-4 text-dark-blue-custom">
              &lt;h2 <span className="text-light-blue-custom">class</span>
              <span className="text-light-blue-custom">=</span>
              <input
                className="text-brown-custom bg4 border-gray-700 rounded px-2"
                value={h2Classes}
                onChange={(e) => setH2Classes(e.target.value)}
                size={h2Classes.length}
              />
              &gt;
            </pre>
            <h2 className={`ml-8 ${h2Classes}`}>I am a Backend Developer</h2>
            <pre className="ml-4 text-dark-blue-custom">&lt;/h2&gt;</pre>
            <pre className="ml-4 text-dark-blue-custom">
              &lt;p <span className="text-light-blue-custom">class</span>
              <span className="text-light-blue-custom">=</span>
              <input
                className="text-brown-custom bg4 border-gray-700 rounded px-2"
                value={pClasses}
                onChange={(e) => setPClasses(e.target.value)}
                size={pClasses.length}
              />
              &gt;
            </pre>
            <p className={`ml-8 font-normal ${pClasses}`}>
              Specializing in building server side app, mobile app and solve
              problems. <br /> <b className="text-red-700">Note:</b>{" "}
              <u>these styles are editable</u>
            </p>
            <pre className="ml-4 text-dark-blue-custom">&lt;/p&gt;</pre>
            <pre className="text-dark-blue-custom">&lt;/div&gt;</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
