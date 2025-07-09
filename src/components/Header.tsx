
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import HeaderLogo from "../assests/headerImg.png"

const Header = () => {
  return (
    <header className="pt-14 relative z-0 h-screen  overflow-hidden ">
      <div className="container mx-auto px-3 md:px-10 lg:px-20  mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-5 ">
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-[45px] md:text-[4xl] tracking-[3px]  text-[#AF0D5A] ">
              Reliable Home Services
            </h1>
            <p className="tracking-[2.5px] text-[14px] md:text-[20px]  text-[#3B0764]/80 font-sans">
              Reliable care for your <span className="font-bold">AC, washing machine</span> and more — keeping your home comfy and worry-free.
            </p>

            <button className="tracking-[1.5px] rounded-full flex mt-6 items-center gap-2 px-6 py-3 bg-[#AF0D5A] text-white font-serif hover:bg-[#9b0c50] transition-colors w-fit">
              Book a Service <span><FaArrowRight /></span>
            </button>
          </div>

          <div className="flex justify-center md:justify-end items-center ">
            <Image
              src={HeaderLogo}
              alt="Chat illustration"
              className="object-cover max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
