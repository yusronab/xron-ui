import type { SortDirection } from "./Table.types";

export function renderCellValue(value: unknown) {
  if (value == null) {
    return "";
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return value;
  }

  return null;
}

export function getNextSortDirection(direction?: SortDirection): SortDirection {
  switch (direction) {
    case null:
    case undefined:
      return "asc";

    case "asc":
      return "desc";

    case "desc":
      return null;
  }
}

export function isRowSelected<T>(selectedKeys: readonly T[], key: T) {
  return selectedKeys.includes(key);
}

export function getRowKeys<
  T extends object,
  K extends keyof T,
>(data: readonly T[], rowKey: K): T[K][] {
  return data.map((row) => row[rowKey]);
}

export function toggleRowSelection<T>(selectedKeys: readonly T[], key: T): T[] {
  if (selectedKeys.includes(key)) {
    return selectedKeys.filter((item) => item !== key);
  }

  return [...selectedKeys, key];
}

export function toggleAllRows<T>(
  selectedKeys: readonly T[],
  rowKeys: readonly T[],
): T[] {
  const allSelected =
    rowKeys.length > 0 && rowKeys.every((key) => selectedKeys.includes(key));

  return allSelected ? [] : [...rowKeys];
}

export function getSelectionState<T>(
  selectedKeys: readonly T[],
  rowKeys: readonly T[],
) {
  const selectedCount = rowKeys.filter((key) =>
    selectedKeys.includes(key),
  ).length;

  return {
    checked: rowKeys.length > 0 && selectedCount === rowKeys.length,

    indeterminate: selectedCount > 0 && selectedCount < rowKeys.length,
  };
}
