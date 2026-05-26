import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="relative w-full sm:min-h-screen bg-[#050505] overflow-hidden">

      {/* Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] right-[-10%]
        w-[500px] h-[500px]
        bg-[#b5f364]/10 blur-[140px] rounded-full">
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] bottom-[5%]
        w-[350px] h-[350px]
        bg-[#b5f364]/5 blur-[120px] rounded-full">
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-14">

        <div className="pt-[18vh] sm:pt-[20vh] lg:pt-[22vh]">

          <div className="text-[#e8e6e6]">

            {/* Heading */}
            {["Services that", "build digital", "excellence"].map((item, index) => (
              <motion.h1
                key={index}
                initial={{
                  opacity: 0,
                  y: 120,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`font-['Oswald'] uppercase font-semibold tracking-tight leading-none
                  text-[16vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw]
                  ${index === 2 ? "text-[#b5f364]" : ""}`} >
                {item}
              </motion.h1>
            ))}

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
                delay: 0.8,
              }}
              className="mt-6 sm:mt-8 lg:mt-10 w-full leading-relaxed text-[#d7d7d7] font-['Inter']
                sm:w-[90%] md:w-[75%] lg:w-[45%] text-[15px] sm:text-[17px] md:text-[18px]">
                  We craft immersive digital experiences that combine design, technology, and strategy to help brands grow, engage, and lead.
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
                duration: 0.5,
                delay: 0.9,
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="border border-[#2d2d2d] bg-[#0d0d0d] rounded-full uppercase hover:bg-[#b5f364] hover:text-black hover:border-[#b5f364] transition-all duration-300 overflow-hidden 
                mt-8 sm:mt-8 mb-8 sm:mb-5 px-6 sm:px-8 md:px-10 py-3 text-sm sm:text-base ">
                  Let's build together
            </motion.button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;