"use client";
import Image from "next/image";
// import Blog from './components/Blog'
import Blog2 from "./components/Blog2";

import Navbar from "./components/layout/Navbar";
import BMI from "./components/shared/BMI";
import Choose from "./components/shared/Choose";
import Collection from "./components/shared/Collection";
import Gallery from "./components/shared/Gallery";
import Hero from "./components/shared/Hero";
import Logo from "./components/shared/Logo";
import Slider from "./components/shared/Slider";
import Stamina from "./components/shared/Stamina";
import TableChart from "./components/shared/TableChart";
// import VideoUpload from "./components/shared/Video"
import Video from "./components/shared/Video";
import Blog from "./components/widgets/Blog";
import ClientQuot from "./components/widgets/ClientQuot";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />

        <Slider />

        <Choose />

        <Collection />

        <Logo />

        <Stamina />

        <Slider />

        <Gallery />

        {/* <TableChart /> */}

        <Slider />

        <Video />

        <Slider />

        <BMI />

        <ClientQuot />

        <Blog />
      </div>
    </>
  );
}
// hero
// why we choose us
// services
// video
// trainer
// gallery
// client review
// blogs slider
// logo slider
// footer