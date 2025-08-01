import React from "react";

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4 sm:shadow-none sm:rounded-none shadow-xl rounded-md">
      <div className="flex flex-col justify-center items-center text-center">
        <img src="/thankyou.svg" alt="Thank You" className="w-20 sm:w-28 mb-4" />
        <h1 className="text-3xl sm:text-5xl font-bold mb-3">Thank You</h1>
        <p className="text-[#9FA0A2] text-sm sm:text-base max-w-xl font-ubuntu">
          Thank you for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at <span className="text-[#4C3FF1]">support@loremipsumgaming.com</span>.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
