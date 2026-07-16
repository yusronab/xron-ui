import { forwardRef, useEffect, useRef } from "react";

import { CheckIcon, MinusIcon } from "../../icons";
import { cn } from "../../utils";

import type { CheckboxProps } from "./Checkbox.types";
import type { ForwardedRef } from "react";

function CheckboxComponent(
  {
    className,
    label,
    checked = false,
    indeterminate = false,
    disabled,
    error,
    onCheckedChange,
    ...props
  }: Readonly<CheckboxProps>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useRef<HTMLInputElement>(null);

  const selected = checked || indeterminate;

  function setRefs(node: HTMLInputElement | null) {
    inputRef.current = node;

    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  }

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <label
      className={cn(
        "inline-flex items-center gap-3",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        className,
      )}
    >
      <input
        ref={setRefs}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onCheckedChange?.(event.target.checked)}
        className="peer sr-only"
        {...props}
      />

      <span
        className={cn(
          "flex h-5 w-5 items-center justify-center",
          "border transition-all",

          selected
            ? "border-blue-500 bg-blue-500 text-white"
            : "border-gray-300 bg-white",

          "peer-focus:ring-2",
          "peer-focus:ring-blue-500/30",

          error && !selected && "border-red-500",

          "dark:border-gray-600",
          "dark:bg-gray-900",

          "rounded",
        )}
      >
        {indeterminate ? (
          <MinusIcon className="h-3.5 w-3.5" />
        ) : (
          <CheckIcon
            className={cn(
              "transition-all",
              checked ? "scale-100 opacity-100" : "scale-0 opacity-0",
            )}
          />
        )}
      </span>

      {label && (
        <span className="text-sm text-gray-900 dark:text-gray-100">
          {label}
        </span>
      )}
    </label>
  );
}

CheckboxComponent.displayName = "Checkbox";

export const Checkbox = forwardRef(CheckboxComponent);
