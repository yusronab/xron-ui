export interface ButtonProps {
  variant?: "primary" | "secondary" | "success" | "warning" | "error";

  appearance?: "solid" | "outline" | "ghost" | null;

  size?: "sm" | "md" | "lg";

  rounded?: boolean;

  fullWidth?: boolean;

  loading?: boolean;

  disabled?: boolean;
}
