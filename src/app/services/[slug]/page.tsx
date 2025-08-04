"use client";
import React from "react";
import Layout from "@/components/Layout";
import { useParams } from "next/navigation";
import { ServicesItems } from "@/constants/ServicesFakeData";
import ServiceItemCard from "@/components/ServiceItemCard";
import WithTrandingLableServiceCard from "@/HOC/WithTrandingLableServiceCard";

const ServiceItem = () => {
  const ServiceItemCardWithLabel =
    WithTrandingLableServiceCard(ServiceItemCard);

  const params = useParams();
  const slug = params?.slug;

  const findCategory = ServicesItems?.filter((item) => item.path == slug);
  const categories = findCategory[0]?.categories;
  const titleName = findCategory[0]?.itemname;


  return (
    <Layout>
      <section className="bg-gradient-to-b from-[#fffafc] via-white to-[#fef6f9] pt-13 py-8">
        <div className="container mx-auto px-4 sm:px-10 text-center mt-10 ">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold bg-gradient-to-r from-[#AF0D5A] to-pink-500 bg-clip-text text-transparent mb-3 tracking-wide drop-shadow-sm">
              {titleName + " " + "Services"}
            </h2>

            <p className="block md:hidden text-[14px] sm:text-[15px] md:text-[16px] tracking-wide text-[#555] leading-relaxed text-center px-9 sm:px-4">
              Reliable AC, fridge & washing machine service right at your
              doorstep in Delhi NCR.
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

          <div className="mt-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 ">
              {categories?.map((service) =>
                service.trending ? (
                  <div className="group" key={service.itemname}>
                    <ServiceItemCardWithLabel
                      itemUrl={service.itemUrl}
                      itemName={service.itemname}
                      itemDesc={service.itemDesc}
                    />
                  </div>
                ) : (
                  <div className="group" key={service.itemname}>
                    <ServiceItemCard
                      itemUrl={service.itemUrl}
                      itemName={service.itemname}
                      itemDesc={service.itemDesc}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceItem;
