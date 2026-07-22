<script setup lang="ts">
import { Select } from "../Select";

import type { PageSizeProps } from "./PageSize.types";

defineOptions({
  name: "PageSize",
});

withDefaults(defineProps<PageSizeProps>(), {
  options: () => [
    {
      label: "10",
      value: 10,
    },
    {
      label: "20",
      value: 20,
    },
    {
      label: "50",
      value: 50,
    },
    {
      label: "100",
      value: 100,
    },
  ],
});

const emit = defineEmits<{
  "update:modelValue": [number];
  change: [number];
}>();
</script>

<template>
  <div class="flex items-center gap-2">
    <slot name="prefix" />

    <Select
      aria-label="Page size"
      :model-value="modelValue"
      :options="options"
      labelKey="label"
      valueKey="value"
      :placeholder="placeholder"
      :loading="loading"
      :loading-text="loadingText"
      :empty-text="emptyText"
      :disabled="disabled"
      :error="error"
      :rounded="rounded"
      :size="size"
      @update:model-value="(value) => emit('update:modelValue', Number(value))"
      @change="(value) => emit('change', Number(value))"
    />

    <slot name="suffix" />
  </div>
</template>
