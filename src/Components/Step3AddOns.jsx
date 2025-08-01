import React from "react";
import SectionHeader from "./SectionHeader";
import Step3Card from "./Step3Card";

const Step3AddOns = () => {
  const data = [
    {
      heading: "Online Service",
      subHeading: "Access to multiplayer games",
      price: "1",
    },
    {
      heading: "Larger Storage",
      subHeading: "Extra 1TB of cloud storage",
      price: "2",
    },
    {
      heading: "Customizable Profile",
      subHeading: "Custom theme on your profile",
      price: "3",
    },
  ];

  return (
    <div className="flex items-center justify-center px-4 sm:p-0 py-8 sm:shadow-none shadow-xl sm:rounded-none rounded-sm ">
      <div className="flex flex-col w-full max-w-2xl">
        <SectionHeader
          heading="Pick Add-ons"
          subHeading="Add-ons help enhance your gaming experience."
        />
        <div className="mt-10 flex flex-col space-y-5 w-full mb-10">
          {data.map((item, index) => (
            <Step3Card
              key={index}
              heading={item.heading}
              subHeading={item.subHeading}
              amount={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step3AddOns;
