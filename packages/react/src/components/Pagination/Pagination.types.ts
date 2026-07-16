import type { VariantProps } from "class-variance-authority";

import { paginationItemVariants } from "../../variants/pagination";

export interface PaginationProps extends VariantProps<
  typeof paginationItemVariants
> {
  page: number;

  pageSize: number;

  total: number;

  siblingCount?: number;

  onPageChange(page: number): void;

  onPageSizeChange?(pageSize: number): void;

  className?: string;
}
