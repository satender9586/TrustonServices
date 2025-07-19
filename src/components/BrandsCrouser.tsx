import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { WhyChooseUsItem } from '@/types/landing';
import { FaQuoteLeft } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";


interface WhyChooseUsCrauselProps {
    data: WhyChooseUsItem[];
}


const BrandsCrouser: React.FC<WhyChooseUsCrauselProps> = ({ data }) => {
    return (
        <>
            <Carousel opts={{
                align: "start",
            }}   >
                <CarouselContent className="gap-4">
                    {
                        Array.from({length:10}).map((_, index) => (
                            <CarouselItem key={index} className=' md:basis-1/2 lg:basis-1/4 border  max-w-sm p-4  bg-white  border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700'>
                               
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}

export default BrandsCrouser

