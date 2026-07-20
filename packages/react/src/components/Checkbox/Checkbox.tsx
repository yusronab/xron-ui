import { forwardRef, useEffect, useRef } from "react";

import { cn } from "../../utils";

import type { CheckboxProps } from "./Checkbox.types";
import type { ForwardedRef } from "react";
import { CheckboxIndicator } from "./CheckboxIndicator";

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

      <CheckboxIndicator
        checked={checked}
        indeterminate={indeterminate}
        error={error}
      />

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
