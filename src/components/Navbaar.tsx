"use client"
import { useEffect, useState } from "react";
import { NAVBAR_TABS } from "@/constants/paths";
import { IoMdMenu } from "react-icons/io";
import Logo from "../assests/Logo2.png";
import Image from "next/image";
import Button from "./Button";

const Navbaar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10); // Add shadow after scrolling 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-16 fixed top-0 left-0 w-full z-[999] border-b border-[#E5E7EB] bg-white transition-shadow duration-300 ${
        hasScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="h-full container mx-auto px-4 md:px-10 lg:px-20 grid grid-cols-4 items-center">
        
        {/* Logo */}
        <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
          <Image src={Logo} alt="TrustOnServices logo" className="w-10 h-auto object-contain" />
          <div className="leading-tight">
            <h1 className="text-[19px] font-bold text-[#111828]">
              TrustOn<span className="text-[#AF0D5A]">Services</span>
            </h1>
            <p className="text-[10px] text-[#555] font-medium">Happy customers, happy us!</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:col-span-2 sm:flex justify-center">
          <ul className="flex gap-6 text-[#555] text-[16px] font-medium">
            {NAVBAR_TABS.map(({ PATH, TABNAME }) => (
              <li
                key={TABNAME}
                className="hover:text-[#AF0D5A] relative cursor-pointer transition-colors"
              >
                <span className="after:absolute after:content-[''] after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#AF0D5A] hover:after:w-full after:transition-all after:duration-300">
                  {TABNAME}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Buttons (Desktop) */}
        <div className="hidden sm:flex justify-end gap-3 col-span-2 sm:col-span-1">
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex sm:hidden justify-end col-span-2">
          <IoMdMenu className="text-[24px] text-[#111]" />
        </div>
      </div>
    </header>
  );
};

export default Navbaar;
