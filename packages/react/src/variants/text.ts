import { cva } from "class-variance-authority";

export const textVariants = cva("text-gray-900 dark:text-gray-100", {
  variants: {
    as: {
      h1: "text-5xl font-bold",
      h2: "text-4xl font-bold",
      h3: "text-3xl font-semibold",
      h4: "text-2xl font-semibold",
      h5: "text-xl font-medium",
      h6: "text-lg font-medium",
      p: "text-base",
      span: "text-base",
      div: "text-base",
      small: "text-sm",
    },

    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },

    truncate: {
      true: "truncate",
      false: "",
    },

    italic: {
      true: "italic",
      false: "",
    },

    underline: {
      true: "underline",
      false: "",
    },
  },

  defaultVariants: {
    as: "p",
    align: "left",
    truncate: false,
    italic: false,
    underline: false,
  },
});
