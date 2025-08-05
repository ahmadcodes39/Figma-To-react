import React from "react";
import SectionHeader from "./SectionHeader";
import Step2Card from "./Step2Card";

const Step2SelectPlan = () => {
  const data = [
    {
      icon: "step2_first.svg",
      heading: "Arcade",
      price: 9,
      status: "2 months Free",
    },
    {
      icon: "step2_second.svg",
      heading: "Advanced",
      price: 12,
      status: "2 months Free",
    },
    {
      icon: "step2_third.svg",
      heading: "Pro",
      price: 15,
      status: "2 months Free",
    },
  ];

  return (
       <div className=" px-4 rounded-md sm:rounded-none py-4 sm:h-[100%] min-h-[60vh] shadow-md sm:shadow-none sm:py-0 sm:px-1 md:px-6 xl:px-6 2xl:px-10 sm:relative absolute sm:top-0 sm:left-0 sm:right-0 top-20 left-10 right-10 bg-white">

      <div className="w-full max-w-4xl bg-white sm:rounded-none sm:shadow-none px-1 py-0 sm:px-0 sm:py-0 2xl:px-1 2xl:py-1">
        <SectionHeader
          heading="Select your plan"
          subHeading="You have the option of monthly or yearly billing."
          headingClassName="text-lg sm:text-xl md:text-2xl 2xl:text-3xl"
          subHeadingClassName="text-sm sm:text-base md:text-lg 2xl:text-xl"
        />

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-6 mt-6 2xl:mt-1">
          {data.map((item, index) => (
            <Step2Card
              key={index}
              icon={item.icon}
              heading={item.heading}
              price={item.price}
              status={item.status}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-5 sm:mt-6 2xl:mt-15">
          <div className="flex items-center gap-5 2xl:gap-8">
            <p className="font-bold text-text_color text-sm sm:text-base 2xl:text-lg">
              Monthly
            </p>
            <input
              type="checkbox"
              className="toggle bg-white hover:bg-slate-400 [--tglbg:#032859] scale-90 2xl:scale-125"
              defaultChecked
            />
            <p className="font-bold text-text_color text-sm sm:text-base 2xl:text-lg">
              Yearly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2SelectPlan;
