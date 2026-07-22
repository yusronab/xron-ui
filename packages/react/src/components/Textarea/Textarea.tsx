import { forwardRef } from "react";

import { cn } from "../../utils";
import { textareaVariants } from "../../variants/textarea";

import type { TextareaProps } from "./Textarea.types";
import { useFormControl } from "../FormControl/FormControl.context";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, error, ...props }, ref) => {
    const formControl = useFormControl();

    return (
      <textarea
        ref={ref}
        id={props.id ?? formControl?.id}
        className={cn(
          textareaVariants({
            size,
            error,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
