import React from 'react'
import Wrapper from '../shared/Wrapper'
import ClientSlider from "../shared/ClientSlider";

const ClientQuot = () => {
  return (
    <Wrapper>
    <div>
        <p className="text-center text-2xl lg:text-5xl font-semibold pt-20">
          OUR CLIENT SAY
        </p>
        <p className="mx-auto text-center lg:w-[795px] md:leading-10 text:lg md:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <ClientSlider />
      </div>
    </Wrapper>
  )
}

export default ClientQuot