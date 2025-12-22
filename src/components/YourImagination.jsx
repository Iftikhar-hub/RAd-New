import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";


import cloud from "../assets/icons/cloud.png";
import IgnitPicture from "../assets/icons/IgnitPicture.png";
import develop from "../assets/icons/develop.png";
import debug from "../assets/icons/debug.png";
import deploy from "../assets/icons/deploy.png";
import extend from "../assets/icons/extend.png";
import colaboration from "../assets/icons/colaboration.png";
import coswQuility from "../assets/icons/coswQuility.png";

const dataTab = [
  {
    name: "Design",
    image: IgnitPicture,
    title: "Design beautiful desktop and mobile app UIs with RAD Studio.",
    points: [
      "Use RAD Studio's award-winning VCL framework for Windows and FireMonkey (FMX) visual framework to create cross-platform responsive UIs.",
      "Enjoy the new high-DPI compatible IDE on 4k+ screens.",
      "VCL library improved for use of Microsoft’s WebView 2 control in both TEdgeBrowser and TWebBrowser components, with better support for UserDataFolder and ExecutableFolder configurations.",
      "Use VCL Styles at design time! Prototype stylish UIs even faster by seeing immediately at design-time how your styled forms and controls will look when running.",
      "FireMonkey design-time guidelines: Prototype faster with visual lines and enhanced margin and padding support.",
      "Improved TPathData processing and rendering in FireMonkey library, including quadratic Bézier curve commands and other transformations.",
    ],
  },
  {
    name: "Develop",
    image: develop,
    title: "Code Faster and Smarter with Delphi",
    points: [
      "IDE support for Markdown documents and VCL-based HTML preview.",
      "Inactive code highlighting in the Code Editor.",
      "Utilize the powerful, versatile and easy-to-learn Object Pascal language and customize the IDE to meet your coding style.",
      "Use Code Insight™ for code completion via a modern Language Server Protocol based on your code while libraries help you code quickly and accurately.",
      "Get hints and tips from inline documentation as you code.",
      "Keep development agile with the VCL designer, Agile refactoring and Live Templates.",
      "Integrate with version control systems including Git, Subversion and Mercurial.",
    ],
  },
  {
    name: "Debug",
    image: debug,
    title: "Debug Faster with RAD Studio’s Integrated Native Debugging.",
    points: [
      "Add conditional breakpoints to quickly pause program execution at a specified location or when a particular condition occurs.",
      "Explore the entire call stack to trace the route the executing code took to reach its location.",
      "Inspect the current value of variables while your program pauses during debugging.",
      "Keep Code Insight™ code completion running while debugging.",
      "Debug on any device! Deploy your app to any iOS, Android, macOS, or Linux device and debug as if it were running locally.",
      "LLDB debugging for Delphi’s Linux toolchain.",
    ],
  },
  {
    name: "Deploy",
    image: deploy,
    title: "Compile and Deploy High-Performance Native Apps with Delphi.",
    points: [
      "Provision your apps for Windows 11 with integrated MSIX support! Be ready for Microsoft's new release.",
      "Support for Microsoft's WebView 2 control (Edge Chromium) in the WebBrowser component.",
      "Go from Ad Hoc to App Store fast. Rapidly produce application bundles that can be deployed to Windows Store, Apple App Store and Google Play Store.",
      "View your apps with iOS Simulator for Delphi by generating binaries for macOS devices running on ARM-64 (M1 or M2 CPUs)",
      "Compile for macOS (M-series Apple Silicon) and use the new universal package for AppStore submission. You can now compile for both existing Intel, and the new M-series macOS processors (Apple Silicon).",
      "Compile for Android API 32! Android API and Libraries updated - API 30, Google Play V3, Android 12. Keep current with the latest requirements for Android as the platform evolves. - This includes latest billing API.",
    ],
  },
  {
    name: "Code Quality",
    image: coswQuility,
    title: "Improve the Quality of Your Code with Delphi.",
    points: [
      "Find coding errors automatically and solve them with Fast Error Insight.",
      "Use Visual Studio Code to edit Delphi source with full code completion.",
      "LSP awareness of Include files and auto-restart of LSP server.",
      "Auto code completion with Tab key.",
      "RTL Quality focus: TZipFile, 64bit improvements for large data structures, Bluetooth LE Record Helper for TDateTime in System.DateUtils.",
      "Use built-in refactoring to streamline, simplify and improve both the performance and readability of your application code.",
    ],
  },
  {
    name: "Collaborate",
    image: colaboration,
    title:
      "Collaborate Better with Delphi Teamwork and Remote Desktop Features.",
    points: [
      "Find coding errors automatically and solve them with Fast Error Insight.",
      "Use Visual Studio Code to edit Delphi source with full code completion.",
      "LSP awareness of Include files and auto-restart of LSP server.",
      "Auto code completion with Tab key.",
      "RTL Quality focus: TZipFile, 64bit improvements for large data structures, Bluetooth LE Record Helper for TDateTime in System.DateUtils.",
      "Use built-in refactoring to streamline, simplify and improve both the performance and readability of your application code.",
    ],
  },
  {
    name: "Extend",
    image: extend,
    title: "Extend the Delphi IDE With Hundreds of Components.",
    points: [
      "Use enhanced Remote Desktop support (for VCL and IDE) to collaborate remotely with your team.",
      "Track and manage changes quickly using version control systems including Subversion, Git and Mercurial repositories.",
      "Easily navigate changes and history using the history tab in the code viewer with the built-in difference viewer.",
      "Use RAD Studio command-line compilers ideal for quickly integrating into continuous build configurations using our support for MSBuild.",
    ],
  },
];






const YourImagination = () => {
  const [activeTab, setActiveTab] = useState("Design");
  

  const currentTab = dataTab.find((tab) => tab.name === activeTab);

  return (
    <section
      className="Your-Imagination flex flex-col w-[100%] gap-[48px] ml-auto mr-auto mt-[128px] 

    max-[1440px]:max-w-[1280px] max-[1440px]:gap-[48px]
    max-[1024px]:max-w-[1024px]
    max-[768px]:max-w-[768px] max-[768px]:items-center
    

    max-[747px]:max-w-[744px] max-[746px]:gap-[48px] max-[747px]:mt-[80px] max-[747px]:items-center
    max-[747px]:overflow-x-hidden
    max-[425px]:max-w-[393px] max-[425px]:h-auto max-[425px]:mt-[80px]
    max-[376px]:w-[100%] max-[375px]:h-auto max-[375px]:mt-[80px]"
    >
      <div className="Imagination-pTag-span m-auto max-[425px]:hidden">
        <p className="Imagination-p1 font-archivo font-semibold text-[48px] leading-[57.6px] tracking-[-1px] text-[#262626] max-[747px]:text-[36px] max-[747px]:font-medium">
          Ignite
          <span
            className="Imagination-s1 font-archivo font-semibold text-[48px] leading-[57.6px] tracking-[-1px] 
           
          bg-[linear-gradient(77.38deg,_#FE3B76_9.15%,_#AF29CE_49.65%,_#2931DD_90.16%,_#2931DD_90.16%)]

          max-[747px]:bg-[linear-gradient(0deg,_#262626,_#262626)] max-[747px]:bg-[linear-gradient(77.72deg,_#FE3B76_51.97%,_rgba(254,59,118,0.8)_63.95%,_rgba(41,49,221,0.8)_76.53%,_#2931DD_90.31%)]


           bg-clip-text text-transparent max-[747px]:text-[36px] max-[747px]:font-medium"
          >
            {" "}
            Your Imagination
          </span>
        </p>
      </div>

      <div
        className="Imagination-Container flex flex-col items-center mx-auto px-[196px] w-full max-w-[1920px] max-[1441px]:px-[30px] max-[1441px]:w-[95%] max-[1440px]:gap-[32px] max-[768px]:max-w-[718px] 
        
        max-[768px]:gap-[24px]  max-[768px]:px-0
       max-[746px]:w-[95%]  max-[376px]:w-[100%] max-[376px]:h-auto
      max-[377px]:mx-0 max-[377px]:px-[16px]"
      >
        <div
          className="ImaginationNav flex flex-row rounded-[16px] border border-[#E5E5E5] p-[8px] justify-between w-full max-w-[1540px] mx-auto overflow-x-scroll scrollHide
        max-[1441px]:w-[96%] max-[1440px]:h-[73px] max-[1440px]:gap-[8px]

        max-[1024px]:overflow-x-scroll 
        max-[1024px]:overflow-y-hidden max-[1024px]:max-w-[900px] max-[1024px]:w-full max-[1024px]:h-[80px] max-[1024px]:justify-start max-[1024px]:items-center
        

        max-[768px]:overflow-x-scroll max-[768px]:overflow-y-hidden max-[768px]:max-w-[760px] max-[768px]:w-full max-[768px]:h-[60px] max-[768px]:justify-start max-[768px]:items-center max-[768px]:py-[35px]
        
         max-[746px]:w-auto max-[746px]:h-[68px] max-[746px]:overflow-x-scroll max-[746px]:overflow-y-hidden max-[746px]:justify-start max-[746px]:items-center max-[746px]:py-[35px]
        max-[377px]:w-[375px]"
        >
          {dataTab.map((tab) => (
            <a
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`cursor-pointer flex flex-row max-w-[217.14px] h-[57px] py-[14px] px-[24px] rounded-[12px] justify-center items-center font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-center whitespace-nowrap
               
                 max-[747px]:max-w-[154px] max-[747px]:h-[52px] max-[747px]:text-[20px] group relative
                   ${
                     activeTab === tab.name
                       ? "bg-[#262626] text-white px-[50px] max-[747px]:px-[24px]"
                       : "text-[#525252] hover:text-[#055e05]"
                   }`}
            >
              {tab.name}
              {activeTab !== tab.name && (
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
              )}
            </a>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab?.name}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="ImaginationHero flex justify-center items-center mx-auto w-full max-w-[1920px] rounded-[16px] mt-[32px] z-10

            max-[1441px]:w-[96%] max-[144px]:h-auto max-[1441px]:gap-[32px]

            max-[1024px]:flex-col max-[1024px]:max-w-[974px]
            max-[747px]:mt-0            max-[768px]:max-w-[718px] max-[768px]:h-auto max-[768px]:flex-col max-[768px]:items-center max-   [768px]:justify-center max-[768px]:gap-[0px]

            max-[746px]:w-full max-[746px]:h-auto max-[746px]:flex-col max-[746px]:items-center max-   [744px]:justify-center max-[746px]:gap-[0px]
            max-[425px]:max-w-[393px] max-[376px]:max-w-[343px] max-[377px]:mt-[0px]"
          >
            <div
              className="IPicture flex flex-row items-center justify-center w-full max-w-[883px] h-[740px] 
                p-[48px] bg-[#CECECE33] 

               max-[1441px]:max-w-[733px] rounded-tl-[12px] rounded-bl-[12px] max-[1441px]:h-[864px]
               max-[1441px]:

               max-[1024px]:max-w-[1024px] max-[1024px]:h-auto

               max-[746px]:max-w-[696px] max-[746px]:rounded-tl-xl max-[746px]:rounded-tr-xl
               max-[746px]:rounded-bl-[0px]
               
                max-[746px]:h-[460px] max-[746px]:p-[64px]
               max-[425px]:max-w-[393px] max-[425px]:h-[240px] max-[425px]:py-[48px] max-[425px]:px-[32px]
               max-[375px]:max-w-[343px] max-[375px]:h-[240px] max-[375px]:py-[48px] max-[376px]:px-[32px]
               max-[425px]:rounded-[12px] "
            >
              <img
                className="IgnitPic max-w-[482px] h-[394px] max-[425px]:max-w-[297px]  max-[376px]:max-w-[247px] max-[425px]:h-[188px] 
                max-[600px]:h-[300px]"
                src={currentTab?.image}
                alt={currentTab?.name}
              />
            </div>

            <div
              className="IContent relative flex flex-col w-full max-w-[653px] h-auto p-[32px] bg-white backdrop-blur-3xl gap-[56px] 

              max-[1441px]:max-w-[547px] max-[1441px]:h-auto max-[1441px]:gap-[56px] max-[1441px]:py-[58px]  max-[1441px]:px-[32px] 
              
              max-[747px]:overflow-hidden
              max-[747px]:p-[32px]

              max-[747px]:max-w-[696px] max-[746px]:gap-[16px] 
              
              max-[377px]:max-w-[343px]
              max-[1024px]:max-w-[1024px] max-[377px]:pt-[24px] max-[377px]:px-[24px]
              max-[747px]:rounded-bl-[16px]
              max-[747px]:rounded-br-[16px] max-[747px]:pb-[32px]"
            >
              <div
                className="Icontent-1 flex flex-col w-full max-w-[589px] h-auto gap-[29px] 
                
                max-[1440px]:max-w-[483px] max-[1440px]:h-auto max-[1440px]:gap-[24px]

                max-[746px]:max-w-[632px] max-[746px]:h-auto max-[746px]:items-start
               max-[425px]:max-w-[295px] z-10 max-[377px]:gap-[24px]
               max-[345px]:h-auto max-[377px]:w-full max-[377px]:h-auto max-[377px]:max-w-[343px]
                max-[1024px]:max-w-[900px]"
              >
                <p
                  className="ipTag opacity-100 font-archivo font-medium text-[28px] leading-[150%] tracking-[-1px] text-[#171717] 
              max-[747px]:text-[24px]
              max-[377px]:text-[24px] max-[377px]:leading-[32px]"
                >
                  {currentTab?.title}
                </p>
                <div
                  className="ipTag-1 list-disc pl-5 flex flex-col  h-auto gap-[24px] max-[1440px]:gap-[24px] 
                  max-[376px]:w-[100%] 
                  "
                >
                  {currentTab?.points.map((point, i) => (
                    <p
                      key={i}
                      className={`ipTag-1-1 list-item opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717] max-[425px]:text-[16px]
                      max-[377px]:text-[16px] ${
                        i >= 3 ? "max-[377px]:hidden" : ""
                      }`}
                    >
                      {point}
                    </p>
                  ))}
                  <p
                    className="ipReadMore relative  opacity-100 font-archivo font-normal text-[18px] leading-[28px] tracking-[0px]  decoration-solid

                  bg-[linear-gradient(80.32deg,_#FE3B76_53.77%,_#AF29CE_71.1%,_#2931DD_88.44%)] bg-clip-text text-transparent

                  max-[400px]:text-end cursor-pointer group hover:text-[#055e05] max-[1024px]:hidden max-[400px]:block
                  max-[377px]:underline"
                  >
                    Read More
                    <span className=" max-[377px]:hidden absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-[17%]"></span>
                  </p>
                </div>
              </div>
              <p className="ipReadMore hidden relative  opacity-100 font-archivo font-normal text-[18px] leading-[28px] tracking-[0px]  decoration-solid decoration-0 bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent max-[400px]:text-end cursor-pointer group hover:text-[#055e05] max-[1024px]:block max-[400px]:hidden">
                Read More
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-[17%]"></span>
              </p>

              <div
                className="Icontent-2 flex flex-row w-full max-w-[343px] h-[28px] gap-[8px] 
                  z-10
                 max-[377px]:max-w-[295px] max-[376px]:w-full max-[377px]:ml-[0px] max-[376px]:items-center
                 max-[377px]:mt-[16px] "
              >
                <p
                  className="DownloadRAD relative cursor-pointer opacity-100 font-archivo font-normal text-[18px] leading-[28px] tracking-[0px]  decoration-solid decoration-offset-0 decoration-0 text-[#262626] hover:text-[#055e05] hover:no-underline group
                max-[425px]:text-[14px] max-[377px]:text-[18px]"
                >
                  Download RAD Studio Feature Matrix
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#055e05] transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="absolute left-0  bottom-[4px] h-[1px] w-full bg-[#262626] "></span>
                </p>
                <img
                  className="cloudImage cursor-pointer w-full max-w-[28px] h-[28px]"
                  src={cloud}
                  alt="cloud"
                />
              </div>

              <div className="elip-5 w-[90%] h-[100%] opacity-[10%] border border-white bg-[#DC2626] blur-[250px] max-[377px]:blur-[80px] absolute top-[0] "></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default YourImagination;
