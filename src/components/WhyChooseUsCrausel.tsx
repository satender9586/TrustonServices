import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { WhyChooseUsCrauselProps} from '@/types/landing'; 


export const WhyChooseUsCrausel:React.FC<WhyChooseUsCrauselProps>  = ({data}) => {
    return (
            <Carousel opts={{ align: "start",}}>
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