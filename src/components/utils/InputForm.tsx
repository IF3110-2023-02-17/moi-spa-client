// import {useState} from 'react';

import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
  label: string;
}

const InputForm = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorText, ...props }, ref) => {
    return (
      <div className="">
        <label htmlFor={props.id}>{label}</label>
        <input
          ref={ref}
          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
          {...props}
        />
        {errorText && (
          <p className="italic text-sm text-red-500">{errorText}</p>
        )}
      </div>
    );
  },
);

export default InputForm;
