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
       <div className=" px-4 rounded-md sm:rounded-none py-4 sm:h-[100%] min-h-[60vh] shadow-md sm:shadow-none sm:py-0 sm:px-1 md:px-6 xl:px-6 2xl:px-10 sm:relative absolute sm:top-0 sm:left-0 sm:right-0 top-20 left-10 right-10 bg-white">

      <div className="flex flex-col w-full max-w-2xl 2xl:max-w-5xl 2xl:px-1 2xl:py-1">
        <SectionHeader
          heading="Pick Add-ons"
          subHeading="Add-ons help enhance your gaming experience."
        />
        <div className="2xl:mt-3 mt-3 flex flex-col space-y-4 w-full mb-3">
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
