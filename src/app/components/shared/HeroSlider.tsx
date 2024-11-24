"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
// import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Elipse from "/public/images/ellipse1.png";
import Hero from "/public/images/hero-img.png";
import Gym from "/public/images/gym.jpg";
import Hero1 from "/public/images/crossfit.png";
import Hero2 from "/public/images/workout.png";
import Hero3 from "/public/images/equipments.png";
const Slider = () => {
  return (
    <>
      <Swiper pagination={true}>
        <SwiperSlide>
        <div className="flex justify-center align-middle">
            <Image src={Hero1} alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center align-middle">
            <Image src={Hero2} alt="img" />
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center align-middle">
            <Image src={Hero3} alt="img" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
