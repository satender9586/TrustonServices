import {
  FaArrowRight,
  FaSnowflake,
  FaTools,
  FaFan,
  FaThermometerHalf,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import EnqueryPopUp from "../components/EnqueryPopUp";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#EBF7FD] via-white to-[#FDEBF3] pt-22 sm:pt-28 pb-12 sm:pb-20">
      <div className="absolute -top-20 -left-20 w-56 sm:w-72 h-56 sm:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute top-40 -right-20 w-56 sm:w-72 h-56 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-10 relative z-10 mt-5 md:mt-0">
        <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6 max-w-3xl mx-auto">
          <div className="flex gap-4 sm:gap-6 text-4xl sm:text-5xl text-[#AF0D5A] justify-center flex-wrap">
            <FaSnowflake />
            <FaFan />
            <FaThermometerHalf />
            <FaTools />
          </div>

          <h1 className="font-semibold text-[29px] leading-10.5 md:leading-17 sm:text-[34px]  md:text-[42px] lg:text-[58px] tracking-[1.1px] text-[#AF0D5A] px-2">
            Expert AC Repair Services at Your Doorstep
          </h1>

          <p className="text-[17.5px]  leading-8 md:leading-9  md:tracking-[1px] sm:text-[16px] md:text-[17px] text-[#747474] px-4 md-px-3">
            Fast, reliable & affordable{" "}
            <strong>AC repair and maintenance</strong> anywhere in Delhi NCR.
            Book trained professionals
            <span className="hidden md:inline">
              and enjoy cool comfort all year round.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3  sm:gap-4 justify-center">
            <div className="flex text-[#FFD700] gap-1.5 sm:gap-0 text-[18px] sm:text-[20px]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-[15px] sm:text-sm text-[#666]  font-medium tracking-wide">
              Rated 5.0 by 1,000+ Customers
            </span>
          </div>

          <span className="inline-block   bg-[#fef3f6] text-[#AF0D5A] text-[13px] sm:text-xs md:text-sm px-3 sm:px-4 py-1 rounded-full font-semibold tracking-wide shadow-sm">
            Serving Delhi NCR Since 2016 🚚
          </span>

          <EnqueryPopUp>
            <button className="bg-[#AF0D5A]  text-[14px] font-serif hover:bg-[#930d4a] transition-all duration-200 text-white px-5 sm:px-5 py-2.5 sm:py-2.5 rounded-full flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center">
              Book Service Now <FaArrowRight />
            </button>
          </EnqueryPopUp>
        </div>
      </div>
    </header>
  );
};

export default Header;
