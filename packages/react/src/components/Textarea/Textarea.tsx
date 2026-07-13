import { forwardRef } from "react";

import { cn } from "../../utils";
import { textareaVariants } from "../../variants/textarea";

import type { TextareaProps } from "./Textarea.types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
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
