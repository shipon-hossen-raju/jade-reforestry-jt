"use client";

import { ChangeEventHandler } from "@/types/global";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label?: string;
  error?: string;
  className?: string;
  containerClassName?: string;
  onChange: ChangeEventHandler;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  error,
  className,
  containerClassName,
  onChange,
  ...props
}) => {
  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={props.id}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        className={`p-2.5 border rounded-lg outline-none transition duration-200 ${
          error ? "border-red-500" : "border-gray-300"
        } text-sm w-full ${className}`}
        type={type}
        onChange={onChange}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;

// export type TInput = {
//   type?: string;
//   name: string;
//   label?: string;
//   onChange: React.ChangeEventHandler<HTMLInputElement>;
// };

// export default function Input({
//   type = "text",
//   name,
//   onChange,
//   label,
// }: TInput) {
//   return (
//     <div>
//       {label && <label htmlFor={name}> {label} </label>}
//       <input type={type} id={name} onChange={onChange} />
//     </div>
//   );
// }
