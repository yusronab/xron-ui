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
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        error: "",
      },

      appearance: {
        solid: "",

        outline: ["border", "bg-white", "dark:bg-gray-900"],

        ghost: "",
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

    compoundVariants: [
      // PRIMARY
      {
        variant: "primary",
        appearance: "solid",
        class:
          "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
      },
      {
        variant: "primary",
        appearance: "outline",
        class:
          "border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/40",
      },
      {
        variant: "primary",
        appearance: "ghost",
        class:
          "text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500 dark:text-blue-400 dark:hover:bg-blue-950/40",
      },

      // SECONDARY
      {
        variant: "secondary",
        appearance: "solid",
        class:
          "bg-slate-600 text-white hover:bg-slate-700 focus-visible:ring-slate-500",
      },
      {
        variant: "secondary",
        appearance: "outline",
        class:
          "border-slate-600 text-slate-600 hover:bg-slate-50 focus-visible:ring-slate-500 dark:border-slate-400 dark:text-slate-400 dark:hover:bg-slate-900/40",
      },
      {
        variant: "secondary",
        appearance: "ghost",
        class:
          "text-slate-600 hover:bg-slate-50 focus-visible:ring-slate-500 dark:text-slate-400 dark:hover:bg-slate-900/40",
      },

      // SUCCESS
      {
        variant: "success",
        appearance: "solid",
        class:
          "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500",
      },
      {
        variant: "success",
        appearance: "outline",
        class:
          "border-green-600 text-green-600 hover:bg-green-50 focus-visible:ring-green-500 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950/40",
      },
      {
        variant: "success",
        appearance: "ghost",
        class:
          "text-green-600 hover:bg-green-50 focus-visible:ring-green-500 dark:text-green-400 dark:hover:bg-green-950/40",
      },

      // WARNING
      {
        variant: "warning",
        appearance: "solid",
        class:
          "bg-yellow-500 text-black hover:bg-yellow-600 focus-visible:ring-yellow-500",
      },
      {
        variant: "warning",
        appearance: "outline",
        class:
          "border-yellow-500 text-yellow-600 hover:bg-yellow-50 focus-visible:ring-yellow-500 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-950/40",
      },
      {
        variant: "warning",
        appearance: "ghost",
        class:
          "text-yellow-600 hover:bg-yellow-50 focus-visible:ring-yellow-500 dark:text-yellow-400 dark:hover:bg-yellow-950/40",
      },

      // ERROR
      {
        variant: "error",
        appearance: "solid",
        class:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
      },
      {
        variant: "error",
        appearance: "outline",
        class:
          "border-red-600 text-red-600 hover:bg-red-50 focus-visible:ring-red-500 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950/40",
      },
      {
        variant: "error",
        appearance: "ghost",
        class:
          "text-red-600 hover:bg-red-50 focus-visible:ring-red-500 dark:text-red-400 dark:hover:bg-red-950/40",
      },
    ],

    defaultVariants: {
      variant: "primary",
      appearance: "solid",
      size: "md",
      rounded: false,
      fullWidth: false,
    },
  },
);
