import { forwardRef } from "react";

import { cn } from "../../utils";

import type { HelperTextProps } from "./HelperText.types";

export const HelperText = forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "text-sm",
          error ? "text-red-600" : "text-gray-500 dark:text-gray-400",
          className,
        )}
        {...props}
      />
    );
  },
);

HelperText.displayName = "HelperText";
