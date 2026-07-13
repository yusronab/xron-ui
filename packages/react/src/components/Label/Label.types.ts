import type { LabelHTMLAttributes } from "react";

export interface LabelProps extends Omit<
  LabelHTMLAttributes<HTMLLabelElement>,
  "htmlFor"
> {
  htmlFor: string;
}
