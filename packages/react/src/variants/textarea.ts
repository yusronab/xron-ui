import { cva } from "class-variance-authority";

export const textareaVariants = cva(
  [
    "flex",
    "w-full",
    "rounded-md",
    "border",
    "border-gray-300",
    "bg-white",
    "px-3",
    "py-2",
    "text-sm",
    "text-gray-900",
    "transition-colors",
    "outline-none",
    "placeholder:text-gray-400",
    "focus:border-blue-500",
    "focus:ring-2",
    "focus:ring-blue-500",
    "disabled:cursor-not-allowed",
    "disabled:bg-gray-100",
    "disabled:text-gray-500",
    "disabled:opacity-50",
    "resize-y",
  ],
  {
    variants: {
      size: {
        sm: "min-h-20",
        md: "min-h-24",
        lg: "min-h-32",
      },

      error: {
        true: ["border-red-500", "focus:border-red-500", "focus:ring-red-500"],
        false: "",
      },
    },

    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);
