import type { Option } from "../Select";

export interface MultiSelectProps {
  modelValue?: Array<string | number>;

  options: Option[];

  labelKey: string;

  valueKey: string;

  placeholder?: string;

  loading?: boolean;

  loadingText?: string;

  emptyText?: string;

  disabled?: boolean;

  error?: boolean;

  rounded?: boolean;

  size?: "sm" | "md" | "lg";
}
