import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import HeaderLogo from "../assests/headerImg.png";

const Header = () => {
  return (
    <header className="bg-white pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-[36px] sm:text-[44px] lg:text-[50px] leading-tight font-extrabold font-serif text-[#AF0D5A] mb-4">
              Reliable Home Appliance<br className="hidden md:block" /> Repairs You Can Trust
            </h1>

            <p className="text-[15px] sm:text-[17px] text-[#555] leading-relaxed mb-6 tracking-wide">
              Keep your <strong>AC, refrigerator, washing machine</strong> and other appliances running smoothly with expert, on-time service from Delhi NCR's most trusted technicians.
            </p>

            {/* Stars & Trust Badge */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex text-[#FFD700] text-[18px]">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="text-[14px] font-medium text-[#666]">Rated 5.0 by 1,000+ customers</span>
            </div>

            <div className="mb-6">
              <span className="inline-block bg-[#fef3f6] text-[#AF0D5A] text-[13px] px-4 py-1 rounded-full font-semibold tracking-wide shadow-sm">
                Serving Delhi NCR since 2016
              </span>
            </div>

            <button className="bg-[#AF0D5A] hover:bg-[#9a0c4b] text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition-all">
              Book a Service <FaArrowRight />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={HeaderLogo}
              alt="Technician providing service"
              className="object-contain w-full max-w-[500px]"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
