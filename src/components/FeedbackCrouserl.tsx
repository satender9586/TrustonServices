import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { WhyChooseUsCrauselProps } from '@/types/landing';
import { FaQuoteLeft } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";




const FeedbackCrouserl: React.FC<WhyChooseUsCrauselProps> = ({ data }) => {
    return (
        <>
            <Carousel opts={{align: "start"}}>
                <CarouselContent className="gap-4">
                    {
                        Array.from({length:10}).map((_, index) => (
                            <CarouselItem key={index} className='basis-1/1 md:basis-1/2 lg:basis-1/3 border  max-w-sm p-4  bg-white  border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700'>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <FaQuoteLeft className="size-9 text-[#c0c4cc]" />
                                    </div>
                                    <div className="flex justify-end items-center text-[15px] gap-1 text-[#FF7F22]">
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                    </div>

                                </div>
                                <p className=" text-[14px] tracking-[0.5px] font-sans text-[#949494]">Years of Experience gives the immense confidence in our work and quality to our clients.Our company provides Best Air Conditioner repairing services, fridge repairing services, Washing machine repairing services along with your all home aplliances.</p>
                                <div>
                                    <p className="font-serif text-lg text-[#AF0D5A] mt-2">Satish Kumar</p>
                                    <p className="font-serif text-sm text-[#949494]">New Delhi</p>

                                </div>
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

export default FeedbackCrouserl