export interface ButtonProps {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";

  appearance?: "solid" | "outline" | "ghost" | "link";

  size?: "xs" | "sm" | "md" | "lg" | "xl";

  rounded?: boolean;

  fullWidth?: boolean;

  loading?: boolean;

  disabled?: boolean;
}
