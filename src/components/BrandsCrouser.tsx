import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { CompaniesLovesProps } from "@/types/landing";
import Image from "next/image";



const BrandsCrouser: React.FC<CompaniesLovesProps> = ({ data }) => {
    return (
        <>
            <Carousel opts={{ align: "start" }}>
                <CarouselContent className="gap-4 py-4">
                    {data.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full md:basis-1/2 lg:basis-1/4 max-w-sm p-6 bg-white border border-gray-200 rounded-[20px_5px_20px_5px] shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#AF0D5A] transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
                        >
                            <div className="flex flex-col items-center justify-center text-center space-y-3">
                                <div className="bg-[#f9f9f9] p-4 rounded-full shadow-inner hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={item.imgs}
                                        alt={item.title}
                                        className="w-[80px] h-[80px] object-contain"
                                    />
                                </div>
                                <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white hover:text-[#AF0D5A] transition-colors duration-300">
                                    {item.title}
                                </h3>
                            </div>
                        </CarouselItem>

                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}

export default BrandsCrouser

