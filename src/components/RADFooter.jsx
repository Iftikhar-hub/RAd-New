// import logo from "../assets/icons/logo.png";
import logoSVG from "../assets/icons/logoSVG.svg";
import logoTwitter from "../assets/icons/logoTwitter.png";
import logoFacebook from "../assets/icons/logoFacebook.png";
import logoDribbble from "../assets/icons/logoDribbble.png";
import logoGithub from "../assets/icons/logoGithub.png";

const RADFooter = () => {
  return (
    <section
      className="RAD_Footer max-w-[1920px] relative flex flex-col justify-between w-full h-[543px] py-[48px]  bg-[#FFFFFF99] mx-auto  2xl:px-[80px] max-[1441px]:px-[30px] bg-white z-100 
        max-[1441px]:max-w-[1440px] max-[1441px]:h-[593px] max-[1441px]:py-[48px] 2xl:overflow-x-clip

        max-[768px]:max-[768px] max-[768px]:px-4 max-[768px]:h-[930px] max-[744px]:max-[744px] 
        max-[747px]:overflow-x-clip max-[747px]:pb-[7px]

        max-[747px]:h-auto max-[747px]:justify-center max-[747px]:items-center max-[747px]:gap-[40px]
        max-[425px]:mt-[200px] max-[377px]:mt-[32px]
        max-[425px]:max-w-[425px] max-[425px]:w-full max-[375px]:max-w-[375px] "
    >
      <div
        className="elip-f  max-[1441px]:block max-[1050px]:hidden w-full max-w-[400px] h-[400px]  absolute top-[0px]  
          left-[0px] opacity-[10%] border border-white -z-20 blur-[200px]  bg-[#E11D48]
          max-[747px]:top-[158px] max-[747px]:right-[120px] max-[747px]:opacity-[3%]"
      ></div>

      <div
        className="Footer_Content  flex flex-row justify-between w-full  mx-auto h-[342px] gap-[32px]

            max-[1441px]:max-w-[1280px] max-[1441px]:flex-col max-[1441px]:h-auto max-[1441px]:gap-[48px]

            max-[768px]:max-w-[718px]  
            max-[747px]:max-w-[695px]  max-[747px]:gap-[40px]
            "
      >
        <div
          className="Footer_Content_left flex flex-row gap-[16px]
                max-[1441px]:max-w-[202px] max-[1441px]:h-[35px] cursor-pointer"
        >
          <img
            className="FC_log max-w-[202px] z-20 h-[35px]"
            src={logoSVG}
            alt="logo"
          />
        </div>

        <div
          className="Footer_Content_right flex justify-between gap-[70px]
                     max-[1441px]:max-w-[1280px]  max-[1441px]:gap-[32px]


                     max-[1024]:max-w-[974] max-[1024px]:grid max-[1024px]:grid-cols-3 max-[768px]:max-w-[718px] 

                     max-[425px]:hidden "
        >
          <div className="FCR_1 flex z-10 flex-col gap-[26px]">
            <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] z-10 ">
              Products
            </p>

            <p className="FCR_p2 z-10 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              RAD STUDIO™
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              DELPHI®
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              C++BUILDER®
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer ">
              INTERBASE®
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              RAD SERVER™
            </p>
          </div>

          <div
            className="FCR_2 flex flex-col  gap-[26px]
                    "
          >
            <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937]">
              Free Tools
            </p>

            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              C++ Compiler
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              C++Builder Community ED
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              DELPHI Community ED
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              REST Debugger
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              INTERBASE Developer Edition
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              FMX STENCILS
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              DEV-C++
            </p>
          </div>

          <div
            className="FCR_3 flex flex-col   gap-[26px]
                    "
          >
            <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937]">
              Resources
            </p>

            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Events and Webinars
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              White Papers
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Success Strories
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer ">
              For Educators
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Partners
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Certifications
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              MVP Program
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              WEB APP Development
            </p>
          </div>

          <div
            className="FCR_4 flex flex-col  gap-[26px]
                    "
          >
            <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937]">
              Community
            </p>

            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Blogs
            </p>
          </div>

          <div
            className="FCR_5 flex flex-col gap-[26px]
                    "
          >
            <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] ">
              Compnay
            </p>

            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              About us
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Contact us
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Contact sales
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Legal
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Privacy Policy
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Logo
            </p>
          </div>

          <div
            className="FCR_6 flex flex-col gap-[26px]
                    "
          >
            <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] ">
              Get in Touch
            </p>

            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              US: 1 (512) 226-8080
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              DE: +49 (0)6103-3866-100
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer max-[600px]:text-[15px] max-[560px]:text-[14px]">
              info@embarcadero.com
            </p>
          </div>
        </div>

        <div
          className="hidden Footer_Content_right  justify-between gap-[70px]
                     max-[1441px]:max-w-[1280px]  max-[1441px]:gap-[32px]


                     
                    max-[425px]:grid
                     max-[425px]:max-w-[393px] max-[425px]:h-auto  max-[425px]:grid-cols-2
                     max-[375px]:max-w-[343px]"
        >
          <div className="FCR_1 flex z-10 flex-col gap-[26px] ">
            <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] z-10 ">
              Products
            </p>

            <p className="FCR_p2 z-10 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              RAD STUDIO™
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              DELPHI®
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              C++BUILDER®
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer ">
              INTERBASE®
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              RAD SERVER™
            </p>
          </div>

          <div
            className="FCR_2 flex flex-col  gap-[26px]
                    "
          >
            <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937]">
              Free Tools
            </p>

            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              C++ Compiler
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#4B5563] cursor-pointer">
              C++Builder Community ED
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#4B5563] cursor-pointer">
              DELPHI Community ED
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              REST Debugger
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[150%]  tracking-[0px] text-[#4B5563] cursor-pointer">
              INTERBASE Developer Edition
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              FMX STENCILS
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              DEV-C++
            </p>
          </div>

          <div
            className="FCR_4 flex flex-col gap-[26px] max-[425px]:mt-[-130px]  max-[376px]:mt-[-155px]
                    "
          >
            <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937]">
              Community
            </p>

            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Blogs
            </p>
          </div>

          <div
            className="FCR_5 flex flex-col gap-[26px]
                    "
          >
            <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] ">
              Compnay
            </p>

            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              About us
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Contact us
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Contact sales
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Legal
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Privacy Policy
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Logo
            </p>
          </div>

          <div
            className="FCR_3 flex flex-col  gap-[26px]
              max-[425px]:mt-[-302px]        "
          >
            <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937]">
              Resources
            </p>

            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Events and Webinars
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              White Papers
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Success Strories
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer ">
              For Educators
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Partners
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              Certifications
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              MVP Program
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[150%]  tracking-[0px] text-[#4B5563] cursor-pointer">
              WEB APP Development
            </p>
          </div>
          <span className="hidden max-[425px]:block"></span>

          <div
            className="FCR_6 flex flex-col gap-[26px]
              max-[425px]:w-[200px]      "
          >
            <p className="FCR_p1 font-archivo font-bold text-[20px] leading-[20px] tracking-[0px] text-[#1F2937] ">
              Get in Touch
            </p>

            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              US: 1 (512) 226-8080
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              DE: +49 (0)6103-3866-100
            </p>
            <p className="FCR_p2 font-archivo font-normal text-[16px] leading-[16px] tracking-[0px] text-[#4B5563] cursor-pointer">
              info@embarcadero.com
            </p>
          </div>
        </div>
      </div>

      <div
        className="Bottom_Footer w-full py-5 mx-auto h-[24px] flex justify-between items-center mt-[180px]
                max-[1441px]:max-w-[1280px] max-[1441px]:h-[24px] max-[1441px]:gap[32px]
                max-[1441px]:mt-[40px] max-[747px]:mt-0 max-[747px]:py-[0px] max-[768px]:max-w-[718px]

                max-[425px]:max-w-[393px] max-[425px]:h-auto max-[425px]:flex-col max-[425px]:gap-[16px]
                max-[425px]:mt-[32px] max-[377px]:max-w-[343px] max-[377px]:pb-[8px]"
      >
        <p
          className="BF_P font-[Archivo]  font-normal text-[14px] leading-[14px] text-[#1F2937]
            max-[1441px]:ml-[0]
                max-[377px]:hidden"
        >
          2022 Embarcadero Inc. All Rights Reserved
        </p>

        <div
          className="BF_Icons flex flex-row l  max-w-[864px] justify-end h-[24px] gap-[24px]
                max-[1441px]:max-w-[624px] max-[1441px]:mr-[0]
                max-[768px]:max-w-[431px]  max-[425px]:max-w-[168px] max-[425px]:justify-between
              "
        >
          <img
            className="logoBF max-w-[24px] h-[24px] cursor-pointer"
            src={logoTwitter}
            alt="logoTwitter"
          />
          <img
            className="logoBF max-w-[24px] h-[24px] cursor-pointer"
            src={logoFacebook}
            alt="logoFacebook"
          />
          <img
            className="logoBF max-w-[24px] h-[24px] cursor-pointer"
            src={logoDribbble}
            alt="logoDribbble"
          />
          <img
            className="logoBF max-w-[24px] h-[24px] cursor-pointer"
            src={logoGithub}
            alt="logoGithub"
          />
        </div>
        <p
          className="BF_P font-[Archivo] hidden font-normal text-[14px] leading-[14px] text-[#1F2937]
                 max-[377px]:block "
        >
          2022 Embarcadero Inc. All Rights Reserved
        </p>
      </div>

      <div className="MS-f1  hidden max-[747px]:block  w-full max-w-[869px] h-[869px]  absolute top-[-446px]  left-[-130px] opacity-[4%] border border-white blur-[500px] bg-[#E11D48] overflow-x-hidden"></div>

      <div className="MS-f2 hidden max-[747px]:block  w-full max-w-[731px] h-fill-available  absolute top-[644px]  left-[373px] opacity-[10%] max-[377px]:hidden border border-white blur-[200px] bg-[#06B6D4] overflow-x-hidden overflow-y-hidden"></div>

      <div className="w-full hidden 2xl:block max-w-[650px] h-[650px] rounded-[100%] border border-white  bg-[#DC2626] absolute top-[-116px] right-[-27px] -z-10 opacity-[10%] blur-[200px]"></div>
    </section>
  );
};
export default RADFooter;
