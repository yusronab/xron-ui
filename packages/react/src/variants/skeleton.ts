import { cva } from "class-variance-authority";

export const skeletonVariants = cva(
  "relative overflow-hidden bg-gray-200 dark:bg-gray-700",
  {
    variants: {
      radius: {
        none: "",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },

      animation: {
        none: "",

        pulse: "animate-pulse",

        wave: "xron-skeleton-wave",
      },
    },

    defaultVariants: {
      radius: "md",
      animation: "pulse",
    },
  },
);
