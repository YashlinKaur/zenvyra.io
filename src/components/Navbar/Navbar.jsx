import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "About us",
      path: "/aboutus",
    },
    {
      name: "Insights",
      path: "/insights",
    },
    {
      name: "Contact us",
      path: "/contactus",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className='fixed top-0 left-0 z-[999] w-full flex justify-between items-center px-[5vw] md:px-[3.5vw] py-[3vh] md:py-[3vh] bg-black/30 backdrop-blur-md border-b border-[#1d1d1d]'>

        {/* Logo */}
        <div className="w-[22vw] sm:w-[16vw] md:w-[10vw] z-[1000]">
          <Link to="/">
            <img src="logo.png" alt="Logo" className="w-full object-cover"/>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 uppercase font-semibold text-[#d5d1d1]">
          {navLinks.map((item, index) => (
            <Link key={index} to={item.path} className=" text-[1rem] tracking-wide hover:text-[#b5f364] transition-all duration-300">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-3xl z-[1000]"
          onClick={() => setMenuOpen(true)}>
          <HiOutlineMenu />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed top-0 right-0 h-screen w-[80%] sm:w-[60%] bg-[#050505] border-l border-[#232323] z-[9999] transform transition-transform duration-500 ease-in-out
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}>

        {/* Glow */}
        <div className="absolute top-[10%] right-[-20%] w-[250px] h-[250px] bg-[#b5f364]/10 blur-[100px] rounded-full"></div>

        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button className="text-white text-3xl hover:text-[#b5f364] transition-all duration-300 "
              onClick={() => setMenuOpen(false)} >
            <HiOutlineX />
          </button>
        </div>

        {/* Nav Links */}
        <div className="relative z-10 flex flex-col px-8 pt-10 gap-8">
          {navLinks.map((item, index) => (
            <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} 
                className="uppercase font-['Oswald'] text-[#f5f5f5] border-b border-[#1f1f1f]  pb-4
                text-[5vw] sm:text-[3vw] hover:text-[#b5f364] hover:translate-x-2 transition-all duration-300">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-8 left-8 text-[#7d7d7d] text-sm uppercase tracking-widest">
          Creative Digital Studio
        </div>
      </div>

      {/* OVERLAY */}
      <div onClick={() => setMenuOpen(false)} className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-all duration-500
          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}></div>
    </>
  );
}

export default Navbar;