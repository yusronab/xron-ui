import type { ButtonProps } from "../Button";

export interface PaginationProps {
  page: number;

  pageSize: number;

  total: number;

  siblingCount?: number;

  buttonVariant?: ButtonProps["variant"];

  buttonSize?: ButtonProps["size"];

  buttonRounded?: ButtonProps["rounded"];
}
