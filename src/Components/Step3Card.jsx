import React from "react";

const Step3Card = ({ heading, subHeading, amount }) => {
  return (
    <div className="w-full max-w-2xl h-auto rounded-md border border-gray-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4">
        <div className="flex gap-3 items-start sm:items-center">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary"
          />
          <div className="flex flex-col">
            <p className="text-base sm:text-lg font-bold">{heading}</p>
            <p className="text-sm text-[#9397A2]">{subHeading}</p>
          </div>
        </div>
        <div className="sm:ml-auto">
          <p className="text-[#4C3FF1] text-sm font-medium whitespace-nowrap">
            +${amount}/m0
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3Card;
