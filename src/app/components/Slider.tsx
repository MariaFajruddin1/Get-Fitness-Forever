"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Blog101 from "../../../public/blog101.webp";
import Blog201 from "../../../public/blog201.webp";

const images = [Blog101, Blog201];
const imageDescriptions = ["High Waist Yoga Pants", "Sports Wear Set for Women"];
const imagePrices = ["$35.00", "$40.00"];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(imagePrices[0]);

  const slideLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const slideRight = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  useEffect(() => {
    // Update the current price when the image changes
    setCurrentPrice(imagePrices[currentImageIndex]);
  }, [currentImageIndex]);

  return (
    <>
      <div className="mt-5">
        <Image width={300} src={images[currentImageIndex]} alt="cp" className="h-[300px]" />
        <div className="pr-16 text-center">
          <p className="hover:text-green text-xl mt-2">{imageDescriptions[currentImageIndex]}</p>
          <p className="text-xl mt-2">{currentPrice}</p>
        </div>
      </div>
      <div className="flex justify-center pr-16 mt-4 gap-2">
        <button title="scroll left" className="bg-black p-2" style={{ color: "white" }} onClick={slideLeft}>
          <AiOutlineArrowLeft />
        </button>
        <button title="scroll right" className="bg-gray p-2" onClick={slideRight}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
};

export default ImageCarousel;
