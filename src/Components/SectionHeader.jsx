import React from "react";

const SectionHeader = ({ heading, subHeading }) => {
  return (
    <section className="flex flex-col gap-2 sm:gap-3 md:gap-4 2xl:gap-6">
      <h1 className="font-ubuntu font-bold text-text_color 
        text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
        {heading}
      </h1>
      <p className="font-ubuntu text-p_color 
        text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
        {subHeading}
      </p>
    </section>
  );
};

export default SectionHeader;
