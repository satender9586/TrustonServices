import React from "react";
import BrandsCrouser from "./BrandsCrouser";
import { companiesLovesData } from "@/constants/whyChooseUsFakeData";

const CompaniesSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#fffafc] via-white to-[#fef6f9] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center">
 
        <h2 className="text-3xl sm:text-4xl font-serif md:font-extrabold text-[#AF0D5A] mb-4">
          Companies We Proudly Serve
        </h2>
        <p className="max-w-2xl mx-auto text-[14px] sm:text-[16px] text-[#666] mb-10 font-serif leading-relaxed">
          Trusted by leading brands for consistent, high-quality appliance repair 
          & maintenance across Delhi NCR.
        </p>
        <BrandsCrouser data={companiesLovesData} />
      </div>
    </section>
  );
};

export default CompaniesSection;
