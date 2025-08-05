import React from "react";

const FooterButtons = ({ step, nextStep, prevStep }) => {
  if (step === 5) return null;

  return (
    <div className="w-full flex justify-between items-center pt-6 px-4 md:px-8 lg:px-32">
      {step > 1 ? (
        <button onClick={prevStep} className="text-[#17498D] font-medium">
          Go Back
        </button>
      ) : (
        <span />
      )}

      <button
        onClick={nextStep}
        className={`rounded-md px-6 py-2 text-sm font-medium ${
          step === 4
            ? "bg-[#4C3FF1] text-white"
            : "bg-[#132D51] text-white"
        }`}
      >
        {step === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default FooterButtons;
