<script setup lang="ts">
import { computed } from "vue";

import { CheckIcon, MinusIcon } from "../../icons";
import { cn } from "../../utils";

interface CheckboxIndicatorProps {
  checked?: boolean;
  indeterminate?: boolean;
  error?: boolean;
}

const props = withDefaults(defineProps<CheckboxIndicatorProps>(), {
  checked: false,
  indeterminate: false,
  error: false,
});

const classes = computed(() => {
  const selected = props.checked || props.indeterminate;

  return cn(
    "flex h-5 w-5 shrink-0 items-center justify-center",
    "border transition-all",
    selected
      ? "border-blue-500 bg-blue-500 text-white"
      : "border-gray-300 bg-white",
    props.error && !selected && "border-red-500",
    "dark:border-gray-600",
    "dark:bg-gray-900",
    "rounded",
  );
});
</script>

<template>
  <span :class="classes">
    <MinusIcon v-if="indeterminate" class="h-3.5 w-3.5" />

    <CheckIcon
      v-else
      :class="
        cn(
          'transition-all',
          checked ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
        )
      "
    />
  </span>
</template>
