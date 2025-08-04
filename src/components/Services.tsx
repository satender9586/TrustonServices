import React from "react";
import { ServicesItems } from "../constants/ServicesFakeData";
import ServiceItemCard from "./ServiceItemCard";
import Link from "next/link";
import WithTrandingLableServiceCard from "@/HOC/WithTrandingLableServiceCard";

const Services = () => {
  const ServiceItemCardWithLabel =  WithTrandingLableServiceCard(ServiceItemCard);


  return (
    <section className="bg-gradient-to-b from-[#EBF7FD] via-white to-[#FDEBF3]  py-5 sm:py-8">
      <div className="container mx-auto px-4 sm:px-10 pb-4">
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
          <h2 className="text-[24px] sm:text-4xl md:leading-12  tracking-[1.5px] md:tracking-[2px] md:font-semibold text-[#AF0D5A] mb-2 md:mb-2">
            Trusted Home Services{" "}
            <span className="hidden md:inline-block">for Delhi NCR</span>
          </h2>

          <p className="block md:hidden text-[14px] sm:text-[15px] md:text-[16px] tracking-wide text-gray-800 leading-relaxed text-center px-9 sm:px-4">
            Reliable AC, fridge & washing machine service right at your doorstep
            in Delhi NCR.
          </p>

          <p className="hidden sm:block text-[15px] tracking-wide sm:text-[16px] text-[#555] leading-relaxed ">
            Welcome to{" "}
            <span className="text-[#AF0D5A] font-semibold">
              Trust On Services
            </span>{" "}
            — your go-to choice for reliable AC, washing machine, and
            refrigerator repairs across Delhi NCR. Fast, professional, and
            delivered right to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {ServicesItems?.map((service) => {
            const CardComponent = service.trending
              ? ServiceItemCardWithLabel
              : ServiceItemCard;

            return (
              <Link href={`/services/${service.path}`} key={service.itemname}>
                <div className="group">
                  <CardComponent
                    itemUrl={service.itemUrl}
                    itemName={service.itemname}
                    itemDesc={service.itemDesc}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
