"use client";
import React from "react";
import { Form, useFormApi } from "informed";
import CustomInput from "../../../components/CustomInput";
import {
  validateEmail,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
} from "../../../util";
import Link from "next/link";
const ConfirmPasswordInput = ({
  name,
  label,
  type = "password",
  matchField,
  ...rest
}) => {
  const formApi = useFormApi();
  const validateConfirm = (value) => {
    const password = formApi.getValue(matchField);
    return validateConfirmPassword(value, password);
  };

  return (
    <CustomInput
      name={name}
      label={label}
      type={type}
      validate={validateConfirm}
      {...rest}
    />
  );
};

function Signup() {
  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
  };
  
  return (
    <div className="max-w-md mx-auto mt-10 p-6  shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <CustomInput
          name="email"
          label="Email"
          type="email"
          required
          validate={validateEmail}
        />

        <CustomInput
          name="username"
          label="Username"
          type="text"
          required
          validate={validateUsername}
        />

        <CustomInput
          name="password"
          label="Password"
          type="password"
          required
          validate={validatePassword}
        />

        <ConfirmPasswordInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          matchField="password"
        />
        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Sign Up
        </button>


        <div className="flex p-2">
        <p>Already Logged In?</p>
        <span>
        <Link
          className="text-blue-600 ml-3"
          href='/login'
        >
          click here
        </Link>
        </span>
        </div>
      </Form>
    </div>
  );
}

export default Signup;
