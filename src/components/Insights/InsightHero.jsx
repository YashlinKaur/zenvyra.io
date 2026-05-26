import React from "react";
import { easeIn, motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

function InsightHero() {
  return (
    <div className="w-full min-h-screen bg-[#000] flex flex-col items-center justify-between gap-10 overflow-hidden relative
      px-4 sm:px-6 lg:px-12 lg:flex-row">

      {/* LEFT CONTENT */}
      <div className="relative z-10 text-[#e8e6e6]
        w-full lg:w-1/2 pt-[16vh] lg:pt-[10vh]">

        {/* Small Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-[13px] sm:text-[16px] md:text-[18px] uppercase text-[#b5f364] tracking-wide mb-2"
        >
          Insights & Perspectives
        </motion.h1>

        {/* Main Heading */}
        {["Ideas that", "inspire", "impact that", "last."].map(
          (item, index) => (
            <motion.h1
              key={index}
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`font-['Oswald'] uppercase font-semibold tracking-tight leading-[0.95]
                text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7vw]
              ${
                index === 2 || index === 3
                  ? "text-[#b5f364]"
                  : "text-[#f5f5f5]"
              }`}
            >
              {item}
            </motion.h1>
          )
        )}

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className='w-full sm:w-[90%] lg:w-[40vw] text-[15px] sm:text-[17px] md:text-[17px]
          font-["Inter"] mt-5 leading-relaxed text-[#cfcfcf]'
        >
          Explore our thoughts on digital design, technology, brand experiences, and everything in between. Knowledge that fuels better digital experiences.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease : easeIn
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          className="border text-[#e8e6e6] rounded-2xl uppercase mt-6 flex items-center gap-3 sm:gap-5 hover:bg-[#b5f364] hover:text-black hover:border-[#b5f364] transition-all duration-300
          text-[15px] sm:text-[18px] md:text-[18px] px-6 sm:px-8 py-2"
        >
          Explore Insights
          <div>
            <GoArrowUpRight className="text-[22px] sm:text-[28px]" />
          </div>
        </motion.button>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 overflow-hidden rounded-3xl
        w-full lg:w-1/2 h-[300px] sm:h-[450px] lg:h-[85vh] mt-2 lg:mt-[8vh]"
      >

        <motion.img
          whileHover={{
            scale: 1.04,
          }}
          transition={{
            duration: 0.6,
          }}
          src="insight-hero.png" alt="Insight Hero" className="w-full h-full object-cover"
        />

      </motion.div>
    </div>
  );
}

export default InsightHero;