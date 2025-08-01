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

    if (!formData.email) {
      newErrors.email = "This field is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phoneNUmber) {
      newErrors.phoneNUmber = "This field is required";
    } else if (!/^\d{11}$/.test(formData.phoneNUmber)) {
      newErrors.phoneNUmber = "Phone number must be exactly 11 digits";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="flex justify-center items-start w-full">
      <div className="bg-white rounded-xl sm:shadow-none shadow-xl w-full max-w-4xl px-6 py-8 sm:px-0 sm:py-0 ">
        <SectionHeader
          heading="Personal info"
          subHeading="Please provide your name, email address, and phone number."
        />

        <form onSubmit={handleSubmit} className="mt-6 space-y-6 w-full">
          <div className="w-full">
            <div className="flex justify-between items-center mb-1">
              <label
                htmlFor="name"
                className="text-label_color font-ubuntu font-medium"
              >
                Name
              </label>
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <input
              type="text"
              name="name"
              placeholder="e.g. Stephen King"
              value={formData.name}
              onChange={handleChange}
              className={`input input-bordered w-full ${
                errors.name ? "input-error" : ""
              }`}
            />
          </div>

          <div className="w-full">
            <div className="flex justify-between items-center mb-1">
              <label
                htmlFor="email"
                className="text-label_color font-ubuntu font-medium"
              >
                Email Address
              </label>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <input
              type="email"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
              value={formData.email}
              onChange={handleChange}
              className={`input input-bordered w-full ${
                errors.email ? "input-error" : ""
              }`}
            />
          </div>

          <div className="w-full">
            <div className="flex justify-between items-center mb-1">
              <label
                htmlFor="phoneNUmber"
                className="text-label_color font-ubuntu font-medium"
              >
                Phone Number
              </label>
              {errors.phoneNUmber && (
                <p className="text-sm text-red-500">{errors.phoneNUmber}</p>
              )}
            </div>
            <input
              type="text"
              name="phoneNUmber"
              placeholder="e.g. +1 234 567 890"
              value={formData.phoneNUmber}
              onChange={handleChange}
              className={`input input-bordered w-full ${
                errors.phoneNUmber ? "input-error" : ""
              }`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1YourInfo;
