import React from 'react'
import { motion } from "framer-motion";

function OurProcess() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] border-y border-[#1c1c1c] text-white px-4 sm:px-6 md:px-10 lg:px-14 py-14 overflow-hidden">

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10%] bottom-[10%] w-[300px] h-[300px] bg-[#b5f364]/5 blur-[120px] rounded-full"> 
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 flex flex-col items-center gap-3 uppercase font-bold"
      >

        <h1 className="text-[#b5f364] text-[18px] sm:text-[22px] md:text-[20px]">
          Our Process
        </h1>

        <h1 className="text-center leading-none text-[24px] sm:text-[32px] md:text-[48px] lg:text-[45px] ">
          How We Work
        </h1>

      </motion.div>

      {/* Main Box */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="relative z-10 w-full mt-12"
      >

        <div className="w-full border border-[#232323] gap-12 px-6 sm:px-10 lg:px-16 py-10 sm:py-14 rounded-2xl flex flex-col lg:flex-row justify-between bg-[#0a0a0a] shadow-[0_0_50px_rgba(181,243,100,0.04)]">

          {/* Left Content */}
          <div className="flex flex-col justify-between gap-8 lg:w-[65%]">

            <motion.h1
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="uppercase font-semibold font-['Inter'] leading-tight 
                text-[9vw] sm:text-[6vw] md:text-[6vw] lg:text-[4vw]"
            >
              Ready to elevate <br /> your 
              <span className="text-[#b5f364]">
                {" "}digital presence?
              </span>

            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="leading-relaxed text-[#e1e1e1]
                text-[15px] sm:text-[18px] md:text-[20px] w-full lg:w-[80%]"
            >
              Let's create something extraordinary together.
            </motion.p>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              transition={{
                duration: 0.5,
              }}
              className="border border-[#2d2d2d] bg-[#0d0d0d] uppercase rounded-full w-fit hover:bg-[#b5f364] hover:text-black hover:border-[#b5f364] transition-all duration-300 
                px-8 sm:px-12 py-3 text-sm sm:text-base"
            >
              Start a Project
            </motion.button>

          </div>

          {/* Right Stats */}
          <div className="flex flex-row lg:flex-col justify-between 
            gap-8 lg:gap-14 w-full lg:w-auto">
            {[
              { number: "50+", text: "Projects Delivered" },
              { number: "20+", text: "Happy Clients" },
              { number: "100%", text: "Commitment" },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -5,
                }}>

                <h1 className="text-[34px] sm:text-[46px] md:text-[52px] text-[#b5f364] font-semibold">
                    {item.number}
                </h1>

                <p className="text-[14px] sm:text-[17px] md:text-[18px] text-[#e1e1e1] leading-snug">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default OurProcess;