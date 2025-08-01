import React from "react";

const Step4Card = ({ summaryData, total }) => {
  return (
    <>
      {summaryData.map((item, index) => (
        <div
          key={index}
          className="bg-[#F8F9FE] w-full sm:max-w-5xl mt-8 sm:mt-12 p-4 sm:p-6 rounded-lg "
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between flex-wrap">
              <section className="flex flex-col gap-1">
                <p className="font-medium text-base sm:text-lg">{item.title}</p>
                <p className="font-ubuntu underline text-[#4C3FF1] text-sm sm:text-base">
                  {item.changeOption}
                </p>
              </section>
              <p className="font-medium text-base sm:text-lg">+${item.basePrice}/mo</p>
            </div>

            <div className="divider mt-2 mb-2" />

            <div className="flex flex-col gap-2">
              {item.addOns.map((addon, i) => (
                <div className="flex justify-between" key={i}>
                  <p className="text-[#9397A2] text-sm sm:text-base">{addon.name}</p>
                  <p className="font-medium text-sm sm:text-base">+${addon.price}/mo</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between w-full sm:max-w-5xl mx-auto p-4 sm:p-6">
        <p className="text-[#9397A2] text-sm sm:text-base">Total (Per month)</p>
        <p className="font-bold text-[#4C3FF1] text-base sm:text-lg">+${total}/mo</p>
      </div>
    </>
  );
};

export default Step4Card;
