import React, { useState } from "react";
import Sidebar from "./Common/SideBar";
import FooterButtons from "./FooterButtons";
import StepForm from "./StepForm";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#EFF5FF] font-ubuntu">
      <Sidebar currentStep={step} />

      <div className="flex-1 flex flex-col justify-between p-6">
        <div className="flex-1 max-w-3xl 2xl:max-w-5xl mx-auto w-full bg-white rounded-xl p-8 shadow-lg xl:mt-3 2xl:mt-16">
          <StepForm step={step} />
        </div>

        <FooterButtons step={step} nextStep={nextStep} prevStep={prevStep} />
      </div>
    </div>
  );
};

export default MultiStepForm;
