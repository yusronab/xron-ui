import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-full",
    "font-medium",
    "transition-colors",
    "select-none",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        success: "",
        danger: "",
        warning: "",
        info: "",
        ghost: "bg-transparent text-foreground",
      },

      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-base",
      },

      outline: {
        true: "border bg-transparent",
        false: "",
      },
    },

    compoundVariants: [
      // Primary
      {
        variant: "primary",
        outline: true,
        class: "border-blue-500 text-blue-500",
      },
      {
        variant: "primary",
        outline: false,
        class: "bg-blue-500 text-white",
      },

      // Secondary
      {
        variant: "secondary",
        outline: true,
        class: "border-gray-500 text-gray-500",
      },
      {
        variant: "secondary",
        outline: false,
        class: "bg-gray-500 text-white",
      },

      // Success
      {
        variant: "success",
        outline: true,
        class: "border-green-500 text-green-500",
      },
      {
        variant: "success",
        outline: false,
        class: "bg-green-500 text-white",
      },

      // Danger
      {
        variant: "danger",
        outline: true,
        class: "border-red-500 text-red-500",
      },
      {
        variant: "danger",
        outline: false,
        class: "bg-red-500 text-white",
      },

      // Warning
      {
        variant: "warning",
        outline: true,
        class: "border-yellow-500 text-yellow-500",
      },
      {
        variant: "warning",
        outline: false,
        class: "bg-yellow-500 text-black",
      },

      // Info
      {
        variant: "info",
        outline: true,
        class: "border-sky-500 text-sky-500",
      },
      {
        variant: "info",
        outline: false,
        class: "bg-sky-500 text-white",
      },
    ],

    defaultVariants: {
      variant: "primary",
      size: "md",
      outline: false,
    },
  },
);
