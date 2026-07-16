import { cva } from "class-variance-authority";

export const modalVariants = cva(
  [
    "relative",
    "w-[calc(100vw-2rem)]",
    "rounded-xl",
    "border",
    "border-gray-200",
    "bg-white",
    "shadow-xl",
    "dark:border-gray-800",
    "dark:bg-gray-900",
  ],
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        full: "w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] max-w-none",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);
