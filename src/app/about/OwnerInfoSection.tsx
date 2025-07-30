import React from "react";
import { ownerInfo } from "@/constants/usersInfo";
import Image from "next/image";

const OwnerInfoSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#fff0f6] via-[#ffe6f0] to-[#fff8fb] overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full blur-[100px] opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#AF0D5A] rounded-full blur-[120px] opacity-20"></div>

      <div className="text-center max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold font-serif text-[#AF0D5A] mb-6 drop-shadow-sm">
          Meet Our Founder
        </h2>

        {/* Profile Image */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#AF0D5A] to-pink-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <Image
            src={ownerInfo.profile}
            alt={ownerInfo.name}
            width={180}
            height={180}
            className="rounded-full mx-auto border-[5px] border-[#AF0D5A] shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Name */}
        <h3 className="text-2xl sm:text-3xl font-serif text-gray-800 mt-5 font-semibold">
          {ownerInfo.name}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 font-serif text-sm italic mt-1">
          {ownerInfo.desc}
        </p>

        {/* Extra Description */}
        <p className="mt-5 font-serif text-gray-700 text-base sm:text-lg leading-relaxed px-4">
          {ownerInfo.extrDesc}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-5 mt-6 text-xl text-[#AF0D5A]">
          <a href="#" className="hover:text-pink-500 transition">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OwnerInfoSection;
