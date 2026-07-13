import { forwardRef } from "react";

import { cn } from "../../utils";

import type { FormControlProps } from "./FormControl.types";

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1.5", className)}
        {...props}
      />
    );
  },
);

FormControl.displayName = "FormControl";
