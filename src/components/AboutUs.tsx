import React from "react";
import EnqueryPopUp from "./EnqueryPopUp";


const AboutUs = () => {
  return (
  
      <section className="relative bg-gradient-to-br from-[#ffffff] via-[#fff3f8] to-[#fdf4f8] py-14 md:py-10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-10 text-center max-w-3xl">
 
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#AF0D5A] mb-4">
            Who We Are
          </h2>
          <div className="w-16 h-1 bg-[#AF0D5A] mx-auto mb-6 rounded-full"></div>

   
          <p className="text-[15px] sm:text-[16px] text-[#555] leading-relaxed mb-8 font-serif">
            At <span className="text-[#AF0D5A] font-semibold">Trust On Services</span>, we provide expert repair, installation, 
            and maintenance for all major home appliances. With <strong>7+ years</strong> of experience, 
            our certified technicians ensure fast, reliable, and hassle-free service across Delhi NCR.
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { label: "7+ Years", sub: "Industry Experience" },
              { label: "Certified", sub: "Expert Technicians" },
              { label: "24/7", sub: "Customer Support" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition-all"
              >
                <span className="block text-[#AF0D5A] text-lg font-bold">{item.label}</span>
                <p className="text-sm text-[#555]">{item.sub}</p>
              </div>
            ))}
          </div>


          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <EnqueryPopUp>
              <button className="px-6 py-3 bg-[#AF0D5A] hover:bg-[#92144b] transition-colors text-white rounded-full shadow-md text-base font-semibold tracking-wide">
                Book a Service
              </button>
            </EnqueryPopUp>
            <span className="text-sm text-[#777] font-serif">
              Certified • Fast • Reliable
            </span>
          </div>
        </div>
      </section>
   
  );
};

export default AboutUs;

