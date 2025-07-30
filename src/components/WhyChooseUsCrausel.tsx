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
      <CarouselContent className="gap-4 md:py-4 px-1 sm:px-0">
        {data.map((items, index) => (
          <CarouselItem
            key={index}
            className="basis-[90%] sm:basis-1/2 lg:basis-1/3"
          >
            <div className="bg-white border border-transparent hover:border-[#AF0D5A] rounded-[24px] shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6">
              <div className="flex flex-col items-center text-center gap-4">
                
                {/* Icon */}
                <div className="p-5  bg-gradient-to-br from-[#E6F7FF] to-[#FDF6F9] rounded-full shadow-md hover:shadow-lg transform transition duration-300 hover:scale-110">
                  <items.icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#AF0D5A]" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-800 hover:text-[#AF0D5A] transition-colors">
                  {items.title}
                </h3>

                {/* Description */}
                <p className="font-serif text-sm sm:text-[16px] tracking-wide text-[#666] leading-relaxed px-2">
                  {items.desc}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Buttons */}
      <div className="hidden sm:flex justify-between items-center px-3">
        <CarouselPrevious className="hover:bg-[#AF0D5A] hover:text-white transition" />
        <CarouselNext className="hover:bg-[#AF0D5A] hover:text-white transition" />
      </div>
    </Carousel>
  );
};
