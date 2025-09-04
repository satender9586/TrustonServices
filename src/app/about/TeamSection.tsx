import { teamMembers } from '@/constants/usersInfo'
import Image from 'next/image'
import React from 'react'

const TeamSection = () => {
  return (
    <section className="pb-0 md:pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Team cards */}
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4  md:py-4">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group  p-4 sm:p-5 bg-white border border-gray-100 rounded-[20px] sm:rounded-[24px] shadow-md hover:shadow-xl hover:-translate-y-2 sm:hover:-translate-y-3 hover:border-[#AF0D5A] transition-all duration-300 flex flex-col items-center"
            >
              {/* Profile image */}
              <div className="relative w-full h-70 sm:h-60 overflow-hidden rounded-xl mb-3">
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
              <p className="tracking-wide  text-sm text-gray-600  space-y-1 leading-snug sm:leading-relaxed">
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
