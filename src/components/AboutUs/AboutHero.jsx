import React from 'react'
import { easeIn, motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

function AboutHero() {
  return (
    <div className="w-full relative min-h-screen bg-[#000] overflow-hidden
      px-4 sm:px-6 md:px-10 lg:px-14">

      <div className="pt-[14vh] sm:pt-[16vh] lg:pt-[18vh]">

        {/* Glow Effects */} 
        <div className="absolute top-[-15%] right-[-10%] w-[650px] h-[650px] bg-[#b5f364]/8 blur-[130px] rounded-full"></div>

        {/* Heading Small */}
        <motion.h1
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
          }}
          className="uppercase text-[#b5f364] font-semibold tracking-wide mb-4
            text-[16px] sm:text-[20px] md:text-[24px]"
          >
            About Zenvyra
        </motion.h1>

        <div className="text-[#e8e6e6]">

          {/* Main Heading */}
          {["We design", "experiences", "that matter"].map((item, index) => (
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
              text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw]
              ${index === 2 ? "text-[#b5f364]" : ""}`}
            >
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
              delay: 0.7,
            }}
            className="leading-relaxed text-[#d7d7d7] font-['Inter']
            mt-6 sm:mt-8 lg:mt-10 w-full sm:w-[90%] md:w-[75%] lg:w-[50%] text-[15px] sm:text-[17px] md:text-[18px]"
          >
            ZenVyra is a digital experience studio dedicated to crafting immersive, elegant, and results-driven digital solutions for forward-thinking brands.
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
              duration: 1,
              delay: 0.9,
              ease : easeIn
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}

            className="py-3 uppercase flex items-center border-2 border-[#c5c0c0] rounded-full hover:bg-[#b5f364] hover:text-black hover:border-[#b5f364] transition-all duration-300
            my-8 sm:mt-10 px-6 sm:px-8 md:px-10 gap-3 sm:gap-5 text-sm sm:text-base"
          >
            Our Story

            <motion.div
              whileHover={{
                rotate: -45,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <GoArrowUpRight className="text-[18px] sm:text-[22px]" />
            </motion.div>

          </motion.button>

        </div>
      </div>
    </div>
  )
}

export default AboutHero