export const inputBaseStyles = [
  "w-full",
  "border",
  "bg-white",
  "text-gray-900",
  "outline-none",

  "transition-all",
  "duration-200",

  "placeholder:text-gray-400",

//   "hover:border-gray-400",

  "focus-within:border-blue-500",
  "focus-within:ring-4",
  "focus-within:ring-blue-500/10",

  "disabled:cursor-not-allowed",
  "disabled:opacity-50",

  "dark:bg-gray-900",
  "dark:text-gray-100",
  "dark:border-gray-700",
  "dark:placeholder:text-gray-500",
  "dark:hover:border-gray-500",
] as const;

export const inputErrorStyles = [
  "border-red-500",
  "focus-within:border-red-500",
  "focus-within:ring-red-500/10",
] as const;

export const inputSizeStyles = {
  sm: "h-8 px-3 text-sm",

  md: "h-10 px-3 text-sm",

  lg: "h-12 px-4 text-base",
} as const;

export const roundedStyles = {
  true: "rounded-full",

  false: "rounded-md",
} as const;
