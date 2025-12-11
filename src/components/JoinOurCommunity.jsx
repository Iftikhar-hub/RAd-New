import GlobalUsers from "../assets/icons/GlobalUsers.png";

const JoinOurCoummunity = () => {
    return (
      <section
        className="Join_Our_Community relative flex justify-center items-center w-[100%] mx-auto h-[640px] bg-[#FFFFFF66] overflow-x-clip px-[196px]
         max-[1440px]:h-[640px] max-[1440px]:px-[30px]
          

        max-[800px]:max-w-[800px] max-[800px]:mt-[180px] max-[800px]:flex-col

        max-[744px]:max-w-[744px] max-[744px]:flex-col

        max-[425px]:max-w-[425px] max-[425px]:w-full max-[425px]:h-auto max-[425px]:mt-[80px]
        max-[375px]:max-w-[375px] max-[375px]:w-full max-[375px]:h-auto max-[375px]:mt-[80px]"
      >
        <div
          className="JOC_content flex relative flex-col w-full max-w-[655px] gap-[32px]
             max-[1440px]:max-w-[514px]  max-[1440px]:gap-[32px] z-10

             max-[800px]:max-w-[750px] max-[800px]:items-center 
             max-[744px]:max-w-[695px] max-[744px]:items-center 


             max-[425px]:max-w-[425px] max-[425px]:h-auto max-[425px]:gap-[32px] max-[425px]:top-[48px] 

             max-[375px]:max-w-[343px] max-[375px]:h-auto max-[375px]:gap-[32px] max-[375px]:top-[48px] "
        >
          <div
            className="JOC_c1 flex flex-col w-[100%]  gap-[8px]
                   max-[1440px]:gap-[8px] max-[744px]:text-center max-[375px]:mt-[-100px]
                   max-[375px]:h-auto"
          >
            <div
              className="TwoPs max-[800px]:flex max-[800px]:justify-center

               max-[800px]:items-center max-[800px]:gap-[8px]
              
              max-[744px]:flex max-[744px]:justify-center
               max-[744px]:items-center max-[744px]:gap-[8px]
               max-[662px]:block
                max-[425px]:block
                    max-[375px]:block"
            >
              <p
                className="JOC_JoinOur font-archivo font-semibold text-[48px] leading-[120%] tracking-[-1px] text-neutral-800
                    
                        max-[800px]:text-[36px] 
                        
                        max-[425px]:text-[30px]
                        max-[375px]:text-[30px]"
              >
                Join Our
              </p>
              <p
                className="JOC_developer font-archivo font-semibold text-[48px] leading-[120%] tracking-[-1px] bg-[linear-gradient(77.38deg,#FE3B76_9.15%,#AF29CE_49.65%,#2931DD_90.16%)] bg-clip-text text-transparent
                    
                       max-[800px]:text-[36px] 
                    
                       max-[425px]:text-[27px]
                       max-[375px]:text-[27px]"
              >
                Global Developer Community
              </p>
            </div>

            <p
              className="JOC_d1 font-archivo font-normal text-[24px] leading-[150%] tracking-[0px] text-[#525252]
                   
                    max-[800px]:text-[20px] max-[800px]:text-center"
            >
              Join our email list and receive the latest case studies, event
              updates, product news, and much more.
            </p>
          </div>

          <div
            className="JOC_c2 flex flex-row w-full max-w-[491px] h-[52px] gap-[16px]
                max-[1440px]:h-[48px] 

                max-[768px]:mt-[auto]
                max-[744px]:mt-[auto]
                max-[425px]:max-w-[393px] max-[425px]:h-auto max-[425px]:flex-col
                max-[375px]:max-w-[343px] max-[375px]:h-auto max-[375px]:flex-col"
          >
            <input
              className="JOC_emailAddress w-full max-w-[354px] h-[100%] rounded-[8px] border 
              border-[#055e05] bg-[#FFFFFFCC] py-[18px] px-[20px] gap=[10px] backdrop-blur-[32px]
                    max-[1440px]:max-w-[361px] max-[1440px]:h-[48px] max-[1440px]:py-[12px] max-[1440px]:px-[20px] max-[1440px]:gap-[10px]"
              type="text"
              placeholder="Your Email"
            />

            <button
              className="Btn_Subs w-full cursor-pointer max-w-[121px] h-[52px] px-[24px] py-[14px] rounded-[8px] bg-[#262626] shadow-[0_4px_32px_0_#FF5E651A] font-figtree font-medium text-[16px] leading-[24px] tracking-[0px] text-white flex items-center justify-center gap-[10px]
                    max-[1440px]:max-w-[122px] max-[1440px]:h-[48px]
                    max-[425px]:max-w-[393px]
                    max-[375px]:max-w-[343px] hover:bg-[#565454]"
              type="button"
            >
              Subscribe
            </button>
          </div>

          <div
            className="elip-j11 w-full max-w-[869px] h-[869px]  absolute bottom-[-692px]  
          right-[181px] opacity-[10%] border border-white -z-20 blur-[500px]  bg-[#E11D48]"
          ></div>
        </div>

        <div
          className="JOC_map w-full max-w-[870px]  flex justify-center items-center
            max-[1440px]:max-w-[734px]

            max-[768px]:max-w-[718px] max-[800px]:mt-[30px]
            max-[744px]:max-w-[695px] 
            max-[425px]:max-w-[393px] max-[425px]:w-full max-[425px]:h-[209px] max-[425px]:mt-[30px] 
            max-[375px]:max-w-[343px] max-[375px]:w-full max-[375px]:h-[209px] max-[375px]:mt-[30px]"
        >
          <img
            className="jm w-[100%]  
             
           "
            src={GlobalUsers}
            alt="GlobalUsers"
          />
        </div>
      </section>
    );




}
export default JoinOurCoummunity;