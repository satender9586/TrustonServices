import React from 'react'
import { whyChooseUsData } from '@/constants/whyChooseUsFakeData';
import { WhyChooseUsCrausel } from './WhyChooseUsCrausel';

const WhyChoose = () => {
    return (
        <div> 
            <div className=' container mx-auto px-3 md:px-10 lg:px-20 py-4 '>
                <div className="max-w-2xl mx-auto text-center pb-4">
                    <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#AF0D5A] mb-4">
                        Why Choose Us
                    </h1>
                    <p className="text-md font-sans text-[#949494]">
                        At <span className="text-[#AF0D5A] font-semibold">Trust On Services</span>, we bring over 5 years of experience in fast, reliable AC, washing machine, and fridge repairs across Delhi NCR.
                    </p>
                </div>
                <div className=''>
                    <WhyChooseUsCrausel data = {whyChooseUsData} />
                </div>
            </div>
        </div>
    )
}

export default WhyChoose




