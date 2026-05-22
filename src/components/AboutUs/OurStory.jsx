import React from 'react'
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { PiStarBold } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";

function OurStory() {

  const stats = [
    {
      icon: <MdOutlineRocketLaunch />,
      number: "50+",
      text: "Projects Delivered Across Industries",
    },
    {
      icon: <IoPersonOutline />,
      number: "20+",
      text: "Happy Clients Worldwide",
    },
    {
      icon: <PiStarBold />,
      number: "6+",
      text: "Years of Digital Experience",
    },
    {
      icon: <TbTargetArrow />,
      number: "100%",
      text: "Commitment to Quality & Impact",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#000] border-t border-[#1d3322] text-white px-4 sm:px-6 md:px-10 lg:px-14 py-16 overflow-hidden">
      <div className="flex flex-col xl:flex-row gap-16">

        {/* LEFT CONTENT */}
        <div className="w-full xl:w-1/3">
          <h1 className="uppercase text-[#b5f364] font-semibold mb-5 text-[18px] sm:text-[22px] " >
            Our Story
          </h1>

          <h2 className="uppercase font-['Oswald'] leading-none tracking-tight mb-8
              text-[11vw] sm:text-[8vw] md:text-[6vw] xl:text-[4vw] ">
            Built on passion. <br /> Driven by
            <span className="text-[#b5f364]">
              purpose
            </span>
          </h2>

          <p className=" text-[#a8a2a2] leading-relaxed mb-5 font-['Inter']
              text-[14px] sm:text-[16px] md:text-[17px] ">
            ZenVyra was born from a simple belief digital experiences should be more than just functional. They should inspire, engage, and create lasting connections between brands and people.
          </p>

          <p className="text-[#a8a2a2] leading-relaxed font-['Inter']
              text-[14px] sm:text-[16px] md:text-[17px] ">
            We combine creativity, technology, and strategy to build digital products and experiences that don't just look exceptional, they deliver real impact.
          </p>
        </div>

        {/* CENTER CIRCLE */}
        <div className="w-full xl:w-1/3 flex justify-center items-center">
          <div className=" w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] border border-[#1d1d1d] rounded-full flex justify-center items-center">
            <div className=" w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] border border-[#1d1d1d] rounded-full flex justify-center items-center">
              <div className=" relative w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] border border-[#1d1d1d] rounded-full flex justify-center items-center ">

                <h1 className="uppercase text-[#b5f364] absolute font-semibold tracking-wide text-[28px] sm:text-[36px]"> Zenvyra </h1>
                <div className="about-shadow w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] border border-[#b5f364] rounded-full"></div>
              
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full xl:w-1/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 border border-[#545151]">
            {stats.map((item, index) => (
              <div key={index} className=" border border-[#545151] p-6 sm:p-6 flex gap-4 items-start " >

                {/* Icon */}
                <div className=" min-w-[55px] h-[55px] bg-[#191717] border border-[#3e3c3c] rounded-full flex justify-center items-center text-[24px] " >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                    <h1 className=" text-[#b5f364] font-semibold text-[28px] sm:text-[34px] leading-none " >
                      {item.number}
                    </h1>

                    <p className=" mt-2 text-[#d7d7d7] font-['Inter'] leading-relaxed text-[14px] sm:text-[16px] " >
                      {item.text}
                    </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory