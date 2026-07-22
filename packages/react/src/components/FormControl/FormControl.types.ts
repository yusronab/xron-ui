import type { HTMLAttributes, ReactNode } from "react";

export interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;

  label?: ReactNode;

  helperText?: ReactNode;

  required?: boolean;

  error?: boolean;
}
