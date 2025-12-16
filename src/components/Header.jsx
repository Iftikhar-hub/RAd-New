// import { FaSearch, FaShoppingCart, FaGlobe } from "react-icons/fa";

import Search from "../assets/icons/Search.png";
import mart from "../assets/icons/mart.png";
import Languag from "../assets/icons/Languag.png";

const Header = () => {
    return (
      <section
        className="headerTopp w-[100%] relative bg-[#262626] text-white px-4 py-2
          max-[1440px]:max-w-[1440px] 
          max-[744px]:max-w-[744px]
          max-[375px]:max-w-[375px] z-[100]"
      >
        <div
          className="hd_t1 w-[100%] mx-auto flex justify-between items-center  
               py-[16px]
               
               max-[1440px]:w-[100%] max-[1441px]:px-[70px]  max-[1230px]:px-[20px]
               max-[744px]:w-[100%] max-[592px]:flex-col max-[744px]:gap-[12px]
               max-[745px]:px-[10px]
               
               max-[425px]:flex-col max-[425px]:m-[0px]  max-[425px]:gap-[10px]
               max-[375px]:flex-col max-[375px]:m-[0px]  max-[375px]:gap-[8px]
               max-[377px]:gap-[16px]"
        >
          <div
            className="text-sm flex flex-row
           

              max-[500px]:flex  max-[545px]:items-center
            
           ] max-[470px]:flex max-[514px]:flex-col max-[470px]:items-center
                   "
          >
            <p
              className="header_PS max-[612px]:text-[13px] max-[471px]:text-[16px] text-white
              max-[460px]:text-[15px] max-[435px]:text-[14px] max-[411px]:text-[13px]
            max-[378px]:text-[13px] max-[353px]:text-[12px] 
            max-[592px]:text-[16px]  max-[591px]:px-[0px] max-[578px]:text-[15px] max-[546px]:text-[14px]
            max-[514px]:text-[17px] max-[386px]:text-[13px] max-[373px]:text-[12px] max-[349px]:text-[11px]
            max-[325px]:text-[10px]
            max-[377px]:font-light"
            >
              See what’s new in Delphi,
              <span
                className="font-semibold ml-1 max-[612px]:text-[13px] max-[471px]:text-[17px] text-white max-
                max-[460px]:text-[16px] max-[435px]:text-[15px]
                [378px]:text-[13px] max-[353px]:text-[12px]
               max-[592px]:text-[16px]  max-[591px]:px-[0px] max-[578px]:text-[15px] max-[546px]:text-[14px]
               max-[514px]:text-[17px]
               max-[411px]:text-[14px] max-[386px]:text-[13px] max-[373px]:text-[12px] max-[349px]:text-[12px] max-[338px]:text-[11px] max-[313px]:text-[10px]  max-[377px]:font-median"
              >
                C++ Builder, and RAD Studio
              </span>
            </p>

            <a
              href="#"
              className="underline ml-2 text-white 
              max-[592px]:flex max-[592px]:items-center max-[592px]:text-[16px] 
              max-[578px]:text-[15px] max-[546px]:text-[14px]
              max-[514px]:text-[16px]
              max-[460px]:text-[14px] max-[411px]:text-[13px]
              max-[373px]:text-[12px] max-[349px]:text-[11px]
              max-[377px]:mt-[6px]"
            >
              Watch the Replay
            </a>
          </div>

          <div className="flex items-center space-x-6 ">
            <div
              className="flex space-x-6 text-sm
                    max-[1200px]:text-[12px]
                    max-[1060px]:hidden
                   "
            >
              <a href="#" className="hover:text-[#A3A3A3] group">
                My Downloads
              </a>
              <a href="#" className="hover:text-gray-300">
                Upgrade Center
              </a>
              <a href="#" className="hover:text-gray-300">
                My Customer Portal
              </a>
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </div>

            <div className="flex items-center space-x-4 text-lg ">
              <img
                src={Search}
                alt="Search"
                className="cursor-pointer hover:text-gray-300 max-[377px]:max-w-[20px] 
                        max-[377px]:h-[20px]"
              />

              <img
                src={mart}
                alt="mart"
                className="cursor-pointer hover:text-gray-300 max-[377px]:max-w-[20px] 
                        max-[377px]:h-[20px]"
              />

              <img
                src={Languag}
                alt="Languag"
                className="cursor-pointer hover:text-gray-300 max-[377px]:max-w-[20px] 
                        max-[377px]:h-[20px]"
              />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Header;
