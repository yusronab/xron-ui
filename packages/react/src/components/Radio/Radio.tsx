import { forwardRef } from "react";

import { cn } from "../../utils";

import type { RadioProps } from "./Radio.types";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
          type="radio"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          className="peer sr-only"
          {...props}
        />

        <span
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded-full border transition-all",

            checked ? "border-blue-500" : "border-gray-300",

            "peer-focus:ring-2 peer-focus:ring-blue-500",

            error && !checked && "border-red-500",

            "dark:border-gray-600",
          )}
        >
          <span
            className={cn(
              "h-2.5 w-2.5 rounded-full bg-blue-500 transition-all",
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

Radio.displayName = Radio.name;
