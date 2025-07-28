import React from 'react';
import { whyChooseUsData } from '@/constants/whyChooseUsFakeData';
import { WhyChooseUsCrausel } from './WhyChooseUsCrausel';

const WhyChoose = () => {
  return (
    <section className="bg-white pt-4 sm:py-14 md:py-0 lg:pt-12 lg:pb-2 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">

        {/* Heading and Description */}
        <div className="max-w-2xl mx-auto text-center mb:4 sm:mb-8 ">
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#AF0D5A] mb-4">
            Why Choose Us
          </h2>

          {/* Short version for mobile */}
          <p className="text-[15px] text-[#949494] font-sans sm:hidden">
            5+ years of trusted appliance repair service across Delhi NCR.
          </p>

          {/* Full version for larger screens */}
          <p className="hidden sm:block text-[15px] sm:text-[16px] text-[#949494] font-sans">
            At <span className="text-[#AF0D5A] font-semibold">Trust On Services</span>, we bring over 5 years of experience in fast, reliable AC, washing machine, and fridge repairs across Delhi NCR.
          </p>
        </div>

        {/* Carousel Component */}
        <div>
          <WhyChooseUsCrausel data={whyChooseUsData} />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;





