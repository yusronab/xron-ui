import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { selectVariants } from "../../variants/select";

export interface SelectOption {
  [key: string]: unknown;
}

export interface SelectProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange">,
    VariantProps<typeof selectVariants> {
  value?: string | number;
  options: SelectOption[];
  labelKey: string;
  valueKey: string;
  placeholder?: string;
  loading?: boolean;
  emptyText?: string;
  loadingText?: string;
  onChange?: (value: string | number, option: SelectOption) => void;
}
