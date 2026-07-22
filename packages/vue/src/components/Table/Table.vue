<script setup lang="ts">
import { computed } from "vue";

import { cn } from "../../utils";

import {
  tableCellVariants,
  tableHeadVariants,
  tableHeaderVariants,
  tableRowVariants,
  tableVariants,
} from "../../variants/table";

import Checkbox from "../Checkbox/Checkbox.vue";
import TableSortButton from "./TableSortButton.vue";

import {
  getNextSortDirection,
  getRowKey,
  getRowKeys,
  getSelectionState,
  isRowSelected,
  renderCellValue,
  toggleAllRows,
  toggleRowSelection,
} from "./Table.utils";

import type { TableProps } from "./Table.types";

defineOptions({
  name: "Table",
});

const props = withDefaults(defineProps<TableProps>(), {
  striped: true,
  emptyText: "No data",
});

const emit = defineEmits<{
  sort: [field: string | undefined, direction: "asc" | "desc" | null];

  selectionChange: [keys: Array<string | number>];
}>();

const rowKeys = computed(() => getRowKeys(props.data, props.rowKey));

const selectionState = computed(() => {
  if (!props.selection) {
    return null;
  }

  return getSelectionState(props.selection.selectedRowKeys, rowKeys.value);
});

const columnCount = computed(
  () => props.columns.length + (props.selection ? 1 : 0),
);

function handleSort(field: string) {
  if (!props.sorting) {
    return;
  }

  const direction = getNextSortDirection(
    props.sorting.field === field ? props.sorting.direction : null,
  );

  emit("sort", direction ? field : undefined, direction);
}

function toggleAllSelection() {
  if (!props.selection) {
    return;
  }

  emit(
    "selectionChange",
    toggleAllRows(props.selection.selectedRowKeys, rowKeys.value),
  );
}

function toggleSelection(key: string | number) {
  if (!props.selection) {
    return;
  }

  emit(
    "selectionChange",
    toggleRowSelection(props.selection.selectedRowKeys, key),
  );
}
</script>

<template>
  <div class="w-full overflow-x-auto">
    <table :class="tableVariants()">
      <thead :class="tableHeaderVariants()">
        <tr>
          <th v-if="selection && selectionState" :class="tableHeadVariants()">
            <Checkbox
              :checked="selectionState.checked"
              :indeterminate="selectionState.indeterminate"
              @update:model-value="toggleAllSelection"
            />
          </th>

          <th
            v-for="column in columns"
            :key="column.key"
            :style="{
              width: column.width,
            }"
            :class="
              cn(
                tableHeadVariants(),
                column.align === 'center' && 'text-center',
                column.align === 'right' && 'text-right',
              )
            "
          >
            <TableSortButton
              v-if="column.sortable"
              :active="sorting?.field === column.key"
              :direction="sorting?.direction"
              @click="handleSort(column.key)"
            >
              <slot :name="`header-${column.key}`" :column="column">
                {{ column.title }}
              </slot>
            </TableSortButton>

            <template v-else>
              <slot :name="`header-${column.key}`" :column="column">
                {{ column.title }}
              </slot>
            </template>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="data.length === 0">
          <td
            :colspan="columnCount"
            :class="
              cn(
                tableCellVariants(),
                'py-10 text-center text-gray-600 dark:text-gray-200',
              )
            "
          >
            <slot name="empty">
              {{ emptyText }}
            </slot>
          </td>
        </tr>

        <tr
          v-for="(row, rowIndex) in data"
          v-else
          :key="getRowKey(row, rowKey, rowIndex)"
          :class="
            tableRowVariants({
              striped,
            })
          "
        >
          <td v-if="selection" :class="tableCellVariants()">
            <Checkbox
              :model-value="
                isRowSelected(
                  selection.selectedRowKeys,
                  row[rowKey] as string | number,
                )
              "
              @update:model-value="
                toggleSelection(row[rowKey] as string | number)
              "
            />
          </td>

          <td
            v-for="column in columns"
            :key="column.key"
            :class="
              cn(
                tableCellVariants(),
                column.align === 'center' && 'text-center',
                column.align === 'right' && 'text-right',
              )
            "
          >
            <slot
              :name="column.key"
              :value="row[column.key]"
              :record="row"
              :index="rowIndex"
            >
              {{ renderCellValue(row[column.key]) }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
