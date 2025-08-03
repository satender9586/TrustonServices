import { teamMembers } from '@/constants/usersInfo'
import Image from 'next/image'
import React from 'react'

const TeamSection = () => {
  return (
    <section className="relative py-10 bg-gradient-to-br from-[#fff0f6] via-[#ffe6f0] to-[#fff8fb] overflow-hidden">
  <div className="absolute top-20 left-20 w-48 h-48 bg-pink-200 rounded-full blur-[120px] opacity-25"></div>
  <div className="absolute bottom-20 right-20 w-56 h-56 bg-[#AF0D5A] rounded-full blur-[150px] opacity-20"></div>

  <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
    <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#AF0D5A] mb-3 drop-shadow-sm">
      Our Expert Team
    </h2>

    <div className="max-w-2xl mx-auto mb-12">
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-serif">
        Meet the passionate professionals who bring dedication, skill, and
        excellence to every project. Our team is committed to delivering
        outstanding service and building trust with every client.
      </p>
    </div>

    <div className="grid gap-4 md:gap-5 sm:grid-cols-2 md:grid-cols-4 ">
      {teamMembers.map((member, idx) => (
        <div
          key={idx}
          className="group p-4 bg-white  border-gray-100 rounded-[24px] shadow-md hover:shadow-xl hover:-translate-y-3 hover:border-[#AF0D5A] transition-all duration-300 flex flex-col items-center"
        >
          <div className="relative w-full h-60 overflow-hidden rounded-xl mb-3 ">
            <Image
              src={member.profile}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h3 className="text-lg font-serif text-gray-800 font-bold">
            {member.name}
          </h3>
          <p className="text-sm font-sans text-[#AF0D5A] mb-1">
            {member.role}
          </p>
          <p className="text-sm font-sans text-gray-600 mb-3">
            {member.experience} Experience
          </p>

          <p className="text-gray-700 font-sans text-sm text-center leading-snug">
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