import { teamMembers } from '@/constants/usersInfo'
import Image from 'next/image'
import React from 'react'

const TeamSection = () => {
  return (
    <section className="relative py-8 sm:py-10 bg-gradient-to-br from-[#fff0f6] via-[#ffe6f0] to-[#fff8fb] overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 bg-pink-200 rounded-full blur-[90px] sm:blur-[120px] opacity-25"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-36 h-36 sm:w-56 sm:h-56 bg-[#AF0D5A] rounded-full blur-[100px] sm:blur-[150px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-[24px] sm:text-4xl md:leading-12  tracking-[1.5px] md:tracking-[2px] md:font-semibold text-[#AF0D5A] mb-2">
          Our Expert Team
        </h2>

        {/* Intro text */}
        <div className="md:hidden max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-[15px] tracking-wide sm:text-[16px] text-[#555] leading-relaxed mb-2">
            Meet the passionate professionals who bring dedication
          </p>
        </div>
        <div className="hidden md:block max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-gray-700 text-sm sm:text-lg leading-relaxed font-serif px-1 sm:px-0">
            Meet the passionate professionals who bring dedication, skill, and
            excellence to every project. Our team is committed to delivering
            outstanding service and building trust with every client.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group p-4 sm:p-5 bg-white border border-gray-100 rounded-[20px] sm:rounded-[24px] shadow-md hover:shadow-xl hover:-translate-y-2 sm:hover:-translate-y-3 hover:border-[#AF0D5A] transition-all duration-300 flex flex-col items-center"
            >
              {/* Profile image */}
              <div className="relative w-full h-50 sm:h-60 overflow-hidden rounded-xl mb-3">
                <Image
                  src={member.profile}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name */}
              <h3 className="text-base sm:text-lg font-serif text-gray-800 font-bold">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-xs sm:text-sm font-sans text-[#AF0D5A] mb-1">
                {member.role}
              </p>

              {/* Experience */}
              <p className="text-xs sm:text-sm font-sans text-gray-600 mb-3">
                {member.experience} Experience
              </p>

              {/* Description */}
              <p className="text-gray-700 font-sans text-xs sm:text-sm text-center leading-snug sm:leading-relaxed px-1">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
