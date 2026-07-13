import { cn, getStringValue } from "../../utils";

import type { SelectOption as Option } from "./Select.types";

type Props = Readonly<{
  option: Option;
  labelKey: string;
  selected: boolean;
  onSelect: (option: Option) => void;
}>;

export function SelectOption({ option, labelKey, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option)}
      className={cn(
        "flex w-full items-center px-3 py-2 text-left text-sm transition-colors",
        "hover:bg-muted",
        selected && "bg-muted font-medium",
      )}
    >
      {getStringValue(option[labelKey])}
    </button>
  );
}
