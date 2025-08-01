import React from "react";

const FooterButtons = ({ step, nextStep, prevStep }) => {
  if (step === 5) return null;

  return (
    <div className="w-full mt-4 flex justify-between items-center px-4 md:px-16 lg:px-32" data-theme="light">
      {step > 1 ? (
        <button onClick={prevStep} className="text-[#17498D]">
          Go Back
        </button>
      ) : (
        <span />
      )}

      <button
        onClick={nextStep}
        className={`rounded-md p-3 text-sm ${step === 4 ? "sm:bg-[#938CFE] bg-[#4C3FF1] text-white" : "sm:bg-button_color bg-[#132D51] text-white"}`}
      >
        {step === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};
;

export default FooterButtons;
