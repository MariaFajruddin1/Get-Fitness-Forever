import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Img1 from "/public/images/ch1.jpg";
import Img2 from "/public/images/ch2.jpg";
import Img3 from "/public/images/ch3.jpg";

const Choose = () => {
  return (
    <Wrapper>
      <p className="mx-auto text-center text:lg md:text-xl md:mt-24 lg:mt-32 text-[#c1e502] font-bold">
        OUR BEST FEATURES
      </p>
      <p className="text-center text-2xl lg:text-5xl font-semibold uppercase text-black">
        Why Choose Us?
      </p>

      <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-[#f5f5f5]">
          <h1 className="text-center text-green mx-auto p-5 font-bold uppercase">
            Progression
          </h1>
          <p className="text-center mx-auto  text-[16px] text-[#616161]">
            It is a established fact that a reader will be distracted distracted
            layout.
          </p>
          <Image src={Img1} alt="img" />
        </div>

        <div className="my-5 md:my-0 bg-[#f5f5f5]">
          <h1 className="text-center text-green mx-auto p-5 text-[28px] font-bold uppercase">
            Workout
          </h1>
          <p className="text-center mx-auto  text-[16px] text-[#616161]">
            It is a established fact that a reader will be distracted distracted
            layout.
          </p>
          <Image src={Img2} alt="img" />
        </div>

        <div className="my-5 md:my-0 bg-[#f5f5f5]">
          <h1 className="text-center text-green mx-auto p-5 text-[28px] font-bold uppercase">
            Nutrition{" "}
          </h1>
          <p className="text-center mx-auto  text-[16px] text-[#616161]">
            It is a established fact that a reader will be distracted distracted
            layout.
          </p>
          <Image src={Img3} alt="img" />
        </div>

        <div className="my-5 md:my-0 bg-[#f5f5f5]">
          <h1 className="text-center text-green mx-auto p-5 text-[28px] font-bold uppercase">
            Self Defence{" "}
          </h1>
          <p className="text-center mx-auto  text-[16px] text-[#616161]">
            It is a established fact that a reader will be distracted distracted
            layout.
          </p>
          <Image src={Img3} alt="img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Choose;
