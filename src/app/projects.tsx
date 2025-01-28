"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Projects() {
  return (
    <div className="bg-gray-600 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <Swiper
          slidesPerView={1.5} // Show partial slides
          centeredSlides={true}
          spaceBetween={30}
          loop={true} // Disable loop for proper alignment
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1.8,
            },
            1024: {
              slidesPerView: 2.3,
            },
          }}
        >
          {/* Project 3 */}
          <SwiperSlide>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center mx-2 h-[300px]">
              <h3 className="text-2xl font-bold mb-4">Project 1</h3>
              <p className="text-gray-600">Description for project 3.</p>
            </div>
          </SwiperSlide>

          {/* Signa */}
          <SwiperSlide>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center mx-2 h-[300px]">
              <h3 className="text-2xl font-bold mb-4">Project 2</h3>
              <p className="text-gray-600">We help clients solve our CUS SDN!</p>
            </div>
          </SwiperSlide>
          
          {/* Signa */}
          <SwiperSlide>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center mx-2 h-[300px]">
              <h3 className="text-2xl font-bold mb-4">Project 3</h3>
              <p className="text-gray-600">We help clients solve our CUS SDN!</p>
            </div>
          </SwiperSlide>
          
          {/* Signa */}
          <SwiperSlide>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center mx-2 h-[300px]">
              <h3 className="text-2xl font-bold mb-4">Project 4</h3>
              <p className="text-gray-600">We help clients solve our CUS SDN!</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}