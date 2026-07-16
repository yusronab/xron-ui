import type { SelectOption, SelectProps } from "../Select";

export interface PageSizeProps extends Omit<
  SelectProps,
  | "options"
  | "value"
  | "onChange"
  | "labelKey"
  | "valueKey"
  | "prefix"
  | "suffix"
> {
  value: number;

  options?: SelectOption[];

  prefix?: React.ReactNode;

  suffix?: React.ReactNode;

  onChange?(value: number): void;
}
