import { forwardRef } from "react";

import { cn } from "../../utils";
import { inputVariants } from "../../variants/input";

import type { InputProps } from "./Input.types";
import { useFormControl } from "../FormControl/FormControl.context";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, rounded, error, ...props }, ref) => {
    const formControl = useFormControl();

    return (
      <input
        ref={ref}
        id={props.id ?? formControl?.id}
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
