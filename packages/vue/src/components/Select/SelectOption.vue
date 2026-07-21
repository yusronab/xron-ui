<script setup lang="ts">
import { ref } from "vue";
import { cn } from "../../utils";

import type { Option } from "./Select.types";

defineOptions({
  name: "SelectOption",
});

defineProps<{
  option: Option;

  labelKey: string;

  selected: boolean;

  active: boolean;
}>();

const emit = defineEmits<{
  select: [option: Option];
}>();

const buttonRef = ref<HTMLButtonElement>();

defineExpose({
  buttonRef,
});
</script>

<template>
  <button
    ref="buttonRef"
    type="button"
    :class="
      cn(
        'flex w-full items-center px-3 py-2 text-left text-sm transition-colors',
        'hover:bg-gray-100 dark:hover:bg-gray-800',
        selected && 'bg-gray-100 font-medium dark:bg-gray-800',
        active && 'bg-blue-100 dark:bg-blue-900',
      )
    "
    @click="emit('select', option)"
  >
    <slot name="option" :option="option" :selected="selected" :active="active">
      {{ String(option[labelKey]) }}
    </slot>
  </button>
</template>
