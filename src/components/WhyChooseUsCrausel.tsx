import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { WhyChooseUsCrauselProps } from '@/types/landing';


export const WhyChooseUsCrausel: React.FC<WhyChooseUsCrauselProps> = ({ data }) => {
    return (
        <Carousel opts={{ align: "start", }}>
            <CarouselContent className="gap-4 py-4">
                {
                    data.map((items, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full md:basis-1/2 lg:basis-1/3 max-w-sm p-6 bg-white border border-gray-100 rounded-[24px] shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-[#AF0D5A] transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 backdrop-blur-sm"
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="p-5 bg-gradient-to-br from-[#e0f3ff] to-[#f4fcff] rounded-full shadow-md transform transition duration-300 hover:scale-110 hover:rotate-1">
                                    {<items.icon className="size-14 text-[#81CAEB] drop-shadow-md" />}
                                </div>

                                <h1 className="font-serif text-[24px] font-bold text-gray-800 dark:text-white hover:text-[#AF0D5A] transition-colors duration-200 tracking-wide">
                                    {items.title}
                                </h1>

                                <p className="font-sans text-[16px] text-[#666] dark:text-gray-300 hover:text-[#AF0D5A] px-3 tracking-tight leading-relaxed">
                                    {items.desc}
                                </p>
                            </div>
                        </CarouselItem>



                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}