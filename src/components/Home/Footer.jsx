import React from "react";

function Footer() {
  return (
    <div className="w-full bg-black pt-10 overflow-hidden text-[#e0e2df]">

      {/* Footer */}
      <div className="w-full bg-[#486b34] rounded-t-[60px] 
          sm:rounded-t-[90px] md:rounded-t-[140px] lg:rounded-t-[220px]
          px-5 sm:px-8 md:px-12 lg:px-[4.5vw] pt-14 sm:pt-20 lg:pt-[8vh] pb-8">

        {/* SECTION */}
        <div className="w-full flex flex-col lg:flex-row gap-14 lg:gap-10">

          {/* LEFT SECTION */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">

            {/* Big Heading */}
            <div className="flex flex-col items-start lg:items-end mb-14">
              <h1 className=" font-[Oswald] font-semibold uppercase tracking-tight leading-none
                  text-[18vw] sm:text-[15vw] md:text-[11vw] lg:text-[7vw]">
                IMMERSIVE
              </h1>
              <h1 className="font-[Oswald] font-semibold uppercase tracking-tight leading-none
                  text-[18vw] sm:text-[15vw] md:text-[11vw] lg:text-[7vw]">
                DIGITAL
              </h1>
            </div>

            {/* Logo & Copyright */}
            <div className="flex flex-col gap-5">
              <img src="logo.png" alt="Logo" className=" w-[120px] sm:w-[150px] md:w-[180px] lg:w-[12vw]"/>
              <h1 className="font-[Inter] text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1vw]">
                © 2026 ZENVYRA — All rights reserved
              </h1>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:w-1/2 flex flex-col">

            {/* Big Heading */}
            <h1 className=" font-[Oswald] font-semibold uppercase tracking-tight leading-none  mb-10 lg:mb-[8vh]
                text-[18vw] sm:text-[15vw] md:text-[11vw] lg:text-[7vw]">
              EXPERIENCES
            </h1>

            {/* Social */}
            <div className="font-[Inter] text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1vw] mb-10 lg:mb-[6vh]">
              <h1 className="mb-4 font-bold underline">
                Social:
              </h1>
              <a className="block hover:text-black transition-all duration-300 cursor-pointer"> LinkedIn </a>
              <a className="block hover:text-black transition-all duration-300 cursor-pointer"> Facebook </a>
              <a className="block hover:text-black transition-all duration-300 cursor-pointer"> Instagram </a>
              <a className="block hover:text-black transition-all duration-300 cursor-pointer"> Behance </a>
            </div>

            {/* Contact + Menu */}
            <div className="flex flex-col sm:flex-row justify-between gap-10">

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
                <a className="block hover:text-black transition-all duration-300 cursor-pointer"> Home </a>
                <a className="block hover:text-black transition-all duration-300 cursor-pointer"> Services </a>
                <a className="block hover:text-black transition-all duration-300 cursor-pointer"> Our work </a>
                <a className="block hover:text-black transition-all duration-300 cursor-pointer"> About us </a>
                <a className="block hover:text-black transition-all duration-300 cursor-pointer"> Insights </a>
                <a className="block hover:text-black transition-all duration-300 cursor-pointer"> Contact us </a>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="font-[Inter] border-t border-[#c7c7c7] pt-4 text-center mt-10
                text-[3.8vw] sm:text-[2.2vw] md:text-[1.5vw] lg:text-[1vw]">
              <h1> Built with passion • Modern Interactive Experience </h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;