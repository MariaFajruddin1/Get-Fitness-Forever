"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Pro01 from "../../../public/Pro01.png";
import Pro02 from "../../../public/Pro02.png";
import Pro03 from "../../../public/Pro03.png";
import boy00 from "../../../public/BOY00.png";
import { AiOutlineStar, AiFillStar, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsFillHandbagFill, BsPinterest } from "react-icons/bs";

export default function Products() {
  const [quantity, setQuantity] = useState(1);
  const [sources, setsources] = useState("description");
  const [imageSources, setImageSources] = useState(Pro01);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }
  function handleDecrement() {
    setQuantity(quantity - 1);
  }

  return (
    <>
      <div className="">
        {/* STEP 01 */}
        <div className="md:flex md:justify-between text-center border border-[#dbdbdb] py-5 px-2">
          <h1 className="text-2xl font-bold">Treadmill Apollo</h1>
          <div className="flex gap-1 text-sm py-1 justify-center">
            <Link href="/" className="hover:text-[#c1e502]">
              Home
            </Link>
            /
            <Link href="/" className="hover:text-[#c1e502]">
              Store
            </Link>
            /
            <Link href="" className="hover:text-[#c1e502]">
              Treadmill Apollo
            </Link>
          </div>
        </div>

        {/* STEP 02 MAIN */}
        <div className="lg:flex xl:px-40 lg:px-20 px-5 mt-20 justify-between gap-2">
          {/* IMAGE SECTION */}
          <div>
            {imageSources === Pro01 && (
              <div>
                <Image
                  className="bg-gray/80 lg:w-[500px] w-full lg:h-[500px] h-full"
                  src={Pro01}
                  alt=""
                  width={500}
                  height={500}
                ></Image>
              </div>
            )}
            {imageSources === Pro02 && (
              <div>
                <Image
                  className="bg-gray/80 lg:w-[500px] w-full lg:h-[500px] h-full"
                  src={Pro02}
                  alt=""
                  width={500}
                  height={500}
                ></Image>
              </div>
            )}
            {imageSources === Pro03 && (
              <div>
                <Image
                  className="bg-gray/80 lg:w-[500px] w-full lg:h-[500px] h-full"
                  src={Pro03}
                  alt=""
                  width={500}
                  height={500}
                ></Image>
              </div>
            )}
            <div className="flex gap-5 cursor-pointer mt-3">
              <Image
                className={
                  imageSources === Pro01
                    ? "bg-black/30"
                    : "bg-gray/80 hover:bg-black/10"
                }
                onClick={() => setImageSources(Pro01)}
                src={Pro01}
                alt=""
                width={100}
                height={100}
              ></Image>
              <Image
                className={
                  imageSources === Pro02
                    ? "bg-black/30"
                    : "bg-gray/80 hover:bg-black/10"
                }
                onClick={() => setImageSources(Pro02)}
                src={Pro02}
                alt=""
                width={100}
                height={100}
              ></Image>
              <Image
                className={
                  imageSources === Pro03
                    ? "bg-black/30"
                    : "bg-gray/80 hover:bg-black/10"
                }
                onClick={() => setImageSources(Pro03)}
                src={Pro03}
                alt=""
                width={100}
                height={100}
              ></Image>
            </div>
          </div>
          {/* TEXT SECTION */}
          <div className="lg:w-[650px]">
            <h1 className="text-3xl font-bold xl:mt-0 mt-3">
              Treadmill Apollo
            </h1>
            {/* STARS */}
            <div className="flex pt-5">
              <AiFillStar color="#FFD600" size="22px" />
              <AiFillStar color="#FFD600" size="22px" />
              <AiFillStar color="#FFD600" size="22px" />
              <AiFillStar color="#FFD600" size="22px" />
              <AiOutlineStar color="#D2D2D2" size="22px" />
            </div>
            <p className="text-xl font-semibold text-[#737070] pt-5">£99.00</p>
            <p className="pt-10 text-black/70 text-sm">
              Nullam ut hendrerit nibh. Morbi at ante in est auctor fermentum.
              Nunc sodales porta malesuada. Mauris non sodales eros. Aenean sed
              commodo nisl. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Maecenas sit amet
              sollicitudin augue, rutrum luctus purus. Maecenas dapibus lacus ut
              tincidunt tincidunt. Suspendisse potenti. Proin ut lectus ante.
              Duis odio massa, aliquet at purus non, mollis pulvinar velit.
            </p>
            {/* DROPDOWN FOR COLORS */}
            <div className="flex gap-20 mt-10">
              <p className="text-xl text-black/70 font-semibold pt-1.5">
                Color
              </p>
              <div className="relative border py-1 bg-white shadow-lg w-32">
                <select className="appearance-none w-full py-1 px-2 bg-white">
                  <option value="">Color</option>
                  <option value="1">Black</option>
                  <option value="2">white</option>
                </select>
                <div className="pointer-events-none py-1 absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-[#cc1818] font-semibold pt-5">IN STOCK</p>

            <div className="flex md:gap-20 gap-2 mt-5">
              {/* INCREASE DECREASE NUMBER FOR QUANTITY */}
              <div className="flex border w-auto h-10">
                <button
                  onClick={() => handleDecrement()}
                  disabled={quantity === 1}
                  className={`px-3 py-1 text-center bg-black/20 hover:bg-black/30`}
                >
                  -
                </button>
                <div className="px-3 py-1 text-center">{quantity}</div>
                <button
                  onClick={() => handleIncrement()}
                  className={`px-3 py-1 text-center bg-black/20 hover:bg-black/30`}
                >
                  +
                </button>
              </div>
              {/* ADD TO CARD BUTTON */}
              <div className="bg-[#c1e502] h-10 hover:bg-black hover:text-white px-7 flex gap-2 duration-500 transform">
                <button className="text-sm">ADD TO CARD </button>
                <div className="pt-3.5">
                  <BsFillHandbagFill size={15} />
                </div>
              </div>
            </div>

            {/* FULL DETAIL */}
            <div className="pb-5">
              <div className="flex gap-20 text-sm pt-5">
                <p className="w-24">Brand</p>
                <p className="text-sm text-black/70">APOLLO</p>
              </div>
              <div className="flex gap-20 text-sm pt-2">
                <p className="w-24">SKU</p>
                <p className="text-sm text-black/70">131812905_PK-1291833950</p>
              </div>
              <div className="flex gap-20 text-sm pt-2">
                <p className="w-24">Model</p>
                <p className="text-sm text-black/70">AIR-02i</p>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex pt-5 sm:gap-10 gap-20 border-t border-black/30">
              <div className="sm:flex hidden hover:text-[#c1e502] font-semibold">
                FACEBOOK
              </div>
              <div className="sm:hidden flex hover:text-[#c1e502]">
                <BsFacebook size={20} />
              </div>
              <div className="sm:flex hidden hover:text-[#c1e502] font-semibold">
                TWITTER
              </div>
              <div className="sm:hidden flex hover:text-[#c1e502]">
                <AiFillTwitterCircle size={20} />
              </div>
              <div className="sm:flex hidden hover:text-[#c1e502] font-semibold">
                PINTEREST
              </div>
              <div className="sm:hidden flex hover:text-[#c1e502]">
                <BsPinterest size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* STEP 03 */}
        <div className="mt-28 mb-10 xl:px-40 lg:px-20 px-5">
          <div className="sm:flex gap-10 justify-center text-center text-lg font-semibold border-b border-black/30 cursor-pointer">
            <p
              className={
                sources === "description"
                  ? "border-b-2 lg:py-0 py-2"
                  : "hover:border-b-2 lg:py-0 py-2"
              }
              onClick={() => setsources("description")}
            >
              DESCRIPTION
            </p>
            <p
              className={
                sources === "additionalInformation"
                  ? "border-b-2 "
                  : "hover:border-b-2 lg:py-0 py-2"
              }
              onClick={() => setsources("additionalInformation")}
            >
              ADDITIONAL INFORMATION
            </p>
            <p
              className={
                sources === "reviews"
                  ? "border-b-2 lg:py-0 py-2"
                  : "hover:border-b-2 lg:py-0 py-2"
              }
              onClick={() => setsources("reviews")}
            >
              REVIEWS (1)
            </p>
          </div>

          {/* DESCRIPTION */}
          {sources === "description" && (
            <div className="text-sm pt-10 text-black/80 list-disc list-inside">
              <p>
                <span className="font-semibold">01.</span> Motorized:Air 02i
                treadmill is a motorized treadmill having horse power of 1.5HP.
                Treadmill motor produce minimum noise and energy saving.
              </p>
              <p className="pt-1.5">
                <span className="font-semibold">02.</span> Speed Range:Air 02i
                treadmill speed range is 1-13 km/h.
              </p>
              <p className="pt-1.5">
                <span className="font-semibold">03.</span> Weight Capacity:The
                weighting capacity of the treadmill is 90kg and it also provide
                6 pieces of elastic cushion to give comfortable footing.
              </p>
              <p className="pt-1.5">
                <span className="font-semibold">04.</span> Run Time: The
                continuous running time of this treadmill is 45mins.
              </p>
              <p className="pt-1.5">
                <span className="font-semibold">05.</span> Running
                Belt:Treadmill provide large and wide running surface which is
                enough for a normal running and walking its belt surface area is
                48.4 X 16.3 Inches.
              </p>
              <p className="pt-1.5">
                <span className="font-semibold">06.</span> LED:A screen is
                fitted on it which shows all functions happening while running
                on a treadmill. There are 36 per-set programs and 3 user manual
                programs.
              </p>
              <p className="pt-1.5">
                <span className="font-semibold">07.</span> Handle Pulse:The
                feature of handle pulse system is also installed in this home
                use treadmill which update you about your heart pulse rate time
                to time and BMI(body mass index) function is also included
              </p>
              <p className="pt-1.5">
                <span className="font-semibold">08.</span> Fold-able:Treadmill
                can be foldable so you can fold your treadmill after your
                running and it occupy least storage and wheels for easy
                transportation to place anywhere you want.
              </p>
            </div>
          )}

          {/* ADDITIONAL INFORMATION */}
          {sources === "additionalInformation" && (
            <div className="mt-10 border border-black/30 text-black/70">
              <div className="flex border-b border-black/30 h-10 px-3 sm:text-md text-sm">
                <p className="sm:w-40 w-20 border-r border-black/30 py-2">
                  Color
                </p>
                <p className="pl-2 py-2">Black</p>
              </div>
              <div className="flex border-b border-black/30 h-10 px-3 sm:text-md text-sm">
                <p className="sm:w-40 w-20 border-r border-black/30 py-2">
                  Brand
                </p>
                <p className="pl-2 py-2">APOLLO</p>
              </div>
              <div className="flex border-b border-black/30 h-10 px-3 sm:text-md text-sm">
                <p className="sm:w-40 w-20 border-r border-black/30 py-2">
                  SKU
                </p>
                <p className="pl-2 py-2">131812905_PK-1291833950</p>
              </div>
              <div className="flex h-10 px-3 sm:text-md text-sm">
                <p className="sm:w-40 w-20 border-r border-black/30 py-2">
                  Model
                </p>
                <p className="pl-2 py-2">AIR-02i</p>
              </div>
            </div>
          )}

          {/* REVIEWS */}
          {sources === "reviews" && (
            <div className="mt-10">
              <h1 className="text-lg font-semibold">
                1 REVIEW FOR Treadmill Apollo
              </h1>
              <div className="sm:flex mt-10 sm:justify-between justify-center border-b border-black/30 pb-10">
                <div className="sm:flex gap-10">
                  <Image
                    className="mx-auto border-2 border-black rounded-full"
                    src={boy00}
                    alt=""
                    width={100}
                    height={100}
                  ></Image>
                  <div>
                    <h4 className="font-semibold text-lg">John Robert</h4>
                    <p className="text-sm text-black/70 pt-3">
                      Excellent Quality for a Good price.
                    </p>
                    <p className="text-black/70 pt-3">Rated 4 out of 5</p>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <p className="text-sm">MAY 27, 2017</p>
                  <div className="flex">
                    <AiFillStar color="#FFD600" size="15px" />
                    <AiFillStar color="#FFD600" size="15px" />
                    <AiFillStar color="#FFD600" size="15px" />
                    <AiFillStar color="#FFD600" size="15px" />
                    <AiOutlineStar color="#D2D2D2" size="15px" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg pt-5">ADD A REVIEW</h4>
                <p className="text-sm">
                  Your email address will not be published. Required fields are
                  marked <span className="text-[#c1e502]">*</span>
                </p>
                <p className="text-sm pt-5">
                  YOUR RATING <span className="text-[#c1e502]">*</span>
                </p>

                {/* RATING */}
                <div className="container">
                  <div className="feedback">
                    <div className="rating">
                      <input type="radio" name="rating" id="rating-5"></input>
                      <label htmlFor="rating-5"></label>
                      <input type="radio" name="rating" id="rating-4"></input>
                      <label htmlFor="rating-4"></label>
                      <input type="radio" name="rating" id="rating-3"></input>
                      <label htmlFor="rating-3"></label>
                      <input type="radio" name="rating" id="rating-2"></input>
                      <label htmlFor="rating-2"></label>
                      <input type="radio" name="rating" id="rating-1"></input>
                      <label htmlFor="rating-1"></label>
                      <div className="emoji-wrapper">
                        <div className="emoji">
                          <svg
                            className="rating-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                            <path
                              d="M512 256c0 141.44-114.64 256-256 256-80.48 0-152.32-37.12-199.28-95.28 43.92 35.52 99.84 56.72 160.72 56.72 141.36 0 256-114.56 256-256 0-60.88-21.2-116.8-56.72-160.72C474.8 103.68 512 175.52 512 256z"
                              fill="#f4c534"
                            />
                            <ellipse
                              transform="scale(-1) rotate(31.21 715.433 -595.455)"
                              cx="166.318"
                              cy="199.829"
                              rx="56.146"
                              ry="56.13"
                              fill="#fff"
                            />
                            <ellipse
                              transform="rotate(-148.804 180.87 175.82)"
                              cx="180.871"
                              cy="175.822"
                              rx="28.048"
                              ry="28.08"
                              fill="#3e4347"
                            />
                            <ellipse
                              transform="rotate(-113.778 194.434 165.995)"
                              cx="194.433"
                              cy="165.993"
                              rx="8.016"
                              ry="5.296"
                              fill="#5a5f63"
                            />
                            <ellipse
                              transform="scale(-1) rotate(31.21 715.397 -1237.664)"
                              cx="345.695"
                              cy="199.819"
                              rx="56.146"
                              ry="56.13"
                              fill="#fff"
                            />
                            <ellipse
                              transform="rotate(-148.804 360.25 175.837)"
                              cx="360.252"
                              cy="175.84"
                              rx="28.048"
                              ry="28.08"
                              fill="#3e4347"
                            />
                            <ellipse
                              transform="scale(-1) rotate(66.227 254.508 -573.138)"
                              cx="373.794"
                              cy="165.987"
                              rx="8.016"
                              ry="5.296"
                              fill="#5a5f63"
                            />
                            <path
                              d="M370.56 344.4c0 7.696-6.224 13.92-13.92 13.92H155.36c-7.616 0-13.92-6.224-13.92-13.92s6.304-13.92 13.92-13.92h201.296c7.696.016 13.904 6.224 13.904 13.92z"
                              fill="#3e4347"
                            />
                          </svg>
                          <svg
                            className="rating-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                            <path
                              d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                              fill="#f4c534"
                            />
                            <path
                              d="M328.4 428a92.8 92.8 0 0 0-145-.1 6.8 6.8 0 0 1-12-5.8 86.6 86.6 0 0 1 84.5-69 86.6 86.6 0 0 1 84.7 69.8c1.3 6.9-7.7 10.6-12.2 5.1z"
                              fill="#3e4347"
                            />
                            <path
                              d="M269.2 222.3c5.3 62.8 52 113.9 104.8 113.9 52.3 0 90.8-51.1 85.6-113.9-2-25-10.8-47.9-23.7-66.7-4.1-6.1-12.2-8-18.5-4.2a111.8 111.8 0 0 1-60.1 16.2c-22.8 0-42.1-5.6-57.8-14.8-6.8-4-15.4-1.5-18.9 5.4-9 18.2-13.2 40.3-11.4 64.1z"
                              fill="#f4c534"
                            />
                            <path
                              d="M357 189.5c25.8 0 47-7.1 63.7-18.7 10 14.6 17 32.1 18.7 51.6 4 49.6-26.1 89.7-67.5 89.7-41.6 0-78.4-40.1-82.5-89.7A95 95 0 0 1 298 174c16 9.7 35.6 15.5 59 15.5z"
                              fill="#fff"
                            />
                            <path
                              d="M396.2 246.1a38.5 38.5 0 0 1-38.7 38.6 38.5 38.5 0 0 1-38.6-38.6 38.6 38.6 0 1 1 77.3 0z"
                              fill="#3e4347"
                            />
                            <path
                              d="M380.4 241.1c-3.2 3.2-9.9 1.7-14.9-3.2-4.8-4.8-6.2-11.5-3-14.7 3.3-3.4 10-2 14.9 2.9 4.9 5 6.4 11.7 3 15z"
                              fill="#fff"
                            />
                            <path
                              d="M242.8 222.3c-5.3 62.8-52 113.9-104.8 113.9-52.3 0-90.8-51.1-85.6-113.9 2-25 10.8-47.9 23.7-66.7 4.1-6.1 12.2-8 18.5-4.2 16.2 10.1 36.2 16.2 60.1 16.2 22.8 0 42.1-5.6 57.8-14.8 6.8-4 15.4-1.5 18.9 5.4 9 18.2 13.2 40.3 11.4 64.1z"
                              fill="#f4c534"
                            />
                            <path
                              d="M155 189.5c-25.8 0-47-7.1-63.7-18.7-10 14.6-17 32.1-18.7 51.6-4 49.6 26.1 89.7 67.5 89.7 41.6 0 78.4-40.1 82.5-89.7A95 95 0 0 0 214 174c-16 9.7-35.6 15.5-59 15.5z"
                              fill="#fff"
                            />
                            <path
                              d="M115.8 246.1a38.5 38.5 0 0 0 38.7 38.6 38.5 38.5 0 0 0 38.6-38.6 38.6 38.6 0 1 0-77.3 0z"
                              fill="#3e4347"
                            />
                            <path
                              d="M131.6 241.1c3.2 3.2 9.9 1.7 14.9-3.2 4.8-4.8 6.2-11.5 3-14.7-3.3-3.4-10-2-14.9 2.9-4.9 5-6.4 11.7-3 15z"
                              fill="#fff"
                            />
                          </svg>
                          <svg
                            className="rating-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                            <path
                              d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                              fill="#f4c534"
                            />
                            <path
                              d="M336.6 403.2c-6.5 8-16 10-25.5 5.2a117.6 117.6 0 0 0-110.2 0c-9.4 4.9-19 3.3-25.6-4.6-6.5-7.7-4.7-21.1 8.4-28 45.1-24 99.5-24 144.6 0 13 7 14.8 19.7 8.3 27.4z"
                              fill="#3e4347"
                            />
                            <path
                              d="M276.6 244.3a79.3 79.3 0 1 1 158.8 0 79.5 79.5 0 1 1-158.8 0z"
                              fill="#fff"
                            />
                            <circle
                              cx="340"
                              cy="260.4"
                              r="36.2"
                              fill="#3e4347"
                            />
                            <g fill="#fff">
                              <ellipse
                                transform="rotate(-135 326.4 246.6)"
                                cx="326.4"
                                cy="246.6"
                                rx="6.5"
                                ry="10"
                              />
                              <path d="M231.9 244.3a79.3 79.3 0 1 0-158.8 0 79.5 79.5 0 1 0 158.8 0z" />
                            </g>
                            <circle
                              cx="168.5"
                              cy="260.4"
                              r="36.2"
                              fill="#3e4347"
                            />
                            <ellipse
                              transform="rotate(-135 182.1 246.7)"
                              cx="182.1"
                              cy="246.7"
                              rx="10"
                              ry="6.5"
                              fill="#fff"
                            />
                          </svg>
                          <svg
                            className="rating-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                            <path
                              d="M407.7 352.8a163.9 163.9 0 0 1-303.5 0c-2.3-5.5 1.5-12 7.5-13.2a780.8 780.8 0 0 1 288.4 0c6 1.2 9.9 7.7 7.6 13.2z"
                              fill="#3e4347"
                            />
                            <path
                              d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                              fill="#f4c534"
                            />
                            <g fill="#fff">
                              <path d="M115.3 339c18.2 29.6 75.1 32.8 143.1 32.8 67.1 0 124.2-3.2 143.2-31.6l-1.5-.6a780.6 780.6 0 0 0-284.8-.6z" />
                              <ellipse
                                cx="356.4"
                                cy="205.3"
                                rx="81.1"
                                ry="81"
                              />
                            </g>
                            <ellipse
                              cx="356.4"
                              cy="205.3"
                              rx="44.2"
                              ry="44.2"
                              fill="#3e4347"
                            />
                            <g fill="#fff">
                              <ellipse
                                transform="scale(-1) rotate(45 454 -906)"
                                cx="375.3"
                                cy="188.1"
                                rx="12"
                                ry="8.1"
                              />
                              <ellipse
                                cx="155.6"
                                cy="205.3"
                                rx="81.1"
                                ry="81"
                              />
                            </g>
                            <ellipse
                              cx="155.6"
                              cy="205.3"
                              rx="44.2"
                              ry="44.2"
                              fill="#3e4347"
                            />
                            <ellipse
                              transform="scale(-1) rotate(45 454 -421.3)"
                              cx="174.5"
                              cy="188"
                              rx="12"
                              ry="8.1"
                              fill="#fff"
                            />
                          </svg>
                          <svg
                            className="rating-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <circle cx="256" cy="256" r="256" fill="#ffd93b" />
                            <path
                              d="M512 256A256 256 0 0 1 56.7 416.7a256 256 0 0 0 360-360c58.1 47 95.3 118.8 95.3 199.3z"
                              fill="#f4c534"
                            />
                            <path
                              d="M232.3 201.3c0 49.2-74.3 94.2-74.3 94.2s-74.4-45-74.4-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                              fill="#e24b4b"
                            />
                            <path
                              d="M96.1 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2C80.2 229.8 95.6 175.2 96 173.3z"
                              fill="#d03f3f"
                            />
                            <path
                              d="M215.2 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                              fill="#fff"
                            />
                            <path
                              d="M428.4 201.3c0 49.2-74.4 94.2-74.4 94.2s-74.3-45-74.3-94.2a38 38 0 0 1 74.4-11.1 38 38 0 0 1 74.3 11.1z"
                              fill="#e24b4b"
                            />
                            <path
                              d="M292.2 173.3a37.7 37.7 0 0 0-12.4 28c0 49.2 74.3 94.2 74.3 94.2-77.8-65.7-62.4-120.3-61.9-122.2z"
                              fill="#d03f3f"
                            />
                            <path
                              d="M411.3 200c-3.6 3-9.8 1-13.8-4.1-4.2-5.2-4.6-11.5-1.2-14.1 3.6-2.8 9.7-.7 13.9 4.4 4 5.2 4.6 11.4 1.1 13.8z"
                              fill="#fff"
                            />
                            <path
                              d="M381.7 374.1c-30.2 35.9-75.3 64.4-125.7 64.4s-95.4-28.5-125.8-64.2a17.6 17.6 0 0 1 16.5-28.7 627.7 627.7 0 0 0 218.7-.1c16.2-2.7 27 16.1 16.3 28.6z"
                              fill="#3e4347"
                            />
                            <path
                              d="M256 438.5c25.7 0 50-7.5 71.7-19.5-9-33.7-40.7-43.3-62.6-31.7-29.7 15.8-62.8-4.7-75.6 34.3 20.3 10.4 42.8 17 66.5 17z"
                              fill="#e24b4b"
                            />
                          </svg>
                          <svg
                            className="rating-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <g fill="#ffd93b">
                              <circle cx="256" cy="256" r="256" />
                              <path d="M512 256A256 256 0 0 1 56.8 416.7a256 256 0 0 0 360-360c58 47 95.2 118.8 95.2 199.3z" />
                            </g>
                            <path
                              d="M512 99.4v165.1c0 11-8.9 19.9-19.7 19.9h-187c-13 0-23.5-10.5-23.5-23.5v-21.3c0-12.9-8.9-24.8-21.6-26.7-16.2-2.5-30 10-30 25.5V261c0 13-10.5 23.5-23.5 23.5h-187A19.7 19.7 0 0 1 0 264.7V99.4c0-10.9 8.8-19.7 19.7-19.7h472.6c10.8 0 19.7 8.7 19.7 19.7z"
                              fill="#e9eff4"
                            />
                            <path
                              d="M204.6 138v88.2a23 23 0 0 1-23 23H58.2a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                              fill="#45cbea"
                            />
                            <path
                              d="M476.9 138v88.2a23 23 0 0 1-23 23H330.3a23 23 0 0 1-23-23v-88.3a23 23 0 0 1 23-23h123.4a23 23 0 0 1 23 23z"
                              fill="#e84d88"
                            />
                            <g fill="#38c0dc">
                              <path d="M95.2 114.9l-60 60v15.2l75.2-75.2zM123.3 114.9L35.1 203v23.2c0 1.8.3 3.7.7 5.4l116.8-116.7h-29.3z" />
                            </g>
                            <g fill="#d23f77">
                              <path d="M373.3 114.9l-66 66V196l81.3-81.2zM401.5 114.9l-94.1 94v17.3c0 3.5.8 6.8 2.2 9.8l121.1-121.1h-29.2z" />
                            </g>
                            <path
                              d="M329.5 395.2c0 44.7-33 81-73.4 81-40.7 0-73.5-36.3-73.5-81s32.8-81 73.5-81c40.5 0 73.4 36.3 73.4 81z"
                              fill="#3e4347"
                            />
                            <path
                              d="M256 476.2a70 70 0 0 0 53.3-25.5 34.6 34.6 0 0 0-58-25 34.4 34.4 0 0 0-47.8 26 69.9 69.9 0 0 0 52.6 24.5z"
                              fill="#e24b4b"
                            />
                            <path
                              d="M290.3 434.8c-1 3.4-5.8 5.2-11 3.9s-8.4-5.1-7.4-8.7c.8-3.3 5.7-5 10.7-3.8 5.1 1.4 8.5 5.3 7.7 8.6z"
                              fill="#fff"
                              opacity=".2"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* REVIEWS FORM */}
                <form className="">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 mt-5">
                      <textarea
                        cols={10}
                        rows={5}
                        className="appearance-none block w-full bg-gray-200 text-sm border border-black/30 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="Your Review"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-sm border border-black/30 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="name"
                        type="text"
                        placeholder="Name*"
                      ></input>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-sm border border-black/30 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        type="email"
                        placeholder="Email"
                      ></input>
                    </div>
                  </div>
                  <div className="bg-black hover:bg-[#c1e502] w-40 py-3 text-center text-white duration-500 transform">
                    <button>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* STEP 04 */}
        <div className="xl:px-40 lg:px-20 px-5 mt-20">
          <h1 className="text-2xl font-semibold">RELATED PRODUCTS</h1>
          {/* RELATED CATEGORY IMAGES */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-10 mb-20">
            <div className="wrapper mt-5">
              <div className="card">
                <Image
                  className="bg-gray/80"
                  src={Pro01}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
                <div className="info">
                  <h1 className="text-xl font-semibold">Treadmill Apollo</h1>
                  <p className="text-lg font-semibold pt-5">£99.00</p>
                  <div className="flex">
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiOutlineStar color="#D2D2D2" size="22px" />
                  </div>
                  <button className="mt-5">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="wrapper mt-5">
              <div className="card">
                <Image
                  className="bg-gray/80"
                  src={Pro02}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
                <div className="info">
                  <h1 className="text-xl font-semibold">Treadmill Apollo</h1>
                  <p className="text-lg font-semibold pt-5">£99.00</p>
                  <div className="flex">
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiOutlineStar color="#D2D2D2" size="22px" />
                  </div>
                  <button className="mt-5">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="wrapper mt-5">
              <div className="card">
                <Image
                  className="bg-gray/80"
                  src={Pro01}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
                <div className="info">
                  <h1 className="text-xl font-semibold">Treadmill Apollo</h1>
                  <p className="text-lg font-semibold pt-5">£99.00</p>
                  <div className="flex">
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiOutlineStar color="#D2D2D2" size="22px" />
                  </div>
                  <button className="mt-5">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="wrapper mt-5">
              <div className="card">
                <Image
                  className="bg-gray/80"
                  src={Pro02}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
                <div className="info">
                  <h1 className="text-xl font-semibold">Treadmill Apollo</h1>
                  <p className="text-lg font-semibold pt-5">£99.00</p>
                  <div className="flex">
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiFillStar color="#FFD600" size="22px" />
                    <AiOutlineStar color="#D2D2D2" size="22px" />
                  </div>
                  <button className="mt-5">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
