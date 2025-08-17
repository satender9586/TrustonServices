import React from "react";
import Image from "next/image";
import { ServicesCategoryCardProps } from "@/types/landing";


const ServicesCategoryCard: React.FC<ServicesCategoryCardProps> = ({ srv }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:-translate-y-2 flex flex-col">
      <div className="relative h-44 w-full bg-white">
        <Image
          src={srv.img}
          alt={srv.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
        
        {srv.price && (
          <span className="absolute top-2 right-2 bg-gradient-to-r from-[#AF0D5A] to-[#92094A] text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
            {srv.price}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{srv.name}</h3>

        <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
          {srv.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <div className="mt-auto">
          <button disabled className=" w-full bg-gradient-to-r from-[#AF0D5A] to-[#92094A] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all shadow-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCategoryCard;
