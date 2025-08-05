import React from "react";

const SectionHeader = ({ heading, subHeading }) => {
  return (
    <section className="flex flex-col gap-2 sm:gap-3 md:gap-4 2xl:gap-6">
      <h1 className="font-ubuntu font-bold text-text_color 
        text-lg sm:text-xl md:text-2xl lg:text-4xl 2xl:text-3xl">
        {heading}
      </h1>
      <p className="font-ubuntu text-p_color 
        text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-xl">
        {subHeading}
      </p>
    </section>
  );
};

export default SectionHeader;
