import type { VNode } from "vue";

export type SortDirection = "asc" | "desc" | null;

export interface TableRecord {
  [key: string]: unknown;
}

export interface TableColumn {
  key: string;

  title: string | VNode;

  width?: string | number;

  align?: "left" | "center" | "right";

  sortable?: boolean;
}

export interface TableSorting {
  field?: string;

  direction?: SortDirection;
}

export interface TableSelection {
  selectedRowKeys: Array<string | number>;
}

export interface TableProps {
  columns: TableColumn[];

  data: TableRecord[];

  rowKey: string;

  striped?: boolean;

  sorting?: TableSorting;

  selection?: TableSelection;

  emptyText?: string;
}
