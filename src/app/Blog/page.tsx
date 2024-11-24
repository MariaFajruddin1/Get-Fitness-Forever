import React from "react";
import Image from "next/image";
import BlogCp from "../../../public/blog.jpeg";
import Blg2 from "../../../public/blog2.jpg";
// import Blog201 from "../../../public/blog201.webp";
import Link1 from "../../../public/Link → 1.jpg.png";
import Link2 from "../../../public/Link → 2.jpg.png";
import One from "../../../public/1.jpg.png";
import Two from "../../../public/2.jpg.png";
import Link3 from "../../../public/Link → 2.jpg.png";
import CoverP from "../../../public/BlogCp.jpg";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa6";
import Wrapper from "../components/shared/Wrapper";
import { GiHouse } from "react-icons/gi";

const Blog2 = () => {
  return (
    <>
      {/* image section  */}
      <div className="">
        <div className="relative">
          <Image
            src={CoverP}
            alt="cover photo"
            className="mx-auto md:h-[500px] h-[189px] md:w-full w-full"
          />
          <h1 className="absolute md:top-1/2 top-28 md:left-40 left-8 md:text-5xl text-sm font-serif font-semibold tracking-[1] md:leading-[60px] uppercase text-white ">
            Common Workout Mistakes To Avoid
          </h1>
        </div>
      </div>
      <Wrapper>
        <div className=" md:mt-28 mt-16 mb-40 justify-center relative md:flex md:px-24 ">
          {/* left side  */}
          <div className="md:w-[1060px] w-full md:px-8 px-3">
            <Image
              src={Blg2}
              alt="cp"
              className="mx-auto md:h-[478px] h-[200px] md:w-full w-full"
            />
            <div className="bg-black w-36 pl-2 h-10 flex items-center justify-center absolute md:top-[450px] top-[180px] md:left-[190px] left-[40px] ">
              <p className="font-serif font-medium tracking-[1] leading-[32px] uppercase text-white w-5/6 mt-1 mb-0 absolute">
                GYMNASTICS
              </p>
            </div>
            <div className="bg-gray pt-16 md:px-6 px-3">
              <p className="flex gap-8 text-text-gray md:font-bold md:text-base text-sm font-serif leading-[32px]">
                SEPTEMBER 19, 2022{" "}
                <span>
                  <li>0 COMMENTS</li>
                </span>
              </p>
              <p className="mt-6 text-text-gray  font-serif leading-[32px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text
              </p>
              <h4 className="text-3xl font-serif font-semibold tracking-[1] leading-[40px] uppercase text-[#1d1d1d]  mt-8">
                WHY DO WE FITSENSE.
              </h4>
              <p className="mt-6 text-text-gray font-serif leading-[32px]">
                fitsense storage system is designed to deliver a power output of
                10 MW for the operational life of the project. Wärtsilä also
                providing a long-term service agreement, including maintenance,
                spare parts, repairs, remote monitoring and performance
                guarantees.The order was placed in November 2020. This contract
                in Mexico marks an expansion of Wärtsilä’s smart storage
                technology to the region.
              </p>
              <div className="text-xl font-bold px-8 bg-white border-l-green mt-16 border-4 border-gray py-10">
                <p className="font-thin text-base text-text-gray font-serif leading-[32px]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <p className="text-green font-medium mt-3 font-serif leading-[32px]">
                  – Michal Smart
                </p>
              </div>
              <p className="my-12 pr-10 text-text-gray font-serif leading-[32px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4">
                <Image
                  // width={350}
                  src={One}
                  alt="cp"
                  className=" md:h-[304px] h-[220px] w-[276px] md:w-[390px] relative"
                />
                <Image
                  // width={350}
                  src={Two}
                  alt="cp"
                  className=" md:h-[304px] h-[220px] w-[276px] md:w-[390px] relative"
                />
              </div>
              <h4 className="text-3xl font-serif font-semibold tracking-[1] leading-[40px] mt-8">
                WHERE CAN I GET SOME?
              </h4>
              <p className="text-text-gray mt-4 font-serif leading-[32px]">
                The fitsense storage system is designed to deliver a power
                output of 10 MW for the operational life of the project.
                Wärtsilä also providing a long-term service agreement, including
                maintenance, spare parts, repairs, remote monitoring and
                performance guarantees.The order was placed in November 2020.
                This contract in Mexico marks an expansion of Wärtsilä’s smart
                storage technology to the region.
              </p>
              <p className="text-text-gray mt-8 pb-8 font-serif leading-[32px] ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text
              </p>
            </div>
            <div className="bg-white mt-24">
              <h4 className="text-3xl font-serif font-semibold tracking-[1] leading-[38px] uppercase">
                WRITE A REPLY OR COMMENT
              </h4>
              <p className="mt-3 text-text-gray font-serif leading-[26px] text-lg">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-8">
                <input
                  type="text"
                  id="myInput"
                  placeholder="* Enter Name"
                  className="font-serif bg-gray h-12 px-5 hover:border-green border outline-none border-gray hover:duration-700"
                />

                <input
                  type="text"
                  id="myInput"
                  placeholder="* Enter Email"
                  className="font-serif bg-gray h-12 px-5 hover:border-green border outline-none border-gray hover:duration-700"
                />

                <input
                  type="text"
                  id="myInput"
                  placeholder="* Enter URL"
                  className="font-serif bg-gray h-12 px-5 hover:border-green border outline-none border-gray hover:duration-700"
                />
              </div>
              <div className="mt-7 relative w-full ">
                <input
                  type="text"
                  id="commentInput"
                  placeholder="Enter Your Comment"
                  className="font-serif bg-gray w-full px-7 hover:border-green border outline-none border-gray py-2 h-56 hover:duration-700"
                />
              </div>
              <button className="bg-green text-black text-lg w-52 h-14 mt-10 hover:text-white hover:bg-black font-serif font-medium tracking-[1] leading-[32px] uppercase hover:duration-700">
                POST COMMENT
              </button>
            </div>
          </div>

          {/* ////////////////////// */}
          {/* right side  */}
          <div className="md:w-[570px] w-full md:pr-10 px-3 mt-14 md:mt-0 md:px-0 bg-white  ">
            <div className="bg-[#eeeeee] relative flex flex-row justify-end w-full items-start p-5 px-12">
              <div className="flex mx-[-12px] my-2">
                <div className="w-65 bg-white relative">
                  <input
                    type="text"
                    placeholder="Search ..."
                    className="font-serif text-[#757575] w-full h-full outline-none pl-6 border hover:border-green border-solid border-white "
                  />
                </div>
                <div className="w-12 bg-black h-12 flex items-center justify-center">
                  <AiOutlineSearch color="white" fontSize="1.4em" />
                </div>
              </div>
            </div>

            <div className="p-8 mt-7 bg-gray">
              <h4 className="font-bold tracking-[1] leading-[32px] uppercase text-[#1d1d1d] text-2xl font-serif">
                CATEGORIES
              </h4>
              <div className="flex items-center mt-8">
                <p className="ml-2 text-xl text-text-gray font-serif hover:text-green hover:duration-700">
                  Acrobatics
                </p>
              </div>
              <div className="flex items-center mt-8">
              <p className="ml-2 text-xl text-text-gray font-serif hover:text-green hover:duration-700">
                  Boot Camps
                </p>
              </div>
              <div className="flex items-center mt-8">
              <p className="ml-2 text-xl text-text-gray font-serif hover:text-green hover:duration-700">
                  Training Gyms
                </p>
              </div>
              <div className="flex items-center mt-8">
              <p className="ml-2 text-xl text-text-gray font-serif hover:text-green hover:duration-700">
                  Crossfit
                </p>
              </div>
              <div className="flex items-center mt-8">
              <p className="ml-2 text-xl text-text-gray font-serif hover:text-green hover:duration-700">
                  Gymnastics
                </p>
              </div>
              <div className="flex items-center mt-8">
              <p className="ml-2 text-xl text-text-gray font-serif hover:text-green hover:duration-700">Yoga</p>
              </div>
            </div>
            <div className="py-8 md:pl-8 pl-3 pr-3 mt-7 bg-gray">
              <h4 className="text-2xl font-serif font-bold tracking-[1] leading-[32px] uppercase text-[#1d1d1d] w-full">
                RECENT POST
              </h4>
              <div className="pr-9">
                <div className="flex justify-start mt-8">
                  <Image
                    src={Link1}
                    alt="cp"
                    className="md:h-[90px] md:w-[90px] h-[120px] w-[110px] "
                  />
                  <div className="pl-5 ">
                    <p className="font-serif font-bold tracking-[1] leading-[24px] uppercase text-[#1d1d1d] hover:text-green hover:duration-700">
                      WORKOUT WITH GET SIX-PACK ABS ‘MAGIC MIKE
                    </p>
                    <p className="font-thin mt-2 text-text-gray text-sm font-serif leading-[22px]">
                      October 04, 2022
                    </p>
                  </div>
                </div>

                <div className="flex justify-start mt-8">
                  <Image
                    src={Link2}
                    alt="cp"
                    className="md:h-[90px] md:w-[90px] h-[120px] w-[110px] "
                  />
                  <div className="pl-5 ">
                    <p className="font-serif font-bold tracking-[1] leading-[24px] uppercase text-[#1d1d1d] hover:text-green hover:duration-700">
                      WORKOUT WITH GET SIX-PACK ABS ‘MAGIC MIKE
                    </p>
                    <p className="font-thin mt-2 text-text-gray text-sm font-serif leading-[22px]">
                      October 04, 2022
                    </p>
                  </div>
                </div>

                <div className="flex justify-start mt-8">
                  <Image
                    src={Link3}
                    alt="cp"
                    className="md:h-[90px] md:w-[90px] h-[120px] w-[110px] "
                  />
                  <div className="pl-5 ">
                    <p className="font-serif font-bold tracking-[1] leading-[24px] uppercase text-[#1d1d1d] hover:text-green hover:duration-700">
                      WORKOUT WITH GET SIX-PACK ABS ‘MAGIC MIKE
                    </p>
                    <p className="font-thin mt-2 text-text-gray text-sm font-serif leading-[22px]">
                      October 04, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////// */}
            <div className="p-8 mt-7 bg-gray">
              <h4 className="text-2xl font-serif font-bold tracking-[1] leading-[32px] uppercase text-[#1d1d1d] w-min">
                META
              </h4>

              <div className="flex items-center mt-8">
                <p className="ml-2  font-serif leading-[32px] text-black/60 w-full text-text-gray text-xl hover:text-green hover:duration-700">
                  Log In
                </p>
              </div>
              <div className="flex items-center mt-8">
              <p className="ml-2  font-serif leading-[32px] text-black/60 w-full text-text-gray text-xl hover:text-green hover:duration-700">
                  Entries Feed
                </p>
              </div>
              <div className="flex items-center mt-8">
              <p className="ml-2  font-serif leading-[32px] text-black/60 w-full text-text-gray text-xl hover:text-green hover:duration-700">
                  Comments Feed
                </p>
              </div>
              <div className="flex items-center mt-8">
              <p className="ml-2  font-serif leading-[32px] text-black/60 w-full text-text-gray text-xl hover:text-green hover:duration-700">
                  WrodPress.org
                </p>
              </div>
            </div>
            {/* //////////////////// */}
            <div className="md:p-8 p-5 mt-7 bg-gray">
              <h4 className="text-2xl font-serif font-bold tracking-[1] leading-[32px] uppercase text-[#1d1d1d]">
                TAGS
              </h4>
              <div className="grid md:grid-cols-4 grid-cols-3 mt-4 gap-5">
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-serif leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border hover:duration-700">
                  Fitness
                </button>
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-serif leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border hover:duration-700">
                  Gym
                </button>
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-serif leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border hover:duration-700">
                  Sport
                </button>
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-serif leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border hover:duration-700">
                  Success
                </button>
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-serif leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border hover:duration-700">
                  Wild
                </button>
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-serif leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border hover:duration-700">
                  Yoga
                </button>
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-serif leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border hover:duration-700">
                  Fitness
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Blog2;
