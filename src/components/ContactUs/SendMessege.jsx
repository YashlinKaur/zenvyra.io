import React from "react";
import { motion } from "framer-motion";
import { GoLock } from "react-icons/go";
import { TbLocation, TbTargetArrow } from "react-icons/tb";
import { RxPeople } from "react-icons/rx";

const SendMessege = () => {
  const features = [
    {
      icon: <TbLocation />,
      title: "Quick Response",
      desc: "We reply within 24 hours.",
    },
    {
      icon: <RxPeople />,
      title: "Let's Collaborate",
      desc: "Great ideas deserve the right partnership.",
    },
    {
      icon: <TbTargetArrow />,
      title: "Results That Matter",
      desc: "We focus on impact, quality, and long-term success.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully ");

    e.target.reset();
  };

  return (
    <div className="relative w-full min-h-screen bg-[#080808] text-white px-4 sm:px-6 lg:px-[3vw] py-10 flex flex-col lg:flex-row gap-10 overflow-hidden">
      {/* Glow */}
      <div className="absolute right-[-10%] top-[20%] w-[350px] h-[350px] bg-[#b5f364]/5 blur-[120px] rounded-full"></div>

      {/* LEFT SECTION */}
      <div className="relative z-10 w-full lg:w-[40%] flex flex-col gap-13 mt-7">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              borderColor: "#b5f364",
            }}
            className="relative border border-[#232323] rounded-3xl bg-[#0d0d0d] px-6 py-7 flex flex-col items-center text-center transition-all duration-300"
          >
            {/* Icon Circle */}
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              className="absolute -top-8 w-[60px] h-[60px] border border-[#2d2d2d] rounded-full flex justify-center items-center text-[28px] text-[#b5f364] bg-[#080808] shadow-[0_0_30px_rgba(181,243,100,0.08)]"
            >
              {item.icon}
            </motion.div>

            <div className="mt-6">
              <h1 className="text-[22px] sm:text-[26px] font-semibold text-[#b5f364] uppercase tracking-wide">
                {item.title}
              </h1>

              <p className="text-[15px] sm:text-[18px] text-[#d4d4d4] mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* RIGHT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 w-full lg:w-[60%] border border-[#232323] rounded-3xl bg-[#0d0d0d] py-9 px-5 sm:px-8 lg:px-[3vw] flex flex-col gap-5 shadow-[0_0_40px_rgba(181,243,100,0.03)]"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-[24px] sm:text-[21px] uppercase font-["Inter"] text-[#f3f3f3] tracking-wide'
        >
          Send Us A Message
        </motion.h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-[#080808] px-5 py-3 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#b5f364] text-[15px] sm:text-[17px] placeholder:text-gray-500 transition-all"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full bg-[#080808] px-5 py-3 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#b5f364] text-[15px] sm:text-[17px] placeholder:text-gray-500 transition-all"
          />

          <input
            type="text"
            placeholder="Company (Optional)"
            className="w-full bg-[#080808] px-5 py-3 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#b5f364] text-[15px] sm:text-[17px] placeholder:text-gray-500 transition-all"
          />

          <input
            type="text"
            placeholder="Subject"
            required
            className="w-full bg-[#080808] px-5 py-3 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#b5f364] text-[15px] sm:text-[17px] placeholder:text-gray-500 transition-all"
          />

          <textarea
            placeholder="Tell us about your project..."
            className="w-full bg-[#080808] px-5 py-2 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#b5f364] text-[15px] sm:text-[17px] placeholder:text-gray-500 h-[220px] sm:h-[130px] resize-none transition-all"
          />

          <motion.button
            type="submit"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 1,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className='bg-[#b5f364] text-black hover:bg-[#cbdfc7]  font-semibold uppercase py-3 font-["Inter"] w-full mt-3 rounded-md transition-all duration-300 tracking-wide text-[15px] sm:text-[16px]'
          >
            Send Message
          </motion.button>
        </form>

        {/* Privacy */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.1,
          }}
          viewport={{ once: true }}
          className='text-[13px] sm:text-[15px] mt-3 flex items-center gap-2 text-[#9fa59c] font-["Inter"]'
        >
          <GoLock />
          Your information is safe with us. We respect your privacy.
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default SendMessege;
