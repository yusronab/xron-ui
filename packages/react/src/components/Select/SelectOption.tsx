import { cn, getStringValue } from "../../utils";

import type { SelectOption as Option } from "./Select.types";

type Props = Readonly<{
  option: Option;
  labelKey: string;
  selected: boolean;
  active: boolean;

  optionRef?: (node: HTMLButtonElement | null) => void;
  onSelect: (option: Option) => void;
}>;

export function SelectOption({
  option,
  labelKey,
  selected,
  active,
  optionRef,
  onSelect,
}: Props) {
  return (
    <button
      ref={optionRef}
      type="button"
      onClick={() => onSelect(option)}
      className={cn(
        "flex w-full items-center px-3 py-2 text-left text-sm transition-colors",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        selected && "bg-gray-100 dark:bg-gray-800 font-medium",
        active && "bg-blue-100 dark:bg-blue-900",
      )}
    >
      {getStringValue(option[labelKey])}
    </button>
  );
}
