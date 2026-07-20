import type { InputHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import { autocompleteVariants } from "../../variants/autocomplete";
import { SelectOption } from "../Select";
import { RenderOptionState } from "../Select/Select.types";

export interface AutocompleteProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size">,
    VariantProps<typeof autocompleteVariants> {
  value?: string | number;
  options: SelectOption[];
  labelKey: string;
  valueKey: string;
  loading?: boolean;
  loadingText?: string;
  emptyText?: string;
  clearable?: boolean;
  debounce?: number;
  clearIcon?: React.ReactNode;
  clearIconClassName?: string;

  onSearch?: (keyword: string) => void | Promise<void>;
  onChange?: (value: string | number, option: SelectOption) => void;
  renderOption?: (option: SelectOption, state: RenderOptionState) => ReactNode;
}
