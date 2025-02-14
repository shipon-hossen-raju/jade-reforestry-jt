import { arrowRightIcon } from "@/asserts/icons/icons";
import React from "react";

type ButtonProps = {
  children: React.ReactNode; // Text or elements inside the button
  onClick?: () => void; // Optional click handler
  type?: "button" | "submit" | "reset"; // Button type
  variant?: "primary" | "secondary" | "outline"; // Button styles
  disabled?: boolean; // Disabled state
  className?: string; // Additional custom classes
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const baseStyle = `inline-flex items-center justify-center rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all`;

  const variants = {
    primary: `bg-primary text-white hover:bg-primary/50`,
    secondary: `bg-btnBg text-btnText hover:bg-btnBg/50`,
    outline: `border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400`,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`divide-x ${baseStyle} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      <span className="px-[28px] py-[18px]"> {children} </span>
      <span className="px-[28px] py-6">
        {/* <CustomImage src={arrowIcon} /> */}
        <span>{arrowRightIcon}</span>
      </span>
    </button>
  );
};

export default Button;
