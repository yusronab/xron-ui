import { CheckIcon, MinusIcon } from "../../icons";

import { cn } from "../../utils";

import type { CheckboxIndicatorProps } from "./Checkbox.types";

export function CheckboxIndicator({
  checked = false,
  indeterminate = false,
  error,
}: Readonly<CheckboxIndicatorProps>) {
  const selected = checked || indeterminate;

  return (
    <span
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center",
        "border transition-all",

        selected
          ? "border-blue-500 bg-blue-500 text-white"
          : "border-gray-300 bg-white",

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
  );
}
