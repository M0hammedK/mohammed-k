"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  return (
    <div className="bg-gray-600 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
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
          <SwiperSlide key="0" className="p-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3 text-gray-100">
                project1
              </h3>
              <p className="text-gray-300">bla bla bla</p>
            </div>
          </SwiperSlide>
          {/* Project 3 */}
          <SwiperSlide key="1" className="p-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3 text-gray-100">
                Project 1
              </h3>
              <p className="text-gray-300">Description for project 3.</p>
            </div>
          </SwiperSlide>

          {/* Signa */}
          <SwiperSlide key="2" className="p-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3 text-gray-100">
                Project 2
              </h3>
              <p className="text-gray-300">
                We help clients solve our CUS SDN!
              </p>
            </div>
          </SwiperSlide>

          {/* Signa */}
          <SwiperSlide key="3" className="p-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3 text-gray-100">
                Project 3
              </h3>
              <p className="text-gray-300">
                We help clients solve our CUS SDN!
              </p>
            </div>
          </SwiperSlide>

          {/* Signa */}
          <SwiperSlide key="4" className="p-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3 text-gray-100">
                Project 4
              </h3>
              <p className="text-gray-300">
                We help clients solve our CUS SDN!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
