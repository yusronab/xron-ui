import { cva } from "class-variance-authority";
import { inputBaseStyles, inputErrorStyles } from "./shared";

export const textareaVariants = cva(
  [...inputBaseStyles, "resize-y", "rounded-md"],
  {
    variants: {
      size: {
        sm: "min-h-20 px-3 py-2 text-sm",
        md: "min-h-24 px-3 py-2 text-sm",
        lg: "min-h-32 px-4 py-2 text-base",
      },

      error: {
        true: inputErrorStyles,
        false: "",
      },
    },

    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);
