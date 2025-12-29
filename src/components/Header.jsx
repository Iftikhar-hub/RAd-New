import Search from "../assets/icons/Search.png";
import mart from "../assets/icons/mart.png";
import Languag from "../assets/icons/Languag.png";

const Header = () => {
  return (
    <section
      className="
        w-full relative bg-[#262626] text-white py-2 z-[100]
        px-[10px] sm:px-[10px] md:px-[20px] lg:px-[40px] xl:px-[70px] 2xl:px-24
      "
    >
      <div
        className="
          w-full mx-auto flex justify-between items-center py-4
          flex-col gap-2
          sm:gap-3
          sm:flex-row sm:gap-0
        "
      >
        
        <div
          className="
            flex items-center text-white
            flex-col sm:flex-row
          "
        >
          
          <p
            className=" 
              text-[10px] font-light
              hidden
              sm:block sm:text-[14px]
              lg:hidden
              lg:text-[15px]
              xl:hidden
              2xl:block
            "
          >
            See what’s new in
            <span className="font-medium ml-1">
              Delphi, C++ Builder, and RAD Studio Watch the Replay
            </span>
          </p>

          
          <p
            className=" text-[13px]
              text-[10px] font-light
              block  
              sm:hidden
              md:hidden
              lg:block
              xl:block
              2xl:hidden
              
            "
          >
            See what’s new in
            <span className="font-medium ml-1">
              Delphi, C++ Builder, and RAD Studio
            </span>
          </p>

          
          <a
            href="#"
            className=" text-[13px]
              underline text-white mt-1
              text-[11px] max-[695px]:hidden max-[377px]:block
              sm:text-[14px] sm:mt-0 sm:ml-2
              md:text-[16px]
              lg:text-[14px]
            "
          >
            Watch the Replay
          </a>
        </div>

       
        <div className="flex items-center gap-6">
          
          <div
            className="
              hidden
               xl:gap-6 xl:text-[14px]
              lg:text-sm
              xl:flex
              
            "
          >
            <a href="#" className="hover:text-gray-300">
              My Downloads
            </a>
            <a href="#" className="hover:text-gray-300">
              Upgrade Center
            </a>
            <a href="#" className="hover:text-gray-300">
              My Customer Portal
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact Us
            </a>
          </div>

          
          <div className="flex items-center gap-4">
            <img
              src={Search}
              alt="Search"
              className="w-[20px] h-[20px] cursor-pointer"
            />
            <img
              src={mart}
              alt="Mart"
              className="w-[20px] h-[20px] cursor-pointer"
            />
            <img
              src={Languag}
              alt="Language"
              className="w-[20px] h-[20px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
