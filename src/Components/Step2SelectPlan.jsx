import React from "react";
import SectionHeader from "./SectionHeader";
import Step2Card from "./Step2Card";

const Step2SelectPlan = () => {
  const data = [
    {
      icon: "step2_first.svg",
      heading: "Arcade",
      price: 9,
    },
    {
      icon: "step2_second.svg",
      heading: "Advanced",
      price: 12,
    },
    {
      icon: "step2_third.svg",
      heading: "Pro",
      price: 15,
    },
  ];

  return (
    <div className="flex justify-center items-start w-full">
      <div className="w-full max-w-4xl bg-white sm:rounded-none sm:shadow-none rounded-xl shadow-xl px-6 py-8 sm:px-0 sm:py-0">
        <SectionHeader
          heading="Select your plan"
          subHeading="You have the option of monthly or yearly billing."
        />

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {data.map((item, index) => (
            <Step2Card
              key={index}
              icon={item.icon}
              heading={item.heading}
              price={item.price}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-10">
          <div className="flex items-center gap-5">
            <p className="font-bold text-text_color text-sm sm:text-base">
              Monthly
            </p>
            <input
              type="checkbox"
              className="toggle bg-white hover:bg-slate-400 [--tglbg:#032859]"
              defaultChecked
            />
            <p className="font-bold text-text_color text-sm sm:text-base">
              Yearly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2SelectPlan;
