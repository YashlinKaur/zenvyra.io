import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  return (
    <div className="w-full bg-black min-h-auto md:min-h-screen px-5 sm:px-8 md:px-10 lg:px-[5vw] sm:py-8 pt-5 flex flex-col justify-between relative overflow-hidden">

      <div className="absolute left-0 top-0 w-[45vw] h-full bg-[#b5f364]/15 blur-[120px] pointer-events-none"></div>
      
      {/* Heading */}
      <div className="relative z-10 mt-[12vh] sm:mt-[15vh] md:mt-[18vh] text-[#e8e6e6]">
        {["CREATING DIGITAL", "EXPERIENCES THAT", "FEEL EFFORTLESS"].map((item, index) => (
            <h1 key={index} className={`uppercase font-['Oswald'] font-semibold tracking-tight leading-none
                text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw]
                ${ index === 1 ? "ml-0 sm:ml-[5vw] md:ml-[8vw]" : "" } `}>
              {item}
            </h1>
          ))}
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 mt-[10vh] md:mt-[12vh] pb-6 flex flex-col gap-6 text-[#dcdada]
          md:flex-row md:items-center md:justify-between">

        <p className="text-sm sm:text-base opacity-80 text-center md:text-left">
          Interactive web experiences for modern brands.
        </p>

        <p className="text-sm sm:text-base opacity-60 text-center">
          Scroll to explore our work
        </p>

        <div className="flex items-center justify-center md:justify-end gap-3">
          <button className="border border-[#8e8e8e] px-5 py-2 rounded-full uppercase hover:bg-white hover:text-black transition-all duration-300
              sm:px-6 sm:py-2.5 text-sm sm:text-base ">     
             Start a Project
          </button>

          <div className="h-9 w-9 border border-[#8e8e8e] flex items-center justify-center rounded-full
              hover:bg-white hover:rotate-45 hover:text-black transition-all duration-300
              sm:h-10 sm:w-10 ">
            <GoArrowUpRight />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LandingPage;