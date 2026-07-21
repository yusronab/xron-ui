<script setup lang="ts">
import { computed } from "vue";

import { cn } from "../../utils";
import { inputVariants } from "../../variants/input";

import type { InputProps } from "./Input.types";
import { useInput } from "../../composables/useInput";

defineOptions({
  name: "Input",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<InputProps>(), {
  size: "md",
  rounded: false,
  error: false,
  modelValue: "",
});

const emit = defineEmits<{
  "update:modelValue": [string];
}>();

const { attrs, id, disabled } = useInput();

const classes = computed(() =>
  cn(
    inputVariants({
      size: props.size,
      rounded: props.rounded,
      error: props.error,
    }),
    attrs.class,
  ),
);

function onInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <input
    v-bind="attrs"
    :id="id"
    :value="modelValue"
    :disabled="disabled"
    :class="classes"
    @input="onInput"
  />
</template>
