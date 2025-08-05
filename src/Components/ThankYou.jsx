import React from "react";

const ThankYou = () => {
  return (
        <div className=" px-4 rounded-md sm:rounded-none py-4 sm:h-[100%] min-h-[60vh] shadow-md sm:shadow-none sm:py-0 sm:px-1 md:px-6 xl:px-6 2xl:px-10 sm:relative absolute sm:top-0 sm:left-0 sm:right-0 top-20 left-10 right-10 bg-white">

      <div className="flex flex-col justify-center items-center text-center">
        <img
          src="/thankyou.svg"
          alt="Thank You"
          className="w-20 sm:w-28 2xl:w-36 mb-4"
        />
        <h1 className="text-3xl sm:text-5xl 2xl:text-4xl 3xl:text-5xl font-bold mb-3">
          Thank You
        </h1>
        <p className="text-[#9FA0A2] text-sm sm:text-base 2xl:text-lg 3xl:text-xl max-w-3xl font-ubuntu">
          Thank you for confirming your subscription! We hope you have fun using our platform.
          If you ever need support, please feel free to email us at{" "}
          <span className="text-[#4C3FF1]">support@loremipsumgaming.com</span>.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
