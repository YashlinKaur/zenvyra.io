import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-black pt-10 overflow-hidden text-[#e0e2df]">

      {/* Footer */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      className="w-full bg-[#486b34] rounded-t-[60px] 
          sm:rounded-t-[90px] md:rounded-t-[140px] lg:rounded-t-[220px]
          px-5 sm:px-8 md:px-12 lg:px-[4.5vw] pt-14 sm:pt-20 lg:pt-[8vh] pb-8">

        {/* SECTION */}
        <div className="w-full flex flex-col lg:flex-row gap-14 lg:gap-10">

          {/* LEFT SECTION */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">

            {/* Big Heading */}
            <div className="flex flex-col items-start lg:items-end mb-14">
              <motion.h1
                initial={{ opacity : 0 , y: 100 }}
                whileInView={{ opacity : 1 ,  y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}

                className=" font-[Oswald] font-semibold uppercase tracking-tight leading-none
                  text-[18vw] sm:text-[15vw] md:text-[11vw] lg:text-[7vw]">
                IMMERSIVE
              </motion.h1>
              <motion.h1
                initial={{ opacity : 0 , y: 100 }}
                whileInView={{ opacity : 1 ,  y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
  
                className="font-[Oswald] font-semibold uppercase tracking-tight leading-none
                  text-[18vw] sm:text-[15vw] md:text-[11vw] lg:text-[7vw]">
                DIGITAL
              </motion.h1>
            </div>

             {/* Logo & Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="flex flex-col gap-5">

              <motion.img
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.2,
                }}
                src="logo.png"
                alt="Logo"
                className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[12vw]"
              />

              <h1 className="font-[Inter]
                text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1vw]">
                  © 2026 ZENVYRA — All rights reserved
              </h1>

            </motion.div>
          </div>


          {/* RIGHT SECTION */}
          <div className="w-full lg:w-1/2 flex flex-col">

            {/* Big Heading */}
            <motion.h1
                initial={{ opacity : 0 , y: 100 }}
                whileInView={{ opacity : 1 ,  y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}

                className=" font-[Oswald] font-semibold uppercase tracking-tight leading-none  mb-10 lg:mb-[8vh]
                  text-[18vw] sm:text-[15vw] md:text-[11vw] lg:text-[7vw]">
              EXPERIENCES
            </motion.h1>

            {/* Social */}
            <motion.div
                initial={{ opacity : 0 , y: 80 }}
                whileInView={{ opacity : 1 ,  y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-[Inter] text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1vw] mb-10 lg:mb-[6vh] w-fit">
              <h1 className="mb-4 font-bold underline">
                Social:
              </h1>
              <a className="footer-hover"> LinkedIn </a>
              <a className="footer-hover"> Facebook </a>
              <a className="footer-hover"> Instagram </a>
              <a className="footer-hover"> Behance </a>
            </motion.div>

            {/* Contact + Menu */}
            <motion.div
                initial={{ opacity : 0 , y: 80 }}
                whileInView={{ opacity : 1 ,  y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col sm:flex-row justify-between gap-10">

              {/* Contact */}
              <div className="font-[Inter] text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1vw]">
                <h1 className="mb-4 font-bold underline">
                  Contact:
                </h1>
                <a className="block"> hello123@zenvyra.design </a> <br />
                <a className="block"> 202-1955 W 5th </a>
                <a className="block"> Eva Vancouver, Canada </a> <br />
                <a className="block"> +1 (604) 123-4567 </a>
              </div>

              {/* Menu */}
              <div className="font-[Inter] text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1vw]">
                <h1 className="mb-4 font-bold underline">
                  Menu:
                </h1>
                <Link to="/" className="footer-hover"> Home </Link>
                <Link to="/services" className="footer-hover"> Services </Link>
                <Link to="/aboutus" className="footer-hover"> About us </Link>
                <Link to="/insights" className="footer-hover"> Insights </Link>
                <Link to="/contactus" className="footer-hover"> Contact us </Link>
              </div>
            </motion.div>

            {/* Bottom Line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 1,
                duration: 1,
              }}
              className="font-[Inter] border-t border-[#c7c7c7]
                pt-4 text-center mt-10
                text-[3.8vw] sm:text-[2.2vw] md:text-[1.5vw] lg:text-[1vw]">

              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                Built with passion • Modern Interactive Experience
              </motion.h1>

            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;