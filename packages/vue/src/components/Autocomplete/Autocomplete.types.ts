import type { Option } from "../Select";

export interface AutocompleteProps {
  modelValue?: string | number;

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

  clearable?: boolean;

  debounce?: number;

  clearIconClass?: string;

  onSearch?: (keyword: string) => void | Promise<void>;
}
