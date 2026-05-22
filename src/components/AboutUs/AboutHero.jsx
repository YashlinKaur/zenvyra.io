import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function AboutHero() {
  return (
<div className="w-full relative min-h-screen bg-[#000] px-4 sm:px-6 md:px-10 lg:px-14 overflow-hidden">
      <div className="pt-[14vh] sm:pt-[16vh] lg:pt-[18vh]">

      {/* Glow Effects */}
      <div className="absolute top-[-15%] right-[-10%] w-[650px] h-[650px] bg-[#b5f364]/8 blur-[130px] rounded-full"></div>

        {/* Heading */}
        <h1 className=" uppercase text-[#b5f364] font-semibold tracking-wide 
            text-[16px] sm:text-[20px] md:text-[24px] mb-4">
          About Zenvyra
        </h1>

        <div className="text-[#e8e6e6]">
          {["We design", "experiences", "that matter"].map((item, index) => (
            <h1 key={index} className={`font-['Oswald'] uppercase font-semibold tracking-tight leading-none
                text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw]
                  ${index === 2 ? "text-[#b5f364]" : ""} `}>
              {item}
            </h1>
          ))}

          {/* Description */}
          <p className=" leading-relaxed text-[#d7d7d7] font-['Inter'] 
              mt-6 sm:mt-8 lg:mt-10 w-full sm:w-[90%] md:w-[75%] lg:w-[45%] text-[15px] sm:text-[17px] md:text-[18px]">
            ZenVyra is a digital experience studio dedicated to crafting immersive, elegant, and results-driven digital solutions for forward-thinking brands.
          </p>

          {/* Button */}
          <button className=" py-3 uppercase flex items-center border-2 border-[#c5c0c0] rounded-full
              hover:bg-[#b5f364] hover:text-black hover:border-[#b5f364] transition-all duration-300
              my-8 sm:mt-10 px-6 sm:px-8 md:px-10 gap-3 sm:gap-5 text-sm sm:text-base ">
            Our Story
            <GoArrowUpRight className="text-[18px] sm:text-[22px]"/>
          </button>

        </div>
      </div>
    </div>
  )
}

export default AboutHero