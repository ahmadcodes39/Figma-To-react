import React from "react";

const Step3Card = ({ heading, subHeading, amount }) => {
  return (
    <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-[1600px] h-auto rounded-md border border-gray-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 2xl:p-8 gap-4 2xl:gap-6">
        <div className="flex gap-3 2xl:gap-6 items-start sm:items-center w-full">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary w-5 h-5 2xl:w-6 2xl:h-6"
          />
          <div className="flex flex-col">
            <p className=" text-sm sm:text-lg 2xl:text-xl font-bold">
              {heading}
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg text-[#9397A2]">
              {subHeading}
            </p>
          </div>

          {/* Price shown only on small screens (hidden on sm and up) */}
          <div className="ml-auto sm:hidden">
            <p className="text-[#4C3FF1] text-sm sm:text-base 2xl:text-lg font-medium whitespace-nowrap">
              +${amount}/mo
            </p>
          </div>
        </div>

        {/* Price shown on sm and up (hidden on mobile) */}
        <div className="ml-auto hidden sm:block">
          <p className="text-[#4C3FF1] text-sm sm:text-base 2xl:text-lg font-medium whitespace-nowrap">
            +${amount}/mo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3Card;
