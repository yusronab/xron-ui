import type { InputHTMLAttributes, ReactNode } from "react";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size" | "onChange"
> {
  label?: ReactNode;
  error?: boolean;

  onCheckedChange?: (checked: boolean) => void;
}
