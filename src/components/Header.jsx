import { FaSearch, FaShoppingCart, FaGlobe } from "react-icons/fa";

const Header = () => {
    return (
      <section
        className="headerTopp w-[100%]  bg-[#262626] text-white px-4 py-2
          max-[1440px]:max-w-[1440px] 
          max-[744px]:max-w-[744px]
          max-[375px]:max-w-[375px] "
      >
        <div
          className="hd_t1 w-[100%] mx-auto flex justify-between items-center  
               py-[16px]
               
               max-[1440px]:w-[100%]
               max-[744px]:w-[100%] max-[744px]:px-[24px] max-[744px]:flex-col max-[744px]:gap-[12px]
               
               max-[425px]:flex-col max-[425px]:m-[0px] max-[425px]:p-[16px] max-[425px]:gap-[10px]
               max-[375px]:flex-col max-[375px]:m-[0px] max-[375px]:p-[16px] max-[375px]:gap-[8px]"
        >
          <div
            className="text-sm flex flex-row

             max-[500px]:max-w-[470px] max-[500px]:flex max-[545px]:flex-col max-[545px]:items-center
            
            max-[375px]:max-w-[345px] max-[375px]:flex max-[375px]:flex-col max-[375px]:items-center
                   "
          >
            <p className="header_PS max-[375px]:text-[12px]">
              See what’s new in Delphi,
              <span className="font-semibold ml-1 max-[375px]:text-[12px]">
                C++ Builder, and RAD Studio
              </span>
            </p>
            <a
              href="#"
              className="underline ml-2 text-gray-300 max-[375px]:text-[#FFFFFF]"
            >
              Watch the Replay
            </a>
          </div>

          <div className="flex items-center space-x-6 max-[375px]:mr-[14px]">
            <div
              className="flex space-x-6 text-sm
                    max-[1200px]:text-[12px]
                    max-[1024px]:hidden
                   "
            >
              <a href="#" className="hover:text-[#A3A3A3] ">
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
              <FaSearch
                className="cursor-pointer hover:text-gray-300 max-[375px]:max-w-[20px] 
                        max-[375px]:h-[20px]"
              />
              <FaShoppingCart
                className="cursor-pointer hover:text-gray-300 max-[375px]:max-w-[20px] 
                        max-[375px]:h-[20px]"
              />
              <FaGlobe
                className="cursor-pointer hover:text-gray-300 max-[375px]:max-w-[20px] 
                        max-[375px]:h-[20px]"
              />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Header;
