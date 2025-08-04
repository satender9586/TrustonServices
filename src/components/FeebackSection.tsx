import React from "react";
import FeedbackCrouserl from "./FeedbackCrouserl";
import { whyChooseUsData } from "@/constants/whyChooseUsFakeData";

const FeebackSection = () => {
  return (
    <React.Fragment>
      <section className="bg-gradient-to-b from-[#fffafc] via-white to-[#fef6f9] py-5 sm:py-8">
        <div className="container mx-auto px-4 sm:px-10  text-center ">
          <div>
            <h2 className="text-[24px] sm:text-4xl md:leading-12  tracking-[1.5px] md:tracking-[2px] md:font-semibold text-[#AF0D5A] mb-2 md:mb-2">
              What Our Clients Say
            </h2>

            <p className="md:hidden text-[15px] tracking-wide sm:text-[16px] text-[#555] leading-relaxed pb-4">
              Our customers love us for our quality, professionalism,
            </p>
            <p className="hidden md:block text-[15px] tracking-wide sm:text-[16px] text-[#555] leading-relaxed pb-4">
              Our customers love us for our quality, professionalism, and
              on-time service.
            </p>
            <FeedbackCrouserl data={whyChooseUsData} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FeebackSection;
