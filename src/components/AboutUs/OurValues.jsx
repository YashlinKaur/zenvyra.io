import React from "react";
import { motion } from "framer-motion";
import { aboutCard } from "./AboutCards";

function OurValues() {
  return (
    <div className="w-full border-t border-[#233428 bg-[#000] text-white overflow-hidden
      px-4 sm:px-6 md:px-10 lg:px-14 py-16">

      {/* Heading */}
      <div className="w-full mb-12">

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="text-[18px] sm:text-[22px] uppercase text-[#b5f364] font-semibold mb-4"
        >
          Our Values
        </motion.h1>

        <motion.h2
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
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="uppercase font-['Oswald'] leading-none tracking-tight text-[#edf3ee]
          text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[4vw]"
        >
          What drives us
        </motion.h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {aboutCard.map((card, index) => (
          <motion.div
            key={index}
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
              duration: 0.8,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
            }}
            className="p-6 sm:p-8 group w-full border border-[#233428] rounded-2xl flex flex-col gap-6 hover:border-[#b5f364] transition-all duration-300 bg-[#050505]"
          >

            {/* Icon */}
            <div className="h-[65px] w-[65px] bg-[#101c14] border border-[#2d4734] rounded-full flex justify-center items-center">
              <div className="text-[28px] text-[#b5f364]">
                {card.icons && <card.icons />}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">

              <h1 className="text-[24px] sm:text-[28px] text-[#edf3ee] uppercase font-semibold leading-tight">
                {card.title}
              </h1>

              <p className="text-[15px] sm:text-[16px] text-[#c7d3ca] leading-relaxed font-['Inter']">
                {card.description}
              </p>

              <motion.div
                initial={{
                  width: "0px",
                }}
                whileInView={{
                  width: "45px",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                className="h-[2px] bg-[#b5f364] rounded-full">
              </motion.div>

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default OurValues;