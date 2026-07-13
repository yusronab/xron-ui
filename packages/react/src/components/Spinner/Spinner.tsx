import { forwardRef } from "react";

import { cn } from "../../utils";
import { spinnerVariants } from "../../variants/spinner";

import type { SpinnerProps } from "./Spinner.types";

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          spinnerVariants({
            size,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Spinner.displayName = "Spinner";
