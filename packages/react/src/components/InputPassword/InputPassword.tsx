import { forwardRef, useState } from "react";

import { EyeIcon, EyeOffIcon } from "../../icons";
import { cn } from "../../utils";
import { inputVariants } from "../../variants/input";

import type { InputPasswordProps } from "./InputPassword.types";

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, size, rounded, error, disabled, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type={visible ? "text" : "password"}
          disabled={disabled}
          className={cn(
            inputVariants({
              size,
              rounded,
              error,
            }),
            "pr-10",
            className,
          )}
          {...props}
        />

        <button
          type="button"
          disabled={disabled}
          onClick={() => setVisible((prev) => !prev)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer disabled:pointer-events-none"
          tabIndex={-1}
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
    );
  },
);

const COMPONENT_NAME = "InputPassword";

InputPassword.displayName = COMPONENT_NAME;
