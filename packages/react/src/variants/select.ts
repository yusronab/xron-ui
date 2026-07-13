import { cva } from "class-variance-authority";

export const selectVariants = cva(
  [
    "flex",
    "w-full",
    "items-center",
    "justify-between",
    "transition-colors",
    "outline-none",

    "border",
    "bg-white",
    "text-gray-900",

    "dark:bg-gray-900",
    "dark:text-gray-100",
    "dark:border-gray-700",

    "disabled:cursor-not-allowed",
    "disabled:opacity-50",

    "focus:ring-2",
    "focus:ring-blue-500",
    "focus:border-blue-500",
  ],
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
      },

      rounded: {
        true: "rounded-full",
        false: "rounded-md",
      },

      error: {
        true: ["border-red-500", "focus:ring-red-500", "focus:border-red-500"],
        false: "border-gray-300",
      },
    },

    defaultVariants: {
      size: "md",
      rounded: false,
      error: false,
    },
  },
);
