"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="bg4 card py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text">My Projects</h2>
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
            <div className="bg backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <Image src={'/dojo.png'} width={400} height={400} alt="dojo"></Image>
              <h3 className="text-2xl font-bold mb-3 text2">
                DojoK Helpdesk
              </h3>
            </div>
          </SwiperSlide>

          {/* Signa */}
          <SwiperSlide key="2" className="p-4">
            <div className="bg backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <Image src={'/buddy.png'} width={400} height={400} alt="buddy"></Image>
              <h3 className="text-2xl font-bold mb-3 text2">
                Workout Buddy
              </h3>
            </div>
          </SwiperSlide>

          {/* Signa */}
          <SwiperSlide key="3" className="p-4">
            <div className="bg backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <Image src={'/blog.png'} width={400} height={400} alt="blog"></Image>
              <h3 className="text-2xl font-bold mb-3 text2">
                K-Blog
              </h3>
             
            </div>
          </SwiperSlide>

          {/* Signa */}
          <SwiperSlide key="4" className="p-4">
            <div className="bg backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <Image src={'/food.png'} width={400} height={400} alt="food"></Image>
              <h3 className="text-2xl font-bold mb-3 text2">
                Food Al-Kaf
              </h3>
            
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
