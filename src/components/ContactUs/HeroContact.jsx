import React from "react";
import { motion } from "framer-motion";

const HeroContact = () => {
  return (
    <div className="relative w-full sm:min-h-screen bg-[#050505] overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-[-15%] right-[-10%] w-[450px] h-[450px] bg-[#b5f364]/10 blur-[130px] rounded-full"></div>

      <div className="absolute left-[-10%] bottom-[10%] w-[300px] h-[300px] bg-[#b5f364]/5 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-7 lg:px-6">

        <div className="mt-[14vh] sm:mt-[18vh] lg:mt-[20vh] px-2 sm:px-[2vw] lg:px-[3.5vw] text-[#e8e6e6]">

          {/* Small Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[13px] sm:text-[16px] md:text-[18px] mb-4 uppercase tracking-wide text-[#b5f364]"
          >
            Let's Connect
          </motion.h1>

          {/* Main Heading */}
          {["Let's Create", "Something", "Extraordinary"].map(
            (item, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`font-['Oswald'] uppercase font-semibold tracking-tight leading-[0.92]
                  text-[13vw] sm:text-[11vw] md:text-[12vw] lg:text-[8vw]
                  ${
                    index === 2
                      ? "text-[#b5f364]"
                      : "text-[#f5f5f5]"
                  } `}
              >
                {item}
              </motion.h1>
            )
          )}

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
            className='w-full sm:w-[90%] lg:w-[34vw] text-[15px] sm:text-[18px] lg:text-[19px] leading-relaxed font-["Inter"] text-[#c9c9c9] mt-8 lg:mt-[6vh]'
          >
            Have a project in mind or want to collaborate? We'd love to hear from you. Let’s build immersive digital experiences together.
          </motion.p>

        </div>
      </div>
    </div>
  );
};

export default HeroContact;