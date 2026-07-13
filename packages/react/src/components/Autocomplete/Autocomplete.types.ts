import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { autocompleteVariants } from "../../variants/autocomplete";

export interface AutocompleteOption {
  [key: string]: unknown;
}

export interface AutocompleteProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size">,
    VariantProps<typeof autocompleteVariants> {
  value?: string | number;
  options: AutocompleteOption[];
  labelKey: string;
  valueKey: string;
  loading?: boolean;
  loadingText?: string;
  emptyText?: string;
  clearable?: boolean;
  debounce?: number;

  onSearch?: (keyword: string) => void | Promise<void>;
  onChange?: (value: string | number, option: AutocompleteOption) => void;
}
