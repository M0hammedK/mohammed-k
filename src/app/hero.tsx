"use client"

// pages/index.js
import { useState } from 'react';

export default function Hero() {
  // State to store Tailwind classes for each element
  const [h1Classes, setH1Classes] = useState('text-4xl font-bold mb-4');
  const [h2Classes, setH2Classes] = useState('text-2xl font-semibold mb-2');
  const [pClasses, setPClasses] = useState('mb-6');

  return (
    <div className="main-container">
      <div className="grid grid-cols-[30%_70%]">
        <div className="self-center justify-items-center">
          <img src={'/me.jpg'} alt="Mohammed Al-kaf" className="my-img" />
        </div>
        <div>
          {/* Card with Dynamic Classes */}
          <div className="card">
            {/* Code Snippet with Editable Tailwind Classes */}
            <pre className="text-gray-custom">&lt;div&gt;</pre>
            <pre className="ml-4 text-blue-custom">
              &lt;h1 <span className="text-green-custom">class</span>
              <span className="text-gray-custom">=</span>
              <input
                className="text-yellow-custom bg-card border border-gray-700 rounded px-2"
                value={h1Classes}
                onChange={(e) => setH1Classes(e.target.value)}
                size={h1Classes.length}
              />
              &gt;
            </pre>
            <pre className={`ml-8 ${h1Classes}`}>Welcome to My Portfolio</pre>
            <pre className="ml-4 text-blue-custom">&lt;/h1&gt;</pre>
            <pre className="ml-4 text-blue-custom">
              &lt;h2 <span className="text-green-custom">class</span>
              <span className="text-gray-custom">=</span>
              <input
                className="text-yellow-custom bg-card border border-gray-700 rounded px-2"
                value={h2Classes}
                onChange={(e) => setH2Classes(e.target.value)}
                size={h2Classes.length}
              />
              &gt;
            </pre>
            <pre className={`ml-8 ${h2Classes}`}>I am a Passionate Developer</pre>
            <pre className="ml-4 text-blue-custom">&lt;/h2&gt;</pre>
            <pre className="ml-4 text-blue-custom">
              &lt;p <span className="text-green-custom">class</span>
              <span className="text-gray-custom">=</span>
              <input
                className="text-yellow-custom bg-card border border-gray-700 rounded px-2"
                value={pClasses}
                onChange={(e) => setPClasses(e.target.value)}
                size={pClasses.length}
              />
              &gt;
            </pre>
            <pre className={`ml-8 ${pClasses}`}>
              Specializing in building modern, responsive, and user-friendly web applications.
            </pre>
            <pre className="ml-4 text-blue-custom">&lt;/p&gt;</pre>
            <pre className="text-gray-custom">&lt;/div&gt;</pre>
          </div>
        </div>
        
      </div>
    </div>
  );
}