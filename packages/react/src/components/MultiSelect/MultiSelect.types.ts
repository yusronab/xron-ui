import { ButtonHTMLAttributes, ReactNode } from "react";

import { VariantProps } from "class-variance-authority";
import { selectVariants } from "../../variants/select";
import { SelectOption } from "../Select";
import { RenderOptionState } from "../Select/Select.types";

export interface MultiSelectProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value" | "onChange">,
    VariantProps<typeof selectVariants> {
  values?: Array<string | number>;

  options: SelectOption[];

  labelKey: string;

  valueKey: string;

  placeholder?: string;

  loading?: boolean;

  loadingText?: string;

  emptyText?: string;

  renderOption?: (option: SelectOption, state: RenderOptionState) => ReactNode;

  renderValue?: (options: SelectOption[]) => ReactNode;

  onChange?: (values: Array<string | number>, options: SelectOption[]) => void;
}
