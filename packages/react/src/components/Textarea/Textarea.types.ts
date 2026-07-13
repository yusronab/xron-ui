import type { TextareaHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { textareaVariants } from "../../variants/textarea";

export interface TextareaProps
  extends
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}
