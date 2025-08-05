import React from "react";

const Step2Card = ({ icon, heading, price, status }) => {
  return (
    <div className="flex flex-row sm:flex-col gap-2 sm:gap-4 items-center sm:items-start sm:justify-between 
      p-2 sm:p-4 md:p-6 2xl:p-8 border border-gray-300 rounded-xl bg-white hover:border-blue-500 
      transition-all duration-200 h-full sm:h-[200px] md:h-[300px] 2xl:h-[340px] cursor-pointer">

      <img
        src={icon}
        alt={`${heading} icon`}
        className="w-6 h-6 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 sm:mb-4 mb-2"
      />

      <section className="flex flex-col gap-1 2xl:gap-2">
        <h1 className="font-semibold text-sm sm:text-lg 2xl:text-2xl text-text_color">
          {heading}
        </h1>
        <p className="text-xs sm:text-base 2xl:text-lg text-[#9397A2]">
          ${price}/mo
        </p>
        <p className="hidden md:visible text-xs sm:text-base 2xl:text-lg font-medium text-[#032859]">
          {status}
        </p>
      </section>
    </div>
  );
};

export default Step2Card;
