"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import BLOG1 from "/public/images/blog1.jpg";
import BLOG2 from "/public/images/blog2.jpg";
import BLOG3 from "/public/images/blog3.jpg";
import BLOG4 from "/public/images/blog4.jpg";
import BLOG5 from "/public/images/blog5.jpg";
import BLOG6 from "/public/images/blog6.jpg";
import BLOG7 from "/public/images/blog7.jpg";
import BLOG8 from "/public/images/blog8.jpg";

export default function App() {

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <>
      <Swiper
        // slidesPerView={3}
        // spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <div className="-mb-8 sm:mb-[135px] sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG1} alt="blog" width={500} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG2} alt="blog" width={500} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG3} alt="blog" width={500} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG4} alt="blog" width={500} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG5} alt="blog" width={500} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG6} alt="blog" width={500} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG7} alt="blog" width={500} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG8} alt="blog" width={500} height={500} />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
