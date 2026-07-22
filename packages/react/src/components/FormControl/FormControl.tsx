import { forwardRef, useId, useMemo } from "react";

import { cn } from "../../utils";

import { HelperText } from "../HelperText";
import { Label } from "../Label";

import { FormControlContext } from "./FormControl.context";

import type { FormControlProps } from "./FormControl.types";

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  (
    { id, className, children, label, helperText, error, required, ...props },
    ref,
  ) => {
    const generatedId = useId();

    const inputId = id ?? generatedId;

    const contextValue = useMemo(
      () => ({
        id: inputId,
        error,
        required,
      }),
      [inputId, error, required],
    );

    return (
      <FormControlContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn("flex flex-col gap-1.5", className)}
          {...props}
        >
          {label && (
            <Label>
              {label}
              {required && <span className="ml-1 text-red-500">*</span>}
            </Label>
          )}

          {children}

          {helperText && <HelperText error={error}>{helperText}</HelperText>}
        </div>
      </FormControlContext.Provider>
    );
  },
);

FormControl.displayName = "FormControl";
