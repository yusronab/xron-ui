import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { inputVariants } from "../../variants/input";

export interface InputPasswordProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size">,
    VariantProps<typeof inputVariants> {}
