import type { InputHTMLAttributes, ReactNode } from "react";

export interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size" | "onChange"
> {
  label?: ReactNode;

  error?: boolean;

  onCheckedChange?: (checked: boolean) => void;
}
