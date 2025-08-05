import React from "react";

const Step4Card = ({ summaryData, total }) => {
  return (
    <>
      {summaryData.map((item, index) => (
        <div
          key={index}
          className="bg-[#F8F9FE] w-full max-w-4xl 2xl:max-w-6xl mt-8 2xl:mt-10 p-4 sm:p-6 2xl:p-8 rounded-lg"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between flex-wrap">
              <section className="flex flex-col gap-1">
                <p className="font-medium text-base sm:text-lg 2xl:text-lg">
                  {item.title}
                </p>
                <p className="font-ubuntu underline text-[#4C3FF1] text-sm sm:text-base 2xl:text-lg">
                  {item.changeOption}
                </p>
              </section>
              <p className="font-medium text-base sm:text-lg 2xl:text-xl">
                +${item.basePrice}/mo
              </p>
            </div>

            <div className="divider mt-2 mb-2" />

            <div className="flex flex-col gap-2">
              {item.addOns.map((addon, i) => (
                <div className="flex justify-between" key={i}>
                  <p className="text-[#9397A2] text-sm sm:text-base 2xl:text-lg">
                    {addon.name}
                  </p>
                  <p className="font-medium text-sm sm:text-base 2xl:text-lg">
                    +${addon.price}/mo
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Total Row */}
      <div className="flex justify-between w-full max-w-4xl 2xl:max-w-6xl mx-auto p-4 sm:p-6 2xl:px-8 2xl:py-6">
        <p className="text-[#9397A2] text-sm sm:text-base 2xl:text-lg">
          Total (Per month)
        </p>
        <p className="font-bold text-[#4C3FF1] text-base sm:text-lg 2xl:text-xl">
          +${total}/mo
        </p>
      </div>
    </>
  );
};

export default Step4Card;
