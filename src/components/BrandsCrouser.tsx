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
            <div className="w-full max-w-[370px]   shadow-sm bg-white mb-3 px-5 rounded-[7px] p-6   hover:shadow-2xl border border-gray-100 hover:border-[#AF0D5A] transition-all duration-300 flex flex-col items-center">
              <div className="w-30 h-30 p-4 bg-gradient-to-br from-[#f7f7f7] to-white rounded-full shadow-inner hover:scale-105 transition-transform duration-300">
                <Image
                  src={item.imgs}
                  alt={item.title}
                  className="object-contain rounded-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <h3 className="mt-4 text[16px] sm:text-base font-bold text-gray-800 hover:text-[#AF0D5A] transition-colors tracking-wide text-center">
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
