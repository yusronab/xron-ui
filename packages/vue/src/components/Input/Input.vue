<script setup lang="ts">
import { computed, useAttrs, useId } from "vue";

import { cn } from "../../utils";
import { inputVariants } from "../../variants/input";

import type { InputProps } from "./Input.types";

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

const attrs = useAttrs();

const generatedId = useId();

const inputId = computed(() => (attrs.id as string | undefined) ?? generatedId);

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
  <!-- NOSONAR -->
  <input
    v-bind="attrs"
    :id="inputId"
    :value="modelValue"
    :class="classes"
    @input="onInput"
  />
</template>
