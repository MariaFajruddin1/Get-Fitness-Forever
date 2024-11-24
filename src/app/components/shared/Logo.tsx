import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import LOGO1 from "/public/logo2.png";
import LOGO2 from "/public/logo3.png";
import LOGO3 from "/public/logo4.png";
import LOGO4 from "/public/logo5.png";


const Logo = () => {
  return (
    <>
     <p className="text-center text-3xl lg:text-5xl font-semibold mt-20 text-black uppercase">OUR Brands</p>
      <Wrapper>
     
        <div className="grid xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <Image src={LOGO1} alt="img" className="w-[350px] h-[350px]"/>
          <Image src={LOGO2} alt="img" className="w-[350px] h-[350px]" /> 
          <Image src={LOGO3} alt="img" className="w-[350px] h-[350px]" /> 
          <Image src={LOGO1} alt="img" className="w-[350px] h-[350px]"/>
          <Image src={LOGO4} alt="img" className="w-[350px] h-[350px]" />          
        </div>
      </Wrapper>
    </>
  );
};

export default Logo;
