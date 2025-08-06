import React from "react";
import Layout from "@/components/Layout";
import FeedbackCard from "@/components/Cards/FeedbackCard";

const Feedback = () => {
  return (
    <Layout>
      <section className=" bg-gradient-to-b from-[#fffafc] via-white to-[#fef6f9] pt-13 py-8 ">
        <div className="container mx-auto px-4 sm:px-10 text-center mt-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold bg-gradient-to-r from-[#AF0D5A] to-pink-500 bg-clip-text text-transparent drop-shadow-sm mb-3">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg pb-10">
            Our customers love us for our quality, professionalism, and on-time
            service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 5 }).map((index) => (
              <FeedbackCard />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Feedback;
