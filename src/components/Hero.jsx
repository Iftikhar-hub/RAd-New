import Group from "../assets/icons/Group.png";
import playbutton from "../assets/icons/playbutton.png";
import rad from "../assets/icons/rad.png";

const Hero = () => {
    return (
      <section
        className="heroSec w-[100%] flex flex-col relative  gap-[128px] justify-center items-center mt-[80px]  mx-auto overflow-x-clip 
         
        max-[744px]:max-w-[744px] 
        max-[375px]:max-w-[375px] "
       >
        <div
          className="hero-container relative opacity-100 flex flex-col justify-center items-center 
             max-w-[434px] w-full h-auto gap-[24px]  z-10
             max-[744px]:max-w-[434px] max-[744px]:w-full max-[375px]:max-w-[343px]
             max-[375px]:w-full"
         >
          <div className="hero-container-1 flex flex-col justify-center items-center w-full max-w-[370px] h-auto gap-[16px]">
            <p
              className="hero_cp1 font-Archivo font-[600] text-[48px] text-center leading-[100%] tracking-[-1px] bg-[linear-gradient(77.38deg,#FE3B76_9.15%,#AF29CE_49.65%,#2931DD_90.16%,#2931DD_90.16%)]  
                    bg-clip-text text-transparent
                    max-[744px]:text-[40px] "
            >
              RAD Studio 11.2
            </p>

            <p className="hero_cp2 flex flex-col  gap-[16px]  font-[archivo] font-[400] text-[17px] leading-[150%] text-center text-[#525252] tracking-[0px]">
              Build Apps 5x Faster With One Codebase for Windows, Android, iOS,
              macOS, and Linux.
            </p>
          </div>

          <div
            className="hero-container-2 flex  w-[92%] h-auto gap-[16px] justify-center
            max-[425px]:flex-col max-[425px]:items-center max-[425px]:mt-auto
                max-[375px]:flex-col max-[375px]:items-center max-[375px]:mt-auto "
           >
            <div
              className="bg-[#171717] btn-1 flex w-full max-w-[189px] h-[48px] rounded-[10px] py-[12px] px-[24px] gap-[8px]

              max-[425px]:max-w-[393px] 
                    max-[375px]:max-w-[343px] justify-center items-center
                    hover:bg-[#565454]"
            >
              <button
                type="button"
                className="w-full cursor-pointer max-w-[141px] h-[24px] font-archivo font-medium text-[16px] leading-[24px] text-[#FFFFFF]"
              >
                Start You Free Trial
              </button>
            </div>

            <div
              className="btn-2 cursor-pointer flex w-full max-w-[229px] h-[48px] rounded-[10px]   gap-[8px] justify-center items-center border border-[#171717] 
              max-[425px]:max-w-[393px] cursor-pointer
                    max-[375px]:max-w-[343px]
                    
                    
             "
            >
              <button
                type="secondary"
                className="font-archivo cursor-pointer font-medium text-[15px] leading-[24px] text-[#171717]
                 hover:bg-gradient-to-r hover:from-[#FE3B76] hover:via-[#AF29CE] hover:to-[#2931DD]
                    hover:bg-clip-text hover:text-transparent "
              >
                Request a Product Demo
              </button>
            </div>
          </div>
        </div>

        <div
          className="heroPicture w-full max-w-[1274px] h-[712px] relative
            max-[1024px]:max-w-[864px] z-10 
            
              max-[1440px]:max-w-[1000px] max-[1024px]:max-w-[718px]
              max-[1440px]:w-full max-[900px]:h-[886px] max-[1440px]:gap-[64px]
               

             

              max-[744px]:max-w-[695px] max-[744px]:h-[544px] max-[744px]:gap-[48px]
              max-[425px]:max-w-[393px]
              max-[375px]:max-w-[343px]"
         >
          <div className="relative  w-[100%] mx-auto px-4 sm:px-6">
            <div className="md:hidden w-full aspect-video relative">
              <img
                src={Group}
                alt="Group"
                className="w-full h-full object-cover rounded-[16px]"
              />

              <div className="absolute inset-0 bg-black/80 flex justify-center items-center rounded-[16px]">
                <img src={playbutton} alt="Play" className="w-10 h-10" />
              </div>
            </div>

            <div className="hidden md:block relative">
              <img
                src={Group}
                alt="Group"
                className="w-full max-w-[1000px] mx-auto  h-[612px] rounded-[16px]"
              />

              <div className="absolute inset-0 bg-black/80 flex justify-center items-center rounded-[16px]">
                <img
                  src={playbutton}
                  alt="Play"
                  className="w-[85px] h-[85px]"
                />
              </div>
            </div>
          </div>

          <div
            className="heroLower w-[96%] mx-auto  rounded-[16px] border border-[#e5e5e5] py-[24px] px-[32px]   
                    gap-8 bg-[#F9F9F9] flex justify-between items-center mt-[48px]
                    max-[1440px]:max-w-[1000px] 
                     max-[1024px]:w-[95%] max-[1024px]:mx-auto

                    max-[744px]:max-w-[695px]  max-[744px]:gap-[32px]

                    max-[600px]:mx-auto max-[600px]:flex-col
                    max-[600px]:p-[16px]
                    
                    max-[375px]:max-w-[343px]  max-[375px]:flex-col
                    max-[375px]:p-[16px]
                    "
          >
            <div
              className="logoLN flex flex-row justify-center items-center max-w-[1011px]  gap-4
                     max-[744px]:max-w-[432px]  max-[744px]:gap-[16px]
                     max-[744px]:justify-start

                     max-[600px]:flex-col max-[600px]:justify-center max-[600px]:mt-[18px]
                     max-[375px]:flex-col max-[375px]:justify-center max-[375px]:mt-[18px]"
            >
              <img src={rad} alt="rad" className="w-[48px] h-[48px]" />

              <div className="flex flex-col">
                <p className="text-[#262626] font-archivo font-semibold text-[22px] leading-[33px] tracking-normal">
                  RAD Studio 11.2 Resources
                </p>

                <p className="text-[#262626] font-archivo font-[400] text-[17px] leading-[150%] tracking-normal">
                  PDF's Videos & Courses of the Product
                </p>
              </div>
            </div>

            <div
              className="flex flex-row w-full max-w-[167px] h-[43px] rounded-[12px] justify-center items-center bg-[#262626]
             max-[600px]:max-w-[311px]
             max-[375px]:max-w-[311px] hover:bg-[#565454]
             "
            >
              <button
                className="w-[119px] h-[19px] font-archivo font-medium text-[16px] leading-[19.2px] tracking-normal text-[#FFFFFF] cursor-pointer"
                type="button"
              >
                View Resources
              </button>
            </div>
          </div>

          <div
            className="elip_h1 w-full max-w-[440px] h-[440px]  absolute top-[172px]  
          left-[-437px] opacity-[20%] border border-white blur-[500px] bg-[#6366F1]"
          ></div>

          <div className="elip_h2 w-full max-w-[869px] h-[869px] -z-10  absolute top-[-40px]  left-[1000px] opacity-[20%] border border-white blur-[500px] bg-[#E11D48]"></div>
        </div>
      </section>
    );
}

export default Hero;