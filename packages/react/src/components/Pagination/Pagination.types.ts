import { ButtonProps } from "../Button";
import { ComponentPropsWithoutRef } from "react";

export interface PaginationProps extends Omit<
  ComponentPropsWithoutRef<"nav">,
  "onChange"
> {
  page: number;

  pageSize: number;

  total: number;

  siblingCount?: number;

  onPageChange(page: number): void;

  onPageSizeChange?(pageSize: number): void;

  className?: string;

  buttonVariant?: NonNullable<ButtonProps["variant"]>;

  buttonSize?: NonNullable<ButtonProps["size"]>;

  buttonRounded?: NonNullable<ButtonProps["rounded"]>;
}
