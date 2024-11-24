import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import st2 from "/public/images/st2.png";
import { BiCheck } from "react-icons/bi";

const Stamina = () => {
  return (
    <div className="bg-black text-[#FFF] overflow-hidden md:px-20">
      <Wrapper>
        <div className="xl:flex justify-between lg:mx-20 md:mx-3">
          <div className="w-[50%] invisible md:visible">
            <Image
              src={st2}
              alt="img"
              width={750}
              height={750}
              className="p-10"
            />
          </div>

          <div className="mx-auto md:w-[50%] mt-8">
            <p className="md:mt-8 text-bold leading-10 md:pt-3 text-green text-lg md:text-5xl">
              BODIES OF STEMINA STRENGH
            </p>
            <p className="pt-5 text-[18px]">
              It is a long established fact that a reader will be distracted by
              the readable content. of a page when looking at its page when at
              its layout. There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don’t look even
              slightly believable.
            </p>
            <div className="flex gap-3 items-center mt-4">
              <BiCheck className="text-green" size={27} />
              <p className="text-[18px]">
                Help reduce stress, stress body balance
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <BiCheck className="text-green" size={27} />
              <p className="text-[18px]">
                {" "}
                Improve mood efectivily self defence
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <BiCheck className="text-green" size={27} />
              <p className="text-[18px]">Flexibility of the body psycho</p>
            </div>
            <div className="mt-5 group flex gap-2 justify-center items-center bg-green w-[40%] py-3 uppercase font-medium text-[#1D1D1D] hover:bg-white  duration-500 transform">
              <div>Read more</div>
              <div className="w-2 h-2 bg-black rounded-full hover:bg-white"></div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Stamina;
