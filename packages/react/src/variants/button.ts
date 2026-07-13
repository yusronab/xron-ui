import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "font-medium",
    "transition-colors",
    "duration-200",
    "outline-none",
    "select-none",
    "cursor-pointer",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "dark:focus-visible:ring-offset-gray-900",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-blue-600",
          "text-white",
          "hover:bg-blue-700",
          "focus-visible:ring-blue-500",
        ],

        secondary: [
          "bg-slate-600",
          "text-white",
          "hover:bg-slate-700",
          "focus-visible:ring-slate-500",
        ],

        success: [
          "bg-green-600",
          "text-white",
          "hover:bg-green-700",
          "focus-visible:ring-green-500",
        ],

        warning: [
          "bg-yellow-500",
          "text-black",
          "hover:bg-yellow-600",
          "focus-visible:ring-yellow-500",
        ],

        error: [
          "bg-red-600",
          "text-white",
          "hover:bg-red-700",
          "focus-visible:ring-red-500",
        ],

        outline: [
          "border",
          "border-gray-300",
          "bg-white",
          "text-gray-900",
          "hover:bg-gray-100",

          "dark:border-gray-700",
          "dark:bg-gray-900",
          "dark:text-gray-100",
          "dark:hover:bg-gray-800",
        ],

        ghost: [
          "text-gray-900",
          "hover:bg-gray-100",

          "dark:text-gray-100",
          "dark:hover:bg-gray-800",
        ],
      },

      size: {
        sm: "h-8 px-3 text-sm",

        md: "h-10 px-4 text-sm",

        lg: "h-12 px-6 text-base",
      },

      rounded: {
        true: "rounded-full",

        false: "rounded-md",
      },

      fullWidth: {
        true: "w-full",

        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",

      size: "md",

      rounded: false,

      fullWidth: false,
    },
  },
);
