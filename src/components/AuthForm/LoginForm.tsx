// import {useState} from 'react';

const inputForm = ({ id, type, label, placeholder, value, status, errorText } : { id: string, type: string, label: string, placeholder: string, value: (string | React.Dispatch<React.SetStateAction<string>>)[], status: boolean, errorText: string}) => {
  return <div className= "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} placeholder={placeholder} value={value[0] as string} onChange={e => {
          (value[1] as React.Dispatch<React.SetStateAction<string>>)(e.currentTarget.value)
      }}/>
      {!status && <p className= "" >{errorText}</p>}
  </div>
};

export default inputForm;