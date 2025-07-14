import React from 'react';
import Image from 'next/image';
import { ServiceCardProps } from '@/types/ServiceItemCard';

const ServiceItemCard: React.FC<ServiceCardProps> = ({ itemUrl, itemName, itemDesc }) => {
  return (
    <div className="max-w-sm  bg-white rounded-xl shadow-md overflow-hidden hover:border-[#AF0D5A] hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-gray-100">
     <div className=' w-full max-h-[300px]'>
       <Image
        alt="service-image"
        src={itemUrl}
        className="object-cover w-full h-full"
      />
     </div>
      <div className="p-4">
        <h5 className="mb-2 text-[22px] font-serif text-gray-800 hover:text-[#AF0D5A]">
          {itemName}
        </h5>
        <p className="text-[15px] font-sans text-gray-600 hover:text-[#AF0D5A]">
          {itemDesc}
        </p>
      </div>
    </div>
  );
};

export default ServiceItemCard;
