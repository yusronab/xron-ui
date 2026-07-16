import { cva } from "class-variance-authority";

export const tableVariants = cva([
  "min-w-full",
  "border-collapse",
  "text-sm",
  "text-left",

  "text-gray-900",
  "text-gray-100",
]);

export const tableHeaderVariants = cva(["text-gray-900"]);

export const tableHeadVariants = cva([
  "px-4",
  "py-3",
  "font-semibold",
  "whitespace-nowrap",
]);

export const tableRowVariants = cva(
  ["transition-colors", "text-gray-900", "hover:bg-gray-300"],
  {
    variants: {
      striped: {
        true: "odd:bg-gray-200",

        false: "",
      },
    },

    defaultVariants: {
      striped: true,
    },
  },
);

export const tableCellVariants = cva(["px-4", "py-3", "align-middle"]);
