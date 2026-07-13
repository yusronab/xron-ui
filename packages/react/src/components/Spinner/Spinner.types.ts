import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { spinnerVariants } from "../../variants/spinner";

export interface SpinnerProps
  extends
    HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {}
