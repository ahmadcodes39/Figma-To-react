import React from "react";

const steps = [
  { number: 1, label: "YOUR INFO" },
  { number: 2, label: "SELECT PLAN" },
  { number: 3, label: "ADD-ONS" },
  { number: 4, label: "SUMMARY" },
];

const Sidebar = ({ currentStep = 2 }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col justify-between sticky top-0 md:w-52 lg:w-64 xl:w-72 2xl:w-80 h-screen text-white bg-[#483EFF] relative transition-all duration-300">
        <img
          src="Mask group.png"
          alt="Decorative Graphic"
          className="absolute bottom-0 left-0 w-full object-cover pointer-events-none z-0"
        />
        <div className="relative z-10 p-6 2xl:p-10 space-y-6 2xl:space-y-8 mt-10 2xl:mt-14">
          {steps.map((step) => (
            <div key={step.number} className="flex items-center space-x-4 2xl:space-x-6">
              <div
                className={`w-8 h-8 2xl:w-10 2xl:h-10 flex items-center justify-center rounded-full border-2 font-bold text-sm 2xl:text-lg
                  ${
                    currentStep === step.number
                      ? "bg-[#BEE2FD] text-black border-[#BEE2FD]"
                      : "border-white text-white"
                  }
                `}
              >
                {step.number}
              </div>
              <div>
                <p className="text-xs 2xl:text-sm uppercase text-gray-300 tracking-widest">
                  Step {step.number}
                </p>
                <p className="font-bold uppercase tracking-wide text-white text-sm 2xl:text-xl">
                  {step.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className="md:hidden relative flex justify-center gap-4 pt-2 pb-12"
        style={{
          backgroundImage: "url('/mobilePic.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {steps.map((step) => (
          <div
            key={step.number}
            className={`mt-7 w-8 h-8 flex items-center justify-center rounded-full border-2 font-bold ${
              currentStep === step.number
                ? "bg-[#BEE2FD] text-black border-[#BEE2FD]"
                : "border-white text-white"
            }`}
          >
            {step.number}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
