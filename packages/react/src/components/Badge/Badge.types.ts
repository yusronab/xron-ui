import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { badgeVariants } from "../../variants/badge";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  outline?: boolean;
}
