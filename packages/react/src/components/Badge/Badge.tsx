import { forwardRef } from "react";

import { cn } from "../../utils";
import { badgeVariants } from "../../variants/badge";

import type { BadgeProps } from "./Badge.types";

const variantStyles = {
  primary: {
    solid: "bg-blue-500 text-white",
    outline: "border border-blue-500 text-blue-500 bg-transparent",
  },

  secondary: {
    solid: "bg-gray-500 text-white",
    outline: "border border-gray-500 text-gray-500 bg-transparent",
  },

  success: {
    solid: "bg-green-500 text-white",
    outline: "border border-green-500 text-green-500 bg-transparent",
  },

  danger: {
    solid: "bg-red-500 text-white",
    outline: "border border-red-500 text-red-500 bg-transparent",
  },

  warning: {
    solid: "bg-yellow-500 text-black",
    outline: "border border-yellow-500 text-yellow-500 bg-transparent",
  },

  info: {
    solid: "bg-sky-500 text-white",
    outline: "border border-sky-500 text-sky-500 bg-transparent",
  },

  ghost: {
    solid: "bg-transparent text-foreground",
    outline: "bg-transparent text-foreground",
  },
} as const;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, outline = false, ...props }, ref) => {
    const currentVariant = variant ?? "primary";

    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({
            variant,
            size,
          }),
          outline
            ? variantStyles[currentVariant].outline
            : variantStyles[currentVariant].solid,
          className,
        )}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";
