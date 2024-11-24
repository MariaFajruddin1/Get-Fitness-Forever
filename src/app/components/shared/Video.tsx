import React from "react";

const Video = () => {
  return (
    <>
      <video controls className="w-[80%] h-[80%] mx-auto border-8 border-[#c1e502] m-5">
        <source src="https://ik.imagekit.io/ikmedia/file_example_MOV_640_800kB.mov?tr=orig-true" type="video/quicktime" />
        <source src="https://ik.imagekit.io/ikmedia/sample-5s.webm?tr=f-mp4" type="video/webm" />
        Your browser does not support the video tag...
      </video>
    </>
  );
};

export default Video;
