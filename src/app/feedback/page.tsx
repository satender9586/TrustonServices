import React from "react";
import Layout from "@/components/Layout";
import FeedbackCard from "@/components/FeedbackCard";

const Feedback = () => {
  return (
    <Layout>
      <section className="bg-white pt-16 pb-13">
        <div className="container mx-auto px-4 sm:px-8 lg:px-20 pt-10">
          <div>
            <h2 className=" text-3xl sm:text-4xl font-serif font-extrabold text-[#AF0D5A] text-center mb-4">
              What Our Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-center text-[15px] sm:text-[16px] text-[#777] md:mb-8">
              Our clients consistently recommend us for our quality,
              professionalism, and reliable support across Delhi NCR.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Feedback;
