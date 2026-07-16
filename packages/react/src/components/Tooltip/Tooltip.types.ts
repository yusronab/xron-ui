import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { VariantProps } from "class-variance-authority";

import { tooltipVariants } from "../../variants/tooltip";

export type TooltipPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "left"
  | "right";

export interface TooltipProps
  extends
    Omit<HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof tooltipVariants> {
  children: ReactElement;

  content: ReactNode;

  position?: TooltipPosition;

  delay?: number;

  offset?: number;

  disabled?: boolean;

  arrow?: boolean;
}
