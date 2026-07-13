import type { InputHTMLAttributes, ReactNode } from "react";

export interface SwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size" | "onChange"
> {
  label?: ReactNode;

  error?: boolean;

  size?: "sm" | "md" | "lg";

  onCheckedChange?: (checked: boolean) => void;
}
