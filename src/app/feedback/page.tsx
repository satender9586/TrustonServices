import React from "react";
import Layout from "@/components/Layout";
import FeedbackCard from "@/components/FeedbackCard";
import FeebackSection from "@/components/FeebackSection";

const Feedback = () => {
  return (
    <Layout>
      <section className=" bg-gradient-to-b from-[#fffafc] via-white to-[#fef6f9] pt-13">
        <FeebackSection />
      </section>
    </Layout>
  );
};

export default Feedback;
