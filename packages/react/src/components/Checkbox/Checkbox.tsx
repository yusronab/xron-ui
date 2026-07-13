import { forwardRef } from "react";

import { CheckIcon } from "../../icons";
import { cn } from "../../utils";

import type { CheckboxProps } from "./Checkbox.types";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, label, checked, disabled, error, onCheckedChange, ...props },
    ref,
  ) => {
    return (
      <label
        className={cn(
          "inline-flex cursor-pointer items-center gap-3",
          disabled && "cursor-not-allowed opacity-60",
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          className="peer sr-only"
          {...props}
        />

        <span
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded border transition-all",

            checked
              ? "border-blue-500 bg-blue-500 text-white"
              : "border-gray-300 bg-white",

            "peer-focus:ring-2 peer-focus:ring-blue-500",

            error && !checked && "border-red-500",

            "dark:border-gray-600",
            "dark:bg-gray-900",
          )}
        >
          <CheckIcon
            className={cn(
              "transition-all",
              checked ? "scale-100 opacity-100" : "scale-0 opacity-0",
            )}
          />
        </span>

        {label && (
          <span className="text-sm text-gray-900 dark:text-gray-100">
            {label}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = Checkbox.name;
