import { cva } from "class-variance-authority";

import { roundedStyles } from "./shared";

const baseStyles =
  "border border-gray-300 bg-white text-gray-700 transition-colors duration-200 focus:border-gray-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50";

const sizeStyles = {
  sm: "h-8 px-2 text-sm",
  md: "h-10 px-3 text-sm",
  lg: "h-12 px-4 text-base",
};

export const pageSizeVariants = cva(baseStyles, {
  variants: {
    size: sizeStyles,

    rounded: roundedStyles,
  },

  defaultVariants: {
    size: "md",
    rounded: false,
  },
});
