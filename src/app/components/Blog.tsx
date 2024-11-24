import React from "react";
import Wrapper from "./shared/Wrapper";
// import BlogSlider from "../shared/BlogSlider";
import BlogSlider from "../components/shared/BlogSlider"
const Blog = () => {
  return (
    <div className="bg-[#f5f5f5] overflow-hidden">
      <Wrapper>
        <p className="text-center text-3xl lg:text-5xl font-semibold pt-20">OUR LATEST BLOG</p>
        <p className="text-xl mx-auto text-center lg:w-[795px] leading-8 mt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</p>
        <BlogSlider />
      </Wrapper>
    </div>
  );
};

export default Blog;
