import React from 'react';
import { whyChooseUsData } from '@/constants/whyChooseUsFakeData';
import { WhyChooseUsCrausel } from './WhyChooseUsCrausel';

const WhyChoose = () => {
  return (
    <section className="bg-gradient-to-b from-[#EBF7FD] via-white to-[#FDEBF3] pt-10 sm:pt-14 pb-12">
      <div className="container mx-auto px-4 sm:px-10">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#AF0D5A] mb-4">
            Why Choose Us
          </h2>

          {/* Short for mobile */}
          <p className="text-[15px] text-[#666] font-serif sm:hidden">
            5+ years of trusted appliance repair services in Delhi NCR.
          </p>

          {/* Full for larger screens */}
          <p className="hidden sm:block text-[15px] sm:text-[16px] text-[#666] font-serif leading-relaxed">
            At <span className="text-[#AF0D5A] font-semibold">Trust On Services</span>, we deliver 
            <strong> fast, reliable, and affordable </strong> AC, washing machine, and refrigerator repairs.  
            With over <strong>5 years of experience</strong>, we’ve built a reputation for excellence across Delhi NCR.
          </p>
        </div>

        {/* Carousel */}
        <div >
          <WhyChooseUsCrausel data={whyChooseUsData} />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
