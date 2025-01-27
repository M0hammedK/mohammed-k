"use client"

import { useRef } from 'react';
import useLottieAnimation from '@/hooks/useLottieAnimation';

function Navbar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toggleAnimation } = useLottieAnimation(containerRef);
  const handleClick = () => {
    toggleAnimation()// Toggle to moon.json on click
  };

  return (
    <nav className="sticky bg-gray-600 p-3 pr-6 text-gray-200 sm:justify-around">
      {/* Modified grid structure */}
      <div className="grid lg:grid-cols-[5%_70%_25%] s_lg:grid-cols-[5%_60%_35%] md:grid-cols-[5%_55%_40%] grid-cols-1 gap-2 sm:gap-0">
        {/* First row for mobile */}
          <div className='grid grid-cols-[10%_35%_35%_10%] md:flex items-center gap-4'>
            <div className='justify-items-end'>
              <div ref={containerRef} className='w-10 cursor-pointer' onClick={handleClick}/>
            </div>
            <h4 className="body sm:hidden col-span-2 text-center">Mohammed Al-Kaf</h4>
            <a href="#" className='sm:hidden text-left'><u>EN</u></a>
            <a href="#"><u>EN</u></a>
          </div>



        {/* Center name for medium+ screens */}
        <div className="hidden sm:block justify-items-center">
          <h4 className="body"> <a href="#">Mohammed Al-Kaf</a></h4>
        </div>

        {/* Navigation links */}
        <div className="col-span-1 sm:col-auto self-center">
          <ul className="flex justify-between gap-4">
            <li className="title"> <a href="#">Home</a></li>
            <li className="title"> <a href="#">About me</a></li>
            <li className="title"><a href="#">My projects</a></li>
            <li className="title"><a href="#">Contact me</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;