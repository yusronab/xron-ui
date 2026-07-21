export interface Option {
  [key: string]: unknown;
}

export interface RenderOptionState {
  selected: boolean;
  active: boolean;
}

export interface SelectProps {
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
}
