import { cva } from "class-variance-authority";

export const tooltipVariants = cva(
  [
    "z-[9999]",
    "rounded-md",
    "bg-gray-900",
    "text-white",
    "shadow-lg",
    "pointer-events-none",
    "select-none",
    "transition-all",
    "duration-200",
  ],
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-base",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);
