// ================= OUR PROCESS =================

import React from 'react'

function OurProcess() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] border-y border-[#1c1c1c] text-white px-4 sm:px-6 md:px-10 lg:px-14 py-14 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute left-[-10%] top-[20%] w-[350px] h-[350px] bg-[#b5f364]/5 blur-[120px] rounded-full"></div>

      <div className="absolute right-[-10%] bottom-[10%] w-[300px] h-[300px] bg-[#b5f364]/5 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center gap-3 uppercase font-bold">

        <h1 className=" text-[#b5f364] text-[18px] sm:text-[22px] md:text-[20px] " >
          Our Process
        </h1>

        <h1 className="text-center text-[24px] sm:text-[32px] md:text-[48px] lg:text-[45px] leading-none " >
          How We Work
        </h1>
      </div>

      {/* Main Box */}
      <div className="relative z-10 w-full mt-12">

        <div className="w-full border border-[#232323] rounded-2xl flex flex-col lg:flex-row justify-between
            gap-12 px-6 sm:px-10 lg:px-16 py-10 sm:py-14 bg-[#0a0a0a] shadow-[0_0_50px_rgba(181,243,100,0.04)]">

          {/* Left Content */}
          <div className="flex flex-col justify-between gap-8 lg:w-[65%]">
            <h1 className=" uppercase font-semibold font-['Inter'] leading-tight
                text-[9vw] sm:text-[6vw] md:text-[6vw] lg:text-[4vw] " >
              Ready to elevate <br /> your
              <span className="text-[#b5f364]">
                digital presence?
              </span>
            </h1>

            <p className=" leading-relaxed text-[#e1e1e1] text-[15px] sm:text-[18px] md:text-[20px] w-full lg:w-[80%] " >
              Let's create something extraordinary together.
            </p>

            {/* Button */}
            <button className=" border border-[#2d2d2d] bg-[#0d0d0d] rounded-full w-fit hover:bg-[#b5f364] hover:text-black hover:border-[#b5f364] transition-all duration-300
                px-8 sm:px-12 py-3 uppercase text-sm sm:text-base " >
              Start a Project
            </button>
          </div>

          {/* Right Stats */}
          <div className=" flex flex-row lg:flex-col justify-between
              gap-8 lg:gap-14 w-full lg:w-auto " >
            {[
              { number: "50+", text: "Projects Delivered" },
              { number: "20+", text: "Happy Clients" },
              { number: "100%", text: "Commitment" },
            ].map((item, index) => (
              <div key={index}>

                <h1 className=" text-[#b5f364] font-semibold text-[34px] sm:text-[46px] md:text-[52px] " >
                  {item.number}
                </h1>

                <p className=" text-[#e1e1e1] text-[14px] sm:text-[17px] md:text-[18px] leading-snug " >
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProcess