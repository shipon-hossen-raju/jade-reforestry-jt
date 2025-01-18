"use client";

import React, { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
  containerClassName?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className,
  containerClassName,
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
      <textarea
        className={`p-2.5 border rounded-lg outline-none transition duration-200 ${
          error ? "border-red-500" : "border-gray-300"
        } text-sm w-full resize-none ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Textarea;
