// components/common/index.js
import React from "react";
import { Moon, Sun, Mail } from "lucide-react";

// Button Component
export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-green-500 to-purple-600 text-white hover:shadow-lg hover:scale-105 focus:ring-green-500",
    secondary:
      "border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-gray-500",
    ghost:
      "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
};
