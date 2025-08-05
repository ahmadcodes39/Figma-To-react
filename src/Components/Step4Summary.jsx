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
        <div className=" px-4 rounded-md sm:rounded-none py-4 sm:h-[100%] min-h-[60vh] shadow-md sm:shadow-none sm:py-0 sm:px-1 md:px-6 xl:px-6 2xl:px-10 sm:relative absolute sm:top-0 sm:left-0 sm:right-0 top-20 left-10 right-10 bg-white">

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
