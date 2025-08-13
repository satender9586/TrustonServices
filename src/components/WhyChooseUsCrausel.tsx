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
      <CarouselContent className="md:pt-4 ">
        {data.map((items, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/2 lg:basis-1/3"
          >
            <div className="bg-white min-h-[160px] p-5 sm:p-7 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-t-4 border-[#AF0D5A]   hover:-translate-y-2    ">
              <div className="flex flex-col items-center text-center gap-2 md:gap-4">
                
                {/* Icon */}
                <div className="p-3 md:5 bg-gradient-to-br from-[#E6F7FF] to-[#FDF6F9] rounded-full shadow-md hover:shadow-lg transform transition duration-300 hover:scale-110">
                  <items.icon className=" w-8 md:w-12 h-8 md:h-12 sm:w-14 sm:h-14 text-[#AF0D5A]" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg  font-semibold text-gray-800   tracking-wide  group-hover:text-[#AF0D5A] transition-colors">
                  {items.title}
                </h3>

                {/* Description */}
                <p className="hidden md:block tracking-wide text-sm text-gray-600  space-y-1 leading-snug sm:leading-relaxed px-2">
                  {items.desc}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="hidden sm:flex justify-between items-center px-3">
        <CarouselPrevious className="hover:bg-[#AF0D5A] hover:text-white transition" />
        <CarouselNext className="hover:bg-[#AF0D5A] hover:text-white transition" />
      </div>
    </Carousel>
  );
};
