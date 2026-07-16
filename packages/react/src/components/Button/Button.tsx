import { forwardRef } from "react";

import { cn } from "../../utils";
import { buttonVariants } from "../../variants/button";

import type { ButtonProps } from "./Button.types";
import { Spinner } from "../Spinner";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      appearance,
      size,
      rounded,
      fullWidth,
      loading = false,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          buttonVariants({
            variant,
            appearance,
            size,
            rounded,
            fullWidth,
          }),
          className,
        )}
        {...props}
      >
        {loading && <Spinner size={size} />}

        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
