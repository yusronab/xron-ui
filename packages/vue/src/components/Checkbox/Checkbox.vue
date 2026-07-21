<script setup lang="ts">
import { ref, watch, useAttrs } from "vue";

import { cn } from "../../utils";

import CheckboxIndicator from "./CheckboxIndicator.vue";

import type { CheckboxProps } from "./Checkbox.types";

defineOptions({
  name: "Checkbox",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  disabled: false,
  error: false,
  indeterminate: false,
});

const emit = defineEmits<{
  "update:modelValue": [boolean];
}>();

const attrs = useAttrs();

const inputRef = ref<HTMLInputElement>();

watch(
  () => props.indeterminate,
  (value) => {
    if (inputRef.value) {
      inputRef.value.indeterminate = value;
    }
  },
  {
    immediate: true,
  },
);

function onChange(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).checked);
}
</script>

<template>
  <label
    :class="
      cn(
        'inline-flex items-center gap-3',
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
        attrs.class,
      )
    "
  >
    <input
      ref="inputRef"
      type="checkbox"
      class="peer sr-only"
      :checked="modelValue"
      :disabled="disabled"
      @change="onChange"
    />

    <CheckboxIndicator
      :checked="modelValue"
      :indeterminate="indeterminate"
      :error="error"
    />

    <span
      v-if="label || $slots.default"
      class="text-sm text-gray-900 dark:text-gray-100"
    >
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>
