import { forwardRef } from "react";

import { Checkbox } from "../Checkbox";

import { cn } from "../../utils";

import {
  tableCellVariants,
  tableHeadVariants,
  tableHeaderVariants,
  tableRowVariants,
  tableVariants,
} from "../../variants/table";

import { TableSortButton } from "./TableSortButton";
import {
  getNextSortDirection,
  getRowKeys,
  getSelectionState,
  isRowSelected,
  renderCellValue,
  toggleAllRows,
  toggleRowSelection,
} from "./Table.utils";

import type { TableProps } from "./Table.types";
import type { ForwardedRef, ReactElement } from "react";

function TableComponent<T extends object, K extends keyof T>(
  {
    columns,
    data,
    rowKey,
    striped = true,
    className,
    sorting,
    selection,
    emptyText,
    ...props
  }: Readonly<TableProps<T, K>>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const rowKeys = getRowKeys(data, rowKey);

  const selectionState = selection
    ? getSelectionState(selection.selectedRowKeys, rowKeys)
    : null;

  const columnCount = columns.length + (selection ? 1 : 0);

  function handleSort(field: keyof T) {
    if (!sorting?.onSort) {
      return;
    }

    const direction = getNextSortDirection(
      sorting.field === field ? sorting.direction : null,
    );

    sorting.onSort(direction ? field : undefined, direction);
  }

  return (
    <div
      ref={ref}
      className={cn("w-full overflow-x-auto", className)}
      {...props}
    >
      <table className={tableVariants()}>
        <thead className={tableHeaderVariants()}>
          <tr>
            {selection && selectionState && (
              <th className={tableHeadVariants()}>
                <Checkbox
                  checked={selectionState.checked}
                  indeterminate={selectionState.indeterminate}
                  onCheckedChange={() =>
                    selection.onChange?.(
                      toggleAllRows(selection.selectedRowKeys, rowKeys),
                    )
                  }
                />
              </th>
            )}

            {columns.map((column) => (
              <th
                key={String(column.key)}
                style={{
                  width: column.width,
                }}
                className={cn(
                  tableHeadVariants(),
                  column.align === "center" && "text-center",
                  column.align === "right" && "text-right",
                )}
              >
                {column.sortable ? (
                  <TableSortButton
                    active={sorting?.field === column.key}
                    direction={sorting?.direction}
                    onClick={() => handleSort(column.key)}
                  >
                    {column.title}
                  </TableSortButton>
                ) : (
                  column.title
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columnCount}
                className={cn(
                  tableCellVariants(),
                  "py-10 text-center text-gray-600",
                )}
              >
                {emptyText ?? "No data"}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => {
              const rowValue = row[rowKey];

              const key =
                typeof rowValue === "string" || typeof rowValue === "number"
                  ? rowValue
                  : rowIndex;

              return (
                <tr
                  key={key}
                  className={tableRowVariants({
                    striped,
                  })}
                >
                  {selection && (
                    <td className={tableCellVariants()}>
                      <Checkbox
                        checked={isRowSelected(
                          selection.selectedRowKeys,
                          rowValue,
                        )}
                        onCheckedChange={() =>
                          selection.onChange?.(
                            toggleRowSelection(
                              selection.selectedRowKeys,
                              rowValue,
                            ),
                          )
                        }
                      />
                    </td>
                  )}

                  {columns.map((column) => {
                    const value = row[column.key];

                    return (
                      <td
                        key={String(column.key)}
                        className={cn(
                          tableCellVariants(),
                          column.align === "center" && "text-center",
                          column.align === "right" && "text-right",
                        )}
                      >
                        {column.render
                          ? column.render(value, row, rowIndex)
                          : renderCellValue(value)}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

TableComponent.displayName = "Table";

type TableComponentType = <T extends object, K extends keyof T = keyof T>(
  props: TableProps<T, K> & {
    ref?: React.Ref<HTMLDivElement>;
  },
) => ReactElement | null;

export const Table = forwardRef(
  TableComponent,
) as unknown as TableComponentType;
