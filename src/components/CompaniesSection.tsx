import React from "react";
import BrandsCrouser from "./BrandsCrouser";
import { companiesLovesData } from "@/constants/whyChooseUsFakeData";

const CompaniesSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#EBF7FD] via-white to-[#FDEBF3] py-5 sm:pt-8">
      <div className="container mx-auto px-4 sm:px-10  text-center ">
 
        <h2 className="text-[24px] sm:text-4xl md:leading-12  tracking-[1.5px] md:tracking-[2px] md:font-semibold text-[#AF0D5A] mb-2 md:mb-2">
          Companies We Proudly Serve
        </h2>
        <p className="md:hidden text-[15px] font-serif tracking-wide sm:text-[16px] text-[#555] leading-relaxed pb-4 px-2">
          Trusted by leading brands for consistent, high-quality appliance repair 
          & maintenance 
        </p>
        <p className="hidden md:block text-[15px] font-serif tracking-wide sm:text-[16px] text-[#555] leading-relaxed pb-4 px-2">
          Trusted by leading brands for consistent, high-quality appliance repair 
          & maintenance across Delhi NCR.
        </p>
        <BrandsCrouser data={companiesLovesData} />
      </div>
    </section>
  );
};

export default CompaniesSection;
