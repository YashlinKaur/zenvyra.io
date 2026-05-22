// ================= SEND MESSAGE =================

import React from "react";
import { GoLock } from "react-icons/go";
import { TbLocation } from "react-icons/tb";
import { RxPeople } from "react-icons/rx";
import { TbTargetArrow } from "react-icons/tb";

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

  return (
    <div className="relative w-full min-h-screen bg-[#080808] text-white px-4 sm:px-6 lg:px-[3vw] py-10 flex flex-col lg:flex-row gap-10 overflow-hidden">

      {/* Glow */}
      <div className="absolute right-[-10%] top-[20%] w-[350px] h-[350px] bg-[#b5f364]/5 blur-[120px] rounded-full"></div>

      {/* LEFT SECTION */}
      <div className="relative z-10 w-full lg:w-[40%] flex flex-col gap-10">

        {features.map((item, index) => (
          <div key={index} className="relative border border-[#232323] rounded-3xl bg-[#0d0d0d] px-6 py-10 flex flex-col items-center text-center hover:border-[#b5f364] transition-all duration-300" >

            {/* Icon Circle */}
            <div className="absolute -top-8 w-[75px] h-[75px] border border-[#2d2d2d] rounded-full flex justify-center items-center text-[32px] text-[#b5f364] bg-[#080808] shadow-[0_0_30px_rgba(181,243,100,0.08)]">
              {item.icon}
            </div>

            <div className="mt-10">
              <h1 className="text-[22px] sm:text-[26px] font-semibold text-[#b5f364] uppercase tracking-wide">
                {item.title}
              </h1>

              <p className="text-[15px] sm:text-[18px] text-[#d4d4d4] mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SECTION */}
      <div className="relative z-10 w-full lg:w-[60%] border border-[#232323] rounded-3xl bg-[#0d0d0d] py-8 px-5 sm:px-8 lg:px-[3vw] flex flex-col gap-5 shadow-[0_0_40px_rgba(181,243,100,0.03)]">

        <h1 className='text-[24px] sm:text-[30px] uppercase font-["Inter"] text-[#f3f3f3] mb-2 tracking-wide'>
          Send Us A Message
        </h1>

        {/* Inputs */}
        <input type="text" placeholder="Your Name" 
            className="w-full bg-[#080808] px-5 py-4 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#b5f364] text-[15px] sm:text-[17px] placeholder:text-gray-500 transition-all" />

        <input type="email" placeholder="Your Email" 
            className="w-full bg-[#080808] px-5 py-4 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#b5f364] text-[15px] sm:text-[17px] placeholder:text-gray-500 transition-all" />

        <input type="text" placeholder="Company (Optional)" 
            className="w-full bg-[#080808] px-5 py-4 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#b5f364] text-[15px] sm:text-[17px] placeholder:text-gray-500 transition-all" />

        <input type="text" placeholder="Subject" 
            className="w-full bg-[#080808] px-5 py-4 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#b5f364] text-[15px] sm:text-[17px] placeholder:text-gray-500 transition-all" />

        {/* Textarea */}
        <textarea placeholder="Tell us about your project..."
            className="w-full bg-[#080808] px-5 py-4 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#b5f364] text-[15px] sm:text-[17px] placeholder:text-gray-500 h-[220px] sm:h-[260px] resize-none transition-all">
        </textarea>

        {/* Button */}
        <button className='bg-[#b5f364] text-black hover:bg-[#1a2418] hover:text-white font-semibold uppercase py-4 font-["Inter"] w-full rounded-xl transition-all duration-300 tracking-wide text-[15px] sm:text-[16px]'>
          Send Message
        </button>

        {/* Privacy */}
        <h1 className='text-[13px] sm:text-[15px] flex items-center gap-2 mt-2 text-[#9fa59c] font-["Inter"]'>
          <GoLock />
          Your information is safe with us. We respect your privacy.
        </h1>
      </div>
    </div>
  );
};

export default SendMessege;