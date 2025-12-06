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
        className="Learn_More_Blog w-[100%] mt-[128px] relative m-auto
         max-[1440px]:max-w-[1280px]   max-[1440px]:gap-[80px]
         max-[1024px]:max-w-[864px] overflow-x-clip

         max-[768px]:max-w-[718px]  max-[768px]:gap-[64px]
         max-[744px]:max-w-[695px]  max-[744px]:gap-[64px]

         max-[425px]:max-w-[393px]  max-[425px]:h-auto max-[425px]:gap-[30px]
         max-[425px]:mt-[80px]

         max-[375px]:max-w-[343px]  max-[375px]:h-auto max-[375px]:gap-[30px]
         max-[375px]:mt-[80px]"
      >
        <p
          className="LMB_P text-center opacity-100 font-archivo font-semibold text-[48px] leading-[120%] tracking-[-1px] text-[#262626]
            max-[1440px]:left-[232px]
            max-[744px]:text-[36px] max-[744px]:left-[54px]
            max-[425px]:text-[30px]
            max-[375px]:text-[30px]"
        >
          Learn More on the
          <span
            className="LMB_S font-archivo font-semibold text-[48px] leading-[120%] tracking-[-1px] bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent pl-[8px]
                max-[744px]:text-[36px] 
                max-[425px]:text-[30px]
                max-[375px]:text-[30px]"
          >
            Embarcadero Blog
          </span>
        </p>

        <div
          className="LMB_content_1 w-full relative max-w-[1462px] gap-[100px] mx-auto z-10  
                 grid grid-cols-3 mt-[90px] 
                 max-[1500px]:pl-[20px]   max-[1500px]:pr-[20px] 
                 
                 max-[1440px]:max-w-[1440]   max-[1440px]:gap-[80px] max-[1440px]:ml-[0px]

                 max-[1100px]:gap-[48px] max-[1100px]:w-[100%]
                 max-[1100px]:grid-cols-2 max-[1100px]:mt-[64px]

                 max-[768px]:gap-[48px] max-[768px]:w-[100%]
                 max-[768px]:grid-cols-2 max-[744px]:mt-[64px]

                 max-[744px]:gap-[48px] max-[744px]:w-[100%]
                 max-[744px]:grid-cols-2


                  max-[425px]:max-w-[393px] max-[425px]:w-full max-[425px]:h-auto max-[425px]:grid-cols-1 max-[425px]:mt-[30px]

                 max-[375px]:max-w-[343px] max-[375px]:w-full max-[375px]:h-auto max-[375px]:grid-cols-1 max-[375px]:mt-[30px] "
        >
          {data.map((item, index) => (
            <div key={index}>
              <div
                className="LMB_c1 flex flex-col w-full max-w-[466px]  pl-[8px] gap-[16px]
                     max-[1440px]:gap-[16px] z-10
                     
                     max-[768px]:max-w-[331px]
                     max-[744px]:max-w-[331px]"
              >
                <p
                  className="LMB_c1_p1 font-archivo font-normal text-[20px] leading-[150%] tracking-[0px] text-[#525252]
                         max-[1440px]:h-[30px] max-[744px]:text-[18px]"
                >
                  Learning & Development
                </p>

                <p
                  className="LMB_c1_p2 font-archivo font-semibold text-[30px] leading-[150%] tracking-[0px] text-[#262626]
                
                max-[1024px]:text-[23px]
                max-[744px]:text-[28px]"
                >
                  {item.title}
                </p>

                <div className="LMB_ReadMore flex flex-row w-full max-w-[134px]  gap-[8px]">
                  <p
                    className="LMB_RM_1 relative inline-block w-[98px]  font-archivo font-normal text-[19px] leading-[150%] text-[#525252] max-[744px]:text-[18px] cursor-pointer 
                           group z-10"
                  >
                    Read More
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#8e0d0d] transition-all duration-500 ease-out group-hover:w-full"></span>
                  </p>

                  <img
                    className="ReadMore-arrow max-w-[28px] h-[28px]"
                    src={ReadMore}
                    alt="ReadMore"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="elip-8 w-full max-w-[731px] h-[731px]  absolute top-[123px]  left-[-484px] opacity-[10%] border border-white blur-[100px] bg-[#06B6D4]"></div>

          <div className="elip-9 w-full max-w-[731px] h-[731px]  absolute top-[-606px]  right-[-267px] opacity-[10%] border border-white blur-[200px] bg-[#06B6D4]"></div>
        </div>

        <img
          className="max-w-[60px] w-full h-[80px] absolute top-[-1px] right-[300px] max-[1440px]:right-[149px]
            max-[1280px]:hidden
            max-[744px]:hidden"
          src={MLB_Arrow}
          alt="MLB_Arrow"
        />
      </section>
    );
}
export default LearnMoreBlog;