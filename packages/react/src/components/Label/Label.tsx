import { forwardRef } from "react";

import { cn } from "../../utils";

import type { LabelProps } from "./Label.types";

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, htmlFor, ...props }, ref) => {
    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        className={cn(
          "text-sm font-medium text-gray-900 dark:text-gray-100",
          className,
        )}
        {...props}
      />
    );
  },
);

Label.displayName = "Label";
