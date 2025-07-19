import React from 'react'
import technicianImg from "../assests/technician.png"
import Image from 'next/image'
import FeedbackCrouserl from './FeedbackCrouserl'
import { whyChooseUsData } from '@/constants/whyChooseUsFakeData'
import { Button } from './ui/button'
import BrandsCrouser from './BrandsCrouser'
import { companiesLovesData } from '@/constants/whyChooseUsFakeData'


const AboutUs = () => {
    return (
        <div>
            <div className=' container mx-auto px-3 md:px-10 lg:px-20 pb-4'>
                <div className='grid grid-cols-2 gap-5 mt-3'>
                    <div>
                        <Image src={technicianImg} alt='technican' className='w-full h-full' />
                    </div>
                    <div className=''>
                        <h1 className=" text-2xl sm:text-2xl font-serif font-extrabold text-[#AF0D5A] pb-2 ">
                            Who we are
                        </h1>
                        <p className=" text-[15px] font-sans text-[#949494] tracking-[1.5px]">
                            At <span className="text-[#AF0D5A] font-semibold">Trust On Services</span>, We are a company that provides repair, installation, uninstallation and maintenance services from certified technicians for all your home appliances. We provide verified and experienced technicians who give their best to make your life comfortable. We are one of the leading home appliance services company in Delhi. 7 Years of Experience gives the immense confidence in our work and quality to our clients.Our company provides Best Air Conditioner repairing services, fridge repairing services, Washing machine repairing services along with your all home aplliances.
                        </p>
                    </div>
                </div>
                <div className='pt-3 mt-5'>
                    <h1 className="text-2xl sm:text-2xl font-serif font-extrabold text-[#AF0D5A] pb-2">
                        What Our Clients Say About Us
                    </h1>
                    <p className="max-w-xl text-[14px] font-sans text-[#949494] tracking-[1px]">
                        At <span className="text-[#AF0D5A] font-semibold">Trust On Services</span>, we’re committed to delivering quality service that our clients across Delhi NCR trust and recommend.
                    </p>
                    <div className='pt-5 pb-5'>
                        <FeedbackCrouserl data={whyChooseUsData} />
                    </div>
                    <div className='flex justify-center mt-9 font-serif '>
                        <Button variant={"outline"} className='text-[17px] font-extrabold'>Show More</Button>
                    </div>
                </div>
                <div className='pb-6'>
                    <h1 className="mt-9 text-2xl sm:text-2xl font-serif font-extrabold text-[#AF0D5A] pb-1">
                        Companies We Proudly Serve
                    </h1>
                    <p className="pb-5 max-w-xl text-[14px] font-sans text-[#949494] tracking-[1px]">
                        At <span className="text-[#AF0D5A] font-semibold">Trust On Services</span>, we proudly partner with leading companies
                    </p>
                    <BrandsCrouser data={companiesLovesData} />
                </div>
            </div>
        </div>
    )
}

export default AboutUs