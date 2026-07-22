export type TooltipPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "left"
  | "right";

export interface TooltipProps {
  content: string;

  position?: TooltipPosition;

  delay?: number;

  offset?: number;

  disabled?: boolean;

  arrow?: boolean;

  size?: "sm" | "md" | "lg";
}
