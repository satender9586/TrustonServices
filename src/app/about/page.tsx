import React from "react";
import Layout from "@/components/Layout";
import {
  FaUsers,
  FaHandshake,
  FaStar,
  FaClock,
  FaTools,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";
import HiglightCart from "@/components/HiglightCart";
import OwnerInfo from "./OwnerInfo";
import TeamSection from "./TeamSection";
import LocationSection from "./LocationSection";

const About = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-[#ffffff] via-[#fff8fb] to-[#fef2f8] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-3xl mx-auto mb-14 relative">
            {/* Decorative Background */}
            <div className="absolute -top-10 -left-14 w-32 h-32 bg-pink-200 rounded-full blur-[100px] opacity-30"></div>
            <div className="absolute -bottom-10 -right-14 w-40 h-40 bg-[#AF0D5A] rounded-full blur-[120px] opacity-20"></div>

            {/* Small Gradient Subtitle */}
            <h1 className="text-3xl sm:text-4xl font-serif font-semibold bg-gradient-to-r from-[#AF0D5A] to-pink-500 bg-clip-text text-transparent mb-3 tracking-wide drop-shadow-sm">
              About Us
            </h1>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-[#111828] mb-5 leading-tight">
              TrustOn<span className="text-[#AF0D5A]">Services</span>
            </h2>

            {/* Description */}
            <p className="text-gray-700 font-serif text-lg leading-relaxed px-4 sm:px-0">
              Based in NCR, <strong>TrustOnServices</strong> is your trusted
              home service partner. From appliance repair to deep cleaning, we
              deliver reliable and affordable solutions — all just a click away.
              <br className="hidden sm:block" />
              We’ve served <strong>1,000+ happy clients</strong> across Delhi,
              Noida & Gurugram with our 50+ trained professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <HiglightCart
              icon={<FaUsers />}
              title="1,000+ Clients"
              text="Proudly serving happy customers across Delhi NCR."
            />
            <HiglightCart
              icon={<FaHandshake />}
              title="5+ Years Experience"
              text="Trusted expertise in home services and appliance care."
            />
            <HiglightCart
              icon={<FaStar />}
              title="4.9★ Average Rating"
              text="Our customers love our quality and professionalism."
            />
            <HiglightCart
              icon={<FaClock />}
              title="30-Min Fast Response"
              text="Quick service to solve your problems on time."
            />
            <HiglightCart
              icon={<FaTools />}
              title="Certified Technicians"
              text="Skilled professionals for guaranteed service quality."
            />
            <HiglightCart
              icon={<FaShieldAlt />}
              title="Reliable & Safe"
              text="Background-verified staff for your peace of mind."
            />
          </div>

          {/* WHY CHOOSE */}
          <div className="bg-gradient-to-r from-[#fff0f6] to-[#ffe6f1] border-l-4 border-[#AF0D5A] p-6 rounded-xl shadow-sm max-w-4xl mx-auto">
            <h3 className="text-xl font-serif text-[#AF0D5A] mb-2 text-center">
              Why Choose TrustOnServices?
            </h3>
            <ul className="list-disc list-inside text-gray-700 font-serif space-y-1 text-center sm:text-left">
              <li>✅ Affordable pricing across NCR</li>
              <li>✅ 24/7 customer support</li>
              <li>✅ Verified & skilled experts</li>
              <li>✅ Easy online booking & tracking</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Owener info */}
      <OwnerInfo />
      {/* team Section */}
      <TeamSection />
      {/* Locaiotn */}
      <LocationSection />
    </Layout>
  );
};

export default About;
