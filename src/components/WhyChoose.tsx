import React from 'react';
import { whyChooseUsData } from '@/constants/whyChooseUsFakeData';
import { WhyChooseUsCrausel } from './WhyChooseUsCrausel';

const WhyChoose = () => {
  return (
    <section className="bg-gradient-to-b from-[#EBF7FD] via-white to-[#FDEBF3]  py-5 sm:py-8 ">
      <div className="container mx-auto px-4 sm:px-10 pb-4">

        <div className="max-w-2xl mx-auto text-center mb-6 md:mb-8">
          <h2 className="text-[24px] sm:text-4xl md:leading-12  tracking-[1.5px] md:tracking-[2px] md:font-semibold text-[#AF0D5A] mb-2 md:mb-2">
            Why Choose Us
          </h2>

          <p className=" md:hidden text-[14px] font-serif sm:text-[15px] md:text-[16px] tracking-wide text-[#555] leading-relaxed text-center px-9 sm:px-4">
            5+ years of trusted appliance repair services in Delhi NCR.
          </p>

          <p className="hidden sm:block text-[15px] font-serif tracking-wide sm:text-[16px] text-[#555] leading-relaxed ">
            At <span className="text-[#AF0D5A] font-semibold">Trust On Services</span>, we deliver 
            <strong> fast, reliable, and affordable </strong> AC, washing machine, and refrigerator repairs.  
            With over <strong>5 years of experience</strong>, we’ve built a reputation for excellence across Delhi NCR.
          </p>
        </div>

        <div >
          <WhyChooseUsCrausel data={whyChooseUsData} />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
