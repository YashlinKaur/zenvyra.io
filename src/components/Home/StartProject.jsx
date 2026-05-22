import React from "react";

function StartProject() {
  return (
    <div className="w-full min-h-screen border-t border-[#8a8989] py-20 sm:py-24 lg:py-32 px-5 sm:px-8 md:px-12 lg:px-[5vw] text-[#bdbdbd] overflow-hidden relative bg-black">

      {/* Green Glow Background */}
      <div className="absolute left-0 top-0 w-[40vw] h-full bg-[#b5f364]/10 blur-[120px] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">

        {/* Heading */}
        <h1 className="uppercase text-center font-['Anton'] leading-[1.01] tracking-tight 
            text-[20vw] sm:text-[16vw] md:text-[13vw] lg:text-[10vw] xl:text-[9vw]" >
          Ready <br />
          to start <br />
          the project
        </h1>

        {/* Buttons */}
        <div className=" w-full font-semibold font-[Inter]
            mt-12 sm:mt-16 lg:mt-20  gap-5 sm:gap-6 
            flex flex-col sm:flex-row justify-center items-center ">

          {/* Button 1 */}
          <button className=" bg-white text-[#111] uppercase rounded-full hover:scale-105 hover:bg-[#b5f364] transition-all duration-300 
              px-8 py-2.5 sm:px-10 sm:py-4 lg:px-12 lg:py-5
              text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] ">
            Start The Project
          </button>

          {/* OR Text */}
          <h1 className=" text-[#dcdada] text-[4vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw]">
            OR
          </h1>

          {/* Button 2 */}
          <button className=" border border-[#8a8989] rounded-full uppercase transition-all duration-300 hover:border-[#b5f364] hover:text-[#b5f364]
              px-8 py-2.5 sm:px-10 sm:py-4 lg:px-12 lg:py-5
              text-[3vw] sm:text-[1.9vw] md:text-[1.3vw] lg:text-[0.95vw]
              break-all sm:break-normal">
            hello123@zenvyra.design
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default StartProject;