import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <div className="w-full min-h-screen border-t border-[#8a8989] text-[#dcdada] px-5 sm:px-8 md:px-12 lg:px-[5vw] flex items-center py-16 overflow-hidden relative bg-black">
      
      <div className="absolute left-0 top-0 w-[40vw] h-full bg-green-500/10 blur-[120px] pointer-events-none"></div>
      
      <div className="w-full flex flex-col lg:flex-row items-center gap-14 lg:gap-[6vw] font-[Inter] relative z-10">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col w-full lg:w-[55%]">
          
          {/* Small Heading */}
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[1.2vw] font-semibold text-[#b5f364] mb-8 sm:mb-10 lg:mb-[7vh] tracking-wide">
            WHAT DEFINES ZENVYRA:
          </p>

          {/* Main Heading */}
          <div className="leading-none font-['Oswald'] ml-0 sm:ml-4 lg:ml-[2vw] mb-8 lg:mb-[5vh]">
            <h1 className="text-[42px] sm:text-[58px] md:text-[72px] lg:text-[4.5vw]">
              Design that moves.
            </h1>

            <h1 className="text-[42px] sm:text-[58px] md:text-[72px] lg:text-[4.5vw]">
              <span className="text-[#b5f364]">Experience</span> that stays.
            </h1>
          </div>

          {/* Paragraph */}
          <p className="max-w-full lg:max-w-[38vw] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[1.25vw] leading-relaxed mb-10 lg:mb-[8vh]">
            We create immersive digital experiences through cinematic visuals, smooth motion, and refined frontend systems crafted for modern brands.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 text-[15px] sm:text-[16px] lg:text-[1vw]">
            
            {/* Button 1 */}
            <button className="bg-[#222121] hover:bg-[#2d2c2c] transition-all duration-300 font-semibold uppercase px-8 sm:px-12 py-4 rounded-xl flex items-center justify-center gap-4 w-full sm:w-fit">
              <p>View Projects</p>
              <GoArrowUpRight className="text-[24px]" />
            </button>

            {/* Button 2 */}
            <button className="border border-[#dcdada] hover:bg-white hover:text-black transition-all duration-300 font-semibold uppercase px-8 sm:px-12 py-4 rounded-xl flex items-center justify-center gap-4 w-full sm:w-fit">
              <p>Book a Call</p>
              <GoArrowUpRight className="text-[24px]" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full lg:w-[45%] flex justify-center items-center">
          <div className="relative w-full max-w-[550px]">
            
            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-[#b5f364]/20 blur-[100px] rounded-full"></div>

            {/* Image */}
            <img src="/home.png" alt="About Zenvyra" className="relative z-10 w-full h-auto object-cover rounded-3xl border border-[#2a2a2a] shadow-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;