import React from "react";
import { ServicesItems } from "../constants/ServicesFakeData";
import ServiceItemCard from "./ServiceItemCard";

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-[#EBF7FD] via-white to-[#FDEBF3] py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif tracking-[1px] font-semibold text-[#AF0D5A] mb-4">
            Trusted Home Services for Delhi NCR
          </h2>

          {/* Short paragraph on mobile, full on desktop */}
          <p className="text-[15px] sm:text-[16px] text-[#555] leading-relaxed font-serif sm:hidden">
            Reliable AC, fridge & washing machine service right at your doorstep
            in Delhi NCR.
          </p>
          <p className="hidden sm:block text-[15px] sm:text-[16px] text-[#555] leading-relaxed font-serif">
            Welcome to{" "}
            <span className="text-[#AF0D5A] font-semibold">
              Trust On Services
            </span>{" "}
            — your go-to choice for reliable AC, washing machine, and
            refrigerator repairs across Delhi NCR. Fast, professional, and
            delivered right to your doorstep.
          </p>
        </div>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ServicesItems.map((service) => (
            <div
              key={service.itemname}
              className="group bg-white shadow-md rounded-2xl p-5 border border-transparent hover:border-[#AF0D5A] hover:shadow-xl transition-all duration-300"
            >
              <ServiceItemCard
                itemUrl={service.itemUrl}
                itemName={service.itemname}
                itemDesc={service.itemDesc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
