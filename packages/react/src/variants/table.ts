import { cva } from "class-variance-authority";

export const tableVariants = cva([
  "min-w-full",
  "border-collapse",
  "text-sm",
  "text-left",

  "text-gray-900",
  "dark:text-gray-100",
]);

export const tableHeaderVariants = cva([
  "text-gray-800",
  "border-b",
  "border-gray-400",

  "dark:text-gray-200",
  "dark:border-gray-700",
]);

export const tableHeadVariants = cva([
  "px-4",
  "py-3",
  "font-semibold",
  "whitespace-nowrap",
]);

export const tableRowVariants = cva(
  [
    "transition-colors",
    "text-gray-900",

    "hover:bg-gray-300",

    "dark:hover:bg-gray-800",
    "dark:text-gray-100",
  ],
  {
    variants: {
      striped: {
        true: ["odd:bg-gray-200", "dark:odd:bg-gray-900/40"],

        false: "",
      },
    },

    defaultVariants: {
      striped: true,
    },
  },
);

export const tableCellVariants = cva(["px-4", "py-3", "align-middle"]);
