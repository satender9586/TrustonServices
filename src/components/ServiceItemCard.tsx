import React from "react";
import Image from "next/image";
import { ServiceCardProps } from "@/types/landing";

const ServiceItemCard: React.FC<ServiceCardProps> = ({ itemUrl, itemName, itemDesc }) => {
  return (
    <div className="bg-white rounded-[20px_5px_20px_5px] shadow-sm overflow-hidden border border-gray-100 hover:border-[#AF0D5A] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      
      {/* Image Wrapper */}
      <div className="w-full h-[200px] sm:h-[220px] md:h-[250px] relative">
        <Image
          alt={`${itemName} service image`}
          src={itemUrl}
          fill
          className="object-cover rounded-t-[20px_5px_0_0]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-serif text-gray-800 mb-1 hover:text-[#AF0D5A] transition-colors">
          {itemName}
        </h3>
        <p className="text-sm sm:text-[15px] text-[#666] hover:text-[#AF0D5A] transition-colors">
          {itemDesc}
        </p>
      </div>
    </div>
  );
};

export default ServiceItemCard;
