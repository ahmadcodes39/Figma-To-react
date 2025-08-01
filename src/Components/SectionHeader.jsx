import React from "react";

const SectionHeader = ({ heading, subHeading }) => {
  return (
    <section className="flex flex-col gap-2">
      <h1 className="font-ubuntu text-2xl sm:text-3xl font-bold text-text_color">
        {heading}
      </h1>
      <p className="text-p_color font-ubuntu text-sm sm:text-base">
        {subHeading}
      </p>
    </section>
  );
};


export default SectionHeader;
