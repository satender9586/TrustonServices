import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

const FeedbackCard = () => {
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-100 rounded-[20px] shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-start mb-4">
          <FaQuoteLeft className="text-3xl text-[#c0c4cc] opacity-80" />
          <div className="flex gap-1 text-[#FF7F22] text-xl">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <IoIosStar key={i} />
              ))}
          </div>
        </div>

        <p className="text-[15.5px] text-gray-600 dark:text-gray-300 leading-relaxed font-sans tracking-tight mb-6">
          Years of experience gives us immense confidence in our work and
          quality. We provide the best repair services for air conditioners,
          refrigerators, washing machines, and other home appliances.
        </p>

        <div className="border-t border-dashed border-gray-300 dark:border-gray-600 pt-3">
          <p className="font-serif text-[17px] font-semibold text-[#AF0D5A] mb-0">
            Satish Kumar
          </p>
          <p className="text-sm text-[#888]">New Delhi</p>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
