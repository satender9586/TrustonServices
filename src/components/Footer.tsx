import { CiLocationOn, CiMail, CiPhone, CiYoutube } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Button } from "./ui/button";
import Image from "next/image";
import Logo from "../assests/Logo2.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#f8fbfc] to-[#eef5f7] text-[#444] pt-10 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 pb-10 border-b border-gray-300">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}>
              <h2 className="text-[#111] font-bold mb-3 text-[16px] font-serif">Products</h2>
              <ul className="space-y-2 text-[14px] text-[#666]">
                <li className="hover:text-[#AF0D5A] transition-colors duration-200 cursor-pointer">Air Conditioner</li>
                <li className="hover:text-[#AF0D5A] transition-colors duration-200 cursor-pointer">Washing Machine</li>
                <li className="hover:text-[#AF0D5A] transition-colors duration-200 cursor-pointer">Refrigerator</li>
                <li className="hover:text-[#AF0D5A] transition-colors duration-200 cursor-pointer">Microwave Oven</li>
                <li className="hover:text-[#AF0D5A] transition-colors duration-200 cursor-pointer">Water Purifier</li>
                <li className="hover:text-[#AF0D5A] transition-colors duration-200 cursor-pointer">Dishwasher</li>
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <h2 className="text-[#111] font-bold mb-4 text-[17px] font-serif">We’re Here to Help — Get in Touch!</h2>
            <div className="space-y-3 text-[14px] text-[#555]">
              <div className="flex items-start gap-3">
                <CiLocationOn className="text-[20px] mt-1 text-[#AF0D5A]" />
                <p>Holambi Kalan Metro Vihar, Near Alipur, Delhi 110082</p>
              </div>
              <div className="flex items-start gap-3">
                <CiMail className="text-[20px] mt-1 text-[#AF0D5A]" />
                <p className="break-all">support@trustonservices.com</p>
              </div>
              <div className="flex items-start gap-3">
                <CiPhone className="text-[20px] mt-1 text-[#AF0D5A]" />
                <p>+91 88608 29437</p>
              </div>

              <div className="pt-4">
                <Button variant="outline" className="text-sm border-[#AF0D5A] text-[#AF0D5A] hover:bg-[#AF0D5A]/10 transition-all duration-200">
                  Book a Service
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-[#111] font-bold text-[16px] font-serif mb-2">Stay Connected</h2>
              <div className="flex gap-4 text-[22px] text-[#AF0D5A]">
                <SlSocialFacebook className="hover:text-[#4267B2] transition duration-300 cursor-pointer" />
                <CiYoutube className="hover:text-[#FF0000] transition duration-300 cursor-pointer" />
                <FaInstagram className="hover:text-[#C13584] transition duration-300 cursor-pointer" />
                <IoLogoWhatsapp className="hover:text-[#25D366] transition duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 py-5 text-[13px] text-[#777]">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="logo" className="w-9 h-auto object-contain" />
            <div>
              <h1 className="text-[#111828] text-[16px] font-semibold">
                TrustOn<span className="text-[#AF0D5A]">Services</span>
              </h1>
              <p className="text-[11px] leading-3">Happy customers, happy us!</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-[#666] mt-2 md:mt-0">
            <p className="hover:text-[#AF0D5A] cursor-pointer transition-colors duration-200">Privacy Policy</p>
            <p className="hover:text-[#AF0D5A] cursor-pointer transition-colors duration-200">Terms of Use</p>
            <p className="hover:text-[#AF0D5A] cursor-pointer transition-colors duration-200">Legal</p>
            <p className="text-[#aaa]">© 2021 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
