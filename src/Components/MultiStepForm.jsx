import React, { useState } from "react";
import Sidebar from "./Common/SideBar";
import FooterButtons from "./FooterButtons";
import Step1YourInfo from "./Step1YourInfo";
import StepForm from "./StepForm"
const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
  <Sidebar currentStep={step} />
  
  <div className="flex-1 flex flex-col p-4 md:p-6">
    <div className="flex-1 overflow-y-auto">
      <StepForm step={step} />
    </div>
    
    <FooterButtons step={step} nextStep={nextStep} prevStep={prevStep} />
  </div>
</div>


  );
};

export default MultiStepForm;
