import React from "react";
import BrandsCrouser from "./BrandsCrouser";
import { companiesLovesData } from "@/constants/whyChooseUsFakeData";

const CompaniesSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#fffafc] via-white to-[#fef6f9] py-5 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center">
 
        <h2 className="text-[24px] sm:text-4xl md:leading-12  tracking-[1.5px] md:tracking-[2px] md:font-semibold text-[#AF0D5A] mb-2 md:mb-2">
          Companies We Proudly Serve
        </h2>
        <p className="text-[15px] tracking-wide sm:text-[16px] text-[#555] leading-relaxed pb-4">
          Trusted by leading brands for consistent, high-quality appliance repair 
          & maintenance across Delhi NCR.
        </p>
        <BrandsCrouser data={companiesLovesData} />
      </div>
    </section>
  );
};

export default CompaniesSection;
