"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Wrapper from "../shared/Wrapper";
import Logo from "/public/images/logo.jpg";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import Banner1 from "/public/images/megabanner_1.webp";
import Banner2 from "/public/images/megabanner_2.webp";
import Banner3 from "/public/images/megabanner_3.jpg";
import { EquipmentsLinks } from "./EquipmentLinks";
import { IoMdClose } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import LogoFull from "../../../../public/LogoFull.png";

const List = [
  {
    city: "Threadmill",
    Link: "/product",
  },
  {
    city: "Dumbbell",
    Link: "/product",
  },
  {
    city: "Bench",
    Link: "/product",
  },
  {
    city: "Fitness Ball",
    Link: "/product",
  },
  {
    city: "Mini Hip Band",
    Link: "/product",
  },
  {
    city: "Kettlebell",
    Link: "/product",
  },
];

export default function Home() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [togle, setTogle] = useState(false);
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <Wrapper>
        <div className="stricky top-0 bg-white fixed left-0 right-0 z-10 py-2 sm:px-10 px-0">
          <div className="flex justify-between items-center">
            <Image
              className=""
              src={Logo}
              alt=""
              width={150}
              height={150}
            ></Image>
            <div>
              <ul className="hidden md:flex items-center text-xl gap-8">
                <Link href="/" className="">
                  Home
                </Link>
                <div
                  className="flex"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <Link className="flex gap-2" href={"/"}>
                    Shop
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className={
                        toggle
                          ? "rotate-180 mt-2.5 h-3 w-3 transform transition-transform duration-200 ease-in-out"
                          : "rotate-0 mt-2.5 h-3 w-3 transform transition-transform duration-200 ease-in-out"
                      }
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                </div>
                <Link href={"/Blog"} className="">
                  Blog
                </Link>
                <Link href={"/Contactus"} className="">
                  Contact Us
                </Link>
              </ul>
              {/* Mobile Nav Hamburger */}
              <div onClick={handleNav} className="md:hidden">
                <FiMenu size="30" />
              </div>
            </div>
            <div className="md:flex hidden gap-5 align-center">
              <div className="searchBox">
                <input
                  className="searchInput"
                  type="text"
                  name=""
                  placeholder="Search Here!"
                ></input>
                <button className="searchButton">
                  <i className="material-icons">
                    <IoSearch color="black" size={30} />
                  </i>
                </button>
              </div>
              <div className="pt-2">
                {showSidebar ? (
                  <button
                    className="flex text-4xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                  >
                    <IoMdClose />
                  </button>
                ) : (
                  <div
                    className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
                    onClick={() => setShowSidebar(!showSidebar)}
                  >
                    <IoCartOutline size={30} />
                    <sup>0</sup>
                  </div>
                )}

                <div
                  className={`top-0 right-0 w-[25vw] bg-white py-4 px-4 border-l-4 border-[#c1e502] fixed h-full z-40 ease-in-out duration-300 ${
                    showSidebar ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <Image
                    className=""
                    src={Logo}
                    alt=""
                    width={150}
                    height={150}
                  ></Image>
                  <h3 className="pt-10 text-lg font-semibold text-black text-start">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. search for will uncover many web sites
                    still.
                  </h3>

                  <div className="text-center">
                    <div className="mx-28">
                      <IoCartOutline size={100} />
                    </div>
                    <p>Your Cart is Empty</p>
                    <button className="font-bold text-black bg-[#c1e502] px-6 py-2 hover:bg-black hover:text-white duration-500 transform align-center content-center mt-2">
                      Return to Shop
                    </button>
                  </div>

                  <div>
                    <h1 className="text-black font-bold text-start pl-4 text-2xl mt-10">
                      CONTACT INFO
                    </h1>
                    <div className="flex gap-5 ml-4 text-black/70 mt-5">
                      <div className="pt-1">
                        <FaLocationDot color={"#c1e502"} size={20} />
                      </div>
                      <p>ABCD-EFGH-IJKL-MNOP</p>
                    </div>
                    <div className="flex gap-5 ml-4 text-black/70 mt-2">
                      <div className="pt-1">
                        <FaPhoneAlt color={"#c1e502"} size={20} />
                      </div>
                      <p>+0123456789</p>
                    </div>
                    <div className="flex gap-5 ml-4 text-black/70 mt-2">
                      <div className="pt-1">
                        <IoMail color={"#c1e502"} size={20} />
                      </div>
                      <p>GetFitnessForever@Info.Com</p>
                    </div>

                    <div className="flex gap-5 mt-10 ml-4">
                      <div className="bg-black text-white hover:bg-[#c1e502] hover:text-black duration-500 transform p-3 cursor-pointer">
                        <FaFacebookF size={20} />
                      </div>
                      <div className="bg-black text-white hover:bg-[#c1e502] hover:text-black duration-500 transform p-3 cursor-pointer">
                        <FaTwitter size={20} />
                      </div>
                      <div className="bg-black text-white hover:bg-[#c1e502] hover:text-black duration-500 transform p-3 cursor-pointer">
                        <FaLinkedinIn size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Navbar */}
          </div>

          <div className="absolute">
            {toggle && (
              <div className="bg-slate-300 md:w-[90%] md:flex gap-10 relative z-10 ml-96 md:mx-16 mt-12 md:mt-0 pt-3 border-y-2 border-green bg-white px-5 pb-5">
                {/* FIRST ROW */}
                <div className="ml-5">
                  <h1 className="font-bold underline underline-offset-8 decoration-green text-xl pb-2 text-green">
                    Equipments
                  </h1>
                  {EquipmentsLinks.map((link: any) => (
                    <li key={link.id}>
                      <Link
                        className={`link ${pathname === "/" ? "active" : ""}`}
                        href={`/category/${link.slug}`}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </div>
                {/* SECOND ROW */}
                <div>
                  <h1 className="text-green font-bold underline underline-offset-8 decoration-green text-xl">
                    Workouts wear
                  </h1>
                  <li>
                    <Link href={""} className="pt-4">
                      Workout Tops
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className="pt-4">
                      Track Pants
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className="pt-4">
                      Yoga Pants
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className="pt-4">
                      High Rise Tights
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className="pt-4">
                      Stretchable Wear
                    </Link>
                  </li>
                </div>
                {/* THIRD ROW */}
                <div className="md:flex gap-10 m-y-10 hidden md:visible">
                  <Image src={Banner1} alt="Banner" width={200} height={200} />
                  <Image src={Banner2} alt="Banner" width={200} height={200} />
                  <Image src={Banner3} alt="Banner" width={200} height={200} />
                </div>
              </div>
            )}
          </div>

          <div
            className={`${
              nav
                ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                : ""
            }`}
          >
            <div
              className={`${
                nav
                  ? "fixed left-0 top-0 h-screen bg-white p-10 ease-in duration-500"
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
              }`}
            >
              <div className="flex w-full items-center justify-">
                <Image
                  className=""
                  src={Logo}
                  alt=""
                  width={150}
                  height={150}
                ></Image>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-pink-200 p-3 cursor-pointer"
                >
                  <GrClose />
                </div>
              </div>
              <div className="py-6">
                <ul className="text-lg flex flex-col text-start">
                  <Link href="/" className="">
                    Home
                  </Link>
                  <div className="relative md:hidden flex flex-col ">
                    <div
                      className="flex tracking-wider hover:border-blue-400 duration-300"
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      <Link className="flex gap-2" href={"/"}>
                        Shop
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          className={
                            isOpen
                              ? "rotate-180 mt-2 h-3 w-3 transform transition-transform duration-200 ease-in-out"
                              : "rotate-0 mt-2 h-3 w-3 transform transition-transform duration-200 ease-in-out"
                          }
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Link>
                    </div>

                    {isOpen && (
                      <div className="flex flex-col">
                        {List.map((item, i) => (
                          <div
                            className="flex cursor-pointer py-2 text-sm pl-2"
                            key={i}
                          >
                            <Link href={item.Link}>{item.city}</Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link href={"/Blog"} className="">
                    Blog
                  </Link>
                  <Link href={"/Contactus"} className="">
                    Contact
                  </Link>
                </ul>
              </div>
              <div className="md:hidden align-center">
                <div className="searchBox">
                  <input
                    className="searchInput"
                    type="text"
                    name=""
                    placeholder="Search Here!"
                  ></input>
                  <button className="searchButton">
                    <i className="material-icons">
                      <IoSearch color="black" size={30} />
                    </i>
                  </button>
                </div>
              </div>
              <div className="md:hidden pt-2">
                <FaShoppingCart size={30} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
