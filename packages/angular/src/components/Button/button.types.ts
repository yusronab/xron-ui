export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";

export type ButtonAppearance = "solid" | "outline" | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;

  appearance?: ButtonAppearance;

  size?: ButtonSize;

  rounded?: boolean;

  fullWidth?: boolean;

  loading?: boolean;

  disabled?: boolean;
}
