import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

const Step1YourInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNUmber: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const newErrors = { ...errors };

    if (name === "name") {
      if (!value) newErrors.name = "This field is required";
      else if (value.length < 3)
        newErrors.name = "Name must be at least 3 characters";
      else delete newErrors.name;
    }

    if (name === "email") {
      if (!value) newErrors.email = "This field is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        newErrors.email = "Invalid email format";
      else delete newErrors.email;
    }

    if (name === "phoneNUmber") {
      if (!value) newErrors.phoneNUmber = "This field is required";
      else if (!/^\d{11}$/.test(value))
        newErrors.phoneNUmber = "Phone number must be exactly 11 digits";
      else delete newErrors.phoneNUmber;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = "This field is required";
    else if (formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";

    if (!formData.email)
      newErrors.email = "This field is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phoneNUmber)
      newErrors.phoneNUmber = "This field is required";
    else if (!/^\d{11}$/.test(formData.phoneNUmber))
      newErrors.phoneNUmber = "Phone number must be exactly 11 digits";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className=" px-4 rounded-md sm:rounded-none py-4 sm:h-[100%] min-h-[60vh] shadow-md sm:shadow-none sm:py-0 sm:px-1 md:px-6 xl:px-6 2xl:px-10 sm:relative absolute sm:top-0 sm:left-0 sm:right-0 top-20 left-10 right-10 bg-white">
      <SectionHeader
        heading="Personal Info"
        subHeading="Please provide your name, email address, and phone number."
      />

      <form onSubmit={handleSubmit} className="mt-6 space-y-6 w-full">
        {/* Name */}
        <div>
          <div className="flex justify-between items-center">
            <label className="block text-sm md:text-base xl:text-lg font-medium text-[#02295A] mb-1">
              Name
            </label>
            {errors.name && (
              <p className="text-sm md:text-base text-red-500">
                {errors.name}
              </p>
            )}
          </div>
          <input
            type="text"
            name="name"
            placeholder="e.g. Stephen King"
            value={formData.name}
            onChange={handleChange}
            className={`input input-bordered w-full text-sm md:text-base xl:text-lg ${
              errors.name ? "input-error" : ""
            }`}
          />
        </div>

        {/* Email */}
        <div>
          <div className="flex justify-between items-center">
            <label className="block text-sm md:text-base xl:text-lg font-medium text-[#02295A] mb-1">
              Email Address
            </label>
            {errors.email && (
              <p className="text-sm md:text-base text-red-500">
                {errors.email}
              </p>
            )}
          </div>
          <input
            type="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formData.email}
            onChange={handleChange}
            className={`input input-bordered w-full text-sm md:text-base xl:text-lg ${
              errors.email ? "input-error" : ""
            }`}
          />
        </div>

        {/* Phone */}
        <div>
          <div className="flex justify-between items-center">
            <label className="block text-sm md:text-base xl:text-lg font-medium text-[#02295A] mb-1">
              Phone Number
            </label>
            {errors.phoneNUmber && (
              <p className="text-sm md:text-base text-red-500">
                {errors.phoneNUmber}
              </p>
            )}
          </div>
          <input
            type="text"
            name="phoneNUmber"
            placeholder="e.g. +1 234 567 890"
            value={formData.phoneNUmber}
            onChange={handleChange}
            className={`input input-bordered w-full text-sm md:text-base xl:text-lg ${
              errors.phoneNUmber ? "input-error" : ""
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default Step1YourInfo;
