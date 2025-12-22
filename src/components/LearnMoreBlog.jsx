import ReadMore from "../assets/icons/ReadMore.png";
import MLB_Arrow from "../assets/icons/MLB_Arrow.png";
import React from "react";


const data = [
  {
    title: "3 Main C++ Compiler Tips to Develop Successful Apps",
    
  },
  {
    title: "Top 5 Platforms For Windows Applications Development in 2022",
   
  },
  {
    title: "Everything You Need to Know About Cross-Platform Development",
    
  },
  {
    title: "A Complete Guide To Programming In C++ – Visual Programming",
  
  },
  {
    title:
      "A Complete Guide To Programming In C++ – Object Oriented Programming",
 
  },
  {
    title: "How C++ Works With Libraries and More",
   
  },
];


const LearnMoreBlog = () => {
    return (
      <section
        className="Learn_More_Blog w-[100%] mt-[128px] relative mx-auto

         max-[1441px]:max-w-[1440px] max-[1441px]:px-[0px]   max-[1441px]:gap-[80px] px-[196px]
          
        max-[747px]:mt-[80px]
         max-[768px]:px-0
          max-[746px]:gap-[64px]

         max-[425px]:max-w-[393px]  max-[425px]:h-auto max-[425px]:gap-[30px]
         max-[425px]:mt-[80px]

         max-[377px]:w-[100%]  max-[377px]:h-auto max-[377px]:gap-[30px]
         max-[377px]:mt-[80px]
         max-[377px]:mx-0 "
      >
        <p
          className="LMB_P text-center opacity-100 font-archivo font-semibold text-[48px] leading-[120%] tracking-[-1px] text-[#262626]
            max-[1440px]:left-[232px]
            max-[746px]:text-[36px] max-[746px]:left-[54px]
            max-[630px]:px-[20px]
            max-[425px]:text-[30px]
            max-[376px]:text-[30px] max-[377px]:leading-[140%]
            "
        >
          Learn More on the <span></span>
          <span
            className="LMB_S font-archivo font-semibold text-[48px] leading-[120%] tracking-[-1px] 
            bg-[linear-gradient(80.32deg,_#FE3B76_53.77%,_#AF29CE_71.1%,_#2931DD_88.44%)]
             bg-clip-text text-transparent
            pl-[8px]
                max-[746px]:text-[36px] 
                max-[425px]:text-[30px]
                max-[377px]:text-[30px] max-[377px]:leading-[140%] "
          >
            Embarcadero Blog
          </span>
        </p>

        <div className=" w-full relative max-w-[1540px] mx-auto z-10 overflow-x-clip
        max-[1441px]:px-[30px] max-[375px]:px-[0px]">
          {/* for more then 900px start  */}

          <div
            className="LMB_content_1 w-full  max-w-[1540px] gap-[100px] mx-auto z-10  
                 flex  mt-[90px] max-[900px]:hidden
                  
                 
                 max-[1441px]:w-[93%]   max-[1440px]:gap-[80px] max-[1440px]:ml-[0px]

                 max-[1100px]:gap-[48px] max-[1100px]:w-[100%]
                 max-[1100px]:grid-cols-2 max-[1100px]:mt-[64px]

                 max-[768px]:gap-[48px] max-[768px]:w-[100%]
                 max-[768px]:grid-cols-2 max-[746px]:mt-[64px]

                 max-[746px]:gap-[48px] max-[746px]:w-[100%]
                 max-[746px]:grid-cols-2


                  max-[425px]:max-w-[393px] max-[425px]:w-full max-[425px]:h-auto max-[425px]:grid-cols-1 max-[425px]:mt-[30px]

                 max-[375px]:max-w-[343px] max-[375px]:w-full max-[375px]:h-auto max-[375px]:grid-cols-1 max-[375px]:mt-[30px] "
          >
            <div
              className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     max-[768px]:max-w-[331px]
                     max-[746px]:max-w-[331px]"
            >
              <p
                className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
              >
                Learning & Development
              </p>

              <p
                className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
              >
                3 Main C++ Compiler Tips to Develop Successful Apps
              </p>

              <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  gap-[8px]">
                <p
                  className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[746px]:text-[18px] cursor-pointer 
                           group z-10
                           max-[1441px]:underline decoration-[#525252] max-[1441px]:text-[#262626]
                           underline-offset-2"
                >
                  Read More
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
                </p>

                <img
                  className="ReadMore-arrow max-w-[28px] h-[28px]"
                  src={ReadMore}
                  alt="ReadMore"
                />
              </div>
            </div>

            <div
              className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     max-[768px]:max-w-[331px]
                     max-[746px]:max-w-[331px]"
            >
              <p
                className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
              >
                Learning & Development
              </p>

              <p
                className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
              >
                Top 5 Platforms For Windows Applications Development in 2022
              </p>

              <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  gap-[8px]">
                <p
                  className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[746px]:text-[18px] cursor-pointer 
                           group z-10
                           max-[1441px]:underline decoration-[#525252] max-[1441px]:text-[#262626]
                           underline-offset-2"
                >
                  Read More
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
                </p>

                <img
                  className="ReadMore-arrow max-w-[28px] h-[28px]"
                  src={ReadMore}
                  alt="ReadMore"
                />
              </div>
            </div>

            <div
              className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     max-[768px]:max-w-[331px]
                     max-[746px]:max-w-[331px]"
            >
              <p
                className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
              >
                Learning & Development
              </p>

              <p
                className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
              >
                Everything You Need to Know About Cross-Platform Development
              </p>

              <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  gap-[8px]">
                <p
                  className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[746px]:text-[18px] cursor-pointer 
                           group z-10
                           max-[1441px]:underline decoration-[#525252] max-[1441px]:text-[#262626]
                           underline-offset-2"
                >
                  Read More
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
                </p>

                <img
                  className="ReadMore-arrow max-w-[28px] h-[28px]"
                  src={ReadMore}
                  alt="ReadMore"
                />
              </div>
            </div>
          </div>
          <div
            className="SingleLines text-[#D4D4D4] border border-dashed w-[100%] mt-[80px] h-[2px]
             max-[900px]:hidden"
          ></div>

          <div
            className="LMB_content_1 w-full  max-w-[1540px] gap-[100px] mx-auto z-10  
                 flex  mt-[90px]  max-[900px]:hidden
                  
                 
                 max-[1441px]:w-[93%]   max-[1440px]:gap-[80px] max-[1440px]:ml-[0px]

                 max-[1100px]:gap-[48px] max-[1100px]:w-[100%]
                 max-[1100px]:grid-cols-2 max-[1100px]:mt-[64px]

                 max-[768px]:gap-[48px] max-[768px]:w-[100%]
                 max-[768px]:grid-cols-2 max-[746px]:mt-[64px]

                 max-[746px]:gap-[48px] max-[746px]:w-[100%]
                 max-[746px]:grid-cols-2


                  max-[425px]:max-w-[393px] max-[425px]:w-full max-[425px]:h-auto max-[425px]:grid-cols-1 max-[425px]:mt-[30px]

                 max-[375px]:max-w-[343px] max-[375px]:w-full max-[375px]:h-auto max-[375px]:grid-cols-1 max-[375px]:mt-[30px] "
          >
            <div
              className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     max-[768px]:max-w-[331px]
                     max-[746px]:max-w-[331px]"
            >
              <p
                className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
              >
                Learning & Development
              </p>

              <p
                className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
              >
                A Complete Guide To Programming In C++ – Visual Programming
              </p>

              <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  gap-[8px]">
                <p
                  className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[746px]:text-[18px] cursor-pointer 
                           group z-10
                           max-[1441px]:underline decoration-[#525252] max-[1441px]:text-[#262626]
                           underline-offset-2"
                >
                  Read More
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
                </p>

                <img
                  className="ReadMore-arrow max-w-[28px] h-[28px]"
                  src={ReadMore}
                  alt="ReadMore"
                />
              </div>
            </div>

            <div
              className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     max-[768px]:max-w-[331px]
                     max-[746px]:max-w-[331px]"
            >
              <p
                className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
              >
                Learning & Development
              </p>

              <p
                className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
              >
                A Complete Guide To Programming In C++ – Object Oriented
                Programming
              </p>

              <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  gap-[8px]">
                <p
                  className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[746px]:text-[18px] cursor-pointer 
                           group z-10
                           max-[1441px]:underline decoration-[#525252] max-[1441px]:text-[#262626]
                           underline-offset-2"
                >
                  Read More
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
                </p>

                <img
                  className="ReadMore-arrow max-w-[28px] h-[28px]"
                  src={ReadMore}
                  alt="ReadMore"
                />
              </div>
            </div>

            <div
              className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     max-[768px]:max-w-[331px]
                     max-[746px]:max-w-[331px]"
            >
              <p
                className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
              >
                Learning & Development
              </p>

              <p
                className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
              >
                How C++ Works With Libraries and More
              </p>

              <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  gap-[8px]">
                <p
                  className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[746px]:text-[18px] cursor-pointer 
                           group z-10
                           max-[1441px]:underline decoration-[#525252] max-[1441px]:text-[#262626]
                           underline-offset-2"
                >
                  Read More
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
                </p>

                <img
                  className="ReadMore-arrow max-w-[28px] h-[28px]"
                  src={ReadMore}
                  alt="ReadMore"
                />
              </div>
            </div>
          </div>

          <div className="elip-8 w-full max-w-[731px] h-[731px]  absolute top-[123px]  left-[-484px] opacity-[10%] border border-white blur-[100px] bg-[#06B6D4] max-[747px]:top-[353px] max-[747px]:left-[-295px] max-[747px]:blur-[500px]  "></div>

          <div
            className="elip-9 w-full max-w-[731px] h-[731px]  absolute top-[-606px]  right-[-267px] opacity-[10%] border border-white blur-[200px] bg-[#06B6D4]
          max-[377px]:top-[-165px] max-[377px]:right-[160px] max-[377px]:blur-[200px]"
          ></div>
          <div
            className="hidden elip-9n w-full max-w-[497px] h-[497px]  absolute top-[710px]  right-[-258px] opacity-[10%] border border-white blur-[500px] bg-[#6366F1] max-[747px]:block max-[425px]:hidden
             max-[747px]:opacity-[3%]"
          ></div>

          <div
            className="elip-10n hidden max-[747px]:block max-[377px]:block w-full max-w-[869px] h-[869px]  absolute 
            top-[721px]  right-[6px] opacity-[10%] border border-white blur-[300px] bg-[#E11D48]
             max-[747px]:bg-[#DC2626] max-[747px]:max-w-[650px] max-[747px]:h-[650px] max-[747px]:top-[1408px] max-[747px]:right-[-318px] max-[747px]:blur-[500px]"
          ></div>
        </div>

        {/* for more then 900px end */}

        {/* 1st row */}

        <div
          className="LMB_content_1 w-full hidden  max-w-[1540px] gap-[100px] mx-auto z-10  
                 flex  mt-[90px] max-[900px]:block max-[900px]:flex max-[544px]:hidden
                  
                 
                 max-[1440px]:max-w-[1440]   max-[1440px]:gap-[80px] max-[1440px]:ml-[0px]

                 max-[1100px]:gap-[48px] max-[1100px]:w-[100%]
                 max-[1100px]:grid-cols-2 max-[1100px]:mt-[64px]

                 max-[768px]:gap-[48px] max-[768px]:w-[100%]
                 max-[768px]:grid-cols-2 max-[746px]:mt-[64px]

                 max-[747px]:gap-[32px] max-[746px]:w-[100%]
                 max-[746px]:grid-cols-2 max-[747px]:px-[25px]
                 


                  max-[425px]:max-w-[393px] max-[425px]:w-full max-[425px]:h-auto max-[425px]:grid-cols-1 max-[425px]:mt-[30px]

                 max-[375px]:max-w-[343px] max-[375px]:w-full max-[375px]:h-auto max-[375px]:grid-cols-1 max-[375px]:mt-[30px] "
        >
          <div
            className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     
                     max-[768px]:max-w-[331px]
                     max-[746px]:max-w-[331px] max-[747px]:pl-0 "
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
            >
              3 Main C++ Compiler Tips to Develop Successful Apps
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px] gap-[8px] max-[747px]:gap-0">
              <p
                className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[746px]:text-[18px] cursor-pointer 
                           group z-10 max-[747px]:underline decoration-[#525252] max-[747px]:text-[#262626]
                           underline-offset-2"
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>

          <div
            className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     max-[768px]:max-w-[331px]
                     max-[746px]:max-w-[331px] max-[747px]:pl-0  "
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
            >
              Top 5 Platforms For Windows Applications Development in 2022
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  gap-[8px]">
              <p
                className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[746px]:text-[18px] cursor-pointer 
                           group z-10 max-[747px]:underline decoration-[#525252] max-[747px]:text-[#262626]
                           underline-offset-2"
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>
        </div>

        <img
          className="max-w-[60px] w-full h-[80px] absolute top-[-1px] right-[300px] max-[1440px]:right-[149px]
            max-[1441px]:right-[150px] max-[1441px]:
            max-[746px]:hidden"
          src={MLB_Arrow}
          alt="MLB_Arrow"
        />

        <div
          className=" SingleLines text-[#D4D4D4] border border-dashed w-[100%] mt-[80px] h-[2px]
       hidden max-[900px]:block max-[544px]:hidden max-[900px]:max-w-[695px] max-[900px]:mx-auto"
        ></div>

        {/* 2nd row */}
        <div
          className="LMB_content_1 w-full hidden  max-w-[1540px] gap-[100px] mx-auto z-10  
                 flex  mt-[90px] max-[900px]:block max-[900px]:flex max-[544px]:hidden
                  
                 
                 max-[1440px]:max-w-[1440]   max-[1440px]:gap-[80px] max-[1440px]:ml-[0px]

                 max-[1100px]:gap-[48px] max-[1100px]:w-[100%]
                 max-[1100px]:grid-cols-2 max-[1100px]:mt-[64px]

                 max-[768px]:gap-[48px] max-[768px]:w-[100%]
                 max-[768px]:grid-cols-2 max-[746px]:mt-[64px]

                 max-[747px]:gap-[32px] max-[746px]:w-[100%]
                 max-[746px]:grid-cols-2 max-[747px]:px-[25px]


                  max-[425px]:max-w-[393px] max-[425px]:w-full max-[425px]:h-auto max-[425px]:grid-cols-1 max-[425px]:mt-[30px]

                 max-[375px]:max-w-[343px] max-[375px]:w-full max-[375px]:h-auto max-[375px]:grid-cols-1 max-[375px]:mt-[30px] "
        >
          <div
            className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     max-[768px]:max-w-[331px]
                     max-[746px]:max-w-[331px] max-[747px]:pl-0 "
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
            >
              Everything You Need to Know About Cross-Platform Development
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  gap-[8px]">
              <p
                className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[746px]:text-[18px] cursor-pointer 
                           group z-10  max-[747px]:underline decoration-[#525252] max-[747px]:text-[#262626]
                           underline-offset-2"
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>

          <div
            className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     max-[768px]:max-w-[331px]
                     max-[746px]:max-w-[331px] max-[747px]:pl-0 "
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
            >
              A Complete Guide To Programming In C++ – Visual Programming
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  gap-[8px]">
              <p
                className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[746px]:text-[18px] cursor-pointer 
                           group z-10  max-[747px]:underline decoration-[#525252] max-[747px]:text-[#262626]
                           underline-offset-2"
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>
        </div>

        <div
          className="SingleLines text-[#D4D4D4] border border-dashed w-[100%] mt-[80px] h-[2px]
       hidden max-[900px]:block max-[544px]:hidden max-[900px]:max-w-[695px] max-[900px]:mx-auto"
        ></div>

        {/* 3rd row */}
        <div
          className="LMB_content_1 w-full hidden  max-w-[1540px] gap-[100px] mx-auto z-10  
                 flex  mt-[90px] max-[900px]:block max-[900px]:flex max-[544px]:hidden
                  
                 
                 max-[1440px]:max-w-[1440]   max-[1440px]:gap-[80px] max-[1440px]:ml-[0px]

                 max-[1100px]:gap-[48px] max-[1100px]:w-[100%]
                 max-[1100px]:grid-cols-2 max-[1100px]:mt-[64px]

                 max-[768px]:gap-[48px] max-[768px]:w-[100%]
                 max-[768px]:grid-cols-2 max-[746px]:mt-[64px]

                 max-[747px]:gap-[32px] max-[746px]:w-[100%]
                 max-[746px]:grid-cols-2 max-[747px]:px-[25px]


                  max-[425px]:max-w-[393px] max-[425px]:w-full max-[425px]:h-auto max-[425px]:grid-cols-1 max-[425px]:mt-[30px]

                 max-[375px]:max-w-[343px] max-[375px]:w-full max-[375px]:h-auto max-[375px]:grid-cols-1 max-[375px]:mt-[30px] "
        >
          <div
            className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     max-[768px]:max-w-[331px]
                     max-[746px]:max-w-[331px] max-[747px]:pl-0 "
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
            >
              A Complete Guide To Programming In C++ – Object Oriented
              Programming
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  gap-[8px]">
              <p
                className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[746px]:text-[18px] cursor-pointer 
                           group z-10  max-[747px]:underline decoration-[#525252] max-[747px]:text-[#262626]
                           underline-offset-2"
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>

          <div
            className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     max-[768px]:max-w-[331px]
                     max-[746px]:max-w-[331px] max-[747px]:pl-0 "
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
            >
              How C++ Works With Libraries and More
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  gap-[8px]">
              <p
                className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[746px]:text-[18px] cursor-pointer 
                           group z-10  max-[747px]:underline decoration-[#525252] max-[747px]:text-[#262626]
                           underline-offset-2"
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>
        </div>

        <div
          className="LMB_content_1 w-full hidden  max-w-[1540px] gap-[100px] mx-auto z-10  
                 flex  mt-[90px]   max-[544px]:block 
                 max-[544px]:px-[25px]
                  
                 
                 max-[1440px]:max-w-[1440]   max-[1440px]:gap-[80px] max-[1440px]:ml-[0px]

                 max-[1100px]:gap-[48px] max-[1100px]:w-[100%]
                 max-[1100px]:grid-cols-2 max-[1100px]:mt-[64px]

                 max-[768px]:gap-[48px] max-[768px]:w-[100%]
                 max-[768px]:grid-cols-2 max-[746px]:mt-[64px]

                 max-[746px]:gap-[48px] max-[746px]:w-[100%]
                 max-[746px]:grid-cols-2


                  max-[425px]:max-w-[393px] max-[425px]:w-full max-[425px]:h-auto max-[425px]:grid-cols-1 max-[425px]:mt-[30px]

                 max-[376px]:max-w-[343px] max-[376px]:w-full max-[376px]:h-auto max-[376px]:grid-cols-1 max-[376px]:mt-[30px] "
        >
          <div
            className="LMB_c1 flex flex-col w-full   gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     
                    "
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
            >
              3 Main C++ Compiler Tips to Develop Successful Apps
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  ">
              <p
                className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-median text-[#262626] text-[19px] leading-[150%]  max-[746px]:text-[18px] cursor-pointer 
                           group z-10 max-[377px]:underline max-[377px]:leading-[28px] "
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>
          <div className="SingleLines hidden text-[#D4D4D4] border border-dashed w-[100%] mt-[30px] h-[2px] hidden  max-[544px]:block"></div>

          <div
            className="LMB_c1 flex flex-col w-full    gap-[16px]
                     max-[1440px]:gap-[16px] z-10 mt-[30px]
                     
                   "
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
            >
              Top 5 Platforms For Windows Applications Development in 2022
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px] ">
              <p
                className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-median text-[#262626] text-[19px] leading-[150%]  max-[746px]:text-[18px] cursor-pointer 
                           group z-10 max-[377px]:underline"
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>
              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>
          <div className="SingleLines hidden text-[#D4D4D4] border border-dashed w-[100%] mt-[30px] h-[2px] hidden  max-[544px]:block"></div>

          <div
            className="LMB_c1 flex flex-col w-full    gap-[16px]
                     max-[1440px]:gap-[16px] z-10 mt-[30px]
                     
                   "
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
            >
              Everything You Need to Know About Cross-Platform Development
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]">
              <p
                className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-median text-[#262626] text-[19px] leading-[150%]  max-[746px]:text-[18px] cursor-pointer 
                           group z-10 max-[377px]:underline"
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>
          <div className="SingleLines hidden text-[#D4D4D4] border border-dashed w-[100%] mt-[30px] h-[2px] hidden  max-[544px]:block"></div>

          <div
            className="LMB_c1 flex flex-col w-full    gap-[16px]
                     max-[1440px]:gap-[16px] z-10 mt-[30px]
                     
                   "
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
            >
              A Complete Guide To Programming In C++ – Visual Programming
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  ">
              <p
                className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-median text-[#262626] text-[19px] leading-[150%]  max-[746px]:text-[18px] cursor-pointer 
                           group z-10 max-[377px]:underline"
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>
          <div className="SingleLines hidden text-[#D4D4D4] border border-dashed w-[100%] mt-[30px] h-[2px] hidden  max-[544px]:block"></div>

          <div
            className="LMB_c1 flex flex-col w-full    gap-[16px]
                     max-[1440px]:gap-[16px] z-10 mt-[30px]
                     
                   "
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
            >
              A Complete Guide To Programming In C++ – Object Oriented
              Programming
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  ">
              <p
                className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-median text-[#262626] text-[19px] leading-[150%]  max-[746px]:text-[18px] cursor-pointer 
                           group z-10 max-[377px]:underline"
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>
          <div className="SingleLines hidden text-[#D4D4D4] border border-dashed w-[100%] mt-[30px] h-[2px] hidden  max-[544px]:block"></div>

          <div
            className="LMB_c1 flex flex-col w-full    gap-[16px]
                     max-[1440px]:gap-[16px] z-10 mt-[30px]
                     
                   "
          >
            <p
              className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[746px]:text-[18px]"
            >
              Learning & Development
            </p>

            <p
              className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[746px]:text-[28px]"
            >
              How C++ Works With Libraries and More
            </p>

            <div className="LMB_ReadMore flex flex-row w-full max-w-[134px] ">
              <p
                className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-median text-[#262626] text-[19px] leading-[150%]  max-[746px]:text-[18px] cursor-pointer  
                           group z-10 max-[377px]:underline"
              >
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full "></span>
              </p>

              <img
                className="ReadMore-arrow max-w-[28px] h-[28px]"
                src={ReadMore}
                alt="ReadMore"
              />
            </div>
          </div>
          <div className="SingleLines hidden text-[#D4D4D4] border border-dashed w-[100%] mt-[30px] h-[2px] hidden  "></div>
        </div>
      </section>
    );
}
export default LearnMoreBlog;