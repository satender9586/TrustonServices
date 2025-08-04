import React from "react";
import EnqueryPopUp from "./EnqueryPopUp";

const AboutUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#ffffff] via-[#fff3f8] to-[#fdf4f8]  py-5 sm:py-8 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10  text-center max-w-3xl">
        <div className="max-w-3xl mx-auto text-center mb-5 md:mb-8">
          <h2 className="text-[24px] sm:text-4xl md:leading-12  tracking-[1.5px] md:tracking-[2px] md:font-semibold text-[#AF0D5A] mb-2 md:mb-2">
            Who We Are
          </h2>

          <p className="block md:hidden text-[14px] sm:text-[15px] md:text-[16px] tracking-wide text-[#555] leading-relaxed text-center px-9 sm:px-4">
            At{" "}
            <span className="text-[#AF0D5A] font-semibold">
              Trust On Services
            </span>
            , we provide expert repair, installation, and maintenance.
          </p>
          <p className="hidden sm:block text-[15px] tracking-wide sm:text-[16px] text-[#555] leading-relaxed ">
            At{" "}
            <span className="text-[#AF0D5A] font-semibold">
              Trust On Services
            </span>
            , we provide expert repair, installation, and maintenance for all
            major home appliances. With <strong>7+ years</strong> of experience,
            our certified technicians ensure fast
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mt-8">
            {[
              { label: "7+ Years", sub: "Industry Experience" },
              { label: "Certified", sub: "Expert Technicians" },
              { label: "24/7", sub: "Customer Support" },
            ].map((item, i) => (
              <div
                key={i}
                className="shadow-sm bg-white mb-3 px-5 rounded-[7px]  p-6  hover:shadow-lg transition-all"
              >
                <span className="block text-[#AF0D5A] text-lg tracking-[1.5px] font-bold pb-1">
                  {item.label}
                </span>
                <p className="text-[15px] tracking-wide text-[#555]">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
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
      </div>
    </section>
  );
};

export default AboutUs;
