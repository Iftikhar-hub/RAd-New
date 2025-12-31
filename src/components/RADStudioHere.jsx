import codeBase from "../assets/icons/codeBase.png";
import productivity from "../assets/icons/productivity.png";
import linux from "../assets/icons/linux.png";
import microsoft from "../assets/icons/microsoft.png";
import ue from "../assets/icons/ue.png";
import andriod from "../assets/icons/andriod.png";
import next from "../assets/icons/next.png";
import previous from "../assets/icons/previous.png";
import radsImage from "../assets/icons/radsImage.png";
import { motion } from "framer-motion";



const RADStudioHere = () => {
    return (
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rad-studio-here relative flex flex-col w-[100%] gap-[80px] mt-[128px] m-auto max-
        items-center overflow-x-clip 
        [1440px]:max-w-[1280px] max-[1440px]:mt-[128px]
        max-[1024px]:mt-auto
        
       max-[747px]:gap-[48px]
       max-[747px]:mt-[80px]
        
        max-[425px]:w-[100%] max-[425px]:gap-[48px] max-[425px]:mt-[80px] 
         max-[375px]:gap-[48px]  "
      >
        <div
          className="RAD-Studio-Here-1 flex flex-col justify-center items-center mx-auto w-full 
          max-w-[1274px]  h- 
             [204px] gap-[24px] relative max-[1370px]:pl-[40px] max-[1370px]:pr-[40px]
             max-[1024px]:max-w-[863px] 
             max-[747px]:px-0
             
             max-[700px]:px-[20px]

             max-[747px]:max-w-[696px] max-[745px]:gap-[16px]

              max-[375px]:gap-[16px] 2xl:px-[0px]
             
             px-[35px]"
        >
          <p
            className="pTag-1  font-archivo font-[600] text-[32px] leading-[100%] tracking-[-1px] text-center bg-[linear-gradient(79.71deg,_#FE3B76_10.22%,_#AF29CE_35.92%,_#2931DD_61.61%)]
             bg-clip-text text-transparent

            lg:text-[42px]  xl:text-[48px] sm:text-[40px]
                "
          >
            RAD Studio 11.2
            <span
              className="font-archivo font-semibold text-[32px] leading-[150%] tracking-[-1px] text-center text-[#262626]
             
                    lg:text-[42px]  xl:text-[48px] sm:text-[40px]"
            >
              {" "}
              is here!
            </span>
          </p>

          <p
            className="pTag-2 font-archivo font-normal text-[18px] leading-[150%] text-center text-[#525252] tracking-[-1px]
            md:text-[22px] lg:text-[24px] sm:text-[20px] 
               "
          >
            RAD Studio 11.2 is here! The new release introduces Markdown support
            and an iOS Simulator on macOS ARM 64 for Delphi, and migrates the
            Delphi Linux debugger to LLDB. It also brings usability, performance
            and stability improvements to the IDE, the compilers and toolchains,
            the UX, RTL, database and Internet libraries for both Delphi and
            C++.
          </p>

          <img
            className="max-w-[58.89px] h-[114.07] absolute top-[4px] right-[-80px]
                max-[747px]:hidden max-[1441px]:right-[-40px]
                max-[1440px]:hidden"
            src={radsImage}
            alt="radsImage"
          />
        </div>

        <div
          className="RAD-Studio-Here-1 flex flex-col items-center w-full  h- 
             auto gap-[24px] max-[1370px]:pl-[40px] max-[1370px]:pr-[40px]
             max-[1024px]:max-w-[863px]

             max-[747px]:px-0 max-[747px]:pr-0
             max-[747px]:max-w-[696px] max-[747px]:gap-[48px]
              max-[375px]:max-w-[343px]
              px-[35px]"
        >
          <div
            className="rads-1-row1 grid  relative grid-cols-3 w-full max-w-[1274px]  gap-[32px]

                      max-[768px]:max-w-[718px] max-[768px]:grid max-[768px]:grid-cols-2
                      max-[768px]:gap-[48px]

                      max-[747px]:max-w-[696px] max-[747px]:grid max-[747px]:grid-cols-2
                      max-[747px]:gap-[24px] 
                      max-[720px]:px-[20px]
                      max-[377px]:px-0

                      max-[376px]:grid-cols-1 "
          >
            <div
              className="row1-1 flex flex-col max-w-[403.33px]  gap-[24px] rounded-[24px]
                        max-[747px]:max-w-[336px] max-[747px]:gap-[16px]
                        max-[376px]:justify-center max-[376px]:items-center max-[376px]:gap-[16px]
                        cursor-pointer max-[377px]:mx-auto"
            >
              <img
                src={codeBase}
                alt="codeBase"
                className="max-w-[48px] h-[48px]"
              />

              <p
                className=" font-archivo font-semibold text-[28px] leading-[33.6px] tracking-[-4%] text-[#222222]
                max-[1024px]:text-[22px] max-[747px]:font-medium
                            max-[747px]:text-[20px]"
              >
                Single Code Base
              </p>

              <p
                className=" font-archivo font-normal text-[20px] leading-[30px] tracking-normal text-[#707070] max-[747px]:mt-[-10px] max-[377px]:mt-[0px]
                max-[1024px]:text-[20px]
                            max-[747px]:text-[18px] max-[376px]:text-center"
              >
                Create apps for all major platforms with less coding effort.
                Write once, compile everywhere..
              </p>
            </div>

            <div
              className="row1-2 flex flex-col max-w-[403.33px]  gap-[24px] rounded-[24px]
                        max-[747px]:max-w-[336px] max-[747px]:gap-[16px]
                        max-[376px]:justify-center max-[376px]:items-center max-[376px]:gap-[16px]
                        cursor-pointer max-[377px]:mx-auto"
            >
              <img
                src={productivity}
                alt="productivity"
                className="max-w-[48px] h-[48px]"
              />
              <p
                className=" font-archivo font-semibold text-[28px] leading-[33.6px] tracking-[-4%] text-[#222222]
                max-[1024px]:text-[22px] max-[747px]:font-medium
                            max-[747px]:text-[20px]"
              >
                Productivity
              </p>

              <p
                className=" font-archivo font-normal text-[20px] leading-[30px] tracking-normal text-[#707070] 
                max-[1024px]:text-[20px] max-[747px]:mt-[-10px] max-[377px]:mt-[0px]
                            max-[747px]:text-[18px] max-[376px]:text-center"
              >
                VCL Styles with design-time support: Prototype stylish UIs even
                faster by seeing immediately at design-time how your styled
                forms and controls will look when running..
              </p>
            </div>

            <div
              className="row1-3 flex flex-col max-w-[403.33px] gap-[24px] rounded-[24px]
                        max-[747px]:max-w-[336px] max-[747px]:gap-[16px]
                        max-[376px]:justify-center max-[376px]:items-center max-[376px]:gap-[16px]
                        cursor-pointer max-[377px]:mx-auto"
            >
              <img src={linux} alt="linux" className="max-w-[48px] h-[48px]" />
              <p
                className="font-archivo font-semibold text-[28px] leading-[33.6px] tracking-[-4%] text-[#222222]
                max-[1024px]:text-[22px] max-[747px]:font-medium
                            max-[747px]:text-[20px]"
              >
                Linux
              </p>

              <p
                className=" font-archivo font-normal text-[20px] leading-[30px] tracking-normal text-[#707070]
                max-[1024px]:text-[20px] max-[747px]:mt-[-10px] max-[377px]:mt-[0px]
                            max-[747px]:text-[18px] max-[376px]:text-center"
              >
                Develop both server and FireMonkey GUI applications for Linux.
                Delphi now has LLDB version 12 support for debugging on Linux,
                also adopted for iOS Simulator.
              </p>
            </div>

            <div
              className="row2-1 flex flex-col max-w-[403.33px] gap-[24px] rounded-[24px]
                        max-[747px]:max-w-[336px] max-[747px]:gap-[16px]
                        max-[376px]:justify-center max-[376px]:items-center max-[376px]:gap-[16px]
                        cursor-pointer max-[377px]:mx-auto"
            >
              <img
                src={microsoft}
                alt="microsoft"
                className="max-w-[48px] h-[48px]"
              />
              <p
                className=" font-archivo font-semibold text-[28px] leading-[33.6px] tracking-[-4%] text-[#222222]
                max-[1024px]:text-[22px] max-[747px]:font-medium
                            max-[747px]:text-[20px]"
              >
                Windows 11
              </p>

              <p
                className=" font-archivo font-normal text-[20px] leading-[30px] tracking-normal text-[#707070]
                max-[1024px]:text-[20px] max-[747px]:mt-[-10px] max-[377px]:mt-[0px]
                            max-[747px]:text-[18px] max-[376px]:text-center"
              >
                Modernize VCL apps for Windows 11 with up-to-date user interface
                controls, WinRT APIs, and HighDPI-related features
              </p>
            </div>
            <div
              className="row2-2 flex flex-col max-w-[403.33px] gap-[24px] rounded-[24px]
                        max-[747px]:max-w-[336px] max-[747px]:gap-[16px]
                        max-[376px]:justify-center max-[376px]:items-center max-[376px]:gap-[16px]
                        cursor-pointer max-[377px]:mx-auto"
            >
              <img src={ue} alt="ue" className="max-w-[48px] h-[48px]" />
              <p
                className=" font-archivo font-semibold text-[28px] leading-[33.6px] tracking-[-4%] text-[#222222]
                max-[1024px]:text-[22px] max-[747px]:font-medium
                            max-[747px]:text-[20px]"
              >
                User Experience
              </p>

              <p
                className=" font-archivo font-normal text-[20px] leading-[30px] tracking-normal text-[#707070]
                max-[1024px]:text-[20px] max-[747px]:mt-[-10px] max-[377px]:mt-[0px]
                            max-[747px]:text-[18px] max-[376px]:text-center"
              >
                Completely rebuilt Welcome Page with a native look and feel, and
                a UI that fits the IDE, and customizable layout and content.
              </p>
            </div>
            <div
              className="row2-3 flex flex-col max-w-[403.33px]  gap-[24px] rounded-[24px]
                        max-[747px]:max-w-[336px] max-[747px]:gap-[16px]
                        max-[376px]:justify-center max-[376px]:items-center max-[376px]:gap-[16px]
                        cursor-pointer max-[377px]:mx-auto"
            >
              <img
                src={andriod}
                alt="andriod"
                className="max-w-[48px] h-[48px]"
              />
              <p
                className=" font-archivo font-semibold text-[28px] leading-[33.6px] tracking-[-4%] text-[#222222]
                max-[1024px]:text-[22px] max-[747px]:font-medium
                            max-[747px]:text-[20px]"
              >
                Android
              </p>

              <p
                className=" font-archivo font-normal text-[20px] leading-[30px] tracking-normal text-[#707070] 
                max-[1024px]:text-[20px] max-[747px]:mt-[-10px] max-[377px]:mt-[0px]
                            max-[747px]:text-[18px] max-[376px]:text-center"
              >
                Support for the latest Android Level 32 API and latest Billing
                APIs, and migration to use the AndroidX libraries. Android
                support for multiple classes.
              </p>
            </div>

            <div
              className="elip-3 w-full max-w-[906px] h-[906px]  absolute top-[-187px]  left-[-586px] opacity-[10%] border border-white bg-[#06B6D4] blur-[100px] 

            max-[1441px]:top-[-162px] max-[1441px]:left-[-353px] max-[377px]:hidden


            max-[747px]:top-[296px] max-[747px]:left-[-81px] max-[747px]:blur-[213px]"
            ></div>

            <div className="elip-4 w-full max-w-[644px] h-[644px]  absolute top-[9px]  left-[1210px] opacity-[10%] border border-white bg-[#6366F1] blur-[250px] "></div>
          </div>

          <div className="MS-rs1 hidden w-full max-w-[869px] h-[1520px]  absolute top-[-90px]  left-[0px] right-[0px] opacity-[10%] border border-white bg-[#06B6D4] blur-[200px] max-[377px]:block"></div>

          <div className="MS-rsi2 hidden w-full max-w-[650px] h-[650px]  absolute top-[1753px]  left-[183px] opacity-[10%] border border-white bg-[#DC2626] blur-[240px] max-[377px]:block"></div>

          <div
            className="rads-2 flex flex-row max-w-[88px] h-[36px] gap-[16px]
           cursor-pointer"
          >
            <img
              src={previous}
              alt="previous"
              className="max-w-[36px] h-[36px]"
            />
            <img src={next} alt="next" />
          </div>
        </div>
      </motion.section>
    );
}
export default RADStudioHere;