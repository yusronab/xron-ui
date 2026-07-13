import { forwardRef } from "react";

import { cn } from "../../utils";
import { inputVariants } from "../../variants/input";

import type { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, rounded, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          inputVariants({
            size,
            rounded,
            error,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
