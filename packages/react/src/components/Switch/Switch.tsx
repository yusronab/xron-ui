import { forwardRef } from "react";

import { cn } from "../../utils";

import type { SwitchProps } from "./Switch.types";

const sizes = {
  sm: {
    track: "h-5 w-9",
    thumb: "h-4 w-4",
    translate: "translate-x-4",
  },

  md: {
    track: "h-6 w-11",
    thumb: "h-5 w-5",
    translate: "translate-x-5",
  },

  lg: {
    track: "h-7 w-14",
    thumb: "h-6 w-6",
    translate: "translate-x-7",
  },
} as const;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      checked,
      disabled,
      error,
      label,
      size = "md",
      onCheckedChange,
      ...props
    },
    ref,
  ) => {
    const current = sizes[size];

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
            "relative rounded-full transition-colors",

            current.track,

            checked ? "bg-blue-500" : "bg-gray-300",

            error && !checked && "bg-red-500",

            "peer-focus:ring-2 peer-focus:ring-blue-500",
          )}
        >
          <span
            className={cn(
              "absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full bg-white transition-transform",

              current.thumb,

              checked ? current.translate : "translate-x-0",
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

Switch.displayName = Switch.name;
