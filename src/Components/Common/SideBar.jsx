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
     <div className="hidden md:flex sticky top-0 md:w-52 lg:w-64 h-screen overflow-hidden text-white bg-[#483EFF]">

        <img
          src="Mask group.png"
          alt="Decorative Graphic"
          className="absolute bottom-0 left-0 w-full object-cover pointer-events-none z-0"
        />
        <div className="relative z-10 p-6 space-y-6 mt-10">
          {steps.map((step) => (
            <div key={step.number} className="flex items-center space-x-4">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 font-bold
                  ${
                    currentStep === step.number
                      ? "bg-[#BEE2FD] text-black border-[#BEE2FD]"
                      : "border-white"
                  }
                `}
              >
                {step.number}
              </div>
              <div>
                <p className="text-xs uppercase text-gray-300">
                  Step {step.number}
                </p>
                <p className="font-bold">{step.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile  design */}
      <div className="md:hidden relative flex justify-center gap-4 pt-2 pb-12 "
        style={{
          backgroundImage: "url('/mobilePic.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {steps.map((step) => (
          <div
            key={step.number}
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 font-bold
        ${
          currentStep === step.number
            ? "bg-[#BEE2FD] text-black border-[#BEE2FD]"
            : "border-white text-white"
        }
      `}
          >
            {step.number}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
