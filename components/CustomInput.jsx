"use client"
import React from 'react'
import { useField } from 'informed'


const CustomInput = ({ name, label, type='text', ...rest }) => {
    const {field, fieldState} = useField(name)
  return (
    <div className="mb-4">
        <label htmlFor={name} className='block mb-1 font-semibold text-gray-700'>
            {label}
        </label>
        <input
        id={name}
        type={type}
        {... field}
        {...rest}
        {...rest}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
          fieldState.touched && fieldState.error ? 'border-red-500' : 'border-gray-300'
        }`}
        />
        {fieldState.touched && fieldState.error && (
            <div className="mt-1 text-sm text-red-500" > {fieldState.error} </div>
        ) }
    </div>
  )
}

export default CustomInput
