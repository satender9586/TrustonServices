import React from "react";
import FeedbackCrouserl from "./FeedbackCrouserl";
import { whyChooseUsData } from "@/constants/whyChooseUsFakeData";

const FeebackSection = () => {
  return (
    <React.Fragment>
      <section className="bg-gradient-to-b from-[#fffafc] via-white to-[#fef6f9] py-12">
        <div className="container mx-auto px-4 sm:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif md:font-extrabold text-[#AF0D5A] mb-4">
            What Our Clients Say
          </h2>

          <p className="max-w-2xl mx-auto text-[14px] sm:text-[16px] text-[#666] mb-5 md:mb-10 font-serif">
            Our customers love us for our quality, professionalism, and on-time
            service.
          </p>
          <FeedbackCrouserl data={whyChooseUsData} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default FeebackSection;
