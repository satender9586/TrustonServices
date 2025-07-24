import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CompaniesLovesProps } from "@/types/landing";
import Image from "next/image";

const BrandsCrouser: React.FC<CompaniesLovesProps> = ({ data }) => {
    return (
        <Carousel opts={{ align: "start" }}>
            <CarouselContent className="gap-4 py-6">
                {data.map((item, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-full md:basis-1/2 lg:basis-1/4 max-w-sm px-4 py-6 bg-white rounded-[20px_5px_20px_5px] border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:border-[#AF0D5A] dark:bg-gray-800 dark:border-gray-700"
                    >
                        <div className="flex flex-col items-center justify-center text-center space-y-4">
                            <div className="bg-[#f4f4f4] p-4 rounded-full shadow-inner hover:scale-110 transition-transform duration-300 ease-in-out">
                                <Image
                                    src={item.imgs}
                                    alt={item.title}
                                    className="w-[80px] h-[80px] object-contain"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <h3 className="text-[17px] font-semibold text-gray-800 dark:text-white hover:text-[#AF0D5A] transition-colors duration-200 tracking-wide">
                                {item.title}
                            </h3>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default BrandsCrouser;
