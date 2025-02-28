"use client"
import React from 'react'
import { Form } from 'informed'
import CustomInput from '../../../components/CustomInput'

function Signup() {
  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <CustomInput name='email' label='Email' type='email' />
        <CustomInput name='username' label="Username" type='text' />
        <CustomInput name='password' label="Password" type='password' />
        <CustomInput name='confirmPassword' label='Confirm Password' type='password' />

        <button 
        type='submit'
        className='w-full mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300'
        >
          Sign Up
        </button>
      </Form>
    </div>
  )
}

export default Signup