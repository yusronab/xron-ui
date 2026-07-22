<script setup lang="ts">
import { computed } from "vue";

import { cn } from "../../utils";

import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from "../../icons";

import type { SortDirection } from "./Table.types";

defineOptions({
  name: "TableSortButton",
});

const props = defineProps<{
  active: boolean;

  direction?: SortDirection;
}>();

const icon = computed(() => {
  if (!props.active || props.direction == null) {
    return ChevronsUpDownIcon;
  }

  if (props.direction === "asc") {
    return ChevronUpIcon;
  }

  return ChevronDownIcon;
});
</script>

<template>
  <button
    type="button"
    :class="
      cn(
        'inline-flex items-center gap-2',
        'font-semibold',
        'transition-colors',
        'hover:text-blue-600',
        'focus:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-blue-500/30',
      )
    "
  >
    <span>
      <slot />
    </span>

    <component :is="icon" />
  </button>
</template>
