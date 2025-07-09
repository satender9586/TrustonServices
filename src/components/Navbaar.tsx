import { NAVBAR_TABS } from "@/constants/paths";
import { IoMdMenu } from "react-icons/io";
import Logo from "../assests/Logo2.png"
import Image from "next/image";
import Button from "./Button";


const Navbaar = () => {
  return (
    <div className="h-16 absolute w-full z-[999] border-b border-[#f8f3f3]">
      <div className="h-full container mx-auto px-3 md:px-10 lg:px-20 grid grid-cols-4 py-2 lg:py-2 text-white items-center">
        <div className="col-span-2 sm:col-span-1  flex items-center gap-0.5">
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
        <div className=" sm:col-span-2 hidden sm:flex  justify-center ">
          <ul className="flex gap-3 md:gap-4 justify-center text-[#6D6D6E] font-sans text-[18px]">
            {
              NAVBAR_TABS.map(({ PATH, TABNAME }) => (
                <li >{TABNAME}</li>
              ))
            }

          </ul>
        </div>
        <div className="hidden sm:flex justify-end   gap-2 col-span-2 sm:col-span-1 ">
          <Button >Login</Button>
          <Button >SingUp</Button>
        </div>
        <div className="flex sm:hidden justify-end gap-2 col-span-2 sm:col-span-1 ">
          <IoMdMenu className="size-[22px] text-black" />
        </div>
      </div>
    </div>
  )
}

export default Navbaar

