import { forwardRef } from "react";

import { cn } from "../../utils";

import { useFormControl } from "../FormControl/FormControl.context";

import type { LabelProps } from "./Label.types";

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, htmlFor, ...props }, ref) => {
    const formControl = useFormControl();

    return (
      <label
        ref={ref}
        htmlFor={htmlFor ?? formControl?.id}
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
