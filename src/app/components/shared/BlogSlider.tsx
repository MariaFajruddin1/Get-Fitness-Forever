"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
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
import { FaStar } from "react-icons/fa6";

export default function App() {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 50,
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
          <div className="-mb-8 sm:mb-[135px] sm:uppercase mt-10 md:mt-20">
            <Image src={BLOG1} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Acrobatics
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
              workout with Get six-pack
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
              abs ‘Magic Mike’
            </p>
            <div className="flex items-center gap-5 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={BLOG2} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Gymnastics
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
              Workout Condition For All
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
              Around Fitness
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={BLOG3} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">Yoga</p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
              Meet our professional
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
              Gymster Trainer’
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={BLOG4} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Boot camps
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
              Condition for all around
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
              fitness classes
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={BLOG5} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Crossfit
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
              Our organized Training
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
              center & workshop
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={BLOG6} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Training Gyms
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
              Meet our fitness
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
              ambassador grace
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={BLOG7} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Gymastics
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
              Common workout mistakes
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
              to avoid
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={BLOG8} alt="blog" />
            <div>
              <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
                Crossfit
              </p>
              <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
                Why you should go to yoga
              </p>
              <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
                then gym
              </p>
              <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
                <p>October 19, 2022</p>
                <div className="flex gap-2">
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={BLOG6} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Training Gyms
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
              Meet our fitness
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
              ambassador grace
            </p>
            <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={BLOG7} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Gymastics
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
              Common workout mistakes
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
              to avoid
            </p>
            <div className="flex items-center gap-5 text-[14px] lg:leading-10">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="sm:uppercase mt-10 md:mt-20">
            <Image src={BLOG8} alt="blog" />
            <div>
              <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
                Crossfit
              </p>
              <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10">
                Why you should go to yoga
              </p>
              <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6">
                then gym
              </p>
              <div className="flex items-center gap-5 lg:gap-1 text-[14px] lg:leading-10">
                <p>October 19, 2022</p>
                <div className="flex gap-2">
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
