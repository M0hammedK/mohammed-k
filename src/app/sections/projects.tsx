"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import food  from '../../../public/food.png'
import blog  from '../../../public/blog.png'
import buddy  from '../../../public/buddy.png'
import dojo  from '../../../public/dojo.png'
import Link from 'next/link'

export default function Projects() {
  return (
    <div>

    <section id="projects" className="projects section light-background">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>projects</h2>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container">

      <Swiper
          slidesPerView={1}
          spaceBetween={16}
          centeredSlides
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.3 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="!pb-14"
        >
          {/* Project 1 */}
          <SwiperSlide key="1" className="p-4">
<Link href="https://my-reactapp-react.vercel.app">
            <div className="bg backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <Image src={dojo} alt="dojo"></Image>
              <h3 className="text-2xl font-bold mb-3 text2">
                DojoK Helpdesk
              </h3>
            </div>
</Link>
          </SwiperSlide>

          {/* Signa */}
          <SwiperSlide key="2" className="p-4">
<Link href="https://workout-buddy-ebon.vercel.app">
            <div className="bg backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <Image src={buddy} alt="buddy"></Image>
              <h3 className="text-2xl font-bold mb-3 text2">
                Workout Buddy
              </h3>
            </div>
<\Link>
          </SwiperSlide>

          {/* Signa */}
          <SwiperSlide key="3" className="p-4">
<Link href="https://dojo-k-helpdesk.vercel.app">
            <div className="bg backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <Image src={blog} alt="blog"></Image>
              <h3 className="text-2xl font-bold mb-3 text2">
                K-Blog
              </h3>
             
            </div>
</Link>
          </SwiperSlide>

          {/* Signa */}
          <SwiperSlide key="4" className="p-4">
<Link href="https://foodal-kaf.vercel.app">
            <div className="bg backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <Image src={food} alt="food"></Image>
              <h3 className="text-2xl font-bold mb-3 text2">
                Food Al-Kaf
              </h3>
            
            </div>
</Link>
          </SwiperSlide>
        </Swiper>

      </div>

    </section>
    {/* <!-- /projects Section --> */}
    
    </div>
  );
}
