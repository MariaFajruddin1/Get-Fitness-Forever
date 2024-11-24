import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import Image from "next/image";
import Symbol from "../../../../public/images/Symbol.png";
import JL from "/public/images/cl1.jpg";
import AS from "/public/images/FT.jpg";
import SA from "/public/images/YM.jpg";
import CEO from "/public/images/CEO.jpg";

const slides = [
  {
    name: "James Lives",
    role: "Personal Trainer",
    image: JL,
  },
  {
    name: "Alex Snax",
    role: "Fitness Trainer",
    image: AS,
  },
  {
    name: "Stive Alex",
    role: "Yoga Mentor",
    image: SA,
  },
  {
    name: "James Lives",
    role: "CEO",
    image: CEO,
  },
];

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide: any, index: any) => (
          <SwiperSlide key={index}>
            <div className="text-center mx-auto mt-10">
              <Image
                src={Symbol}
                alt="symbol"
                className="w-14 mx-auto mt-16 "
              />
              <p className="text:lg md:text-xl mx-auto lg:w-[90%] md:w-[80%] leading-8 text-center mt-10 ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable.
              </p>
            </div>
            <div className="text-center text-xl mx-auto mt-10 uppercase mb-[135px]">
              <p>{slide.name}</p>
              <p className="text-green text-xl">{slide.role}</p>
              <Image
                src={slide.image}
                alt="img"
                className="mt-5 text-center mx-auto rounded-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
