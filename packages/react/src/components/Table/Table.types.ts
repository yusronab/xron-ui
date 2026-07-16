import type { HTMLAttributes, ReactNode } from "react";

export type SortDirection = "asc" | "desc" | null;

export interface TableColumn<T extends object> {
  key: keyof T;

  title: ReactNode;

  width?: string | number;

  align?: "left" | "center" | "right";

  sortable?: boolean;

  render?(value: T[keyof T], record: T, index: number): ReactNode;
}

export interface TableSorting<T extends object> {
  field?: keyof T;

  direction?: SortDirection;

  onSort?(field?: keyof T, direction?: SortDirection): void;
}

export interface TableSelection<T extends object, K extends keyof T> {
  selectedRowKeys: T[K][];

  onChange?(keys: T[K][]): void;
}

export interface TableProps<
  T extends object,
  K extends keyof T = keyof T,
> extends HTMLAttributes<HTMLDivElement> {
  columns: readonly TableColumn<T>[];

  data: readonly T[];

  rowKey: K;

  striped?: boolean;

  sorting?: TableSorting<T>;

  selection?: TableSelection<T, K>;

  emptyText?: ReactNode;
}
