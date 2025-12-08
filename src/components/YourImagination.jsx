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
    name: "Extend",
    image: extend,
    title: "Extend the Delphi IDE With Hundreds of Components.",
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
      "Use enhanced Remote Desktop support (for VCL and IDE) to collaborate remotely with your team.",
      "Track and manage changes quickly using version control systems including Subversion, Git and Mercurial repositories.",
      "Easily navigate changes and history using the history tab in the code viewer with the built-in difference viewer.",
      "Use RAD Studio command-line compilers ideal for quickly integrating into continuous build configurations using our support for MSBuild.",
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
];





const YourImagination = () => {
  const [activeTab, setActiveTab] = useState("Design");

  const currentTab = dataTab.find((tab) => tab.name === activeTab);

  return (
    <section
      className="Your-Imagination flex flex-col w-full max-w-[1536px] gap-[48px] ml-auto mr-auto mt-[128px] 
    max-[1440px]:max-w-[1280px] max-[1440px]:gap-[48px]
    max-[1024px]:max-w-[1024px]
    max-[768px]:max-w-[768px] max-[768px]:items-center
    max-[744px]:max-w-[744px] max-[744px]:gap-[48px] max-[744px]:mt-[80px] max-[744px]:items-center
    max-[744px]:overflow-x-hidden
    max-[425px]:max-w-[393px] max-[425px]:h-auto max-[425px]:mt-[80px]
    max-[375px]:max-w-[343px] max-[375px]:h-auto max-[375px]:mt-[80px]"
    >
      <div className="Imagination-pTag-span m-auto max-[425px]:hidden">
        <p className="Imagination-p1 font-archivo font-semibold text-[48px] leading-[57.6px] tracking-[-1px] text-[#262626] max-[744px]:text-[36px]">
          Ignite
          <span className="Imagination-s1 font-archivo font-semibold text-[48px] leading-[57.6px] tracking-[-1px] bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent max-[744px]:text-[36px]">
            {" "}
            Your Imagination
          </span>
        </p>
      </div>

      <div className="Imagination-Container flex flex-col items-center w-full max-w-[1536px] max-[1440px]:max-w-[1280px] max-[1440px]:gap-[32px] max-[768px]:max-w-[718px] max-[768px]:gap-[24px] max-[744px]:max-w-[696px] max-[744px]:gap-[24px] max-[375px]:max-w-[343px] max-[375px]:h-auto">
        <div
          className="ImaginationNav flex flex-row w-full h-f rounded-[16px] border border-[#E5E5E5] p-[8px] justify-between 
        max-[1440px]:max-w-[1316px] max-[1440px]:h-[73px] max-[1440px]:gap-[8px] max-[1024px]:overflow-x-scroll
        max-[1024px]:overflow-y-hidden max-[1024px]:max-w-[900px] max-[1024px]:w-full max-[1024px]:h-[60px] max-[1024px]:justify-start max-[1024px]:items-center
        
        max-[768px]:overflow-x-scroll max-[768px]:overflow-y-hidden max-[768px]:max-w-[760px] max-[768px]:w-full max-[768px]:h-[60px] max-[768px]:justify-start max-[768px]:items-center max-[768px]:py-[35px]
        
        max-[744px]:max-w-[744px] max-[744px]:w-full max-[744px]:h-[68px] max-[744px]:overflow-x-scroll max-[744px]:overflow-y-hidden max-[744px]:justify-start max-[744px]:items-center max-[744px]:py-[35px]"
        >
          {dataTab.map((tab) => (
            <a
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`cursor-pointer flex flex-row max-w-[217.14px] h-[57px] py-[14px] px-[24px] rounded-[12px] justify-center items-center font-archivo font-medium text-[24px] leading-[120%] tracking-[-1px] text-center 
                max-[1440px]:max-w-[180px] max-[1440px]:h-[57px]
                 max-[744px]:max-w-[107px] max-[744px]:h-[52px] max-[744px]:text-[20px] group relative
                   ${
                     activeTab === tab.name
                       ? "bg-[#262626] text-white"
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
            className="ImaginationHero flex justify-center items-center w-full max-w-[1536px] rounded-[16px] mt-[32px]
            max-[1440px]:max-w-[1280px] max-[1440px]:h-auto max-[1440px]:gap-[32px]
            max-[1024px]:flex-col max-[1024px]:max-w-[974px]
            max-[768px]:max-w-[718px] max-[768px]:h-auto max-[768px]:flex-col max-[768px]:items-center max-   [768px]:justify-center max-[768px]:gap-[0px]
            max-[744px]:max-w-[696px] max-[744px]:h-auto max-[744px]:flex-col max-[744px]:items-center max-   [744px]:justify-center max-[744px]:gap-[0px]
            max-[425px]:max-w-[393px] max-[375px]:max-w-[343px]"
          >
            <div
              className="IPicture flex flex-row items-center justify-center w-full max-w-[883px] h-[740px] 
                p-[48px] bg-[#CECECE33] 
               max-[1440px]:max-w-[733px]
               max-[1024px]:max-w-[1024px] max-[1024px]:h-auto
               max-[744px]:max-w-[696px] max-[744px]:h-[460px] max-[744px]:p-[64px]
               max-[425px]:max-w-[393px] max-[425px]:h-[240px] max-[425px]:py-[48px] max-[425px]:px-[32px]
               max-[375px]:max-w-[343px] max-[375px]:h-[240px] max-[375px]:py-[48px] max-[375px]:px-[32px]"
            >
              <img
                className="IgnitPic max-w-[482px] h-[394px] max-[425px]:max-w-[297px] max-[425px]:h-[238px] max-[375px]:max-w-[247px] max-[375px]:h-[188px]"
                src={currentTab?.image}
                alt={currentTab?.name}
              />
            </div>

            <div
              className="IContent relative flex flex-col w-full max-w-[653px] h-auto p-[32px] bg-white backdrop-blur-3xl gap-[56px] 
              max-[1440px]:max-w-[547px] max-[1440px]:h-auto max-[1440px]:gap-[56px] max-[1440px]:py-[58px]  max-[1440px]:px-[32px]
              max-[744px]:max-w-[696px] max-[744px]:gap-[16px] max-[375px]:max-w-[343px]
              max-[1024px]:max-w-[1024px]"
            >
              <div
                className="Icontent-1 flex flex-col w-full max-w-[589px] h-auto gap-[29px] 
            max-[1440px]:max-w-[483px] max-[1440px]:h-auto max-[1440px]:gap-[24px]
            max-[744px]:max-w-[632px] max-[744px]:h-auto max-[744px]:items-center
            max-[425px]:max-w-[295px] z-10
            max-[345px]:h-auto max-[375px]:max-w-[295px] max-[375px]:h-auto max-[1024px]:max-w-[900px]"
              >
                <p
                  className="ipTag opacity-100 font-archivo font-medium text-[28px] leading-[150%] tracking-[-1px] text-[#171717] 
              max-[744px]:text-[24px]
              max-[375px]:text-[24px]"
                >
                  {currentTab?.title}
                </p>
                <div
                  className="ipTag-1 list-disc pl-5 flex flex-col max-w-[589px] h-auto gap-[24px] max-[1440px]:gap-[24px] 
              max-[375px]:max-w-[295px] max-[375px]:h-auto"
                >
                  {currentTab?.points.map((point, i) => (
                    <p
                      key={i}
                      className="ipTag-1-1 list-item opacity-100 font-archivo font-normal text-[16px] leading-[150%] tracking-[0px] text-[#171717]"
                    >
                      {point}
                    </p>
                  ))}
                  <p className="ipReadMore relative  opacity-100 font-archivo font-normal text-[18px] leading-[28px] tracking-[0px]  decoration-solid decoration-0 bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] bg-clip-text text-transparent max-[375px]:text-end cursor-pointer group hover:text-[#055e05]">
                    Read More
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#FE3B76] transition-all duration-500 ease-out group-hover:w-[17%]"></span>
                  </p>
                </div>
              </div>

              <div
                className="Icontent-2 flex flex-row w-full max-w-[343px] h-[28px] gap-[8px] 
                 max-[744px]:ml-[21px] z-10
                 max-[375px]:max-w-[295px] max-[375px]:w-full max-[375px]:ml-[0px] max-[375px]:items-center "
              >
                <p className="DownloadRAD relative cursor-pointer opacity-100 font-archivo font-normal text-[18px] leading-[28px] tracking-[0px] underline decoration-solid decoration-offset-0 decoration-0 text-[#262626] hover:text-[#055e05] hover:no-underline group">
                  Download RAD Studio Feature Matrix
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#FE3B76] transition-all duration-500 ease-out group-hover:w-full"></span>
                </p>
                <img
                  className="cloudImage cursor-pointer w-full max-w-[28px] h-[28px]"
                  src={cloud}
                  alt="cloud"
                />
              </div>

              <div className="elip-5 w-[90%] h-[100%] opacity-[10%] border border-white bg-[#DC2626] blur-[100px] absolute top-[0]"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default YourImagination;
