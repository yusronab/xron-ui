import type { InputHTMLAttributes, ReactNode } from "react";

export interface CheckboxIndicatorProps {
  checked?: boolean;
  indeterminate?: boolean;
  error?: boolean;
}

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size" | "onChange"
> {
  label?: ReactNode;

  error?: boolean;

  indeterminate?: boolean;

  onCheckedChange?: (checked: boolean) => void;
}
