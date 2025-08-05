import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CompaniesLovesProps } from "@/types/landing";
import Image from "next/image";

const BrandsCrouser: React.FC<CompaniesLovesProps> = ({ data }) => {
  return (
    <Carousel opts={{ align: "start", loop: true }}>
      <CarouselContent className="py-4">
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2  sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center"
          >
            <div className="w-full max-w-[320px]  bg-white p-5 sm:p-7 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-t-4 border-[#AF0D5A]   hover:-translate-y-2     flex flex-col items-center">
              <div className="w-25 h-25 md:h-30 md:w-30 p-4 bg-gradient-to-br from-[#f7f7f7] to-white rounded-full shadow-inner hover:scale-105 transition-transform duration-300">
                <Image
                  src={item.imgs}
                  alt={item.title}
                  className="object-contain rounded-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <h3 className="mt-4 text-base sm:text-lg  font-semibold text-gray-800 mb-1  tracking-wide  group-hover:text-[#AF0D5A] transition-colors">
                {item.title}
              </h3>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex justify-center gap-4 mt-4">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default BrandsCrouser;
