import logo from "../assets/icons/logo.png";
import logoTwitter from "../assets/icons/logoTwitter.png";
import logoFacebook from "../assets/icons/logoFacebook.png";
import logoDribbble from "../assets/icons/logoDribbble.png";
import logoGithub from "../assets/icons/logoGithub.png";

const RADFooter = () => {
  return (
    <section
      className="RAD_Footer relative flex flex-col justify-between w-full h-[543px] py-[48px]  bg-[#FFFFFF99]  
        max-[1440px]:max-w-[1440px] max-[1440px]:h-[593px] max-[1440px]:py-[48px] max-[1440px]:px-[80px]

        max-[768px]:max-[768px] max-[768px]:px-4 max-[768px]:h-[930px] 
        max-[744px]:max-[744px] max-[744px]:px-4 max-[744px]:h-[930px] 

        max-[425px]:max-w-[425px] max-[425px]:w-full
        max-[375px]:max-w-[375px] max-[375px]:w-full"
    >
      <div
        className="Footer_Content  flex flex-row justify-center w-full max-w-[1540px] mx-auto h-[342px] gap-[32px]
            max-[1440px]:max-w-[1280px] max-[1440px]:flex-col max-[1440px]:h-auto max-[1440px]:gap-[24px]
            max-[768px]:max-w-[718px]  max-[768px]:gap-[48px]
            max-[744px]:max-w-[695px]  max-[744px]:gap-[48px]
            "
      >
        <div
          className="Footer_Content_left flex flex-row gap-[16px]
                max-[1440px]:max-w-[202px] max-[1440px]:h-[35px] cursor-pointer"
        >
          <img
            className="FC_log max-w-[202px] z-20 h-[35px]"
            src={logo}
            alt="logo"
          />
        </div>

        <div
          className="Footer_Content_right flex justify-between gap-[70px]
                     max-[1440px]:max-w-[1280px]  max-[1440px]:gap-[32px]


                     max-[1024]:max-w-[974] max-[1024px]:grid max-[1024px]:grid-cols-3
                     max-[768px]:max-w-[718px] max-[768px]:grid max-[768px]:grid-cols-3

                     max-[425px]:max-w-[393px] max-[425px]:h-auto  max-[425px]:grid-cols-2
                     max-[375px]:max-w-[343px] max-[375px]:h-auto  max-[375px]:grid-cols-2"
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
            className="FCR_3 flex flex-col  gap-[26px]
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
          </div>
        </div>
      </div>

      <div
        className="Bottom_Footer w-full max-w-[1540px] mx-auto h-[24px] flex justify-between items-center
                max-[1440px]:max-w-[1280px] max-[1440px]:h-[24px] max-[1440px]:gap[32px]
               
                max-[768px]:max-w-[718px]

                max-[425px]:max-w-[393px] max-[425px]:h-auto max-[425px]:flex-col max-[425px]:gap-[16px]
                max-[425px]:mt-[32px]

                max-[375px]:max-w-[343px] max-[375px]:h-auto max-[375px]:flex-col max-[375px]:gap-[16px]
                max-[375px]:mt-[32px]"
      >
        <p
          className="BF_P font-[Archivo] ml-[32px] font-normal text-[14px] leading-[14px] text-[#1F2937]
            max-[1440px]:ml-[0]
                max-[375px]:hidden"
        >
          2022 Embarcadero Inc. All Rights Reserved
        </p>

        <div
          className="BF_Icons flex flex-row w-full mr-[32px] max-w-[864px] justify-end h-[24px] gap-[24px]
                max-[1440px]:max-w-[624px] max-[1440px]:mr-[0]
                max-[768px]:max-w-[431px]
                max-[425px]:max-w-[168px] max-[425px]:justify-between
                max-[375px]:max-w-[168px] max-[375px]:justify-between"
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
                 max-[375px]:block "
        >
          2022 Embarcadero Inc. All Rights Reserved
        </p>
      </div>
    </section>
  );
};
export default RADFooter;
