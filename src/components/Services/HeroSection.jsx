// ================= HERO SECTION =================

import React from 'react'

function HeroSection() {
  return (
    <div className="relative w-full sm:min-h-screen bg-[#050505] overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#b5f364]/10 blur-[140px] rounded-full"></div>

      <div className="absolute left-[-10%] bottom-[5%] w-[350px] h-[350px] bg-[#b5f364]/5 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-14">

        <div className="pt-[18vh] sm:pt-[20vh] lg:pt-[22vh]">

          <div className="text-[#e8e6e6]">

            {["Services that", "build digital", "excellence"].map((item, index) => (
              <h1 key={index} className={`font-['Oswald'] uppercase font-semibold tracking-tight leading-none
                  text-[16vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw]
                  ${index === 2 ? "text-[#b5f364]" : ""} `}>
                {item}
              </h1>
            ))}

            {/* Description */}
            <p className=" mt-6 sm:mt-8 lg:mt-10 w-full leading-relaxed text-[#d7d7d7] font-['Inter'] 
                sm:w-[90%] md:w-[75%] lg:w-[45%] text-[15px] sm:text-[17px] md:text-[18px] " >
              We craft immersive digital experiences that combine design, technology, and strategy to help brands grow, engage, and lead.
            </p>

            {/* Button */}
            <button className="border border-[#2d2d2d] bg-[#0d0d0d] rounded-full uppercase hover:bg-[#b5f364] hover:text-black hover:border-[#b5f364] transition-all duration-300 
                mt-8 sm:mt-5 mb-8 sm:mb-5 px-6 sm:px-8 md:px-10 py-3 text-sm sm:text-base ">
              Let's build together
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection