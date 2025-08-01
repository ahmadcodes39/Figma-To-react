import React from "react";

const Step2Card = ({ icon, heading, price }) => {
  return (
    <div className="flex flex-row sm:flex-col gap-2 items-center sm:items-start sm:justify-between p-3 sm:p-6 border border-gray-300 rounded-xl bg-white hover:border-blue-500 transition-all duration-200 h-full sm:h-[200px] md:h-[300px] cursor-pointer">
      <img
        src={icon}
        alt={`${heading} icon`}
        className="sm:w-12 sm:h-12 sm:mb-6 mb-3 w-6 h-6"
      />

      <section className="flex flex-col gap-1">
        <h1 className="font-semibold text-base sm:text-lg text-text_color">
          {heading}
        </h1>
        <p className="text-sm sm:text-base text-[#9397A2]">${price}/mo</p>
      </section>
    </div>
  );
};

export default Step2Card;
