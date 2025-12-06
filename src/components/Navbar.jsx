import logo from "../assets/icons/logo.png";
import rightArrow from "../assets/icons/rightArrow.png";
import downArrow from "../assets/icons/downArrow.png";
import menaImage from "../assets/icons/menaImage.png";

const Navbar = () => {
  return (
    <div
      className="contaner  w-[100%]
          max-[1440px]:max-w-[1440px]
          max-[768px]:max-w-[768px]
          max-[744px]:max-w-[744px]
          max-[375px]:w-full max-[375px]:max-w-[375px]"
    >
      <section
        className="w-[100%] h-[70px] px-[196px] py-[16px] flex justify-between items-center
              max-[1440px]:max-w-[1440px] max-[1449px]:px-[80px]

              max-[768px]:max-w-[768px] max-[768px]:py-[16px] max-[768px]:px-[24px]
              max-[744px]:max-w-[744px] max-[744px]:py-[16px] max-[744px]:px-[24px]

              max-[375px]:w-full max-[375px]:max-w-[375px]"
      >
        <div
          className="log cursor-pointer flex items-center max-[1440px]:h-[24px] max-[1440px]:gap-[8px]
                
                "
        >
          <img src={logo} alt="Logo" className="right-icon" />
        </div>

        <div
          className="centerLinks flex gap-[15px] 
          max-[1024px]:gap-[4px]
                 max-[1440px]:gap-[24px]
                max-[1200px]:hidden"
        >
          <div className="Link-1 cursor-pointer flex items-center justify-center ">
            <p className="group relative hover:text-[#8e0d0d]">
              Products
              <div
                className="absolute left-[-50px] top-[30px]  bg-white shadow-xl rounded-lg opacity-0 gap-[4px] p-[12px] z-20
               invisible transition-all duration-300 group-hover:visible group-hover:opacity-100"
              >
                <ul className="flex flex-col text-[14px] gap-[15px] font-inter  leading-[16px] text-[#525252]">
                  <li className="hover:text-[#8e0d0d]">RAD Studio</li>
                  <li className="hover:text-[#8e0d0d]">Delphi</li>
                  <li className="hover:text-[#8e0d0d]">C++ Builder</li>
                  <li className="hover:text-[#8e0d0d]">Inter Base</li>
                  <li className="hover:text-[#8e0d0d]">RAD Server</li>
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
            <p className="FTpp w-full max-[1440px]:max-w-[90px] hover:text-[#8e0d0d] relative group">
              Free Tools
              <div
                className="absolute left-[-50px] top-[30px] bg-white shadow-xl rounded-lg opacity-0  z-20 gap-[4px] p-[12px]
               invisible transition-all duration-300 group-hover:visible group-hover:opacity-100"
              >
                <ul className="flex flex-col text-[14px] gap-[15px] font-inter leading-[16px] text-[#525252]">
                  <li className="hover:text-[#8e0d0d]">C++ Compiler</li>
                  <li className="hover:text-[#8e0d0d]">Delphi Communit Ed.</li>
                  <li className="hover:text-[#8e0d0d]">Rest Debugger</li>
                  <li className="hover:text-[#8e0d0d]">FMX Stencils</li>
                  <li className="hover:text-[#8e0d0d]">PyScripter</li>
                  <li className="hover:text-[#8e0d0d]">CPP Check</li>
                  <li className="hover:text-[#8e0d0d]">Python Libraries</li>
                </ul>
              </div>
            </p>
            <img
              src={downArrow}
              alt="downArrow"
              className="downArrow max-w-[19px] h-[19px]"
            />
          </div>
          <div className="Link-1 hover:text-[#8e0d0d] cursor-pointer flex items-center justify-center">
            <p>Blog</p>
          </div>
          <div className="Link-1 relative group cursor-pointer flex items-center justify-center">
            <p className="hover:text-[#8e0d0d]">
              Resources
              <div
                className="absolute left-[-50px] top-[30px] bg-white shadow-xl rounded-lg  opacity-0  z-20 gap-[4px] p-[12px]
               invisible transition-all duration-300 group-hover:visible group-hover:opacity-100"
              >
                <ul className="flex flex-col text-[14px] gap-[15px] font-inter leading-[16px] text-[#525252]">
                  <li className="hover:text-[#8e0d0d]">Learn</li>
                  <li className="hover:text-[#8e0d0d]">Engage</li>
                  <li className="hover:text-[#8e0d0d]">Partner</li>
                  <li className="hover:text-[#8e0d0d]">Support</li>
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
            <p className="ppppppp hover:text-[#8e0d0d] w-full max-[1440px]:max-w-[73px]">
              New Tools
            </p>
          </div>
        </div>

        <div
          className="w-full max-w-[280px] right-Buttons flex flex-row justify-between gap-[15px] 
                  max-[1440px]:max-w-[280px] max-[1440px]:h-[38px] max-[1440px]:gap-[12px]

                  max-[1200px]:max-w-[350px]  max-[1200px]:items-center
                  max-[1200px]:justify-end

                  
                  max-[744px]:max-w-[320px]  max-[744px]:items-center
                  max-[425px]:justify-end"
        >
          <button
            className="btn w-full max-w-[76px] h-[38px] rounded-lg py-[8px] px-[11px] gap-[10px]
                    max-[425px]:hidden
                    hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
                    hover:bg-clip-text hover:text-transparent"
            type="button"
          >
            Sign in
          </button>

          <button
            type="button"
            className="btn w-full max-w-[89px] h-[38px] rounded-lg border border-[#262626] py-[8px] px-[11px] gap-[10px] font-archivo font-medium text-[14px] leading-[22px] tracking-[0px] text-[#262626] 
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
                    
            hover:text-[white]
            max-[425px]:hidden"
          >
            Buy now
          </button>

          <button
            type="button"
            className="btn w-full max-w-[89px] h-[38px] rounded-lg border border-[#262626] bg-[#262626] flex items-center justify-center gap-[10px] font-archivo font-medium text-[14px] leading-[22px] tracking-[0px] text-white
            
            hover:bg-[#565454]"
          >
            Free trial
          </button>
          <img
            src={menaImage}
            alt="menaImage"
            className="menueImage w-full max-w-[24px] h-[24px] hidden
            max-[1200px]:block
            "
          />
        </div>
      </section>

      <div
        className="navBottom w-[100%] mx-auto h-[53px] flex justify-between items-center  
              rounded-[6px] py-[16px] px-[192px]
              max-[1449px]:max-w-[1440px] max-[1449px]:h-[53px] max-[1449px]:px-[80px]
              
              
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
          className="navBottom-left flex items-center h-[21px] gap-[8px]
                max-[500px]:grid max-[500px]:grid-cols-3 max-[500px]:max-w-[344px]
                max-[395px]:grid-cols-2"
        >
          <a
            className="flex items-center  gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline decoration-[#262626]
            
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent  hover:decoration-[#b67085]"
            href="#"
          >
            What's New? -
          </a>

          <a
            className="flex items-center gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline
            
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent  hover:decoration-[#b67085]"
            href="#"
          >
            Product Edition -
          </a>

          <a
            className="flex items-center  gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent  hover:decoration-[#b67085]"
            href="#"
          >
            Previous Version
          </a>

          <a
            className="flex items-center gap-[10px] font-archivo font-medium text-[14px] leading-[21px] tracking-[0px] text-[#262626] underline max-[500px]:ml-[135px] max-[395px]:ml-[0]
             hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
              hover:bg-clip-text hover:text-transparent  hover:decoration-[#b67085]"
            href="#"
          >
            Customers
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
