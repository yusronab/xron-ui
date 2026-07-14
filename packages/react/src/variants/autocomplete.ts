import { cva } from "class-variance-authority";
import {
  inputBaseStyles,
  inputErrorStyles,
  inputSizeStyles,
  roundedStyles,
} from "./shared";

export const autocompleteVariants = cva(inputBaseStyles, {
  variants: {
    size: inputSizeStyles,

    rounded: roundedStyles,

    error: {
      true: inputErrorStyles,

      false: "border-gray-300",
    },
  },

  defaultVariants: {
    size: "md",
    rounded: false,
    error: false,
  },
});
