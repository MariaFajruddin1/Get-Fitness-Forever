import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import StoreImg from "/public/images/storeimgs.webp";
import Yoga from "/public/images/yogamat.webp";
import Img1 from "/public/images/ch1.jpg";
import Img2 from "/public/images/ch2.jpg";
import Img3 from "/public/images/ch3.jpg";
import { useState } from "react";

const Collection = () => {
  const [btn, setBtn] = useState(false);
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  return (
    <div className="sm:w-30% mx-10">
      <Wrapper>
        <p className="text-center text-3xl lg:text-5xl font-semibold mt-20 lg:mt-32 text-black uppercase">
          Our Services
        </p>

        <div className="mt-20 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
          <div
            className={`relative my-5 md:my-0 `}
            onMouseEnter={() => {
              console.log("on mouse enter triggered");
              setBtn(true);
            }}
            onMouseLeave={() => {
              console.log("on mouse leave triggered");
              setBtn(false);
            }}
          >
            <div className="mx-auto relative overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={Img1}
                className="transition duration-300 ease-in-out hover:scale-110 "
                alt="Louvre"
              />
            </div>
            <p className="lg:text-xl font-semibold text-center my-5 uppercase">
              Cardio Strength
            </p>

            <button
              className={`h-10 absolute sm:bottom-20 lg:bottom-24 sm:left-20 mm:left-28 ml:left-36 md:left-28 lg:left-44 xl:left-40 text-black bg-[#c1e502] px-6 py-1  ${btn ? "" : "hidden"
                }  hover:bg-black hover:text-white`}
            >
              Learn More
            </button>
          </div>

          <div
            className={`relative my-5 md:my-0 `}
            onMouseEnter={() => {
              console.log("on mouse enter triggered");
              setBtn1(true);
            }}
            onMouseLeave={() => {
              console.log("on mouse leave triggered");
              setBtn1(false);
            }}
          >
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={Img2}
                className="transition duration-300 ease-in-out hover:scale-110 "
                alt="Louvre"
              />
            </div>
            <p className="lg:text-xl font-semibold text-center my-5 uppercase">
              Running Shoes
            </p>

            <button
              className={`h-10 absolute sm:bottom-20 lg:bottom-24 sm:left-20 mm:left-28 ml:left-36 md:left-28 lg:left-44 xl:left-40 text-black bg-[#c1e502] px-6 py-1  ${btn1 ? "" : "hidden"
                }  hover:bg-black hover:text-white`}
            >
              Learn More
            </button>
          </div>

          <div
            className={`relative my-5 md:my-0 `}
            onMouseEnter={() => {
              console.log("on mouse enter triggered");
              setBtn2(true);
            }}
            onMouseLeave={() => {
              console.log("on mouse leave triggered");
              setBtn2(false);
            }}
          >
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={Img3}
                className="transition duration-300 ease-in-out hover:scale-110 "
                alt="Louvre"
              />
            </div>
            <p className="lg:text-xl font-semibold text-center my-5 uppercase">
              DUMBBELLS
            </p>

            <button
              className={`h-10 absolute sm:bottom-20 lg:bottom-24 sm:left-20 mm:left-28 ml:left-36 md:left-28 lg:left-44 xl:left-40 text-black bg-[#c1e502] px-6 py-1  ${btn2 ? "" : "hidden"
                }  hover:bg-black hover:text-white`}
            >
              Learn More
            </button>
          </div>

          <div
            className={`relative my-5 md:my-0 `}
            onMouseEnter={() => {
              console.log("on mouse enter triggered");
              setBtn3(true);
            }}
            onMouseLeave={() => {
              console.log("on mouse leave triggered");
              setBtn3(false);
            }}
          >
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={Img2}
                className="transition duration-300 ease-in-out hover:scale-110 "
                alt="Louvre"
              />
            </div>
            <p className="lg:text-xl font-semibold text-center my-5 uppercase">
              YOGA MAT
            </p>

            <button
              className={`h-10 absolute sm:bottom-20 lg:bottom-24 sm:left-20 mm:left-28 ml:left-36 md:left-28 lg:left-44 xl:left-40 text-black bg-[#c1e502] px-6 py-1  ${btn3 ? "" : "hidden"
                }  hover:bg-black hover:text-white`}
            >
              Learn More
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Collection;
