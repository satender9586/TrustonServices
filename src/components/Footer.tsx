import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Button } from "./ui/button";
import { CiPhone } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import Image from "next/image";
import Logo from "../assests/Logo2.png"

const Footer = () => {
  return (
    <header className="relative z-0 overflow-hidden ">
      <div className="container mx-auto px-3 md:px-10 lg:px-20 pb-4 ">
        <div className="grid grid-cols-6 border-b border-[#D6D8DE] py-4">
          {
            Array.from({ length: 4 }).map(() => (
              <div>
                <h1 className="font-serif text-[16px] tracking-wide font-bold text-[#1F2937] mb-1">
                  Products
                </h1>
                <ul className="space-y-[6px]">
                  <li className="font-sans text-[13px] tracking-wide text-[#111827] ">
                    Air Conditioner
                  </li>
                  <li className="font-sans text-[13px] tracking-wide text-[#111827] ">
                    Washing Machine
                  </li>
                  <li className="font-sans text-[13px] tracking-wide text-[#111827] ">
                    Refrigerator
                  </li>
                  <li className="font-sans text-[13px] tracking-wide text-[#111827] ">
                    Microwave Oven
                  </li>
                  <li className="font-sans text-[13px] tracking-wide text-[#111827] ">
                    Water Purifier
                  </li>
                  <li className="font-sans text-[13px] tracking-wide text-[#111827] ">
                    Dishwasher
                  </li>
                </ul>
              </div>
            ))
          }

          <div className="col-span-2 border-l border-[#D6D8DE] pl-7">
            <h1 className="font-serif text-[16px] tracking-wide font-bold text-[#1F2937] mb-1">
              We’re Here to Help — Get in Touch!
            </h1>
            <div className="flex gap-1.5 ">
              <div className="mt-0.5">
                <CiLocationOn className="size-8" />
              </div>
              <div>
                <p className="font-sans text-[14px] tracking-wide text-[#111827] ">Narela road near jhandewala mandir, floor 3 office 34 Narela delhi 110040</p>
              </div>
            </div>
            <div className="flex gap-2 items-center pt-1">
              <div className="mt-0.5 ml-0.5">
                <CiMail className="size-7" />
              </div>
              <div>
                <p className="font-sans text-[14px] tracking-wide text-[#111827] ">support@trustonservices.com</p>
              </div>
            </div>
            <div className="flex pt-1.5 gap-2 items-center ">
              <div className=" ml-0.5">
                <CiPhone className="size-7" />
              </div>
              <div>
                <p className="font-sans text-[14px] tracking-wide text-[#111827] ">9854578545</p>
              </div>
            </div>
            <div className="mt-2.5 px-[4px]">
              <Button variant="outline" className="font-sans text-[14px] tracking-wide">Book a Service </Button>
            </div>
            <div className="">
              <h1 className="font-serif text-[16px] tracking-wide font-bold text-[#1F2937] mt-2">
                Stay Connected
              </h1>
              <div className="flex gap-4 py-2 text-2xl">
                <SlSocialFacebook />
                <CiYoutube />
                <FaInstagram />
                <IoLogoWhatsapp />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3 py-1 border-b border-[#D6D8DE]">
          <div className="col-span-1  flex items-center gap-0.5">
            <div>
              <Image src={Logo} alt="logo" className="object-cover w-10 h-auto" />
            </div>
            <div className="-mt-1.5">
              <h1 className=" font-semibold  text-[#111828] text-[18px]">
                TrustOn<span className="text-[#AF0D5A]">Services</span>
              </h1>
              <p className="text-[10px] text-[#111828] font-semibold leading-[10px]">Happy customers, happy us!</p>
            </div>
          </div>
          <div className="col-span-3 flex tracking-wide justify-between items-center font-sans text-[15px] ">
            <h1>Privacy Policy</h1>
            <h1>Terms of Use</h1>
            <h1>Legal</h1>
            <h1 className="text-[#8a8b8c]">© 2021 All Rights Reserved</h1>
          </div>
        
          
        </div>
      </div>
    </header>
  )
}

export default Footer