import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center overflow-hidden",
    "bg-gray-100 text-gray-600",
    "dark:bg-gray-800 dark:text-gray-300",
    "select-none",
  ],
  {
    variants: {
      size: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
        xl: "",
      },

      rounded: {
        true: "rounded-full",
        false: "rounded-md",
      },
    },

    compoundVariants: [
      {
        size: "xs",
        class: "h-6 w-6 text-xs",
      },
      {
        size: "sm",
        class: "h-8 w-8 text-sm",
      },
      {
        size: "md",
        class: "h-10 w-10 text-base",
      },
      {
        size: "lg",
        class: "h-12 w-12 text-lg",
      },
      {
        size: "xl",
        class: "h-16 w-16 text-xl",
      },
    ],

    defaultVariants: {
      size: "md",
      rounded: false,
    },
  },
);
