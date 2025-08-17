"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { useParams } from "next/navigation";
import { servicesIdData } from "@/constants/ServicesFakeData";
import ServicesCategoryCard from "@/components/Cards/ServicesCategoryCard";
import Image from "next/image";
import WhyChoose from "@/components/WhyChoose";
import FAQ from "@/components/FAQ";

const ServiceItem = () => {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  const service = slug ? servicesIdData[slug] : undefined;

  const [selectedType, setSelectedType] = useState("All");

  if (!service) {
    return (
      <Layout>
        <section className="py-20 text-center">
          <h2 className="text-2xl font-semibold text-red-500">
            Service not found
          </h2>
        </section>
      </Layout>
    );
  }

  const categoryTypes = [
    "All",
    ...service.categories.map((cat: any) => cat.type),
  ];

  const filteredCategories =
    selectedType === "All"
      ? service.categories
      : service.categories.filter((cat: any) => cat.type === selectedType);

  const allServices = filteredCategories.flatMap((cat: any) => cat.services);

  return (
    <Layout>
      <section className="bg-gradient-to-br from-[#EBF7FD] via-white to-[#FDEBF3] pt-10 sm:pt-10 md:pt-17 ">
        <div className="relative h-35 sm:h-50 md:h-70 w-full mt-7 md:mt-0 ">
          <Image
            src={service.image}
            alt={service.title}
            className="w-full h-full object-center"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-xl sm:text-4xl  font-semibold mb-3 tracking-wide drop-shadow-sm">
              {service.title}
            </h1>
            <p className="hidden md:block text-sm sm:text-base md:text-lg tracking-wide leading-relaxed text-center px-4 md:px-9">
              {service.description}
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="container mx-auto px-4 sm:px-10 mt-8 flex flex-wrap gap-3 justify-center">
          {categoryTypes.map((type, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedType(type)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md ${
                selectedType === type
                  ? "bg-gradient-to-r from-[#AF0D5A] to-[#92094A] text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Single Grid for All Services */}
        <div className="container mx-auto px-4 sm:px-10 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((srv: any, j: number) => (
              <ServicesCategoryCard key={j} srv={srv} j={j} />
            ))}
          </div>
        </div>
      </section>
      <WhyChoose />
      <FAQ/>
    </Layout>
  );
};

export default ServiceItem;
