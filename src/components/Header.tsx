import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import HeaderLogo from "../assests/headerImg.png";
import EnqueryPopUp from "../components/EnqueryPopUp";

const Header = () => {
  return (
    <header className="bg-white pt-28 pb-16 md:pb-28">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT SECTION */}
          <div className="text-center md:text-left space-y-5">
            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] leading-tight font-extrabold font-serif text-[#AF0D5A]">
              Reliable Home Appliance<br className="hidden md:block" /> Repairs You Can Trust
            </h1>

            <p className="text-[15px] sm:text-[17px] text-[#555] leading-relaxed tracking-wide max-w-[90%] mx-auto md:mx-0">
              Keep your <strong>AC, refrigerator, washing machine</strong>, and other appliances running smoothly with expert, on-time service from Delhi NCR’s most trusted technicians.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center md:justify-start">
              <div className="flex text-[#FFD700] text-[20px]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-sm text-[#666] font-medium">Rated 5.0 by 1,000+ customers</span>
            </div>

            <div>
              <span className="inline-block bg-[#fef3f6] text-[#AF0D5A] text-xs sm:text-sm px-4 py-1 rounded-full font-semibold tracking-wide shadow-sm">
                Serving Delhi NCR since 2016
              </span>
            </div>

            <div className="flex justify-center md:justify-start pt-2">
              <EnqueryPopUp>
                <button className="bg-[#AF0D5A] hover:bg-[#930d4a] transition-all duration-200 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                  Book a Service <FaArrowRight />
                </button>
              </EnqueryPopUp>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={HeaderLogo}
              alt="Technician providing service"
              className="object-contain w-full max-w-[480px] md:max-w-[500px] lg:max-w-[550px]"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
