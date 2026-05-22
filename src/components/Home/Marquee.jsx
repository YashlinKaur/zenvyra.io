import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-black relative text-white">

      {/* Green Glow */}
      <div className="absolute left-0 top-0 w-[35vw] h-full bg-[#b5f364]/10 blur-[120px] pointer-events-none"></div>

      <div className=" w-full py-12 sm:py-16 md:py-20 lg:py-[10vh] overflow-hidden relative z-10">
        <div className="border-t border-b border-zinc-500 flex whitespace-nowrap">

          {/* First Text */}
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 10,
            }}
            className=" flex-shrink-0 uppercase font-[Oswald] font-bold tracking-tight text-[22vw] leading-none
              sm:text-[18vw] md:text-[14vw] lg:text-[11vw] xl:text-[20vw]
              py-4 sm:py-6 lg:py-[4vh] pr-10 sm:pr-16 lg:pr-20">
            INTERACTION • MOTION • EXPERIENCE • DESIGN • IMMERSIVE • MODERN •
          </motion.h1>

          {/* Duplicate Text */}
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 10,
            }}
            className="flex-shrink-0 uppercase font-[Oswald] font-bold tracking-tight text-[22vw] leading-none
              sm:text-[18vw] md:text-[14vw] lg:text-[11vw] xl:text-[20vw]
              py-4 sm:py-6 lg:py-[4vh] pr-10 sm:pr-16 lg:pr-20">
            INTERACTION • MOTION • EXPERIENCE • DESIGN • IMMERSIVE • MODERN •
          </motion.h1>

        </div>
      </div>
    </div>
  );
}

export default Marquee;