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
      <CarouselContent className="gap-2 py-4">
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/3 lg:basis-1/5 flex justify-center"
          >
            <div className="w-full max-w-[200px] bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-[#AF0D5A] transition-all duration-300 flex flex-col items-center">
              {/* Logo */}
              <div className="p-4 bg-gradient-to-br from-[#f7f7f7] to-white rounded-full shadow-inner hover:scale-105 transition-transform duration-300">
                <Image
                  src={item.imgs}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 text-[16px] font-semibold text-gray-800 hover:text-[#AF0D5A] transition-colors tracking-wide">
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
