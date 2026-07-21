<script setup lang="ts">
import { ref, watch } from "vue";

import { cn } from "../../utils";
import { useInput } from "../../composables/useInput";

import CheckboxIndicator from "./CheckboxIndicator.vue";

import type { CheckboxProps } from "./Checkbox.types";

defineOptions({
  name: "Checkbox",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  error: false,
  indeterminate: false,
});

const emit = defineEmits<{
  "update:modelValue": [boolean];
}>();

const { attrs, id, disabled } = useInput();

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
  <div
    :class="
      cn(
        'inline-flex items-center gap-3',
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
        attrs.class,
      )
    "
  >
    <input
      :id="id"
      ref="inputRef"
      v-bind="attrs"
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
      v-if="$slots.default"
      class="text-sm text-gray-900 dark:text-gray-100"
    >
      <slot />
    </span>
  </div>
</template>
