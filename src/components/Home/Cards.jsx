import React from "react";
import { motion } from "framer-motion";

function Cards() {

  const HomeCard = [
    {
      id: "01",
      category: "DEVELOPMENT",
      title: "Frontend Development",
      description:
        "High-performance websites built with modern technologies and smooth, interactive experiences.",
      tags: ["Pixel Perfect", " • ", "Fast", " • ", "Scalable"],
    },

    {
      id: "02",
      category: "DESIGN",
      title: "UI / UX Design",
      description:
        "Clean, minimal and user-focused designs that create clarity and engagement.",
      tags: ["Intuitive", " • ", "Clean", " • ", "Engaging"],
    },

    {
      id: "03",
      category: "BRAND EXPERIENCE",
      title: "Brand Experience",
      description:
        "Digital identity and experiences that help brands stand out and leave a lasting impact.",
      tags: ["Identity", " • ", "Strategy", " • ", "Impact"],
    },
  ];

  return (
    <div className="w-full min-h-screen border-t border-[#8a8989] text-white px-5 sm:px-8 md:px-12 lg:px-[5vw] py-16 lg:py-[8vh] flex flex-col gap-10 lg:gap-14 overflow-hidden relative bg-black">

      {/* Green Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute left-0 top-0 w-[40vw] h-full bg-[#b5f364]/10 blur-[120px] pointer-events-none"
      ></motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 font-[Inter] tracking-tight max-w-[1700px]
        text-[5vw] leading-[6.5vw] sm:text-[5vw] sm:leading-[6vw]
        md:text-[5vw] md:leading-[6vw] lg:text-[3.2vw] lg:leading-[4vw]"
      >
        We craft <span className="text-[#b5f364]"> immersive </span>
        digital experiences focused on modern interaction, refined motion,
        and cinematic visual storytelling.
      </motion.h1>

      {/* Cards Section */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 overflow-hidden">

        {HomeCard.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}

            className="group relative w-full bg-white/[0.03] backdrop-blur-xl rounded-[28px] p-6
            flex flex-col justify-between transition-all duration-500 border border-[#5d5d5d]
            hover:border-[#b5f364] hover:bg-white/[0.05]
            min-h-[350px] sm:min-h-[380px] md:min-h-[420px] sm:p-8 lg:p-10 overflow-hidden"
          >

            {/* Hover Glow */}
            <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="absolute -top-20 -right-20 w-[200px] h-[200px] bg-[#b5f364]/10 blur-[90px] rounded-full"></div>
            </motion.div>

            {/* TOP CONTENT */}
            <div className="relative z-10 flex flex-col gap-6 sm:gap-8">

              {/* Category */}
              <h1 className="uppercase tracking-wide font-[Inter]
                text-[3.5vw] sm:text-[2.4vw] md:text-[1.8vw] lg:text-[1.1vw]">
                <span className="text-[#b5f364]">
                  {card.id}
                </span> / {card.category}
              </h1>

              {/* Title */}
              <div className="flex flex-col gap-3">

                <h1 className="font-[Inter] leading-tight
                      text-[5.5vw] sm:text-[5vw] md:text-[3vw] lg:text-[2vw]">
                  {card.title}
                </h1>

                {/* Animated Line */}
                <div className="h-[2px] w-12 bg-[#b5f364] rounded-full"></div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
                className="text-[#dcdada] font-[Inter] leading-relaxed
                text-[4.2vw] sm:text-[2.7vw] md:text-[1.8vw] lg:text-[1.1vw]"
              >
                {card.description}
              </motion.p>
            </div>

            {/* TAGS */}
            <div className="relative z-10 mt-10">

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                className="w-fit border border-[#b5f364] text-[#b5f364]
                px-5 py-2.5 font-[Inter] rounded-full
                group-hover:bg-[#b5f364]
                group-hover:text-black transition-all duration-300
                text-[3.5vw] sm:text-[2.3vw] md:text-[1.5vw] lg:text-[0.95vw]"
              >
                {card.tags}
              </motion.div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cards;