import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { WhyChooseUsCrauselProps } from '@/types/landing';
import { FaQuoteLeft } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";




const FeedbackCrouserl: React.FC<WhyChooseUsCrauselProps> = ({ data }) => {
    return (
        <>
            <Carousel opts={{ align: "start" }}>
                <CarouselContent className="gap-4 py-4">
                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-full md:basis-1/2 lg:basis-1/3 max-w-sm p-6 bg-white border border-gray-100 rounded-[20px] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <FaQuoteLeft className="text-3xl text-[#c0c4cc] opacity-70" />
                                    <div className="flex text-[16px] gap-1 text-[#FF7F22]">
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                    </div>
                                </div>

                                <p className="text-[15px] text-gray-600 dark:text-gray-300 font-sans leading-relaxed tracking-[0.4px] mb-4">
                                    Years of experience gives us immense confidence in our work and quality. We provide the best repair services for air conditioners, refrigerators, washing machines, and other home appliances.
                                </p>

                                <div className="pt-2 border-t border-dashed border-[#e5e7eb] dark:border-gray-600 mt-4">
                                    <p className="font-serif text-[17px] text-[#AF0D5A] mt-3 font-semibold">Satish Kumar</p>
                                    <p className="font-sans text-sm text-[#949494]">New Delhi</p>
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