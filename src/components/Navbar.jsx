import logoSVG from "../assets/icons/logoSVG.svg";
import rightArrow from "../assets/icons/rightArrow.png";
import downArrow from "../assets/icons/downArrow.png";
import menaImage from "../assets/icons/menaImage.png";
import { useState } from "react";
import { FaTimes, FaArrowDown, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  const [Open, setOpen] = useState(false);
  const toggleP = () => setOpen(!Open);

  const [OpenNT, setOpenNT] = useState(false);
  const toggleNT = () => setOpenNT(!OpenNT);

  return (
    <div className="w-full max-w-[1920px] mx-auto relative">
      <section className=" px-4 py-4 flex justify-between items-center 2xl:px-[196px] xl:px-20 lg:px-8 md:px-6 sm:px-4 sm:py-4 bg-white/5 backdrop-blur-sm relative z-20">
        <div className="flex items-center cursor-pointer">
          <img src={logoSVG} alt="Logo" className="h-6 xl:h-6 sm:h-6" />
        </div>

        <div className="hidden lg:flex gap-6">
          
          <div className="group relative  flex items-center cursor-pointer">
            <p className="hover:text-[black]">Products</p>
            <img src={downArrow} alt="downArrow" className="w-4 h-4 ml-1" />
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:visible hover:visible hover-opacity-100 group-hover:opacity-100 transition-all duration-300 p-3 z-500">
              
              <ul className=" flex flex-col  gap-3 text-sm text-[#525252]">
                <li className="relative  hover:text-[black]">RAD Studio</li>
                <li className="hover:text-[black]">Delphi</li>
                <li className="hover:text-[black]">C++ Builder</li>
                <li className="hover:text-[black]">Inter Base</li>
                <li className="hover:text-[black]">RAD Server</li>
              </ul>
            </div>
          </div>

          <div className="group relative flex items-center cursor-pointer">
            <p className="hover:text-[black]">Free Tools</p>
            <img src={downArrow} alt="downArrow" className="w-4 h-4 ml-1" />
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 p-3">
              <ul className="flex flex-col gap-3 text-sm text-[#525252]">
                <li className="hover:text-[black]">C++ Compiler</li>
                <li className="hover:text-[black]">Delphi Community Ed.</li>
                <li className="hover:text-[black]">Rest Debugger</li>
                <li className="hover:text-[black]">FMX Stencils</li>
                <li className="hover:text-[black]">PyScripter</li>
                <li className="hover:text-[black]">CPP Check</li>
                <li className="hover:text-[black]">Python Libraries</li>
              </ul>
            </div>
          </div>

          <div className=" cursor-pointer group relative">
            Blog
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[black] transition-all duration-500 ease-out group-hover:w-full"></span>
          </div>

          <div className="group relative cursor-pointer hover:text-[black]">
            Resources
            <img
              src={downArrow}
              alt="downArrow"
              className="w-4 h-4 ml-1 inline"
            />
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 p-3">
              <ul className="flex flex-col gap-3 text-sm text-[#525252]">
                <li className="hover:text-[black]">Learn</li>
                <li className="hover:text-[black]">Engage</li>
                <li className="hover:text-[black]">Partner</li>
                <li className="hover:text-[black]">Support</li>
              </ul>
            </div>
          </div>

          <div className="cursor-pointer hover:text-[black] group relative">
            Getit
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[black] transition-all duration-500 ease-out group-hover:w-full"></span>
          </div>
          <div className="cursor-pointer hover:text-[black] group relative">
            New Tools
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[black] transition-all duration-500 ease-out group-hover:w-full"></span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-transparent hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD] hover:text-transparent hover:bg-clip-text rounded-lg py-2 px-3 cursor-pointer">
            Sign in
          </button>

          <button className="hidden sm:block border border-black rounded-lg py-2 px-3 font-medium text-black hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD] hover:text-transparent hover:bg-clip-text cursor-pointer">
            Buy now
          </button>

          <button className="bg-black cursor-pointer max-[305px]:hidden text-white rounded-lg py-2 px-3">
            Free trial
          </button>

          <div className="lg:hidden flex items-center ">
            <button onClick={toggleNavbar}>
              {isOpen ? (
                <FaTimes size={24} />
              ) : (
                <img src={menaImage} className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="absolute top-[70px] left-2 w-[calc(100%-1rem)] bg-gray-200 shadow-lg rounded p-4 flex flex-col gap-4 z-20"
          >
            <div className="flex justify-between items-center bg-gray-100  p-2 rounded cursor-pointer">
              <p>Products</p>
              <button onClick={toggleP}>
                {Open ? <FaTimes /> : <FaArrowDown />}
              </button>
            </div>
            {Open && (
              <div className="bg-gray-100 p-2 rounded flex flex-col gap-2 ">
                <p>RAD Studio</p>
                <p>Delphi</p>
                <p>C++ Builder</p>
                <p>Interbase</p>
              </div>
            )}

            <div className="flex justify-between items-center bg-gray-100 p-2 rounded cursor-pointer">
              <p>New Tools</p>
              <button onClick={toggleNT}>
                {OpenNT ? <FaTimes /> : <FaArrowDown />}
              </button>
            </div>
            {OpenNT && (
              <div className="bg-gray-100 p-2 rounded flex flex-col gap-2">
                <p>CPP Check</p>
                <p>Python</p>
                <p>REST Debugger</p>
                <p>PyScripter</p>
              </div>
            )}

            <div className="bg-gray-100 p-2 rounded cursor-pointer">Blog</div>
            <div className="bg-gray-100 p-2 rounded cursor-pointer">
              Resources
            </div>
            <div className="bg-gray-100 p-2 rounded cursor-pointer">Getit</div>
            <div className="bg-gray-100 p-2 rounded cursor-pointer">
              Free Tools
            </div>
            <div className="breaker h-[2px] bg-gray-400 hidden max-[640px]:block"></div>

            <div className="hidden max-[640px]:flex  flex-row gap-4">
              <button className=" w-full bg-transparent border border-black rounded-lg py-2 px-3 font-medium text-black hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD] hover:text-transparent hover:bg-clip-text cursor-pointer">
                Buy now
              </button>
              <button className=" w-full bg-transparent border border-black rounded-lg py-2 px-3 font-medium text-black hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD] hover:text-transparent hover:bg-clip-text cursor-pointer">
                Sing in
              </button>
            </div>
          </motion.div>
        )}
      </section>

      {/* Bottom Navbar */}
      <div className="flex flex-col gap-[16px] lg:flex-row justify-between items-center  rounded py-4  2xl:px-[196px] xl:px-20 lg:px-8 md:px-6 sm:px-4  sm:gap-4 bg-white sm:bg-transparent xl:relative xl:z-10">
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="font-medium text-sm text-black hover:text-gradient"
          >
            Home
          </a>
          <img src={rightArrow} alt=">" className="w-3 h-3" />
          <a
            href="#"
            className="font-medium text-sm text-black hover:text-gradient"
          >
            Products
          </a>
          <img src={rightArrow} alt=">" className="w-3 h-3" />
          <a href="#" className="font-medium text-sm text-[#E11D48]">
            RAD Studio
          </a>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <a
            href="#"
            className="group relative cursor-pointer leading-[150%] tracking-[0px]   hover:text-gradient text-[#262626]"
          >
            What's New?
            <span className="  w-full absolute left-0 bottom-[3px] h-[1px] bg-[#262626]"></span>
            {/* <span
              className=" w-0 group-hover:w-full absolute left-0 bottom-[3px] h-[2px] bg-[black]
            transition-all duration-500 ease-out"
            ></span> */}
          </a>
          <FaMinus className="text-gray-400 w-1.5" />
          <a
            href="#"
            className="relative hover:text-gradient text-[#262626] group"
          >
            Product Edition
            <span className=" w-full absolute left-0 bottom-[3px] h-[1px] bg-[#262626]"></span>
            {/* <span
              className=" w-0 group-hover:w-full absolute left-0 bottom-[3px] h-[2px] bg-[black]
            transition-all duration-500 ease-out"
            ></span> */}
          </a>
          <FaMinus className="text-gray-400 w-1.5" />
          <a
            href="#"
            className="relative hover:text-gradient text-[#262626] group"
          >
            Previous Version
            <span className=" w-full absolute left-0 bottom-[3px] h-[1px] bg-[#262626]"></span>
            {/* <span
              className=" w-0 group-hover:w-full absolute left-0 bottom-[3px] h-[2px] bg-[black]
            transition-all duration-500 ease-out"
            ></span> */}
          </a>
          <FaMinus className="text-gray-400 w-1.5" />
          <a
            href="#"
            className="relative hover:text-gradient text-[#262626] group"
          >
            Customers
            <span className=" w-full absolute left-0 bottom-[3px] h-[1px] bg-[#262626]"></span>
            {/* <span
              className=" w-0 group-hover:w-full absolute left-0 bottom-[3px] h-[2px] bg-[black]
            transition-all duration-500 ease-out"
            ></span> */}
          </a>
        </div>

        <div className=" flex flex-col max-[330px]:px-[3px] sm:hidden items-center gap-2">
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#"
              className="text-sm underline hover:text-gradient max-[330px]:text-[12px]"
            >
              What's New?
            </a>
            <FaMinus className="text-gray-400 w-1.5" />
            <a
              href="#"
              className="text-sm underline hover:text-gradient max-[330px]:text-[12px]"
            >
              Product Edition
            </a>
            <FaMinus className="text-gray-400 w-1.5" />
            <a
              href="#"
              className="text-sm underline hover:text-gradient max-[330px]:text-[12px]"
            >
              Previous Version
            </a>
          </div>
          <a
            href="#"
            className="text-sm underline hover:text-gradient max-[330px]:text-[12px]"
          >
            Customers
          </a>
        </div>
      </div>

      <div className="hidden xl:block 2xl:hidden w-full absolute max-w-[432px] h-[432px] bg-[#3B82F6] left-[-146px] top-[-192px] rounded-[100%] border border-[#FFFFFF] blur-[250px] opacity-[10%]"></div>
    </div>
  );
};

export default Navbar;
