import React from "react";
import { motion } from "framer-motion";

function StartProject() {
  return (
    <div className="w-full min-h-screen border-t border-[#8a8989] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 md:px-12 lg:px-[5vw] text-[#bdbdbd] overflow-hidden relative bg-black">

      {/* Green Glow Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute left-0 top-0 w-[40vw] h-full bg-[#b5f364]/10 blur-[120px] pointer-events-none"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">

        {/* Heading */}
        <div className="overflow-hidden">

          <motion.h1
            initial={{ opacity: 0, y: 180 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="uppercase text-center font-['Anton'] leading-[1.01] tracking-tight 
            text-[20vw] sm:text-[16vw] md:text-[13vw] lg:text-[10vw] xl:text-[9vw]"
          >
            Ready <br />
            to start <br />
            the project
          </motion.h1>

        </div>

        {/* Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full font-semibold font-[Inter]
          mt-12 sm:mt-16 lg:mt-20 gap-5 sm:gap-6
          flex flex-col sm:flex-row justify-center items-center"
        >

          {/* Start Project Button */}
          <motion.button
            whileHover={{
              scale: 1.06,
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="group relative overflow-hidden bg-white text-[#111]
            uppercase rounded-full transition-all duration-300
            px-8 py-2.5 sm:px-10 sm:py-4 lg:px-12 lg:py-5
            text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw]"
          >

            {/* Hover Background */}
            <span className="absolute inset-0 bg-[#b5f364] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>

            {/* Text */}
            <span className="relative z-10">
              Start The Project
            </span>

          </motion.button>

          {/* OR Text */}
          <motion.h1
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[#dcdada]
            text-[4vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw]"
          >
            OR
          </motion.h1>

          {/* Email Button */}
          <motion.button
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="group relative overflow-hidden border border-[#8a8989]
            rounded-full uppercase transition-all duration-500
            hover:border-[#b5f364]
            px-8 py-2.5 sm:px-10 sm:py-4 lg:px-12 lg:py-5
            text-[3vw] sm:text-[1.9vw] md:text-[1.3vw] lg:text-[0.95vw]
            break-all sm:break-normal"
          >

            {/* Hover Fill */}
            <span className="absolute inset-0 bg-[#b5f364] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>

            {/* Text */}
            <span className="relative z-10 group-hover:text-black transition-all duration-300">
              hello123@zenvyra.design
            </span>

          </motion.button>

        </motion.div>
      </div>
    </div>
  );
}

export default StartProject;