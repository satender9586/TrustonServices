import { CiLocationOn, CiMail, CiPhone, CiYoutube } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Button } from "./ui/button";
import Image from "next/image";
import Logo from "../assests/Logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#f8fbfc] text-[#444] pt-8">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 pb-8 border-b border-[#D6D8DE]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}>
              <h2 className="text-[#111] font-bold mb-3 text-[16px] font-serif">Products</h2>
              <ul className="space-y-2 text-[14px] text-[#666]">
                <li>Air Conditioner</li>
                <li>Washing Machine</li>
                <li>Refrigerator</li>
                <li>Microwave Oven</li>
                <li>Water Purifier</li>
                <li>Dishwasher</li>
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h2 className="text-[#111] font-bold mb-3 text-[16px] font-serif">
              We’re Here to Help — Get in Touch!
            </h2>
            <div className="space-y-2 text-[14px] text-[#666]">
              <div className="flex items-start gap-2">
                <CiLocationOn className="text-[20px] mt-0.5 text-[#AF0D5A]" />
                <p>Holambi Kalan Metro Vihar, Near Alipur, Delhi 110082</p>
              </div>
              <div className="flex items-start gap-2">
                <CiMail className="text-[20px] mt-0.5 text-[#AF0D5A]" />
                <p>support@trustonservices.com</p>
              </div>
              <div className="flex items-start gap-2">
                <CiPhone className="text-[20px] mt-0.5 text-[#AF0D5A]" />
                <p>+91 88608 29437</p>
              </div>
              <div className="pt-2">
                <Button variant="outline" className="text-sm border-[#AF0D5A] text-[#AF0D5A] hover:bg-[#AF0D5A]/10">
                  Book a Service
                </Button>
              </div>
            </div>

            {/* Social */}
            <div className="mt-6">
              <h2 className="text-[#111] font-bold text-[16px] font-serif mb-2">Stay Connected</h2>
              <div className="flex gap-4 text-[20px] text-[#AF0D5A]">
                <SlSocialFacebook className="hover:text-[#4267B2] cursor-pointer" />
                <CiYoutube className="hover:text-[#FF0000] cursor-pointer" />
                <FaInstagram className="hover:text-[#C13584] cursor-pointer" />
                <IoLogoWhatsapp className="hover:text-[#25D366] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 py-4 text-[13px] text-[#888]">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="logo" className="w-8 h-auto object-contain" />
            <div>
              <h1 className="text-[#111828] text-[16px] font-semibold">
                TrustOn<span className="text-[#AF0D5A]">Services</span>
              </h1>
              <p className="text-[11px] leading-3">Happy customers, happy us!</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-[13px] text-[#666] mt-2 md:mt-0">
            <p className="hover:text-[#AF0D5A] cursor-pointer">Privacy Policy</p>
            <p className="hover:text-[#AF0D5A] cursor-pointer">Terms of Use</p>
            <p className="hover:text-[#AF0D5A] cursor-pointer">Legal</p>
            <p className="text-[#aaa]">© 2021 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
