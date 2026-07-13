import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { inputVariants } from "../../variants/input";

export interface InputProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}
