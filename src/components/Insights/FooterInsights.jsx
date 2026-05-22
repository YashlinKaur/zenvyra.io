import React from "react";
import { CiMail } from "react-icons/ci";

function FooterInsights() {
  return (
    <div className="w-full bg-black text-white px-4 sm:px-6 lg:px-[3vw] py-10 lg:py-[5vh] overflow-hidden">
      
      <div className="w-full border border-[#26352b] rounded-3xl p-6 sm:p-8 lg:p-[2vw] flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#101a14]/40 backdrop-blur-md">
        
        {/* Left Icon Section */}
        <div className="w-full lg:w-[20%] flex justify-center items-center">
          
          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] border border-[#1f2b22] rounded-full flex justify-center items-center">
            
            <div className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] border border-[#243328] rounded-full flex justify-center items-center">
              
              <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] border border-[#2d3e33] rounded-full flex justify-center items-center">
                
                <CiMail className="text-[#b5f364] absolute text-[45px] sm:text-[55px]" />

                <div className="about-shadow w-full h-full border border-[#b5f364] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Content */}
        <div className='w-full lg:w-[40%] font-["Inter"] text-center lg:text-left'>
          
          <h3 className="text-[16px] sm:text-[18px] uppercase tracking-wide text-[#b5f364]">
            Stay Inspired
          </h3>

          <h1 className="text-[32px] sm:text-[42px] lg:text-[45px] leading-[1.05] py-4 font-['Oswald'] uppercase">
            Stay Ahead With <br />
            Insights That Matter
          </h1>

          <p className="text-[15px] sm:text-[18px] lg:text-[19px] text-[#bdbdbd] leading-relaxed">
            Subscribe to our newsletter and get the latest articles, trends, and ideas delivered straight to your inbox.
          </p>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-[40%] flex flex-col gap-5">
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center border border-[#3a4a40] rounded-3xl overflow-hidden bg-[#0f1712]">
            
            <input type="email" placeholder="Enter your email" className="w-full bg-transparent px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none text-[15px] sm:text-[17px]"/>

            <button className="bg-[#b5f364] text-black px-8 py-4 uppercase font-semibold hover:bg-[#d4ff98] transition-all duration-300 text-[14px] sm:text-[15px]">
              Subscribe
            </button>
          </div>

          <h1 className='text-[14px] sm:text-[16px] font-["Inter"] text-[#8f8f8f] text-center sm:text-left'>
            No spam. Unsubscribe anytime.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FooterInsights;