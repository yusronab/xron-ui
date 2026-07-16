import { cva } from "class-variance-authority";

const base =
  "inline-flex items-center justify-center border transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

export const paginationItemVariants = cva(base, {
  variants: {
    size: {
      sm: "h-8 min-w-8 px-2 text-sm",
      md: "h-10 min-w-10 px-3 text-sm",
      lg: "h-12 min-w-12 px-4 text-base",
    },

    rounded: {
      true: "rounded-full",
      false: "rounded-md",
    },

    active: {
      true: "bg-gray-900 text-white border-gray-900",
      false: "bg-white text-gray-700 border-gray-300 hover:bg-gray-100",
    },
  },

  defaultVariants: {
    size: "md",
    rounded: false,
    active: false,
  },
});
