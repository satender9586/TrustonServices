import React from "react";
import Layout from "@/components/Layout";
import {
  FaUsers,
  FaHandshake,
  FaStar,
  FaClock,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";
import HiglightCart from "@/components/Cards/HiglightCart";
import TeamSection from "./TeamSection";
import LocationSection from "./LocationSection";
import OwnerInfoSection from "./OwnerInfoSection";
import FAQ from "@/components/FAQ";

const About = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-[#ffffff] via-[#fff8fb] to-[#fef2f8] pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 relative">
            <h1 className="text-2xl sm:text-4xl font-serif font-semibold bg-gradient-to-r from-[#AF0D5A] to-pink-500 bg-clip-text text-transparent mb-2 sm:mb-3 tracking-wide drop-shadow-sm">
              About Us
            </h1>

            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#111828] mb-4 sm:mb-5 leading-tight">
              TrustOn<span className="text-[#AF0D5A]">Services</span>
            </h2>
            <p className="text-gray-700 font-serif text-sm leading-relaxed px-2 sm:hidden">
              Based in NCR, <strong>TrustOnServices</strong> is your trusted
              home service partner for appliance repair, deep cleaning & more —
              all just a click away.
            </p>

            <p className="hidden sm:block text-gray-700 font-serif text-lg leading-relaxed px-0 ">
              Based in NCR, <strong>TrustOnServices</strong> is your trusted
              home service partner. From appliance repair to deep cleaning, we
              deliver reliable and affordable solutions — all just a click away.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-4">
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
              title="4.9★ Rating"
              text="Loved for quality and professionalism."
            />
            <HiglightCart
              icon={<FaClock />}
              title="30-Min Fast Response"
              text="Quick service to solve your problems."
            />
            <HiglightCart
              icon={<FaTools />}
              title="Certified Technicians"
              text="Skilled professionals for guaranteed service."
            />
            <HiglightCart
              icon={<FaShieldAlt />}
              title="Reliable & Safe"
              text="Background-verified staff for peace of mind."
            />
          </div>
        </div>
        {/* Owener info */}
        <OwnerInfoSection />
        {/* team Section */}
        <TeamSection />
        {/* Locaiotn */}
      </section>
      <LocationSection />
      {/* faq */}
      <FAQ />
    </Layout>
  );
};

export default About;
