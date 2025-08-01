import React from "react";
import Step1YourInfo from "./Step1YourInfo";
import Step2SelectPlan from "./Step2SelectPlan";
import Step3AddOns from "./Step3AddOns";
import Step4Summary from "./Step4Summary";
import ThankYou from "./ThankYou";

const StepForm = ({ step }) => {
  switch (step) {
    case 1:
      return <Step1YourInfo />;
    case 2:
      return <Step2SelectPlan />;
    case 3:
      return <Step3AddOns />;
    case 4:
      return <Step4Summary />;
    case 5: 
      return <ThankYou />;
    default:
      return null;
  }
};

export default StepForm;
