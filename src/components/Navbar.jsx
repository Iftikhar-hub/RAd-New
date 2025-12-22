// import logo from "../assets/icons/logo.png";
import logoSVG from "../assets/icons/logoSVG.svg";

import rightArrow from "../assets/icons/rightArrow.png";
import downArrow from "../assets/icons/downArrow.png";
import menaImage from "../assets/icons/menaImage.png";
import { useState } from "react";
import {  FaTimes, FaArrowRight, FaArrowDown, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  const [Open, setOpen] = useState(false);
  const toggleP = () => {
    setOpen(!Open);
  };

  const [OpenNT, setOpenNT] = useState(false);
  const toggleNT = () => {
    setOpenNT(!OpenNT);
  };

 

  return (
    <div
      className="contaner  w-[100%]
          max-[1440px]:max-w-[1440px]
          max-[768px]:max-w-[768px]
          max-[744px]:max-w-[744px]
          max-[375px]:w-full max-[375px]:max-w-[375px]"
    >
      <section
        className="max-w-[1920px] mx-auto h-[70px] px-[196px]  py-[16px] flex justify-between items-center
              max-[1440px]:max-w-[1440px] max-[1441px]:px-[80px] max-[1230px]:px-[30px]
              max-[768px]:max-w-[768px] max-[768px]:py-[16px] max-[768px]:px-[24px]
              max-[744px]:max-w-[744px] max-[744px]:py-[16px] max-[744px]:px-[24px]
              max-[747px]:relative max-[747px]:z-100 max-[747px]:bg-[#FFFFFF5C]

              max-[375px]:w-full max-[375px]:max-w-[375px]
              max-[377px]:bg-white/36 max-[377px]:backdrop-blur-[32px]"
      >
        <div
          className="log cursor-pointer flex items-center max-[1440px]:h-[24px] max-[1440px]:gap-[8px]
                
                "
        >
          <img
            src={logoSVG}
            alt="Logo"
            className="right-icon max-[747px]:max-w-[139px] max-[376px]:w-[237.6px] max-[376px]:h-[24px] "
          />
        </div>

        <div
          className="centerLinks flex gap-[15px] 
          max-[1024px]:gap-[4px]
                 max-[1440px]:gap-[24px]
                max-[1200px]:hidden"
        >
          <div className="Link-1 cursor-pointer flex items-center justify-center ">
            <p className="group relative hover:text-[#055e05]">
              Products
              <div
                className="absolute left-[-50px] top-[30px]  bg-white shadow-xl rounded-lg opacity-0 gap-[4px] p-[12px] z-20
               invisible transition-all duration-300 group-hover:visible group-hover:opacity-100"
              >
                <ul className="flex flex-col text-[14px] gap-[15px] font-inter  leading-[16px] text-[#525252]">
                  <li className="hover:text-[#055e05]">RAD Studio</li>
                  <li className="hover:text-[#055e05]">Delphi</li>
                  <li className="hover:text-[#055e05]">C++ Builder</li>
                  <li className="hover:text-[#055e05]">Inter Base</li>
                  <li className="hover:text-[#055e05]">RAD Server</li>
                </ul>
              </div>
            </p>
            <img
              src={downArrow}
              alt="downArrow"
              className="downArrow max-w-[19px] h-[19px]"
            />
          </div>
          <div className="Link-1 cursor-pointer flex items-center justify-center max-[1440px]:max-w-[100px]">
            <p className="FTpp w-full max-[1440px]:max-w-[90px] hover:text-[#055e05] relative group">
              Free Tools
              <div
                className="absolute left-[-50px] top-[30px] bg-white shadow-xl rounded-lg opacity-0  z-20 gap-[4px] p-[12px] 
               invisible transition-all duration-300 group-hover:visible group-hover:opacity-100"
              >
                <ul className="flex flex-col text-[14px] gap-[15px] font-inter leading-[16px] text-[#525252]">
                  <li className="hover:text-[#055e05] hover:bg-amber-100">
                    C++ Compiler
                  </li>
                  <li className="hover:text-[#055e05]">Delphi Communit Ed.</li>
                  <li className="hover:text-[#055e05]">Rest Debugger</li>
                  <li className="hover:text-[#055e05]">FMX Stencils</li>
                  <li className="hover:text-[#055e05]">PyScripter</li>
                  <li className="hover:text-[#055e05]">CPP Check</li>
                  <li className="hover:text-[#055e05]">Python Libraries</li>
                </ul>
              </div>
            </p>
            <img
              src={downArrow}
              alt="downArrow"
              className="downArrow max-w-[19px] h-[19px]"
            />
          </div>
          <div className="Link-1 hover:text-[#055e05] cursor-pointer flex items-center justify-center">
            <p>Blog</p>
          </div>
          <div className="Link-1 relative group cursor-pointer flex items-center justify-center">
            <p className="hover:text-[#055e05]">
              Resources
              <div
                className="absolute left-[-50px] top-[30px] bg-white shadow-xl rounded-lg  opacity-0  z-20 gap-[4px] p-[12px]
               invisible transition-all duration-300 group-hover:visible group-hover:opacity-100"
              >
                <ul className="flex flex-col text-[14px] gap-[15px] font-inter leading-[16px] text-[#525252]">
                  <li className="hover:text-[#055e05]">Learn</li>
                  <li className="hover:text-[#055e05]">Engage</li>
                  <li className="hover:text-[#055e05]">Partner</li>
                  <li className="hover:text-[#055e05]">Support</li>
                </ul>
              </div>
            </p>
            <img
              src={downArrow}
              alt="downArrow"
              className="downArrow max-w-[19px] h-[19px]"
            />
          </div>
          <div className="Link-1 flex cursor-pointer items-center justify-center">
            <p>Getit</p>
          </div>
          <div className="Link-1 flex cursor-pointer justify-center">
            <p className="ppppppp hover:text-[#055e05] w-full ">New Tools</p>
          </div>
        </div>

        <div
          className="w-full max-w-[280px] right-Buttons flex flex-row justify-between gap-[15px] 
                  max-[1440px]:max-w-[280px] max-[1440px]:h-[38px] max-[1440px]:gap-[12px]

                  max-[1200px]:max-w-[350px]  max-[1200px]:items-center
                  max-[1200px]:justify-end

                  
                  max-[747px]:max-w-[370px]  max-[747px]:items-center max-[747px]:flex max-[747px]:flex-row  max-[747px]:gap-[24px] 
                  max-[600px]:gap-[15px]
                
                  max-[425px]:justify-end"
        >
          <button
            className="btn cursor-pointer w-full max-w-[76px] h-[38px] rounded-lg py-[8px] px-[11px] gap-[10px]
                    max-[425px]:hidden
                    hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
                    hover:bg-clip-text hover:text-transparent"
            type="button"
          >
            Sign in
          </button>

          <button
            type="button"
            className="btn w-full max-w-[89px] h-[38px] rounded-lg border border-[#262626] py-[8px] px-[11px] gap-[10px] font-archivo font-medium text-[14px] leading-[22px] tracking-[0px] text-[#262626] cursor-pointer
            hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
                    hover:bg-clip-text hover:text-transparent
                    
           
            max-[470px]:hidden"
          >
            Buy now
          </button>

          <button
            type="button"
            className="btn w-full cursor-pointer max-w-[89px] h-[38px] rounded-lg border border-[#262626] bg-[#262626] flex items-center justify-center gap-[10px] font-archivo font-medium text-[14px] leading-[22px] tracking-[0px] text-white
            
            hover:bg-[#565454] max-[377px]:w-[91px] max-[377px]:h-[38px]"
          >
            Free trial
          </button>
          {/* <img
            src={menaImage}
            alt="menaImage"
            className="menueImage w-full max-w-[24px] h-[24px] hidden
            max-[1200px]:block
            "
          /> */}
          {/* Humbergur mobile view */}
          <div className="HamburgerMenue w-full  max-w-[24px] h-[24px] hidden max-[1200px]:block">
            <button
              onClick={toggleNavbar}
              className="text-neutral-600 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes size={24} />
              ) : (
                <img src={menaImage} className="w-[24px] h-[24px]" />
              )}
            </button>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute hidden max-[1200px]:flex top-[150px] left-[2px]  w-[98%] bg-gray-200 shadow-lg py-5 px-4 flex flex-col rounded-[5px] items-baseline   gap-4 text-[14px] text-black font-medium max-[1200px]:block z-20
              max-[744px]:top-[170px]
              max-[545px]:top-[200px]  
              "
            >
              <div className="Link-1 bg-gray-100 justify-between px-[10px] py-[5px] w-full rounded-[4px] flex gap-[5px] cursor-pointer">
                <p>Products</p>
                <button onClick={toggleP} className=" focus:outline-none">
                  {Open ? <FaTimes /> : <FaArrowDown />}
                </button>

                {Open && (
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute hidden max-[1200px]:flex top-[50px] left-[10px]  w-[98%] bg-gray-100 shadow-lg py-5 px-4 flex flex-col rounded-[5px] items-baseline   gap-4 text-[14px]  font-medium max-[1200px]:block z-20
                    max-[744px]:top-[60px]
                   max-[545px]:top-[50px] max-[503px]:w-[97%]   "
                  >
                    <p>RAD Studio</p>
                    <p>Delphi</p>
                    <p>C++ Builder</p>
                    <p>Interbase</p>
                  </motion.div>
                )}
              </div>
              <div className="Link-1 flex cursor-pointer bg-gray-100 justify-between px-[10px] py-[5px] w-full rounded-[4px] ">
                <p>New Tools</p>
                <button onClick={toggleNT} className=" focus:outline-none">
                  {OpenNT ? <FaTimes /> : <FaArrowDown />}
                </button>

                {OpenNT && (
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute hidden max-[1200px]:flex top-[100px] left-[10px]  w-[98%] bg-gray-100 shadow-lg py-5 px-4 flex flex-col rounded-[5px] items-baseline   gap-4 text-[14px]  font-medium max-[1200px]:block z-20
                    max-[744px]:top-[100px]
                   max-[545px]:top-[100px] max-[503px]:w-[97%]   "
                  >
                    <p>CPP Check</p>
                    <p>Python</p>
                    <p>REST Debugger</p>
                    <p>PyScripter</p>
                  </motion.div>
                )}
              </div>

              <div className="Link-1 flex cursor-pointer bg-gray-100 justify-between px-[10px] py-[5px] w-full rounded-[4px]">
                <p>Blog</p>
              </div>

              <div className="Link-1 flex cursor-pointer bg-gray-100 justify-between px-[10px] py-[5px] w-full rounded-[4px]">
                <p>Resources</p>
              </div>

              <div className="Link-1 flex cursor-pointer bg-gray-100 justify-between px-[10px] py-[5px] w-full rounded-[4px]">
                <p>Getit</p>
              </div>

              <div className="Link-1 flex cursor-pointerbg-[#333333] justify-between px-[10px] py-[5px] w-full rounded-[4px] ">
                <p>Free Tools</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <div
        className="navBottom max-w-[1920px] mx-auto h-[53px] flex justify-between items-center  
              rounded-[6px] py-[16px] px-[192px] 
              max-[1449px]:max-w-[1440px] max-[1449px]:h-[53px]  max-[1441px]:px-[80px] 
              max-[1230px]:px-[30px]
              
              
              max-[768px]:max-w-[768px] max-[768px]:h-[90px] max-[768px]:px-[24px] max-[768px]:py-[16px] max-[800px]:flex-col max-[800px]:gap-[16px]

              max-[744px]:max-w-[744px] max-[744px]:h-[90px] max-[744px]:px-[24px] max-[744px]:py-[16px] max-[744px]:flex-col max-[744px]:gap-[16px]
             
              max-[375px]:w-full max-[375px]:max-w-[375px] max-[375px]:flex-col "
      >
        <div className="navBottom-left flex items-center max-w-[228px] h-[21px] gap-[8px]">
          <a
            href="#"
            className="flex items-center max-w-[39px] h-[21px] gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626]
            
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent"
          >
            Home
          </a>

          <img
            src={rightArrow}
            alt="rightArrow"
            className="max-w-[12px] h-[12px]"
          />

          <a
            className="flex items-center max-w-[58px] h-[21px] gap-[10px] font-archivo font-medium text-[14px]  leading-[21px] tracking-[0px] text-[#262626]

              hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent"
            href="#"
          >
            Products
          </a>

          <img
            src={rightArrow}
            alt="rightArrow"
            className="max-w-[12px] h-[12px]"
          />

          <a
            className="flex items-center max-w-[76px] h-[21px] gap-[10px] font-archivo font-medium text-[14px] leading-[22px] tracking-[0px] text-[#E11D48]"
            href="#"
          >
            RAD Studio
          </a>
        </div>

        <div
          className="navBottom-right flex items-center h-[21px] gap-[8px]
                max-[500px]:grid max-[500px]:grid-cols-3 max-[500px]:max-w-[350px]
                max-[400px]:hidden"
        >
          <div className="flex items-center gap-2 max-[500px]:pl-3">
            <a
              className="flex items-center  gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline decoration-[#262626]
            
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent  hover:decoration-[#b67085]"
              href="#"
            >
              What's New?
            </a>
            <FaMinus className="text-[#A3A3A3] w-[5px] max-[400px]:hidden" />
          </div>

          <div className="flex items-center gap-2">
            <a
              className="flex items-center gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline
            
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent  hover:decoration-[#b67085]"
              href="#"
            >
              Product Edition
            </a>
            <FaMinus className="text-[#A3A3A3] w-[5px] max-[400px]:hidden" />
          </div>

          <div className="flex items-center gap-2 max-[400px]:pl-3">
            <a
              className="flex items-center  gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent  hover:decoration-[#b67085]"
              href="#"
            >
              Previous Version
            </a>
            <FaMinus className="text-[#A3A3A3] w-[5px] max-[500px]:hidden max-[400px]:hidden" />
          </div>

          <div>
            <a
              className="flex items-center gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline max-[500px]:ml-[135px] max-[400px]:ml-[0]
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent  hover:decoration-[#b67085]"
              href="#"
            >
              Customers
            </a>
          </div>
        </div>

        <div className="hidden max-[400px]:flex flex-col justify-center items-center gap-[8px]">
          <div
            className="hidden navBottom-right items-center h-[21px] w-full 
                 max-[400px]:flex justify-between 
                "
          >
            <div className="flex items-center gap-2 mx-auto  max-[376px]:mx-none">
              <a
                className="flex items-center  gap-[10px] font-archivo font-medium text-[14px] leading-[150%] tracking-[0px] text-[#262626] underline decoration-[#262626]
            
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent  hover:decoration-[#b67085]
              max-[363px]:text-[12px] max-[316px]:text-[11px]"
                href="#"
              >
                What's New?
              </a>
              <FaMinus className="text-[#A3A3A3] w-[5px] " />
            </div>

            <div className="flex items-center gap-2 mx-auto max-[376px]:mx-none">
              <a
                className="flex items-center gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline
            
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent  hover:decoration-[#b67085]
              max-[363px]:text-[12px] max-[316px]:text-[11px] "
                href="#"
              >
                Product Edition
              </a>
              <FaMinus className="text-[#A3A3A3] w-[5px] " />
            </div>

            <div className="flex items-center gap-2 ">
              <a
                className="flex items-center  gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent  hover:decoration-[#b67085]
              max-[363px]:text-[12px] max-[316px]:text-[11px]"
                href="#"
              >
                Previous Version
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 ">
            <a
              className="flex items-center  gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent  hover:decoration-[#b67085]
              max-[363px]:text-[12px] max-[316px]:text-[11px]"
              href="#"
            >
              Customers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
