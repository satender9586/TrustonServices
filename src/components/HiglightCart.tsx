import React from "react";

type HighlightProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const HiglightCart = ({ icon, title, text }: HighlightProps) => {
  return (
    <div className="bg-white p-7 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-t-4 border-[#AF0D5A]">
      <div className="text-[#AF0D5A] text-3xl mb-3">{icon}</div>
      <h4 className="text-lg font-serif font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-[16px] tracking-wide font-serif text-gray-600">{text}</p>
    </div>
  );
};

export default HiglightCart;
