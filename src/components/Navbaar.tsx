"use client"
import { useEffect, useState } from "react";
import { NAVBAR_TABS } from "@/constants/paths";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Logo from "../assests/Logo2.png";
import Image from "next/image";
import Button from "./Button";


const Navbaar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] border-b border-[#E5E7EB] bg-white transition-shadow duration-300 ${
        hasScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-20 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="TrustOnServices logo" className="w-10 h-auto object-contain" />
          <div className="leading-tight">
            <h1 className="text-[19px] font-bold text-[#111828]">
              TrustOn<span className="text-[#AF0D5A]">Services</span>
            </h1>
            <p className="text-[10px] text-[#555] font-medium">Happy customers, happy us!</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6 text-[#555] text-[16px] font-medium">
          {NAVBAR_TABS.map(({ PATH, TABNAME }) => (
            <li
              key={TABNAME}
              className="list-none hover:text-[#AF0D5A] relative cursor-pointer transition-colors"
            >
              <span className="after:absolute after:content-[''] after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#AF0D5A] hover:after:w-full after:transition-all after:duration-300">
                {TABNAME}
              </span>
            </li>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex gap-3">
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-[24px] text-[#111]">
            {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white px-4 py-4 border-t border-gray-200 shadow-md">
          <nav className="flex flex-col gap-4 text-[#555] text-[16px] font-medium">
            {NAVBAR_TABS.map(({ PATH, TABNAME }) => (
              <span
                key={TABNAME}
                className="hover:text-[#AF0D5A] transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {TABNAME}
              </span>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button >Login</Button>
            <Button >Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbaar;
