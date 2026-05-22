import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function InsightHero() {
  return (
    <div className="w-full min-h-screen bg-[#000] pt-6 px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center gap-10 overflow-hidden">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 mt-[12vh] lg:mt-[13vh] text-[#e8e6e6]">
        
        <h1 className="text-[13px] sm:text-[16px] md:text-[18px] uppercase text-[#b5f364] tracking-wide">
          Insights & Perspectives
        </h1>

        {["Ideas that", "inspire", "impact that", "last."].map(
          (item, index) => (
            <h1 key={index} className={` font-['Oswald'] uppercase font-semibold tracking-tight leading-[0.95] 
                text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7vw]
                ${
                  index === 2 || index === 3
                    ? "text-[#b5f364]"
                    : "text-[#f5f5f5]"
                }`}>
              {item}
            </h1>
          )
        )}

        <p className='w-full sm:w-[90%] lg:w-[40vw] text-[15px] sm:text-[17px] md:text-[17px] font-["Inter"] mt-6 leading-relaxed text-[#cfcfcf]'>
          Explore our thoughts on digital design, technology, brand experiences, and everything in between. Knowledge that fuels better digital experiences.
        </p>

        <button className="border border-[#b5f364] text-[#e8e6e6] rounded-2xl px-6 sm:px-8 py-2 uppercase mt-6 flex items-center gap-3 sm:gap-5 text-[15px] sm:text-[18px] md:text-[18px] hover:bg-[#b5f364] hover:text-black transition-all duration-300">
          Explore Insights
          <GoArrowUpRight className="text-[22px] sm:text-[28px]" />
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[450px] lg:h-[85vh] overflow-hidden rounded-3xl mt-[12vh] lg:mt-[13vh]">
        <img src="insight-hero.png" alt="Insight Hero" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default InsightHero;