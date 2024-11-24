import Image from "next/image";
import Logo from "/public/images/logo.jpg";
import Wrapper from "../shared/Wrapper";
import { FaLocationPin } from "react-icons/fa6";
import { AiTwotonePhone } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { BsFillSendFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { SiSkype } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-[#FFF] mt-20">
      <Wrapper>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* #1 */}
          <div className="md:mx-5 mt-5 sm:mt-[20px] md:mt-[90px] ml-12 ml:ml-20">
          <Image className="" src={Logo} alt='' width={150} height={150}></Image>
          </div>
          {/* #2 */}
          <div className="text-center sm:mr-20 md:mr-52 lg:mr-0">
            <div className="lg:text-[24px] mt-5 sm:mt-[10px] md:mt-[90px] text-[24px] font-bold">
              Useful-Links
            </div>
            <ul className="flex flex-col justify-start items-center self-start marker:text-green list-outside list-disc md:ml-6">
              <li className="hover:text-green mt-3 sm:mt-0 md:leading-10">
                Lifting weights
              </li>
              <li className="hover:text-green md:leading-10">Cardio Classes</li>
              <li className="hover:text-green md:leading-10">New To Fitness</li>
              <li className="hover:text-green md:leading-10">Muscle Builder</li>
              <li className="hover:text-green md:leading-10">Extra Energies</li>
            </ul>
          </div>
          {/* #3 */}
          <div className="text-center sm:text-left sm:mr-20 md:ml-2">
            <div className="text-[24px] font-bold mt-5 sm:mt-[20px] md:mt-[90px] sm:ml-16 ml:ml-24 md:ml-2">
              Location
            </div>
            <div className="flex gap-2 justify-center md:justify-start items-center leading-10">
              <FaLocationPin size={20} className={"text-green"} />
              <p>Karachi, Sindh</p>
            </div>
            <div className="flex gap-2 justify-center md:justify-start items-center leading-10">
              <AiTwotonePhone size={20} className={"text-green"} />
              <p className="hover:text-green">Info@thm.Com</p>
            </div>
            <div className="flex gap-2 justify-center md:justify-start items-center leading-10">
              <HiMail size={20} className={"text-green"} />
              <p className="hover:text-green">+1800-001-658</p>
            </div>
          </div>
          {/* #4 */}
          <div className="text-center sm:text-left">
            <div className="text-[24px] font-bold mt-5 sm:mt-[20px] md:mt-[90px] sm:ml-16 ml:ml-24 md:ml-2">
              Subscribe
            </div>
            <div className="flex items-center w-[320px] md:w-[450px] gap-x-20 mt-3 sm:mt-5">
              <p className="hover:text-green sm:ml-12 md:ml-2">Your email address</p>
              <BsFillSendFill size={20} className={"text-green ml-8 md:ml-16 "} />
            </div>
            <div className="border-b border-green mt-4 sm:w-[270px] sm:ml-12 md:ml-1  md:w-[300px]"></div>
            <p className="mt-5 sm:mt-10 leading-8  lg:w-[320px]">
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
            <div className="mb-5 sm:mb-[119px] sm:text-center flex gap-5  mt-5 ml-16 md:ml-0">
              <FaFacebookSquare size={20} className={"text-green"} />
              <FaInstagramSquare size={20} className={"text-green"} />
              <SiSkype size={20} className={"text-green"} />
              <FaSquareXTwitter size={20} className={"text-green"} />
            </div>
          </div>
        </div>
      </Wrapper>
      <hr className="text-green" />
      <p className="text-center p-4">
        Copyright 2023 fitsense All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
