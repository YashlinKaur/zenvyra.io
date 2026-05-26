import React from "react";
import { TbMessages } from "react-icons/tb";
import { motion } from "framer-motion";

function FooterContact() {
  return (
    <div className="relative w-full bg-[#060606] text-white px-4 sm:px-6 lg:px-[3vw] py-10 overflow-hidden">

      {/* Glow */}
      <div className="absolute left-[20%] top-[10%] w-[300px] h-[300px] bg-[#b5f364]/5 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full border border-[#232323] rounded-3xl bg-[#0b0b0b] px-6 sm:px-8 lg:px-[5vw] py-10 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_0_40px_rgba(181,243,100,0.03)] hover:border-[#b5f364]/40 transition-all duration-500"
      >

        {/* LEFT ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-[18%] flex justify-center items-center"
        >

          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] border border-[#1f1f1f] rounded-full flex justify-center items-center animate-spin-slow">

            <div className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] border border-[#252525] rounded-full flex justify-center items-center">

              <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] border border-[#2d2d2d] rounded-full flex justify-center items-center bg-[#111]">

                <TbMessages className="text-[#b5f364] absolute text-[45px] sm:text-[55px]" />

                <div className="about-shadow w-full h-full border border-[#b5f364] rounded-full animate-pulse"></div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* CENTER CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='w-full lg:w-[50%] font-["Inter"] text-center lg:text-left'
        >

          <h1 className='text-[35px] sm:text-[45px] lg:text-[50px] leading-[0.95] font-["Oswald"] uppercase mb-6'>
            Ready To Bring Your
            <span className="text-[#b5f364]"> Vision </span>
            To Life?
          </h1>

          <p className="text-[16px] sm:text-[17px] lg:text-[19px] text-[#c3bebe] leading-relaxed max-w-[700px]">
            Whether you have a question or a project, we’re just
            a message away.
          </p>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-[32%] flex flex-col items-center lg:items-start gap-6"
        >

          <button className='group bg-[#b5f364] text-black hover:bg-[#1a2418] hover:text-white py-4 px-10 rounded-2xl font-semibold font-["Inter"] uppercase tracking-wide transition-all duration-300 text-[15px] sm:text-[16px] shadow-[0_0_30px_rgba(181,243,100,0.12)] hover:scale-105'>
            <span className="group-hover:tracking-widest transition-all duration-300">
              Start A Project
            </span>
          </button>

          <h1 className='text-[14px] sm:text-[16px] font-["Inter"] text-[#9ea39d] text-center lg:text-left'>
            No strings attached. Just possibilities.
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FooterContact;