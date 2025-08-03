import { CiLocationOn, CiMail, CiPhone, CiYoutube } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Button } from "./ui/button";
import Image from "next/image";
import Logo from "../assests/Logo2.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#fefcfc] via-[#f8fbfc] to-[#eef5f7] text-[#444] pt-5 sm:pt-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-10 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-200">
          <div>
            <h2 className="text-[#111] font-bold mb-4 text-[20px] tracking-wide ">
              Our Services
            </h2>
            <ul className="space-y-2 text-sm text-[#666]">
              {[
                "Air Conditioner",
                "Washing Machine",
                "Refrigerator",
                "Microwave Oven",
                "Water Purifier",
                "Dishwasher",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-[#AF0D5A] text-[15px] tracking-wide transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[#111] font-bold mb-4 text-[20px] tracking-wide">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm text-[#666]">
              {["Home", "About", "Contact", "Feedback"].map((item, i) => (
                <Link href={item==="Home" ? "/" : item.toLocaleLowerCase()} key={i}>
                  <li
                    
                    className="hover:text-[#AF0D5A] text-[15px] tracking-wide transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[#111] font-bold mb-4 text-[20px] tracking-wide">
              Get in Touch
            </h2>
            <div className="space-y-3 text-sm text-[#555] text-[15px] tracking-wide">
              <div className="flex items-start gap-3">
                <CiLocationOn className="text-[35px] mt-1 text-[#AF0D5A]" />
                <p>Holambi Kalan Metro Vihar, Near Alipur, Delhi 110082</p>
              </div>
              <div className="flex items-start gap-3">
                <CiMail className="text-xl mt-1 text-[#AF0D5A]" />
                <p className="break-all">support@trustonservices.com</p>
              </div>
              <div className="flex items-start gap-3">
                <CiPhone className="text-xl mt-1 text-[#AF0D5A]" />
                <p>+91 88608 29437</p>
              </div>
            </div>
            <div className="pt-4">
              <Button
                variant="outline"
                className="text-sm border-[#AF0D5A] text-[#AF0D5A] hover:bg-[#AF0D5A] hover:text-white transition-all duration-200"
              >
                Book a Service
              </Button>
            </div>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-[#111] font-bold mb-4 text-[20px] tracking-wide">
              Stay Connected
            </h2>
            <div className="flex gap-4 text-2xl text-[#AF0D5A]">
              <SlSocialFacebook className="hover:text-[#4267B2] transition-transform duration-300 cursor-pointer hover:scale-110" />
              <CiYoutube className="hover:text-[#FF0000] transition-transform duration-300 cursor-pointer hover:scale-110" />
              <FaInstagram className="hover:text-[#C13584] transition-transform duration-300 cursor-pointer hover:scale-110" />
              <IoLogoWhatsapp className="hover:text-[#25D366] transition-transform duration-300 cursor-pointer hover:scale-110" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 text-xs sm:text-sm text-[#777]">
          <div className="flex items-center gap-3 mt-3 text-[15px] tracking-wide">
            <Image
              src={Logo}
              alt="TrustOnServices Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <h1 className="text-[#111828] text-base sm:text-lg font-semibold">
                TrustOn<span className="text-[#AF0D5A]">Services</span>
              </h1>
              <p className="text-[11px] leading-3">
                Happy customers, happy us!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-2 md:mt-0 text-[15px] tracking-wide">
            <p className="hover:text-[#AF0D5A] cursor-pointer transition-colors duration-200">
              Privacy Policy
            </p>
            <p className="hover:text-[#AF0D5A] cursor-pointer transition-colors duration-200">
              Terms of Use
            </p>
            <p className="hover:text-[#AF0D5A] cursor-pointer transition-colors duration-200">
              Legal
            </p>
            <p className="text-[#aaa]">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
