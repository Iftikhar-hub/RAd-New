import leftVector from "../assets/icons/leftVector.png";
import rightVector from "../assets/icons/rightVector.png";
import RADs from "../assets/icons/RADs.png"
import rrr from "../assets/icons/rrr.png"
import cplus from "../assets/icons/cplus.png"
import shaheen from "../assets/icons/shaheen.png"
import wings from "../assets/icons/wings.png"

const GetRADStudio = () => {
    return (
      <section
        className="Get-RAD-Studio relative w-[100%] bg-[#00000005] opacity-100  backdrop-blur-[36px] overflow-hidden mt-[128px]
        h-[562px]
         max-[1440px]:h-[562px] 
         
        
        max-[747px]:max-w-[744px] z-100 max-[747px]:mt-[80px]

        max-[425px]:max-w-[425px] max-[425px]:w-full
        max-[377px]:max-w-[375px] max-[377px]:w-full max-[377px]:mt-[80px]"
      >
        <img
          className="left_vector w-full max-w-[873px] h-[810px] absolute top-[-20] left-[-520px] 
            max-[1440px]:h-[722px]

          max-[747px]:max-w-[843px]  max-[747px]:h-[848px] max-[747px]:top-[-49px] max-[747px]:left-[-587px]
 

            max-[425px]:max-w-[873px] max-[425px]:w-full max-[425px]:h-[365px] max-[425px]:top-[-45px] max-[425px]:left-[-285px] max-[425px]:-rotate-90

            max-[377px]:max-w-[873px] max-[377px]:w-full max-[377px]:h-[711px] max-[377px]:top-[13px] max-[377px]:left-[-300px] max-[377px]:rotate-360"
          src={leftVector}
          alt="leftVector"
        />

        <img
          className="right-vector w-full max-w-[811px] h-[820px] absolute top-[130px] right-[-432px]
            max-[1440px]:h-[672px]
            
            max-[747px]:h-[840px] max-[747px]:top-[209px] max-[747px]:right-[-450px]



             max-[425px]:max-w-[811px] max-[425px]:w-full max-[425px]:h-[339px] max-[425px]:top-[222px] max-[425px]:left-[237px] max-[425px]:rotate-90

            max-[377px]:max-w-[811px] max-[375px]:w-full max-[377px]:h-[791px] max-[377px]:top-[223px] max-[377px]:left-[227px] max-[377px]:rotate-360"
          src={rightVector}
          alt="rightVector"
        />

        <div
          className="GetRadContent absolute w-[100%] h-[302px] opacity-100 top-[128px]   
              gap-[48px] flex flex-col justify-center items-center
              left-1/2 -translate-x-1/2

              max-[1440px]:max-w-[598px] 
              
              
              
              max-[747px]:gap-[0px] max-[747px]:top-[120px]


              max-[425px]:max-w-[393px] max-[425px]:w-full max-[425px]:h-auto
              max-[425px]:top-[144px]

              max-[375px]:max-w-[343px] max-[375px]:w-full max-[375px]:h-auto
              max-[375px]:top-[144px]"
         >
          <div
            className="GRC-logos w-full max-w-[1038px] flex flex-col gap-[32px] justify-center items-center opacity-100 
                 max-[1440px]:w-[598px] 
                 
                 max-[375px]:max-w-[343px] max-[375px]:w-full max-[375px]:h-auto"
           >
            <div
              className="RGC-l1 justify-center items-center h-[110px] opacity-100 flex flex-col gap-[16px] 
                    max-[1440px]:max-w-[598px] max-[1440px]:w-full

                    max-[425px]:max-w-[393px] max-[425px]:w-full max-[425px]:h-auto
                    max-[375px]:max-w-[343px] max-[375px]:w-full max-[375px]:h-auto"
            >
              <p
                className="GRC-ps font-archivo font-bold text-[48px] leading-[120%] tracking-[-1px] text-[#262626]
                        max-[747px]:text-[40px]
                        max-[425px]:text-[32px]
                        max-[377px]:text-[32px]"
              >
                Get RAD
                <span
                  className="RGC-ps1 font-archivo font-bold text-[48px] leading-[120%] tracking-[-1px] bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent pl-[10px]
                            max-[747px]:text-[40px]
                            max-[425px]:text-[32px]
                            max-[375px]:text-[32px]"
                >
                  Studio Now!
                </span>
              </p>

              <p
                className="GRS-p1 opacity-100 font-archivo font-normal text-[24px] leading-[150%] tracking-[0px] 
                        text-[#262626] text-center
                        max-[425px]:text-[20px] max-[540px]:text-[16px]
                        max-[425px]:px-[5px]
                        max-[747px]:text-[20px]
                        max-[425px]:px-[30px]"
              >
                One code base, Native on any platform, Fast frame work.
              </p>
            </div>

            <div
              className="RGC-logo2 justify-center items-center h-[64px] flex flex-row gap-[32px]
                    max-[425px]:max-w-[393px] max-[425px]:w-full max-[425px]:gap-[8px]
                    max-[375px]:max-w-[343px] max-[375px]:w-full max-[375px]:gap-[8px]"
             >
              <img
                className="radsImage1 max-w-[64px] w-full h-[64px] 
                        max-[747px]:max-w-[56px] max-[747px]:h-[56px]
                        max-[425px]:max-w-[48px] max-[425px]:h-[48px]
                        max-[377px]:max-w-[48px] max-[377px]:h-[48px]"
                src={RADs}
                alt="RADs"
              />

              <img
                className="radsImage1 w-full max-w-[64px] h-[64px]
                        max-[747px]:max-w-[56px] max-[747px]:h-[56px]
                        max-[425px]:max-w-[48px] max-[425px]:h-[48px]
                        max-[377px]:max-w-[48px] max-[377px]:h-[48px]"
                src={rrr}
                alt="rrr"
              />

              <img
                className="radsImage1 w-full max-w-[64px] h-[64px]
                        max-[747px]:max-w-[56px] max-[747px]:h-[56px]
                        max-[425px]:max-w-[48px] max-[425px]:h-[48px]
                        max-[377px]:max-w-[48px] max-[377px]:h-[48px]"
                src={cplus}
                alt="cplus"
              />

              <img
                className="radsImage1 w-full max-w-[64px] h-[64px]
                        max-[747px]:max-w-[56px] max-[747px]:h-[56px]
                        max-[425px]:max-w-[48px] max-[425px]:h-[48px]
                        max-[377px]:max-w-[48px] max-[377px]:h-[48px]"
                src={shaheen}
                alt="shaheen"
              />

              <img
                className="radsImage1 w-full max-w-[64px] h-[64px]
                        max-[747px]:max-w-[56px] max-[747px]:h-[56px]
                        max-[425px]:max-w-[48px] max-[425px]:h-[48px]
                        max-[375px]:max-w-[48px] max-[375px]:h-[48px]"
                src={wings}
                alt="wings"
              />
            </div>
          </div>

          <div
            className="GRC-btns h-[48px] opacity-100 flex gap-[8px] rounded-[10px] 
                px-[24px] py-[12px] bg-[#171717] mt-[48px]
                max-[376px]:max-w-[343px] max-[425px]:w-[90%] max-[425px]:justify-center max-[425px]:items-center hover:bg-[#565454] max-[376px]:mt-[32px]"
          >
            <button
              className="btn-download cursor-pointer font-archivo font-medium text-[16px] leading-[24px] tracking-[0px] text-white"
              type="button"
            >
              Download Now
            </button>
          </div>
        </div>

        <div className="elip-6 w-full -z-10 max-w-[457px] h-[457px]  absolute top-[230px]  left-[0] opacity-[10%] border border-white blur-[100px] bg-[#6366F1]"></div>

        <div className="elip-7 w-full -z-10 max-w-[731px] h-[731px]  absolute top-[230px]  right-[0] opacity-[10%] border border-white blur-[500px] bg-[#06B6D4]"></div>
      </section>
    );



}

export default GetRADStudio;