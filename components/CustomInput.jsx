"use client";
import React from "react";
import { useField } from "informed";

const CustomInput = ({ label, name, type = "text", backendError, validate, ...rest }) => {
  // Pass name and validate to the useField hook
  const { fieldState, fieldApi } = useField({ name, validate });
  const { error, touched, value } = fieldState;
  const displayError = touched && (error || backendError);

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={name}
        value={value || ""}
        onChange={(e) => fieldApi.setValue(e.target.value)}
        onBlur={() => fieldApi.setTouched(true)}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
          displayError ? "border-red-500" : "border-gray-300"
        }`}
        {...rest}
      />
      {displayError && (
        <div className="mt-1 text-sm text-red-500">{error || backendError}</div>
      )}
    </div>
  );
};

export default CustomInput;
