import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WhyChooseUsCrauselProps } from '@/types/landing';

export const WhyChooseUsCrausel: React.FC<WhyChooseUsCrauselProps> = ({ data }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="gap-4 py-4 px-1 sm:px-0">
        {data.map((items, index) => (
          <CarouselItem
            key={index}
            className="basis-[90%] sm:basis-1/2 lg:basis-1/3"
          >
            <div className="bg-white border border-gray-100 rounded-[24px] shadow-md hover:shadow-lg hover:-translate-y-2 hover:border-[#AF0D5A] transition-all duration-300 p-6 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center gap-4">
                {/* Icon wrapper */}
                <div className="p-4 bg-gradient-to-br from-[#e0f3ff] to-[#f4fcff] rounded-full shadow transform transition duration-300 hover:scale-110 hover:rotate-1">
                  {<items.icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#81CAEB]" />}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-800 dark:text-white hover:text-[#AF0D5A] transition-colors duration-200">
                  {items.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm sm:text-[15px] text-[#666] dark:text-gray-300 px-2 sm:px-3 leading-relaxed tracking-tight">
                  {items.desc}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="hidden sm:flex justify-between items-center px-3">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};
