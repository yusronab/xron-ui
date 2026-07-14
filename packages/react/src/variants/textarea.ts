import { cva } from "class-variance-authority";
import { inputBaseStyles, inputErrorStyles } from "./shared";

export const textareaVariants = cva([...inputBaseStyles, "resize-y"], {
  variants: {
    size: {
      sm: "min-h-20",
      md: "min-h-24",
      lg: "min-h-32",
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
});
