import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

import { CiGrid41 } from "react-icons/ci";
import { LuPalette } from "react-icons/lu";
import { LuCodeXml } from "react-icons/lu";
import { LuBadgeDollarSign } from "react-icons/lu";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { LuCpu } from "react-icons/lu";
import { LuTrendingUp } from "react-icons/lu";

import { MdOutlineCalendarToday } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { FiTrendingUp } from "react-icons/fi";

function FeaturedInsights() {

  const topics = [
    { name: "All Insights", icon: <CiGrid41 /> },
    { name: "Design", icon: <LuPalette /> },
    { name: "Development", icon: <LuCodeXml /> },
    { name: "Brand", icon: <LuBadgeDollarSign /> },
    { name: "Strategy", icon: <LuBriefcaseBusiness /> },
    { name: "Technology", icon: <LuCpu /> },
    { name: "Trends", icon: <LuTrendingUp /> },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden relative
    px-4 sm:px-6 lg:px-[4vw] py-8 sm:py-[8vh] lg:py-[7vh]">

      {/* Glow */}
      <div className="w-[400px] h-[400px] absolute left-[-10%] top-[20%] bg-[#b5f364]/5 blur-[120px] rounded-full"></div>

      {/* Browse Topics */}
      <motion.div
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
        }}
        className="relative z-10 border border-[#2a3a30] rounded-3xl backdrop-blur-md bg-[#101a14]/40"
      >

        {/* Top Header */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5 lg:px-[2vw] py-5">

          <h1 className="text-[16px] sm:text-[18px] md:text-[20px] uppercase text-[#b5f364] tracking-wide">
            Browse by Topics
          </h1>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            className="px-5 py-2 uppercase border border-[#4f5a52] text-[13px] sm:text-[15px] rounded-2xl flex items-center gap-2 hover:bg-[#b5f364] hover:text-black transition-all duration-300"
          >
            View All Articles
            <GoArrowUpRight className="text-[20px]" />
          </motion.button>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 px-4 pb-6">

          {topics.map((topic, index) => (
            <motion.div
              key={index}
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
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group flex flex-col items-center justify-center py-5 rounded-2xl border border-transparent hover:border-[#b5f364] hover:bg-[#18241d] transition-all duration-300 cursor-pointer"
            >

              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 6,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="text-[32px] sm:text-[38px] text-[#b5f364]"
              >
                {topic.icon}
              </motion.div>

              <h1 className="text-[14px] sm:text-[16px] mt-2 text-center">
                {topic.name}
              </h1>
            </motion.div>
          ))}

        </div>
      </motion.div>

      {/* Featured Insights */}
      <div className="relative z-10 w-full mt-14 flex flex-col lg:flex-row gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="w-full lg:w-[45%]"
        >

          <h1 className="text-[19px] sm:text-[24px] uppercase text-[#b5f364] font-semibold tracking-wide">
            Featured Insights
          </h1>

          <h1 className='text-[37px] sm:text-[55px] lg:text-[55px] leading-[1] py-6 font-["Oswald"] uppercase'>
            The Future of
            <br />
            Immersive Digital
            <br />
            Experiences
          </h1>

          <p className="text-[15px] sm:text-[18px] lg:text-[20px] leading-relaxed text-[#c7c7c7] max-w-[700px]">
            As technology evolves, so do the ways we connect with brands. Immersive experiences are no longer a luxury — they’re becoming the new digital standard.
          </p>

          {/* CTA */}
          <motion.div
            whileHover={{
              x: 6,
            }}

            className="text-[17px] sm:text-[20px] mt-10 font-semibold uppercase flex items-center gap-3 cursor-pointer group w-fit"
          >

            <span className="text-[#b4f362]">
              Read Full Article
            </span>

            <GoArrowUpRight className="text-[23px] sm:text-[21px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            />

          </motion.div>

          {/* Meta Info */}
          <div className='flex flex-wrap items-center mt-6 gap-3 text-[14px] sm:text-[14px] text-[#9d9d9d] font-["Inter"]'>

            <div className="flex items-center gap-2">
              <MdOutlineCalendarToday />
              <p>May 20, 2024</p>
            </div>

            <span>•</span>

            <div className="flex items-center gap-2">
              <IoIosTimer />
              <p>7 min read</p>
            </div>

            <span>•</span>

            <div className="flex items-center gap-2">
              <FiTrendingUp />
              <p>Strategy, Trends</p>
            </div>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -6,
          }}

          className="w-full lg:w-[55%] h-[300px] sm:h-[450px] lg:h-[550px] border border-[#2d3a31] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(181,243,100,0.08)]"
        >

          <motion.img
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.7,
            }}

            src="insights.png"
            alt="Featured Insights"
            className="w-full h-full object-cover"
          />

        </motion.div>

      </div>
    </div>
  );
}

export default FeaturedInsights;