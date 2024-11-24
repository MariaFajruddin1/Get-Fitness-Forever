"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import React from "react";
import HeroSlider from "../shared/HeroSlider";
import Image from "next/image";
import BG from "/public/images/bg.png";
import Hero01 from "../../../../public/images/Hero01.png";
import Hero02 from "../../../../public/images/Hero02.png";

import hero001 from '../../../../public/hero001.png'
import hero002 from '../../../../public/hero002.png'
import hero003 from '../../../../public/hero003.png'

const Hero = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        // modules={[Pagination]}
        className="mySwiper bg-[url('/images/bg.png')] h-auto py-10"
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div>
            <div className="h-screen flex justify-center gap-10 items-center pt-28">
              <div className="align-start">
                <p className="text-white text-2xl">
                  <span className="text-[#c1e502]">|</span> ARE YOU READY TO
                </p>
                <h1 className="text-7xl font-semibold text-white">
                  <span className="text-[#c1e502]">GET FIT</span>, STRONG
                  <br />& MOTIVATED!
                </h1>
              </div>
              <Image alt="equip" height={450} width={450} src={hero002} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="h-screen flex items-center">
              <Image
                alt="equip"
                height={900}
                width={900}
                src={hero001}
                className="mt-32"
              />
              <div className="">
                <h1 className="text-9xl font-semibold text-white">
                  SHAPE{" "}
                  <span className="text-[#c1e502] text-7xl">
                    YOUR
                  </span>
                  {' '}BODY
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="h-screen flex  justify-center items-center pt-24">
              <div className="align-start">
                <h1 className="text-9xl font-semibold text-white">
                  <span className="text-[#c1e502]">WORKOUT</span>
                  <br />
                  WITH ME
                </h1>
              </div>
              <Image alt="equip" height={600} width={600} src={hero003} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
