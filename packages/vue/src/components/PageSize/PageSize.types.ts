import type { Option } from "../Select";

export interface PageSizeProps {
  modelValue: number;

  options?: Option[];

  placeholder?: string;

  loading?: boolean;

  loadingText?: string;

  emptyText?: string;

  disabled?: boolean;

  error?: boolean;

  rounded?: boolean;

  size?: "sm" | "md" | "lg";
}
