import React from "react";
import { ServicesItems } from "../constants/ServicesFakeData";
import ServiceItemCard from "./ServiceItemCard";

const Services = () => {
  return (
    <section className="bg-white py-0 sm:py-16 md:py-0 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#AF0D5A] mb-4">
            Trusted Home Services for Delhi NCR
          </h2>

          {/* Short paragraph on mobile, full on desktop */}
          <p className="text-[15px] sm:text-[16px] text-[#666] leading-relaxed font-sans sm:hidden">
            Reliable AC, fridge & washing machine service right at your doorstep in Delhi NCR.
          </p>
          <p className="hidden sm:block text-[15px] sm:text-[16px] text-[#666] leading-relaxed font-sans">
            Welcome to <span className="text-[#AF0D5A] font-semibold">Trust On Services</span> —
            your one-stop solution for reliable AC installation, washing machine repair, and refrigerator servicing
            across Delhi NCR. From residential flats to commercial spaces, we bring expert, on-time
            service right to your doorstep.
          </p>
        </div>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ServicesItems.map((service) => (
            <ServiceItemCard
              key={service.itemname}
              itemUrl={service.itemUrl}
              itemName={service.itemname}
              itemDesc={service.itemDesc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
