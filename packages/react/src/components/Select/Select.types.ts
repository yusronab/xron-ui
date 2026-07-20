import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import { selectVariants } from "../../variants/select";

export interface SelectOption {
  [key: string]: unknown;
}

export interface RenderOptionState {
  selected: boolean;
  active: boolean;
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

  renderOption?: (option: SelectOption, state: RenderOptionState) => ReactNode;

  renderValue?: (option: SelectOption | undefined) => ReactNode;

  onChange?: (value: string | number, option: SelectOption) => void;
}
