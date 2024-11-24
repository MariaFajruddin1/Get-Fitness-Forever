import React from "react";
import Logo from "/public/images/logo.jpg";
import Image from "next/image";

const Splash = (props: any) => {
  return (
    <div className="flex h-screen flex-col justify-center items-center  sm:w-90 mm:w-95 ml:w-full">
      <div>
        <Image src={Logo} alt="logo" className="w-36" />
      </div>
    </div>
  );
};

export default Splash;
