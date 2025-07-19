import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { whyChooseUsData } from '@/constants/whyChooseUsFakeData';
import { WhyChooseUsItem } from '@/types/landing'; 

const WhyChoose = () => {
    return (
        <div> 
            <div className=' container mx-auto px-3 md:px-10 lg:px-20 py-4 '>
                <div className="max-w-2xl mx-auto text-center pb-4">
                    <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#AF0D5A] mb-4">
                        Why Choose Us
                    </h1>
                    <p className="text-lg font-sans text-[#949494]">
                        At <span className="text-[#AF0D5A] font-semibold">Trust On Services</span>, we bring over 5 years of experience in fast, reliable AC, washing machine, and fridge repairs across Delhi NCR.
                    </p>
                </div>
                <div className='pb-5'>
                    <WhyChooseUsCrausel data = {whyChooseUsData} />
                </div>
            </div>
        </div>
    )
}

export default WhyChoose




interface WhyChooseUsCrauselProps {
  data: WhyChooseUsItem[];
}
const WhyChooseUsCrausel:React.FC<WhyChooseUsCrauselProps>  = ({data}) => {
    return (
            <Carousel opts={{ align: "start",}} aria-controls='hidden'   >
                <CarouselContent className="gap-4">
                    {
                        data.map((items, index) => (
                            <CarouselItem key={index} className='basis-1/1 md:basis-1/2 lg:basis-1/3 border  flex flex-col justify-center items-center max-w-sm p-6  bg-white  border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                                    <div>{<items.icon  className = "size-13 text-[#81CAEB]" />}</div>
                                    <h1 className='font-serif mt-4 text-[22px]  text-gray-800 hover:text-[#AF0D5A] tracking-[1px]'>{items.title}</h1>
                                    <h1 className='font-sans text-[16px] mt-1 text-[#949494] hover:text-[#AF0D5A] tracking-[1px] text-center'>{items.desc}</h1>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
    )
}