import React from "react";
import Image from "next/image";
import { ServiceCardProps } from "@/types/landing";

const ServiceItemCard: React.FC<ServiceCardProps> = ({ itemUrl, itemName, itemDesc }) => {
  return (
    <div className=" bg-white rounded-[20px_5px_20px_5px] shadow-md overflow-hidden border border-transparent hover:border-[#AF0D5A] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
      <div className="w-full h-[200px] sm:h-[220px] md:h-[250px] relative overflow-hidden">
        <Image
          alt={`${itemName} service image`}
          src={itemUrl}
          fill
          className="object-cover rounded-t-[20px_5px_0_0] group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg sm:text-xl font-serif tracking-wide text-gray-800 mb-2 group-hover:text-[#AF0D5A] transition-colors">
          {itemName}
        </h3>
        <p className="text-sm sm:text-[15px]  text-[#666] group-hover:text-[#AF0D5A] transition-colors leading-relaxed">
          {itemDesc}
        </p>
        <div className="mt-3 h-[3px] w-0 bg-[#AF0D5A] group-hover:w-full transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default ServiceItemCard;
