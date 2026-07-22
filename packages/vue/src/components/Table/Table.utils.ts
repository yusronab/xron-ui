import type { SortDirection, TableRecord } from "./Table.types";

export const renderCellValue = (
  value: unknown,
): string | number | boolean | null => {
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
};

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

export function isRowSelected(
  selectedKeys: Array<string | number>,
  key: string | number,
) {
  return selectedKeys.includes(key);
}

export function getRowKeys(
  data: TableRecord[],
  rowKey: string,
): Array<string | number> {
  return data
    .map((row) => row[rowKey])
    .filter(
      (value): value is string | number =>
        typeof value === "string" || typeof value === "number",
    );
}

export function toggleRowSelection(
  selectedKeys: Array<string | number>,
  key: string | number,
) {
  if (selectedKeys.includes(key)) {
    return selectedKeys.filter((item) => item !== key);
  }

  return [...selectedKeys, key];
}

export function toggleAllRows(
  selectedKeys: Array<string | number>,
  rowKeys: Array<string | number>,
) {
  const allSelected =
    rowKeys.length > 0 && rowKeys.every((key) => selectedKeys.includes(key));

  return allSelected ? [] : [...rowKeys];
}

export function getSelectionState(
  selectedKeys: Array<string | number>,
  rowKeys: Array<string | number>,
) {
  const selectedCount = rowKeys.filter((key) =>
    selectedKeys.includes(key),
  ).length;

  return {
    checked: rowKeys.length > 0 && selectedCount === rowKeys.length,

    indeterminate: selectedCount > 0 && selectedCount < rowKeys.length,
  };
}

export function getRowKey(
  row: TableRecord,
  rowKey: string,
  index: number,
): PropertyKey {
  const value = row[rowKey];

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "symbol"
  ) {
    return value;
  }

  return index;
}
