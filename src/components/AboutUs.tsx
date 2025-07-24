import React from 'react';
import technicianImg from "../assests/technician.png";
import Image from 'next/image';
import FeedbackCrouserl from './FeedbackCrouserl';
import { whyChooseUsData } from '@/constants/whyChooseUsFakeData';
import { Button } from './ui/button';
import BrandsCrouser from './BrandsCrouser';
import { companiesLovesData } from '@/constants/whyChooseUsFakeData';

const AboutUs = () => {
    return (
        <div className="w-full">

            {/* WHO WE ARE Section */}
            <section className="relative bg-gradient-to-br from-[#ffffff] via-[#fff3f8] to-[#fdf4f8] py-20 overflow-hidden">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

                        {/* Left Image Box */}
                        <div className="relative group overflow-hidden rounded-[30px] shadow-xl transform transition-transform duration-500 hover:scale-105 hover:rotate-[-1deg]">
                            <Image
                                src={technicianImg}
                                alt="technician"
                                className="w-full h-auto object-cover"
                                layout="responsive"
                                loading="lazy"
                            />

                            {/* Floating Experience Badge */}
                            <div className="absolute top-4 left-4 bg-[#AF0D5A] text-white text-sm px-4 py-2 rounded-full shadow-md font-semibold tracking-wide animate-bounce-slow">
                                7+ Years of Trust
                            </div>
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-serif font-extrabold text-[#AF0D5A] mb-5 leading-snug">
                                Who We Are
                            </h2>

                            <p className="text-[17px] text-[#444] font-light leading-[1.9] tracking-wide mb-6">
                                At <span className="text-[#AF0D5A] font-semibold">Trust On Services</span>, we deliver expert-level repair, installation, and maintenance services for all major home appliances.
                                With a trusted team of certified technicians and <span className="font-semibold text-[#AF0D5A]">7+ years</span> of industry experience, we bring reliability, speed, and professionalism right to your doorstep.
                                <br /><br />
                                From air conditioners and refrigerators to washing machines and more — our mission is simple: to keep your home running smoothly and stress-free across Delhi NCR.
                            </p>

                            {/* CTA Button */}
                            <div className="flex flex-wrap items-center gap-4">
                                <button className="px-6 py-3 bg-[#AF0D5A] hover:bg-[#92144b] transition-colors text-white rounded-full shadow-lg text-base font-semibold tracking-wide">
                                    Book a Service
                                </button>

                                {/* Optional: Placeholder for logos or trust indicators */}
                                <div className="text-sm text-[#999]">Certified • Fast • Reliable</div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative BG Shape (Optional) */}
                    <div className="absolute -top-10 -right-20 w-[300px] h-[300px] bg-pink-100 rounded-full blur-[100px] opacity-30 z-0"></div>
                </div>
            </section>


            {/* FEEDBACK Section */}
            <section className="bg-white py-14">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <h2 className="text-4xl font-serif font-extrabold text-[#AF0D5A] mb-4 text-center">
                        What Our Clients Say
                    </h2>
                    <p className="max-w-2xl mx-auto text-center text-md text-[#777] mb-8">
                        Our clients consistently recommend us for our quality, professionalism, and reliable support across Delhi NCR.
                    </p>
                    <div className="py-4">
                        <FeedbackCrouserl data={whyChooseUsData} />
                    </div>
                    <div className="flex justify-center mt-8">
                        <Button
                            variant={"outline"}
                            className="text-[16px] font-semibold px-6 py-2 border-2 border-[#AF0D5A] hover:bg-[#AF0D5A] hover:text-white transition-all duration-300"
                        >
                            Show More
                        </Button>
                    </div>
                </div>
            </section>

            {/* COMPANIES Section */}
            <section className="bg-gradient-to-r from-[#fdf4f8] to-[#fff] py-14">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <h2 className="text-4xl font-serif font-extrabold text-[#AF0D5A] mb-4 text-center">
                        Companies We Proudly Serve
                    </h2>
                    <p className="max-w-2xl mx-auto text-center text-md text-[#777] mb-8">
                        Our partnerships with top companies reflect our commitment to consistent, high-quality home service.
                    </p>
                    <BrandsCrouser data={companiesLovesData} />
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
