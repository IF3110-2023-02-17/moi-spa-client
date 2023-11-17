import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorText?: string;
}

const InputForm = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorText, ...props }, ref) => {
    const inputClasses = `
      appearance-none relative block w-full px-3 py-2 border border-gray-300
      placeholder-gray-500 text-gray-900 rounded-md focus:outline-none
      focus:ring-primary focus:border-primary focus:z-10 sm:text-sm
    `;

    return (
      <div className="">
        <label htmlFor={props.id}>{label}</label>
        <input ref={ref} className={inputClasses} {...props} />
        {errorText && <p className="italic text-sm text-red-500">{errorText}</p>}
      </div>
    );
  }
);

export default InputForm;
