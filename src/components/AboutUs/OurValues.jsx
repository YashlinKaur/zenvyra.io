import React from "react";
import { aboutCard } from "./AboutCards";

function OurValues() {
  return (
    <div className="w-full border-t border-[#233428] bg-[#000] text-white px-4 sm:px-6 md:px-10 lg:px-14 py-16 overflow-hidden">

      {/* Heading */}
      <div className="w-full mb-12">
        <h1 className=" uppercase text-[#b5f364] font-semibold mb-4 text-[18px] sm:text-[22px] " >
          Our Values
        </h1>
        <h2 className=" uppercase font-['Oswald'] leading-none tracking-tight text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[4vw] text-[#edf3ee] " >
          What drives us
        </h2>
      </div>

      {/* Cards */}
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 " >
        {aboutCard.map((card, index) => (
          <div key={index} className=" w-full border border-[#233428] rounded-2xl flex flex-col gap-6
              p-6 sm:p-8 hover:border-[#b5f364] hover:-translate-y-1 transition-all duration-300">

            {/* Icon */}
            <div className="h-[65px] w-[65px] bg-[#101c14] border border-[#2d4734] rounded-full flex justify-center items-center " >
              <div className="text-[28px] text-[#b5f364]">
                {card.icons && <card.icons />}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <h1 className="text-[#edf3ee] uppercase font-semibold leading-tight text-[24px] sm:text-[28px]" >
                {card.title}
              </h1>
              <p className="text-[#c7d3ca] leading-relaxed font-['Inter'] text-[15px] sm:text-[16px] " >
                {card.description}
              </p>
              <div className="h-[2px] w-[45px] bg-[#b5f364] rounded-full"></div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default OurValues;