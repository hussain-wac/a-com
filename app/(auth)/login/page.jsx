"use client";
import React from "react";
import Link from "next/link";
import { Form, useFormApi } from "informed";
import CustomInput from "../../../components/CustomInput";
import {
  validateUsername,
  validatePassword,
} from "../../../util";
 
function Login() {
  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6  shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <Form onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Login in
        </button>
        <div className="flex p-2">
        <p>Dont have an account yet ?</p>
        <span>
        <Link
          className="text-blue-600 ml-3"
          href='/signup'
        >
          click here
        </Link>
        </span>
        </div>
      </Form>
    </div>
  );
}

export default Login;