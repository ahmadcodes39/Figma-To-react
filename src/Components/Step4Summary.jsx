import React from "react";
import SectionHeader from "./SectionHeader";
import Step4Card from "./Step4Card";

const Step4Summary = () => {
  const summaryData = [
    {
      title: "Arcade (Monthly)",
      changeOption: "Change",
      basePrice: 9,
      addOns: [
        { name: "Online Service", price: 1 },
        { name: "Larger Storage", price: 2 },
      ],
    },
  ];

  const total =
    summaryData[0].basePrice +
    summaryData[0].addOns.reduce((sum, addon) => sum + addon.price, 0);

  return (
    <div className="px-0 py-0 sm:px-0 w-full">
      <div className="flex flex-col justify-start items-start w-full max-w-4xl 2xl:max-w-6xl mx-auto 2xl:px-1 2xl:py-1">
        <SectionHeader
          heading="Finishing up"
          subHeading="Double-check everything looks OK before confirming."
        />
        <Step4Card summaryData={summaryData} total={total} />
      </div>
    </div>
  );
};

export default Step4Summary;
