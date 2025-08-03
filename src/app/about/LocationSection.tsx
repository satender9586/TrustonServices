import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const LocationSection = () => {
  return (
    <section className="relative py-10 bg-gradient-to-br from-[#fff0f6] via-[#ffe6f0] to-[#fff8fb] overflow-hidden">
  {/* Decorative Blur Circles */}
  <div className="absolute top-20 left-20 w-48 h-48 bg-pink-200 rounded-full blur-[120px] opacity-25"></div>
  <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#AF0D5A] rounded-full blur-[150px] opacity-20"></div>

  <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
    {/* Heading */}
    <h2 className="text-[24px] sm:text-4xl md:leading-12  tracking-[1.5px] md:tracking-[2px] md:font-semibold text-[#AF0D5A] mb-2">
      We Proudly Serve
    </h2>

    {/* Subtext */}
    <p className="text-[15px] tracking-wide sm:text-[16px] text-[#555] leading-relaxed mb-2">
      Bringing top-quality services to your doorstep with professionalism and care — 
      across major cities in NCR.
    </p>

    {/* City List */}
    <div className="flex flex-wrap justify-center gap-6">
      {[
        "Delhi",
        "Noida",
        "Gurugram",
        "Faridabad",
        "Ghaziabad",
        "Greater Noida",
      ].map((city, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                     bg-white border border-[#AF0D5A] shadow-md 
                     hover:bg-[#AF0D5A] hover:text-white 
                     transition-all duration-300 text-[#AF0D5A] font-medium 
                     hover:shadow-lg hover:scale-105"
        >
          <FaMapMarkerAlt className="text-lg" />
          {city}
        </span>
      ))}
    </div>
  </div>
</section>

  )
}

export default LocationSection