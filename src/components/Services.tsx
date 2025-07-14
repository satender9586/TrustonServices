import React from 'react'
import { ServicesItems } from "../constants/ServicesFakeData"
import ServiceItemCard from './ServiceItemCard'

const Services = () => {
    return (
        <div className="bg-[#F9F9F9]">
            <div className=' container mx-auto px-3 md:px-10 lg:px-20 py-6'>
                <div className="max-w-3xl mx-auto text-center pb-4">
                    <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#AF0D5A] mb-4">
                        Trusted Home Services for Delhi NCR
                    </h1>
                    <p className="text-lg  text-[#949494 font-sans">
                        Welcome to <span className=" text-[#AF0D5A]">Trust On Services</span> —
                        your one-stop solution for reliable AC installation, washing machine repair, and refrigerator servicing
                        across Delhi NCR. From residential flats to commercial spaces, we bring expert, on-time
                        service right to your doorstep.
                    </p>
                </div>

                <div className=" grid grid-cols-3 gap-5 py-2">
                    {
                        ServicesItems.map((service) => (
                            <ServiceItemCard
                                key={service.itemname}
                                itemUrl={service.itemUrl}
                                itemName={service.itemname}
                                itemDesc={service.itemDesc}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Services