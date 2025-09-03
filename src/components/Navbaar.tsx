"use client";
import { useEffect, useState } from "react";
import { NAVBAR_TABS } from "@/constants/paths";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Logo from "../assests/Logo2.png";
import Image from "next/image";
import Link from "next/link";

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

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] border-b border-[#CBE8F6] bg-[#EBF7FD] transition-shadow duration-300 ${
        hasScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 h-17 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="TrustOnServices logo"
            className="w-8 sm:w-10 h-auto object-contain"
          />
          <div className="leading-tight">
            <h1 className="text-[16px] sm:text-[19px] font-bold text-[#111828]">
              TrustOn<span className="text-[#AF0D5A]">Services</span>
            </h1>
            <p className="text-[9px] sm:text-[10px] font-serif text-[#555] font-medium">
              Happy customers, happy us!
            </p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden sm:flex items-center gap-6 text-[15px] font-medium">
          {NAVBAR_TABS.map(({ PATH, TABNAME }) => (
            <Link href={PATH} key={TABNAME}>
              <li className="font-serif list-none hover:text-[#AF0D5A] relative cursor-pointer transition-colors">
                <span className="after:absolute tracking-[1.1px] text-[17px] after:content-[''] after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#AF0D5A] hover:after:w-full after:transition-all after:duration-300">
                  {TABNAME}
                </span>
              </li>
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden sm:flex gap-3">
          <button className="px-5 py-1 rounded-full font-serif text-[#AF0D5A] border border-[#AF0D5A] hover:bg-[#AF0D5A] hover:text-white transition-all duration-300">
            Login
          </button>
          <button className="px-5 py-2 rounded-full font-serif bg-gradient-to-r from-[#AF0D5A] to-[#e63e91] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            Sign Up
          </button>
        </div>

       
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[28px] text-[#111]"
          >
            {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        tabs={NAVBAR_TABS}
      />
    </header>
  );
};

export default Navbaar;





// Define props type
interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  tabs: { PATH: string; TABNAME: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu, tabs }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[998] flex flex-col items-center justify-center gap-8 
      backdrop-blur-lg bg-[#EBF7FD]/90 transition-all duration-500 ease-in-out
      ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
    >
      {/* Close Button */}
      <button
        onClick={toggleMenu}
        className="absolute top-5 right-6 text-[32px] text-[#111] hover:text-[#AF0D5A] transition-colors"
      >
        <IoMdClose />
      </button>

      {/* Navigation Tabs */}
      <ul className="flex flex-col items-center gap-6 text-xl font-medium">
        {tabs.map(({ PATH, TABNAME }) => (
          <Link href={PATH} key={TABNAME} onClick={toggleMenu}>
            <li className="list-none cursor-pointer text-[20px] font-serif relative group">
              <span className="transition-colors group-hover:text-[#AF0D5A]">
                {TABNAME}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#AF0D5A] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
        ))}
      </ul>

      {/* Auth Buttons for Mobile */}
      <div className="flex flex-col gap-4 mt-8 w-[70%]">
        <button className="w-full px-5 py-2 rounded-full font-serif text-[#AF0D5A] border border-[#AF0D5A] hover:bg-[#AF0D5A] hover:text-white transition-all duration-300">
          Login
        </button>
        <button className="w-full px-5 py-2 rounded-full font-serif bg-gradient-to-r from-[#AF0D5A] to-[#e63e91] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};


