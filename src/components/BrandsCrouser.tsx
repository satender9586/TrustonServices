import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { CompaniesLovesProps } from "@/types/landing";
import Image from "next/image";



const BrandsCrouser: React.FC<CompaniesLovesProps> = ({ data }) => {
    return (
        <>
            <Carousel opts={{ align: "start" }}>
                <CarouselContent className="gap-4">
                    {data.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/4 border max-w-sm p-4 bg-white border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                            <div className="flex flex-col items-center justify-center text-center">
                                <Image src={item.imgs} alt={item.title} className="w-full h-20 object-contain" />
                               
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

