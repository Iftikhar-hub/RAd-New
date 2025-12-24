import logoSVG from "../assets/icons/logoSVG.svg";
import rightArrow from "../assets/icons/rightArrow.png";
import downArrow from "../assets/icons/downArrow.png";
import menaImage from "../assets/icons/menaImage.png";

import { useState } from "react";
import { FaTimes, FaArrowDown, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openTools, setOpenTools] = useState(false);

  return (
    <div className="w-full">
     
      <section
        className="
          mx-auto flex justify-between items-center h-[70px] py-4
          px-[10px]
          sm:px-6
          md:px-[30px]
          lg:px-[60px]
          xl:px-[80px]
          2xl:px-[196px]
          bg-white/40 sm:relative backdrop-blur-2xl
        "
      >
        
        <div className="flex items-center cursor-pointer">
          <img src={logoSVG} alt="Logo" className="h-[24px] sm:max-w-[140px]" />
        </div>

    
        <div className="hidden lg:flex gap-6 text-sm">
          {[
            "Products",
            "Free Tools",
            "Blog",
            "Resources",
            "Getit",
            "New Tools",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-1 cursor-pointer hover:text-[#055e05]"
            >
              <p>{item}</p>
              {["Products", "Free Tools", "Resources"].includes(item) && (
                <img src={downArrow} className="w-[18px]" />
              )}
            </div>
          ))}
        </div>

       
        <div className="flex items-center gap-3 ">
          <button className="hidden md:block text-sm hover:text-pink-500">
            Sign in
          </button>

          <button className="hidden sm:block border px-3 py-2 rounded-[8px] text-sm hover:text-pink-500">
            Buy now
          </button>

          <button className="bg-[#262626] text-white px-4 py-2 rounded-[8px] text-sm hover:bg-[#565454]">
            Free trial
          </button>

         
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden ml-2">
            {isOpen ? (
              <FaTimes size={22} />
            ) : (
              <img src={menaImage} className="w-6" />
            )}
          </button>
        </div>
      </section>

     
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="lg:hidden mx-2 mt-4 bg-gray-200 rounded p-4 space-y-3"
        >
          
          <div className="bg-gray-100 p-2 rounded">
            <div className="flex justify-between items-center">
              <p>Products</p>
              <button onClick={() => setOpenProducts(!openProducts)}>
                <FaArrowDown />
              </button>
            </div>
            {openProducts && (
              <div className="mt-2 space-y-1 text-sm">
                <p>RAD Studio</p>
                <p>Delphi</p>
                <p>C++ Builder</p>
                <p>InterBase</p>
              </div>
            )}
          </div>

          
          <div className="bg-gray-100 p-2 rounded">
            <div className="flex justify-between items-center">
              <p>New Tools</p>
              <button onClick={() => setOpenTools(!openTools)}>
                <FaArrowDown />
              </button>
            </div>
            {openTools && (
              <div className="mt-2 space-y-1 text-sm">
                <p>CPP Check</p>
                <p>Python</p>
                <p>REST Debugger</p>
                <p>PyScripter</p>
              </div>
            )}
          </div>

          {["Blog", "Resources", "Getit", "Free Tools"].map((item, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded">
              {item}
            </div>
          ))}
        </motion.div>
      )}

      
      <div
        className="
          mx-auto flex flex-col md:flex-row justify-between items-center gap-4
          px-[10px]
          sm:px-6
          md:px-[30px]
          lg:px-[60px]
          xl:px-[80px]
          2xl:px-[192px]
          py-4
        "
      >
        
        <div className="flex items-center gap-2 text-sm">
          <a className="hover:text-pink-500">Home</a>
          <img src={rightArrow} className="w-3" />
          <a className="hover:text-pink-500">Products</a>
          <img src={rightArrow} className="w-3" />
          <a className="text-pink-600">RAD Studio</a>
        </div>

      
        <div className="hidden md:flex items-center gap-4 text-sm">
          {[
            "What's New?",
            "Product Edition",
            "Previous Version",
            "Customers",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <a className="underline hover:text-pink-500">{item}</a>
              {i < 3 && <FaMinus className="text-gray-400 text-xs" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
