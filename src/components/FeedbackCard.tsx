import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

const FeedbackCard = () => {
  return (
    <div className="bg-white p-5 sm:p-7 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-t-4 border-[#AF0D5A]   hover:-translate-y-2   ">
      
      {/* Quote + Stars */}
      <div className="flex justify-between items-start mb-4">
        <div className="">
          <FaQuoteLeft className="text-2xl text-[#AF0D5A] opacity-90" />
        </div>
        <div className="flex gap-1 text-[#FF7F22] text-xl drop-shadow-sm">
          {Array(5).fill(0).map((_, i) => (
            <IoIosStar key={i} />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-[15.5px] text-gray-600 dark:text-gray-300 leading-relaxed font-serif tracking-tight mb-6 italic">
        Years of experience gives us immense confidence in our work and quality.
        We provide the best repair services for air conditioners, refrigerators,
        washing machines, and other home appliances.
      </p>

      {/* Client Info */}
      <div className="border-t border-dashed border-gray-300 dark:border-gray-600 pt-3">
        <p className="font-serif text-[18px] font-bold text-[#AF0D5A] mb-0">
          Satish Kumar
        </p>
        <p className="text-sm text-[#777]">New Delhi</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
