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
    <div className="px-4 sm:p-0 w-full sm:rounded-none sm:shadow-none shadow-xl rounded-md">
      <div className="flex flex-col justify-start items-start w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-start justify-start space-y-6 w-full">
          <SectionHeader
            heading="Finishing up"
            subHeading="Double-check everything looks OK before confirming."
          />
        </div>
        <Step4Card summaryData={summaryData} total={total} />
      </div>
    </div>
  );
};

export default Step4Summary;
