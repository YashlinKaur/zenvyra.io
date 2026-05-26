import React from 'react'
import { motion } from "framer-motion";
import { services } from './service'
import { GoArrowRight } from "react-icons/go";

function CoreServices() {
  return (
    <div className='relative w-full min-h-screen py-12 bg-[#070707] border-t border-b border-[#1c1c1c] text-white overflow-hidden'>

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
        className='relative z-10 py-5 md:py-10 flex flex-col gap-3 px-4'>

        <h1 className='text-[14px] sm:text-[16px] md:text-[18px] text-center font-bold uppercase text-[#b5f364] tracking-widest'>
          what we do
        </h1>

        <h1 className='text-2xl sm:text-3xl md:text-5xl text-center font-bold uppercase leading-tight'>
          Our Core Services
        </h1>

      </motion.div>

      {/* Services */}
      <div className='relative z-10 w-full gap-6 px-4 sm:px-6 lg:px-10
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>

        {services.map((service, index) => (
          <motion.div
            key={service.id}
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
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
            }}

            className='group border border-[#232323]
            bg-[#0b0b0b] rounded-2xl p-6
            flex flex-col justify-between gap-5
            hover:border-[#b5f364]
            hover:bg-[#10150d]
            transition-all duration-300
            min-h-[350px]
            shadow-[0_0_40px_rgba(181,243,100,0.03)]
            overflow-hidden relative'>

            {/* Hover Glow */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>
              <div className='absolute top-[-20%] right-[-20%] w-[180px] h-[180px] bg-[#b5f364]/10 blur-[80px] rounded-full'></div>
            </div>

            {/* Number */}
            <h1 className='relative z-10 text-lg sm:text-xl font-semibold text-[#b5f364]'>
              {service.num}
            </h1>

            {/* Icon */}
            <div className='relative z-10 text-5xl sm:text-6xl text-[#b5f364]'>
              {service.icon && <service.icon />}
            </div>

            {/* Title */}
            <h2 className='relative z-10 text-xl sm:text-2xl font-semibold uppercase leading-snug'>
              {service.title}
            </h2>

            {/* Description */}
            <p className='relative z-10 text-sm sm:text-base text-gray-300 leading-relaxed'>
              {service.description}
            </p>

            {/* Arrow */}
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: -45,
              }}
              transition={{
                duration: 0.3,
              }}
              className='relative z-10 border h-11 w-11 rounded-full flex items-center justify-center border-[#b5f364] hover:bg-[#b5f364] hover:text-black transition-all duration-300'
              >
                <GoArrowRight className='text-2xl' />
            </motion.div>

          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CoreServices;