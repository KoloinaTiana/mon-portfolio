import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import Avatarprofile from "./Avatar";

export default function Navbar() {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 830); // You can adjust the breakpoint here
    };

    handleResize(); // Call once on initial load

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const navbarHeight = document.querySelector("header").offsetHeight;

      setIsNavbarTransparent(scrollTop <= navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonStyle = {
    backgroundColor: isHovered ? "#633e57" : "#805271",
  };

  return (
    <header
      className={`md:fixed top-0 z-20 w-full 
      ${
        isSmallScreen
          ? "bg-[#B284A3]" // Si c'est un petit écran, applique bg-[#B284A3]
          : isNavbarTransparent
          ? "bg-transparent" // Si c'est un grand écran et la navbar est transparente, applique bg-[#B284A3]
          : "bg-[#B284A3]" // Si c'est un grand écran et la navbar n'est pas transparente, applique bg-[#B284A3]
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#presentation" className="ml-3 shadow-[0_4px_9px_-4px_#5c595b]">
            <Avatarprofile/>
          </a>
        </a>
        {isSmallScreen ? null : (
          <nav className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-500 flex flex-wrap items-center ${isNavbarTransparent ? "text-[#B284A3]" : "text-base"} justify-center`}>
            <a href="#parcours" className="mr-5 hover:text-white">
              Parcours
            </a>
            <a href="#experience" className="mr-5 hover:text-white">
              Expériences professionnelles
            </a>
            <a href="#competence" className="mr-5 hover:text-white">
              Compétences
            </a>
            
            {/* <a href="#projet" className="mr-5 hover:text-white">
              Projets
            </a>
            <a href="#interet" className="mr-5 hover:text-white">
              Centres d'intérêts
            </a> */}
            
          </nav>
        )}
        <a
          href="mailto:koloinamyron@gmail.com"
          style={buttonStyle}
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-white shadow-[0_4px_9px_-4px_#5c595b] mt-4 md:mt-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Contact
          <ArrowLongRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}